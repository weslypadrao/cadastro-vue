<script setup lang="ts">
import LoginForm from '../componentes/LoginForm.vue'
</script>

<template>
  <main class="login-page">
    <LoginForm />
  </main>
</template>

<style scoped>
.login-page {
   flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;}

</style>