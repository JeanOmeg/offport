<template>
  <q-layout view='hHh lpR lFr'>
    <q-page-container>
      <tool-bar />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import ToolBar from '../components/tool-bar.vue'

export default defineComponent({
  name: 'layout-padrao',
  components: {
    ToolBar
  },

  setup () {
    return {}
  }
})
</script>
