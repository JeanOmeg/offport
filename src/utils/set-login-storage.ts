import { LocalStorage } from 'quasar'
import { IUsuarioStorage } from 'src/interfaces/usuario-storage-interface'

export async function setLoginStorage (data: IUsuarioStorage): Promise<void> {
  LocalStorage.remove('tela_login')

  if (!data.logado) {
    data.logado = true
  }

  const usuario_storage = Object.keys(data) as (keyof IUsuarioStorage)[]

  for (const key of usuario_storage) {
    LocalStorage.set(key, data[key])
  }
}
