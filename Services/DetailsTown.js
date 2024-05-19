export class DetailsTown {

  constructor() {}

  static async GetDetailsTown(code) {
    const linkDetailsTown = `https://geo.api.gouv.fr/communes/${code}`;

    try {
      const response = await fetch(linkDetailsTown);
      const datas = await response.json();
      return datas;
    } catch (e) {
      console.log(e);
      alert("Erreur pour la récupération des détails de la commune");
    }
  }
}