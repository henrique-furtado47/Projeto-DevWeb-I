<template>
  <div class="centro">
    <h1>Lamentável, você perdeu</h1>
    <img
      src="https://i.pinimg.com/originals/61/0d/b4/610db46156143357b6c2297acf03b987.gif"
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
  padding-top: 5%;
  min-height: 36vw;
}
</style>
