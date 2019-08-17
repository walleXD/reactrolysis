import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme palette for this app
const palette = {
  primary: {
    main: '#556cd6'
  },
  secondary: {
    main: '#19857b'
  },
  error: {
    main: red.A400
  },
  background: {
    default: '#fff'
  }
}

export const light = createMuiTheme({
  palette: {
    ...palette,
    type: 'light'
  }
})

export const dark = createMuiTheme({
  palette: {
    ...palette,
    type: 'dark'
  }
})
