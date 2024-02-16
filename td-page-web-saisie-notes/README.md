# TD : Page web de saisie de notes

> Ce TD récapitule l'intégralité des notions abordées dans le cours.


## Spécifications

 La page web doit permettre de créer une liste d'étudiant·es, chaque étudiant·e étant défini·e par un nom, prénom et une note. La page web doit permettre d'ajouter un étudiant·e à la liste au besoin. Elle doit proposer un moyen de calculer la moyenne et la médiane des notes qui seront affichées sur la page.

## Guide sur l'implémentation (réalisation)

> Vous êtes libre d'implémenter et de designer cette page web comme vous le désirez tant qu'elle répond aux spécifications demandées

1. Créer une structure HTML capable d'accueillir une liste : soit un <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/table">un tableau</a> soit une <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul">liste non ordonnée</a> 
2. Initialiser une structure vide
3. En Javascript, créer <em>une fonction constructeur</em> pour pouvoir générer des objets de type <code>Student</code>
4. Créer un formulaire pour pouvoir ajouter un·e étudiant·e à la liste. Le formulaire doit proposer les inputs nécessaires pour fournir les données attendues pour chaque étudiant·e
5. Ajouter un <em>écouteur d'évènements</em> sur le bouton pour soumettre le formulaire. Annuler la soumission du formulaire (ce qui provoquerait l'envoi d'une requête HTTP) avec l'instruction <code>event.preventDefault()</code> directement depuis votre fonction déclenchée au click du bouton de soumission du formulaire. 
6. Créer l'élément HTML adapté (une ligne pour un tableau, un item de liste pour une liste non ordonnée) et y renseigner les informations issues du formulaire.
7. Ajouter cet élément HTML à la structure qui liste les étudiant·es.

## Aller plus loin

Quelques idées pour améliorer la page et s'exercer :

1. Ajouter la possibilité de supprimer une ligne / un·e étudiant·e
2. Afficher la note d'une couleur différente en fonction de la note (en ajoutant des classes CSS)
3. Afficher la valeur min et max
4. Ajouter une matière et plusieurs notes par étudiant. Afficher la moyenne par étudiant

> N'hésitez pas à me contacter si vous avez des questions ou si vous voulez qu'on regarde votre code ensemble