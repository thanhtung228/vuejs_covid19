<template>
  <section class="filter-search">
    <div class="select">
      <select
        name="slct"
        id="slct"
        v-model="filterValues.country"
        @change="selectCountry"
      >
        <option value="" disabled selected>Choose country</option>
        <option
          v-for="country in countries"
          :key="country.id"
          :value="country.id"
          >{{ country.name }}</option
        >
      </select>
    </div>
  </section>
</template>

<script>
export default {
  name: "FilterSearch",
  props: {
    filterValues: Object,
    countries: Array,
  },
  methods: {
    selectCountry(e) {
      this.$emit("searchLiveByCountry");
    },
  },
};
</script>

<style lang="scss">
.filter-search {
}
</style>
