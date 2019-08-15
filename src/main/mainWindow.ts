import { BrowserWindow } from 'electron'
import windowStateKeeper from 'electron-window-state'
import { format as formatUrl } from 'url'
import { join } from 'path'

import { initDevEnv } from './utils'
import { isDevelopment } from './env'

/**
 * creates the main entry into the app
 * @returns `BrowserWindow`
 */
export default (): BrowserWindow => {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  })

  const window = new BrowserWindow({
    webPreferences: { nodeIntegration: true }
  })

  mainWindowState.manage(window)

  if (isDevelopment) {
    initDevEnv(window)
    window.loadURL(
      `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
    )
  } else {
    window.loadURL(
      formatUrl({
        pathname: join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
      })
    )
  }

  window.webContents.on('devtools-opened', (): void => {
    window.focus()
    setImmediate((): void => {
      window.focus()
    })
  })

  return window
}
