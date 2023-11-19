import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

export const db = new Sequelize({
  database: 'offport',
  dialect: 'sqlite',
  storage: './db.sqlite'
})
