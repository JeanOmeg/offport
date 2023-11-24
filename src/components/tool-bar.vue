<template>
  <q-header>
    <q-toolbar class='row justify-center'>
      <div class='row items-center col-12 justify-between'>
        <div>
          <q-btn v-if='logado' size='sm' @click='drawer = !drawer'>
            <q-icon name='menu' />
            <span class='q-ml-sm'>Menu</span>
          </q-btn>
        </div>
        <span style='font-style: italic; font-weight: 400; font-size: 30px'>offPort</span>
        <div>
          <q-btn v-if='logado' color='negative' size='sm' @click='logoutService'>
            <span class='q-mr-sm'>Sair</span>
            <q-icon name='logout' />
          </q-btn>
        </div>
      </div>
    </q-toolbar>
  </q-header>
  <q-drawer v-model='drawer' :width='150' overlay bordered class='bg-white'>
    <q-list>
      <div>
        <EssentialLink v-for='link in link_list' :key='link.title' v-bind='link' />
      </div>
      <div v-if='verificaAdmin()'>
        <EssentialLink v-for='link in adminList' :key='link.title' v-bind='link' />
      </div>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import toolBar from 'src/components/tool-bar'
export default toolBar
</script>
