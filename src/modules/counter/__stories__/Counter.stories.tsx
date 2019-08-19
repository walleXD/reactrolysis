/* eslint-disable react/display-name */
import React from 'react'
import {
  storiesOf,
  RenderFunction,
  DecoratorParameters
} from '@storybook/react'
import { themes } from '@storybook/theming'
import { action } from '@storybook/addon-actions'

import Counter from '../Counter'

type StoryBlock = [RenderFunction, DecoratorParameters?]

const basic: StoryBlock = [
  () => (
    <Counter
      count={0}
      increment={action('gonna add number')}
      decrement={action('gonna decrement')}
    />
  )
]

storiesOf('Counter', module)
  .addParameters({ options: { theme: themes.normal } })
  .add('Counter light', ...basic)
  .addParameters({ options: { theme: themes.dark } })
  .add('Counter dark', ...basic)
