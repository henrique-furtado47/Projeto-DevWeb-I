<script>
import { useDificuldadeStore } from '@/stores/dificuldade'

export default {
  data() {
    return {
      dif_atual: 1,
      padrao: [],
      resposta: '',
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
      this.userAnswer = ''

      const padroes = {
        1: [this.padraoLetrasCrescente, this.padraoLetrasRepetidas],
        2: [this.padraoLetrasPulando, this.padraoLetrasAlternadas, this.padraoLetrasPalindromo],
        3: [this.padraoLetrasDecrescente, this.padraoLetrasPares, this.padraoTecladoQwerty],
      }

      const lista = padroes[this.dif_atual] || padroes[1]
      const sorteado = lista[Math.floor(Math.random() * lista.length)]
      sorteado()
    },

    // Padrões FÁCEIS
    padraoLetrasCrescente() {
      const start = this.random(65, 87) // A até W
      this.padrao = [
        this.codigoParaLetra(start),
        this.codigoParaLetra(start + 1),
        this.codigoParaLetra(start + 2),
        this.codigoParaLetra(start + 3),
      ]
      this.resposta = this.codigoParaLetra(start + 4)
    },

    padraoLetrasRepetidas() {
      const letra = this.codigoParaLetra(this.random(65, 90))
      this.padrao = [letra, letra, letra, letra]
      this.resposta = letra
    },

    // Padrões MÉDIOS
    padraoLetrasPulando() {
      const start = this.random(65, 81) // A até Q
      this.padrao = [
        this.codigoParaLetra(start),
        this.codigoParaLetra(start + 2),
        this.codigoParaLetra(start + 4),
        this.codigoParaLetra(start + 6),
      ]
      this.resposta = this.codigoParaLetra(start + 8)
    },

    padraoLetrasAlternadas() {
      const a = this.codigoParaLetra(this.random(65, 85)) // A até U
      const b = this.codigoParaLetra(this.random(65, 85))
      this.padrao = [a, b, a, b]
      this.resposta = a
    },

    padraoLetrasPalindromo() {
      const a = this.codigoParaLetra(this.random(65, 90))
      const b = this.codigoParaLetra(this.random(65, 90))
      this.padrao = [a, b, b, a]
      this.resposta = b
    },

    // Padrões DIFÍCEIS
    padraoLetrasDecrescente() {
      const start = this.random(68, 90) // D até Z
      this.padrao = [
        this.codigoParaLetra(start),
        this.codigoParaLetra(start - 1),
        this.codigoParaLetra(start - 2),
        this.codigoParaLetra(start - 3),
      ]
      this.resposta = this.codigoParaLetra(start - 4)
    },

    padraoLetrasPares() {
      const pares = ['A', 'C', 'E', 'G', 'I', 'K', 'M', 'O', 'Q', 'S', 'U', 'W', 'Y']
      const i = this.random(0, pares.length - 5)
      this.padrao = pares.slice(i, i + 4)
      this.resposta = pares[i + 4]
    },

    padraoTecladoQwerty() {
      const linha = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
      const i = this.random(0, linha.length - 5)
      this.padrao = linha.slice(i, i + 4)
      this.resposta = linha[i + 4]
    },

    // Utilitários
    letraParaCodigo(letra) {
      return letra.charCodeAt(0)
    },

    codigoParaLetra(codigo) {
      return String.fromCharCode(codigo)
    },

    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    verificarResposta() {
      const user = this.userAnswer.toString().toUpperCase().trim()
      const esperado = this.resposta.toString().toUpperCase()

      if (user === esperado) {
        this.feedback = '✅ Correto!'
        this.acertos++
        if (this.acertos >= 5) {
          this.$router.push('/vitoria')
        } else {
          this.gerarPadrao()
        }
      } else {
        this.feedback = `❌ Errado. Era ${this.resposta}`
        this.vidas--
        if (this.vidas <= 0) {
          alert('😢 Fim de jogo!')
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
        <div v-for="(l, i) in padrao" :key="i" class="caixa">{{ l }}</div>
      </div>

      <input
        type="text"
        maxlength="1"
        v-model="userAnswer"
        placeholder="Próxima letra?"
        class="input"
        @keyup.enter="verificarResposta"
      />
      <button @click="verificarResposta">Verificar</button>

      <p v-if="feedback" style="margin-top: 1rem">{{ feedback }}</p>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/padrao.css';
</style>
