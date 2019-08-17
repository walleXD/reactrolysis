import { createStandardAction } from 'typesafe-actions'

export const add = createStandardAction('counter/ADD')()

export const substract = createStandardAction(
  'counter/SUBSTRACT'
)()
