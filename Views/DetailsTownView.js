import { CardDetailsTown } from "../Components/CardDetailsTown.js";
import { DetailsTown } from "../Services/DetailsTown.js";

export class DetailsTownView {
  cardDetailsTown;

  constructor() {
    this.cardDetailsTown = new CardDetailsTown();
  }

  async RenderDetailsTown(code) {
    const detailsTown = await DetailsTown.GetDetailsTown(code);

    this.mySelectRegion = this.cardDetailsTown.CreateCardDetailsTown();

    this.cardDetailsTown.h1.innerHTML = detailsTown.nom;
    this.cardDetailsTown.h2.innerHTML = `Population : ${detailsTown.population}`;
    this.cardDetailsTown.para.innerHTML = `Code postal : ${detailsTown.code}`;

    return this.mySelectRegion;
  }
}