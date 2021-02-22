<template>
  <div id="app">
    <div class="info-table">  
      <h1 class="text-center">120 anos de Atletas</h1>
      <form v-on:submit.prevent="searchAthlete(name)">
        <input type="text"  v-model="name" placeholder="Pesquisar no banco de dados">
        <button type="submit">Pesquisar</button>
      </form>
      <input type="text" v-model="search" placeholder="Pesquisar por Atleta na table">
      <table>
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
              <a href="">| Ver |</a>
              <a href=""> Editar |</a>
              <a href=""> Deletar |</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      athlete: {},
      athletes: [],
      search: '',
      name: '',
      nextPage: false,
    };
  },
  methods: {
    async getAthletes() {
      await axios.get("/api/athletes/")
        .then(res => {
          this.athletes = res.data.results;
        });
    },
    async searchAthlete(name) {
      await axios.get(`/api/athletes/?search=${name}`)
        .then(res => {
          this.athletes = res.data.results;
        });
    },
  },
  components: {
    
  },
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
h1 {
  text-align: center
}
.info-table {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
thead,
tfoot {
  background-color: #3f87a6;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
}

caption {
  padding: 10px;
  caption-side: bottom;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 5px 10px;
}

td {
  text-align: center;
}

a {
  text-decoration: none;
  color: blue
}
a:hover {
  cursor: pointer;
  border-bottom: 1px solid #3f87a6;
}
</style>
