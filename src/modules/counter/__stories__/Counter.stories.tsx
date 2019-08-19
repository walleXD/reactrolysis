/* eslint-disable react/display-name */
import React from 'react'
import { storiesOf, RenderFunction } from '@storybook/react'
import { themes } from '@storybook/theming'
import { action } from '@storybook/addon-actions'

import Counter from '../Counter'

const basic: RenderFunction = () => (
  <Counter
    count={0}
    increment={action('gonna add number')}
    decrement={action('gonna decrement')}
  />
)

storiesOf('Counter', module)
  .add('Counter light', basic, {
    mui: 'light',
    options: { theme: themes.light }
  })
  .add('Counter dark', basic, {
    mui: 'dark',
    options: { theme: themes.dark }
  })
