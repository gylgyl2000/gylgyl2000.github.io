---
id: Codecademy-Cheatsheets-Learn_JavaScript-01-Introduction-_-Variables-fr
title: Introduction - Variables
---



## Introduction

[Learn JavaScript: Introduction Cheatsheet | Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet)



### JavaScript

JavaScript est un langage de programmation qui  alimente le comportement dynamique de la plupart des sites Web. Outre  HTML et CSS, c'est une technologie de base qui permet au Web de  fonctionner.



### Méthodes

Les méthodes renvoient des informations  sur un objet et sont appelées en ajoutant à une instance un point `.`, le  nom de la méthode et des parenthèses.

```js
// Renvoie un nombre entre 0 et 1
Math.random();
```



### Bibliothèques

Les bibliothèques contiennent des méthodes qui peuvent être appelées en  ajoutant au nom de la bibliothèque un point `.`, le nom de la méthode et un  jeu de parenthèses.

```js
Math.random();
// ☝️ Math est la bibliothèque
```



### `console.log()`

La méthode `console.log()` est utilisée pour enregistrer ou imprimer des  messages sur la console. Il peut également être utilisé pour imprimer  des objets et d'autres informations.

```js
console.log('Salut!');
// Impressions : Salut!
```



### Nombres

Les nombres sont un type de données primitif. Ils incluent l'ensemble de tous les entiers et nombres à virgule flottante.

```js
let montant = 6;
let prix = 4,99;
```



### Chaîne `.length`

La propriété `.length` d'une chaîne renvoie le nombre de caractères qui composent la chaîne.

```js
let message = 'bonne nuit';
console.log(message.length);
// Impressions : 10

console.log('bonjour'.length);
// Impressions : 7
```



## Instances de données

Lorsqu'un nouvel élément de données est introduit dans un programme JavaScript,  le programme en assure le suivi dans une instance de ce type de données. Une instance est un cas individuel d'un type de données.



### Booléens

Les booléens sont un type de données primitif. Ils peuvent être vrais ou faux.

```js
let lateToWork = true;
```



### `Math.random()`

La fonction `Math.random()` renvoie un nombre aléatoire à virgule flottante compris entre 0 (inclus) et 1 non compris.

```js
console.log(Math.random ());
// Impressions : 0 - 0,9
```



### `Math.floor()`

La fonction `Math.floor()` renvoie le plus grand entier inférieur ou égal au nombre donné.

```js
console.log(Math.floor(5,95));
// Impressions : 5
```



### Commentaires sur une seule ligne

En JavaScript, les commentaires sur une seule ligne sont créés avec deux barres obliques consécutives //.

```js
// Cette ligne indiquera un commentaire
```



### Null

Null est un type de données primitif. Il représente l'absence intentionnelle de valeur. Dans le code, il est représenté comme `null`.

```js
let x = null;
```



### Chaînes

Les chaînes sont un type de données primitif. Il s'agit de tout groupement  de caractères (lettres, espaces, chiffres ou symboles) entouré de  guillemets simples `'` ou doubles `"`.

```js
let single = 'Où est mon chapeau de bandit ?';
let double = "Où est mon chapeau de bandit ?";
```



## Opérateurs arithmétiques

JavaScript prend en charge les opérateurs arithmétiques pour :

- `+` addition
- `-` soustraction
- `*` multiplication
- `/` division
- `%` modulo

```js
// Addition
5 + 5
// Soustraction
10 - 5
// Multiplication
5 * 10
// Division
10/5
// Modulo
10% 5
```



### Commentaires sur plusieurs lignes

En JavaScript, les commentaires sur plusieurs lignes sont créés en  entourant les lignes avec `/*` au début et `*/` à la fin. Les commentaires sont de bons moyens pour diverses raisons, comme expliquer un bloc de  code ou indiquer des indices, etc.

```js
/*
La configuration ci-dessous doit être
changé avant le déploiement.
*/

let baseUrl = 'localhost/taxwebapp/country';
```



### Opérateur Reste / Modulo

L'opérateur de reste, parfois appelé modulo, renvoie le nombre qui reste après que  le nombre de droite se soit divisé en nombre de gauche autant de fois  que possible.

```js
const weekInYear = Math.floor(365/7) // calcule le  nombre de semaines dans une année, arrondit à l'entier inférieur le plus proche
const daysLeftOver = 367 % 7 // calcule le nombre de jours restants après 365 est divisé par 7

console.log ("Une année a " + weeksInYear + "semaines" et "daysLeftOver" + jours)
```



