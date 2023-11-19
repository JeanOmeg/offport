export interface IMorador {
  id: number
  id_condominio: number
  nome: string
  apartamento: number
  bloco?: string
  telefone?: string
  email?: string
  garagem?: boolean
  vaga?: string
  observacao?: string
  data_criacao: string
  data_edicao?: string
}
