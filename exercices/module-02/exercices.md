# Exercices - Module 2 : Premiers pas avec Javascript

B1 - Développement Front (Javascript)

Auteur : Paul Schuhmacher

Version : 1

- [Exercices - Module 2 : Premiers pas avec Javascript](#exercices---module-2--premiers-pas-avec-javascript)
  - [Exercice 0 : Expressions primitives et opérateurs](#exercice-0--expressions-primitives-et-opérateurs)
  - [Exercice 1 : Utiliser les boucles](#exercice-1--utiliser-les-boucles)
  - [Exercice 2 : Variables et fonctions](#exercice-2--variables-et-fonctions)
  - [Exercice 3 : Parcourir des collections de valeurs](#exercice-3--parcourir-des-collections-de-valeurs)
  - [Exercice 4 : Jeu Fizz Buzz](#exercice-4--jeu-fizz-buzz)
  - [Exercice 5 : Jouer avec le hasard](#exercice-5--jouer-avec-le-hasard)


<hr>


## Exercice 0 : Expressions primitives et opérateurs 

> Notions abordées : expression, types, opérateurs, précédence et associativité

1. Pour chaque expression, **indiquer** :

- Si elle est **valide** (peut être évaluée ou produit une erreur);
- L'**ordre** d'évaluation de l'expression en l'écrivant avec des parenthèses;
- Sa **valeur** si elle valide;

Par exemple, `5 * 2 + 1` est une expression **valide**, elle est évaluée comme `(5 * 2) + 1` car l'opérateur `*` a une plus forte précédence que l'opérateur `+`, sa valeur vaut `11`.

~~~js
let a = 1;
let b = 2;
let c = 0;

a / b;
5 * 3 / 5 * 2 ;
a > b - 1; 
b < c < a;
b > a < c;
b / 2 * 5;
a + 2 * 5 + b / 2 * 5;
true && true;
~~~
~~~js
true && false;
true || false;
false || false;
5 * 2 && a = 2;
6 * 7 > 6 * 7 + 1;
a++ >= b ;
//a vaut 2 à présent
++c === a-- ;
//a vaut 1, c vaut 1 à présent
true && true || 5 > 1;
a * b == 2;
a * b = 2;
'5' == 2 + 3;
'5' === 2 + 3;
~~~

2. **Vérifier** vos résultats avec la console JavaScript de votre navigateur favori (REPL)



## Exercice 1 : Utiliser les boucles

> Notions abordées: boucles for, while, saut conditionnels (if)

1. Écrire une boucle `for` qui affiche la sortie suivante dans la console :

~~~JS
1
2
3
4
5
6
7
8
9
10
~~~

2. Écrire une boucle `for` qui affiche la sortie suivante dans la console :

~~~JS
0
2
4
6
8
12
14
~~~

3. Écrire une boucle `for` qui affiche la sortie suivante dans la console :

~~~JS
1
2
4
8
16
32
64
128
256
~~~

4. Écrire une boucle `for` qui affiche la sortie suivante dans la console :

~~~JS
-1
1
-1
1
-1
1
-1
1
~~~

5. **Réécrire** toutes les boucles précédentes avec une boucle `while`.

## Exercice 2 : Variables et fonctions

> Notions abordées : let, var, const, function, convention de nommage, nommer une variable, nommer une fonction

On prépare un extrait de code qui servira à calculer le montant total d'une facture.

1. **Déclarer une variable** qui a pour valeur le pourcentage de TVA. On rappelle que la TVA est égale à 20%. Choisir la bonne instruction pour la déclarer et un nom adéquat (nom et format en camelCase).
2. **Déclarer une variable** à laquelle on affectera plus tard la valeur du montant en euros hors taxe (HT). Choisir la bonne instruction pour la déclarer et un nom adéquat (nom et format en camelCase).
2. **Déclarer une variable** à laquelle on affectera plus tard la valeur `true` si la TVA est applicable, `false` sinon. Choisir la bonne instruction pour la déclarer et un nom adéquat (nom et format en camelCase).
4. **Écrire une fonction** qui calcule le montant total toute taxe comprise (TTC). Elle prend en argument le montant hors taxe et une valeur qui indique si la TVA doit être appliquée ou non. Elle retourne le montant toute taxe comprise (TTC).
5. Utiliser la fonction précédente pour calculer le montant TTC des factures suivantes :
   1. Numéro de facture : 1, Montant Hors Taxe : 150,50 EUROS, TVA applicable : Non
   2. Numéro de facture : 2, Montant Hors Taxe : 1500 EUROS, TVA applicable : Oui
6. Afficher le résultat dans la console sous la forme :
~~~JS
Facture {numero} :
Montant (HT):  {montant} EUROS
Montant (TTC) :  {montant} EUROS
---
Facture {numero} :
Montant (HT):  {montant} EUROS
Montant (TTC) :  {montant} EUROS
~~~
Remplacer les `{placeholders}` par les valeurs adéquates. Pour cela, utiliser la concaténation de chaînes de caractères.

## Exercice 3 : Parcourir des collections de valeurs

> Notions abordées : fonctions, tableaux, parcours de tableau

Voici deux tableaux de données : l'un contient une série de nombres, l'autre une série de lettres :

~~~JS
const numbers = [1, 5, 32, 27, 12, -5, 100, -1.5, 230];
const letters = ['a', 'z', 'b', 'u', 'r', 'g'];
~~~

Pour chaque besoin exprimé, écrire une fonction qui :

1. Retourne la somme des nombres contenues dans le tableau `numbers`;
2. Retourne la moyenne des nombres contenues dans le tableau `numbers`;
3. Retourne la valeur max et min des nombres contenues dans le tableau `numbers`;
4. Retourne la concaténation des lettres contenues dans le tableau `letters`;
5. Affiche sur la console, pour chaque lettre, si c'est une voyelle ou une consonne;
6. Retourne le tableau des nombres où les éléments sont triés du plus petit au plus grand;
7. Retourne le tableau des lettres où les éléments sont triés par ordre alphabétique.
8. *Bonus*: Retourne la valeur *médiane* des nombres contenues dans le tableau `numbers`;

> Pour le tri des éléments on utilisera la méthode [sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) définie sur les tableaux.




## Exercice 4 : Jeu Fizz Buzz

*Fizzbuzz*, avant d'être utilisé par les recruteur·euses pour faire passer des tests techniques, est un jeu pour apprendre la division aux enfants. Les règles sont simples : il faut compter jusqu'à un certain nombre *positif* que l'on se fixe à l'avance (par exemple 42) : si le nombre est divisible par 3 on le remplace par `"Fizz"`, si il est divisible par 5 par `"Buzz"`, s'il est divisible par 3 et 5, comme 15, par `"Fizz Buzz"`. Sinon on se contente de dire le nombre. 

1. **Écrire** la fonction `fizzbuzz(n)` qui retourne la réponse du jeu sous forme de chaîne de caractère, où `n` représente la taille du jeu. Par exemple, `fizzbuzz(15)` retournera `"1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz"`. 

2. Bonus: **Réécrire** la fonction `fizzbuzz` de manière *récursive* (sans structure de contrôle `for` ou `while`). [Une fonction récursive](https://perso.liris.cnrs.fr/pierre-antoine.champin/enseignement/algo/cours/algo/recursivite.html) est une fonction qui s'appelle elle-même. 

## Exercice 5 : Jouer avec le hasard

1. Écrire une fonction qui retourne un nombre entre 0 et 1. Pour cela, utiliser [`Math.random()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
2. A l'aide de cette fonction, simulez le lancement d'une pièce de monnaie. Si elle tombe sur pile, afficher pile, sinon face.
3. A l'aide d'une boucle, simulez le lancement de 10000 pièces de monnaie. Comptez le nombre de fois que vous obtenez pile, le nombre de fois que vous obtenez face. Calculez la probabilité d'obtenir pile ou face.
4. Écrire une fonction qui simule un jet de dé à 6 faces.

<!-- 
1/2sqrt(N)
 -->