import { Form } from "./Components/Form.js";

// Consignes -
// Vous utiliserez :
// •     le mécanisme des "promesses" avec la fonction "fetch",
// •     l'événement "change" sur l'objet de type élément du DOM qui correspond à la balise select
// •     la propriété "value" de l'objet de type élément du dom qui correspond à la balise "select"

const form1 = new Form();
const select = form1.AddSelect("region", ["dfdfd", "fdfdfddf"]);
const select2 = form1.AddSelect("departement", ["dfxcvxcv", "xcvbxcvb"]);

console.log(select);
console.log(select2);

document.body.appendChild(select);
document.body.appendChild(select2);

