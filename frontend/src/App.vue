<template>
<div id="app">
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">120 anos de Atleta</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Cadastrar +</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <form v-on:submit.prevent="searchAthlete(name)">
        <div class="input-field col s12">
          <input type="text" v-model="name">
          <label for="autocomplete-input">Pesquisar Atleta</label>
        </div>
        <div class="input-field col s12">
          <input type="text" v-model="search">
          <label for="autocomplete-input">Pesquisar na Tabela</label>
        </div>
        <button class="waves-effect waves-light btn"  type="submit">Pesquisar</button>
        
      </form>
      <div class="col s12">
        <select class="browser-default"
          @change="onChange($event)"
          @click.prevent="getAthletes(pagination.path_page + key)"
          v-model="key"
        >
          <option
            v-for="pages in pagination.last_page" 
            v-bind:key="pages"
          >
            {{ pages }}
          </option>
        </select>
      </div>
    </div>
    
      
    <table class="highlight centered">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Time</th>
          <th>Esporte</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="athlete in filterAthletes" :key="athlete.ID">
          <td>{{ athlete.ID }}</td>
          <td>{{ athlete.Name }}</td>
          <td>{{ athlete.Age }}</td>
          <td>{{ athlete.Team }}</td>
          <td>{{ athlete.Sport }}</td>
          <td>
            <a href=""> Ver |</a>
            <a href=""> Editar |</a>
            <a href=""> Deletar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      athlete: {},
      athletes: [],
      search: "",
      name: "",
      key: "",
      pagination: {},
    };
  },
  methods: {
    async getAthletes(page) {
      page = page || "/api/athletes/";
      await axios.get(page).then((res) => {
        this.athletes = res.data.result;
        this.pagination = {
          last_page: 252,
          path_page: "/api/athletes/" + "?page=",
        };
      });
    },
    async searchAthlete(name) {
      await axios.get(`/api/athletes/?search=${name}`).then((res) => {
        this.athletes = res.data.result;
      });
    },
    onChange(event) {
      event.target.value;
    },
  },
  components: {},
  computed: {
    filterAthletes() {
      return this.athletes.filter((athlete) => {
        return athlete.Name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  async created() {
    await this.getAthletes();
  },
};
</script>

<style>
body {
  background-color: #ffffff;
}
nav {
  background-color: #9932CC;
}
table {
  background-color: #ffffff;
}
a {
  text-decoration: none;
}
a:hover {
  cursor: pointer;
}
</style>
