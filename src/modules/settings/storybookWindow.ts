import { BrowserWindow } from 'electron'
import windowStateKeeper from 'electron-window-state'

import { isDevelopment as isDev } from '@common/env'

/**
 * creates the main entry into the app
 * @returns `BrowserWindow`
 */
export default (): BrowserWindow => {
  if (!isDev)
    throw new Error(
      'Can only be created during development'
    )

  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
    file: 'storybookWindowState'
  })

  const window = new BrowserWindow({
    show: false,
    minHeight: 600,
    minWidth: 800,
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height
  })

  mainWindowState.manage(window)

  window.loadURL(`http://localhost:9001`)

  window.once('ready-to-show', (): void => {
    window.show()
    window.focus()
  })

  return window
}
