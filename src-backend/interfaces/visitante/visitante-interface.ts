export interface IVisitante {
  id: number
  id_condominio: number
  id_morador: number
  nome: string
  documento: string
  contato: string
  apartamento?: number
  bloco?: string
  garagem?: boolean
  vaga?: string
  data_entrada: string
  data_saida?: string
  observacao?: string
  data_criacao: string
  data_edicao?: string
}