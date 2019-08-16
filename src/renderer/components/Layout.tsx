import React, { FC, ReactNode, ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import { Box } from '@material-ui/core'

interface Props {
  title?: string
  children: ReactNode
}

/**
 * @props `title` displayed with layout
 * @props `children` rendered in layout
 */
const Layout: FC<Props> = ({
  title,
  children
}): ReactElement => (
  <Box
    display="flex"
    flexDirection="column"
    style={{
      height: '100vh'
    }}
  >
    <Helmet title={title} />
    <Box component="header">header</Box>
    <Box flexGrow="1" component="main">
      {children}
    </Box>
    <Box component="footer">footer</Box>
  </Box>
)

export default Layout
