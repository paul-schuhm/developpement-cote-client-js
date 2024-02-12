# Exercices - Module 4 : Pages web interactives et manipulation du DOM

B1 - Développement Front (Javascript)

Auteur : Paul Schuhmacher

Version : 1


- [Exercices - Module 4 : Pages web interactives et manipulation du DOM](#exercices---module-4--pages-web-interactives-et-manipulation-du-dom)
  - [Exercice 1 : Créer une page web avec un *Dark mode* et un *Light mode*](#exercice-1--créer-une-page-web-avec-un-dark-mode-et-un-light-mode)
  - [Exercice 2 : Implémenter le jeu *Guess my number*](#exercice-2--implémenter-le-jeu-guess-my-number)


## Exercice 1 : Créer une page web avec un *Dark mode* et un *Light mode*

On souhaite créer une page web qui propose un *Dark mode* (arrière-plan sombre, *font* claire) et un *Light mode* (arrière-plan clair, *font* sombre).

1. Créer une structure HTML avec un `h1`, et plusieurs paragraphes contenant du texte. Utiliser du [Lorem Ipsum](https://fr.lipsum.com/) (ou son cousin breton [le Logoden Biniou](https://www.logoden-biniou.com/)) pour remplir la page web de contenu. Ajouter des liens hypertexte (balises `a`).
2. Ajouter un input pertinent pour permettre à l'utilisateur de choisir entre le *Dark mode* et le *Light Mode*. Par défaut, la page est en *Light Mode*.
3. Observer les styles à modifier pour s'assurer de la bonne lisibilité dans les deux modes.
4. *Aller plus loin* : utiliser une couleur primaire et une couleur secondaire pour votre thème de page en *Light Mode*. Trouver deux autres couleurs pour le *Dark mode* qui assure à la fois la lisibilité de la page et conserve une cohérence esthétique.

## Exercice 2 : Implémenter le jeu *Guess my number*

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