import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Footer from '../Footer'

describe(`<Footer />`, (): void => {
  test('renders w/o crashing', (): void => {
    const div = document.createElement('div')
    render(<Footer />, div)
    unmountComponentAtNode(div)
  })
})
