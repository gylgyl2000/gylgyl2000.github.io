---
id: freeCodeCamp-ES6-fr
title: ES6
---



## Présentation des défis ES6

[ES6 | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/)

ECMAScript est une version standardisée de JavaScript dans le but  d'unifier les spécifications et les fonctionnalités du langage. Comme  tous les principaux navigateurs et environnements d'exécution JavaScript suivent cette spécification, le terme *ECMAScript* est interchangeable  avec le terme *JavaScript*.

La plupart des défis de freeCodeCamp  utilisent la spécification ECMAScript 5 (ES5) du langage, finalisée en  2009. Mais JavaScript est un langage de programmation en évolution. Au  fur et à mesure que des fonctionnalités sont ajoutées et que des  révisions sont apportées, de nouvelles versions du langage sont publiées pour être utilisées par les développeurs.

La version  standardisée la plus récente s'appelle ECMAScript 6 (ES6), sortie en  2015. Cette nouvelle version du langage ajoute quelques fonctionnalités  puissantes qui seront couvertes dans cette section de défis, notamment :

- Fonctions fléchées
- Classes
- Modules
- Promesses
- Générateurs
- let et const

**Remarque :** tous les navigateurs ne prennent pas en charge les fonctionnalités ES6. Si vous utilisez ES6 dans vos propres projets, vous devrez peut-être  utiliser un programme (transpileur) pour convertir votre code ES6 en  ES5 jusqu'à ce que les navigateurs prennent en charge ES6.

-----



## 1. Explorer les différences entre les mots-clés `var` et `let`

[Learn ES6: Explore Differences Between the var and let Keywords | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/explore-differences-between-the-var-and-let-keywords)

L'un des plus gros problèmes avec la déclaration de variables avec le  mot-clé `var` est que vous pouvez écraser les déclarations de variables  sans erreur.

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'
```

Comme vous pouvez le voir dans le code ci-dessus, la variable `camper` est initialement déclarée en tant que `James`, puis remplacée par `David`. Dans une petite application, vous risquez de ne pas rencontrer ce type de  problème, mais lorsque votre code devient plus volumineux, vous pouvez  accidentellement écraser une variable que vous n'aviez pas l'intention  d'écraser. Étant donné que ce comportement ne génère pas d'erreur, la  recherche et la correction des bugs deviennent plus difficiles.
Un  nouveau mot-clé appelé `let` a été introduit dans ES6 pour résoudre ce  problème potentiel avec le mot-clé `var`. Si vous deviez remplacer `var` par `let` dans les déclarations de variables du code ci-dessus, le résultat  serait une erreur.

```js
let camper = 'James';
let camper = 'David'; // throws an error
```

Cette erreur peut être vue dans la console de votre navigateur. Donc,  contrairement à `var`, lors de l'utilisation de `let`, une variable du même nom ne peut être déclarée qu'une seule fois. Notez le "use strict". Cela active le mode strict, qui détecte les erreurs de codage courantes et  les actions "dangereuses". Par exemple :

```js
"use strict";
x = 3.14; // throws an error because x is not declared
```

-----

Mettez à jour le code pour qu'il n'utilise que le mot clé `let`.

> `var` ne doit pas exister dans le code.
> `catName` doit être `Oliver`.
> la citation devrait être `"Oliver says Meow!"`

```js
var catName;
var quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();
```

```js
let catName;
let quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();
console.log(quote); // Oliver says Meow!
```

-----



## 2. Comparez les portées des mots clés `var` et `let`

[Learn ES6: Compare Scopes of the var and let Keywords | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/compare-scopes-of-the-var-and-let-keywords)

Lorsque vous déclarez une variable avec le mot-clé `var`, elle est déclarée globalement, ou localement si elle est déclarée à l'intérieur d'une  fonction.
Le mot-clé `let` se comporte de la même manière, mais  avec quelques fonctionnalités supplémentaires. Lorsque vous déclarez une variable avec le mot-clé `let` dans un bloc, une instruction ou une  expression, sa portée est limitée à ce bloc, cette instruction ou cette  expression.
Par exemple :

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // returns [0, 1, 2]
console.log(i); // returns 3
```

Avec le mot-clé `var`, `i` est déclaré globalement. Ainsi, lorsque `i++` est  exécuté, il met à jour la variable globale. Ce code est similaire au  suivant :

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // returns [0, 1, 2]
console.log(i); // returns 3
```

Ce comportement posera des problèmes si vous deviez créer une fonction et la stocker pour une utilisation ultérieure dans une boucle `for` qui  utilise la variable `i`. En effet, la fonction stockée fera toujours  référence à la valeur de la variable `i` globale mise à jour.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 3
```

Comme vous pouvez le voir, `printNumTwo()` affiche 3 et non 2. Cela est  dû au fait que la valeur affectée à `i` a été mise à jour et que  `printNumTwo()` renvoie le `i` global et non la valeur que j'avais lorsque  la fonction a été créée dans la boucle `for`. Le mot clé `let` ne suit pas ce comportement :

```js
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 2
console.log(i); // returns "i is not defined"
```

`i` n'est pas défini car il n'a pas été déclaré dans la portée globale. Il n'est déclaré que dans l'instruction de la boucle `for`. `printNumTwo()` a renvoyé la valeur correcte car trois variables `i` différentes avec des valeurs uniques (0, 1 et 2) ont été créées par le mot-clé `let` dans l'instruction de boucle.

-----

Corrigez le code pour que `i` déclaré  dans l'instruction `if` soit une variable distincte de celle que `i` déclaré dans la première ligne de la fonction. Assurez-vous de ne pas  utiliser le mot-clé `var` dans votre code.

Cet exercice est conçu  pour illustrer la différence entre la façon dont les mots-clés `var` et  `let` attribuent une portée à la variable déclarée. Lors de la  programmation d'une fonction similaire à celle utilisée dans cet  exercice, il est souvent préférable d'utiliser des noms de variables  différents pour éviter toute confusion.

> `var` ne devrait pas exister dans le code.
> La variable que `i` déclarée dans l'instruction if doit être égale à "block scope".
> `checkScope()` devrait renvoyer "function scope"

