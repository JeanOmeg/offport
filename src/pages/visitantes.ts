import { Ref, defineComponent, ref } from 'vue'
import { QTableProps } from 'quasar'

export default defineComponent({
  name: 'visitantes',

  setup () {
    const columns: Ref<QTableProps['columns']> = ref([
      {
        name: 'name',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
      { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
      { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
      { name: 'protein1', label: 'Protein (g)', field: 'protein1' },
      { name: 'protein2', label: 'Protein (g)', field: 'protein2' },
      { name: 'protein3', label: 'Protein (g)', field: 'protein3' },
      { name: 'protein4', label: 'Protein (g)', field: 'protein4' },
      { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
      { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
    ])

    const rows: Ref<QTableProps['rows']> = ref([
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 326,
        calcium: '2%',
        iron: '22%'
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein1: 4.0,
        protein2: 4.0,
        protein3: 4.0,
        protein4: 4.0,
        sodium: 54,
        calcium: '12%',
        iron: '6%'
      }
    ])

    return {
      columns,
      rows
    }
  }
})
