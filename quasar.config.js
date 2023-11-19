/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const { configure } = require('quasar/wrappers')
const path = require('path')
require('dotenv').config()


module.exports = configure(function (ctx) {
  return {
    supportTS: {
      tsCheckerConfig: {
        eslint: {
          enabled: true,
          files: './src/**/*.{ts,tsx,js,jsx,vue}'
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
      'plugin:vue/vue3-strongly-recommended' // Priority B: Strongly Recommended (Improving Readability)
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
        API_URL: ctx.dev ? process.env.API_DEV : process.env.API_PROD
      }
    },

    devServer: {
      https: false,
      port: 9000,
      open: true
    },

    framework: {
      config: {},

      iconSet: 'material-icons',
      plugins: [
        'LocalStorage',
        'Loading',
        'Notify'
      ]
    },

    animations: [],

    ssr: {
      pwa: true,
      prodPort: 3000,

      maxAge: 1000 * 60 * 60 * 24 * 30,
      middlewares: [
        ctx.prod ? 'compression' : '',
        'render'
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
        name: 'offPort',
        short_name: 'OP',
        description: 'Sistema de controle de acesso e gestão de portaria',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
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

    cordova: {
      // noIosLegacyBuildFlag: true,
    },

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      bundler: 'packager',
      packager: {
        extraResource: './db.sqlite',
        appId: 'offPort',
        productName: 'offPort',
        extends: null,
        externals: {
          sqlite3: 'commonjs sqlite3'
        },
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
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'off-port'
      }
    },

    // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
    chainWebpackMain (/* chain */) {
      // do something with the Electron main process Webpack cfg
      // extendWebpackMain also available besides this chainWebpackMain
    },

    // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
    chainWebpackPreload (/* chain */) {
      // do something with the Electron main process Webpack cfg
      // extendWebpackPreload also available besides this chainWebpackPreload
    }
  }
})
