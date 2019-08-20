import { Epic } from 'redux-observable'
import { tap, map, filter, delay } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import { RootAction, RootState } from 'AppReduxTypes'
import { delayedAdd, add } from './actions'

const counterEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = action$ =>
  action$.pipe(
    filter(isActionOf(delayedAdd)),
    tap(() => {
      console.log('hello from delayed add')
    }),
    delay(1000),
    map(() => add(undefined, { scope: 'local' }))
  )

export default [counterEpic]
