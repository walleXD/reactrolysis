import 'typeface-roboto/index.css'
import { render } from 'react-dom'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../common/store'

import App from './App'

const renderApp = (): void =>
  render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    document.getElementById('app')
  )

renderApp()

if (module.hot) {
  module.hot.accept('./App.tsx', (): void => renderApp())
}
