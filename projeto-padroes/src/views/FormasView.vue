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
      formas: ['quadrado', 'triangulo', 'circulo', 'hexagono'],
    }
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
      const f = this.formas[this.random(0, 3)]
      this.padrao = [f, f, f, f]
      this.resposta = f
    },

    padraoAlternadoVisual() {
      const a = this.formas[this.random(0, 3)]
      let b
      do {
        b = this.formas[this.random(0, 3)]
      } while (b === a)
      this.padrao = [a, b, a, b]
      this.resposta = a
    },

    padraoRotacaoVisual() {
      const start = this.random(0, 3)
      this.padrao = [
        this.formas[(start + 0) % 4],
        this.formas[(start + 1) % 4],
        this.formas[(start + 2) % 4],
        this.formas[(start + 3) % 4],
      ]
      this.resposta = this.formas[(start + 4) % 4]
    },

    padraoInversoVisual() {
      const f = [...this.formas].sort(() => 0.5 - Math.random()).slice(0, 4)
      this.padrao = f
      this.resposta = f[0]
    },

    padraoPosicaoVisual() {
      const a = this.formas[this.random(0, 3)]
      const b = this.formas[this.random(0, 3)]
      this.padrao = [a, b, a, 'circulo']
      this.resposta = b
    },

    padraoVisualFibonacci() {
      const f1 = this.formas[this.random(0, 3)]
      const f2 = this.formas[this.random(0, 3)]
      const fib = [f1, f2]

      while (fib.length < 5) {
        const next = fib[fib.length - 2]
        fib.push(next)
      }

      this.padrao = fib.slice(0, 4)
      this.resposta = fib[4]
    },

    verificarResposta(userChoice) {
      if (userChoice === this.resposta) {
        this.feedback =
          '<span style="color: green;" class="fa-solid fa-check verde"></span> Correto!'
        tocarSom('acerto')
        this.acertos++
        if (this.acertos >= 5) {
          tocarSom('vitoria')
          this.$router.push('/vitoria')
        } else {
          this.gerarPadrao()
        }
      } else {
        tocarSom('erro')
        this.feedback = `<span style="color: red;" class="fa-solid fa-xmark vermelho"></span> Errado. Era ${this.resposta}`
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
        <div v-for="(forma, i) in padrao" :key="i" class="forma" :class="forma"></div>
      </div>

      <h3>Qual é a próxima forma?</h3>
      <div class="botoes-formas">
        <div
          v-for="forma in formas"
          :key="forma"
          @click="verificarResposta(forma)"
          :class="['forma', forma]"
          role="button"
          :title="forma"
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

.forma {
  width: 60px;
  height: 60px;
  display: inline-block;
}

.botoes-formas {
  margin-top: 1rem;
}

.botoes-formas div {
  cursor: pointer;
  margin: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.quadrado {
  background: red;
}

.circulo {
  background: blue;
  border-radius: 50%;
}

.triangulo {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 60px solid green;
  background: none;
}

.hexagono {
  background: purple;
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
}
</style>
