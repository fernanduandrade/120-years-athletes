import axios from "axios";

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
    };
  },
  methods: {
    async getAthletes(page) {
      page = page || "/api/athletes/";
      await axios.get(page).then((res) => {
        this.athletes = res.data.result;
        this.pagination = {
          last_page: 252,
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
    }
  },
  components: {},
  computed: {
    filterAthletes() {
      return this.athletes.filter((athlete) => {
        return athlete.Name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  async created() {
    await this.getAthletes();
  },
};