---
id: freeCodeCamp-Basic_Data_Structures-fr
title: Structures de données de base
---



## Introduction aux défis de la structure de données de base

[Basic Data Structures | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/)

Les  données peuvent être stockées et accessibles de différentes manières, à  la fois en JavaScript et dans d'autres langues. Cette section vous  apprendra à manipuler les tableaux, ainsi qu'à accéder et à copier les  informations qu'ils contiennent. Il vous apprendra également comment  manipuler et accéder aux données dans les objets JavaScript, en  utilisant à la fois la notation par points et entre crochets. Lorsque  vous avez terminé avec cette section, vous devez comprendre les  propriétés de base et les différences entre les tableaux et les objets,  ainsi que la façon de choisir lesquels utiliser dans un but donné.

-----



## 1. Utiliser un tableau pour stocker une collection de données

[Learn Basic Data Structures: Use an Array to Store a Collection of Data | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-an-array-to-store-a-collection-of-data)

Voici un exemple de l'implémentation la plus simple d'une structure de  données de tableau. Ceci est connu sous le nom de *tableau unidimensionnel*, ce qui signifie qu'il n'a qu'un seul niveau, ou qu'il  n'a pas d'autres tableaux imbriqués à l'intérieur. Notez qu'il contient  des *booléens*, des *chaînes* et des *nombres*, parmi d'autres types de  données JavaScript valides :

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7 // journaux 7
```

Tous les tableaux ont une propriété `length`, qui, comme indiqué ci-dessus,  est très facilement accessible avec la syntaxe `Array.length`. Une  implémentation plus complexe d'un tableau peut être vue ci-dessous.  C'est ce qu'on appelle un *tableau multidimensionnel* ou un tableau qui  contient d'autres tableaux. Notez que ce tableau contient également des *objets* JavaScript, que nous examinerons de très près dans notre  prochaine section, mais pour l'instant, tout ce que vous devez savoir  est que les tableaux sont également capables de stocker des objets  complexes.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

-----

Nous avons défini une variable appelée `yourArray`. Complétez l'instruction en affectant un tableau d'au moins 5 éléments de longueur à la variable  `yourArray`. Votre tableau doit contenir au moins une *chaîne*, un *nombre* et un *booléen*.

> `yourArray` doit être un tableau.
> `yourArray` doit comporter au moins 5 éléments.
> `yourArray` doit contenir au moins un `boolean`.
> `yourArray` doit contenir au moins un `number`.
> `yourArray` doit contenir au moins une `string`.

```js
let yourArray; // Change this line
```

```js
let yourArray = [true, false, 8, "hello!", "good bye"];
```

-----



## 2. Accéder aux contenus d'un tableau à l'aide de la notation entre crochets

[Learn Basic Data Structures: Access an Array's Contents Using Bracket Notation | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-an-arrays-contents-using-bracket-notation)

La caractéristique fondamentale de toute structure de données est, bien  sûr, la possibilité non seulement de stocker des données, mais aussi de  pouvoir les récupérer sur commande. Donc, maintenant que nous avons  appris à créer un tableau, commençons à réfléchir à la façon dont nous  pouvons accéder aux informations de ce tableau.
Lorsque nous définissons un tableau simple comme indiqué ci-dessous, il contient 3 éléments :

```js
let ourArray = ["a", "b", "c"];
```

Dans un tableau, chaque élément du tableau a un *index*. Cet index sert  également de position de cet élément dans le tableau et de la manière  dont vous le référencez. Cependant, il est important de noter que les  tableaux JavaScript sont *indexés à zéro*, ce qui signifie que le premier  élément d'un tableau est en fait à la position **zéro**, pas le premier.  Afin de récupérer un élément d'un tableau, nous pouvons placer un index  entre crochets et l'ajouter à la fin d'un tableau, ou plus communément, à une variable qui référence un objet tableau. C'est ce qu'on appelle la *notation entre crochets*. Par exemple, si nous voulons récupérer le `"a"`  de `ourArray` et l'assigner à une variable, nous pouvons le faire  avec le code suivant :

```js
let ourVariable = ourArray[0];
// ourVariable est égal à "a"
```

En plus d'accéder à la valeur associée à un index, vous pouvez également  définir un index sur une valeur en utilisant la même notation :

```js
ourArray[1] = "not b anymore";
// ourArray est maintenant égal à ["a", "not b anymore", "c"];
```

En utilisant la notation entre crochets, nous avons maintenant réinitialisé l'élément à l'index 1 de `"b"` à `"nor b anymore"`.

-----

Afin de relever ce défi, définissez la 2ème position (index `1`) de `myArray` sur tout ce que vous voulez, à part `"b"`.

> `myArray[0]` doit être égal à `"a"`
> `myArray[1]` ne doit pas être égal à `"b"`
> `myArray[2]` doit être égal à `"c"`
> `myArray[3]` doit être égal à `"d"`

```js
let myArray = ["a", "b", "c", "d"];
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
console.log(myArray); // [ 'a', 'b', 'c', 'd' ]
```

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "What?"
console.log(myArray); // [ 'a', 'What?', 'c', 'd' ]
```

-----



## 3. Ajouter des éléments à un tableau avec `push()` et `unshift()`

[Learn Basic Data Structures: Add Items to an Array with push() and unshift() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-to-an-array-with-push-and-unshift)

