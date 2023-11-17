import { Dialect, Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

export const db = new Sequelize({
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT as Dialect,
  storage: './src-backend/database/db/db.sqlite'
})
