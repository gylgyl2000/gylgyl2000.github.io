---
id: Codecademy-Cheatsheets-Learn_JavaScript-06-Loops-fr
title: Les boucles
---



[Learn JavaScript: Loops Cheatsheet | Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet)



### La boucle `while`

La boucle `while` crée une boucle qui est  exécutée tant qu'une condition spécifiée est évaluée à `true`. La boucle  continuera à s'exécuter jusqu'à ce que la condition soit évaluée à  `false`. La condition est spécifiée avant la boucle et, généralement, une  variable est incrémentée ou modifiée dans le corps de la boucle `while`  pour déterminer quand la boucle doit s'arrêter.

```js
while (condition) {
  // bloc de code à exécuter
}

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```



### Boucle inversée

Une boucle `for` peut itérer « en sens inverse » en initialisant la variable de boucle à la valeur de départ, en testant le moment où la variable  atteint la valeur de fin et en décrémentant (en soustrayant de) la  variable de boucle à chaque itération.

```js
const items = ['abricot', 'banane', 'cerise'];

for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}

// Imprime : 2. cerise
// Imprime : 1. banane
// Imprime : 0. abricot
```



### Déclaration `Do…While`

Une instruction `do...while` crée une boucle qui exécute un bloc de code  une fois, vérifie si une condition est vraie, puis répète la boucle tant que la condition est vraie. Ils sont utilisés lorsque vous souhaitez  que le code s'exécute toujours au moins une fois. La boucle se termine  lorsque la condition est évaluée à `false`.

```js
x = 0
i = 0

do {
  x = x + i;
  console.log(x)
  i ++;
} while (i < 5);

// Imprime : 0 1 3 6 10
```



### La boucle `for`

Une boucle `for` déclare des instructions en boucle, avec trois informations importantes séparées par des points-virgules `;` :

- *L'initialisation* définit où commencer la boucle en déclarant (ou référençant) la variable d'itérateur
- *La condition d'arrêt* détermine quand arrêter la boucle (lorsque l'expression est évaluée à `false`)
- *L'instruction d'itération* met à jour l'itérateur à chaque fois que la boucle est terminée

```js
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};

// Sortie : 0, 1, 2, 3
```



### Bouclage dans les tableaux

La longueur d'un tableau peut être évaluée avec la propriété `.length`. Ceci est extrêmement utile pour boucler sur des tableaux, car la longueur `.length` du tableau peut être utilisée comme condition d'arrêt dans la  boucle.

```js
for (let i = 0; i < array.length; i++) {
  console.log(tableau[i]);
}

// Sortie : chaque élément du tableau
```



### Mot-clé `break`

Dans une boucle, le mot-clé `break` peut être utilisé pour quitter la boucle  immédiatement, en poursuivant l'exécution après le corps de la boucle.
Ici, le mot-clé `break` est utilisé pour sortir de la boucle lorsque i est supérieur à 5.

```js
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
     break;
  }
  console.log(i)
}

// Sortie : 0 1 2 3 4 5
```



### Boucle `for` imbriquée

Une boucle `for` imbriquée se produit lorsqu'une boucle `for` s'exécute dans une autre boucle `for`.
La boucle interne exécutera toutes ses itérations pour chaque itération de la boucle externe.

```js
for (let externe = 0; externe < 2; externe += 1) {
  for (let interne = 0; interne < 3; interne += 1) {
    console.log(`${externe} - ${interne}`);
  }
}

/*
Sortie :
0-0
0-1
0-2
1-0
1-1
1-2
*/
```



### Boucles

Une *boucle* est un outil de programmation utilisé pour répéter un ensemble  d'instructions. *Itérer* est un terme générique qui signifie « répéter »  dans le contexte des *boucles*. Une *boucle* continuera à *itérer* jusqu'à ce  qu'une condition spécifiée, communément appelée *condition d'arrêt,* soit  remplie.