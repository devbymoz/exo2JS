import { Select } from "../Components/Select.js";
import { Towns } from "../Services/Towns.js";

export class TownsView {
  selectTowns;
  mySelectTowns;

  constructor() {
    this.selectTowns = new Select();
  }

  async RenderTowns(code) {
    const towns = await Towns.GetTowns(code);

    this.mySelectTowns = this.selectTowns.CreateSelect("les-communes", "Séléctionnez une commune");

    towns.forEach((town) => {
      const nameOption = document.createElement("option");
    
      nameOption.value = town.code;
      nameOption.innerHTML = town.nom;
    
      this.mySelectTowns.appendChild(nameOption);
    });

    return this.mySelectTowns;
  }
}