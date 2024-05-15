export class Form {

  constructor() {
    this.CreateForm();
  }

  // Permet de créer un champ select avec les options
  /* 
  * Permet de créer un champ select avec les options
  *
  */
  AddSelect(nameSelect, options = []) {
    const select = document.createElement("select");
    select.id = nameSelect;
    select.name = nameSelect;

    options.forEach((option) => {
      const nameOption = document.createElement("option");
      nameOption.value = "test";
      nameOption.innerHTML = "test";

      // Ajout des options dans le noeud Select
      select.appendChild(nameOption);
    });

    return select;
  }

  CreateForm() {
    const form = document.createElement("form");


  }
}
