import { defineComponent, ref } from 'vue'
import { LocalStorage, useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { ILogin } from '../interfaces/login-interface'
import { removeLoginStorage } from '../utils/remove-login-storage'
import { setLoginStorage } from '../utils/set-login-storage'
import loginService from '../services/login-service'

export default defineComponent({
  name: 'login-page',

  async created () {
    LocalStorage.set('tela_login', true)
    await this.removeLoginStorage(this.Q, this.router)
  },

  setup () {
    const Q = useQuasar()
    const router = useRouter()
    const formulario = ref({} as ILogin)

    async function enviarLogin () {
      try {
        if (!formulario.value.login || !formulario.value.senha) {
          Q.notify({ message: 'Email e/ou Senha obrigatório!', icon: 'error', color: 'negative' })
        } else {
          const usuario: ILogin = { login: formulario.value.login, senha: formulario.value.senha }
          const data = await loginService(usuario)

          await setLoginStorage(data, Q, router)
        }
      } catch (error) {
        await removeLoginStorage(Q, router)
      }
    }

    return {
      Q,
      router,
      formulario,
      enviarLogin,
      removeLoginStorage
    }
  }
})
