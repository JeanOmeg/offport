export interface IUsuario {
  id: number
  id_condominio: number
  id_tipo_usuario: number
  nome: string
  login: string
  senha: string
  email: string
  telefone: string
  endereco: string
  bairro: string
  cidade: string
  funcao: string
  turno: string
  empresa: string
  observacao?: string
  data_criacao: string
  data_edicao?: string
}
