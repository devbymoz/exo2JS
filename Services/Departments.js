export class Departments {

  constructor() {}

  static async GetDepartments(code) {
    const linkDepartments = `https://geo.api.gouv.fr/regions/${code}/departements`;

    try {
      const response = await fetch(linkDepartments);
      const datas = await response.json();
      return datas;
    } catch (e) {
      console.log(e);
      alert("Erreur pour la récupération des départements");
    }
  }
}