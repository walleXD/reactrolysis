import React, { ReactElement } from 'react'
import { ThemeProvider as MuiProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider as ReduxProvider } from 'react-redux'
import { ConnectedRouter as Router } from 'connected-react-router'

import Head from './components/Head'
import Pages from './pages'
import muiTheme from './utils/theme'
import store, { history } from '../common/store'

const App = (): ReactElement => (
  <ReduxProvider store={store}>
    <MuiProvider theme={muiTheme}>
      <Head />
      <CssBaseline />
      <Router history={history}>
        <Pages />
      </Router>
    </MuiProvider>
  </ReduxProvider>
)

export default App
