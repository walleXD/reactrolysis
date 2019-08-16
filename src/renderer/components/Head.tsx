import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet'

const Head = (): ReactElement => (
  <Helmet defaultTitle="Electron StaterKit">
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    />
  </Helmet>
)

export default Head
