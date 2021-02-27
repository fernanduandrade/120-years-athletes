<template>
  <div class="container">
    <div class="card z-depth-2">
      <h3 class="center"><strong>PERFIL DO ATLETA</strong></h3>
      <div class="divider"></div>
      <div class="row">
        <div class="col s6">
          <h6><strong>NOME:</strong> {{ athleteForm.Name }}</h6>
          <h6><strong>SEXO:</strong> {{ athleteForm.Sex }}</h6>
          <h6><strong>IDADE:</strong> {{ athleteForm.Age }}</h6>
          <strong>PESO:</strong> {{ athleteForm.Weight }}
          <h6><strong>ALTURA:</strong> {{ athleteForm.Height }}</h6>
        </div>

        <div v-if="athleteMedal === 'Bronze'" class="col s6">
          <img
            width="150px"
            src="../../../assets/Bronze.svg"
            alt="medal image"
          />
        </div>
        <div v-else-if="athleteMedal === 'Silver'" class="col s6">
          <img
            width="150px"
            src="../../../assets/Silver.svg"
            alt="medal image"
          />
        </div>
        <div v-else-if="athleteMedal === 'Gold'" class="col s6">
          <img
            width="150px"
            src="../../../assets/Gold.svg"
            alt="medal image"
          />
        </div>
        <div v-else class="col s6">
          <img
            width="150px"
            src="../../../assets/participation.png"
            alt="medal image"
          />
        </div>
      </div>

      <div class="divider"></div>

      <div class="row">
        <div class="col s6">
          <h6><strong>TIME:</strong> {{ athleteForm.Team }}</h6>
          <h6><strong>NOC:</strong> {{ athleteForm.NOC }}</h6>
          <h6><strong>ANO:</strong> {{ athleteForm.Year }}</h6>
          <h6><strong>TEMPORADA:</strong> {{ athleteForm.Season }}</h6>
        </div>

        <div class="col s6">
            <h6><strong>CIDADE:</strong> {{ athleteForm.City }}</h6>
            <h6><strong>EVENTO:</strong> {{ athleteForm.Event }}</h6>
            <h6><strong>ESPORTE:</strong> {{ athleteForm.Sport }}</h6>
        </div>
      </div>
      </div>

      
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      athleteForm: {},
    };
  },
  methods: {
    async getAthleteById() {
      const { id } = this.$route.params;
      await axios
        .get(`/api/athletes/${id}/`)
        .then((res) => {
          this.athleteForm = { ...res.data };
        })
        .catch((err) => {
          console.log(err);
        });
    },
  
  },
  computed: {
    athleteMedal() {
      return this.athleteForm.Medal.split('"')[0];
    }
  },
  created() {
    this.getAthleteById();
  },
};
</script>

<style scoped>
</style>
