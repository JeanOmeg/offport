export interface IMorador {
  id: number
  nome: string
  apartamento: number
  bloco?: string
  telefone?: string
  email?: string
  garagem?: string
  vaga?: string
  observacao?: string
  data_criacao: string
  data_edicao?: string
}
