<script setup lang="ts">
import { ref, reactive } from 'vue'

const formData = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const errors = reactive({
  username: '',
  password: ''
})

const showPassword = ref(false)
const isSubmitting = ref(false)
const submittedPayload = ref<string | null>(null)

const handleSubmit = () => {
  errors.username = !formData.username ? 'Digite seu usuário' : ''
  errors.password = !formData.password ? 'Digite sua senha' : ''

  if (errors.username || errors.password) return

  isSubmitting.value = true

  setTimeout(() => {
    submittedPayload.value = JSON.stringify(formData, null, 2)
    console.log('Login feito:', formData)
    isSubmitting.value = false
  }, 400)
}

const fillDemo = () => {
  formData.username = 'GengarMaster'
  formData.password = 'shadow123'
  errors.username = ''
  errors.password = ''
}
</script>

<template>
  <div class="login-card">
    <div class="card-header">
      <h2 class="card-title">Entrar na Sombra</h2>
      <p class="card-subtitle">Acesse com sua conta</p>
    </div>

    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="form-group">
        <label class="form-label">Usuário</label>
        <input
          v-model="formData.username"
          type="text"
          placeholder="Seu nome de usuário"
          class="form-input"
          :class="{ 'has-error': errors.username }"
        />
        <span v-if="errors.username" class="error-text">{{ errors.username }}</span>
      </div>

      <div class="form-group">
        <label class="form-label">Senha</label>
        <div class="password-wrapper">
          <input
            v-model="formData.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••"
            class="form-input"
            :class="{ 'has-error': errors.password }"
          />
          <button type="button" class="eye-btn" @click="showPassword = !showPassword">
            {{ showPassword ? '🙈' : '👁️' }}
          </button>
        </div>
        <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
      </div>

      <div class="checkbox-row">
        <label class="checkbox-label">
          <input v-model="formData.rememberMe" type="checkbox" />
          <span>Lembrar de mim</span>
        </label>
      </div>

      <button type="submit" class="submit-btn" :disabled="isSubmitting">
        {{ isSubmitting ? 'Entrando...' : 'Entrar 👻' }}
      </button>

      <button type="button" class="demo-btn" @click="fillDemo">
        Preencher Dados
      </button>
    </form>

    <div v-if="submittedPayload" class="json-box">
      <p class="json-title">✨ Dados Enviados:</p>
      <pre><code>{{ submittedPayload }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.login-card {
  width: 100%;
  max-width: 460px;
  background: #18092c;
  border: 2px solid #7c3aed;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
  margin-bottom: 2rem;
  margin-top: 7rem;
}

.card-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #f3e8ff;
  margin: 0;
}

.card-subtitle {
  font-size: 0.85rem;
  color: #c084fc;
  margin-top: 0.25rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.85rem;
  color: #e9d5ff;
  font-weight: 600;
}

.password-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #0d041a;
  border: 1.5px solid #581c87;
  border-radius: 10px;
  color: #f3e8ff;
  outline: none;
}

.form-input:focus {
  border-color: #c084fc;
  box-shadow: 0 0 10px rgba(192, 132, 252, 0.4);
}

.form-input.has-error {
  border-color: #ef4444;
}

.eye-btn {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.error-text {
  font-size: 0.75rem;
  color: #fca5a5;
}

.checkbox-row {
  display: flex;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #c084fc;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  padding: 0.85rem;
  background: linear-gradient(135deg, #9333ea 0%, #6b21a8 100%);
  color: white;
  font-weight: 800;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
  transition: transform 0.2s;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

.demo-btn {
  background: transparent;
  border: 1px dashed #7c3aed;
  color: #c084fc;
  padding: 0.4rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.75rem;
}

.json-box {
  margin-top: 1.5rem;
  background: #090514;
  border: 1px solid #6b21a8;
  border-radius: 10px;
  padding: 1rem;
  color: #c084fc;
}

.json-title {
  margin: 0 0 0.5rem 0;
  font-size: 0.8rem;
  font-weight: bold;
}

pre {
  margin: 0;
  font-size: 0.8rem;
}
</style>