La longueur d'un tableau, comme les types de données qu'il peut  contenir, n'est pas fixe. Les tableaux peuvent être définis avec une  longueur de n'importe quel nombre d'éléments, et des éléments peuvent  être ajoutés ou supprimés au fil du temps ; en d'autres termes, les  tableaux sont *mutables*. Dans ce défi, nous examinerons deux méthodes  avec lesquelles nous pouvons modifier un tableau par programmation :  `Array.push()` et `Array.unshift()`.
Les deux méthodes prennent un  ou plusieurs éléments comme paramètres et ajoutent ces éléments au  tableau sur lequel la méthode est appelée ; la méthode `push()` ajoute des éléments à la fin d'un tableau et `unshift()` ajoute des éléments au  début. Considérer ce qui suit :

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');
// est maintenant égal à ['XIX', 'XX', 'XXI', 'XXII']
romanNumerals.push(twentyThree);
// est maintenant égal à ['XIX', 'XX', 'XXI', 'XXII', 'XXIII'] Notez que nous pouvons également passer des variables, ce qui nous permet encore plus de  flexibilité pour modifier dynamiquement les données de notre tableau.
```

-----

Nous avons défini une fonction, `mixedNumbers`, à laquelle nous transmettons  un tableau en argument. Modifiez la fonction en utilisant `push()` et  `unshift()` pour ajouter `'I', 2, 'three'` au début du tableau et `7, 'VIII', 9` à la fin afin que le tableau retourné contienne des  représentations des nombres 1-9 dans l'ordre.

> `mixedNumbers(["IV", 5, "six"])` doit maintenant renvoyer `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`
> La fonction `mixedNumbers` doit utiliser la méthode `push()`
> La fonction `mixedNumbers` doit utiliser la méthode `unshift()`

```js
function mixedNumbers(arr) {
  // Only change code below this line
  // Only change code above this line
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six'])); // [ 'IV', 5, 'six' ]
```

```js
function mixedNumbers(arr) {
  arr.push(7, "VIII", 9);
  arr.unshift("I", 2, "three");
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six'])); // [ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]
```

------



## 4. Supprimer des éléments d'un tableau avec `pop()` et `shift()`

[Learn Basic Data Structures: Remove Items from an Array with pop() and shift() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-from-an-array-with-pop-and-shift)

Les deux `push()` et `unshift()` ont des méthodes correspondantes qui sont presque des opposés fonctionnels : `pop()` et `shift()`. Comme vous l'avez peut-être deviné, au lieu d'ajouter, `pop()` *supprime* un élément de la  fin d'un tableau, tandis que `shift()` supprime un élément du début. La  principale différence entre `pop()` et `shift()` et leurs cousins `push()` et `unshift()`, est qu'aucune méthode ne prend de paramètres, et  chacune ne permet qu'un tableau à être modifié par un seul élément à la  fois.
Nous allons jeter un coup d’œil :

```js
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
// est maintenant égal à ['whats up?', 'hello']
greetings.shift();
// est maintenant égal à ['hello']
```

Nous pouvons également renvoyer la valeur de l'élément supprimé avec l'une ou l'autre des méthodes comme celle-ci :

```js
let popped = greetings.pop();
// renvoie 'hello'
// greetings est maintenant égal à []
```

-----

Nous avons défini une fonction, `popShift`, qui prend un tableau comme  argument et renvoie un nouveau tableau. Modifiez la fonction, en  utilisant `pop()` et `shift()`, pour supprimer les premier et dernier  éléments du tableau d'arguments, et affectez les éléments supprimés à  leurs variables correspondantes, de sorte que le tableau renvoyé  contienne leurs valeurs.

> `popShift(["challenge", "is", "not", "complete"])` devrait retourner `["challenge", "complete"]`
> La fonction `popShift` doit utiliser la méthode `pop()`
> La fonction `popShift` doit utiliser la méthode `shift()`

```js
function popShift(arr) {
  let popped; // Changer cette ligne
  let shifted; // Changer cette ligne
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete'])); // [ undefined, undefined ]
```

```js
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete'])); // [ 'challenge', 'complete' ]
```

------



## 5. Supprimer des éléments à l'aide de `splice()`

[Learn Basic Data Structures: Remove Items Using splice() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-using-splice)

Ok, nous avons donc appris comment supprimer des éléments du début et de la fin des tableaux en utilisant `shift()` et `pop()`, mais que faire si  nous voulons supprimer un élément quelque part au milieu ? Ou supprimer plus d'un élément à la fois ? Eh bien, c'est là que `splice()` entre en  jeu. `splice()` nous permet de faire exactement cela : **supprimer n'importe quel nombre d'éléments consécutifs** de n'importe où dans un tableau.
`splice()` peut prendre jusqu'à 3 paramètres, mais pour l'instant, nous allons  nous concentrer uniquement sur le premier 2. Les deux premiers  paramètres de `splice()` sont des entiers qui représentent des index, ou  des positions, du tableau que `splice()` est appelé. Et rappelez-vous que les tableaux sont *indexés à zéro*, donc pour indiquer le premier élément d'un tableau, nous utiliserions `0`. Le premier paramètre de `splice()`  représente l'index du tableau à partir duquel commencer à supprimer des  éléments, tandis que le deuxième paramètre indique le nombre d'éléments à supprimer. Par exemple :

```js
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
// supprime 2 éléments commençant par le 3ème élément
// tableau maintenant égal à ['today', 'was', 'great']
```

`splice()` modifie non seulement le tableau sur lequel il est appelé, mais il  renvoie également un nouveau tableau contenant la valeur des éléments  supprimés :

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
// newArray est égal à ['really', 'happy']
```

-----

Nous avons initialisé un tableau `arr`. Utilisez `splice()` pour supprimer des  éléments de `arr`, afin qu'il ne contienne que des éléments dont la somme  est égale à `10`.

> Vous ne devez pas changer la ligne d'origine de `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`.
> `arr` ne doit contenir que des éléments dont la somme est égale à `10`.
> Votre code doit utiliser la méthode `splice()` sur `arr`.
> L'épissure (splice) ne doit supprimer que des éléments de `arr` et n'ajouter aucun élément supplémentaire à `arr`.

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
console.log(arr); // [ 2, 4, 5, 1, 7, 5, 2, 1 ]
```

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr); // [ 2, 5, 2, 1 ]
```

-----



## 6. Ajouter des éléments à l'aide de `splice()`

[Learn Basic Data Structures: Add Items Using splice() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-using-splice)

Rappelez-vous dans le dernier défi que nous avons mentionné que `splice()` peut prendre jusqu'à trois paramètres ? Eh bien, vous pouvez utiliser  le troisième paramètre, composé d'un ou plusieurs élément(s), à ajouter au tableau. Cela peut être incroyablement utile pour remplacer  rapidement un élément ou un ensemble d'éléments par un autre.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
// la deuxième entrée de 12 est supprimée, et nous ajoutons 13 et 14 au même index
console.log(numbers);
// renvoie [10, 11, 12, 13, 14, 15]
```

Ici, nous commençons par un tableau de nombres. Nous passons ensuite ce qui  suit à `splice()`. L'index auquel commencer la suppression des éléments  (3), le nombre d'éléments à supprimer (1) et les éléments (13, 14) à  insérer à ce même index. Notez qu'il peut y avoir n'importe quel nombre  d'éléments (séparés par des virgules) après `amountToDelete`, chacun étant inséré.

-----

Nous avons défini une fonction, `htmlColorNames`, qui  prend un tableau de couleurs HTML comme argument. Modifiez la fonction  en utilisant `splice()` pour supprimer les deux premiers éléments du  tableau et ajoutez `'DarkSalmon'` et `'BlanchedAlmond'` à leurs emplacements respectifs.

> `htmlColorNames` doit renvoyer `['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']`
> La fonction `htmlColorNames` doit utiliser la méthode `splice()`
> Vous ne devez pas utiliser `shift()` ou `unshift()`.
> Vous ne devez pas utiliser la notation entre crochets de tableau.

```js
function htmlColorNames(arr) {
  // Changer uniquement le code en dessous de cette ligne
  // Changer uniquement le code au-dessus de cette ligne
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
/*
[ 'DarkGoldenRod',
  'WhiteSmoke',
  'LavenderBlush',
  'PaleTurquoise',
  'FireBrick' ]
*/
```

```js
function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
/*
[ 'DarkSalmon',
  'BlanchedAlmond',
  'LavenderBlush',
  'PaleTurquoise',
  'FireBrick' ]
*/
```

-----



## 7. Copier les éléments du tableau à l’aide de `slice()`

[Learn Basic Data Structures: Copy Array Items Using slice() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

La méthode suivante que nous aborderons est `slice()`. Plutôt que de  modifier un tableau, `slice()` copie ou extrait un nombre donné  d'éléments dans un nouveau tableau, laissant le tableau sur lequel il  est appelé intact. `slice()` ne prend que 2 paramètres - le premier est  l'index auquel commencer l'extraction, et le second est l'index auquel  arrêter l'extraction (l'extraction se produira jusqu'à, mais sans  inclure l'élément à cet index). Considérez ceci :

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather est égal à ['snow', 'sleet'];
// weatherConditions est toujours égal à ['rain', 'snow', 'sleet', 'hail', 'clear']
```

En effet, nous avons créé un nouveau tableau en extrayant des éléments d'un tableau existant.

-----

Nous avons défini une fonction, `forecast`,  qui prend un tableau comme  argument. Modifiez la fonction à l'aide de `slice()` pour extraire les  informations du tableau d'arguments et renvoyer un nouveau tableau  contenant les éléments `'warm'` et `'sunny'`.

> `forecast` devraient renvoyer `["warm", "sunny"]`
> La fonction `forecast` doit utiliser la méthode `slice()`

```js
function forecast(arr) {
  // Changer uniquement le code en dessous de cette ligne
  return arr;
}
// Changer uniquement le code au-dessus de cette ligne
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
// [ 'cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms' ]
```

```js
function forecast(arr) {
  return arr.slice(2, 4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
// [ 'warm', 'sunny' ]
```

------



## 8. Copier un tableau avec l'opérateur Spread `[...]`

[Learn Basic Data Structures: Copy an Array with the Spread Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator)

Alors que `slice()` nous permet d'être sélectifs sur les éléments d'un  tableau à copier, parmi plusieurs autres tâches utiles, le nouvel *opérateur de propagation* d'ES6 nous permet de copier facilement tous les éléments d'un tableau, dans l'ordre, avec une syntaxe simple et  hautement lisible. La syntaxe de diffusion ressemble simplement à ceci : `...`
En pratique, nous pouvons utiliser l'opérateur spread pour copier un tableau comme ceci :

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray est égal à [true, true, undefined, false, null]
// thisArray reste inchangé et thatArray contient les mêmes éléments que thisArray
```

-----

Nous avons défini une fonction, `copyMachine` qui prend `arr` (un tableau) et  `num` (un nombre) comme arguments. La fonction est censée renvoyer un  nouveau tableau composé de `num` de copies de `arr`. Nous avons fait  l'essentiel du travail pour vous, mais cela ne fonctionne pas encore  tout à fait correctement. Modifiez la fonction en utilisant la syntaxe spread pour qu'elle fonctionne correctement (indice : une autre  méthode que nous avons déjà couverte pourrait être utile ici !).

> `copyMachine([true, false, true], 2)` doit renvoyer `[[true, false, true], [true, false, true]]`
> `copyMachine([1, 2, 3], 5)` doit renvoyer `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`
> `copyMachine([true, true, null], 1)` doit renvoyer `[[true, true, null]]`
> `copyMachine(["it works"], 3)` devrait retourner `[["it works"], ["it works"], ["it works"]]`
> La fonction `copyMachine` doit utiliser le `spread operator` avec le tableau `arr`

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
  	// Changer uniquement le code en dessous de cette ligne
  	// Changer uniquement le code au-dessus de cette ligne
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2)); // []
```

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
  	newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2)); // [[true, false, true], [true, false, true]]
console.log(copyMachine([1, 2, 3], 5)); // [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
console.log(copyMachine([true, true, null], 1)); // [[true, true, null]]
console.log(copyMachine(["it works"], 3)); // [['it works'], ['it works'], ['it works']]
```

------



## 9. Combiner des tableaux avec l'opérateur de propagation (spread) (`[...]`)

[Learn Basic Data Structures: Combine Arrays with the Spread Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

Un autre énorme avantage de l'opérateur de propagation (*spread*) est la  possibilité de combiner des tableaux ou d'insérer tous les éléments d'un tableau dans un autre, à n'importe quel index. Avec des syntaxes plus  traditionnelles, nous pouvons concaténer des tableaux, mais cela ne nous permet de combiner des tableaux qu'à la fin de l'un et au début d'un  autre. La syntaxe de diffusion rend l'opération suivante extrêmement  simple :

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray équivaut désormais à ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```

En utilisant la syntaxe de propagation, nous venons de réaliser une  opération qui aurait été plus complexe et plus verbeuse si nous avions  utilisé les méthodes traditionnelles.

-----

Nous avons défini une  fonction `spreadOut` qui renvoie la variable `sentence`. Modifiez la fonction  en utilisant l'opérateur *spread* pour qu'elle renvoie le tableau  `['learning', 'to', 'code', 'is', 'fun']`.

> `spreadOut` doit renvoyer `['learning', 'to', 'code', 'is', 'fun']`
> La fonction `spreadOut` doit utiliser la syntaxe de propagation

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}
console.log(spreadOut()); // undefined
```

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
console.log(spreadOut()); // [ 'learning', 'to', 'code', 'is', 'fun' ]
```

-----



## 10. Vérifier la présence d'un élément avec `indexOf()`

[Learn Basic Data Structures: Check For The Presence of an Element With indexOf() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof)

Étant donné que les tableaux peuvent être modifiés ou *mutés* à tout moment, il n'y a aucune garantie sur l'emplacement d'un élément de données  particulier sur un tableau donné, ou si cet élément existe encore.  Heureusement, JavaScript nous fournit une autre méthode intégrée, `indexOf()`, qui nous permet de vérifier rapidement et facilement la  présence d'un élément sur un tableau. `indexOf()` prend un élément comme  paramètre, et lorsqu'il est appelé, il renvoie la position, ou l'index,  de cet élément, ou `-1` si l'élément n'existe pas sur le tableau.
Par exemple :

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf ('dates'); // renvoie -1
fruits.indexOf ('oranges'); // renvoie 2
fruits.indexOf ('pears'); // retourne 1, le premier index auquel l'élément existe
```

------

`indexOf()` peut être incroyablement utile pour vérifier rapidement la présence  d'un élément sur un tableau. Nous avons défini une fonction, `quickCheck`, qui prend un tableau et un élément comme arguments. Modifiez la  fonction en utilisant `indexOf()` pour qu'elle renvoie `true` si l'élément  passé existe sur le tableau et `false` dans le cas contraire.

> La fonction `quickCheck` doit renvoyer un booléen (`true` or `false`), pas une chaîne (`"true"` or `"false"`)
> `quickCheck(["squash", "onions", "shallots"], "mushrooms")` devrait renvoyer `false`
> `quickCheck(["onions", "squash", "shallots"], "onions")` devrait renvoyer `true`
> `quickCheck([3, 5, 9, 125, 45, 2], 125)` doit renvoyer `true`
> `quickCheck([true, false, false], undefined)` doit renvoyer `false`
> La fonction `quickCheck` doit utiliser la méthode `indexOf()`

```js
function quickCheck(arr, elem) {
  // Only change code below this line
  // Only change code above this line
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); // undefined
```

```js
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) != -1) {
    return true;
  } else {
    return false;
  };
};
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); // false
console.log(quickCheck(["onions", "squash", "shallots"], "onions")); // true
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125)); // true
console.log(quickCheck([true, false, false], undefined)); // false
```

------



## 11. Itérer à travers tous les éléments d'un tableau à l'aide de boucles `for`

[Learn Basic Data Structures: Iterate Through All an Array's Items Using For Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops)

Parfois, lorsque vous travaillez avec des tableaux, il est très pratique de  pouvoir parcourir chaque élément pour trouver un ou plusieurs éléments  dont nous pourrions avoir besoin, ou de manipuler un tableau en fonction des éléments de données répondant à un certain ensemble de critères.  JavaScript propose plusieurs méthodes intégrées qui itèrent chacune sur  des tableaux de manières légèrement différentes pour obtenir des  résultats différents (tels que `every()`, `forEach()`, `map()`, etc.), mais la technique qui est la plus flexible et nous offre la meilleure la  quantité de contrôle est une simple boucle `for`.
Considérer ce qui suit :

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// renvoie [12, 14, 80]
```

