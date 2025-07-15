<template>
  <div class="centro">
    <h1>
      Selecione uma dificuldade e um tipo de padrão para começar. Isso te levará para um tela com o
      padrão que você deve completar. Se acertar 5 padrões, você ganha! Se errar 3 padrões, você
      perde! <span class="negrito">Boa Sorte!</span>
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
h1 {
  text-align: center;
  font-size: 1.5rem;
  width: 60%;
  line-height: 130%;
}

@media (max-width: 600px) {
  .centro {
    padding: 20px;
    text-align: center;
  }
  h1 {
    width: 100%;
    font-size: 1rem;
  }
}
</style>
