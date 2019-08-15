import { BrowserWindow } from 'electron'

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
    REACT_DEVELOPER_TOOLS
    // eslint-disable-next-line @typescript-eslint/no-var-requires
  } = require('electron-devtools-installer')

  installExtension([REACT_DEVELOPER_TOOLS])
    .then((name: string): void =>
      console.log(`Added Extension:  ${name}`)
    )
    .catch((err: string): void =>
      console.log('An error occurred: ', err)
    )

  // opens devtools
  window.webContents.openDevTools()
}
