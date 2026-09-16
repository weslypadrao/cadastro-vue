<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <p>&copy; {{ currentYear }} Gengar Theme • Feito com Vue 3</p>
  </footer>
</template>

<style scoped>
.app-footer {
  width: 100%;
  text-align: center;
  padding: 1.5rem;
  background: #0d041a;
  border-top: 1px solid #3b0764;
  color: #a855f7;
  font-size: 0.85rem;
  margin-top: auto;
}
</style>