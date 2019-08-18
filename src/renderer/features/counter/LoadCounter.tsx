import React, { ReactElement } from 'react'
import {
  Button,
  Typography,
  makeStyles,
  Box
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'AppReduxTypes'

import { counterActions } from '@common/features/counter'

const useStyles = makeStyles({
  btn: {
    margin: 5
  }
})

const LoadCounter = (): ReactElement => {
  const { btn } = useStyles({})

  const dispatch = useDispatch()

  const count = useSelector<RootState, number>(
    (state): number => state.counter
  )

  return (
    <Box display="flex" flexDirection="column" m={5}>
      <Box display="flex" justifyContent="center" p={10}>
        <Typography variant="h1">{count}</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          className={btn}
          variant="contained"
          color="primary"
          onClick={(): void => {
            dispatch(counterActions.add())
          }}
        >
          Add
        </Button>
        <Button
          className={btn}
          variant="contained"
          color="secondary"
          onClick={(): void => {
            dispatch(counterActions.substract())
          }}
        >
          Substract
        </Button>
      </Box>
    </Box>
  )
}

export default LoadCounter
