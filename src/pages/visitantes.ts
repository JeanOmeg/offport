import { defineComponent, ref } from 'vue'
import { IColuna } from 'src/interfaces/coluna-interface'
import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'
import { dadosParaExibir, getPaginationLabel } from 'src/utils/tabela-util'
import { pararLoading, msg_visitante, iniciarLoading, exibirNotificação } from 'src/utils/loading-notify-utils'
import visitanteSalvarService from 'src/services/visitante-salvar-service'
import visitanteListarTodosService from 'src/services/visitante-listar-todos-service'
import visitanteDeletarService from 'src/services/visitante-deletar-service'
import visitanteFiltrarService from 'src/services/visitante-filtrar-service'
import { IFiltroVisitante } from 'app/src-backend/interfaces/visitante/filtro-visitante-interface'

export default defineComponent({
  name: 'visitantes',

  async mounted () {
    iniciarLoading()
    try {
      await this.listarTodosVisitantes()
      this.dadosParaExibir()
    } catch (error) {
      exibirNotificação(msg_visitante.erro_iniciar, 'error', 'negative')
    } finally {
      pararLoading()
    }
  },

  watch: {
    'visitante_cadastro.garagem': {
      handler () {
        if (this.visitante_cadastro.garagem === 'Não') {
          this.visitante_cadastro.vaga = ''
        }
      }
    }
  },

  setup () {
    const lista_visitantes = ref([] as IVisitante[])
    const visitante_cadastro = ref({} as IVisitante)
    const filtro_visitante = ref({} as IFiltroVisitante)
    const visitante_selecionado = ref({} as IVisitante)
    const editor = ref('')
    const model_fake = ref('')
    const popup_tabela = ref(false)
    const popup_visitante = ref(false)
    const visualizar = ref(false)
    const opcoes_garagem = ref(['Sim', 'Não'])

    const colunas_visitantes = ref([
      { name: 'nome', required: true, label: 'Nome', align: 'left', field: (row: IVisitante) => row.nome, format: val => `${val}`, sortable: true },
      { name: 'documento', align: 'left', label: 'Documento', field: (row: IVisitante) => row.documento, sortable: true },
      { name: 'contato', align: 'left', label: 'Contato', field: (row: IVisitante) => row.contato, sortable: true },
      { name: 'apartamento', label: 'Apartamento', align: 'left', field: (row: IVisitante) => row.apartamento },
      { name: 'bloco', label: 'Bloco', align: 'left', field: (row: IVisitante) => row.bloco },
      { name: 'vaga', label: 'Vaga', align: 'left', field: (row: IVisitante) => row.vaga },
      { name: 'morador', label: 'Autorizado por', align: 'left', field: (row: IVisitante) => row.morador, sortable: true },
      { name: 'controlador', label: 'Controlador responsavel', align: 'left', field: (row: IVisitante) => row.controlador, sortable: true },
      { name: 'data_entrada', label: 'Data de Entrada', align: 'left', field: (row: IVisitante) => new Date(row.data_entrada).toLocaleString() },
      { name: 'data_saida', label: 'Data de Saída', align: 'left', field: (row: IVisitante) => row.data_saida ? new Date(row.data_saida).toLocaleString() : '' }
    ] as IColuna[])
    
    async function salvarVisitante (visitante: IVisitante) {
      iniciarLoading('Salvando visitante')
      try {
        visitante.observacao = editor.value

        await Promise.all([
          visitanteSalvarService(visitante),
          listarTodosVisitantes()
        ])
        
        exibirNotificação(msg_visitante.visitante_salvo, 'check', 'positive')
        fecharModal()
      } catch (error) {
        exibirNotificação(msg_visitante.erro_salvar, 'error', 'negative')
      } finally {
        pararLoading()
      }
    }

    async function listarTodosVisitantes () {
      try {
        lista_visitantes.value = []
        lista_visitantes.value = await visitanteListarTodosService()
      } catch (error) {
        exibirNotificação(msg_visitante.erro_carregar, 'error', 'negative')
      }
    }

    async function filtrarVisitante (filtro: IFiltroVisitante) {
      iniciarLoading()
      try {
        filtro_visitante.value = {} as IFiltroVisitante
        lista_visitantes.value = []
        lista_visitantes.value = await visitanteFiltrarService(filtro)
      } catch (error) {
        exibirNotificação(msg_visitante.erro_carregar, 'error', 'negative')
      } finally {
        pararLoading()
      }
    }

    async function listarVisitantes () {
      iniciarLoading()
      try {
        await listarTodosVisitantes()
      } catch (error) {
        exibirNotificação(msg_visitante.erro_carregar, 'error', 'negative')
      } finally {
        pararLoading()
      }
    }

    async function deletarVisitante (id: number) {
      iniciarLoading(msg_visitante.deletando_visitante)
      try {
        await Promise.all([
          visitanteDeletarService(id),
          listarTodosVisitantes()
        ])

        fecharDialog()

        exibirNotificação(msg_visitante.visitante_deletado, 'check', 'positive')
      } catch (error) {
        exibirNotificação(msg_visitante.erro_deletar, 'error', 'negative')
      } finally {
        pararLoading()
      }
    }

    function fecharModal () {
      popup_visitante.value = false
      editor.value = ''
      visualizar.value = false
      visitante_cadastro.value = {} as IVisitante
      fecharDialog()
    }

    function abrirCaixaDialog (row: IVisitante) {
      popup_tabela.value = true
      visitante_selecionado.value = row
    }

    function fecharDialog () {
      popup_tabela.value = false
      visitante_selecionado.value = {} as IVisitante
    }

    function visualizarVisitante (row: IVisitante) {
      popup_visitante.value = true
      visualizar.value = true
      visitante_cadastro.value = row
      editor.value = visitante_cadastro.value.observacao as string
    }

    function editarVisitante (row: IVisitante) {
      popup_visitante.value = true
      visitante_cadastro.value = row
      editor.value = visitante_cadastro.value.observacao as string
      row = {} as IVisitante
    }

    return {
      colunas_visitantes,
      lista_visitantes,
      popup_visitante,
      visitante_cadastro,
      editor,
      model_fake,
      popup_tabela,
      visitante_selecionado,
      opcoes_garagem,
      visualizar,
      filtro_visitante,
      listarVisitantes,
      getPaginationLabel,
      dadosParaExibir,
      salvarVisitante,
      fecharModal,
      listarTodosVisitantes,
      abrirCaixaDialog,
      fecharDialog,
      deletarVisitante,
      visualizarVisitante,
      editarVisitante,
      filtrarVisitante
    }
  }
})
