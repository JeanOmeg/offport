import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
export const db = new Sequelize({
  database: 'offport',
  dialect: 'sqlite',
  storage: './db.sqlite',
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeData'
})
