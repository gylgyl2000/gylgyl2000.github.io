---
id: Codecademy-Cheatsheets-Learn_JavaScript-05-Arrays-fr
title: Tableaux
---



[Learn JavaScript: Arrays Cheatsheet | Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays/cheatsheet)



### Propriété `.length`

La propriété `.length` d'un tableau JavaScript indique le nombre d'éléments que le tableau contient.

```js
const numbers = [1, 2, 3, 4];

numbers.length // 4
```



### Index

Les éléments du tableau sont organisés par valeurs *d'index*, en commençant à `0` comme premier index d'élément. Les éléments sont accessibles par leur index en utilisant le nom du tableau et l'index entouré de crochets.

```js
// Accéder à un élément de tableau
const myArray = [100, 200, 300];

console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
console.log(myArray[2]); // 300
```



### Méthode `.push()`

La méthode `.push()` des tableaux JavaScript peut être utilisée pour ajouter un ou plusieurs éléments à la fin d'un tableau. `.push()` mute le tableau d'origine renvoie la nouvelle longueur du tableau.

```js
// Ajout d'un seul élément :
const cart = ['pomme', 'orange'];
cart.push('poire');

// Ajout de plusieurs éléments :
const nombres = [1, 2];
nombres.push(3, 4, 5);
```



### Méthode `.pop()`

La méthode `.pop()` supprime le dernier élément d'un tableau et renvoie cet élément.

```js
const ingredients = ['oeufs', 'farine', 'chocolat'];

const poppedIngredient = ingredients.pop(); // 'Chocolat'
console.log(ingredients); // ['oeufs', 'farine']
```



### Mutable

Les tableaux JavaScript sont *modifiables*, ce qui signifie que les valeurs qu'ils contiennent peuvent être modifiées.
Même s'ils sont déclarés en utilisant `const`, le contenu peut être manipulé  en réaffectant des valeurs internes ou en utilisant des méthodes comme  `.push()` et `.pop()`.

```js
const noms = ['Alice', 'Bob'];

noms.push('Carl');
// ['Alice', 'Bob', 'Carl']
```



### Tableaux

Les tableaux sont des listes de données classées et stockées. Ils peuvent  contenir des éléments de n'importe quel type de données. Les tableaux  sont créés à l'aide de crochets, avec des éléments individuels séparés  par des virgules.

```js
// Un tableau contenant des nombres
const numberArray = [0, 1, 2, 3];

// Un tableau contenant différents types de données
const mixedArray = [1, 'poulet', false];
```

