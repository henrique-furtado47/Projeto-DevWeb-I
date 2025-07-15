<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { tocarMusicaFundo, pararMusicaFundo } from '@/utils/audio'

const mutado = ref(false)

const toggleMute = () => {
  mutado.value = !mutado.value
  mutado.value ? pararMusicaFundo() : tocarMusicaFundo()
}
</script>
<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="esq">
          <RouterLink to="/"><span class="fa-solid fa-brain"></span>Ache o Padrão</RouterLink>
          <button
            class="mute-btn"
            @click="toggleMute"
            :title="mutado ? 'Som desligado' : 'Som ligado'"
          >
            <span v-if="mutado" class="fa-solid fa-volume-xmark"></span>
            <span v-else class="fa-solid fa-volume-high"></span>
          </button>
        </div>
        <div class="dir">
          <RouterLink to="/about">Créditos</RouterLink>
          <RouterLink to="/tutorial">Como jogar</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
header {
  background-color: #005586;
  color: white;
  padding: 10px 0;
}
span {
  margin-right: 10px;
}
nav {
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div.dir {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
  transition: 0.15s;
}

a:hover {
  text-decoration: underline;
  font-weight: bold;
}

@media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  div.dir {
    margin-top: 10px;
  }

  div.esq {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .mute-btn {
    width: 30px;
  }
}
</style>
