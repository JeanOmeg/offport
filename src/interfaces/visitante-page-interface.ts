export interface IVisitanteCadastro {
    id: number
    id_condominio?: number
    id_morador?: number
    id_usuario?: number
    nome: string
    documento: string
    telefone: string
    apartamento: number
    bloco: string
    garagem: number
    vaga: string
    data_entrada: string
    data_saida?: string
    autorizado_por: string
    controlador: string
    observacao?: string
    data_criacao?: string
    data_edicao?: string
  }
