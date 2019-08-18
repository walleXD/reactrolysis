import React, { ReactElement } from 'react'
import { ThemeProvider as MuiProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ConnectedRouter as Router } from 'connected-react-router'
import { useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { RootState } from 'AppReduxTypes'

import Head from './components/Head'
import Pages from './pages'
import { light, dark } from './utils/theme'
import { history, persistor } from '@common/store'

const App = (): ReactElement => {
  const isDark = useSelector<RootState, boolean>(
    (state): boolean => state.theme.isDark
  )

  // ToDo: Add loading component
  return (
    <MuiProvider theme={isDark ? dark : light}>
      <PersistGate loading={null} persistor={persistor}>
        <Head />
        <CssBaseline />
        <Router history={history}>
          <Pages />
        </Router>
      </PersistGate>
    </MuiProvider>
  )
}

export default App
