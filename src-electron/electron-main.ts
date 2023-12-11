import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as os from 'os'

const platform = process.platform || os.platform()
let mainWindow: BrowserWindow | undefined

function createWindow () {
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'),
    show: false,
    autoHideMenuBar: true,
    title: 'OffPort - Solução completa e offline para seu condomínio',
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
      devTools: process.env.NODE_ENV === 'development' ? true : false
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.alt) {
      event.preventDefault()
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow?.setMinimumSize(1280, 720)
  })

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
    mainWindow?.maximize()
    mainWindow?.focus()
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
