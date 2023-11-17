export interface IUsuario {
  id: string
  id_condominio?: string
  id_tipo_usuario: string
  nome: string
  email: string
  login: string
  senha: string
  telefone: string
  endereco: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  estado: string
  pais: string
  funcao: string
  apartamento: number
  bloco: number
  garagem: boolean
  vaga: string
  observacao: string
  data_criacao: Date
  data_edicao?: Date
}
