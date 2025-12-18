# offPort (off-port)

Sistema de controle de acesso e gestão de portaria totalmente offline, desenvolvido com nodes, typescript, sequelize, sqlite, quasar framework e electron

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).

```


```

```
offport
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.cjs
├─ .gitignore
├─ .npmrc
├─ .sequelizerc
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ babel.config.cjs
├─ estrutura_projeto.txt
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ public
│  ├─ favicon.ico
│  └─ icons
│     ├─ favicon-128x128.png
│     ├─ favicon-16x16.png
│     ├─ favicon-32x32.png
│     └─ favicon-96x96.png
├─ quasar.config.js
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  └─ quasar-logo-vertical.svg
│  ├─ boot
│  │  ├─ .gitkeep
│  │  └─ axios.ts
│  ├─ components
│  │  ├─ EssentialLink.vue
│  │  ├─ ExampleComponent.vue
│  │  └─ models.ts
│  ├─ css
│  │  ├─ app.scss
│  │  └─ quasar.variables.scss
│  ├─ env.d.ts
│  ├─ index.template.html
│  ├─ layouts
│  │  └─ MainLayout.vue
│  ├─ pages
│  │  ├─ ErrorNotFound.vue
│  │  └─ IndexPage.vue
│  ├─ quasar.d.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ routes.ts
│  └─ shims-vue.d.ts
├─ src-backend
│  ├─ app_server.ts
│  ├─ database
│  │  ├─ config
│  │  │  └─ sequelize.js
│  │  ├─ db
│  │  │  └─ db.sqlite
│  │  ├─ dbml
│  │  │  └─ onPortaria.dbml
│  │  ├─ migration
│  │  │  ├─ 20231104025749-criar-tabela-tipo-usuario.js
│  │  │  ├─ 20231104031334-criar-tabela-condominio.js
│  │  │  ├─ 20231104031700-criar-tabela-usuario.js
│  │  │  ├─ 20231104164928-criar-tabela-visitante.js
│  │  │  ├─ 20231104165145-criar-tabela-prestador-servico.js
│  │  │  └─ 20231104165457-criar-tabela-login.js
│  │  ├─ seeder
│  │  │  ├─ 20231104170045-atualizar-tabela-tipo-usuario-adicionar-roles.js
│  │  │  └─ 20231104170047-atualizar-tabela-usuario-adicionar-superadmin.js
│  │  └─ util
│  │     └─ hash-senhas-padrao-js.js
│  ├─ domain
│  │  ├─ login
│  │  │  ├─ controller
│  │  │  │  └─ login-controller.ts
│  │  │  └─ service
│  │  │     ├─ criar-payload-service.ts
│  │  │     └─ fazer-login-service.ts
│  │  └─ usuario
│  │     ├─ controller
│  │     │  └─ usuario-controller.ts
│  │     └─ service
│  │        ├─ usuario-listar-todos-service.ts
│  │        └─ usuario-salvar-service.ts
│  ├─ interfaces
│  │  ├─ condominio
│  │  │  └─ condominio-interface.ts
│  │  ├─ login
│  │  │  ├─ login-interface.ts
│  │  │  └─ usuario-logado-interface.ts
│  │  ├─ prestador-servico
│  │  │  └─ prestador-servico-interface.ts
│  │  ├─ tipo-usuario
│  │  │  └─ tipo-usuario-interface.ts
│  │  ├─ usuario
│  │  │  └─ usuario-interface.ts
│  │  └─ visitante
│  │     └─ visitante-interface.ts
│  ├─ models
│  │  ├─ condominio
│  │  │  └─ condominio-model.ts
│  │  ├─ login
│  │  │  └─ login-model.ts
│  │  ├─ prestador-servico
│  │  │  └─ prestador-servico-model.ts
│  │  ├─ tipo-usuario
│  │  │  └─ tipo-usuario-model.ts
│  │  ├─ usuario
│  │  │  └─ usuario-model.ts
│  │  └─ visitante
│  │     └─ visitante-model.ts
│  ├─ route
│  │  ├─ index.routes.ts
│  │  ├─ login
│  │  │  └─ login.route.ts
│  │  └─ usuario
│  │     └─ usuario.route.ts
│  ├─ schemas
│  │  ├─ login
│  │  │  └─ login-schema.ts
│  │  ├─ tipo-usuario
│  │  │  └─ tipo-usario-schema.ts
│  │  └─ usuario
│  │     └─ usuario-schema.ts
│  └─ util
│     ├─ db.ts
│     └─ hash-senha-padrao.ts
├─ src-electron
│  ├─ electron-env.d.ts
│  ├─ electron-flag.d.ts
│  ├─ electron-main.ts
│  ├─ electron-preload.ts
│  └─ icons
│     ├─ icon.icns
│     ├─ icon.ico
│     └─ icon.png
├─ tsconfig.json
└─ yarn.lock

```
