import express from 'express'
import cors from 'cors'
require('dotenv').config()
import routes from './route/index.routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

const porta = Number(process.env.PORTA) || 3000
const url = process.env.URL

app.listen(porta, () => {
  console.log(`Servidor rodando em ${url}${porta}`)
})

export default app