```js
function checkScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

```js
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i); // Block scope i is:  block scope
  }
  console.log('Function scope i is: ', i); // Function scope i is:  function scope
  return i;
}
console.log(checkScope()); // function scope
```

----



## 3. Déclarer une variable en lecture seule avec le mot-clé `const`

[Learn ES6: Declare a Read-Only Variable with the const Keyword | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/declare-a-read-only-variable-with-the-const-keyword)

Le mot clé `let` n'est pas la seule nouvelle façon de déclarer des  variables. Dans ES6, vous pouvez également déclarer des variables à  l'aide du mot clé const.
`const` a toutes les fonctionnalités impressionnantes que `let` a, avec le bonus supplémentaire que les  variables déclarées à l'aide de `const` sont en lecture seule. Il s'agit  d'une valeur constante, ce qui signifie qu'une fois qu'une variable est  affectée avec `const`, elle ne peut pas être réaffectée.

```js
"use strict";
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
```

Comme vous pouvez le voir, essayer de réaffecter une variable déclarée avec `const` lèvera une erreur. Vous devez toujours nommer les variables que  vous ne souhaitez pas réaffecter à l'aide du mot-clé `const`. Cela aide  lorsque vous essayez accidentellement de réaffecter une variable censée  rester constante. Une pratique courante lors de la dénomination des  constantes consiste à utiliser toutes les lettres majuscules, avec des  mots séparés par un trait de soulignement.

**Remarque :** Il est  courant pour les développeurs d'utiliser des identificateurs de variable en majuscules pour les valeurs immuables et en minuscules ou camelCase  pour les valeurs mutables (objets et tableaux). Dans un défi ultérieur,  vous verrez un exemple d'identifiant de variable minuscule utilisé pour  un tableau.

-----

Modifiez le code pour que toutes les variables soient déclarées à l'aide de `let` ou `const`. Utilisez `let` lorsque vous souhaitez que la variable change et `const` lorsque vous souhaitez que la variable  reste constante. De plus, renommez les variables déclarées avec `const`  pour se conformer aux pratiques courantes, ce qui signifie que les  constantes doivent être en majuscules.

> `var` ne devrait pas exister dans votre code.
> `SENTENCE` doit être une variable constante déclarée avec `const`.
> `i` devrais être déclaré avec `let`.
> `console.log` doit être modifié pour imprimer la variable `SENTENCE`.

```js
function printManyTimes(str) {
  "use strict";
  // Only change code below this line
  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }
  // Only change code above this line
}
printManyTimes("freeCodeCamp");
```

```js
function printManyTimes(str) {
  "use strict";
  // Only change code below this line
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
  // Only change code above this line
}
printManyTimes("freeCodeCamp");
```

```bash
freeCodeCamp is cool!
freeCodeCamp is cool!
freeCodeCamp is cool!
freeCodeCamp is cool!
freeCodeCamp is cool!
freeCodeCamp is cool!
```

-----



## 4. Muter un tableau déclaré avec `const`

[Learn ES6: Mutate an Array Declared with const | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const)

La déclaration `const` a de nombreux cas d'utilisation dans JavaScript moderne.
Certains développeurs préfèrent affecter toutes leurs variables en utilisant  `const` par défaut, à moins qu'ils ne sachent qu'ils devront réaffecter la valeur. Seulement dans ce cas, ils utilisent `let`.
Cependant, il  est important de comprendre que les objets (y compris les tableaux et  les fonctions) affectés à une variable à l'aide de `const` sont toujours modifiables. L'utilisation de la déclaration `const` empêche uniquement la réaffectation de l'identificateur de variable.

```js
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // envoie une erreur, en essayant d'attribuer un const
s[2] = 45; // fonctionne comme il le ferait avec un tableau déclaré avec var ou let
console.log(s); // retourne [5, 6, 45]
```

Comme vous pouvez le voir, vous pouvez muter l'objet `[5, 6, 7]` lui-même et la variable `s` pointera toujours vers le tableau modifié `[5, 6, 45]`. Comme  tous les tableaux, les éléments du tableau dans `s` sont modifiables, mais comme `const` a été utilisé, vous ne pouvez pas utiliser l'identificateur de variable `s` pour pointer vers un tableau différent à l'aide de  l'opérateur d'affectation.

-----

Un tableau est déclaré comme `const s = [5, 7, 2]`. Modifiez le tableau en `[2, 5, 7]` en utilisant diverses  affectations d'éléments.

> Vous ne devez pas remplacer le mot-clé `const`.
> `s` doit être une variable constante (en utilisant `const`).
> Vous ne devez pas modifier la déclaration de tableau d'origine.
> `s` doit être égal à `[2, 5, 7]`.

```js
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
  s.unshift(2);
  s.pop();
  // Using s = [2, 5, 7] would be invalid
  // Only change code above this line
}
editInPlace();
```

------



## 5. Empêcher la mutation d'objet

[Learn ES6: Prevent Object Mutation | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/prevent-object-mutation)

Comme vu dans le défi précédent, la déclaration `const` seule ne protège  pas vraiment vos données de la mutation. Pour vous assurer que vos  données ne changent pas, JavaScript fournit une fonction `Object.freeze`  pour empêcher la mutation des données.
Une fois l'objet figé,  vous ne pouvez plus y ajouter, mettre à jour ou supprimer des  propriétés. Toute tentative de changement d'objet sera rejetée sans  erreur.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // sera ignoré. Mutation non autorisée
obj.newProp = "Test"; // sera ignoré. Mutation non autorisée
console.log(obj); // { name: "FreeCodeCamp", review:"Awesome"}
```

-----

Dans ce défi, vous allez utiliser `Object.freeze` pour empêcher les constantes mathématiques de changer. Vous devez figer l'objet `MATH_CONSTANTS` afin  que personne ne puisse modifier la valeur de `PI`, ajouter ou supprimer  des propriétés.

> Vous ne devez pas remplacer le mot-clé `const`.
> `MATH_CONSTANTS` doit être une variable constante (en utilisant `const`).
> Vous ne devez pas modifier `MATH_CONSTANTS` d'origine.
> `PI` doit être égal à `3.14`.

