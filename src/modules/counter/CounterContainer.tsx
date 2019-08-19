import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'AppReduxTypes'
import { add, subtract } from './actions'
import Counter from './Counter'

const CounterContainer = (): ReactElement => {
  const dispatch = useDispatch()

  const count = useSelector<RootState, number>(
    (state): number => state.counter
  )

  return (
    <Counter
      count={count}
      increment={() => dispatch(add())}
      decrement={() => dispatch(subtract())}
    />
  )
}

export default CounterContainer
