import axios from "axios";
import { COUNTRYCODE } from '../../../utils/countryCode';

export default {
  name: "App",
  data() {
    return {
      athlete: {},
      athletes: [],
      search: "",
      name: "",
      pageKey: "",
      pagination: {},
      teste: require('../../../assets/Bronze.svg'),
      medalImgPath: {
        Bronze: require("../../../assets/Bronze.svg"),
        Silver: require("../../../assets/Silver.svg"),
        Gold: require("../../../assets/Gold.svg"),
        NA: require("../../../assets/participation.png")
      }
    };
  },
  methods: {
    async getAthletes(page) {
      page = page || "/api/athletes/";
      await axios.get(page).then((res) => {
        this.athletes = res.data.result;
        this.pagination = {
          total: res.data.count,
          last_page: 1257,
          path_page: "/api/athletes/?page=",
        };
      });
    },
    async searchAthlete(name) {
      await axios.get(`/api/athletes/?search=${name}`).then((res) => {
        this.athletes = res.data.result;
      });
    },
    onChange(event) {
      console.log(event.target.value);
    },
    async deleteAthlete(id) {
      await axios.delete(`/api/athletes/${id}/`)
        .then(() => {
          this.getAthletes();
        })
        .catch(err => {
          console.log(err);
        });
    },
    countryImage(countryTeam) {
      return "https://www.countryflags.io/" + COUNTRYCODE[countryTeam] + "/flat/64.png" 
    },
    medalImg(medal) {
      return this.medalImgPath[medal];
    }
  },
  components: {},
  computed: {
    filterAthletes() {
      return this.athletes.filter((athlete) => {
        return athlete.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
    totalRegisters() {
      return this.pagination.total.toString().slice(0,3) + "." + this.pagination.total.toString().slice(3,6)
    },
  },
  async created() {
    await this.getAthletes();
  },
};