export class Form {
  myForm;

  constructor() {
    this.CreateForm();
  }

  /**
   * Permet de créer un élément formulaire
   */
  CreateForm() {
    this.myForm = document.createElement("form");
    this.myForm.className = "form";
    
    return this.myForm;
  }

  /**
   * Permet d'ajouter un élément au formulaire'
   */
  AddElementInForm(element) {
    this.myForm.appendChild(element);
  }
}