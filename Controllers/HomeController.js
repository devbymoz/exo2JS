import { Form } from "../Components/Form.js";
import { DepartmentsView } from "../Views/DepartmentsView.js";
import { TownsView } from "../Views/TownsView.js";
import { RegionsViews } from "../Views/RegionsView.js";
import { DetailsTownView } from "../Views/DetailsTownView.js";

export class HomeController {
  renderRegions

  constructor() {}

  static async index() {
    this.renderRegions = new RegionsViews();

    // Récupération de la liste des régions
    const selectRegions = await this.renderRegions.RenderRegions();
    
    // Création du formulaire
    const form = new Form();
    const myForm = form.myForm;
    
    const section = document.createElement("section");
    document.body.appendChild(section);
    section.appendChild(myForm);
    
    // Ajout du select Region dans le formulaire
    form.AddElementInForm(selectRegions);
    
    
    // Listener pour la Region
  
    this.renderRegions.mySelectRegion.addEventListener("change", async (e) => {
      const codeRegion = e.target.value;
    
      // Récupération de la liste des départements
      const renderDepartments = new DepartmentsView();
      let selectDepartments = await renderDepartments.RenderDepartments(codeRegion);
    
      // Suppression de l'ancien élément de département si présent
      let oldDepartments = document.querySelector("#les-departements");
      if (oldDepartments) {
        myForm.replaceChild(selectDepartments, oldDepartments);
      } else {
        form.AddElementInForm(selectDepartments);
      }
    
      // Réinitialisation de la sélection des communes
      const oldMunicipalities = document.querySelector("#les-communes");
      if (oldMunicipalities) {
        myForm.removeChild(oldMunicipalities);
      }
    
      // Réinitialisation de la sélection des details de la commune
      const oldDetails = document.querySelector("#card-details-town");
      if (oldDetails) {
        section.removeChild(oldDetails);
      }
    
      // Listener pour le Département
      selectDepartments.addEventListener("change", async (e) => {
        const codeDepartment = e.target.value;
    
        // Récupération de la liste des communes
        const renderTowns = new TownsView();
        const selectTowns = await renderTowns.RenderTowns(codeDepartment);
    
        // Réinitialisation de la sélection des details de la commune
        const oldDetails = document.querySelector("#card-details-town");
        if (oldDetails) {
          section.removeChild(oldDetails);
        }
    
        // Suppression de l'ancien élément de commune si présent
        let oldTowns = document.querySelector("#les-communes");
        if (oldTowns) {
          myForm.replaceChild(selectTowns, oldTowns);
        } else {
          form.AddElementInForm(selectTowns);
        }
    
        // Listener pour la commune
        selectTowns.addEventListener("change", async (e) => {
          const codeTown = e.target.value;
    
          const renderDetailsTown = new DetailsTownView();
          const detailsTown = await renderDetailsTown.RenderDetailsTown(codeTown);
    
          const oldDetails = document.querySelector("#card-details-town");
    
          // Suppression de l'ancien details de la commune
          if (oldDetails) {
            section.replaceChild(detailsTown, oldDetails);
          } else {
            section.appendChild(detailsTown);
          }
    
        });
    
      });
    });
    
  }


  
}