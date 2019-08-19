import { BrowserWindow } from 'electron'
import windowStateKeeper from 'electron-window-state'
import { format as formatUrl } from 'url'
import { join } from 'path'
import { replayActionMain } from 'electron-redux'

import { isDevelopment } from '@common/env'
import store from '@common/store'

import { initDevEnv, handleTheming } from './utils'

/** loads up redux store on the main thread */
replayActionMain(store)
/** sets up theming pipeline */
handleTheming(store)

/**
 * creates the main entry into the app
 * @returns `BrowserWindow`
 */
export default (): BrowserWindow => {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
    file: 'mainWindowState'
  })

  const window = new BrowserWindow({
    webPreferences: { nodeIntegration: true },
    show: false,
    minHeight: 600,
    minWidth: 800,
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height
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

  window.once('ready-to-show', (): void => window.show())

  return window
}
