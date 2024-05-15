L'exercice consiste à créer en javascript des éléments de formulaire de liste déroulante (select > option) qui permettent à l'internaute de choisir parmi les territoires français.
Vous ajoutez le minimum de css ou de scss pour que le rendu soit à-peu-près conforme à l’image ci-dessous.
 

Consignes - 
Vous utiliserez :
•     le mécanisme des "promesses" avec la fonction "fetch",
•     l'événement "change" sur l'objet de type élément du DOM qui correspond à la balise select
•     la propriété "value" de l'objet de type élément du dom qui correspond à la balise "select"

Liste déroulante des régions
Pour renseigner la première liste déroulante, vous utiliserez l'API de l'état français dont le point d'entrée (endpoint) est "https://geo.api.gouv.fr/regions".

Départements
Une fois la région sélectionnée, l'internaute peut alors choisir via une autre liste déroulante parmi les départements correspondants.
Point d'entrée: https://geo.api.gouv.fr/regions/xx/departements
Il faudra remplacer xx par le numéro de la région

Communes
Dernière étape, une fois que l'internaute a choisi un département, affichez une liste déroulante (select) avec les communes qui correspondent.
Point d'entrée : https://geo.api.gouv.fr/departements/xx/communes
Il faudra remplacer xx par le code du département
Au click sur une commune, allez chercher l'information concernant la commune et affichez son nom, son nombre d'habitants et son code postal
Point d'entrée : https://geo.api.gouv.fr/communes/xxxxx
Il faut remplacer xxxxx par le code de la commune
Un bonus de 2 points vous sera attribué si vous mettez en place un pattern « Model Vue Controleur » dans une logique de classes (Service pour les données, composants pour l'affichage Region, Dpt, Town et le controller pour être le point d'entrée)