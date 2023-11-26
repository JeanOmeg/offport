import { defineComponent, ref } from 'vue'
import menuToolbar from './menu-toolbar.vue'
import { LocalStorage, useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { removeLoginStorage } from '../utils/remove-login-storage'
import { ETipoUsuario } from '../enum/tipo-usuario-enum'


export default defineComponent({
  name: 'toolbar',

  components: {
    menuToolbar
  },

  async mounted () {
    this.logado = LocalStorage.getItem('logado') as boolean
    if (!this.logado) {
      await this.logout()
    }
  },

  setup () {
    const router = useRouter()
    const logado = ref(false)
    const admin = ref(false)
    const $q = useQuasar()

    async function logout (_logado?: boolean, _sair?: boolean) {
      await removeLoginStorage($q, router, _logado, _sair)
    }

    function verificaAdmin () {
      return admin.value = (LocalStorage.getItem('id_tipo_usuario') as number) === ETipoUsuario.administrador
    }

    const lista_menu = ref([
      { title: 'Visitantes', route: '/visitantes', icon: 'escalator_warning' },
      { title: 'Prestadores', route: '/visitantes', icon: 'engineering' },
      { title: 'Recebidos', route: '/visitantes', icon: 'redeem' },
      { title: 'Reservas', route: '/visitantes', icon: 'calendar_month' },
      { title: 'Moradores', route: '/visitantes', icon: 'groups' },
      { title: 'Garagem', route: '/visitantes', icon: 'drive_eta' },
      { title: 'Condomínio', route: '/visitantes', icon: 'apartment' },
      { title: 'Ocorrências', route: '/visitantes', icon: 'report' },
      { title: 'Usuário', route: '/visitantes', icon: 'person' }
    ])

    const lista_menu_admin = ref([
      { title: 'Controladores', route: '/visitantes', icon: 'manage_accounts' },
      { title: 'Configurações', route: '/visitantes', icon: 'settings' }
    ])

    const pagina= ref(lista_menu.value[0].title)

    return {
      lista_menu,
      lista_menu_admin,
      logado,
      admin,
      router,
      pagina,
      logout,
      removeLoginStorage,
      verificaAdmin
    }
  }
})
