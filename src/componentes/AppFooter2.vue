<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div>👻</div>
    <h2>CLUBE DO FANTASMA</h2>
    <p>Entre nas sombras e explore um mundo cheio de mistérios.</p>
    <span>© {{ year }} Clube do Fantasma • Feito com Vue 3</span>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  padding: 3rem 1rem;
  background: #0d041a;
  border-top: 1px solid #3b0764;
  color: #a855f7;
}

footer div {
  font-size: 2rem;
}

footer h2 {
  color: #c084fc;
  font-size: 1rem;
  letter-spacing: 2px;
}

footer p,
footer span {
  font-size: .8rem;
}
</style>