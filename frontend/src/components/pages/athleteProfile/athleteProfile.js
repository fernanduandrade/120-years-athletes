import axios from "axios";
export default {
  data() {
    return {
      athleteForm: {},
      medals: {
        Bronze: "../../../assets/Bronze.svg",
        Silver: "../../../assets/Silver.svg",
        Gold: "../../../assets/Gold.svg",
        NA: "../../../assets/participation.png"
      }
    };
  },
  methods: {
    async getAthleteById() {
      const { id } = this.$route.params;
      await axios
        .get(`/api/athletes/${id}/`)
        .then((res) => {
          this.athleteForm = { ...res.data };
          this.bgc = {...res.data.medal}
        })
        .catch((err) => {
          console.log(err);
        });
    },
  
  },
  computed: {
    athleteMedal() {
      return this.athleteForm.medal;
    }
  },
  created() {
    this.getAthleteById();
  },
};