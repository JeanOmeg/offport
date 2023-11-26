<template>
  <q-header>
    <q-toolbar class='row justify-center bg-dark'>
      <div class='row col-12 items-center justify-between'>
        <div>
          <q-toolbar-title class='text-h5 text-center'>
            <span class='text-bold'>off</span><span class='text-bold text-italic'>Port</span>
            <span class='text-h6'>{{ ` - ${pagina}` }}</span>
          </q-toolbar-title>
        </div>
        <div>
          <q-btn class='botao' v-if='logado' color='negative' size='sm' @click='logout(false)'>
            <span class='q-mr-sm'>Sair</span>
            <q-icon name='logout' />
          </q-btn>
        </div>
      </div>
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
    <q-separator v-if='verificaAdmin()' size='3px' color='white' inset />
    <q-list class='row' v-if='verificaAdmin()'>
      <menu-toolbar v-for='link in lista_menu_admin' :key='link.title' v-bind='link' @click='pagina = link.title' />
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import toolbar from 'src/components/toolbar'
export default toolbar
</script>