```js
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

-----



## 6. Utiliser les fonctions fléchées pour écrire des fonctions anonymes concises

[Learn ES6: Use Arrow Functions to Write Concise Anonymous Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions)

En JavaScript, nous n'avons souvent pas besoin de nommer nos fonctions,  en particulier lors de la transmission d'une fonction comme argument à  une autre fonction. Au lieu de cela, nous créons des fonctions en ligne. Nous n'avons pas besoin de nommer ces fonctions car nous ne les  réutilisons nulle part ailleurs.
Pour y parvenir, nous utilisons souvent la syntaxe suivante :

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 nous fournit le sucre syntaxique pour ne pas avoir à écrire des  fonctions anonymes de cette façon. Au lieu de cela, vous pouvez utiliser **la syntaxe de la fonction fléchée** :

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

Lorsqu'il n'y a pas de corps de fonction et seulement une valeur de retour, la  syntaxe de la fonction fléchée vous permet d'omettre le mot-clé `return` ainsi que les crochets entourant le code. Cela permet de simplifier les fonctions plus petites en instructions sur une ligne :

```js
const myFunc = () => "value";
```

Ce code retournera toujours `value` par défaut.

-----

Réécrivez la fonction affectée à la variable `magic` qui renvoie une `new Date()` pour utiliser la syntaxe de la fonction fléchée. Assurez-vous  également que rien n'est défini à l'aide du mot-clé `var`.

> L'utilisateur doit remplacer le mot-clé `var`.
> `magic` devrait être une variable constante (en utilisant `const`).
> `magic` devrait être une fonction.
> `magic()` doit renvoyer la date correcte.
> Le mot clé `function` ne doit pas être utilisé.

```js
var magic = function() {
  "use strict";
  return new Date();
};
```

```js
const magic = () => new Date();
```

-----



## 7. Écrire des fonctions fléchées avec des paramètres

[Learn ES6: Write Arrow Functions with Parameters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters)

Tout comme une fonction normale, vous pouvez passer des arguments dans une fonction fléchée.

```js
// double la valeur d'entrée et la renvoie
const doubler = (item) => item * 2;
```

Si une fonction fléchée a un seul argument, les parenthèses entourant l'argument peuvent être omises.

```js
// la même fonction, sans l'argument entre parenthèses
const doubler = item => item * 2;
```

Il est possible de passer plus d'un argument dans une fonction fléchée.

```js
// multiplie la première valeur d'entrée par la seconde et la renvoie
const multiplier = (item, multi) => item * multi;
```

-----

Réécrivez la fonction `myConcat` qui ajoute le contenu de `arr2` à `arr1` afin que la  fonction utilise la syntaxe de la fonction fléchée.

> Vous devez remplacer le mot-clé `var`.
> `myConcat` doit être une variable constante (en utilisant `const`).
> `myConcat` doit être une fonction fléchée avec deux paramètres.
> `myConcat()` doit renvoyer `[1, 2, 3, 4, 5]`.
> Le mot clé `function` ne doit pas être utilisé.

```js
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
```

```js
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]
```

-----



## 8. Définir les paramètres par défaut pour vos fonctions

[Learn ES6: Set Default Parameters for Your Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions)

Afin de nous aider à créer des fonctions plus flexibles, ES6 introduit *des paramètres par défaut* pour les fonctions.
Consultez ce code :

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

Le paramètre par défaut intervient lorsque l'argument n'est pas spécifié  (il n'est pas défini). Comme vous pouvez le voir dans l'exemple  ci-dessus, le paramètre `name` recevra sa valeur par défaut `"Anonymous"` lorsque vous ne fournissez pas de valeur pour le paramètre. Vous pouvez  ajouter des valeurs par défaut pour autant de paramètres que vous le  souhaitez.

-----

Modifiez la fonction `increment` en ajoutant des  paramètres par défaut afin qu'il ajoute 1 au `number` si `value` n'est  pas spécifiée.

> Le résultat de `increment(5, 2)` doit être `7`.
> Le résultat de `increment(5)` doit être `6`.
> Une valeur de paramètre par défaut de `1` doit être utilisée pour `value`.

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

```js
const increment = (number, value = 1) => number + value;
```

-----



## 9. Utiliser `rest parameter` avec les paramètres de fonction

[Learn ES6: Use the Rest Parameter with Function Parameters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters)

Afin de nous aider à créer des fonctions plus flexibles, ES6 introduit *rest parameter* pour les paramètres de fonction. Avec *rest parameter*, vous pouvez créer des fonctions qui acceptent un nombre variable  d'arguments. Ces arguments sont stockés dans un tableau accessible ultérieurement depuis l'intérieur de la fonction.
Consultez ce code :

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // Vous avez passé 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // Vous avez passé 4 arguments.
```

*rest parameter* élimine le besoin de vérifier le tableau `args` et nous permet d'appliquer `map()`, `filter()` et `reduce()`sur le tableau de paramètres.

-----

Modifiez la fonction `sum` en utilisant *rest parameter* de manière à ce que la fonction `sum` puisse prendre n'importe quel  nombre d'arguments et renvoyer leur somme.

> Le résultat de `sum(0,1,2)` doit être 3
> Le résultat de `sum(1,2,3,4)` devrait être 10
> Le résultat de `sum(5)` doit être 5
> Le résultat de `sum()` doit être 0
> La fonction sum doit utiliser *rest parameter* `...` sur le paramètre `args`.

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
```

```js
const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(0, 1, 2)); // 3
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5)); // 5
console.log(sum(0)); // 0
```

------



## 10. Utilisez l'opérateur de décomposition pour évaluer les tableaux sur place

[Learn ES6: Use the Spread Operator to Evaluate Arrays In-Place | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place)

ES6 introduit *l'opérateur de décomposition*, qui nous permet de développer  des tableaux et d'autres expressions dans des endroits où plusieurs  paramètres ou éléments sont attendus.
Le code ES5 ci-dessous utilise `apply()` pour calculer la valeur maximale dans un tableau :

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // renvoie 89
```

Nous avons dû utiliser `Math.max.apply(null, arr)` car `Math.max(arr)` renvoie `NaN`. `Math.max()` attend des arguments séparés par des virgules, mais pas un tableau. L'opérateur de décomposition rend cette syntaxe bien meilleure à  lire et à maintenir.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // renvoie 89
```

`...arr` renvoie un tableau décompressé. En d'autres termes, il *décompose* le  tableau. Cependant, l'opérateur de décomposition ne fonctionne que sur  place, comme dans un argument à une fonction ou dans un littéral de tableau. Le code suivant ne fonctionnera pas :

```js
const spreaded = ...arr; // lancera une erreur de syntaxe
```

------

Copiez tout le contenu de `arr1` dans un autre tableau `arr2` à l'aide de l'opérateur de décomposition.

> `arr2` doit être une copie correcte de `arr1`.
> L'opérateur de décomposition `...` doit être utilisé pour dupliquer `arr1`.
> `arr2` doit rester inchangé lorsque `arr1` est modifié.

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [];  // Change this line
console.log(arr2);
```

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);
```

------



## 11. Utiliser l'affectation de décomposition pour extraire des valeurs d'objets

[Learn ES6: Use Destructuring Assignment to Extract Values from Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-extract-values-from-objects)

*L'affectation de décomposition* est une syntaxe spéciale introduite  dans ES6, pour attribuer proprement des valeurs prises directement à  partir d'un objet.
Considérez le code ES5 suivant :

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
```

