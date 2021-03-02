import { TEAM, NOC } from '../../../utils/options'
import axios from 'axios';

export default {
  data() {
    return {
      teamOptions: TEAM.REGIAO,
      nocOptions: NOC.NOC_REGIAO,
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
    async updateArticle() {
      const {id} = this.$route.params; 
      await axios.put(`/api/athletes/${id}/`, this.athleteForm)
        .then(() => {
          this.$router.push({
              name: 'lista',
            });
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  }
};