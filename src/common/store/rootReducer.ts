import { combineReducers } from 'redux'
import { counterReducer } from '../features/counter'
import { connectRouter } from 'connected-react-router'
import { MemoryHistory } from 'history'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const rootReducer = (history: MemoryHistory) =>
  combineReducers({
    counter: counterReducer,
    router: connectRouter(history)
  })

export default rootReducer
