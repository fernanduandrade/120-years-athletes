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
          this.bgc = {...res.data.Medal}
          console.log(this.bgc)
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