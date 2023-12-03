const { configure } = require('quasar/wrappers')
const path = require('path')
require('dotenv').config()


module.exports = configure(function (ctx) {
  return {
    supportTS: {
      tsCheckerConfig: {
        eslint: {
          enabled: true,
          files: ['./src/**/*.{ts,tsx,js,jsx,vue}', './src-backend/**/*.{ts,tsx,js,jsx,vue}']
        }
      }
    },

    boot: [
      'axios'
    ],

    sourceFiles: {
      electronMain: 'src-electron/electron-main',
      electronPreload: 'src-electron/electron-preload'
    },

    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/vue3-strongly-recommended'
    ],

    css: [
      'app.scss'
    ],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      vueRouterMode: 'history',
      env: {
        API_URL: ctx.dev ? process.env.API_DEV : process.env.API_PROD,
        PORTA: process.env.PORTA_EXPRESS,
        URL_PORTA: process.env.URL
      }
    },

    devServer: {
      https: false,
      port: process.env.PORT_QUASAR,
      open: true
    },

    framework: {
      config: {
        brand: {
          dark: '#1b3549',
          primary: '#244963',
          secondary: '#4182ac',
          info: '#c6e1f2',

          'dark-page': '#142b39',
          
          accent: '#e1f4ff',
          positive: '#87c7ff',
          negative: '#e45e5d',
          warning: '#f8ffa7'
        }
      },

      iconSet: 'material-icons',
      plugins: [
        'LocalStorage',
        'Loading',
        'Notify'
      ]
    },

    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        maximumFileSizeToCacheInBytes: 300000000000000,
        skipWaiting: true,
        clientsClaim: true
      },

      manifest: {
        name: 'offPort - Solução completa e offline para seu condomínio',
        productName: 'offPort - Solução completa e offline para seu condomínio',
        short_name: 'offPort',
        description: 'Solução completa e offline para seu condomínio',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    electron: {
      bundler: 'packager',
      packager: {
        extraResource: './db.sqlite',
        appId: 'offPort',
        productName: 'offPort - Solução completa e offline para seu condomínio',
        directories: {
          output: 'dist'
        },
        files: [
          {
            from: path.resolve(__dirname, 'src-electron'),
            to: 'src-electron',
            filter: ['**/*']
          },
          {
            from: path.resolve(__dirname, 'src-backend'),
            to: 'src-backend',
            filter: ['**/*']
          }
        ],
        asar: true,
        win: {
          target: [
            {
              target: 'nsis',
              arch: ['x64']
            }
          ]
        }
      }
    }
  }
})
