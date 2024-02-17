import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { ILogin } from 'src/interfaces/login-interface'
import { removeLoginStorage } from 'src/utils/remove-login-storage'
import { setLoginStorage } from 'src/utils/set-login-storage'
import loginService from 'src/services/login/login-service'

export default defineComponent({
  name: 'login-page',

  async created () {
    await this.logout()
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
        await logout()
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
