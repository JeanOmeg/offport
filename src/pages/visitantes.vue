<template>
  <q-page class='row justify-center items-center'>
    <q-card class='col-12 max-width-95 q-my-md'>
      <q-card-section class='row items-center justify-between' style='margin-bottom: 0;padding-bottom: 0;'>
        <q-separator class='col pm-none' size='2px' color='primary' />
        <span class='text-center text-bold text-primary pm-none' style='width: 60px;'>
          Filtros
        </span>
        <q-separator class='col pm-none' size='2px' color='primary' />
      </q-card-section>

      <q-card-section class='col-12 row justify-center' style='height: 120px; margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0;'>
        <div class='col-12 row justify-center items-center q-gutter-sm'>
          <q-input class='col' hide-bottom-space v-model='formulario.login' type='text' label='Login' label-color='primary' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de login corretamente!']" />
          <q-input class='col' hide-bottom-space v-model='formulario.id_condominio' type='text' label='Login' label-color='primary' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de login corretamente!']" />
          <q-input class='col' hide-bottom-space v-model='formulario.logado' type='text' label='Login' label-color='primary' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de login corretamente!']" />
        </div>

        <div class='col-12 row justify-center items-center q-gutter-sm'>
          <q-input class='col' hide-bottom-space v-model='formulario.login' type='text' label='Login' label-color='primary' bg-color='accent' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de login corretamente!']" />
          <q-input class='col' hide-bottom-space v-model='formulario.id_condominio' type='text' label='Login' label-color='primary' bg-color='accent' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de login corretamente!']" />
          <q-input class='col' hide-bottom-space v-model='formulario.logado' type='text' label='Login' label-color='primary' bg-color='accent' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de login corretamente!']" />
        </div>
      </q-card-section>

      <q-card-section class='row items-center justify-between' style='margin-bottom: 0;padding-bottom: 0;'>
        <q-separator class='col pm-none' size='2px' color='primary' />
        <span class='text-center text-bold text-primary pm-none' style='width: 80px;'>
          Visitantes
        </span>
        <q-separator class='col pm-none' size='2px' color='primary' />
      </q-card-section>

      <q-card-section class='col-12 row justify-center' style='padding-top: 0;'>
        <q-table
          dense
          class='tabela'
          :rows='rows'
          :columns='columns'
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import visitantes from 'src/pages/visitantes'
export default visitantes
</script>
