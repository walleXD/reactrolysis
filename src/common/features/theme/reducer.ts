import { createReducer } from 'typesafe-actions'
import { toggle, setDark, setLight } from './actions'
import { combineReducers } from 'redux'

export const isDarkReducer = createReducer(false)
  .handleAction(toggle, (state): boolean => !state)
  .handleAction(setDark, (): boolean => true)
  .handleAction(setLight, (): boolean => false)

export const themeReducer = combineReducers({
  isDark: isDarkReducer
})
