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
    addAthlete() {

      axios.post('/api/athletes/', this.athleteForm)
          .then(() => {
            this.$router.push({
              name: 'lista',
            });
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
  mounted() {
     M.AutoInit();
  }
};
