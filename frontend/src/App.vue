<template>
<div id="app">
    <nav>
        <div class="nav">
            <a class="brand-logo">120 anos de olimpíada</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <router-link class="link-item" to="/">Lista dos Atletas</router-link>
                </li>
                <li>
                    <router-link class="link-item" to="/cadastrar">Cadastrar</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <div>
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</div>
</template>

<style>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}

.link-item:hover {
    border-bottom: 4px solid #4fc08d;
}
</style>
