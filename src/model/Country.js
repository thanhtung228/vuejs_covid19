export default class Country {
  constructor(country) {
    this.id = country.Slug || "";
    this.name = country.Country || "";
  }
}