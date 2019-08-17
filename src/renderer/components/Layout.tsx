import React, { FC, ReactNode, ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import {
  Box,
  Container,
  Theme,
  makeStyles
} from '@material-ui/core'

import Footer from './Footer'
import NavBar from './NavBar'

interface Props {
  title?: string
  children: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}))

/**
 * @props `title` displayed with layout
 * @props `children` rendered in layout
 */
const Layout: FC<Props> = ({
  title,
  children
}): ReactElement => {
  const classes = useStyles({})

  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        height: '100vh'
      }}
      className={classes.root}
    >
      <Helmet title={title} />

      <Box component="header">
        <NavBar />
      </Box>

      <Box flexGrow="1" component="main">
        <Container>{children}</Container>
      </Box>

      <Box component="footer">
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
