import express from 'express'
require('dotenv').config()
import routes from './route/index.routes'
import cors from 'cors'

const app_server = express()

app_server.use(cors())
app_server.use(express.json())
app_server.use(routes)

const porta = Number(process.env.PORTA) || 3000
const url = process.env.URL_PORTA


app_server.listen(porta, async () => {
  console.log(`Servidor rodando em ${url}${porta}`)
})

export default app_server