### Opérateurs d'affectation

Un opérateur d'affectation affecte une valeur à son opérande gauche en  fonction de la valeur de son opérande droit. En voici quelques uns :

- `+=` attribution d'ajout
- `-=` affectation de soustraction
- `*=` affectation de multiplication
- `/=` affectation de division

```js
let number = 100;
// Les deux instructions ajouteront 10
number = number + 10;
number += 10;

console.log (numbre);
// Imprime : 120
```



### Interpolation de chaîne

L'interpolation de chaîne est le processus d'évaluation des chaînes littérales  contenant un ou plusieurs espaces réservés (expressions, variables,  etc.).
Elle peut être effectuée à l'aide de littéraux de modèle: text $ {expression} text.

```js
let age = 7;
// Concaténation de chaînes
'Tommy a' + age + 'ans.';

// Interpolation de chaîne
`Tommy a ${age} ans.`;
```



### Variables

Les variables sont utilisées chaque fois qu'il est nécessaire de stocker  une donnée. Une variable contient des données qui peuvent être utilisées dans le programme ailleurs. L'utilisation de variables garantit  également la réutilisation du code puisqu'elle peut être utilisée pour  remplacer la même valeur à plusieurs endroits.

```js
const devise = '$';
let userIncome = 85000;

console.log(devise + userIncome + 'est supérieur au revenu moyen.');
// Imprime : 85000$ est plus que le revenu moyen.
```



### Indéfini

`undefined` est une valeur JavaScript primitive qui représente l'absence de valeur  définie. Les variables qui sont déclarées mais non initialisées à une  valeur auront la valeur `undefined`.

```js
var a;

console.log(a);
// Imprime : undefined
```



## Apprendre Javascript : les variables

Une variable est un conteneur de données stockées dans la mémoire de  l'ordinateur. Il est référencé par un nom descriptif qu'un programmeur  peut appeler pour attribuer une valeur spécifique et la récupérer.

```js
// exemples de variables
let name = 'Tammy';
const found = false;
var age = 3;
console.log(name, found, age);
// Tammy, false, 3
```



### Déclaration de variables

Pour déclarer une variable en JavaScript, l'un de ces trois mots-clés peut être utilisé avec un nom de variable :

- `var` est utilisé dans les versions antérieures à ES6 de JavaScript.
- `let` est le moyen préféré de déclarer une variable lorsqu'elle peut être réaffectée.
- `const` est la méthode préférée pour déclarer une variable avec une valeur constante.

```js
var age;
let weight;
const numberOfFingers = 20;
```



### Littéraux de modèle

Les littéraux de modèle sont des chaînes qui autorisent les expressions  intégrées, `${expression}`. Alors que les chaînes régulières utilisent  des guillemets simples `'` ou doubles `"`, les littéraux de modèle utilisent  plutôt des accents inversés.

```js
let name = "Codecademy";
console.log(`Bonjour, ${name}`);
// Imprime : Bonjour, Codecademy

console.log (`Billy a ${6+8} ans.`)
// Imprime : Billy a 14 ans.
```



### Le mot-clé `let`

`let` crée une variable locale en JavaScript et peut être réaffecté.  L'initialisation lors de la déclaration d'une variable `let` est  facultative. Une variable `let` contiendra `undefined` si rien ne lui est  assigné.

```js
let count;
console.log(count); // Imprime : undefined
count = 10;
console.log(count); // Imprime : 10
```



Le mot-clé `const`

Une variable constante peut être déclarée à l'aide du mot-clé `const`. Il  doit avoir une mission. Toute tentative de réaffectation d'une variable `const` entraînera une erreur d'exécution JavaScript.

```js
const numberOfColumns = 4;
numberOfColumns = 8;
// TypeError : Affectation à une variable constante.
```



### Concaténation de chaînes

En JavaScript, plusieurs chaînes peuvent être concaténées ensemble à  l'aide de l'opérateur `+`. Dans l'exemple, plusieurs chaînes et variables  contenant des valeurs de chaîne ont été concaténées. Après l'exécution  du bloc de code, la variable `displayText` contiendra la chaîne  concaténée.

```js
let service = 'carte de crédit';
let month = '30 mai';
let displayText = 'Votre' + service + 'facture est due le' + mois + '.';

console.log(displayText);
// Imprime : votre facture de carte de crédit est due le 30 mai.
```

