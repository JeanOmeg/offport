<template>
  <div class='max-width-100'>
    <q-item clickable :to='route' exact>
      <q-item-section>
        <q-item-label class='menu-toolbar text-left text-white'>
          {{ title }}
        </q-item-label>
      </q-item-section>
      <q-item-section v-if='icon' avatar class='text-white'>
        <q-icon :name='icon' />
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import menuToolbar from './comp-menu-toolbar'
export default menuToolbar
</script>
