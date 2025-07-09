import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDificuldadeStore = defineStore('dif', () => {
  const dificuldade = ref(1)
  return { dificuldade }
})
