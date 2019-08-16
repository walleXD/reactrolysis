import React, { FC, ReactNode, ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex } from 'rebass'

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
  <>
    <Helmet
      defaultTitle="Electron StaterKit"
      title={title}
    />
    <Flex
      flexDirection="column"
      css={{
        height: '100vh'
      }}
    >
      <Box as="header">header</Box>
      <Box css={{ flexGrow: 1 }} as="main">
        {children}
      </Box>
      <Box as="footer">footer</Box>
    </Flex>
  </>
)

export default Layout
