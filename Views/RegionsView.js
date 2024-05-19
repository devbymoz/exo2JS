import { Regions } from "../Services/Regions.js";
import { Select } from "../Components/Select.js";

export class RegionsViews {
  selectRegion;
  mySelectRegion;

  constructor() {
    this.selectRegion = new Select();
  }

  async RenderRegions() {
    const regions = await Regions.GetRegions();

    this.mySelectRegion = this.selectRegion.CreateSelect("les-regions", "Séléctionnez une région");

    regions.forEach((region) => {
      const nameOption = document.createElement("option");

      nameOption.value = region.code;
      nameOption.innerHTML = region.nom;

      this.mySelectRegion.appendChild(nameOption);
    });

    return this.mySelectRegion;
  }
}