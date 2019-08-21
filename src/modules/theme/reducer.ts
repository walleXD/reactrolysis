import { createReducer } from 'typesafe-actions'
import { combineReducers } from 'redux'

import {
  toggle,
  setDark,
  setLight,
  setThemeModeAuto,
  setThemeModeUser
} from './actions'

export const isDarkReducer = createReducer(false)
  .handleAction(toggle, (state): boolean => !state)
  .handleAction(setDark, (): boolean => true)
  .handleAction(setLight, (): boolean => false)

export enum ThemeMode {
  USER = 'USER',
  AUTO = 'AUTO'
}

export const themeModeReducer = createReducer(
  ThemeMode.AUTO
)
  .handleAction(setThemeModeAuto, () => ThemeMode.AUTO)
  .handleAction(setThemeModeUser, () => ThemeMode.USER)

export const themeReducer = combineReducers({
  isDark: isDarkReducer,
  themeMode: themeModeReducer
})
