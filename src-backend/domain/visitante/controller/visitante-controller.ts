import { IVisitante } from '../../../../src-backend/interfaces/visitante/visitante-interface'
import { visitante_schema } from '../../../../src-backend/schemas/visitante/visitante-schema'
import { visitanteSalvarService } from '../../../../src-backend/domain/visitante/service/visitante-salvar-service'
import { visitanteListarTodosService } from '../service/visitante-listar-todos-service'
import { visitanteDeletarService } from '../service/visitante-deletar-service'
import { visitanteFiltrarService } from '../service/visitante-filtrar-service'

export module VisitanteController {
  export async function visitanteListarTodos (_req: any, res: any) {
    try {
      const lista_visitante = await visitanteListarTodosService(visitante_schema)
      return res.status(200).json(lista_visitante)
    } catch (error: any) {
      res.status(400).json(error.message)
    }
  }

  export async function visitanteFiltrar (req: any, res: any) {
    const filtro_parametro = req.query.filtro

    if (!filtro_parametro) {
      return res.status(400).json({ error: 'Parâmetro de filtro ausente' })
    }

    try {
      const filtro = JSON.parse(filtro_parametro)

      const listaFiltrada = await visitanteFiltrarService(visitante_schema, filtro)

      return res.status(200).json(listaFiltrada)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao processar o filtro' })
    }
  }

  export async function visitanteDeletar (req: any, res: any): Promise<void> {
    try {
      const id_deletar = req.params.id
      await visitanteDeletarService(visitante_schema, id_deletar)
      return res.status(200).json([])
    } catch (error: any) {
      res.status(400).json(error.message)
    }
  }

  export async function visitanteCadastrar (req: any, res: any) {
    try {
      const dados_criação: IVisitante = req.body
      const usuario_cadastrado = await visitanteSalvarService(visitante_schema, dados_criação)
      return res.status(200).json(usuario_cadastrado)
    } catch (error: any) {
      res.status(400).json(error.message)
    }
  }
}
