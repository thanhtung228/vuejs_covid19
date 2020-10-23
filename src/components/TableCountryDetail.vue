<template>
  <section>
    <table id="countryTbl">
      <tbody v-if="countryDetail && countryDetail.length > 0">
        <tr>
          <th>
            Country Name
          </th>
          <th>
            Confirmed
          </th>
          <th>
            Recovered
          </th>
          <th>
            Deaths
          </th>
          <th>
            Date
          </th>
        </tr>
        <tr v-for="(details, index) in countryDetail" :key="`idx${index}`">
          <td>{{ details.Country }}</td>
          <td>{{ details.Confirmed }}</td>
          <td>{{ details.Recovered }}</td>
          <td>{{ details.Deaths }}</td>
          <td>{{ $moment(details.Date).format("YYYY/MM/DD") }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <th>
            Country Name
          </th>
          <th>
            Confirmed
          </th>
          <th>
            Recovered
          </th>
          <th>
            Deaths
          </th>
          <th>
            Date
          </th>
        </tr>
        <tr>
          <td style="text-align: center" colspan="5">No data</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "TableCountryDetail",
  props: {
    countryDetail: Array,
  },
};
</script>

<style></style>
