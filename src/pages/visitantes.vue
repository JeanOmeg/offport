<template>
  <q-page class='row justify-center items-center'>
    <q-card class='column justify-evenly q-pa-md card-padrao'>
      <div class='filtro' style='border: 1px solid black;'>
        {{ "FILTRO" }}
      </div>
      <q-table
        style='border: 1px solid black;'
        class='tabela'
        :rows='rows'
        :columns='columns'
      />
    </q-card>
  </q-page>
</template>

<script lang="ts">
import visitantes from 'src/pages/visitantes'
export default visitantes
</script>