En utilisant une boucle `for`, cette fonction parcourt et accède à chaque  élément du tableau, et le soumet à un test simple que nous avons créé.  De cette façon, nous avons déterminé facilement et par programme les  éléments de données supérieurs à 10 et renvoyé un nouveau tableau  contenant ces éléments.

-----

Nous avons défini une fonction, `filteredArray`, qui prend `arr`, un tableau imbriqué et `elem` comme  arguments, et renvoie un nouveau tableau. `elem` représente un élément qui peut ou non être présent sur un ou plusieurs des tableaux imbriqués  dans `arr`. Modifiez la fonction, en utilisant une boucle `for`, pour  renvoyer une version filtrée du tableau passé de sorte que tout tableau imbriqué dans `arr` contenant `elem` ait été supprimé.

> `filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` doit renvoyer `[ [10, 8, 3], [14, 6, 23] ]`
> `filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)` doit renvoyer `[ ["flutes", 4] ]`
> `filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")` doit renvoyer `[ ["amy", "beth", "sam"] ]`
> `filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` doit renvoyer `[ ]`
> La fonction `filteredArray` doit utiliser une boucle `for`

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  // Only change code above this line
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // []
```

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)); // [[10, 8, 3], [14, 6, 23]]
console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)); // [['flutes', 4]]
console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")); // [['amy', 'beth', 'sam']]
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // []
```

