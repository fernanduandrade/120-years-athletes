<template>
  <div id="app">
    <nav>
      <div class="nav">
        <a class="brand-logo">120 years athletes</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/lista">Lista dos Atletas</router-link></li>
          <li><router-link to="/cadastro">Cadastrar</router-link></li>
        </ul>
      </div>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
body {
  background-color: #ffffff;
}
nav {
  background-color: #25282c;
}
</style>
