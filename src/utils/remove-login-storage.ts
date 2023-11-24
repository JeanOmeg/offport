import { LocalStorage, QVueGlobals } from 'quasar'
import { Router } from 'vue-router'
import { IUsuarioStorageString } from '../interfaces/usuario-storage-interface'

const notificacao = 'Deslogado!'
const local_storage: IUsuarioStorageString = {
  token: 'token',
  refresh_token: 'refresh_token',
  id_tipo_usuario: 'id_tipo_usuario',
  id_usuario: 'id_usuario',
  logado: 'logado',
  login: 'login',
  id_condominio: 'id_condominio'
}

export async function removeLoginStorage ($q: QVueGlobals, router: Router): Promise<void> {
  const tela_login = LocalStorage.getItem('tela_login')
  for (const key of Object.values(local_storage)) {
    LocalStorage.remove(key)
  }

  if (!tela_login) {
    $q.notify({
      message: notificacao,
      icon: 'error',
      color: 'negative'
    })
    await router.push({ name: 'login-page' })
  }
}
