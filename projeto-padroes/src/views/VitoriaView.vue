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
<style>
.centro {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  min-height: 36vw;
}
</style>
