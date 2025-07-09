<script>
import { useDificuldadeStore } from '@/stores/dificuldade'

export default {
  data() {
    return {
      dif_atual: 1,
      padrao: [],
      resposta: null,
      userAnswer: '',
      feedback: '',
      vidas: 3,
      acertos: 0,
    }
  },
  methods: {
    getDificuldade() {
      const dificuldadeStore = useDificuldadeStore()
      this.dif_atual = dificuldadeStore.dificuldade
    },

    gerarPadrao() {
      this.feedback = ''
      this.userAnswer = ''

      const padroes = {
        1: [this.padraoMais1, this.padraoMenos1, this.padraoRepetido],
        2: [this.padraoMais2, this.padraoAlternado, this.padraoDuplicacao],
        3: [this.padraoFibonacci, this.padraoMultiplicativo, this.padraoSomaComIndice],
      }

      const lista = padroes[this.dif_atual] || padroes[1]
      const sorteado = lista[Math.floor(Math.random() * lista.length)]
      sorteado()
    },

    // FÁCEIS
    padraoMais1() {
      const n = this.random(0, 10)
      this.padrao = [n, n + 1, n + 2, n + 3]
      this.resposta = n + 4
    },
    padraoMenos1() {
      const n = this.random(10, 20)
      this.padrao = [n, n - 1, n - 2, n - 3]
      this.resposta = n - 4
    },
    padraoRepetido() {
      const n = this.random(0, 9)
      this.padrao = [n, n, n, n]
      this.resposta = n
    },

    // MÉDIOS
    padraoMais2() {
      const n = this.random(0, 10)
      this.padrao = [n, n + 2, n + 4, n + 6]
      this.resposta = n + 8
    },
    padraoAlternado() {
      const n = this.random(1, 9)
      this.padrao = [n, n + 1, n, n + 1]
      this.resposta = n
    },
    padraoDuplicacao() {
      const n = this.random(1, 5)
      this.padrao = [n, n * 2, n * 4, n * 8]
      this.resposta = n * 16
    },

    // DIFÍCEIS
    padraoFibonacci() {
      let a = this.random(1, 10)
      let b = this.random(1, 10)
      const seq = [a, b]

      while (seq.length < 5) {
        const next = seq[seq.length - 1] + seq[seq.length - 2]
        seq.push(next)
      }

      this.padrao = seq.slice(0, 4)
      this.resposta = seq[4]
    },

    padraoMultiplicativo() {
      const n = this.random(1, 4)
      this.padrao = [n, n * 2, n * 4, n * 8]
      this.resposta = n * 16
    },
    padraoSomaComIndice() {
      const n = this.random(1, 5)
      const p0 = n
      const p1 = p0 + 1
      const p2 = p1 + 2
      const p3 = p2 + 3
      const p4 = p3 + 4
      this.padrao = [p0, p1, p2, p3]
      this.resposta = p4
    },

    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    verificarResposta() {
      const user = parseInt(this.userAnswer)
      if (user === this.resposta) {
        this.feedback = '✅ Correto!'
        this.acertos++
        if (this.acertos >= 5) {
          this.$router.push('/vitoria')
        } else {
          setTimeout(() => this.gerarPadrao(), 1000)
        }
      } else {
        this.feedback = `❌ Errado. Era ${this.resposta}`
        this.vidas--
        if (this.vidas <= 0) {
          alert('😢 Fim de jogo!')
          this.$router.push('/derrota')
        } else {
          setTimeout(() => this.gerarPadrao(), 1000)
        }
      }
    },
  },
  mounted() {
    this.getDificuldade()
    setTimeout(() => this.gerarPadrao(), 100)
  },
}
</script>

<template>
  <div class="centro">
    <p>Dificuldade: {{ dif_atual }}</p>
    <p>Vidas: ❤️ x{{ vidas }}</p>
    <p>Acertos: ✅ x{{ acertos }}</p>

    <div v-if="padrao.length">
      <h2>Padrão:</h2>
      <div style="display: flex; gap: 10px; margin-bottom: 1rem">
        <div v-for="(n, i) in padrao" :key="i" class="caixa">{{ n }}</div>
      </div>

      <input type="number" v-model="userAnswer" placeholder="Próximo número?" class="input" />
      <button @click="verificarResposta">Verificar</button>

      <p v-if="feedback" style="margin-top: 1rem">{{ feedback }}</p>
    </div>
  </div>
</template>

<style scoped>
.centro {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}
.caixa {
  width: 50px;
  height: 50px;
  background: #b3d9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}
.input {
  margin-top: 10px;
  padding: 10px;
  font-size: 1rem;
  width: 150px;
  text-align: center;
}
button {
  margin-top: 10px;
  padding: 10px 20px;
  font-weight: bold;
  background-color: #005586;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #00416d;
}
</style>
