<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
</script>
<script>
import { tocarMusicaFundo } from '@/utils/audio'

export default {
  mounted() {
    document.addEventListener(
      'click',
      () => {
        tocarMusicaFundo()
      },
      { once: true },
    ) // só toca uma vez após 1 clique
  },
}
</script>
<template>
  <div class="app">
    <HeaderComp />
    <RouterView />
    <MuteButton />
    <FooterComp />
  </div>
</template>

<style scoped></style>
