<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <div class="app">
    <HeaderComp />
    <RouterView />
    <FooterComp />
  </div>
</template>

<style scoped></style>
