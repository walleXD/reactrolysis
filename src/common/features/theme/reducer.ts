import { createReducer } from 'typesafe-actions'
import { toggle } from './actions'
import { combineReducers } from 'redux'

export const isDarkReducer = createReducer(
  false
).handleAction(toggle, (state): boolean => !state)

export const themeReducer = combineReducers({
  isDark: isDarkReducer
})
