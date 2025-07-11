// Evita falha se o arquivo de áudio não for encontrado
const sons = {
  acerto: new URL('@/assets/audio/acerto.mp3', import.meta.url).href,
  erro: new URL('@/assets/audio/erro.mp3', import.meta.url).href,
  vitoria: new URL('@/assets/audio/vitoria.mp3', import.meta.url).href,
  derrota: new URL('@/assets/audio/derrota.mp3', import.meta.url).href,
}

export function tocarSom(tipo) {
  const src = sons[tipo]
  if (!src) return

  const audio = new Audio(src)
  audio.play().catch((e) => {
    console.warn('Erro ao tocar áudio:', e)
  })
}

const fundo = new Audio(new URL('@/assets/audio/fundo.mp3', import.meta.url).href)
fundo.loop = true
fundo.volume = 0.5 // volume reduzido pra não incomodar

export function tocarMusicaFundo() {
  fundo.play().catch((e) => console.warn('Erro ao tocar fundo:', e))
}

export function pararMusicaFundo() {
  fundo.pause()
  fundo.currentTime = 0
  audio.volume = 0
}
