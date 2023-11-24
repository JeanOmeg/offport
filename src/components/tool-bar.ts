import { defineComponent, ref } from 'vue'
import EssentialLink from './essential-link.vue'
import { LocalStorage, useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { removeLoginStorage } from '../utils/remove-login-storage'
import { ETipoUsuario } from '../enum/tipo-usuario-enum'

export default defineComponent({
  name: 'tool-bar',

  components: {
    EssentialLink
  },

  async mounted () {
    this.logado = LocalStorage.getItem('logado') as boolean
    if (!this.logado) {
      await this.logoutService()
    }
  },

  setup () {
    const router = useRouter()
    const logado = ref(false)
    const admin = ref(false)
    const Q = useQuasar()

    async function logoutService () {
      await removeLoginStorage(Q, router)
    }

    function verificaAdmin () {
      return admin.value = (LocalStorage.getItem('id_tipo_usuario') as number) === ETipoUsuario.super_admin
    }

    const link_list = ref([
      {
        title: 'Tasks',
        caption: '',
        route: 'home',
        icon: 'library_add_check'
      },
      {
        title: 'New task',
        caption: '',
        route: 'home',
        icon: 'add_task'
      }
    ])

    const adminList = ref([
      {
        title: 'All tasks',
        caption: '',
        link: 'allTasks',
        icon: 'fact_check'
      },
      {
        title: 'All users',
        caption: '',
        link: 'allUsers',
        icon: 'group'
      }
    ])

    const drawer = ref(false)

    return {
      link_list,
      adminList,
      drawer,
      logado,
      admin,
      router,
      logoutService,
      removeLoginStorage,
      verificaAdmin
    }
  }
})
