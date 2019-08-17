import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import rootReducer from './rootReducer'
import { isDevelopment } from '../../common/env'

// configure middlewares
const devMiddlewares = [logger]
const middlewares = [...(isDevelopment && devMiddlewares)]

const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares)
)

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  enhancer
)

export default store
