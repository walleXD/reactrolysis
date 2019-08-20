import { Epic } from 'redux-observable'
import { tap, ignoreElements, filter } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { BrowserWindow } from 'electron'

import { RootAction, RootState } from 'AppReduxTypes'
import { _openStorybookWindow } from './actions'
import createStorybookWindow from './storybookWindow'

let storybookWindow: BrowserWindow | null = null

const storybookWindowEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = action$ =>
  action$.pipe(
    filter(isActionOf(_openStorybookWindow)),
    tap(() => {
      storybookWindow = createStorybookWindow()
      storybookWindow.on('closed', () => {
        if (storybookWindow) storybookWindow.destroy()
        storybookWindow = null
      })
    }),
    ignoreElements()
  )

export default [storybookWindowEpic]
