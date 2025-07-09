<script>
import { useDificuldadeStore } from '@/stores/dificuldade'
export default {
  data() {
    return {
      dif_atual: 1,
    }
  },
  methods: {
    getDificuldade() {
      const dificuldadeStore = useDificuldadeStore()
      this.dif_atual = dificuldadeStore.dificuldade
    },
  },
  watch: {},
  mounted() {
    this.getDificuldade()
  },
}
</script>
<template>
  <div class="centro">
    <p>{{ dif_atual }}</p>
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
.centro {
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
button {
  width: 150px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #005586;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #003f5c;
}
</style>
