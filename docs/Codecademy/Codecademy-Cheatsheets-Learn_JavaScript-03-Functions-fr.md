---
id: Codecademy-Cheatsheets-Learn_JavaScript-03-Functions-fr
title: Fonctions
---



[Learn JavaScript: Functions Cheatsheet | Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions/cheatsheet)



### Fonctions fléchées (ES6)

Les expressions de fonction fléchée  ont été introduites dans ES6. Ces expressions sont claires et concises.  La syntaxe d'une expression de fonction fléchée ne nécessite pas le mot-clé `function` et utilise une grosse flèche `=>` pour séparer le ou  les paramètres du corps.
Il existe plusieurs variantes de fonctions fléchées :

- Les fonctions fléchées avec un seul paramètre ne nécessitent pas `()` autour de la liste de paramètres.
- Les fonctions fléchées avec une seule expression peuvent utiliser le corps de fonction concis qui renvoie le résultat de l'expression sans  le mot-clé `return`.

```js
// Fonction fléchée avec deux arguments
const sum = (firstParam, secondParam) => {
  return firstParam + secondParam;
};
console.log(sum(2,5)); // Imprime : 7

// Fonction fléchée sans arguments
const printHello = () => {
  console.log('bonjour');
};
printHello(); // Imprime : bonjour

// Fonction fléchée avec un seul argument
const checkWeight = poids => {
  console.log(`Poids des bagages : ${poids} kilogrammes.`);
};
checkWeight(25); // Imprime : Poids des bagages : 25 kilogrammes.

// Fonctions fléchées concises
const multiplier = (a, b) => a * b;
console.log(multiplier (2, 30)); // Imprime : 60
```



### Les fonctions

Les fonctions sont l'un des éléments fondamentaux de JavaScript. Une  *fonction* est un ensemble d'instructions réutilisables pour effectuer une tâche ou calculer une valeur. Les fonctions peuvent recevoir une ou  plusieurs valeurs et peuvent renvoyer une valeur à la fin de leur  exécution. Pour utiliser une fonction, vous devez la définir quelque  part dans la portée où vous souhaitez l'appeler.
L'exemple de code fourni contient une fonction qui prend 2 valeurs et renvoie la somme de ces nombres.

```js
// Définition de la fonction :
function sum(num1, num2) {
  return num1 + num2;
}

// Appel de la fonction :
sum(3, 6); // 9
```



### Fonctions anonymes

*Les fonctions anonymes* en JavaScript n'ont pas de propriété de nom. Elles peuvent être définies à l'aide du mot-clé `function` ou sous forme de  fonction fléchée. Consultez l'exemple de code pour la différence entre  une fonction nommée et une fonction anonyme.

```js
// Fonction nommée
function rocketToMars() {
  return 'BOOM!';
}

// Fonction anonyme
const rocketToMars = function() {
  return 'BOOM!';
}
```



### Expressions de fonction

Les *expressions* de fonction créent des fonctions à l'intérieur d'une  expression plutôt qu'en tant que déclaration de fonction. Ils peuvent  être anonymes et / ou affectés à une variable.

```js
const dog = function() {
  return 'Woof!';
}
```



### Paramètres de fonction

Les entrées des fonctions sont appelées *paramètres* lorsqu'une fonction est  déclarée ou définie. Les paramètres sont utilisés comme variables dans  le corps de la fonction. Lorsque la fonction est appelée, ces paramètres auront la valeur de tout ce qui est passé en arguments. Il est possible de définir une fonction sans paramètres.

```js
// Le paramètre est nom
function sayHello(nom) {
  return `Bonjour, ${nom} !`;
}
```



### Mot-clé `return`

Les fonctions renvoient (retransmettent) des valeurs à l'aide du mot-clé `return`. `return` termine l'exécution de la fonction et renvoie la valeur  spécifiée à l'emplacement où elle a été appelée. Une erreur courante est d'oublier le mot-clé `return`, auquel cas la fonction retournera `undefined` par défaut.

```js
// Avec return
function somme(num1, num2) {
  returne num1 + num2;
}

// Sans return, donc la fonction ne produit pas la somme
function somme(num1, num2) {
  num1 + num2;
}
```



### Déclaration de fonction

Les *déclarations* de fonction sont utilisées pour créer des fonctions  nommées. Ces fonctions peuvent être appelées en utilisant leur nom  déclaré. Les déclarations de fonction sont construites à partir de :

- Le mot-clé `function`.
- Le nom de la fonction.
- Une liste facultative de paramètres séparés par des virgules entourés d'un jeu de parenthèses `()`.
- Un corps de fonction entouré d'un ensemble d'accolades `{}`.

```js
function add(num1, num2) {
  return num1 + num2;
}
```



### Appel de fonctions

Les fonctions peuvent être *appelées*, ou exécutées, ailleurs dans le code en utilisant des parenthèses après le nom de la fonction. Lorsqu'une  fonction est appelée, le code à l'intérieur de son corps de fonction  s'exécute. Les *arguments* sont des valeurs transmises à une fonction  lorsqu'elle est appelée.

```js
// Définition de la fonction
function somme(num1, num2) {
  return num1 + num2;
}

// Appel de la fonction
somme(2, 4); // 6
```

