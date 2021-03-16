<template>
  <div class="container">
    <form v-on:submit.prevent="updateArticle()">
      <div class="row">
        <h2 class="center">Editar Atleta</h2>

        <br>

        <div class="input-field col s6">
          <input id="nome" v-model="athleteForm.Name" type="text" class="validate" />
          <label class="active" for="nome">Nome</label>
        </div>

        <div class="input-field col s6">
          <select  v-model="athleteForm.Sex" id="sexo" class="validate">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <label class="active" for="sex">Sexo</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="idade" v-model="athleteForm.Age" type="text" class="validate" />
          <label class="active" for="idade">Idade</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input id="altura"  v-model="athleteForm.Height" type="text" class="validate" />
          <label class="active" for="altura">Altura</label>
        </div>

        <div class="input-field col s6">
          <input id="peso"  v-model="athleteForm.Weight" type="text" class="validate" />
          <label class="active" for="peso">Peso</label>
        </div>
        </div>
    

      <div class="input-field col s12">
        <select v-model="athleteForm.NOC" id="noc">
          <option v-for="noc in nocOptions" :key="noc">
            {{ noc }}
          </option>
        </select>
        <label class="active" for="noc">NOC</label>
      </div>

      
      <div class="input-field col s12">
        <input id="jogo" v-model="athleteForm.Games" type="text" class="validate" />
        <label class="active" for="jogo">Jogos</label>
      </div>

      <div class="input-field col s12">
        <select v-model="athleteForm.Team" id="país">
          <option v-for="country in teamOptions" :key="country">
            {{ country }}
          </option>
        </select>
        <label class="active" for="país">País</label>
      </div>

      <div class="input-field col s12">
        <input
          id="ano"
          v-model="athleteForm.Year"
          type="number"
          min="1900"
          max="2021"
          class="validate"
        />
        <label class="active" for="ano">Ano</label>
      </div>
      

      <div class="input-field col s12">
        <select v-model="athleteForm.Season" id="temporada" class="validate">
          <option>Winter</option>
          <option>Summer</option>
        </select>
        <label class="active" for="temporada">Temporada</label>
      </div>
    
    
      <div class="input-field col s12">
        <input id="cidade" v-model="athleteForm.City" type="text" class="validate" />
        <label class="active" for="cidade">Cidade</label>
      </div>
      

      <div class="input-field col s12">
        <input id="esporte" v-model="athleteForm.Sport" type="text" class="validate" />
        <label class="active" for="esporte">Esporte</label>
      </div>
    

      <div class="input-field col s12">
        <input id="evento" v-model="athleteForm.Event" type="text" class="validate" />
        <label class="active" for="evento">Evento</label>
      </div>
   

      <div class="input-field col s12">
        <select v-model="athleteForm.Medal" class="validate" id="medalha">
          <option>Bronze</option>
          <option>Silver</option>
          <option>Gold</option>
          <option>NA</option>
        </select>
        <label class="active" for="medalha">Medalha</label>
      </div>
     

      <div class="input-field col s12">
        <button type="submit" class="waves-effect waves-light btn">Atualizar</button>
      </div>
     
    </form>
  </div>
</template>

<script src='./editAthlete.js'></script>
