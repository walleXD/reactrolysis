import { app, BrowserWindow } from 'electron'

import createMainWindow from './mainWindow'
import createStorybookWindow from './storybookWindow'

import { isDevelopment } from '@common/env'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: BrowserWindow | null,
  storybookWindow: BrowserWindow | null

// kick starts the main window entry
const init = (): void => {
  mainWindow = createMainWindow()

  mainWindow.on('closed', (): null => (mainWindow = null))
}

const initStorybookWindow = (): void => {
  storybookWindow = createStorybookWindow()
  storybookWindow.on(
    'closed',
    () => (storybookWindow = null)
  )
}

// quit application when all windows are closed
app.on(
  'window-all-closed',
  (): false | void =>
    // on macOS it is common for applications to stay open until the user explicitly quits
    process.platform !== 'darwin' && app.quit()
)

app.on(
  'activate',
  // on macOS it is common to re-create a window even after all windows have been closed
  (): false | void => mainWindow === null && init()
)

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  init()
  if (isDevelopment) initStorybookWindow()
})

if (module.hot)
  module.hot.accept('./mainWindow.ts', () => {
    if (mainWindow !== null) mainWindow.destroy()
    init()
  })
