const bcrypt = require('bcrypt')
require('dotenv').config()

async function hashSenhaPadraoJs () {
  const senha_padrao = process.env.SENHA_PADRAO
  const salt = Number(process.env.SALT)

  let senha_crypt
  if (senha_padrao && salt) {
    senha_crypt = await bcrypt.hash(senha_padrao, salt)
  }

  return senha_crypt
}

module.exports = { hashSenhaPadraoJs }
