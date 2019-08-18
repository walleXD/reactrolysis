import { createStandardAction } from 'typesafe-actions'

export const add = createStandardAction('counter/ADD')()

export const subtract = createStandardAction(
  'counter/SUBTRACT'
)()
