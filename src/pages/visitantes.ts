import { defineComponent, ref } from 'vue'
import { IColuna } from 'src/interfaces/coluna-interface'
import { dadosParaExibir, getPaginationLabel } from 'src/utils/tabela-util'
import { useQuasar } from 'quasar'
import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'
import visitanteSalvarService from 'src/services/visitante-salvar-service'
import visitanteListarTodosService from 'src/services/visitante-listar-todos-service'
import visitanteDeletarService from 'src/services/visitante-deletar-service'

export default defineComponent({
  name: 'visitantes',

  async mounted () {
    await this.listarTodosVisitantes()
    this.dadosParaExibir()
  },

  watch: {
    'atualizar_lista_visitante': {
      async handler (newValue) {
        if (newValue) {
          this.atualizar_lista_visitante = false
          await this.listarTodosVisitantes()
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
    const atualizar_lista_visitante = ref(false)

    const colunas_visitantes = ref([
      { name: 'nome', required: true, label: 'Nome', align: 'left', field: (row: IVisitante) => row.nome, format: val => `${val}`, sortable: true },
      { name: 'documento', align: 'left', label: 'Documento', field: (row: IVisitante) => row.documento, sortable: true },
      { name: 'apartamento', label: 'Apartamento', align: 'left', field: (row: IVisitante) => row.apartamento },
      { name: 'bloco', label: 'Bloco', align: 'left', field: (row: IVisitante) => row.bloco },
      { name: 'garagem', label: 'Garagem', align: 'left', field: (row: IVisitante) => row.garagem },
      { name: 'vaga', label: 'Vaga', align: 'left', field: (row: IVisitante) => row.vaga },
      { name: 'morador', label: 'Autorizado por', align: 'left', field: (row: IVisitante) => row.morador, sortable: true },
      { name: 'controlador', label: 'Controlador responsavel', align: 'left', field: (row: IVisitante) => row.controlador, sortable: true },
      { name: 'data_entrada', label: 'Data de Entrada', align: 'left', field: (row: IVisitante) => row.data_entrada },
      { name: 'data_saida', label: 'Data de Saída', align: 'left', field: (row: IVisitante) => row.data_saida ? row.data_saida : '' }
    ] as IColuna[])
    
    async function salvarVisitante (visitante: IVisitante) {
      try {
        visitante.observacao = editor.value
        await visitanteSalvarService(visitante)
        fecharModal()
        await listarTodosVisitantes()
        $q.notify({ message: 'Visitante salvo com sucesso!', icon: 'check', color: 'positive' })
      } catch (error) {
        $q.notify({ message: 'Erro ao salvar Visitante', icon: 'error', color: 'negative' })
      }
    }

    async function listarTodosVisitantes () {
      try {
        lista_visitantes.value = await visitanteListarTodosService()
      } catch (error) {
        $q.notify({ message: 'Erro ao carregar Visitantes', icon: 'error', color: 'negative' })
      }
    }

    async function deletarVisitante (id: number) {
      try {
        fecharDialog()
        atualizar_lista_visitante.value = true
        $q.notify({ message: 'Visitante deletado com sucesso!', icon: 'error', color: 'positive' })
        await visitanteDeletarService(id)
      } catch (error) {
        console.log(error)
      }
    }

    function fecharModal () {
      popup_visitante.value = false
      editor.value = ''
      visitante_cadastro.value = {} as IVisitante
    }

    function abrirCaixaDialog (row: IVisitante) {
      popup_tabela.value = true
      visitante_selecionado.value = row
    }

    function fecharDialog () {
      popup_tabela.value = false
      visitante_selecionado.value = {} as IVisitante
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
      atualizar_lista_visitante,
      getPaginationLabel,
      dadosParaExibir,
      salvarVisitante,
      fecharModal,
      listarTodosVisitantes,
      abrirCaixaDialog,
      fecharDialog,
      deletarVisitante
    }
  }
})
