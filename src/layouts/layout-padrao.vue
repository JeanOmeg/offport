<template>
  <q-layout view='hHh lpR lFr'>
    <q-page-container>
      <toolbar />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import toolbar from '../components/toolbar.vue'

export default defineComponent({
  name: 'layout-padrao',
  components: {
    toolbar
  },

  setup () {
    return {}
  }
})
</script>
