import React, { ReactElement } from 'react'
import {
  Box,
  makeStyles,
  CircularProgress
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.paper,
    height: '100vh'
  },
  progress: {
    margin: theme.spacing(2)
  }
}))

/** used while loading a page */
const LoadingPage = (): ReactElement => {
  const { root, progress } = useStyles()

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexGrow="1"
      className={root}
    >
      <CircularProgress
        className={progress}
        color="secondary"
        size={100}
      />
    </Box>
  )
}

export default LoadingPage
