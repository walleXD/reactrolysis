import { createStandardAction } from 'typesafe-actions'

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
