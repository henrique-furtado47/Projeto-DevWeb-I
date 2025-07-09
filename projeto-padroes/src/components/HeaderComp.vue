<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="esq">
          <RouterLink to="/"><span class="fa-solid fa-brain"></span>Ache o Padrão</RouterLink>
        </div>
        <div class="dir">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">Sobre</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
header {
  background-color: #005586;
  color: white;
  padding: 10px 0;
}
span {
  margin-right: 10px;
}
nav {
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div.dir {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
  transition: 0.15s;
}

a:hover {
  text-decoration: underline;
  font-weight: bold;
}
</style>
