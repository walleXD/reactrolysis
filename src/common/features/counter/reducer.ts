import { createReducer } from 'typesafe-actions'
import { add, substract } from './actions'

export const counterReducer = createReducer(0)
  .handleAction(add, (state: number): number => state + 1)
  .handleAction(
    substract,
    (state: number): number => state - 1
  )
