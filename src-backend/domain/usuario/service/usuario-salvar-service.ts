import { IUsuario } from 'app/src-backend/interfaces/usuario/usuario-interface'
import { UsuarioSchema } from 'app/src-backend/schemas/usuario/usuario-schema'

export async function usuarioSalvarService (usuario_schema: UsuarioSchema, dados_criação: IUsuario): Promise<IUsuario> {
  if (!dados_criação.nome) {
    throw new Error('Preencha o campo nome corretamente')
  } else if (!dados_criação.email) {
    throw new Error('Preencha o campo email corretamente')
  } else if (!dados_criação.login) {
    throw new Error('Preencha o campo login corretamente')
  } else if (!dados_criação.senha) {
    throw new Error('Preencha o campo senha corretamente')
  } else  if (!dados_criação.telefone) {
    throw new Error('Preencha o campo telefone corretamente')
  } else if (!dados_criação.endereco) {
    throw new Error('Preencha o campo endereco corretamente')
  }

  const cadastro = await usuario_schema.listarPorEmailELogin(dados_criação.email, dados_criação.login)
  if (cadastro) {
    throw new Error('Email ou login já cadastrado')
  }

  return await usuario_schema.salvarColaborador(dados_criação)
}
