import React, { ReactElement } from 'react'
import { Button, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'AppReduxTypes'

import { counterActions } from '../../../common/features/counter'

const LoadCounter = (): ReactElement => {
  const dispatch = useDispatch()

  const count = useSelector<RootState, number>(
    (state): number => state.counter
  )

  return (
    <>
      <Typography>{count}</Typography>
      <Button
        onClick={(): void => {
          dispatch(counterActions.add())
        }}
      >
        Add
      </Button>
      <Button
        onClick={(): void => {
          dispatch(counterActions.substract())
        }}
      >
        Substract
      </Button>
    </>
  )
}

export default LoadCounter
