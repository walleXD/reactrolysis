import { createStandardAction } from 'typesafe-actions'
import { createAliasedAction } from 'electron-redux'

export const add = createStandardAction('counter/NEW_ADD')()

export const _addDelay = createStandardAction(
  'counter/ADD_DELAY'
)()

export const addDelay = createAliasedAction(
  'counter/ADD_DELAY',
  () => _addDelay()
)

export const subtract = createStandardAction(
  'counter/SUBTRACT'
)()
