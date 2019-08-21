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
import { persistStore, persistReducer } from 'redux-persist'
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

// configure middlewares
const devMiddlewares = [
  isRenderer
    ? logger
    : createNodeLogger({
        prevColor: 'red',
        actionColor: 'white',
        nextColor: 'green'
      })
]

const middlewares = [
  connectRouterMiddleware,
  ...(isDevelopment ? devMiddlewares : [])
]

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

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer(history)
)

const store = createStore(
  persistedReducer,
  initialState,
  enhancer
)

if (!isRenderer) epicMiddleware.run(rootEpic)

export const persistor = persistStore(store)
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
