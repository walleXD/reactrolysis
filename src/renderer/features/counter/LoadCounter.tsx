import React, { ReactElement } from 'react'
import { Button, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../../../common/features/counter'

const LoadCounter = (): ReactElement => {
  const dispatch = useDispatch()

  const count = useSelector(
    (state: { counter: number }): number => state.counter
  )

  return (
    <>
      <Typography>{count}</Typography>
      <Button
        onClick={(): void => {
          dispatch({ type: counterActions.add })
        }}
      >
        Add
      </Button>
      <Button
        onClick={(): void => {
          dispatch({ type: counterActions.substract })
        }}
      >
        Substract
      </Button>
    </>
  )
}

export default LoadCounter
