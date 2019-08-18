import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'

import NavBar from '../NavBar'

describe(`<NavBar />`, (): void => {
  test('renders title', (): void => {
    const { getByText } = render(
      <NavBar
        isDark={true}
        pathname="/"
        back={jest.fn()}
        toggleTheme={jest.fn()}
      />
    )
    expect(
      getByText('Electron StarterKit')
    ).toBeInTheDocument()
  })
})
