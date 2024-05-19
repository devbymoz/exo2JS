import { Select } from "../Components/Select.js";
import { Departments } from "../Services/Departments.js";

export class DepartmentsView {
  selectDepartments;
  mySelectDepartments;

  constructor() {
    this.selectDepartments = new Select();
  }

  async RenderDepartments(code) {
    const departments = await Departments.GetDepartments(code);

    this.mySelectDepartments = this.selectDepartments.CreateSelect("les-departements", "Séléctionnez un département");

    departments.forEach((department) => {
      const nameOption = document.createElement("option");
    
      nameOption.value = department.code;
      nameOption.innerHTML = department.nom;
    
      this.mySelectDepartments.appendChild(nameOption);
    });

    return this.mySelectDepartments;
  }
}