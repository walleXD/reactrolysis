import React, { FC, ReactElement } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton
} from '@material-ui/core'
import { ArrowBack, Settings } from '@material-ui/icons'
import {
  withRouter,
  RouteComponentProps
} from 'react-router-dom'

const goBack = (
  path: string,
  history: RouteComponentProps['history']
): void => {
  console.log(path)
  if (path !== '/') history.goBack()
}

const NavBar: FC<RouteComponentProps> = ({
  location: { pathname },
  history
}): ReactElement => (
  <Box flexGrow="1">
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton
          onClick={(): void => goBack(pathname, history)}
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
          onClick={(): void => history.push('/settings')}
        >
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
)

export default withRouter(NavBar)
