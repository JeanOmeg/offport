import { IVisitante } from '../../../src-backend/interfaces/visitante/visitante-interface'
import { VisitanteModel } from '../../../src-backend/models/visitante/visitante-model'
import * as dotenv from 'dotenv'
dotenv.config()

export class VisitanteSchema {
  schema () {
    return VisitanteModel
  }

  async salvarVisitante (dados_criação): Promise<IVisitante> {
    return await VisitanteModel.create(dados_criação)
  }

  async listarTodos (): Promise<IVisitante[]> {
    return await VisitanteModel.findAll({
      raw: true
    })
  }

  async deletarVisitante (id: number) {
    return await VisitanteModel.destroy({
      where: {
        id: id
      }
    })
  }
}

export const visitante_schema = new VisitanteSchema()
