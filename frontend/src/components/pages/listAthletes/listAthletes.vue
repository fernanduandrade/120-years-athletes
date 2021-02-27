q<template>
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
                <button  class="waves-effect waves-light btn" type="submit">pesquisar</button>
              </div>

              <div class="col s2">
                <p class="page-style"><strong>PÁGINA: </strong></p>
              </div>
              <div class="col s2">
                <select
                  class="browser-default"
                  @click.prevent="getAthletes(pagination.path_page + pageKey)"
                  v-model="pageKey"
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
            <td class="actions col s12">
              <router-link class="material-icons view-icon" :to="{name: 'perfil', params: {id: athlete.ID}}">remove_red_eye</router-link>
              <router-link class="material-icons edit-icon" :to="{name: 'atualizar', params: {id: athlete.ID}}">edit</router-link>
              <a class="material-icons delete-icon" v-on:click="deleteAthlete(athlete.ID)">delete_forever</a>
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
      pageKey: "",
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
          path_page: "/api/athletes/?page=",
        };
      });
    },
    async searchAthlete(name) {
      await axios.get(`/api/athletes/?search=${name}`).then((res) => {
        this.athletes = res.data.result;
      });
    },
    onChange(event) {
      console.log(event.target.value);
    },
    async deleteAthlete(id) {
      await axios.delete(`/api/athletes/${id}/`)
        .then(() => {
          this.getAthletes();
        })
        .catch(err => {
          console.log(err);
        });
    }
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

<style scoped>
.page-style {
  margin: 0 auto;
  font-size: 24px;
}
.actions {
  display: flex;
  padding-right: 10px;
  justify-content: space-between;
} 
.delete-icon {
  cursor: pointer;
  color: rgb(216, 6, 6);
}
.view-icon {
  cursor: pointer;
  color: rgb(6, 137, 177);
}
.edit-icon {
  cursor: pointer;
  color: rgb(6, 238, 6);
}
</style>