Voici une instruction d'affectation équivalente utilisant la syntaxe de déstructuration ES6 :

```js
const { name, age } = user;
// name = 'John Doe', age = 34
```

Ici, les variables `name` et `age` seront créées et affectées aux valeurs de leurs valeurs respectives à partir de l'objet `user`. Vous pouvez  voir à quel point c'est plus propre.
Vous pouvez extraire autant ou peu de valeurs de l'objet que vous le souhaitez.

-----

Remplacez les deux affectations par une affectation de décomposition  équivalente. Elle doit encore affecter aux variables `today` et `tomorrow` les valeurs `today` et `tomorrow` à partir de l'objet `HIGH_TEMPERATURES`.

> Vous devez supprimer la syntaxe d'affectation ES5.
> Vous devez utiliser la déstructuration pour créer la variable `today`.
> Vous devez utiliser la déstructuration pour créer la variable `tomorrow`.
> `today` devrait être égal à `77` et `tomorrow` devrait être égal à `80`.

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
// Only change code above this line
```

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today); // 77
console.log(tomorrow); // 80
```

-----



## 12. Utiliser l'affectation de décomposition pour affecter des variables à partir d'objets

[Learn ES6: Use Destructuring Assignment to Assign Variables from Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-objects)

La décomposition vous permet d'attribuer un nouveau nom de variable lors  de l'extraction des valeurs. Vous pouvez le faire en mettant le nouveau  nom après un deux-points lors de l'attribution de la valeur.
En utilisant le même objet du dernier exemple :

```js
const user = { name: 'John Doe', age: 34 };
```

Voici comment vous pouvez donner de nouveaux noms de variable dans l'affectation :

```js
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
```

Vous pouvez le lire comme « obtenir la valeur de `user.name` et l'assigner à  une nouvelle variable nommée `userName` » et ainsi de suite.

-----

Remplacez les deux affectations par une affectation de décomposition  équivalente. Elle doit toujours affecter aux variables `highToday` et  `highTomorrow` les valeurs `today` et `tomorrow` à partir de l'objet `HIGH_TEMPERATURES`.

> Vous devez supprimer la syntaxe d'affectation ES5.
> Vous devez utiliser la décomposition pour créer la variable `highToday`.
> Vous devez utiliser la décomposition pour créer la variable `highTomorrow`.
> `highToday` doit être égal à `77` et `highTomorrow` doit être égal à `80`.

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow;
// Only change code above this line
```

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};  
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday); // 77
console.log(highTomorrow); // 80
```

-----



## 13. Utiliser l'affectation de décomposition pour affecter des variables à partir d'objets imbriqués

[Learn ES6: Use Destructuring Assignment to Assign Variables from Nested Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects)

Vous pouvez utiliser les mêmes principes des deux leçons précédentes pour décomposer les valeurs d'objets imbriqués.
En utilisant un objet similaire aux exemples précédents :

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Voici comment extraire les valeurs des propriétés d'objet et les affecter à des variables du même nom :

```js
const { johnDoe: { age, email }} = user;
```

Et voici comment attribuer les valeurs des propriétés d'un objet à des variables avec des noms différents :

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

-----

Remplacez les deux affectations par une affectation de décomposition  équivalente. Elle doit toujours affecter aux variables `lowToday` et  `highToday` les valeurs de `today.low` et `today.high` de l'objet `LOCAL_FORECAST`.

> Vous devez supprimer la syntaxe d'affectation ES5.
> Vous devez utiliser la décomposition pour créer la variable `lowToday`.
> Vous devez utiliser la décomposition pour créer la variable `highToday`.
> `lowToday` doit être égal à `64` et `highToday` doit être égal à `77`.

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// Only change code below this line  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;
// Only change code above this line
```

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
console.log(lowToday); // 64
console.log(highToday); // 77
```

------



## 14. Utiliser l'affectation de décomposition pour affecter des variables à partir de tableaux

[Learn ES6: Use Destructuring Assignment to Assign Variables from Arrays | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-arrays)

ES6 rend la décomposition des tableaux aussi simple que la décomposition des objets.
Une différence clé entre l'opérateur de propagation et la décomposition  de tableau est que l'opérateur de décomposition décompresse tout le  contenu d'un tableau dans une liste séparée par des virgules. Par  conséquent, vous ne pouvez pas sélectionner ou choisir les éléments que  vous souhaitez affecter aux variables.
La décomposition d'un tableau nous permet de faire exactement cela :

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

La variable `a` reçoit la première valeur du tableau et `b` la deuxième valeur du tableau. Nous pouvons également accéder à la valeur à n'importe quel index dans un tableau avec décomposition en utilisant des virgules  pour atteindre l'index souhaité :

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

-----

Utilisez l'affectation de décomposition pour permuter les valeurs de `a` et `b`  afin que `a` reçoive la valeur stockée dans `b` et que `b` reçoive la valeur stockée dans `a`.

> La valeur de `a` doit être `6`, après échange.
> La valeur de `b` doit être `8`, après échange.
> Vous devez utiliser la décomposition de tableau pour permuter `a` et `b`.

```js
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a); // 6
console.log(b); // 8
```

-----



## 15. Utiliser l’affectation de décomposition avec le paramètre Rest pour réattribuer des éléments de tableau

[Learn ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements)

Dans certaines situations impliquant la décomposition d'un tableau, nous pourrions vouloir rassembler le reste des éléments dans un tableau séparé.
Le résultat est similaire à `Array.prototype.slice()`, comme indiqué ci-dessous :

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

Les variables `a` et `b` prennent les première et deuxième valeurs du tableau.  Après cela, en raison de la présence du paramètre `rest`, `arr` obtient le  reste des valeurs sous la forme d'un tableau. L'élément `rest` ne  fonctionne correctement que comme dernière variable de la liste. Ainsi, vous ne pouvez pas utiliser le paramètre `rest` pour intercepter un  sous-tableau qui laisse de côté le dernier élément du tableau d'origine.

-----

Utilisez l'affectation de décomposition avec le paramètre `rest` pour effectuer un `Array.prototype.slice()` efficace de sorte que `arr` soit un sous-tableau de la source du tableau d'origine avec les deux premiers  éléments omis.

