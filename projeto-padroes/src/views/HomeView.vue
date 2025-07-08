<script setup></script>
<template>
  <div class="centro">
    <div class="title">
      <h1>Seja bem-vindo a <span class="negrito">Ache o Padrão</span></h1>
      <h2>Selecione o Padrão de acordo com a dificuldade:</h2>
    </div>
    <ul>
      <li>
        <h3>Fácil</h3>
        <button>Números</button>
      </li>
      <li>
        <h3>Médio</h3>
        <button>Letras</button>
      </li>
      <li>
        <h3>Médio</h3>
        <button>Letras</button>
      </li>
      <li>
        <h3>Difícil</h3>
        <button>Formas</button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.centro {
  margin: 5% 0 0 0;
  justify-content: center;
  min-height: 100vh;
}
.title {
  text-align: center;
}
.title h1 {
  font-size: 2.5rem;
  color: #005586;
}
.title h2 {
  font-size: 1.5rem;
  color: #333;
  margin: 20px 0;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 5% 0;
}
li {
  list-style: none;
}

li h3 {
  font-size: 1.5rem;
  color: #005586;
  margin-bottom: 10px;
}
button {
  width: 150px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #005586;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #003f5c;
}
</style>
