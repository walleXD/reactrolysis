/* eslint-disable react/display-name */
import React from 'react'
import { storiesOf, RenderFunction } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Counter from '../Counter'

const darkConfig = {
  mui: 'dark'
}

const lightConfig = {
  mui: 'light'
}

const basic: RenderFunction = () => (
  <Counter
    count={0}
    increment={action('gonna add number')}
    decrement={action('gonna decrement')}
  />
)

storiesOf('Counter', module)
  .add('basic light', basic, lightConfig)
  .add('basic dark', basic, darkConfig)
