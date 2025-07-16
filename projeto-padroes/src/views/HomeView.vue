<script>
import { useDificuldadeStore } from '@/stores/dificuldade'

export default {
  data() {
    return {
      dif_atual: 1,
    }
  },
  watch: {
    dif_atual(newValue) {
      const dificuldadeStore = useDificuldadeStore()
      dificuldadeStore.dificuldade = newValue
      console.log('Dificuldade atualizada:', newValue)
    },
  },
  mounted() {
    const dificuldadeStore = useDificuldadeStore()
    this.dif_atual = dificuldadeStore.dificuldade
  },
}
</script>

<template>
  <div class="principal">
    <div class="title">
      <h1>Seja bem-vindo a <span class="negrito">Ache o Padrão</span></h1>
      <h2>Selecione a dificuldade e depois o padrão:</h2>
    </div>
    <div class="selecao">
      <ul class="dificuldade">
        <li>
          <input type="radio" id="facil" name="dif" v-model="dif_atual" value="1" />
          <label for="facil">Fácil</label>
        </li>
        <li>
          <input type="radio" id="medio" name="dif" v-model="dif_atual" value="2" />
          <label for="medio">Médio</label>
        </li>
        <li>
          <input type="radio" id="dificil" name="dif" v-model="dif_atual" value="3" />
          <label for="dificil">Difícil</label>
        </li>
      </ul>

      <ul>
        <li>
          <button @click="$router.push('numeros')">Números</button>
        </li>
        <li>
          <button @click="$router.push('letras')">Letras</button>
        </li>
        <li>
          <button @click="$router.push('formas')">Formas</button>
        </li>
        <li>
          <button @click="$router.push('cores')">Cores</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.principal {
  margin: 5% 0 0 0;
  justify-content: center;
  min-height: 100vh;
}
.title {
  text-align: center;
}
.title h1 {
  font-size: 2.5rem;
  color: #005586;
}
.title h2 {
  font-size: 1.5rem;
  color: #333;
  margin: 20px 0;
}
.negrito {
  font-weight: bold;
  color: #005586;
}

.selecao {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 20px;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 5% 0;
}

ul.dificuldade {
  align-items: flex-start;
}

ul.dificuldade li {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  color: #005586;
  list-style: none;
}

ul.dificuldade input[type="radio"] {
  transform: scale(1.3);
  accent-color: #005586;
  cursor: pointer;
}

ul.dificuldade label {
  cursor: pointer;
}

li {
  list-style: none;
}

button {
  background-color: #005586;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background-color: #00466e;
}

@media (max-width: 600px) {
  .selecao {
    flex-direction: column;
    gap: 20px;
  }

  .title h1 {
    font-size: 1.5rem;
    margin: 20px 0;
  }

  .title h2 {
    font-size: 1rem;
    margin: 20px 0;
  }

  ul {
    gap: 15px;
    margin: 10% 0;
  }

  ul.dificuldade li {
    width: 100%;
    justify-content: flex-start;
  }

  .principal {
    padding: 0 5%;
  }
}
</style>
