import { BrowserWindow } from 'electron'

export const initDevEnv = (window: BrowserWindow): void => {
  require('devtron').install()

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
  window.webContents.openDevTools()
}
