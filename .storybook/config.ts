import 'typeface-roboto/index.css'
import { configure, addDecorator } from '@storybook/react'

import { light, dark } from '@renderer/utils/theme'
import withMui from './muiDecorator'

addDecorator(
  withMui([
    { name: 'dark', theme: dark },
    { name: 'light', theme: light }
  ], 'light')
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