-----



## 12. Créez des tableaux multidimensionnels complexes

[Learn Basic Data Structures: Create complex multi-dimensional arrays | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/create-complex-multi-dimensional-arrays)

Impressionnant ! Vous venez d'apprendre une tonne sur les tableaux ! Cela a été un aperçu de niveau assez élevé, et il y a beaucoup plus à  apprendre sur le travail avec des tableaux, dont vous verrez une grande  partie dans les sections suivantes. Mais avant de passer à l'examen des  objets, jetons un autre coup d'œil et voyons comment les tableaux  peuvent devenir un peu plus complexes que ce que nous avons vu dans les  défis précédents.
L'une des fonctionnalités les plus puissantes  lorsque l'on considère les tableaux comme des structures de données est  que les tableaux peuvent contenir, voire être entièrement constitués  d'autres tableaux. Nous avons vu des tableaux qui contiennent des  tableaux dans les défis précédents, mais des tableaux assez simples.  Cependant, les tableaux peuvent contenir une profondeur infinie de  tableaux qui peuvent contenir d'autres tableaux, chacun avec leurs  propres niveaux de profondeur arbitraires, et ainsi de suite. De cette  manière, un tableau peut très rapidement devenir une structure de  données très complexe, connue sous le nom de tableau *multidimensionnel*  ou imbriqué. Prenons l'exemple suivant :

