import 'typeface-roboto/index.css'
import { render } from 'react-dom'
import React from 'react'

import App from './App'

const renderApp = (): void =>
  render(<App />, document.getElementById('app'))

renderApp()

if (module.hot) {
  module.hot.accept('./App.tsx', (): void => renderApp())
}
