export interface ICondominio {
  id: string
  nome: string
  contato_condominio: string
  endereco: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  estado: string
  pais: string
  tipo: string
  apartamentos: number
  blocos: number
  sindico: string
  contato_sindico: string
  administradora: string
  contato_administradora: string
  seguranca: string
  contato_seguranca: string
  observacao: string
  data_criacao: Date
  data_edicao: Date
}
