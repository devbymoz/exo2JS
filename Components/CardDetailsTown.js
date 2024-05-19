export class CardDetailsTown {
  myCard;
  h1;
  h2;
  para;

  constructor() {
    this.CreateCardDetailsTown();
  }

  /**
   * Permet de créer une carte
   */
  CreateCardDetailsTown() {
    this.myCard = document.createElement("article");
    this.myCard.id = "card-details-town";

    this.h1 = document.createElement("h1");
    this.h2 = document.createElement("h2");
    this.para = document.createElement("p");

    this.myCard.appendChild(this.h1);
    this.myCard.appendChild(this.h2);
    this.myCard.appendChild(this.para);

    return this.myCard;
  }
}