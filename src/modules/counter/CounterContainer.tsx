import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'AppReduxTypes'
import { add, subtract, delayedAdd } from './actions'
import Counter from './Counter'

const CounterContainer = (): ReactElement => {
  const dispatch = useDispatch()

  const count = useSelector<RootState, number>(
    (state): number => state.counter
  )

  return (
    <Counter
      count={count}
      increment={() =>
        dispatch(add(undefined, { scope: 'local' }))
      }
      decrement={() =>
        dispatch(subtract(undefined, { scope: 'local' }))
      }
      delayedIncrement={() =>
        dispatch(delayedAdd(undefined, { scope: 'local' }))
      }
    />
  )
}

export default CounterContainer
