import Country from "../model/Country";
import CountryDetail from "../model/CountryDetail";
import Summary from "../model/Summary";
import _ from "lodash";
const baseURL = process.env.VUE_APP_BASE_API;
export function getCountries() {
  return fetch(`${baseURL}/countries`, {
    method: 'GET',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
      let countries = [];
      if (data && data.length > 0) {
        data.forEach(function (item) {
          let country = new Country(item)
          countries.push(country)
        });
      }
      return {
        countries: countries.length > 0 ? _.sortBy(countries, ['name']) : countries,
        error: null
      };
    })
    .catch(e => {
      return {
        countries: [],
        error: e
      }
    })
}

export function getLiveByCountryAllStatus(countrySlug) {
  return fetch(`${baseURL}/live/country/${countrySlug}`, {
    method: 'GET',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
      let detailsList = [];
      if (data && data.length > 0) {
        data.forEach(function (item) {
          let obj = new CountryDetail(item)
          detailsList.push(obj)
        });
      }

      return {
        data: _.orderBy(detailsList, ['Date'], ['desc']),
        error: null
      };
    })
    .catch(e => {
      return {
        data: [],
        error: e
      }
    })
}

export function getSummary() {
  return fetch(`${baseURL}/summary`, {
    method: 'GET',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
      let summary = new Summary(data);
      return {
        data: summary,
        error: null
      };
    })
    .catch(e => {
      return {
        data: [],
        error: e
      }
    })
}