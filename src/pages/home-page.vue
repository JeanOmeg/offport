<template>
  <tool-bar />
  <q-page class='row justify-center'>
    <div class='col-xs-12 col-sm-11 col-md-10 col-lg-11 col-xl-12 q-mt-md q-mt-md items-center q-gutter-md' style='height: 85vh;'>
      <q-card class='row justify-center text-h4' style='font-weight: 300; font-style: italic;'>
        {{ 'Moradores' }}
      </q-card>
      <q-table
        :rows='rows'
        :columns='columns'
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import homePage from 'src/pages/home-page'
export default homePage
</script>
