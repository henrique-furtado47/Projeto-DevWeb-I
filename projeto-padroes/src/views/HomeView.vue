<script>
import { useDificuldadeStore } from '@/stores/dificuldade'
export default {
  data() {
    return {
      dif_atual: 1,
    }
  },
  methods: {},
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
          <input selected type="radio" id="facil" name="dif" v-model="dif_atual" value="1" />
          <label for="facil"><h3>Fácil</h3></label>
        </li>
        <li>
          <input type="radio" id="medio" v-model="dif_atual" name="dif" value="2" />
          <label for="medio"><h3>Médio</h3></label>
        </li>
        <li>
          <input type="radio" id="dificil" v-model="dif_atual" name="dif" value="3" />
          <label for="dificil"><h3>Difícil</h3></label>
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
ul.dificuldade {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 5% 0;
}

.selecao {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 20px;
}
.negrito {
  font-weight: bold;
  color: #005586;
}
.selecao li {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
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
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 5% 0;
}
li {
  list-style: none;
}

li h3 {
  font-size: 1.5rem;
  color: #005586;
  margin: 10px 0;
}
@media (max-width: 600px) {
  .selecao {
    flex-direction: column;
    gap: 20px;
  }

  .selecao li {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
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

  li h3 {
    font-size: 1.2rem;
  }

  .principal {
    padding: 0 5%;
  }
  ul.dificuldade li {
    justify-content: center;
    width: 100%;
  }
}
</style>
