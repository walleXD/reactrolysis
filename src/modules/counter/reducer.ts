import { createReducer } from 'typesafe-actions'
import { add, subtract } from './actions'

export type CounterState = Readonly<number>

const initialState: CounterState = 0

export const counterReducer = createReducer(initialState)
  .handleAction(add, (state): number => state + 1)
  .handleAction(
    subtract,
    (state: number): number => state - 1
  )
