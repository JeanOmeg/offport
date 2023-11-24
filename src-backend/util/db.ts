import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const productionDbPath = path.join(process.resourcesPath, './db.sqlite')
const developmentDbPath = './db.sqlite'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
export const db = new Sequelize({
  database: 'offport',
  dialect: 'sqlite',
  storage: process.env.NODE_ENV === 'production' ? productionDbPath : developmentDbPath,
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeData'
})
