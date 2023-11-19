export interface ICondominio {
  id: number
  nome: string
  endereco: string
  bairro: string
  cidade: string
  estado: string
  tipo: string
  qtd_apartamento?: number
  qtd_bloco?: number
  garagem?: boolean
  qtd_vaga?: number
  sindico?: string
  contato_sindico?: string
  contato_condominio: string
  administradora?: string
  contato_administradora?: string
  seguranca?: string
  contato_seguranca?: string
  servicos_gerais?: string
  contato_servicos_gerais?: string
  observacao?: string
  data_criacao: string
  data_edicao?: string
}