```js
let nestedArray = [// top, ou premier niveau - le tableau le plus extérieur
  ['deep'], // un tableau dans un tableau, 2 niveaux de profondeur
  [
    ['deeper'], ['deeper'] // 2 tableaux imbriqués sur 3 niveaux de profondeur
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 tableaux imbriqués sur 4 niveaux de profondeur
    ],
    [
      [
        ['deepest-est?'] // un tableau imbriqué de 5 niveaux de profondeur
      ]
    ]
  ]
];
```

Bien que cet exemple puisse sembler compliqué, ce niveau de complexité n'est pas inconnu, ni même inhabituel, lorsqu'il s'agit de grandes quantités  de données. Cependant, nous pouvons toujours accéder très facilement aux niveaux les plus profonds d'un tableau aussi complexe avec la notation  entre crochets :

```js
console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?
```

Et maintenant que nous savons où se trouve cette donnée, nous pouvons la réinitialiser si nous devons :

```js
nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still
```

-----

Nous avons défini une variable, `myNestedArray`, définie égale à un tableau. Modifiez `myNestedArray`, en utilisant n'importe quelle combinaison de  *chaînes*, de *nombres* et de *booléens* pour les éléments de données, de  sorte qu'il ait exactement cinq niveaux de profondeur (rappelez-vous, le tableau le plus extérieur est le niveau 1). Quelque part au troisième  niveau, incluez la chaîne `'deep'`, au quatrième niveau, incluez la chaîne `'deeper'`, et au cinquième niveau, incluez la chaîne `'deepest'`.

> `myNestedArray` ne doit contenir que des nombres, des booléens et des chaînes comme éléments de données
> `myNestedArray` doit avoir exactement 5 niveaux de profondeur
> `myNestedArray` doit contenir exactement une occurrence de la chaîne `'deep'` sur un tableau imbriqué à 3 niveaux de profondeur
> `myNestedArray` doit contenir exactement une occurrence de la chaîne `'deeper'` sur un tableau imbriqué 4 niveaux de profondeur
> `myNestedArray` doit contenir exactement une occurrence de la chaîne `'deepest'` sur un tableau imbriqué de 5 niveaux de profondeur

```js
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
```

```js
let myNestedArray = [
    [
        ['deep'], [
            ['deeper'], [
                ['deepest'],
                ['unshift', false, 1, 2, 3, 'complex', 'nested'],
                ['loop', 'shift', 6, 7, 1000, 'method'],
                ['concat', false, true, 'spread', 'array'],
                ['mutate', 1327.98, 'splice', 'slice', 'push'],
                ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
            ]
        ]
    ]
];
```

-----



## 13. Ajouter des paires clé-valeur aux objets JavaScript

