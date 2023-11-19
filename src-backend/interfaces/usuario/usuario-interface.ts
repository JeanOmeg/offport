export interface IUsuario {
  id: number
  id_condominio: number
  id_tipo_usuario: number
  nome: string
  email: string
  login: string
  senha: string
  telefone: string
  endereco: string
  bairro: string
  cidade: string
  funcao: string
  turno: string
  empresa: string
  observacao?: string
  data_criacao: Date
  data_edicao?: Date
}
