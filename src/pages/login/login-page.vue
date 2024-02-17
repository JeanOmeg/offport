<template>
  <q-page class='row justify-evenly items-center'>
    <div class='column justify-center items-center'>
      <q-img src='../../assets/offPort.png' width='500px' />
    </div>
    <div class='column justify-center items-center'>
      <q-form @submit='enviarLogin' class='column q-gutter-sm'>
        <div class='row justify-center'>
          <span class='row text-h1 text-dark text-bold'> 
            off
          </span>
          <span class='row text-h1 text-dark text-bold text-italic'>
            {{ 'Port' }}
            <q-icon name='home' />
          </span>
        </div>
        <span class='text-h6 text-primary text-bold'>Solução completa e offline para seu condomínio</span>
        <q-input filled dense v-model='formulario.login' type='text' label='Login' label-color='primary' bg-color='white' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de login corretamente!']" />
        <q-input filled dense v-model='formulario.senha' type='password' label='Senha' label-color='primary' bg-color='white' :rules="[ (val) => val && val.length > 0 && val.length < 40 || 'Preencha o campo de senha corretamente!']" />
        <div class='row justify-center'>
          <q-btn class='botao' label='Login' color='primary' type='submit' size='md' icon-right='login' />
        </div>
      </q-form>
    </div>
    <div class='row justify-center items-center aviso'>
      <div class='text-center text-h6 text-primary max-width-100'>
        <span>Venda proibida!</span>
      </div>
      <div class='text-center text-primary text-italic text-bold'>
        <span>Desenvolvido por Jean Fernandes - www.github.com/JeanOmeg</span>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import loginPage from 'src/pages/login/login-page'
export default loginPage
</script>

<style>
</style>
