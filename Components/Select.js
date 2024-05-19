export class Select {
  mySelect;

  constructor() {}

  /**
   * Permet de créer un élément de formulaire de type Select
   * @name string Le nom et à l'id du select.
   * @messageFirstOption string Le nom de l'option par défaut
   */
  CreateSelect(name, messageFirstOption) {
    this.mySelect = document.createElement("select");
    this.mySelect.className = "input-select";
    this.mySelect.id = name;
    this.mySelect.name = name;

    const optionDisable = document.createElement("option");
    optionDisable.innerHTML = ` -- ${messageFirstOption} -- `;
    optionDisable.disabled = true;
    optionDisable.selected = true;
    this.mySelect.appendChild(optionDisable);

    return this.mySelect;
  }


}