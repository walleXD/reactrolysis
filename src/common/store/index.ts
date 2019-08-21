import {
  createStore,
  applyMiddleware,
  Middleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { routerMiddleware as createConnectedMiddleware } from 'connected-react-router'
import { createMemoryHistory } from 'history'
import {
  forwardToRenderer,
  triggerAlias,
  forwardToMain,
  getInitialStateRenderer
} from 'electron-redux'
import createNodeLogger from 'redux-cli-logger'
import { persistReducer } from 'redux-persist'
import createElectronStorage from 'redux-persist-electron-storage'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from './rootEpic'
import rootReducer from './rootReducer'
import { isDevelopment, isRenderer } from '../env'
import { RootAction, RootState } from 'AppReduxTypes'
import { BehaviorSubject } from 'rxjs'

const epic$ = new BehaviorSubject(rootEpic)
const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState
>()

export const history = createMemoryHistory()
const connectRouterMiddleware = createConnectedMiddleware(
  history
)

/** configure dev middlewares */
const devMiddlewares: Middleware[] = [
  isRenderer
    ? logger
    : createNodeLogger({
        prevColor: 'red',
        actionColor: 'white',
        nextColor: 'green'
      })
]

/** configure production middlewares */
const middlewares: Middleware[] = [
  connectRouterMiddleware,
  ...(isDevelopment ? devMiddlewares : [])
]

/** generate dev middlewares */
const generateMiddlewares = (): Middleware[] =>
  isRenderer
    ? [forwardToMain, ...middlewares]
    : [
        triggerAlias,
        ...middlewares,
        epicMiddleware,
        forwardToRenderer
      ]

const enhancer = composeWithDevTools(
  applyMiddleware(...generateMiddlewares())
)

const initialState = isRenderer
  ? getInitialStateRenderer()
  : {}

const persistConfig = {
  key: 'root',
  storage: createElectronStorage(),
  blacklist: ['router']
}

/** generate store for the right env */
const store = isRenderer
  ? createStore(
      rootReducer(history),
      initialState,
      enhancer
    )
  : createStore(
      persistReducer(persistConfig, rootReducer(history)),
      initialState,
      enhancer
    )

if (!isRenderer) epicMiddleware.run(rootEpic)

export default store

if (module.hot) {
  module.hot.accept('./rootReducer.ts', () => {
    const nextReducer = require('./rootReducer.ts').default
    store.replaceReducer(nextReducer)
  })

  module.hot.accept('./rootEpic.ts', () => {
    const nextRootEpic = require('./rootEpic.ts').rootEpic
    epic$.next(nextRootEpic)
  })
}
