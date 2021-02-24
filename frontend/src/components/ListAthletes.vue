<template>
  <div>
    <div class="container">
      <div class="row">
        <form v-on:submit.prevent="searchAthlete(name)">
          <div class="input-field col s6">
            <input type="text" v-model="name" />
            <label for="autocomplete-input">Pesquisar Atleta</label>
          </div>
          <div class="input-field col s6">
            <input type="text" v-model="search" />
            <label for="autocomplete-input">Pesquisar na Tabela</label>
          </div>

          <div class="col s8">
            <div class="row">
              <div class="col s3">
                <button class="waves-effect waves-light btn" type="submit">
                  Pesquisar
                </button>
              </div>
              <div class="col s2">
                <p><strong style="font-size: 20px">PÁGINA: </strong></p>
              </div>
              <div class="col s2">
                <select
                  class="browser-default"
                  @change="onChange($event)"
                  @click.prevent="getAthletes(pagination.path_page + key)"
                  v-model="key"
                >
                  <option
                    v-for="pages in pagination.last_page"
                    v-bind:key="pages"
                    value=""
                  >
                    {{ pages }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>

      <hr />

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
          total: res.data.count,
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
