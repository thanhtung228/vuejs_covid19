<template>
  <div class="home">
    <SummaryPanel
      v-if="summary"
      :globalCase="summary.Global"
      :currentDate="summary.Date"
    />
    <FilterSearch
      :filterValues="filterValues"
      :countries="countries"
      @searchLiveByCountry="searchLiveByCountry"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import FilterSearch from "@/components/FilterSearch.vue";
import SummaryPanel from "@/components/Summary.vue";
import * as api from "@/api";
import loading from "./mixins/loading";

export default {
  name: "Home",
  components: {
    FilterSearch,
    SummaryPanel,
  },
  data() {
    return {
      filterValues: {
        country: "",
      },
      countries: [],
      summary: null,
    };
  },
  mixins: [loading],
  async created() {
    this.setLoading(true);
    this.getCountries();
    await this.getSummary();
    this.setLoading(false);
  },
  methods: {
    async searchLiveByCountry() {
      if (this.filterValues.country !== "") {
        this.$router.push(`/country/${this.filterValues.country}`);
      } else {
        alert("Please choose country");
      }
    },
    async getSummary() {
      const res = await api.getSummary();
      if (!res.error) {
        this.summary = res.data;
      }
    },
    async getCountries() {
      const res = await api.getCountries();
      if (!res.error) {
        this.countries = res.countries || [];
        this.$store.dispatch(
          "Country/setCountries",
          { countries: this.countries },
          {
            root: true,
          }
        );
      }
    },
  },
};
</script>
