<script setup lang="ts">
import AppHeader from './componentes/AppHeader.vue'
import LoginForm from './componentes/LoginForm.vue'
import AppFooter from './componentes/AppFooter.vue'
</script>

<template>
  <div class="gengar-app">
    <AppHeader />
    <main class="main-container">
      <LoginForm />
    </main>
    <AppFooter />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #07030d;
  color: #f3e8ff;
  font-family: system-ui, -apple-system, sans-serif;
}

.gengar-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}
</style>