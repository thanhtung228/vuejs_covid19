<template>
  <div>
    Date: {{ currentDate }}
    <ul>
      <li>NewConfirmed: {{ globalCase.NewConfirmed }}</li>
      <li>NewDeaths: {{ globalCase.NewDeaths }}</li>
      <li>NewRecovered: {{ globalCase.NewRecovered }}</li>
      <li>TotalConfirmed: {{ globalCase.TotalConfirmed }}</li>
      <li>TotalDeaths: {{ globalCase.TotalDeaths }}</li>
      <li>TotalRecovered: {{ globalCase.TotalRecovered }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SummaryPanel",
  props: {
    globalCase: Object,
    currentDate: String,
  },
};
</script>

<style></style>
