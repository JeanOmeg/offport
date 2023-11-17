import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'

dotenv.config()

export async function hashSenhasPadrao () {
  const senha_padrao = await bcrypt.hash(process.env.BCRYPT as string, Number(process.env.SALT))

  return senha_padrao
}
