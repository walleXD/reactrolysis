import React, { FC, ReactNode, ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import {
  Box,
  Container,
  Theme,
  makeStyles
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { goBack, push } from 'connected-react-router'

import { RootState } from 'AppReduxTypes'
import { themeActions } from '@modules/theme'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

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
 * unified layout component
 * @props `title` displayed with layout
 * @props `children` rendered in layout
 */
const Layout: FC<Props> = ({
  title,
  children
}): ReactElement => {
  const classes = useStyles({})
  const dispatch = useDispatch()

  const pathname = useSelector(
    (state: RootState): string =>
      state.router.location.pathname
  )

  const isDark = useSelector<RootState, boolean>(
    (state): boolean => state.theme.isDark
  )

  const back = (): void => {
    if (pathname !== '/') dispatch(goBack())
  }

  const go = (path: string): void => {
    dispatch(push(path))
  }

  const toggleTheme = (): void => {
    dispatch(themeActions.toggle())
  }

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
        <NavBar
          go={go}
          isDark={isDark}
          pathname={pathname}
          back={back}
          toggleTheme={toggleTheme}
        />
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
