import { Epic } from 'redux-observable'
import { tap, filter, delay, map } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import { RootAction, RootState } from 'AppReduxTypes'
import { add, _addDelay } from './actions'

const counterEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = action$ =>
  action$.pipe(
    filter(isActionOf(_addDelay)),
    tap(() => {
      console.log('hello from delayed add')
    }),
    delay(1000),
    map(add)
  )

export default [counterEpic]
