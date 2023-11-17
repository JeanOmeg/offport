export interface IUsuarioLogado {
  id_usuario: string,
  id_condominio: string,
  id_tipo_usuario: string,
  nome: string,
  login: string,
}

export interface IUsuarioLogado {
  token?: string
  refresh_token?: string
}
