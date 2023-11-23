<template>
  <q-page class='row items-center'>
    <div class='col-6'>
      <q-img src='../assets/offPort.jpeg' style='height: 90vh; width: 100%;' />
    </div>
    <div class='row col-6 justify-center items-center'>
      <q-form @submit='enviarLogin' class='row col-12 items-center justify-center'>
        <div class='col-12 text-h6 text-center q-mb-md'>
          <span class='text-h1' style='font-style: italic; font-weight: 500;'>offPort</span><br>Solução completa para seu condomínio
        </div>
        <div class='col-8'>
          <q-input filled v-model='formulario.login' type='text' label='Login' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de login corretamente!']" />
        </div>
        <div class='col-8'>
          <q-input filled v-model='formulario.senha' type='password' label='Senha' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de senha corretamente!']" class='row col-4' />
        </div>
        <div class='row justify-center col-12 q-mb-md'>
          <q-btn label='Login' color='primary' type='submit' size='md' />
        </div>
        <div class='text-h6 text-center q-mb-md' style='font-style: italic;'>
          Jean Fernandes - www.github.com/JeanOmeg
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import loginPage from './login-page'
export default loginPage
</script>

<style>
  .text-none {
    text-decoration: none;
  }
</style>