> `arr` doit être `[3,4,5,6,7,8,9,10]`.
> `source` doit être `[1,2,3,4,5,6,7,8,9,10]`.
> `Array.slice()` ne doit pas être utilisé.
> La décomposition sur `list` doit être utilisée.

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;  
}
const arr = removeFirstTwo(source);
console.log(source); // [1,2,3,4,5,6,7,8,9,10]
console.log(arr); // [3,4,5,6,7,8,9,10]
```

-----



## 16. Utiliser l'affectation de décomposition pour transmettre un objet en tant que paramètres d'une fonction

[Learn ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters)

Dans certains cas, vous pouvez déstructurer l'objet dans un argument de fonction lui-même.
Considérez le code ci-dessous :

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // faire quelque chose avec ces variables
}
```

Cela détruit efficacement l'objet envoyé dans la fonction. Cela peut également être fait sur place :

```js
const profileUpdate = ({ name, age, nationality, location }) => {
  / * faire quelque chose avec ces champs * /
}
```

Lorsque `profileData` est passé à la fonction ci-dessus, les valeurs sont  déstructurées du paramètre de fonction pour être utilisées dans la  fonction.

-----

Utilisez l'affectation de décomposition dans  l'argument de la fonction `half` pour envoyer uniquement `max` et `min` à  l'intérieur de la fonction.

> `stats` devrait être un objet.
> `half(stats)` doit être `28.015`.
> La décomposition doit être utilisée.
> Le paramètre décomposé doit être utilisé.

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => {
  return (max + min) / 2.0;
};
console.log(half(stats)); // 28.015
```

-----



## 17. Créer des chaînes à l'aide de littéraux de gabarits

[Learn ES6: Create Strings using Template Literals | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-strings-using-template-literals)

Une nouvelle fonctionnalité d'ES6 est le *littéral de gabarits*. Il s'agit  d'un type spécial de chaîne qui facilite la création de chaînes  complexes.
Les littéraux de gabarits vous permettent de créer des  chaînes multilignes et d'utiliser des fonctionnalités d'interpolation de chaîne pour créer des chaînes.
Considérez le code ci-dessous :

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};
// Modèle littéral avec interpolation multiligne et chaîne
const greeting = `Bonjour, mon nom est ${person.name}!
J'ai ${person.age} ans.`;
console.log (greeting); // imprime
// Bonjour, je m'appelle Zodiac Hasbro!
// J'ai 56 ans.
```

Beaucoup de choses s'y sont passées. Tout d'abord, l'exemple utilise des accents inversés (backticks) (`` `), pas des guillemets (quotes) (`'` ou `"`), pour envelopper la chaîne.  Deuxièmement, notez que la chaîne est multiligne, à la fois dans le code et dans la sortie. Cela évite l'insertion `\n` dans les chaînes. La  syntaxe `${variable}` utilisée ci-dessus est un espace réservé. En gros,  vous n'aurez plus à utiliser la concaténation avec l'opérateur `+`. Pour  ajouter des variables aux chaînes, déposez simplement la variable dans  une chaîne de modèle et enveloppez-la avec `${` et `}`. De même, vous pouvez  inclure d'autres expressions dans votre chaîne littérale, par exemple `$ {a + b}`. Cette nouvelle façon de créer des chaînes vous offre plus de  flexibilité pour créer des chaînes robustes.

------

Utilisez la syntaxe  littérale de gabarits avec des accents inversés pour créer un tableau de  chaînes d'éléments de liste (`li`). Le texte de chaque élément de liste  doit être l'un des éléments de tableau de la propriété `failure` sur  l'objet `result` et avoir un attribut `class` avec la valeur `text-warning`. La fonction `makeList` doit retourner le tableau des chaînes d'éléments de liste.
Utilisez une méthode itératrice (tout type de boucle) pour obtenir la sortie souhaitée (illustrée ci-dessous).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

> `failuresList` doit être un tableau contenant des messages `result failure`.
> `failuresList` doit être égal à la sortie spécifiée.
> Les chaînes de gabarits et l'interpolation d'expression doivent être utilisées.
> Un itérateur doit être utilisé.

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Changer uniquement le code en dessous de cette ligne
  const failureItems = [];
  // Ne changez le code qu'au-dessus de cette ligne
  return failureItems;
}
const failuresList = makeList(result.failure);
```

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  let failureItems = [];
  for (let i = 0; i < result.failure.length; i++) {
    failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)   
  };
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList)
// [ '<li class="text-warning">no-var</li>',
//  '<li class="text-warning">var-on-top</li>',
//  '<li class="text-warning">linebreak</li>' ]
```

------



## 18. Écrire des déclarations concises de littéral d'objet à l'aide d'un raccourci de propriété d'objet

[Learn ES6: Write Concise Object Literal Declarations Using Object Property Shorthand | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-concise-object-literal-declarations-using-object-property-shorthand)

ES6 ajoute un support intéressant pour définir facilement les littéraux d'objets.
Considérez le code suivant :

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` est une fonction simple qui renvoie un objet contenant deux propriétés. ES6 fournit le sucre syntaxique pour éliminer la redondance d'avoir à  écrire `x: x`. Vous pouvez simplement écrire `x` une fois, et il sera  converti en `x: x` (ou quelque chose d'équivalent) sous le capot. Voici  la même fonction ci-dessus réécrite pour utiliser cette nouvelle  syntaxe :

```js
const getMousePosition = (x, y) => ({ x, y });
```

-----

Utilisez un raccourci de propriété d'objet avec des littéraux d'objet pour créer et renvoyer un objet avec des propriétés `name`, `age` et `gender`.

> `createPerson("Zodiac Hasbro", 56, "male")` doit renvoyer `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.
> Votre code ne doit pas utiliser `key:value`.

```js
const createPerson = (name, age, gender) => {
  "use strict";
  // Changer uniquement le code en dessous de cette ligne
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Ne changez le code qu'au-dessus de cette ligne
};
```

```js
const createPerson = (name, age, gender) => {
  "use strict";
  return { name, age, gender };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"))
// { name: 'Zodiac Hasbro', age: 56, gender: 'male' }
```

-----



## 19. Écrire des fonctions déclaratives concises avec ES6

[Learn ES6: Write Concise Declarative Functions with ES6 | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-concise-declarative-functions-with-es6)

Lors de la définition de fonctions dans des objets dans ES5, nous devons utiliser le mot-clé `function` comme suit :

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

