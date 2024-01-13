<template>
  <q-page class='row items-center justify-center q-pa-md'>
    <q-card class='card-princial col-12 q-pa-md items-center justify-between'>
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
        <q-form class='col-12' @submit='listarVisitantes'>
          <div class='col-12 row justify-center items-center q-col-gutter-sm'>
            <q-input class='column col-4' dense v-model='filtros.nome' type='text' label='Nome' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='filtros.apartamento' type='number' :counter='false' label='Apartamento' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='filtros.bloco' type='text' label='Bloco' label-color='primary' clearable />
            <q-input class='column col-4' unmasked-value dense v-model='filtros.data_entrada' type='datetime-local' mask='DD-MM-YYYY HH:mm' label='Data de Entrada' label-color='primary' clearable />
            <q-input class='column col-4' dense unmasked-value v-model='filtros.data_saida' type='datetime-local' mask='DD-MM-YYYY HH:mm' label='Data de Saída' label-color='primary' clearable />
            <q-input class='column col-4' dense v-model='filtros.contato' type='text' mask='(##) ##### - ####' unmasked-value label='Telefone' label-color='primary' clearable />
            <div class='row col-12 justify-end q-mt-sm'>
              <q-btn class='botao q-px-none' color='primary' size='md' label='Pesquisar' type='submit' icon-right='search' />
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
  
      <div class='row items-center justify-center q-pa-none q-mb-sm'>
        <q-table
          bordered
          :dense='$q.screen.height > 768 ? false : true'
          table-header-class='text-primary'
          no-data-label='Não existem Visitantes cadastrados'
          @row-click='(evt, row: IVisitante, index) => { abrirCaixaDialog(row)}'
          :pagination-label='getPaginationLabel'
          :class="`${$q.screen.height > 868 ? 'tabela-1200' : $q.screen.height > 768 ? 'tabela-1080' : 'tabela-720' } col-12 my-sticky-virtscroll-table`"
          rows-per-page-label='Linhas por página'
          :rows-per-page-options='[0]'
          :rows='lista_visitantes'
          :columns='colunas_visitantes'
        />
      </div>
    </q-card>
  </q-page>

  <q-page-sticky position='bottom-right' :offset='[15, 15]'>
    <q-fab
      vertical-actions-align='right'
      :padding="`${$q.screen.height > 768 ? 'md' : 'sm' }`"
      icon='add'
      direction='up'
      color='dark'
    >
      <q-fab-action @click='popup_visitante = true' color='primary' label='Visitante' label-position='left' icon='person_add' padding='10px' label-style='font-size: 16px' square type='button' />
    </q-fab>
  </q-page-sticky>

  <q-dialog v-model='popup_visitante' persistent>
    <q-card :class="`${$q.screen.height > 868 ? 'dialog-height-1200' : $q.screen.height > 768 ? 'dialog-height-1080' : 'dialog-height-720' } col-12 row q-pa-md items-center justify-center dialog-width`">
      <div class='row col-6 justify-start text-left text-bold text-h6 text-primary'>
        <span>
          {{ visualizar ? "Visitante" : "Cadastro de Visitante" }}
        </span>
      </div>
      <div class='row col-6 justify-end q-mb-none'>
        <q-btn color='negative' round size='sm' type='button' icon='close' @click='fecharModal()' />
      </div>

      <q-card-section class='row col-12 items-center justify-center q-pa-none'>
        <q-separator class='col-12' size='2px' color='primary' />
      </q-card-section>
  
      <q-card-section class='row q-pa-none'>
        <q-form class='col-12' @submit='salvarVisitante(visitante_cadastro)'>
          <div class='col-12 row justify-start items-center q-col-gutter-sm'>
            <q-input class='column col-4' dense v-model='visitante_cadastro.nome' type='text' label='Nome' label-color='primary' clearable :readonly='visualizar' />
            <q-input class='column col-4' dense v-model='visitante_cadastro.documento' type='text' label='Documento' label-color='primary' clearable :readonly='visualizar' />
            <q-input class='column col-4' dense v-model='visitante_cadastro.contato' type='text' label='Telefone' label-color='primary' clearable mask='(##) ##### - ####' unmasked-value :readonly='visualizar' />
            
            <q-input class='column col-4' dense v-model='visitante_cadastro.apartamento' type='number' label='Apartamento' label-color='primary' clearable :readonly='visualizar' />
            <q-input class='column col-4' dense v-model='visitante_cadastro.bloco' type='text' label='Bloco' label-color='primary' clearable :readonly='visualizar' />
            <q-select class='column col-4' dense v-model='visitante_cadastro.garagem' :options='opcoes_garagem' label='Garagem' label-color='primary' clearable :readonly='visualizar' />
            
            <q-input class='column col-4' dense v-model='visitante_cadastro.morador' type='text' label='Autorizado por' label-color='primary' clearable :readonly='visualizar' />
            <q-input class='column col-4' dense v-model='visitante_cadastro.controlador' type='text' label='Controlador Responsavel' label-color='primary' clearable :readonly='visualizar' />
            <q-input class='column col-4' dense v-model='visitante_cadastro.vaga' type='text' label='Vaga' label-color='primary' clearable :disable="visitante_cadastro.garagem === 'Não' ? true : false" :readonly='visualizar' />
            
            <q-input class='column col-4' unmasked-value dense v-model='visitante_cadastro.data_entrada' type='datetime-local' mask='DD-MM-YYYY HH:mm' label='Data de Entrada' label-color='primary' clearable :readonly='visualizar' />
            <q-input class='column col-4' dense v-model='model_fake' type='text' label='Adicione suas observações no editor' label-color='primary' readonly />
            <q-input class='column col-4' dense unmasked-value v-model='visitante_cadastro.data_saida' type='datetime-local' mask='DD-MM-YYYY HH:mm' label='Data de Saída' label-color='primary' clearable :readonly='visualizar' />

            <div class='col-12 q-mt-md'>
              <q-editor v-model='editor' :class="`${$q.screen.height > 768 ? 'editor-full-hd' : 'editor-hd' }`" dense :readonly='visualizar' />
            </div>

            <div class='row col-12 q-mt-sm justify-end'>
              <q-btn color='primary' size='md' type='submit' label='Salvar' icon-right='save' :disable='visualizar' />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model='popup_tabela' persistent>
    <q-card class='row col-12 justify-center items-center' style='width: 25%;'>
      <q-card-actions class='column col-12 items-end q-pt-sm q-pb-none'>
        <q-btn color='negative' round size='sm' @click='fecharDialog' icon='close' />
      </q-card-actions>

      <q-card-actions class='row col-12 justify-center items-center q-py-sm'>
        <q-separator class='row col-12' inset size='2px' color='dark' />
      </q-card-actions>

      <q-card-actions class='column col-12 items-center justify-center q-py-sm'>
        <div class='text-subtitle1 text-bold text-primary'>
          {{ `Visitante: ${visitante_selecionado.nome}` }}
        </div>
      </q-card-actions>

      <div class='column col-12 q-mt-none q-mb-sm'>
        <q-card-actions class='column col-12 q-pt-none'>
          <q-btn class='botao' color='dark' size='md' @click='visualizarVisitante(visitante_selecionado)'>
            <span class='column col items-start'>Visualizar</span>
            <q-icon class='column col items-end' name='visibility' />
          </q-btn>
        </q-card-actions>
        <q-card-actions class='column col-12 q-pt-sm'>
          <q-btn class='botao' color='dark' size='md' @click='editarVisitante(visitante_selecionado)'>
            <span class='column col items-start'>Editar</span>
            <q-icon class='column col items-end' name='edit' />
          </q-btn>
        </q-card-actions>
        <q-card-actions class='column col-12 q-pt-sm'>
          <q-btn class='botao' color='negative' size='md' @click='deletarVisitante(visitante_selecionado.id)'>
            <span class='column col items-start'>Deletar</span>
            <q-icon class='column col items-end' name='delete' />
          </q-btn>
        </q-card-actions>
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IVisitante } from 'app/src-backend/interfaces/visitante/visitante-interface'
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
