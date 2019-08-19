import 'typeface-roboto/index.css'
import {
  configure,
  addDecorator,
  addParameters
} from '@storybook/react'
import { themes } from '@storybook/theming'

import { light, dark } from '@renderer/utils/theme'
import withMui from './muiDecorator'

addParameters({
  options: {
    theme: themes.dark
  }
})

addDecorator(
  withMui(
    [
      { name: 'dark', theme: dark },
      { name: 'light', theme: light }
    ],
    'light'
  )
)

// automatically import all files ending in *.stories.tsx
const req = require.context(
  '../src',
  true,
  /\.stories\.tsx$/
)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
