/* eslint-disable react/display-name */
import React from 'react'
import {
  storiesOf,
  RenderFunction,
  DecoratorParameters
} from '@storybook/react'
import { themes } from '@storybook/theming'

import AllSettings from '../AllSettings'

const basic: [RenderFunction, DecoratorParameters] = [
  () => <AllSettings />,
  {
    notes: 'A very simple component'
  }
]

storiesOf('All Settings Light', module)
  .addParameters({ options: { theme: themes.normal } })
  .add('basic light', ...basic)
  .addParameters({ options: { theme: themes.dark } })
  .add('basic dark', ...basic)
