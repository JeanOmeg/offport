require('dotenv').config()

module.exports = {
  database: 'offport',
  dialect: 'sqlite',
  storage: './db.sqlite',
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeData'
}
