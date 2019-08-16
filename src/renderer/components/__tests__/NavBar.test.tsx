import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import NavBar from '../NavBar'

describe(`<NavBar />`, (): void => {
  test('renders title', (): void => {
    const { getByText } = render(<NavBar />)
    expect(
      getByText('Electron StarterKit')
    ).toBeInTheDocument()
  })
})
