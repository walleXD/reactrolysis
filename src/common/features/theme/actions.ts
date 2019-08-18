import { createStandardAction } from 'typesafe-actions'

export const toggle = createStandardAction('theme/TOGGLE')()
export const setDark = createStandardAction(
  'theme/SET_DARK'
)()
export const setLight = createStandardAction(
  'theme/SET_Light'
)()
