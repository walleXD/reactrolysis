import { createStandardAction } from 'typesafe-actions'
import { Local } from 'AppReduxTypes'

export const add = createStandardAction('counter/ADD')<
  undefined,
  Local
>()

export const subtract = createStandardAction(
  'counter/SUBTRACT'
)<undefined, Local>()

export const delayedAdd = createStandardAction(
  'counter/DELAYED_ADD'
)<undefined, Local>()
