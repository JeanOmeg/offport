import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as os from 'os'

const platform = process.platform || os.platform()

let mainWindow: BrowserWindow | undefined

function createWindow () {
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'),
    show: false,
    minWidth: 1024,
    minHeight: 768,
    autoHideMenuBar: true,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
      devTools: process.env.NODE_ENV === 'development' ? true : false
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.maximize()

  mainWindow.on('closed', () => {
    mainWindow = undefined
  })
}

async function startServer () {
  try {
    await require('../src-backend/app_server.ts')
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error)
  }
}

app.whenReady().then(() => {
  startServer().then(() => {
    createWindow()
  })

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
