import React, { ReactElement } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton
} from '@material-ui/core'
import { ArrowBack, Settings } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { push, goBack } from 'connected-react-router'

import { RootState } from '../../common/store'

const NavBar = (): ReactElement => {
  const pathname = useSelector(
    (state: RootState): string =>
      state.router.location.pathname
  )

  const dispatch = useDispatch()

  const back = (): void => {
    if (pathname !== '/') dispatch(goBack())
  }

  return (
    <Box flexGrow="1">
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            onClick={back}
            disabled={pathname === '/'}
            edge="start"
            color="inherit"
            aria-label="back"
          >
            <ArrowBack />
          </IconButton>
          <Box flexGrow="1">
            <Typography variant="h6" color="inherit">
              Electron StarterKit
            </Typography>
          </Box>

          <IconButton
            disabled={pathname === '/settings'}
            onClick={(): void => {
              dispatch(push('/settings'))
            }}
          >
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
