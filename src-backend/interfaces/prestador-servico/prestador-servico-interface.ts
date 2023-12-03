export interface IPrestadorServico {
  id: number
  nome: string
  documento: string
  contato: string
  apartamento?: number
  bloco?: string
  garagem?: boolean
  vaga?: string
  servico: string
  empresa?: string
  data_entrada: string
  data_saida?: string
  observacao?: string
  data_criacao: string
  data_edicao?: string
}
