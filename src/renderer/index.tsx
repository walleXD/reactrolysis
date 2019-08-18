import 'typeface-roboto/index.css'
import { render } from 'react-dom'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { replayActionRenderer } from 'electron-redux'

import store from '@common/store'
import App from './containers/App'

/**
 * fn rendering the App
 */
const renderApp = (): void =>
  render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    document.getElementById('app')
  )

/** renders App */
renderApp()

/** connects renderer redux store w/ store in main process */
replayActionRenderer(store)

if (module.hot) {
  module.hot.accept('./containers/App.tsx', (): void =>
    renderApp()
  )
}
