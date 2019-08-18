import React, { ReactElement } from 'react'
import {
  ThemeProvider as MuiProvider,
  makeStyles
} from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { ConnectedRouter as Router } from 'connected-react-router'
import { useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { RootState } from 'AppReduxTypes'
import { history, persistor } from '@common/store'

import Head from '../components/Head'
import LoadingPage from '../components/LoadingPage'
import Pages from '../pages'
import { light, dark } from '../utils/theme'

/** global style reset for electron */
const useStyles = makeStyles({
  '@global': {
    html: {
      WebkitUserSelect: 'none',
      WebkitUserDrag: 'none',
      cursor: 'default'
    },
    'input, textarea, select, button, img': {
      WebkitUserDrag: 'none'
    }
  }
})

/**
 * Main entry into the App
 */
const App = (): ReactElement => {
  useStyles()

  const isDark = useSelector<RootState, boolean>(
    (state): boolean => state.theme.isDark
  )

  return (
    <MuiProvider theme={isDark ? dark : light}>
      <Head />
      <CssBaseline />
      <PersistGate
        loading={<LoadingPage />}
        persistor={persistor}
      >
        <Router history={history}>
          <Pages />
        </Router>
      </PersistGate>
    </MuiProvider>
  )
}

export default App
