# Exercices - Module 4 : Pages web interactives et manipulation du DOM

B1 - Développement Front (Javascript)

Auteur : Paul Schuhmacher

Version : 2


- [Exercices - Module 4 : Pages web interactives et manipulation du DOM](#exercices---module-4--pages-web-interactives-et-manipulation-du-dom)
  - [Exercice 0 : Changement de couleur au click](#exercice-0--changement-de-couleur-au-click)
  - [Exercice 1 : Manipulation du DOM en JavaScript](#exercice-1--manipulation-du-dom-en-javascript)
  - [Exercice 2 : Créer une page web avec un *Dark mode* et un *Light mode*](#exercice-2--créer-une-page-web-avec-un-dark-mode-et-un-light-mode)
  - [Exercice 3 : Implémenter le jeu *Guess my number*](#exercice-3--implémenter-le-jeu-guess-my-number)
  - [Exercice 4 : Page web interactive](#exercice-4--page-web-interactive)
    - [Guide](#guide)
  - [Exercice 5 : Validation de formulaire](#exercice-5--validation-de-formulaire)



## Exercice 0 : Changement de couleur au click

1. **Créer** un document HTML contenant un titre h1. Le titre doit appraître en noir (couleur par défaut).
2. **Ajouter** un bouton avec un id `btn` ayant pour titre `"Mettre le titre en bleu"`;
3. **Enregistrer** un écouteur d'évènement avec addEventListener pour changer la couleur du titre en bleu lorsque le bouton est clické par l'utilisateur÷ice. Le texte du bouton doit également changer (pour maintenir la cohérence de l'interface) et devenir "Mettre le titre en noir".
4. Si le titre est en bleu et que le bouton est clické, alors le titre doit repasser en noir et le texte du bouton repasser à sa valeur initiale.

<img src="./h1-switch-color-btn.svg" width="80%">


## Exercice 1 : Manipulation du DOM en JavaScript

Vous devez créer une page HTML contenant une liste de tâches ("To-Do" list). Ensuite, vous allez ajouter du JavaScript pour rendre cette liste utilisable et interactive.

1. **Créez** un fichier `index.html` contenant la structure suivante :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulation du DOM</title>
    <style>
        ul { list-style-type: none; padding: 0; }
        li { display: flex; align-items: center; gap: 10px; padding: 5px; margin: 5px; background: #f0f0f0; }
        .completed { text-decoration: line-through; color: gray; }
        .hidden { display: none; }
    </style>
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="new-task" placeholder="Ajouter une tâche">
    <button id="add-task">Ajouter</button>
    <ul id="task-list">
      <li>Tâche A <input type="checkbox" class="task-checkbox"/> <button class="move-top">⭡</button></li>
    </ul>
    <script src="script.js"></script>
</body>
</html>
```

1. **Créez** un fichier `script.js`.
2. En JavaScript, **sélectionnez** le champ texte (`#new-task`), le bouton (`#add-task`) et la liste (`#task-list`) et stocker les éléments dans des variables.

3. **Implémentez** les fonctionnalités suivantes :
   1. Lorsqu'on clique sur le bouton "Ajouter", la valeur du champ texte doit être ajoutée comme nouvel élément `<li>` dans la liste. Vider le champ après l'ajout. Chaque tâche doit contenir une case à cocher (*checkbox*) pour marquer l'état "complété" et un bouton pour la déplacer en haut de la liste.
   2. Lorsqu'on coche la case d'une tâche, elle doit être barrée et changée en gris.
   3. Lorsqu'on clique sur le bouton de déplacement d'une tâche, elle doit être placée en haut de la liste (pour lui donner la priorité).

4. **Bonus** :
   1. **Ajouter** un bouton "Tout effacer" qui supprime toutes les tâches.
   2. **Ajouter** un bouton "Masquer les tâches complétées" qui permet de masquer/afficher les tâches complétées.
   3. Au moment de l'ajout d'une tâche, donner la possibilité de renseigner une **priorité** (de 1 à 3, 3 étant le plus urgent). **Ajouter** un bouton qui permet de trier la liste des tâches par priorité (les tâches prioritaires apparaissent en haut de la liste). *Tip*: utiliser la fonction [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) pour trier un tableau.


## Exercice 2 : Créer une page web avec un *Dark mode* et un *Light mode*

On souhaite créer une page web qui propose un *Dark mode* (arrière-plan sombre, *font* claire) et un *Light mode* (arrière-plan clair, *font* sombre).

1. Créer une structure HTML avec un `h1`, et plusieurs paragraphes contenant du texte. Utiliser du [Lorem Ipsum](https://fr.lipsum.com/) (ou son cousin breton [le Logoden Biniou](https://www.logoden-biniou.com/)) pour remplir la page web de contenu. Ajouter des liens hypertexte (balises `a`).
2. Ajouter un bouton permettant à l'utilisateur·ice de choisir entre le *Dark mode* et le *Light Mode*. Par défaut, la page est en *Light Mode*.
3. Observer les styles à modifier pour s'assurer de la bonne lisibilité dans les deux modes.
4. *Aller plus loin* : utiliser une couleur primaire et une couleur secondaire pour votre thème de page en *Light Mode*. Trouver deux autres couleurs pour le *Dark mode* qui assure à la fois la lisibilité de la page et conserve une cohérence esthétique.

## Exercice 3 : Implémenter le jeu *Guess my number*

0. **Écrire** le programme sur du papier ou dans un fichier avec de l'anglais ou français structuré (Tant que, Si, Alors, etc.). **Imaginer** l'interface pour pouvoir jouer au jeu (inputs, informations à afficher, flot du jeu, etc.)
1. **Créer** une structure HTML avec les éléments nécessaires, comme un champ d'entrée pour deviner le nombre, un bouton pour soumettre la proposition, et un endroit pour afficher les résultats.
2. **Implémenter** la logique du jeu en JavaScript. Utilise une fonction pour générer un nombre aléatoire, une fonction pour vérifier la proposition de l'utilisateur, et une fonction pour afficher les résultats. Si la tentative est infructueuse, afficher un indice "Plus grand !" ou "Plus petit !" à l'utilisateur. Si le nombre deviné est le bon, afficher "Vous avez gagné, le nombre était bien X. Vous avez deviné en X essais !"
3. **Implémenter** un nombre d'essais maximum `n`, par exemple n=5. L'utilisateur a le droit d'essayer n fois de deviner le nombre sinon il a perdu. Afficher le game over.
4. **Ajouter** un bouton pour recommencer une partie.
5. *Aller plus loin* : **ajouter** un timer, le joueur dispose de `T` secondes pour gagner une partie. Si le temps accordé est écoulé avant la fin de la partie, cela entraîne un game over.
6. *Aller plus loin* : **ajouter** la possibilité de faire une partie en 3 manches. Une manche gagnée en `k` (avec `0 < k < n`) essais rapporte `n-k+1` points, une partie perdue fait perdre `n-1` points. Afficher le score final (total) à la fin de la partie.
7. *Aller plus loin* : **ajouter** un tableau des scores. L'utilisateur entre son pseudo et lorsqu'il termine une partie (3 manches), son score est enregistré dans la liste et affiché sur la page du jeu. 
8. *Aller plus loin :* **demandez-moi** pour que l'on trouve des idées intéressantes pour enrichir le jeu !

> Conseils : **Penser à diviser le problème en plusieurs petits problèmes plus simples à résoudre**. Écrivez des fonctions pour avoir des abstractions autour de certaines procédures et les utiliser pour faciliter l'écriture de votre programme. Par exemple, une fonction qui génère un nombre aléatoire, une fonction qui calcule si le nombre proposé est le bon, etc. Gardez une référence vers chaque élément HTML à manipuler et donner leur un nom qui fait sens pour vous y retrouver.


## Exercice 4 : Page web interactive

Créer une page web interactive permettant de **saisir** et d'**analyser** les notes des étudiant·es : 

- La page doit permettre de **créer une liste d'étudiant·es**, chaque étudiant·e étant défini·e par un nom, prénom et une note (comprise entre 0 et 20);
- La page web doit permettre d'ajouter un étudiant·e à la liste au besoin;
- La page doit proposer un moyen de calculer la moyenne et la médiane des notes qui ont été saisies.

### Guide

Vous êtes libre d'implémenter et de designer cette page web comme vous le désirez tant qu'elle répond aux spécifications demandées.

1. Créer une structure HTML capable d'accueillir une liste : soit un un tableau soit une liste non ordonnée;
2. Initialiser une structure vide;
3. En Javascript, créer une fonction constructeur pour pouvoir générer des objets de type `Student`;
4. Créer un formulaire pour pouvoir ajouter un·e étudiant·e à la liste. Le formulaire doit proposer les inputs nécessaires pour fournir les données attendues pour chaque étudiant·e;
5. Ajouter un écouteur d'évènements sur le bouton pour soumettre le formulaire. Annuler la soumission du formulaire (ce qui provoquerait l'envoi d'une requête HTTP) avec l'instruction `event.preventDefault()` directement depuis votre fonction déclenchée au click du bouton de soumission du formulaire;
6. Créer l'élément HTML adapté (une ligne pour un tableau, un item de liste pour une liste non ordonnée) et y renseigner les informations issues du formulaire;
7. Ajouter cet élément HTML à la structure qui liste les étudiant·es.
8. Ajouter un bouton pour calculer la moyenne et la médiane. Implémenter les calcules puis afficher le résultat dans une balise HTML prévue à cet effet.

## Exercice 5 : Validation de formulaire

Votre entreprise organise un événement et propose aux participants de s'inscrire via un formulaire. L'inscription doit respecter certaines règles en fonction des choix de l'utilisateur·ice.

1. Créez un formulaire en HTML contenant les champs suivants :

- **Nom** (obligatoire)
- **Email** (obligatoire)
- **Âge** (obligatoire, doit être un nombre supérieur ou égal à 18)
- **Type d'inscription** ("Standard" ou "VIP")
- **Numéro de téléphone** (obligatoire uniquement si "VIP" est sélectionné, doit être un numéro valide)
- **Code promo** (**optionnel**, doit être "EVENT2024" s'il est rempli, sinon champ vide accepté)

1. **À l'aide de JavaScript uniquement** (sans validation *via* les attributs HTML), implémentez les règles de validation suivantes :

- Le nom doit contenir au moins 2 caractères.
- L'email doit être valide (voir regex).
- L'âge doit être un nombre ≥ 18.
- Si "VIP" est sélectionné, le numéro de téléphone devient obligatoire et doit être valide (+33xxxxxxxxx, voir regex).
- Le champ "Code promo" doit être soit vide, soit exactement "EVENT2024".
- **Si des erreurs sont détectées, elles doivent être affichées sous les champs concernés.**
- **Empêcher la soumission si des erreurs sont présentes**.

3. Quelles règles de validation ne peuvent pas être exprimées avec les attributs des inputs HTML (sans JS) ?

<!-- Dep conditionnelles entre champs, formats/patterns avancés, etc. -->

4. Ajouter un effet visuel aux champs invalides sous forme d'une bordure rouge.
5. Afficher un message de succès si toutes les validations passent.

**Aide** : Pour vérifier la validité de l'adresse e-mail et du téléphone, utiliser [les deux expressions régulières](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions) suivantes :

- Email : `regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`;
- Tel : `regex = /^(\+?\d{1,3}[-.\s]?)?(\d{9,12})$/`;

Pour vérifier qu'une chaîne de caractères vérifie une *regex*, [utiliser sa méthode `test()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test), ex: `regex.test(chaine_a_tester)`



