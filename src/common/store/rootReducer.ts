import { combineReducers } from 'redux'
import { counterReducer } from '../features/counter'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const rootReducer = combineReducers({
  counter: counterReducer
})

export default rootReducer
