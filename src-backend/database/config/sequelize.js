require('dotenv').config()

module.exports = {
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  storage: './../db/db.sqlite'
}
