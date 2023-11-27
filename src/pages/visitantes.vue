<template>
  <div class='col-10 row justify-center items-center q-ma-md'>
    <q-card class='col-12'>
      <q-card-section class='col-12'>
        <q-card-section class='pm-none'>
          <div style='border: 1px solid black; height: 150px;'>
            {{ "FILTRO" }}
          </div>
        </q-card-section>
        <q-card-section>
          <q-separator class='pm-none' />
        </q-card-section>
        <q-card-section class='pm-none'>
          <div class='tabela'>
            <q-table
              style='border: 1px solid black;'
              class='tabela'
              :rows='rows'
              :columns='columns'
            />
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import visitantes from 'src/pages/visitantes'
export default visitantes
</script>
