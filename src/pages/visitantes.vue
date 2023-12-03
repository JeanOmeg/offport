<template>
  <q-page class='row items-center justify-center q-pa-md'>
    <q-card :class="`${$q.screen.height > 768 ? 'tela-full-hd' : 'tela-hd' } col-12 q-pa-md items-center justify-between`">
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
            <q-input class='column col-4' dense v-model='formulario.nome' type='text' label='Nome' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='formulario.apartamento' type='number' :counter='false' label='Apartamento' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='formulario.bloco' type='text' label='Bloco' label-color='primary' clearable />
            <q-input class='column col-4' unmasked-value dense v-model='formulario.data_entrada' type='datetime-local' mask='DD-MM-YYYY HH:mm' label='Data de Entrada' label-color='primary' clearable />
            <q-input class='column col-4' dense unmasked-value v-model='formulario.data_saida' type='datetime-local' mask='DD-MM-YYYY HH:mm' label='Data de Saída' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='formulario.telefone' type='text' mask='(##) ##### - ####' unmasked-value label='Telefone' label-color='primary' clearable />
            <div class='row col-12 justify-end q-mt-sm'>
              <q-btn class='botao q-px-none' color='primary' size='sm' type='submit'>
                <span class='q-mr-sm'>Pesquisar</span>
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
  
      <q-card-section class='row items-center justify-center q-pa-none q-mb-sm'>
        <q-table
          bordered
          table-header-class='text-primary'
          no-data-label='Sem dados para exibir'
          :pagination-label='getPaginationLabel'
          :class="`${$q.screen.height > 768 ? 'tabela-full-hd' : 'tabela-hd' } col-12 my-sticky-virtscroll-table`"
          rows-per-page-label='Linhas por página'
          :rows-per-page-options='[0]'
          :rows='rows'
          :columns='colunas_visitantes'
        />
      </q-card-section>
    </q-card>
  </q-page>

  <q-page-sticky position='bottom-right' :offset='[10, 5]'>
    <q-fab
      vertical-actions-align='right'
      padding='sm'
      icon='add'
      direction='up'
      color='dark'
    >
      <q-fab-action @click='popup_visitante = true' color='primary' label='Visitante' label-position='left' icon='person_add' padding='5px' square type='button' />
    </q-fab>
  </q-page-sticky>

  <q-dialog v-model='popup_visitante' persistent>
    <q-card class='col-12 q-pa-md items-center justify-between dialog-width dialog-height'>
      <q-card-section class='row col-12 items-center justify-center q-pa-none'>
        <q-separator class='col' size='2px' color='primary' />
        <div class='text-center text-bold text-primary'>
          <span class='q-mx-md'>
            Cadastro de Visitantes
          </span>
        </div>
        <q-separator class='col' size='2px' color='primary' />
      </q-card-section>
  
      <q-card-section class='row q-pa-none'>
        <q-form class='col-12' @submit='salvarVisitante()'>
          <div class='col-12 row justify-start items-center q-col-gutter-sm'>
            <q-input class='column col-4' dense v-model='visitante_cadastro.nome' type='text' label='Nome' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='visitante_cadastro.documento' type='text' label='Documento' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='visitante_cadastro.telefone' type='text' label='Contato' label-color='primary' clearable mask='(##) ##### - ####' unmasked-value />
            
            <q-input class='column col-4' dense v-model='visitante_cadastro.apartamento' type='text' label='Apartamento' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='visitante_cadastro.bloco' type='text' label='Bloco' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='visitante_cadastro.garagem' type='text' label='Garagem' label-color='primary' clearable />
            
            <q-input class='column col-4' dense v-model='visitante_cadastro.autorizado_por' type='text' label='Autorizado por' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='visitante_cadastro.controlador' type='text' label='Controlador Responsavel' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='visitante_cadastro.vaga' type='text' label='Vaga' label-color='primary' clearable />
            
            <q-input class='column col-4' unmasked-value dense v-model='visitante_cadastro.data_entrada' type='datetime-local' mask='DD-MM-YYYY HH:mm' label='Data de Entrada' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='model_fake' type='text' label='Adicione suas observações no editor' label-color='primary' readonly />
            <q-input class='column col-4' dense unmasked-value v-model='visitante_cadastro.data_saida' type='datetime-local' mask='DD-MM-YYYY HH:mm' label='Data de Saída' label-color='primary' clearable />

            <div class='col-12 q-mt-md'>
              <q-editor v-model='editor' :class="`${$q.screen.height > 768 ? 'editor-full-hd' : 'editor-hd' }`" dense />
            </div>

            <div class='row col-12 q-mt-sm justify-between'>
              <div class='row col-2 justify-start'>
                <q-btn class='q-mr-sm botao' color='negative' size='sm' type='button' @click='fecharModal()'>
                  <span class='q-mr-sm'>Fechar</span>
                  <q-icon name='logout' />
                </q-btn>
              </div>
  
              <div class='row col-2 justify-end'>
                <q-btn class='botao' color='primary' size='sm' type='submit'>
                  <span class='q-mr-sm'>Salvar</span>
                  <q-icon name='save' />
                </q-btn>
              </div>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import visitantes from 'src/pages/visitantes'
export default visitantes
</script>

<style lang="sass">
.my-sticky-virtscroll-table
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    background-color: #ffffff

  thead tr th
    position: sticky
    z-index: 1
  thead tr:last-child th
    top: 48px
  thead tr:first-child th
    top: 0
  tbody
    scroll-margin-top: 48px
</style>