[Learn Basic Data Structures: Add Key-Value Pairs to JavaScript Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-key-value-pairs-to-javascript-objects)

Dans leur forme la plus élémentaire, les objets ne sont que des  collections de paires *clé-valeur*. En d'autres termes, ce sont des  éléments de données (*valeurs*) mappés à des identificateurs uniques  appelés propriétés (*clés*). Jetez un œil à un exemple :

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

Le code ci-dessus définit un objet de personnage de jeu vidéo Tekken appelé `tekkenCharacter`. Il a trois propriétés, chacune correspondant à  une valeur spécifique. Si vous souhaitez ajouter une propriété  supplémentaire, telle que « origine », vous pouvez le faire en attribuant  `origin` à l'objet :

```js
tekkenCharacter.origin = 'South Korea';
```

Cela utilise la notation par points. Si vous deviez observer l'objet  `tekkenCharacter`, il inclura désormais la propriété `origin`. Hwoarang  avait également des cheveux orange distincts. Vous pouvez ajouter cette  propriété avec la notation entre crochets en faisant :

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

La notation entre crochets est requise si votre propriété contient un  espace ou si vous souhaitez utiliser une variable pour nommer la  propriété. Dans le cas ci-dessus, la propriété est placée entre  guillemets pour la désigner comme une chaîne et sera ajoutée exactement  comme indiqué. Sans guillemets, elle sera évaluée comme une variable et  le nom de la propriété sera quelle que soit la valeur de la variable.  Voici un exemple avec une variable :

```js
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
```

Après avoir ajouté tous les exemples, l'objet ressemblera à ceci :

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

-----

Un objet `foods` a été créé avec trois entrées. En utilisant la syntaxe de  votre choix, ajoutez-y trois autres entrées : `bananas` d'une valeur de `13`, `grapes` d'une valeur de `35` et `strawberries` d'une valeur de `27`.

> `foods` doit être un objet.
> L'objet `foods` doit avoir une clé `"bananas"` d'une valeur de `13`.
> L'objet `foods` doit avoir une clé `"grapes"` d'une valeur de `35`.
> L'objet `foods` doit avoir une clé `"strawberries"` d'une valeur de `27`.
> Les paires clé-valeur doivent être définies en utilisant la notation point ou crochet.

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
console.log(foods); // { apples: 25, oranges: 32, plums: 28 }
```

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
foods.bananas = 13;
foods['grapes'] = 35;
const berries = 'strawberries';
foods[berries] = 27;
console.log(foods); // { apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 }
```

-----



## 14. Modifier un objet imbriqué dans un objet

[Learn Basic Data Structures: Modify an Object Nested Within an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-object-nested-within-an-object)

Jetons maintenant un coup d'œil à un objet légèrement plus complexe. Les propriétés des objets peuvent être imbriquées à une profondeur arbitraire, et leurs valeurs peuvent être n'importe quel type de données pris en charge par JavaScript, y compris des tableaux et même d'autres  objets. Considérer ce qui suit :

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

`nestedObject` a trois propriétés : `id` (la valeur est un nombre), `date` (la valeur est une chaîne) et `data` (la valeur est un objet avec sa structure imbriquée). Si les structures peuvent rapidement devenir complexes,  nous pouvons toujours utiliser les mêmes notations pour accéder aux  informations dont nous avons besoin. Pour affecter la valeur `10` à la  propriété `busy` de l'objet `onlineStatus` imbriqué, nous utilisons la  notation par points pour référencer la propriété :

```js
nestedObject.data.onlineStatus.busy = 10;
```

-----

Ici, nous avons défini un objet `userActivity`, qui comprend un autre objet  imbriqué en son sein. Définissez la valeur de la clé `online` sur `45`.

> `userActivity` doit avoir des propriétés `id`, `date` et `data`.
> `userActivity` doit avoir une clé `data` définie sur un objet avec des clés `totalUsers` et `online`.
> La propriété `online` imbriquée dans la clé de données de `userActivity` doit être définie sur `45`
> La propriété `online` doit être définie à l'aide de la notation par points ou entre crochets.

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
// Only change code below this line
// Only change code above this line
console.log(userActivity);
/*
{ id: 23894201352,
  date: 'January 1, 2017',
  data: { totalUsers: 51, online: 42 } }
*/
```

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;
console.log(userActivity);
/*
{ id: 23894201352,
  date: 'January 1, 2017',
  data: { totalUsers: 51, online: 45 } }
*/
```

-----



## 15. Accéder aux noms de propriétés avec la notation entre crochets

[Learn Basic Data Structures: Access Property Names with Bracket Notation | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-property-names-with-bracket-notation)

Dans le premier défi d'objet, nous avons mentionné l'utilisation de la  notation entre crochets comme moyen d'accéder aux valeurs de propriété  en utilisant l'évaluation d'une variable. Par exemple, imaginez que  notre objet `foods` soit utilisé dans un programme pour une caisse  enregistreuse de supermarché. Nous avons une fonction qui définit le `selectedFood` et nous voulons vérifier notre objet `foods` pour la  présence de cet aliment. Cela pourrait ressembler à :

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

Ce code évaluera la valeur stockée dans la variable `selectedFood` et  retournera la valeur de cette clé dans l'objet `foods`, ou `undefined` si  elle n'est pas présente. La notation entre crochets est très utile car  parfois les propriétés des objets ne sont pas connues avant l'exécution  ou nous devons y accéder de manière plus dynamique.

-----

