<template>
  <div id="app">
    <nav>
      <div class="nav">
        <a class="brand-logo">120 years athletes</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Lista dos Atletas</router-link></li>
          <li><router-link to="/cadastro">Cadastrar</router-link></li>
        </ul>
      </div>
    </nav>
    <div>
      <transition name="slide-fade" mode="out-in">  
        <router-view></router-view>
      </transition>
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
