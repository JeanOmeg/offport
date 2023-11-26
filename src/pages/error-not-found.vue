<template>
  <div class='fullscreen bg-blue text-white text-center q-pa-md flex flex-center'>
    <div>
      <div style='font-size: 30vh'>
        404
      </div>
      <div class='text-h2' style='opacity: 0.4'>
        Página não encontrada
      </div>
      <q-btn class='botao' color='white' text-color='blue' unelevated to='/visitantes' label='Início' no-caps />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'error-not-found'
})
</script>
