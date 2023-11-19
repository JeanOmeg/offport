/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 *
 *   import { contextBridge } from 'electron'
 *
 *   contextBridge.exposeInMainWorld('myAPI', {
 *     doAThing: () => {}
 *   })
 *
 * WARNING!
 * If accessing Node functionality (like importing @electron/remote) then in your
 * electron-main.ts you will need to set the following when you instantiate BrowserWindow:
 *
*/
// import { BrowserWindow, app } from 'electron'

// const server = require('../src-backend/app_server.ts')

// const background = new BrowserWindow({
//   show: false,
//   webPreferences: {
//     sandbox: false
//   }
// })

// app.on('ready', () => {
//   server()
//   background.loadURL('http://localhost:6000')
// })
