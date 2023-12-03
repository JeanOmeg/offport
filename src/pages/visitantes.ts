import { defineComponent, ref } from 'vue'
import { IColuna } from 'src/interfaces/coluna-interface'
import { IVisitanteCadastro } from 'src/interfaces/visitante-page-interface'
import { dadosParaExibir, getPaginationLabel } from 'src/utils/tabela-util'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'visitantes',

  mounted () {
    this.dadosParaExibir()
  },

  setup () {
    const formulario = ref({} as IVisitanteCadastro)
    const visitante_cadastro = ref({} as IVisitanteCadastro)
    const $q = useQuasar()
    const popup_visitante = ref(false)
    const editor = ref('')
    const colunas_visitantes = ref([
      { name: 'nome', required: true, label: 'Nome', align: 'left', field: (row: IVisitanteCadastro) => row.nome, format: val => `${val}`, sortable: true },
      { name: 'documento', align: 'left', label: 'Documento', field: (row: IVisitanteCadastro) => row.documento, sortable: true },
      { name: 'contato', label: 'Telefone', align: 'left', field: (row: IVisitanteCadastro) => row.telefone, sortable: true },
      { name: 'morador', label: 'Morador', align: 'left', field: (row: IVisitanteCadastro) => row.autorizado_por, sortable: true },
      { name: 'apartamento', label: 'Apartamento', align: 'left', field: (row: IVisitanteCadastro) => row.apartamento },
      { name: 'bloco', label: 'Bloco', align: 'left', field: (row: IVisitanteCadastro) => row.bloco },
      { name: 'garagem', label: 'Garagem', align: 'left', field: (row: IVisitanteCadastro) => row.garagem },
      { name: 'vaga', label: 'Vaga', align: 'left', field: (row: IVisitanteCadastro) => row.vaga },
      { name: 'data_entrada', label: 'Data de Entrada', align: 'left', field: (row: IVisitanteCadastro) => row.data_entrada },
      { name: 'data_saida', label: 'Data de Saída', align: 'left', field: (row: IVisitanteCadastro) => row.data_saida }
    ] as IColuna[])

    const rows = ref([] as IVisitanteCadastro[])

    const model_fake = ref('')

    async function salvarVisitante () {
      try {
        $q.notify({ message: 'Visitante salvo com sucesso!', icon: 'check', color: 'positive' })
        fecharModal()
      } catch (error) {
        $q.notify({ message: 'Erro ao salvar Visitante', icon: 'error', color: 'negative' })
      }
    }

    function fecharModal () {
      popup_visitante.value = false
      editor.value = ''
      visitante_cadastro.value = {} as IVisitanteCadastro
    }

    return {
      colunas_visitantes,
      rows,
      formulario,
      popup_visitante,
      visitante_cadastro,
      editor,
      model_fake,
      getPaginationLabel,
      dadosParaExibir,
      salvarVisitante,
      fecharModal
    }
  }
})
