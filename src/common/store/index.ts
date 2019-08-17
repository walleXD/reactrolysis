import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { routerMiddleware as createConnectedMiddleware } from 'connected-react-router'
import { createMemoryHistory } from 'history'

import rootReducer from './rootReducer'
import { isDevelopment } from '../env'

export const history = createMemoryHistory()
const connectRouterMiddleware = createConnectedMiddleware(
  history
)

// configure middlewares
const devMiddlewares = [logger]
const middlewares = [
  connectRouterMiddleware,
  ...(isDevelopment ? devMiddlewares : [])
]

const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares)
)

const initialState = {}

const store = createStore(
  rootReducer(history),
  initialState,
  enhancer
)

export default store

export * from './types'
