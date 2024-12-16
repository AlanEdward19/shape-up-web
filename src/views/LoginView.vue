<template>
    <div class="container">
      <!-- Painel esquerdo -->
      <div class="left-panel">
        <div class="content">
          <h2>ShapeUp</h2>
          <p>
            Transforme sua rotina, conecte-se com sua evolução.<br />
            Nutrição, treinos e amizades em um só lugar!
          </p>
        </div>
      </div>
  
      <!-- Painel direito -->
      <div class="right-panel">
        <div class="content">
          <h3 class="title">Conectar-se</h3>
          <form>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <router-link to="/" class="btn">Continuar</router-link>
          </form>
          <p>Não possui conta? <router-link to="/signUp" class="sign-up-button">Crie sua conta</router-link></p>
          <button class="btn google-btn">Entrar com Google</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SinglePanel",
  };
  </script>
  
  <style scoped>
  /* Garantir que a tela ocupe altura total */
  html, body {
    height: 100%;
    margin: 0;
    background-color: #f0f0f0; /* Fundo suave */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Centraliza o container na tela */
  .container {
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  margin: 12rem auto;
}
  
  /* Painéis */
  .left-panel,
  .right-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Painel esquerdo */
  .left-panel {
    background-color: #f9f9f9;
    border-radius: 8px 0 0 8px;
  }
  
  .left-panel .content {
    padding: 40px;
    text-align: left; /* Texto justificado à esquerda */
  }
  
  /* Painel direito */
  .right-panel {
    background-color: #ffffff;
    border-radius: 0 8px 8px 0;
  }
  
  .right-panel .content {
    padding: 40px;
    text-align: center; /* Alinhamento central */
  }
  
  /* Inputs e botões */
  form input {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #666;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
  }
  
  .google-btn {
    background-color: #db4437;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }

  .title{
    text-align: left;
  }

  </style>
  