import React, { ReactElement, FC } from 'react'
import {
  Button,
  Typography,
  makeStyles,
  Box
} from '@material-ui/core'

interface Props {
  count: number
  increment: () => void
  decrement: () => void
  delayedIncrement: () => void
}

const useStyles = makeStyles({
  btn: {
    margin: 5
  }
})

const Counter: FC<Props> = ({
  count,
  increment,
  decrement,
  delayedIncrement
}): ReactElement => {
  const { btn } = useStyles({})

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
          onClick={increment}
        >
          Add
        </Button>
        <Button
          className={btn}
          variant="contained"
          color="primary"
          onClick={delayedIncrement}
        >
          Laggy Add
        </Button>
        <Button
          className={btn}
          variant="contained"
          color="secondary"
          onClick={decrement}
        >
          Subtract
        </Button>
      </Box>
    </Box>
  )
}

export default Counter
