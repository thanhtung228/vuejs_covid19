import moment from "moment";
export default class Summary {
  constructor(obj) {
    const global = obj.Global;
    this.Global = {
      "NewConfirmed": global.NewConfirmed,
      "TotalConfirmed": global.TotalConfirmed,
      "NewDeaths": global.NewDeaths,
      "TotalDeaths": global.TotalDeaths,
      "NewRecovered": global.NewRecovered,
      "TotalRecovered": global.TotalRecovered
    }

    const countries = obj.Countries;
    let countryList = [];
    countries.forEach(function (item) {
      let country = new CountrySummary(item);
      countryList.push(country);
    })
    this.Countries = countryList;
    this.Date = moment(obj.Date).format("YYYY/MM/DD")
  }
}

class CountrySummary {
  constructor(obj) {
    this.Country = obj.Country;
    this.CountryCode = obj.CountryCode;
    this.Slug = obj.Slug;
    this.NewConfirmed = obj.NewConfirmed;
    this.TotalConfirmed = obj.TotalConfirmed;
    this.NewDeaths = obj.NewDeaths;
    this.TotalDeaths = obj.TotalDeaths;
    this.NewRecovered = obj.NewRecovered;
    this.TotalRecovered = obj.TotalRecovered;
    this.Date = obj.Date;
  }
}