import React, { ReactElement } from 'react'
import { ThemeProvider as MuiProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ConnectedRouter as Router } from 'connected-react-router'
import { useSelector } from 'react-redux'

import { RootState } from 'AppReduxTypes'

import Head from './components/Head'
import Pages from './pages'
import { light, dark } from './utils/theme'
import { history } from '../common/store'

const App = (): ReactElement => {
  const isDark = useSelector<RootState, boolean>(
    (state): boolean => state.theme.isDark
  )

  return (
    <MuiProvider theme={isDark ? dark : light}>
      <Head />
      <CssBaseline />
      <Router history={history}>
        <Pages />
      </Router>
    </MuiProvider>
  )
}

export default App
