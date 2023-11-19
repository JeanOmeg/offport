import { app, BrowserWindow } from 'electron'
import path from 'path'
import os from 'os'

const platform = process.platform || os.platform()

let mainWindow: BrowserWindow | undefined

function createWindow () {
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'),
    width: 1360,
    height: 768,
    show: false,
    autoHideMenuBar: true,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow?.webContents.closeDevTools()
    })
  }

  mainWindow.maximize()

  mainWindow.on('closed', () => {
    mainWindow = undefined
  })
}

app.whenReady().then(() => {
  createWindow()
  try {
    require('../src-backend/app_server.ts')
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error)
  }
  app.on('activate', () => {
    if (mainWindow === undefined) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})
