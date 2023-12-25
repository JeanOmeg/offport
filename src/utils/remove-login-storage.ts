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
  nome: 'nome'
}

export async function removeLoginStorage ($q: QVueGlobals, router: Router, logado: boolean = true, sair: boolean = false): Promise<void> {
  const usuario_logado = LocalStorage.getItem('logado') as boolean
  if (!usuario_logado) {
    for (const key of Object.values(local_storage)) {
      LocalStorage.remove(key)
    }
  }

  if (!logado) {
    $q.notify({
      message: notificacao,
      icon: 'error',
      color: 'negative'
    })
    await router.push({ name: 'login-page' })
  }
  
  if (sair) {
    window.close()
  }
}
