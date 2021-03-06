import { makeDecorator } from '@storybook/addons'
import {
  Theme,
  CssBaseline,
  makeStyles
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { find, propEq } from 'ramda'
import React, { PropsWithChildren } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.paper
    }
  }
}))

interface Props {
  children: JSX.Element
}

const Wrapper = ({ children }: PropsWithChildren<Props>) => {
  useStyles({})

  return children
}

interface MuiTheme {
  name: string
  theme: Theme
}

// ToDo: fix the weird way default theme is handled
// ToDo: add ability to pass only one theme
export default (
  options: MuiTheme[],
  defaultThemeName: string = 'default'
) =>
  makeDecorator({
    name: 'withMUI',
    parameterName: 'mui',
    skipIfNoParametersOrOptions: true,
    wrapper: (storyFn, context, { parameters }) => {
      const themeName = parameters || defaultThemeName

      const { theme }: MuiTheme = find(
        propEq('name', themeName)
      )(options)

      console.log(themeName, parameters, defaultThemeName)
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Wrapper>{storyFn(context)}</Wrapper>
        </ThemeProvider>
      )
    }
  })
