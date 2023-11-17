const bcrypt = require('bcrypt')
require('dotenv').config()

async function hashSenhasPadraoJs () {
  const crypt = process.env.BCRYPT
  const salt = Number(process.env.SALT)
  let senha_padrao
  if (crypt && salt) {
    senha_padrao = await bcrypt.hash(crypt, salt)
  }

  return senha_padrao
}

module.exports = { hashSenhasPadraoJs }
