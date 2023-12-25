import { VisitanteController } from '../../domain/visitante/controller/visitante-controller'
import { Router } from 'express'

const usuario = Router()
const rota ='visitante'

usuario.delete(`/${rota}/deletar/:id`, async (req, res) => { await VisitanteController.visitanteDeletar(req, res) })
usuario.get(`/${rota}`, async (req, res) => { await VisitanteController.visitanteListarTodos(req, res) })
usuario.post(`/${rota}/cadastro`, async (req, res) => { await VisitanteController.visitanteCadastrar(req, res) })

export default usuario
