import { TEAM } from '../../../utils/options';
import axios from 'axios';
import M from 'materialize-css'


axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

export default {
    name: "Form",
    data() {
    
    return {
      teamOptions: TEAM.REGIAO,
      athleteForm: {
        name: "",
        sex: "",
        age: "",
        team: "",
        year: "",
        sport: "",
        medal: "",
        
      },
    };
  },
  methods: {
    async addAthlete() {

    const response = await axios.post('/api/athletes/', this.athleteForm);
    console.log(response);
      if(response.status === 201) {
        this.$router.push({
          name: 'lista',
        });
      }
    },
  },
  mounted() {
     M.AutoInit();
  }
};
