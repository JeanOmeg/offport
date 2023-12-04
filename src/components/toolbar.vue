<template>
  <q-header>
    <q-toolbar class='row justify-center bg-dark'>
      <q-toolbar-title class='row col-12 justify-center text-h5 text-center'>
        <div class='row items-center text-bold text-h5'>
          <span>off</span>
          <span class='row text-italic q-mr-xs'>
            Port
          </span>
          <q-icon class='q-mr-sm' name='home' />
          <span>{{ `| ${pagina === 'Condomínio' || pagina === 'Perfil' || pagina === 'Controladores' || pagina === 'Configurações' ? ' ' : ' Controle de '} ${pagina} ${pagina === 'Prestadores' ? 'De Serviços' : ''}` }}</span>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-drawer 
    :model-value='true'
    :width='210'
    show-if-above
    :class='`${verificaAdmin() ? "column justify-evenly" : "column justify-center"} bg-primary`'
  >
    <q-list class='row'>
      <menu-toolbar v-for='menu in lista_menu' :key='menu.title' v-bind='menu' @click='pagina = menu.title' />
    </q-list>
    <q-separator size='3px' color='dark' inset />
    <q-list class='row' v-if='verificaAdmin()'>
      <menu-toolbar v-for='link in lista_menu_admin' :key='link.title' v-bind='link' @click='pagina = link.title' />
    </q-list>
    <q-separator v-if='verificaAdmin()' size='3px' color='dark' inset />
    <q-list class='row justify-center'>
      <q-btn class='botao row col-12 justify-between q-px-none q-mx-none' v-if='logado' color='negative' size='md' @click='popup_confirmar_logout = true'>
        <span class='column items-start col-5'>Sair</span>
        <q-icon class='column items-end col-5' name='logout' />
      </q-btn>
    </q-list>
  </q-drawer>

  <q-dialog :model-value='popup_confirmar_logout' persistent>
    <q-card class='row col-12 justify-start q-pa-none' style='width: 40%;'>
      <q-card-section class='row col-12 text-center text-h6 text-bold text-primary justify-center items-center q-py-xs'>
        {{ 'Deseja sair do' }} 
        <span class='q-ml-xs'>off</span>
        <span class='text-italic'>
          Port
        </span>
        <q-icon name='home' />?
      </q-card-section>
      <q-card-section class='row col-12 justify-center q-pt-none q-pb-xs'>
        <q-separator size='2px' inset color='dark' class='row col-12' />
      </q-card-section>
      <q-card-section class='row col-12 justify-between q-pb-md q-pt-sm'>
        <q-btn class='botao' color='negative' size='md' @click='popup_confirmar_logout = false'>
          <span>Cancelar</span>
        </q-btn>
        <q-btn class='botao' color='dark' size='md' @click='logout(false)'>
          <span>Confirmar</span>
        </q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import toolbar from 'src/components/toolbar'
export default toolbar
</script>
