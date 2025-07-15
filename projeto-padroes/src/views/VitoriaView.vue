<template>
  <div class="centro">
    <h1>Parabéns, você ganhou!</h1>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJvdxCHeuQOfiK4__ZpAmsOwdyK674P2rDA&s"
      alt="velho do absolute cinema"
    />
    <button @click="$router.push('/')">Voltar ao Início</button>
  </div>
</template>
<style scoped>
.centro {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  min-height: 100vh;
  gap: 20px;
}
@media (max-width: 600px) {
  .centro {
    padding: 10%;
  }
}
</style>
