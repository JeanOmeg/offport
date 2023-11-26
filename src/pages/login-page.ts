import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { ILogin } from '../interfaces/login-interface'
import { removeLoginStorage } from '../utils/remove-login-storage'
import { setLoginStorage } from '../utils/set-login-storage'
import loginService from '../services/login-service'

export default defineComponent({
  name: 'login-page',

  async created () {
    this.logout()
  },

  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const formulario = ref({} as ILogin)

    async function enviarLogin () {
      try {
        if (!formulario.value.login || !formulario.value.senha) {
          $q.notify({ message: 'Confira seu Login e/ou Senha!', icon: 'error', color: 'negative' })
        } else {
          const usuario: ILogin = { login: formulario.value.login, senha: formulario.value.senha }
          const data = await loginService(usuario)

          await setLoginStorage(data)
          $q.notify({ message: 'Logado!', icon: 'check', color: 'positive' })
          await router.push({ name: 'visitantes' })
        }
      } catch (error) {
        $q.notify({ message: 'Confira seu Login e/ou Senha!', icon: 'error', color: 'negative' })
        await removeLoginStorage($q, router)
      }
    }

    async function logout (_logado?: boolean, _sair?: boolean) {
      await removeLoginStorage($q, router, _logado, _sair)
    }

    return {
      router,
      formulario,
      enviarLogin,
      removeLoginStorage,
      logout
    }
  }
})
