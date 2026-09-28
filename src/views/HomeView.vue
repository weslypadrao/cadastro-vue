<script setup lang="ts">
import AppHeader from '../componentes/AppHeader.vue'
import AppFooter from '../componentes/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main class="home">

    <section class="hero">
      <div class="ghost">👻</div>
      <span>SHADOW MODE</span>

      <h1>
        Bem-vindo ao 
        <strong>Clube do Fantasma</strong>
      </h1>

      <p>
        Entre no mundo dos Pokémon Fantasma e descubra
        um universo cheio de mistérios e aventuras.
      </p>

      <button>EXPLORAR AGORA 👻</button>
    </section>

    <section class="about">
      <span>SOBRE O SITE</span>
      <h2>O mundo dos Pokémon Fantasma</h2>

      <p>
        O Clube do Fantasma é um espaço dedicado aos
        Pokémon do tipo Fantasma. Conheça diferentes
        Pokémon, descubra curiosidades e explore esse universo.
      </p>
    </section>

    <section class="pokemon">
      <span>EXPLORE</span>
      <h2>Pokémon em destaque</h2>

      <div class="cards">

        <div class="card">
          <div>👻</div>
          <h3>Gengar</h3>
          <p>Um Pokémon misterioso que vive nas sombras.</p>
          <button>VER MAIS</button>
        </div>

        <div class="card">
          <div>🎭</div>
          <h3>Mimikyu</h3>
          <p>Um Pokémon misterioso que esconde sua aparência.</p>
          <button>VER MAIS</button>
        </div>

        <div class="card">
          <div>🌑</div>
          <h3>Pokémon Fantasma</h3>
          <p>Conheça outros Pokémon desse tipo.</p>
          <button>EXPLORAR</button>
        </div>

      </div>
    </section>

    <section class="curiosity">
      <div>🔮</div>

      <div>
        <span>VOCÊ SABIA?</span>
        <h2>Um universo cheio de mistérios</h2>

        <p>
          Descubra histórias, curiosidades e informações
          sobre os Pokémon Fantasma.
        </p>

        <button>VER CURIOSIDADES</button>
      </div>
    </section>

  </main>

  <AppFooter />
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: #0d041a;
  color: #f3e8ff;
}

.hero {
  text-align: center;
  padding: 7rem 1.5rem;
}

.ghost {
  font-size: 5rem;
  filter: drop-shadow(0 0 20px #9333ea);
}

.hero span,
.about > span,
.pokemon > span,
.curiosity span {
  color: #c084fc;
  font-size: .75rem;
  font-weight: bold;
  letter-spacing: 3px;
}

.hero h1 {
  font-size: 3.5rem;
  margin: 1rem auto;
  max-width: 800px;
}

.hero strong {
  display: block;
  color: #c084fc;
}

.hero p,
.about p,
.card p,
.curiosity p {
  color: #a855f7;
  line-height: 1.7;
}

.hero p {
  max-width: 600px;
  margin: auto;
}

button {
  margin-top: 1.5rem;
  padding: .8rem 1.5rem;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #9333ea, #6b21a8);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.about,
.pokemon {
  max-width: 1000px;
  margin: auto;
  padding: 5rem 1.5rem;
  text-align: center;
}

.about p {
  max-width: 700px;
  margin: auto;
}

h2 {
  font-size: 2rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background: #18092c;
  border: 1px solid #581c87;
  border-radius: 15px;
  padding: 2rem;
}

.card > div {
  font-size: 3rem;
}

.card h3 {
  color: #f3e8ff;
}

.card button {
  margin-top: .5rem;
}

.curiosity {
  max-width: 900px;
  margin: 3rem auto 6rem;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  background: #18092c;
  border: 2px solid #7c3aed;
  border-radius: 20px;
}

.curiosity > div:first-child {
  font-size: 4rem;
}

@media (max-width: 700px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .curiosity {
    flex-direction: column;
    text-align: center;
  }
}
</style>