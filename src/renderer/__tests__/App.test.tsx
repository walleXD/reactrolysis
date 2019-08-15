import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { render } from '@testing-library/react'

import App from '../App'

test('App renders', (): void => {
  const { getByText } = render(<App />)

  expect(getByText('Hello')).toBeInTheDocument()
  console.log(App)
})
