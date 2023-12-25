export interface IVisitante {
  id: number
  nome: string
  documento: string
  morador?: string
  controlador?: string
  contato: string
  apartamento?: number
  bloco?: string
  garagem?: string
  vaga?: string
  data_entrada: string
  data_saida?: string
  observacao?: string
  data_criacao: string
  data_edicao?: string
}
