import React, { ReactElement } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton
} from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { goBack } from 'connected-react-router'
import {
  Lightbulb,
  LightbulbOutline
} from 'mdi-material-ui'

import { RootState } from '../../common/store'
import { themeActions } from '../../common/features/theme'

const NavBar = (): ReactElement => {
  const pathname = useSelector(
    (state: RootState): string =>
      state.router.location.pathname
  )

  const isDark = useSelector<RootState, boolean>(
    (state): boolean => state.theme.isDark
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
              dispatch(themeActions.toggle())
            }}
          >
            {isDark ? <Lightbulb /> : <LightbulbOutline />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
