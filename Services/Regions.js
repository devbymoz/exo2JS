export class Regions {

  constructor() {}

  static async GetRegions() {
    const linkRegions = "https://geo.api.gouv.fr/regions";

    try {
      const response = await fetch(linkRegions);
      const datas = await response.json();
      return datas;
    } catch (e) {
      console.log(e);
      alert("Erreur pour la récupération des régions");
    }
  }


}