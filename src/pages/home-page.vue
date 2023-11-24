<template>
  <q-page class='flex justify-center items-center'>
    <q-card style='min-width: 65vw' class='flex justify-center items-center'>
      <q-card-section style='min-height: 85vh; max-height: 90vh;' class='flex justify-center items-center'>
        <q-table
          style='min-height: 70vh; max-height: 70vh;'
          :rows='rows'
          :columns='columns'
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import homePage from 'src/pages/home-page'
export default homePage
</script>
