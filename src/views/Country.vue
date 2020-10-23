<template>
  <div class="country">
    <ul class="breadcrumb">
      <li><router-link to="/">Home</router-link></li>
      <li>Country</li>
    </ul>
    <h3>{{ this.countryName }} - Live By Country All Status</h3>
    <TableCountryDetail :countryDetail="countryDetail" />
  </div>
</template>

<script>
import * as api from "@/api";
import _ from "lodash";
import { mapGetters } from "vuex";
import TableCountryDetail from "@/components/TableCountryDetail.vue";
import loading from "./mixins/loading";

export default {
  name: "Country",
  data() {
    return {
      country: "",
      countryDetail: null,
      countryName: "",
    };
  },
  mixins: [loading],
  components: { TableCountryDetail },
  computed: {
    ...mapGetters(["countries"]),
  },
  async created() {
    this.country = this.$route.params.slug;
    if (this.country !== "") {
      this.setLoading(true);
      if (this.countries && this.countries.length > 0) {
        const foundedCountry = _.find(this.countries, { id: this.country });
        if (foundedCountry) {
          this.countryName = foundedCountry.name;
        }
      } else {
        const res = await api.getCountries();
        if (!res.error) {
          const countries = res.countries || [];
          const foundedCountry = _.find(countries, { id: this.country });
          if (foundedCountry) {
            this.countryName = foundedCountry.name;
          }

          this.$store.dispatch(
            "Country/setCountries",
            { countries: countries },
            {
              root: true,
            }
          );
        }
      }

      await this.getData();
      this.setLoading(false);
    }
  },
  methods: {
    async getData() {
      const res = await api.getLiveByCountryAllStatus(this.country);
      if (!res.error) {
        this.countryDetail = res.data || [];
      }
    },
  },
};
</script>

<style lang="scss"></style>
