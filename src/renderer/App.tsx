import React, { ReactElement } from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { MemoryRouter as Router } from 'react-router-dom'

import Pages from './pages'

const App = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <Router>
      <Pages />
    </Router>
  </ThemeProvider>
)

export default App
