<template>
  <q-page class='row items-center justify-center q-pa-md'>
    <q-card class='col-12 q-pa-md items-center justify-between' :style="$q.screen.height > 768 ? 'min-height: 700px; max-height: 700px;' : 'min-height: 600px; max-height: 600px;'">
      <q-card-section class='row col-12 items-center justify-center q-pa-none'>
        <q-separator class='col' size='2px' color='primary' />
        <div class='text-center text-bold text-primary'>
          <span class='q-mx-md'>
            Filtros
          </span>
        </div>
        <q-separator class='col' size='2px' color='primary' />
      </q-card-section>
  
      <q-card-section class='row col-12 q-pa-none'>
        <q-form class='col-12'>
          <div class='col-12 row justify-center items-center q-col-gutter-sm'>
            <q-input class='column col-4' dense v-model='formulario.id_condominio' type='text' label='Nome' label-color='primary' />
            <q-input class='column col-4' dense v-model='formulario.logado' type='number' :counter='false' label='Apartamento' label-color='primary' />
            <q-input class='column col-4' dense v-model='formulario.login' type='text' label='Bloco' label-color='primary' />
            <q-input class='column col-4' unmasked-value dense v-model='formulario.token' type='datetime-local' mask='DD-MM-YYYY HH:mm' label='Data de Entrada' label-color='primary' />
            <q-input class='column col-4' dense unmasked-value v-model='formulario.refresh_token' type='datetime-local' label='Data de Saída' label-color='primary' />
            <q-input class='column col-4' dense v-model='formulario.id_usuario' type='tel' mask='(##) ##### - ####' unmasked-value label='Telefone' label-color='primary' />
            <div class='column q-mt-sm col-12 items-end'>
              <q-btn color='primary' class='col-1' size='md'>
                <span class='flex q-mr-sm'>Pesquisar</span>
                <q-icon name='search' />
              </q-btn>
            </div>
          </div>
        </q-form>
      </q-card-section>
  
      <q-card-section class='row items-center justify-center q-px-none q-pt-sm'>
        <q-separator class='col' size='2px' color='primary' />
        <div class='text-center text-bold text-primary'>
          <span class='q-mx-md'>
            Visitantes
          </span>
        </div>
        <q-separator class='col' size='2px' color='primary' />
      </q-card-section>
  
      <q-card-section class='row items-center justify-center q-pa-none'>
        <q-table
          no-data-label='Não possui dados para serem exibidos!'
          bordered
          flat
          :pagination-label='getPaginationLabel'
          class='col-12'
          rows-per-page-label='Linhas por página'
          style='max-height: 460px; min-height: 460px;'
          :rows-per-page-options='[0]'
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