Nous avons  défini une fonction, `checkInventory`, qui reçoit un élément scanné comme  argument. Renvoyez la valeur actuelle de la clé `scannedItem` dans l'objet `foods`. Vous pouvez supposer que seules les clés valides seront  fournies comme argument à `checkInventory`.

> `checkInventory` doit être une fonction.
> L'objet `foods` ne doit avoir que les paires valeur-clé suivantes :  `apples: 25`, `oranges: 32`, `plums: 28`, `bananas: 13`, `grapes: 35`, `strawberries: 27`.
> `checkInventory("apples")` doit renvoyer `25`.
> `checkInventory("bananas")` doit renvoyer `13`.
> `checkInventory("strawberries")` doit renvoyer `27`.

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  // Changer uniquement le code en dessous de cette ligne
  // Changer uniquement le code au-dessus de cette ligne
}
console.log(checkInventory("apples")); // undefined
```

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples")); // 25
console.log(checkInventory("bananas")); // 13
console.log(checkInventory("strawberries")); // 27
```

-----



## 16. Utilisez le mot-clé `delete` pour supprimer les propriétés de l'objet

[Learn Basic Data Structures: Use the delete Keyword to Remove Object Properties | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-the-delete-keyword-to-remove-object-properties)

Vous savez maintenant ce que sont les objets et leurs caractéristiques et avantages de base. En bref, ce sont des magasins de clés-valeurs qui  offrent un moyen flexible et intuitif de structurer les données ,***et***, offrent un temps de recherche très rapide. Tout au long du reste de ces  défis, nous décrirons plusieurs opérations courantes que vous pouvez  effectuer sur des objets afin que vous puissiez vous familiariser avec  l'application de ces structures de données utiles dans vos programmes.
Dans les défis précédents, nous avons à la fois ajouté et modifié les paires clé-valeur d'un objet. Ici, nous allons voir comment nous pouvons *supprimer* une paire clé-valeur d'un objet.
Revenons une dernière  fois à notre exemple d'objet `foods`. Si nous voulions supprimer la clé `apples`, nous pouvons la supprimer en utilisant le mot-clé `delete` comme  ceci :

```js
delete foods.apples;
```

-----

Utilisez le mot-clé `delete` pour supprimer les clés `oranges`, `plums`, et `strawberries` de l'objet `foods`.

> L'objet `foods` ne doit avoir que trois clés : `apples`, `grapes`, et `bananas`.
> Les clés `oranges`, `plums`, et `strawberries` doivent être supprimées à l'aide de `delete`.

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
console.log(foods); // {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27}
```

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods); // { apples: 25, bananas: 13, grapes: 35 }
```

-----



## 17. Vérifier si un objet a une propriété (`hasOwnProperty()`) - (`in`)

[Learn Basic Data Structures: Check if an Object has a Property | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property)

Nous pouvons maintenant ajouter, modifier et supprimer des clés d'objets. Mais que faire si nous voulions simplement savoir si un objet a une propriété spécifique ? JavaScript nous offre deux façons différentes de le faire. L'un utilise la méthode `hasOwnProperty()` et l'autre utilise le mot-clé `in`. Si nous avons un objet `users` avec une  propriété `Alan`, nous pourrions vérifier sa présence de l'une des  manières suivantes :

```js
users.hasOwnProperty('Alan');
'Alan' in users;
// les deux retournent vrai
```

-----

Nous avons créé un objet, `users`, avec quelques utilisateurs et une fonction `isEveryoneHere`, à laquelle nous passons l'objet `users` en tant  qu'argument. Terminez d'écrire cette fonction pour qu'elle ne renvoie `true` que si l'objet `users` contient les quatre noms, `Alan`, `Jeff`, `Sarah` et `Ryan`, comme clés, et `false` dans le cas contraire.

> L'objet `users` ne doit contenir que les clés `Alan`, `Jeff`, `Sarah` et `Ryan`
> La fonction `isEveryoneHere` doit renvoyer `true` si `Alan`, `Jeff`, `Sarah` et `Ryan` sont des propriétés de l'objet `users`
> La fonction `isEveryoneHere` doit renvoyer `false` si `Alan` n'est pas une propriété de l'objet `users`
> La fonction `isEveryoneHere` doit renvoyer `false` si `Jeff` n'est pas une propriété de l'objet `users`
> La fonction `isEveryoneHere` doit renvoyer `false` si `Sarah` n'est pas une propriété de l'objet `users`
> La fonction `isEveryoneHere` doit renvoyer `false` si `Ryan` n'est pas une propriété de l'objet `users`

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(obj) {
  // Changer uniquement le code en dessous de cette ligne
  // Changer uniquement le code au-dessus de cette ligne
}
console.log(isEveryoneHere(users)); // undefined
```

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(obj) {
  if (
    obj.hasOwnProperty("Alan") &&
    obj.hasOwnProperty("Jeff") &&
    obj.hasOwnProperty("Sarah") &&
    obj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}
console.log(isEveryoneHere(users)); // true
// ou
function isEveryoneHere(obj) {
  if (
    'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users
  ) {
    return true;
  }
  return false;
}
```

------



## 18. Itérer à travers les clés d'un objet avec une instruction `for... in`

[Learn Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement)

Parfois, vous devrez peut-être parcourir toutes les clés d'un objet.  Cela nécessite une syntaxe spécifique en JavaScript appelée instruction *for...in*. Pour notre objet `users`, cela pourrait ressembler à :

```js
for (let user in users) {
  console.log(user);
}
// logs:
Alan
Jeff
Sarah
Ryan
```

