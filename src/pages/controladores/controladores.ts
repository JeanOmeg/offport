import { defineComponent, ref } from 'vue'
import { IColuna } from 'src/interfaces/coluna-interface'
import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'
import { dadosParaExibir, getPaginationLabel } from 'src/utils/tabela-util'
import { pararLoading, msg_visitante, iniciarLoading, exibirNotificação } from 'src/utils/loading-notify-utils'
import visitanteSalvarService from 'src/services/visitantes/visitante-salvar-service'
import visitanteListarTodosService from 'src/services/visitantes/visitante-listar-todos-service'
import visitanteDeletarService from 'src/services/visitantes/visitante-deletar-service'
import visitanteFiltrarService from 'src/services/visitantes/visitante-filtrar-service'
import { IFiltroVisitante } from 'app/src-backend/interfaces/visitante/filtro-visitante-interface'

export default defineComponent({
  name: 'controladores',

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
    const lista_controladores = ref([] as IVisitante[])
    const controlador_cadastro = ref({} as IVisitante)
    const filtro_controlador = ref({} as IFiltroVisitante)
    const controlador_selecionado = ref({} as IVisitante)
    const editor = ref('')
    const model_fake = ref('')
    const popup_tabela = ref(false)
    const popup_controlador = ref(false)
    const visualizar = ref(false)
    const opcoes_garagem = ref(['Sim', 'Não'])

    const colunas_controladores = ref([
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
    
    async function salvarControlador (controlador: IVisitante) {
      iniciarLoading('Salvando controlador')
      try {
        controlador.observacao = editor.value

        await Promise.all([
          visitanteSalvarService(controlador),
          listarTodosControladores()
        ])
        
        exibirNotificação(msg_visitante.visitante_salvo, 'check', 'positive')
        fecharModal()
      } catch (error) {
        exibirNotificação(msg_visitante.erro_salvar, 'error', 'negative')
      } finally {
        pararLoading()
      }
    }

    async function listarTodosControladores () {
      try {
        lista_controladores.value = []
        lista_controladores.value = await visitanteListarTodosService()
      } catch (error) {
        exibirNotificação(msg_visitante.erro_carregar, 'error', 'negative')
      }
    }

    async function filtrarVisitante (filtro: IFiltroVisitante) {
      iniciarLoading()
      try {
        filtro_controlador.value = {} as IFiltroVisitante
        lista_controladores.value = []
        lista_controladores.value = await visitanteFiltrarService(filtro)
      } catch (error) {
        exibirNotificação(msg_visitante.erro_carregar, 'error', 'negative')
      } finally {
        pararLoading()
      }
    }

    async function listarVisitantes () {
      iniciarLoading()
      try {
        await listarTodosControladores()
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
          listarTodosControladores()
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
      popup_controlador.value = false
      editor.value = ''
      visualizar.value = false
      controlador_cadastro.value = {} as IVisitante
      fecharDialog()
    }

    function abrirCaixaDialog (row: IVisitante) {
      popup_tabela.value = true
      controlador_selecionado.value = row
    }

    function fecharDialog () {
      popup_tabela.value = false
      controlador_selecionado.value = {} as IVisitante
    }

    function visualizarVisitante (row: IVisitante) {
      popup_controlador.value = true
      visualizar.value = true
      controlador_cadastro.value = row
      editor.value = controlador_cadastro.value.observacao as string
    }

    function editarVisitante (row: IVisitante) {
      popup_controlador.value = true
      controlador_cadastro.value = row
      editor.value = controlador_cadastro.value.observacao as string
      row = {} as IVisitante
    }

    return {
      colunas_visitantes: colunas_controladores,
      lista_visitantes: lista_controladores,
      popup_visitante: popup_controlador,
      visitante_cadastro: controlador_cadastro,
      editor,
      model_fake,
      popup_tabela,
      visitante_selecionado: controlador_selecionado,
      opcoes_garagem,
      visualizar,
      filtro_visitante: filtro_controlador,
      listarVisitantes,
      getPaginationLabel,
      dadosParaExibir,
      salvarVisitante: salvarControlador,
      fecharModal,
      listarTodosVisitantes: listarTodosControladores,
      abrirCaixaDialog,
      fecharDialog,
      deletarVisitante,
      visualizarVisitante,
      editarVisitante,
      filtrarVisitante
    }
  }
})
