export class Towns {

  constructor() {}

  static async GetTowns(code) {
    const linkTowns = `https://geo.api.gouv.fr/departements/${code}/communes`;

    try {
      const response = await fetch(linkTowns);
      const datas = await response.json();
      return datas;
    } catch (e) {
      console.log(e);
      alert("Erreur pour la récupération des communes");
    }
  }
}