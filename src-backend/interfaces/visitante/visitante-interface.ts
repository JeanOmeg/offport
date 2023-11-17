export interface IVisitante {
  id: string
  id_condominio: string
  id_usuario: string
  nome: string
  documento: string
  contato: string
  apartamento: number
  bloco: number
  garagem: boolean
  vaga: string
  data_entrada: Date
  data_saida: Date
  observacao: string
  data_criacao: Date
  data_edicao?: Date
}
