<template>
  <q-layout view='hHh lpR lFr'>
    <toolbar />
    <q-page-container>
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