Avec ES6, vous pouvez supprimer complètement le mot-clé `function` et les  deux points lors de la définition de fonctions dans les objets. Voici un exemple de cette syntaxe :

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

-----

Refactorisez la fonction `setGear` à l'intérieur de l'objet `bicycle` pour utiliser la syntaxe abrégée décrite ci-dessus.

> L'expression de fonction traditionnelle ne doit pas être utilisée.
> `setGear` doit être une fonction déclarative.
> `bike.setGear(48)` doit changer la valeur de `gear` à `48`.

```js
// Changer uniquement le code en dessous de cette ligne
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(48);
console.log(bicycle.gear); // 48
```

-----



## 20. Utiliser la syntaxe de classe pour définir une fonction constructeur

[Learn ES6: Use class Syntax to Define a Constructor Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-class-syntax-to-define-a-constructor-function)

ES6 fournit une nouvelle syntaxe pour créer des objets, à l'aide du mot-clé *class*.
Il convient de noter que la syntaxe `class` n'est que de la syntaxe, et  non une implémentation à part entière basée sur les classes d'un  paradigme orienté objet, contrairement à des langages tels que Java,  Python, Ruby, etc.
Dans ES5, nous définissons généralement une fonction constructeur et utilisons le mot-clé `new` pour instancier un objet.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

La syntaxe `class` remplace simplement la création de la fonction constructeur :

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

Il est à noter que le mot-clé `class` déclare une nouvelle fonction, à  laquelle un constructeur est ajouté. Ce constructeur est appelé lorsque `new` est appelé pour créer un nouvel objet.
**Remarques :**

- UpperCamelCase doit être utilisé par convention pour les noms de classe ES6, comme dans `SpaceShuttle` utilisé ci-dessus.
- La méthode constructeur est une méthode spéciale pour créer et  initialiser un objet créé avec une classe. Vous en apprendrez plus à ce  sujet dans la section Programmation orientée objet de la certification  des algorithmes JavaScript et des structures de données.

-----

Utilisez le mot-clé `class` et écrivez un constructeur pour créer la classe `Vegetable`.
La classe `Vegetable` vous permet de créer un objet légume avec une propriété `name` qui est transmis au constructeur.

> `Vegetable` doit être une classe avec une méthode `constructor` définie.
> Le mot-clé `class` doit être utilisé.
> `Vegetable` doit pouvoir être instancié.
> `carrot.name` doit renvoyer `carrot`.

```js
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Doit afficher 'carrot'
```

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  };
};
const carrot = new Vegetable('carrot');
console.log(carrot.name); // carrot
```

-----



## 21. Utiliser des accesseurs (getters) et des mutateurs (setters) pour contrôler l'accès à un objet

[Learn ES6: Use getters and setters to Control Access to an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object)

Vous pouvez obtenir des valeurs d'un objet et définir la valeur d'une propriété dans un objet.
Celles-ci sont classiquement appelées *getters* et *setters*.
Les fonctions accesseur sont censées simplement renvoyer (get) la valeur de la variable privée d'un objet à l'utilisateur sans que  l'utilisateur accède directement à la variable privée.
Les fonctions mutateur sont destinées à modifier (set) la valeur de la variable privée d'un objet en fonction de la valeur transmise à la  fonction de définition. Ce changement peut impliquer des calculs, voire  écraser complètement la valeur précédente.

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor
```

Notez la syntaxe utilisée pour appeler le getter et le setter. Ils ne ressemblent même pas à des fonctions. Les getters et les setters sont  importants car ils masquent les détails d'implémentation internes. **Remarque :** il est conventionnel de faire précéder le nom d'une variable privée d'un trait de soulignement (`_`). Cependant, la pratique elle-même  ne rend pas une variable privée.

-----

Utilisez le mot-clé `class` pour créer une classe `Thermostat`. Le constructeur accepte une température Fahrenheit.
Créez maintenant un `getter` et un `setter` dans la classe, pour obtenir la température en Celsius.
N'oubliez pas que `C = 5/9 * (F - 32)` et `F = C * 9,0 / 5 + 32`, où `F` est la valeur  de la température en Fahrenheit et `C` est la valeur de la même  température en Celsius.
**Remarque :** lorsque vous implémentez cela, vous suivrez la température à l'intérieur de la classe sur une échelle,  soit Fahrenheit, soit Celsius.
C'est la puissance d'un getter et  d'un setter. Vous créez une API pour un autre utilisateur, qui peut  obtenir le résultat correct quel que soit celui que vous suivez.
En d'autres termes, vous faites abstraction des détails d'implémentation de l'utilisateur.

> `Thermostat` doit être une `class` avec une méthode `constructor` définie.
> Le mot-clé `class` doit être utilisé.
> `Thermostat` doit pouvoir être instancié.
> Un `getter` doit être défini.
> Un `setter` doit être défini.
> L'appel du `setter` devrait régler la température.

```js
// Changer uniquement le code en dessous de cette ligne
// Ne changez le code qu'au-dessus de cette ligne
const thermos = new Thermostat(76); // Réglage en échelle Fahrenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius
```

```js
class Thermostat {
  constructor(Fahrenheit) {
    this._Fahrenheit = (Fahrenheit - 32) * 5/9;
  };
  get temperature() {
    return this._Fahrenheit;
  };
  set temperature(Celsius) {
    this._Fahrenheit = Celsius;
  };
};
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

-----



## 22. Créer un module script

[Learn ES6: Create a Module Script | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-module-script)

JavaScript a commencé avec un petit rôle à jouer sur un site Web  essentiellement HTML. Aujourd'hui, c'est énorme, et certains sites Web  sont presque entièrement construits avec JavaScript. Afin de rendre  JavaScript plus modulaire, propre et maintenable ; ES6 a introduit un  moyen de partager facilement du code entre des fichiers JavaScript. Cela implique l'exportation de parties d'un fichier à utiliser dans un ou  plusieurs autres fichiers et l'importation des parties dont vous avez  besoin, là où vous en avez besoin. Afin de profiter de cette  fonctionnalité, vous devez créer un script dans votre document HTML avec un type de module. Voici un exemple :

```html
<script type="module" src="filename.js"></script>
```

Un script qui utilise ce type `module` peut désormais utiliser les  fonctionnalités `import` et `export` que vous découvrirez dans les prochains défis.

------

Ajoutez un script au document HTML de type `module` et donnez-lui le fichier source `index.js`.

> Vous devez créer une balise `script`.
> Votre balise `script` doit être de type `module`.
> Votre balise `script` doit avoir comme `src` `index.js`.

```html
<html>
  <body>
    <!-- Changer uniquement le code en dessous de cette ligne -->
    <!-- Ne changez le code qu'au-dessus de cette ligne -->
  </body>
