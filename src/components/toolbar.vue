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
      <q-btn class='botao' v-if='logado' color='negative' size='sm' @click='logout(false)'>
        <span class='q-mr-sm'>Sair</span>
        <q-icon name='logout' />
      </q-btn>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import toolbar from 'src/components/toolbar'
export default toolbar
</script>
