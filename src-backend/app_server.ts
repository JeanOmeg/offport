// src-backend/app_server.ts

import express from 'express'
import cors from 'cors'
require('dotenv').config()
import routes from './route/index.routes'

const app_server = express()

app_server.use(express.json())
app_server.use(cors())
app_server.use(routes)

const porta = Number(process.env.PORTA) || 3000
const url = process.env.URL

app_server.listen(porta, () => {
  console.log(`Servidor rodando em ${url}${porta}`)
})

export default app_server