</html>
```

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

-----



## 23. Utiliser `export` pour partager un bloc de code

[Learn ES6: Use export to Share a Code Block | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-export-to-share-a-code-block)

Imaginez un fichier appelé `math_functions.js` qui contient plusieurs  fonctions liées aux opérations mathématiques. L'un d'eux est stocké dans une variable, `add`, qui prend deux nombres et renvoie leur somme. Vous  souhaitez utiliser cette fonction dans plusieurs fichiers JavaScript  différents. Pour le partager avec ces autres fichiers, vous devez  d'abord l'exporter.

```js
export const add = (x, y) => {
  return x + y;
}
```

Ce qui précède est un moyen courant d'exporter une seule fonction, mais vous pouvez réaliser la même chose comme ceci :

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

Lorsque vous exportez une variable ou une fonction, vous pouvez l'importer dans un autre fichier et l'utiliser sans avoir à réécrire le code. Vous  pouvez exporter plusieurs éléments en répétant le premier exemple pour  chaque élément que vous souhaitez exporter, ou en les plaçant tous dans  l'instruction d'exportation du deuxième exemple, comme ceci :

```js
export { add, subtract };
```

-----

Il existe deux fonctions liées aux chaînes dans l'éditeur. Exportez les deux en utilisant la méthode de votre choix.

> Vous devez correctement exporter `uppercaseString`.
> Vous devez correctement exporter `lowercaseString`.

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}
const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
};
const lowercaseString = (string) => {
  return string.toLowerCase()
};
export { lowercaseString };
```

-----



## 24. Réutiliser le code JavaScript à l'aide de `import`

[Learn ES6: Reuse JavaScript Code Using import | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/reuse-javascript-code-using-import)

`import` vous permet de choisir les parties d'un fichier ou d'un  module à charger. Dans la leçon précédente, les exemples exportés  `add` à partir du fichier `math_functions.js`. Voici comment vous  pouvez l'importer pour l'utiliser dans un autre fichier :

```js
import { add } from './math_functions.js';
```

Ici, `import` trouvera `add` dans `math_functions.js`, importe uniquement cette  fonction pour que vous puissiez l'utiliser et ignorez le reste. Le `./`  indique à l'importation de rechercher le fichier `math_functions.js` dans  le même dossier que le fichier actuel. Le chemin de fichier relatif (`./`) et l'extension de fichier (`.js`) sont requis lors de l'utilisation de  l'importation de cette manière.
Vous pouvez importer plus d'un élément du fichier en les ajoutant dans l'instruction `import` comme ceci :

```js
import { add, subtract } from './math_functions.js';
```

-----

Ajoutez l'instruction `import` appropriée qui permettra au fichier actuel d'utiliser les fonctions `uppercaseString` et `lowercaseString` que vous  avez exportées dans la leçon précédente. Ces fonctions se trouvent dans  un fichier appelé `string_functions.js`, qui se trouve dans le même  répertoire que le fichier actuel.

> Vous devez correctement importer `uppercaseString`.
> Vous devez correctement importer `lowercaseString`.

```js
// Ne changez le code qu'au-dessus de cette ligne
uppercaseString("hello");
lowercaseString("WORLD!");
```

```js
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");
```

-----



## 25. Utilisez * pour tout importer à partir d'un fichier

[Learn ES6: Use * to Import Everything from a File | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use--to-import-everything-from-a-file)

Supposons que vous ayez un fichier et que vous souhaitiez importer tout son contenu dans le fichier courant. Cela peut être fait avec la syntaxe `import * as`. Voici un exemple où le contenu d'un fichier nommé `math_functions.js` est importé dans un fichier du même répertoire :

```js
import * as myMathModule from "./math_functions.js";
```

L'instruction d'importation ci-dessus créera un objet appelé `myMathModule`. Ceci est  juste un nom de variable, vous pouvez le nommer n'importe comment. L'objet  contiendra toutes les exportations de `math_functions.js`, afin que vous  puissiez accéder aux fonctions comme vous le feriez pour toute autre  propriété d'objet. Voici comment utiliser les fonctions `add` et `subtract` qui ont été importées :

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

-----

Le code de ce fichier requiert le contenu du fichier : `string_functions.js`, qui se trouve dans le même répertoire que le fichier actuel. Utilisez la syntaxe `import * as` pour tout importer du fichier dans un objet appelé `stringFunctions`.

> Votre code doit utiliser correctement la syntaxe `import * as`.

```js
// Ne changez le code qu'au-dessus de cette ligne
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

```js
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

------



## 26. Créer une exportation de secours avec `export default`

[Learn ES6: Create an Export Fallback with export default | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-an-export-fallback-with-export-default)

Dans la leçon sur `export`, vous avez découvert la syntaxe appelée *named export* (exportation nommée). Cela vous a permis de rendre plusieurs fonctions et variables disponibles pour une utilisation dans d'autres fichiers.
Il existe une autre syntaxe `export` que vous devez connaître, connue sous le nom *export default* (exportation par défaut). Vous utiliserez généralement  cette syntaxe si une seule valeur est exportée à partir d'un fichier. Il est également utilisé pour créer une valeur de secours pour un fichier  ou un module.
Vous trouverez ci-dessous des exemples d'utilisation de `export default` :

```js
// fonction nommée
export default function add(x, y) {
  return x + y;
}
// fonction anonyme
export default function(x, y) {
  return x + y;
}
```

Puisque `export default` est utilisée pour déclarer une  valeur de secours pour un module ou un fichier, vous ne pouvez avoir  qu'une seule valeur comme exportation par défaut dans chaque module ou  fichier. De plus, vous ne pouvez pas utiliser `export default`  avec `var`, `let` ou `const`.

-----

La fonction suivante doit être la valeur de secours du module. Veuillez ajouter le code nécessaire pour ce faire.

> Votre code doit utiliser `export` de secours.

```js
function subtract(x, y) {
  return x - y;
}
```

```js
export default function subtract(x, y) {
  return x - y;
}
```

------



## 27. Importer un `export default`

[Learn ES6: Import a Default Export | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/import-a-default-export)

