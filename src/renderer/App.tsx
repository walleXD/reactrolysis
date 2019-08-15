import React, { ReactElement } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { MemoryRouter as Router } from 'react-router-dom'

// @ts-ignore
import theme from '@rebass/preset'

import Pages from './pages'
import ResetCSS from './components/ElectronResetCSS'

const App = (): ReactElement => (
  <>
    <ResetCSS />
    <ThemeProvider theme={theme}>
      <Router>
        <Pages />
      </Router>
    </ThemeProvider>
  </>
)

export default App
