import { app, BrowserWindow } from 'electron'

import createMainWindow from './mainWindow'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: BrowserWindow | null

const init = (): void => {
  mainWindow = createMainWindow()

  mainWindow.on('closed', (): void => {
    mainWindow = null
  })
}

// quit application when all windows are closed
app.on('window-all-closed', (): void => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', (): void => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) init()
})

// create main BrowserWindow when electron is ready
app.on('ready', (): void => init())

if (module.hot)
  module.hot.accept('./mainWindow.ts', (): void => init())
