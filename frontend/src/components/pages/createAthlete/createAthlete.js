import { TEAM, NOC } from '../../../utils/options';
import axios from 'axios';

export default {
  name: "Form",
  data() {
    return {
      teamOptions: TEAM.REGIAO,
      nocOptions: NOC.NOC_REGIAO,
      athleteForm: {
        Name: "",
        Sex: "",
        Age: "",
        Height: "",
        Weight: "",
        Team: "",
        NOC: "",
        Games: "",
        Year: "",
        Season: "",
        City: "",
        Sport: "",
        Event: "",
        Medal: "",
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
  }
};