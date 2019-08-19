import 'typeface-roboto/index.css'
import { configure, addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'

import { light, dark } from '@renderer/utils/theme'

// @ts-ignore
light.themeName = 'Light'
// @ts-ignore
dark.themeName = 'Dark'

addDecorator(muiTheme([light, dark]))

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
