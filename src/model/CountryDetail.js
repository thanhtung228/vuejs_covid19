import moment from "moment";
export default class CountryDetail {
  constructor(details) {
    this.Country = details.Country || "";
    this.CountryCode = details.CountryCode || "";
    this.Confirmed = Number(details.Confirmed) || 0;
    this.Deaths = Number(details.Deaths) || 0;
    this.Recovered = Number(details.Recovered) || 0;
    this.Active = Number(details.Active) || 0;
    this.Date = moment(details.Date) || "";
  }
}