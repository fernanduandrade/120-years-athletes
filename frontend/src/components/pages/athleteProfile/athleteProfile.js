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
      const response = await axios.get(`/api/athletes/${id}/`);
      this.athleteForm = {...response.data};
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