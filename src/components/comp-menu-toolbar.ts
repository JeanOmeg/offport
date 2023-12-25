import { defineComponent } from 'vue'

export default defineComponent({
  name: 'menu-toolbar',
  props: {
    title: { type: String, required: true, default: '' },
    route: { type: String, required: true, default: '' },
    icon: { type: String, required: true, default: '' }
  }
})