Dans le dernier défi, vous avez découvert `export default` et ses utilisations. Pour importer un `export default`, vous devez utiliser une syntaxe `import` différente. Dans l'exemple suivant, `add` est l'exportation par défaut du fichier `math_functions.js`. Voici comment l'importer :

```js
import add from "./math_functions.js";
```

La syntaxe diffère à un endroit clé. La valeur importée, `add`, n'est pas  entourée d'accolades (`{}`). Ici, `add` est simplement un nom de variable  pour quel que soit l'export par défaut du fichier `math_functions.js`.  Vous pouvez utiliser n'importe quel nom ici lors de l'importation d'une valeur par défaut.

-----

Dans le code suivant, importez l'exportation par défaut à partir du fichier `math_functions.js`, qui se trouve dans le  même répertoire que ce fichier. Donnez à l'importation le nom `subtract`.

> Vous devez correctement importer `subtract` de `math_functions.js`.

```js
// Ne changez le code qu'au-dessus de cette ligne
subtract(7,4);
```

```js
import subtract from "./math_functions.js";
subtract(7,4);
```

-----



## 28. Créer une promesse JavaScript

[Learn ES6: Create a JavaScript Promise | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-javascript-promise)

Une promesse en JavaScript est exactement ce à quoi elle ressemble -  vous l'utilisez pour promettre de faire quelque chose, généralement de manière asynchrone. Lorsque la tâche est terminée, soit vous remplissez votre promesse, soit vous ne le faites pas. `Promise` est une fonction constructeur, vous devez donc utiliser le mot clé `new` pour en créer  un. Il prend une fonction, comme argument, avec deux paramètres -  `resolve` et `reject`. Ce sont des méthodes utilisées pour déterminer le  résultat de la promesse. La syntaxe ressemble à ceci :

```js
const myPromise = new Promise((resolve, reject) => {
	
});
```

-----

Créez une nouvelle promesse appelée `makeServerRequest`. Transmettez une fonction avec des paramètres `resolve` et `reject` au constructeur.

> Vous devez affecter une promesse à une variable déclarée nommée `makeServerRequest`.
> Votre promesse devrait recevoir une fonction avec `resolve` et `reject` comme paramètres.

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```

------



## 29. Accomplissez une promesse avec `resolve` et `reject`

[Learn ES6: Complete a Promise with resolve and reject | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/complete-a-promise-with-resolve-and-reject)

Une promesse comporte trois états : `pending`, `fulfilled`, et `rejected` (en attente, honorée et rejetée). La  promesse que vous avez créée dans le dernier défi est à jamais bloquée dans l'état `pending` parce que vous n'avez pas ajouté de moyen de  remplir la promesse. Les paramètres `resolve` et `reject` donnés à  l'argument de promesse sont utilisés pour le faire. `resolve` est  utilisé lorsque vous souhaitez que votre promesse aboutisse, et `reject` est utilisé lorsque vous souhaitez qu'elle échoue. Ce sont des  méthodes qui prennent un argument, comme indiqué ci-dessous.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("La promesse a été remplie");
  } else {
    reject("La promesse a été rejetée");
  }
});
```

L'exemple ci-dessus utilise des chaînes pour l'argument de ces fonctions, mais  cela peut vraiment être n'importe quoi. Souvent, il peut s'agir d'un objet dont vous utiliseriez des données, pour les mettre sur votre site  Web ou ailleurs.

------

Faites en sorte que la promesse gère le succès et l'échec. Si `responseFromServer` est `true`, appelez la méthode `resolve` pour terminer la promesse avec succès. Passez `resolve` une  chaîne avec la valeur `Nous avons obtenu les données`. Si  `responseFromServer` est `false`, utilisez la méthode `reject` à la place et transmettez-lui la chaîne : `Données non reçues`.

> `resolve` doit être appelé avec la chaîne attendue lorsque la condition `if` est `true`.
> `reject` doit être appelé avec la chaîne attendue lorsque la condition `if` est `false`.

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer représente une réponse d'un serveur
  let responseFromServer;    
  if(responseFromServer) {
    // Changer cette ligne
  } else {  
    // Changer cette ligne
  }
});
```

```js
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
   	reject("Data not received");
  };
});
```

-----



## 30. Gérez une promesse tenue avec `then`

[Learn ES6: Handle a Fulfilled Promise with then | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-fulfilled-promise-with-then)

Les promesses sont plus utiles lorsque vous avez un processus qui prend une durée inconnu dans votre code (c'est-à-dire quelque chose  d'asynchrone), souvent une requête du serveur. Lorsque vous faites une  demande de serveur, cela prend un certain temps, et une fois qu'elle est terminée, vous voulez généralement faire quelque chose avec la réponse  du serveur. Ceci peut être réalisé en utilisant la méthode `then`. La méthode `then` est exécutée immédiatement après que votre promesse est  remplie avec `resolve`. Voici un exemple :

```js
myPromise.then(result => {
  // faire quelque chose avec le résultat.
});
```

`result` provient de l'argument donné à la méthode `resolve`.

-----

Ajoutez la méthode `then` à votre promesse. Utilisez `result` comme paramètre de sa fonction de rappel et consignez `resolve` dans la console.

> Vous devez appeler la méthode `then` sur la promesse.
> Votre méthode `then` doit avoir une fonction de rappel avec `result` comme paramètre.
> Vous devez enregistrer `result` sur la console.

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer est défini sur true pour représenter une réponse réussie d'un serveur
  let responseFromServer = true;    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```

```js
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});
```

-----



## 31. Gérer une promesse rejetée avec `catch`

[Learn ES6: Handle a Rejected Promise with catch | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-rejected-promise-with-catch)

`catch` est la méthode utilisée lorsque votre promesse a été rejetée. Il  est exécuté immédiatement après l'appel de la méthode `reject` d'une promesse. Voici la syntaxe :

```js
myPromise.catch(error => {
  // faire quelque chose avec l'erreur.
});
```

`error` est l'argument transmis à la méthode `reject`.
**Remarque :** les méthodes `then` et `catch` peuvent être chaînées à la déclaration de promesse si vous le souhaitez.

-----

Ajoutez la méthode `catch` à votre promesse. Utilisez `error` comme paramètre de sa fonction de rappel et enregistrez `error` dans la console.

> Vous devez appeler la méthode `catch` sur la promesse.
> Votre méthode `catch` doit avoir une fonction de rappel avec `error` comme paramètre.
> Vous devez enregistrer `error` sur la console.

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer est défini sur false pour représenter une réponse infructueuse d'un serveur
  let responseFromServer = false;    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});
```

```js
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});
```

