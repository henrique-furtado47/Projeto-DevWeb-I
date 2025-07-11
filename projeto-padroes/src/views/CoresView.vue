<script>
import { useDificuldadeStore } from '@/stores/dificuldade'
import { tocarSom } from '@/utils/audio'
export default {
  data() {
    return {
      dif_atual: 1,
      padrao: [],
      resposta: null,
      feedback: '',
      vidas: 3,
      acertos: 0,
      coresDisponiveis: {
        1: ['red', 'blue', 'yellow'],
        2: ['green', 'orange', 'purple'],
        3: ['turquoise', 'salmon', 'gold', 'indigo'],
      },
    }
  },
  computed: {
    coresAtuais() {
      return this.coresDisponiveis[this.dif_atual] || this.coresDisponiveis[1]
    },
  },
  methods: {
    getDificuldade() {
      const dificuldadeStore = useDificuldadeStore()
      this.dif_atual = dificuldadeStore.dificuldade
    },

    gerarPadrao() {
      const padroes = {
        1: [this.padraoRepetidoVisual, this.padraoAlternadoVisual],
        2: [this.padraoRotacaoVisual, this.padraoInversoVisual],
        3: [this.padraoPosicaoVisual, this.padraoVisualFibonacci],
      }

      const lista = padroes[this.dif_atual] || padroes[1]
      const sorteado = lista[Math.floor(Math.random() * lista.length)]
      sorteado()
    },

    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    padraoRepetidoVisual() {
      const c = this.coresAtuais[this.random(0, this.coresAtuais.length - 1)]
      this.padrao = [c, c, c, c]
      this.resposta = c
    },

    padraoAlternadoVisual() {
      const a = this.coresAtuais[this.random(0, this.coresAtuais.length - 1)]
      let b
      do {
        b = this.coresAtuais[this.random(0, this.coresAtuais.length - 1)]
      } while (b === a)
      this.padrao = [a, b, a, b]
      this.resposta = a
    },

    padraoRotacaoVisual() {
      const start = this.random(0, this.coresAtuais.length - 1)
      const cores = this.coresAtuais
      const len = cores.length
      this.padrao = [
        cores[(start + 0) % len],
        cores[(start + 1) % len],
        cores[(start + 2) % len],
        cores[(start + 3) % len],
      ]
      this.resposta = cores[(start + 4) % len]
    },

    padraoInversoVisual() {
      const cores = [...this.coresAtuais].sort(() => 0.5 - Math.random()).slice(0, 4)
      this.padrao = cores
      this.resposta = cores[0]
    },

    padraoPosicaoVisual() {
      const a = this.coresAtuais[this.random(0, this.coresAtuais.length - 1)]
      const b = this.coresAtuais[this.random(0, this.coresAtuais.length - 1)]
      this.padrao = [a, a, b, b]
      this.resposta = a
    },

    padraoVisualFibonacci() {
      const c1 = this.coresAtuais[this.random(0, this.coresAtuais.length - 1)]
      const c2 = this.coresAtuais[this.random(0, this.coresAtuais.length - 1)]
      const fib = [c1, c2]

      while (fib.length < 5) {
        const next = fib[fib.length - 2]
        fib.push(next)
      }

      this.padrao = fib.slice(0, 4)
      this.resposta = fib[4]
    },

    verificarResposta(userChoice) {
      if (userChoice === this.resposta) {
        tocarSom('acerto')
        this.feedback =
          '<span style="color: green;" class="fa-solid fa-check verde"></span> Correto!'
        this.acertos++
        if (this.acertos >= 5) {
          tocarSom('vitoria')
          this.$router.push('/vitoria')
        } else {
          this.gerarPadrao()
        }
      } else {
        tocarSom('erro')
        this.feedback = `<span style="color: red;" class="fa-solid fa-xmark vermelho"></span> Errado. Era <span style="color: ${this.resposta};">${this.resposta}</span>`
        this.vidas--
        if (this.vidas <= 0) {
          tocarSom('derrota')
          this.$router.push('/derrota')
        } else {
          this.gerarPadrao()
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
    <div class="info">
      <p v-if="dif_atual == 1">Dificuldade: Fácil</p>
      <p v-if="dif_atual == 2">Dificuldade: Médio</p>
      <p v-if="dif_atual == 3">Dificuldade: Difícil</p>
      <p>Vidas: <span class="fa-solid fa-heart vermelho"></span> x{{ vidas }}</p>
      <p>Acertos: <span class="fa-solid fa-check verde"></span> x{{ acertos }}</p>
    </div>

    <div v-if="padrao.length">
      <h2>Padrão:</h2>
      <div class="padrao">
        <div
          v-for="(cor, i) in padrao"
          :key="i"
          class="bloco-cor"
          :style="{ backgroundColor: cor }"
        ></div>
      </div>

      <h3>Qual é a próxima cor?</h3>
      <div class="botoes-cores">
        <div
          v-for="cor in coresAtuais"
          :key="cor"
          @click="verificarResposta(cor)"
          class="bloco-cor"
          :style="{ backgroundColor: cor }"
          role="button"
          :title="cor"
          tabindex="0"
        ></div>
      </div>

      <p class="feed" v-html="feedback"></p>
    </div>
  </div>
</template>
<style scoped>
@import '../assets/padrao.css';
.padrao {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.bloco-cor {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid #333;
  cursor: pointer;
}

.botoes-cores {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.vermelho {
  color: red;
}

.verde {
  color: green;
}
</style>
