import React, { ReactElement, FC } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton
} from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import {
  Lightbulb,
  LightbulbOutline
} from 'mdi-material-ui'

interface Props {
  pathname: string
  isDark: boolean
  back: () => void
  toggleTheme: () => void
}

/**
 * component for basic navigation & more
 * @props `pathname` current pathname in the router
 * @props `isDark` whether the app is in dark mode
 * @props `back` fn to invoke to go to the previous route
 * @props `toggleTheme` fn to toggle between dark and light theme
 */
const NavBar: FC<Props> = ({
  pathname,
  isDark,
  back,
  toggleTheme
}): ReactElement => {
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
            onClick={toggleTheme}
          >
            {isDark ? <Lightbulb /> : <LightbulbOutline />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
