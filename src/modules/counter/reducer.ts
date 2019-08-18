import { createReducer } from 'typesafe-actions'
import { add, subtract } from './actions'

export const counterReducer = createReducer(0)
  .handleAction(add, (state): number => state + 1)
  .handleAction(
    subtract,
    (state: number): number => state - 1
  )
