import React, { ReactElement } from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { ThemeProvider as MuiProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Head from './components/Head'
import Pages from './pages'
import muiTheme from './utils/theme'

const App = (): ReactElement => (
  <MuiProvider theme={muiTheme}>
    <Head />
    <CssBaseline />
    <Router>
      <Pages />
    </Router>
  </MuiProvider>
)

export default App
