<template>
  <div class="container">
    <form v-on:submit.prevent="addAthlete()">
      <div class="row">
        <h2 class="center">Adicionar Atleta</h2>
        <div class="input-field col s6">
          <input id="nome" v-model="athleteForm.name" type="text" class="validate" />
          <label for="nome">Nome</label>
        </div>

        <!-- <div class="input-field col s6">
          <select v-model="selectSex" id="sexo" class="validate">
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro</option>
          </select>
          <label for="sex">Sexo</label>
        </div> -->

        <div class="input-field col s6">
          <input id="sex" v-model="athleteForm.sex" type="text" class="validate" />
          <label for="sex">Sexo</label>
        </div >

        <div class="input-field col s12">
          <input id="idade" v-model="athleteForm.age" type="text" class="validate" />
          <label for="idade">Idade</label>
        </div>

        <div class="input-field col s12">
          <input id="esporte" v-model="athleteForm.sport" type="text" class="validate" />
          <label for="esporte">Esporte</label>
        </div>

        <div class="input-field col s12">
          <select v-model="athleteForm.team" id="país">
            <option v-for="country in teamOptions" :key="country">
              {{ country }}
            </option>
          </select>
          <label for="país">País</label>
        </div>

        <div class="input-field col s12">
          <input
            id="ano"
            v-model="athleteForm.year"
            type="number"
            min="1900"
            max="2050"
            class="validate"
          />
          <label for="ano">Ano</label>
        </div>  
      
        <div class="input-field col s12">
          <select v-model="athleteForm.medal" id="medalha" class="validate">
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
            <option>NA</option>
          </select>
          <label for="medalha">Medalha</label>
        </div>


        <div class="input-field col s12">
          <button type="submit" class="waves-effect waves-light btn">Cadastrar</button>
        </div>  
      </div>
    </form>
  </div>
</template>

<script src='./createAthlete.js'></script>
