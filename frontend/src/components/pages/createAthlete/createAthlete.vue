<template>
  <div class="container">
    <form v-on:submit.prevent="addAthlete()">
      <div class="row">
        <h2 class="center">Adicionar Atleta</h2>
        <div class="input-field col s6">
          <input id="nome" v-model="athleteForm.Name" type="text" class="validate" />
          <label for="nome">Nome</label>
        </div>
        <div class="input-field col s6">
          <select  v-model="athleteForm.Sex" id="sexo" class="validate">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <label for="sex">Sexo</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="idade" v-model="athleteForm.Age" type="text" class="validate" />
          <label for="idade">Idade</label>
        </div>
      </div>

      <div class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="altura"  v-model="athleteForm.Height" type="text" class="validate" />
            <label for="altura">Altura</label>
          </div>

          <div class="input-field col s6">
            <input id="peso"  v-model="athleteForm.Weight" type="text" class="validate" />
            <label for="peso">Peso</label>
          </div>
        </div>
      </div>

      <div class="input-field col s12">
        <select v-model="athleteForm.Team" id="país">
          <option v-for="country in teamOptions" :key="country">
            {{ country }}
          </option>
        </select>
        <label for="país">País</label>
      </div>

      <div class="input-field col s12">
        <select v-model="athleteForm.NOC" id="noc">
          <option v-for="noc in nocOptions" :key="noc">
            {{ noc }}
          </option>
        </select>
        <label for="noc">NOC</label>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="noc" v-model="athleteForm.NOC" type="text" class="validate" />
          <label for="noc">NOC</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="jogo" v-model="athleteForm.Games" type="text" class="validate" />
          <label for="jogo">Jogos</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input
            id="ano"
            v-model="athleteForm.Year"
            type="number"
            min="1900"
            max="2021"
            class="validate"
          />
          <label for="ano">Ano</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <select v-model="athleteForm.Season" id="temporada" class="validate">
            <option>Winter</option>
            <option>Summer</option>
          </select>
          <label for="temporada">Temporada</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="cidade" v-model="athleteForm.City" type="text" class="validate" />
          <label for="cidade">Cidade</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="esporte" v-model="athleteForm.Sport" type="text" class="validate" />
          <label for="esporte">Esporte</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="evento" v-model="athleteForm.Event" type="text" class="validate" />
          <label for="evento">Evento</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <select v-model="athleteForm.Medal" id="medalha" class="validate">
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
            <option>NA</option>
          </select>
          <label for="medalha">Medalha</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <button type="submit" class="waves-effect waves-light btn">Cadastrar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { TEAM, NOC } from '../../../utils/options';
import axios from 'axios';

export default {
  name: "Form",
  data() {
    return {
      teamOptions: TEAM.REGIAO,
      nocOptions: NOC.NOC_REGIAO,
      athleteForm: {
        Name: "",
        Sex: "",
        Age: "",
        Height: "",
        Weight: "",
        Team: "",
        NOC: "",
        Games: "",
        Year: "",
        Season: "",
        City: "",
        Sport: "",
        Event: "",
        Medal: "",
      },
    };
  },
  methods: {
    addAthlete() {

      axios.post('/api/athletes/', this.athleteForm)
          .then(() => {
            this.$router.push({
              name: 'lista',
            });
          })
          .catch((err) => {
            console.log(err);
          });
    },
  }
};
</script>
