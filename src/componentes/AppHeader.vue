<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <div class="brand">
        <div class="gengar-icon">👻</div>
        <h1 class="brand-title">{{ title || 'CLUBE DO FANTASMA' }}</h1>
      </div>
      <div class="status-tag">
        <span class="gengar-eyes"></span> Shadow Mode
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  background: #120722;
  border-bottom: 2px solid #9333ea;
  box-shadow: 0 0 20px rgba(147, 51, 234, 0.4);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.gengar-icon {
  font-size: 1.8rem;
  animation: float 3s ease-in-out infinite;
}

.brand-title {
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #c084fc;
  margin: 0;
  text-shadow: 0 0 10px rgba(192, 132, 252, 0.6);
}

.status-tag {
  background: rgba(147, 51, 234, 0.2);
  border: 1px solid #c084fc;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #f3e8ff;
}

.gengar-eyes {
  font-size: 0.85rem;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
</style>