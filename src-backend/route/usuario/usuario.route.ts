import { Router } from 'express'
import { UsuarioController } from '../../domain/usuario/controller/usuario-controller'

const usuario = Router()
const rota ='usuario'

usuario.get(`/${rota}`, async (req, res) => { await UsuarioController.usuarioListarTodos(req, res) })

usuario.post(`/${rota}/cadastro`, async (req, res) => { await UsuarioController.usuarioCadastrar(req, res) })

export default usuario
