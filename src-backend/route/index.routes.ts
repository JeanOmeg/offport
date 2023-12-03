import { Router } from 'express'
import login from './login/login.route'
import usuario from './usuario/usuario.route'
import visitante from './visitante/visitante.route'

const routes = Router()

routes.get('/', (_req, res) => { res.send('teste') })

routes.use(login)
routes.use(usuario)
routes.use(visitante)

export default routes
