import React, { ReactElement } from 'react'
import { Global } from '@emotion/core'

const ElectronResetCSS = (): ReactElement => (
  <Global
    styles={{
      body: {
        margin: 0
      },
      html: {
        WebkitUserSelect: 'none',
        WebkitUserDrag: 'none',
        cursor: 'default'
      },
      'input, textarea, select, button, img': {
        WebkitUserDrag: 'none'
      },
      '.draggable': { WebkitAppRegion: 'drag' },
      '.selectable': {
        WebkitUserSelect: 'auto',
        cursor: 'auto'
      }
    }}
  />
)

export default ElectronResetCSS
