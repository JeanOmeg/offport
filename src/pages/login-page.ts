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
    await this.removeLoginStorage(this.$q, this.router)
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
          await router.push({ name: 'home-page' })
        }
      } catch (error) {
        $q.notify({ message: 'Confira seu Login e/ou Senha!', icon: 'error', color: 'negative' })
        await removeLoginStorage($q, router)
      }
    }

    return {
      router,
      formulario,
      enviarLogin,
      removeLoginStorage
    }
  }
})
