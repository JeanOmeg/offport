import { LoginController } from '../../domain/login/controller/login-controller'
import { Router } from 'express'

const login = Router()
const rota = 'login'

login.post(`/${rota}`, async (req, res) => { await LoginController.fazerLogin(req, res) })

export default login
