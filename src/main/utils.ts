import { BrowserWindow, systemPreferences } from 'electron'
import { Store } from 'redux'
import { setDark, setLight } from '@modules/theme/actions'
import { RootState } from 'AppReduxTypes'
import { ThemeMode } from '@modules/theme'

/**
 * Sets up development environment & opens dev tools
 * @param window `BrowserWindow` where devtools will be opened
 */
export const initDevEnv = (window: BrowserWindow): void => {
  // sets up devtron
  require('devtron').install()

  // sets up extensions
  const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS
    // eslint-disable-next-line @typescript-eslint/no-var-requires
  } = require('electron-devtools-installer')

  installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
    .then((name: string): void =>
      console.log(`Added Extension:  ${name}`)
    )
    .catch((err: string): void =>
      console.log('An error occurred: ', err)
    )

  // opens devtools
  window.webContents.openDevTools()
}

export const setTheme = ({
  dispatch,
  getState
}: Store): void => {
  const {
    theme: { themeMode }
  }: RootState = getState()

  if (themeMode === ThemeMode.AUTO)
    systemPreferences.isDarkMode()
      ? dispatch(setDark())
      : dispatch(setLight())
}

export const handleTheming = (store: Store): void => {
  setTheme(store)

  systemPreferences.subscribeNotification(
    'AppleInterfaceThemeChangedNotification',
    () => setTheme(store)
  )
}
