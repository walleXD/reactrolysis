/* eslint-disable react/display-name */
// import React from 'react'
import { storiesOf } from '@storybook/react'
import { themes } from '@storybook/theming'

import AllSettings from '../AllSettings'

storiesOf('All Settings Light', module)
  .add('basic light', AllSettings, {
    options: { theme: themes.normal },
    mui: 'light'
  })
  .add('basic dark', AllSettings, {
    mui: 'dark',
    options: { theme: themes.dark }
  })
