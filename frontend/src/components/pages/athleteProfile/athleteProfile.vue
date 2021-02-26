<template>
<div>
    <h1>sadsad</h1>
</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      athleteForm: {},
    };
  },
  mounted() {
    this.getAthleteById();
  },
  methods: {
    async getAthleteById() {

      const { id } = this.$route.params;
      await axios.get(`/api/athletes/${id}/`)
        .then((res) => {
          this.athleteForm = {...res.data};
        }).catch(err => {
          console.log(err);
        });
    },
  }
};
</script>
