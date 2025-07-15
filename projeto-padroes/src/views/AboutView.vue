<template>
  <div class="centro">
    <h1>
      Trabalho feito por <a href="https://github.com/paulok3tchup">Paulo Cesar</a> e
      <a href="https://github.com/henrique-furtado47">Henrique Furtado</a>
    </h1>
    <img src="https://i.redd.it/kap731650yaf1.gif" alt="Tenna" />
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
a {
  text-decoration: none;
  color: #005586;
}

a:hover {
  text-decoration: underline;
  color: #01314d;
}

@media (max-width: 600px) {
  .centro {
    padding: 20px;
    text-align: center;
  }
}
</style>