Dans cette instruction, nous avons défini une variable `user` et, comme vous pouvez le voir, cette variable a été réinitialisée à chaque  itération sur chacune des clés de l'objet lorsque l'instruction a  parcouru l'objet en boucle, ce qui a entraîné l'impression du nom de  chaque utilisateur sur la console. **REMARQUE :** les objets ne conservent  pas l'ordre des clés stockées comme le font les tableaux ; ainsi, la  position d'une clé sur un objet, ou l'ordre relatif dans lequel elle  apparaît, n'est pas pertinente lors du référencement ou de l'accès à  cette clé.

-----

Nous avons défini une fonction `countOnline` qui accepte un argument (un objet utilisateurs). Utilisez une instruction *for...in* dans cette fonction pour parcourir l'objet `users` passé dans la  fonction et renvoyer le nombre d'utilisateurs dont la propriété `online` est définie sur `true`. Un exemple d'objet utilisateurs qui pourrait être passé à `countOnline` est illustré ci-dessous. Chaque utilisateur aura  une propriété `online` avec une valeur `true` ou `false`.

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

> La fonction `countOnline` doit utiliser une instruction `for in` pour parcourir les clés d'objet de l'objet qui lui est passé.
> La fonction `countOnline` doit renvoyer `1` lorsque l'objet `{Alan: {online:  false}, Jeff: {online: true}, Sarah: {online: false}}` lui est passé
> La fonction `countOnline` doit renvoyer `2` lorsque l'objet `{Alan: {online:  true}, Jeff: {online: false}, Sarah: {online: true}}` lui est passé
> La fonction `countOnline` doit renvoyer `0` lorsque l'objet `{Alan: {online:  false}, Jeff: {online: false}, Sarah: {online: false}}` lui est transmis

```js
function countOnline(usersObj) {
  // Changer uniquement le code en dessous de cette ligne
  // Changer uniquement le code au-dessus de cette ligne
}
```

```js
function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
}
console.log(countOnline({Alan: {online:  false}, Jeff: {online: true}, Sarah: {online: false}})); // 1
console.log(countOnline({Alan: {online:  true}, Jeff: {online: false}, Sarah: {online: true}})); // 2
console.log(countOnline({Alan: {online:  false}, Jeff: {online: false}, Sarah: {online: false}})); // 0
```

-----



## 19. Générer un tableau de toutes les clés d'objet avec `Object.keys()`

[Learn Basic Data Structures: Generate an Array of All Object Keys with Object.keys() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/generate-an-array-of-all-object-keys-with-object-keys)

Nous pouvons également générer un tableau contenant toutes les clés stockées dans un objet en utilisant la méthode `Object.keys()` et en passant un objet comme argument. Cela renverra un tableau avec des  chaînes représentant chaque propriété de l'objet. Encore une fois, il  n'y aura pas d'ordre spécifique pour les entrées du tableau.

-----

Terminez d'écrire la fonction `getArrayOfUsers` afin qu'elle renvoie un tableau  contenant toutes les propriétés de l'objet qu'il reçoit en argument.

> L'objet `users` ne doit contenir que les clés `Alan`, `Jeff`, `Sarah` et `Ryan`
> La fonction `getArrayOfUsers` doit renvoyer un tableau contenant toutes les clés de l'objet `users`

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  // Changer uniquement le code en dessous de cette ligne
  // Changer uniquement le code au-dessus de cette ligne
}
console.log(getArrayOfUsers(users)); // undefined
```

```js
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}
console.log(getArrayOfUsers(users)); // [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
```

-----



## 20. Modifier un tableau stocké dans un objet

[Learn Basic Data Structures: Modify an Array Stored in an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-array-stored-in-an-object)

Vous avez maintenant vu toutes les opérations de base pour les objets  JavaScript. Vous pouvez ajouter, modifier et supprimer des paires clé-valeur, vérifier si des clés existent et parcourir toutes les clés  d'un objet. En continuant à apprendre JavaScript, vous verrez des  applications d'objets encore plus polyvalentes. De plus, les leçons sur  les structures de données situées dans la section Préparation à l'entrevue de codage du programme couvrent également les objets ES6 *Map*  et *Set*, qui sont tous deux similaires aux objets ordinaires mais  fournissent des fonctionnalités supplémentaires. Maintenant que vous  avez appris les bases des tableaux et des objets, vous êtes prêt à  commencer à vous attaquer à des problèmes plus complexes à l'aide de  JavaScript !

-----

Jetez un œil à l'objet que nous avons fourni dans  l'éditeur de code. L'objet `user` contient trois clés. La clé `data` contient cinq clés, dont l'une contient un tableau `friends`. À  partir de là, vous pouvez voir à quel point les objets sont flexibles en tant que structures de données. Nous avons commencé à écrire une  fonction `addFriend`. Terminez de l'écrire pour qu'il prenne un objet `user` et ajoute le nom de l'argument `friend` au tableau stocké dans `user.data.friends` et renvoie ce tableau.

> L'objet `user` doit avoir les clés `name`, `age`, and `data`.
> La fonction `addFriend` doit accepter un objet `user` et une chaîne `friend` comme arguments et ajouter l'ami au tableau `friends` dans l'objet `user`.
> `addFriend(user, "Pete")` doit renvoyer `["Sam", "Kira", "Tomo", "Pete"]`.

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  // Changer uniquement le code en dessous de cette ligne
  // Changer uniquement le code au-dessus de cette ligne
}
console.log(addFriend(user, 'Pete')); // undefined
```

```js
function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return user.data.friends;
}
console.log(addFriend(user, 'Pete')); // [ 'Sam', 'Kira', 'Tomo', 'Pete' ]
```

