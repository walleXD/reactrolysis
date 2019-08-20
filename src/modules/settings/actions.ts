import { createAliasedAction } from 'electron-redux'
import { createStandardAction } from 'typesafe-actions'

export const _openStorybookWindow = createStandardAction(
  'settings/OPEN_STORYBOOK_WINDOW'
)()

export const openStorybookWindow = createAliasedAction(
  'settings/OPEN_STORYBOOK_WINDOW',
  () => _openStorybookWindow()
)
