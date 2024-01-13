import { Loading, Notify } from 'quasar'

export const msg_visitante = {
  deletando_visitante: 'Deletando visitante...',
  visitante_deletado: 'Visitante deletado com sucesso!',
  erro_deletar: 'Erro ao deletar visitante!',
  visitante_salvo: 'Visitante salvo com sucesso!',
  erro_salvar: 'Erro ao salvar visitante!',
  erro_iniciar: 'Erro ao iniciar, entre em contato com a administração!',
  erro_carregar: 'Erro ao carregar visitantes!'
}

export function iniciarLoading (msg: string = 'Carregando lista...') {
  Loading.show({
    message: msg,
    boxClass: 'body--light text-primary',
    spinnerColor: 'secondary'
  })
}

export function pararLoading (tempo: number = 600) {
  setTimeout(() => {
    Loading.hide()
  }, tempo)
}

export function exibirNotificação (msg: string, icone: string, cor: string) {
  Notify.create({ message: msg, icon: icone, color: cor })
}
