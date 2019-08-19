import { createStandardAction } from 'typesafe-actions'
import { createAliasedAction } from 'electron-redux'
import { systemPreferences } from 'electron'

/** toggle theme between dark and light */
export const toggle = createStandardAction('theme/TOGGLE')()

/** set dark theme */
export const setDark = createStandardAction(
  'theme/SET_DARK'
)()

/** set light theme */
export const setLight = createStandardAction(
  'theme/SET_Light'
)()

/** set light mode to be auto */
export const setThemeModeAuto = createStandardAction(
  'theme/SET_THEME_MODE_AUTO'
)()

/** set light mode to be user */
export const setThemeModeUser = createStandardAction(
  'theme/SET_THEME_MODE_USER'
)()

/**
 * checks and sets based on OS theme. Fires from renderer but
 * runs on the main thread
 */
export const setNativeTheme = createAliasedAction(
  'SET_NATIVE_THEME',
  () =>
    systemPreferences.isDarkMode() ? setDark() : setLight()
)
