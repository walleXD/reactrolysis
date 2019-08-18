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

import rootReducer from './rootReducer'
import { isDevelopment, isRenderer } from '../env'

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
    : [triggerAlias, ...middlewares, forwardToRenderer]

const enhancer = composeWithDevTools(
  applyMiddleware(...generateMiddlewares())
)

const initialState = isRenderer
  ? getInitialStateRenderer()
  : {}

const store = createStore(
  rootReducer(history),
  initialState,
  enhancer
)

export default store
