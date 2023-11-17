export interface IPrestadorServico {
  id: string
  id_condominio: string
  id_usuario: string
  nome: string
  documento: string
  apartamento: number
  bloco: number
  garagem: boolean
  vaga: string
  servico: string
  empresa: string
  contato: string
  endereco: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  estado: string
  pais: string
  data_entrada: string
  data_saida: string
  observacao: string
  data_criacao: Date
  data_edicao: Date
}
