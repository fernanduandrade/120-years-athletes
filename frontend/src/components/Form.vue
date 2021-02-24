<template>
  <div class="container">
    <form>
      <div class="row">
        <h2 class="center">Adicionar Atleta</h2>
        <div class="input-field col s6">
          <input id="nome" type="text" class="validate" />
          <label for="nome">Nome</label>
        </div>
        <div class="input-field col s6">
          <select id="sexo" class="validate">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <label for="sex">Sexo</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="idade" type="text" class="validate" />
          <label for="idade">Idade</label>
        </div>
      </div>

      <div class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="altura" type="text" class="validate" />
            <label for="altura">Altura</label>
          </div>

          <div class="input-field col s6">
            <input id="peso" type="text" class="validate" />
            <label for="peso">Peso</label>
          </div>
        </div>
      </div>

      <div class="input-field col s12">
        <select v-model="athleteForm.Team" id="sexo">
          <option v-for="country in teamOptions" :key="country">
            {{ country }}
          </option>
        </select>
        <label for="sex">Time</label>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="noc" type="text" class="validate" />
          <label for="noc">NOC</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="jogo" type="text" class="validate" />
          <label for="jogo">Jogos</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input
            id="ano"
            type="number"
            min="1920"
            max="2021"
            class="validate"
          />
          <label for="ano">Ano</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <select id="temporada" class="validate">
            <option>Winter</option>
            <option>Summer</option>
          </select>
          <label for="temporada">Temporada</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="cidade" type="text" class="validate" />
          <label for="cidade">Cidade</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="esporte" type="text" class="validate" />
          <label for="esporte">Esporte</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="evento" type="text" class="validate" />
          <label for="evento">Evento</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <select id="temporada" class="validate">
            <option>Bronze</option>
            <option>Silver</option>
            <option>Golder</option>
            <option>NA</option>
          </select>
          <label for="temporada">Temporada</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <button class="waves-effect waves-light btn">Cadastrar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { TEAM } from "../utils/options";

export default {
  name: "Form",
  data() {
    return {
      teamOptions: TEAM.REGIAO,
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
};
</script>
