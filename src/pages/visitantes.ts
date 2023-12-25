import { defineComponent, ref } from 'vue'
import { IColuna } from 'src/interfaces/coluna-interface'
import { dadosParaExibir, getPaginationLabel } from 'src/utils/tabela-util'
import { Loading, useQuasar } from 'quasar'
import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'
import visitanteSalvarService from 'src/services/visitante-salvar-service'
import visitanteListarTodosService from 'src/services/visitante-listar-todos-service'
import visitanteDeletarService from 'src/services/visitante-deletar-service'

export default defineComponent({
  name: 'visitantes',

  async mounted () {
    Loading.show()
    await this.listarTodosVisitantes()
    this.dadosParaExibir()
    Loading.hide()
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
    const filtros = ref({} as IVisitante)
    const visitante_cadastro = ref({} as IVisitante)
    const $q = useQuasar()
    const popup_visitante = ref(false)
    const editor = ref('')
    const lista_visitantes = ref([] as IVisitante[])
    const model_fake = ref('')
    const popup_tabela = ref(false)
    const visitante_selecionado = ref({} as IVisitante)
    const opcoes_garagem = ref(['Sim', 'Não'])
    const visualizar = ref(false)

    const colunas_visitantes = ref([
      { name: 'nome', required: true, label: 'Nome', align: 'left', field: (row: IVisitante) => row.nome, format: val => `${val}`, sortable: true },
      { name: 'documento', align: 'left', label: 'Documento', field: (row: IVisitante) => row.documento, sortable: true },
      { name: 'apartamento', label: 'Apartamento', align: 'left', field: (row: IVisitante) => row.apartamento },
      { name: 'bloco', label: 'Bloco', align: 'left', field: (row: IVisitante) => row.bloco },
      { name: 'garagem', label: 'Garagem', align: 'left', field: (row: IVisitante) => row.garagem },
      { name: 'vaga', label: 'Vaga', align: 'left', field: (row: IVisitante) => row.vaga },
      { name: 'morador', label: 'Autorizado por', align: 'left', field: (row: IVisitante) => row.morador, sortable: true },
      { name: 'controlador', label: 'Controlador responsavel', align: 'left', field: (row: IVisitante) => row.controlador, sortable: true },
      { name: 'data_entrada', label: 'Data de Entrada', align: 'left', field: (row: IVisitante) => new Date(row.data_entrada).toLocaleString() },
      { name: 'data_saida', label: 'Data de Saída', align: 'left', field: (row: IVisitante) => row.data_saida ? new Date(row.data_saida).toLocaleString() : '' }
    ] as IColuna[])
    
    async function salvarVisitante (visitante: IVisitante) {
      Loading.show()
      try {
        visitante.observacao = editor.value
        await visitanteSalvarService(visitante)
        await fecharModal()
        $q.notify({ message: 'Visitante salvo com sucesso!', icon: 'check', color: 'positive' })
      } catch (error) {
        $q.notify({ message: 'Erro ao salvar Visitante', icon: 'error', color: 'negative' })
      } finally {
        Loading.hide()
      }
    }

    async function listarTodosVisitantes () {
      try {
        setTimeout(async () => {
          lista_visitantes.value = await visitanteListarTodosService()
        }, 200)
      } catch (error) {
        $q.notify({ message: 'Erro ao carregar Visitantes', icon: 'error', color: 'negative' })
      }
    }

    async function deletarVisitante (id: number) {
      try {
        setTimeout(async () => {
          await visitanteDeletarService(id)
        }, 200)
        await fecharDialog()
        $q.notify({ message: 'Visitante deletado com sucesso!', icon: 'error', color: 'positive' })
      } catch (error) {
        $q.notify({ message: 'Erro ao deletar Visitantes', icon: 'error', color: 'negative' })
      }
    }

    async function fecharModal () {
      popup_visitante.value = false
      editor.value = ''
      visualizar.value = false
      visitante_cadastro.value = {} as IVisitante
      await fecharDialog()
    }

    function abrirCaixaDialog (row: IVisitante) {
      popup_tabela.value = true
      visitante_selecionado.value = row
    }

    async function fecharDialog () {
      popup_tabela.value = false
      visitante_selecionado.value = {} as IVisitante
      await listarTodosVisitantes()
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
      filtros,
      popup_visitante,
      visitante_cadastro,
      editor,
      model_fake,
      popup_tabela,
      visitante_selecionado,
      opcoes_garagem,
      visualizar,
      getPaginationLabel,
      dadosParaExibir,
      salvarVisitante,
      fecharModal,
      listarTodosVisitantes,
      abrirCaixaDialog,
      fecharDialog,
      deletarVisitante,
      visualizarVisitante,
      editarVisitante
    }
  }
})
