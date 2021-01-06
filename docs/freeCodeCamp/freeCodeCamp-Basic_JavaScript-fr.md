---
id: freeCodeCamp-Basic_JavaScript-fr
title: JavaScript de base
---

## Introduction à JavaScript

[Basic JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)

JavaScript est un langage de programmation de haut niveau pris en charge par tous les navigateurs Web modernes. C'est également l'une des  technologies de base du Web, avec le HTML et le CSS que vous avez  peut-être appris auparavant. Cette section couvrira les concepts de base de la programmation JavaScript, qui vont des variables et de  l'arithmétique aux objets et aux boucles.

-----

## [...]

-----



## 4. Affectation de la valeur d'une variable à une autre

[Learn Basic JavaScript: Assigning the Value of One Variable to Another | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assigning-the-value-of-one-variable-to-another)

Une fois qu'une valeur est affectée à une variable à l'aide de l'opérateur *d'affectation*, vous pouvez affecter la valeur de cette variable à une autre variable à l'aide de l'opérateur *d'affectation*.

```js
var myVar;
myVar = 5;
var myNum;
myNum = maVar;
```

Ce qui précède déclare une variable `myVar` sans valeur, puis lui attribue la valeur `5`. Ensuite, une variable nommée `myNum` est déclarée sans valeur. Ensuite, le contenu de `myVar` (qui vaut `5`) est affecté à la  variable `myNum`. Désormais, `myNum` a également la valeur `5`.

-----

Affectez le contenu de `a` à la variable `b`.

> Vous ne devez pas modifier le code au-dessus du commentaire spécifié.
> `b` doit avoir une valeur de 7.
> `a` doit être affecté à `b` avec `=`.

```js
// Setup
var a;
a = 7;
var b;
// Changer uniquement le code en dessous de cette ligne
b = a;
console.log(b); // 7
```

-----

## [...]

-----



## 83. Accès aux propriétés d'objet avec des variables

[Learn Basic JavaScript: Accessing Object Properties with Variables | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables)

Une autre utilisation de la notation entre crochets sur les objets  consiste à accéder à une propriété qui est stockée en tant que valeur  d'une variable. Cela peut être très utile pour parcourir les propriétés  d'un objet ou pour accéder à une table de recherche.
Voici un exemple d'utilisation d'une variable pour accéder à une propriété :

```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```

Vous pouvez également utiliser ce concept lorsque le nom de la propriété est collecté dynamiquement pendant l'exécution du programme, comme  suit :

```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
```

Notez que nous n'utilisons pas de guillemets autour du nom de la  variable lors de son utilisation pour accéder à la propriété, car nous  utilisons la *valeur* de la variable, pas le *nom*.

------

Utilisez la variable `playerNumber` pour rechercher le joueur `16` dans  `testObj` en utilisant la notation entre crochets. Attribuez ensuite ce nom à la variable `player`.

> `playerNumber` doit être un nombre
> La variable `player` doit être une chaîne
> La valeur de `player` doit être "Montana"
> Vous devez utiliser la notation entre crochets pour accéder à `testObj`
> Vous ne devez pas attribuer la valeur `Montana` directement à la variable `player`.
> Vous devriez utiliser la variable `playerNumber` dans votre notation entre crochets

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
// Only change code below this line
var playerNumber;       // Change this line
var player = testObj;   // Change this line
```

```js
var playerNumber = 16;
var player = testObj[playerNumber];
```

-----

## [...]

-----



## 88. Test d'objets pour les propriétés

[Learn Basic JavaScript: Testing Objects for Properties | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/testing-objects-for-properties)

Parfois, il est utile de vérifier si la propriété d'un objet donné  existe ou non. Nous pouvons utiliser la méthode des objets  `.hasOwnProperty(propname)` pour déterminer si cet objet a le nom de  propriété donné. `.hasOwnProperty()` renvoie `true` ou `false` si la propriété est trouvée ou non.

**Exemple**

```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
```

Modifiez la fonction `checkObj` pour tester si un objet passé à la  fonction (`obj`) contient une propriété spécifique (`checkProp`). Si la  propriété est trouvée, renvoyez la valeur de cette propriété. Sinon,  renvoyez `"Not Found"`.

> `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` devrait retourner `"pony"`.
> `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` devrait retourner `"kitten"`.
> `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` devrait retourner `"Not Found"`.
> `checkObj({city: "Seattle"}, "city")` devrait retourner `"Seattle"`.
> `checkObj({city: "Seattle"}, "district")` devrait retourner `"Not Found"`.

```js
function checkObj(obj, checkProp) {
  // Changez uniquement le code en dessous de cette ligne
  return "Change Me!";
  // Changez uniquement le code au-dessus de cette ligne
}
```

```js
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  };
}
```

-----



## 89. Manipuler des objets complexes

[Learn Basic JavaScript: Manipulating Complex Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects)

Parfois, vous souhaiterez  peut-être stocker des données dans une *structure de données* flexible. Un objet JavaScript est un moyen de gérer des données flexibles. Ils  permettent des combinaisons arbitraires *de chaînes, de nombres, de  booléens, de tableaux, de fonctions et d'objets*.
Voici un exemple de structure de données complexe :

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

C'est un tableau qui contient un objet à l'intérieur. L'objet a divers  morceaux de *métadonnées* sur un album. Il possède également un tableau `"formats"` imbriqué. Si vous souhaitez ajouter d'autres enregistrements  d'album, vous pouvez le faire en ajoutant des enregistrements au tableau de niveau supérieur. Les objets contiennent des données dans une  propriété, qui a un format clé-valeur. Dans l'exemple ci-dessus,  `"artist": "Daft Punk"` est une propriété qui a une clé `"artist"` et une  valeur `"Daft Punk"`. La notation d'objet JavaScript ([JavaScript Object Notation](http://www.json.org/)) ou `JSON` est un format d'échange de données associé utilisé pour stocker des données.

```js
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

**Remarque**
Vous devrez placer une virgule après chaque objet du tableau, sauf s'il s'agit du dernier objet du tableau.

-----

Ajoutez un nouvel album au tableau `myMusic`. Ajoutez des chaînes `artist` et `title`, le numéro `release_year` et un tableau de chaînes `formats`.

> `myMusic` doit être un tableau
> `myMusic` doit avoir au moins deux éléments
> `myMusic[1]` doit être un objet
> `myMusic[1]` doit avoir au moins 4 propriétés
> `myMusic[1]` doit contenir une propriété `artist` qui est une chaîne
> `myMusic[1]` doit contenir une propriété `title` qui est une chaîne
> `myMusic[1]` doit contenir une propriété `release_year` qui est un nombre
> `myMusic[1]` doit contenir une propriété `formats` qui est un tableau
> `formats` doit être un tableau de chaînes avec au moins deux éléments

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add a record here
  {
    "artist": "David Bowie",
    "title": "Aladdin Sane",
    "release_year": 1973,
    "formats": [
      "CD",
      "LP"
    ],
    "gold": true
  }
];
```

-----



## 90. Accès aux objets imbriqués

[Learn Basic JavaScript: Accessing Nested Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects)

Les sous-propriétés des objets sont accessibles en enchaînant la notation par points ou crochets.
Voici un objet imbriqué :

```js
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"

```

-----

Accédez à l'objet `myStorage` et affectez le contenu de la propriété de `glove box` (boîte à gants) à la variable `gloveBoxContents`. Utilisez la notation par points pour toutes les propriétés si possible, sinon utilisez la  notation entre crochets.

> `gloveBoxContents` doit être égal à "maps".
> Votre code doit utiliser la notation par points et crochets pour accéder à `myStorage`.

```js
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// var gloveBoxContents = undefined; // Change this line
var gloveBoxContents = myStorage.car.inside["glove box"];
```

-----



## 91. Accès aux tableaux imbriqués

[Learn Basic JavaScript: Accessing Nested Arrays | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays)

Comme nous l'avons vu dans les exemples précédents, les objets peuvent  contenir à la fois des objets imbriqués et des tableaux imbriqués.  Semblable à l'accès aux objets imbriqués, la notation entre crochets de Array peut être chaînée pour accéder aux tableaux imbriqués.
Voici un exemple d'accès à un tableau imbriqué :

```js
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```

-----

Récupérez le deuxième arbre de la variable `myPlants` en utilisant la notation de point et de crochet d'objet.

> `secondTree` doit être égal à "pine".
> Votre code doit utiliser la notation par points et crochets pour accéder à `myPlants`.

```js
// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
```

-----



## 92. Collection de disques

[Learn Basic JavaScript: Record Collection | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection)

Vous recevez un objet JSON représentant une partie de votre collection  d'albums musicaux. Chaque album a plusieurs propriétés et un numéro  d'identification unique comme clé. Tous les albums ne contiennent pas  d'informations complètes.
Ecrivez une fonction qui prend  l'identifiant d'un album `id` (comme `2548`), une propriété `prop` ( `"artist"` or `"tracks"`) et une valeur `value` (comme `"Addicted to Love"`) pour  modifier les données de cette collection.
Si `prop` n'est pas  `"tracks"` et que `value` n'est pas vide (`""`), mettez à jour ou  définissez la `value` de la propriété de cet album.
Votre fonction doit toujours renvoyer l'objet de collection en entier.

Il existe plusieurs règles pour traiter les données incomplètes :
Si `prop` est `"tracks"` mais que l'album n'a pas de propriété `"tracks"`, créez un tableau vide avant d'ajouter la nouvelle valeur à la propriété  correspondante de l'album.
Si `prop` est `"tracks"` et que la valeur n'est pas vide (`""`), poussez `value` à la fin du tableau des pistes `tracks` existantes de l'album.
Si `value` est vide (`""`), supprimez la propriété `prop` donnée de l'album.

**Conseils**
Utilisez la notation entre crochets (`bracket notation`) lors de l'<u>**Accès aux propriétés d'objet avec des variables (84)**</u>.
`push` est une méthode de tableau que vous pouvez consulter sur [Mozilla Developer Network](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push).
Vous pouvez vous référer à **<u>Manipuler des objets complexes (90)</u>** présentant la notation d'objets JavaScript (JSON) pour un rappel.

> Vous ne devez pas modifier l'initialisation de l'objet `collection`
> Après `updateRecords(5439, "artist", "ABBA")`, l'artiste doit être `"ABBA"`
> Après `updateRecords(5439, "tracks", "Take a Chance on Me")`, les morceaux  devraient avoir `"Take a Chance on Me"` comme dernier élément.
> Après `updateRecords(2548, "artist", "")`, `artist` ne doit pas être défini
> Après `updateRecords(1245, "tracks", "Addicted to Love")`, ``tracks` devrait avoir `"Addicted to Love"` comme dernier élément.
> Après `updateRecords(2468, "tracks", "Free")`, `tracks` devrait avoir `"1999"` comme premier élément.
> Après `updateRecords(2548, "tracks", "")`, `tracks` ne doit pas être défini
> Après `updateRecords(1245, "album", "Riptide")`, `album` doit être `"Riptide"`

```js
// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
	if (prop === "tracks" && value !=="") {
        if (collection[id][prop]) {
            collection[id][prop].push(value);
        } else {
            collection[id][prop] = [value];
        }
    } else if (value !== "") {
        collection[id][prop] = value;
    } else {
        delete collection[id][prop];
    }
  return collection;
}

updateRecords(5439, "artist", "ABBA");
```

-----



## 93. Itérer avec les boucles JavaScript `while`

[Learn Basic JavaScript: Iterate with JavaScript While Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops)

Vous pouvez exécuter le même code plusieurs fois en utilisant une boucle.
Le premier type de boucle que nous allons apprendre est appelé une boucle `while` car elle s'exécute "tant que" une condition spécifiée est vraie et s'arrête une fois que cette condition n'est plus vraie.

```js
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```

Dans l'exemple de code ci-dessus, la boucle `while` s'exécutera 5 fois et ajoutera les nombres 0 à 4 à `ourArray`.
Essayons de faire fonctionner une boucle `while` en poussant des valeurs dans un tableau.

-----

Ajoutez les nombres 5 à 0 (inclus) dans l'ordre décroissant à `myArray` en utilisant une boucle `while`.

> Vous devriez utiliser une boucle `while` pour cela.
> `myArray` doit être égal à `[5,4,3,2,1,0]`.

```js
// Setup
var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
};
// Only change code below this line
```

-----



## 94. Itérer avec les boucles JavaScript `for`

[Learn Basic JavaScript: Iterate with JavaScript For Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)

Vous pouvez exécuter le même code plusieurs fois en utilisant une boucle.
Le type le plus courant de boucle JavaScript est appelé boucle `for` car il s'exécute "pour" un certain nombre de fois.
Les boucles `for` sont déclarées avec trois expressions facultatives séparées par des points-virgules :

`for ([initialisation]; [condition]; [expression-finale])`

L'instruction `initialisation` est exécutée une seule fois avant le début de la boucle. Il est généralement utilisé pour définir et configurer votre  variable de boucle.

L'instruction `condition` est évaluée au  début de chaque itération de boucle et continuera tant qu'elle sera évaluée à `true`. Lorsque `condition` est `false` au début de l'itération, la boucle s'arrêtera de s'exécuter. Cela signifie que si `condition`  commence par `false`, votre boucle ne s'exécutera jamais.

`expression-finale` est exécutée à la fin de chaque itération de boucle, avant le  prochain contrôle de `condition` et est généralement utilisée pour  incrémenter ou décrémenter votre compteur de boucle.

Dans l'exemple suivant, nous initialisons avec `i = 0` et itérons tant que notre condition `i < 5` est vraie. Nous incrémenterons `i` de `1` à chaque itération de boucle avec `i++` comme `expression-finale`.

```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` contiendra maintenant `[0,1,2,3,4]`.

-----

Utilisez une boucle `for` pour pousser les valeurs 1 à 5 dans `myArray`.

```js
// Setup
var myArray = [];
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
```

-----



## 95. Itérer des nombres impairs avec une boucle `for`

[Learn Basic JavaScript: Iterate Odd Numbers With a For Loop | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop)

Les boucles `for` n'ont pas besoin d'itérer une à la fois. En changeant  notre `expression-finale`, nous pouvons compter par nombres pairs.
Nous allons commencer à `i = 0` et boucler tant que `i < 10`. Nous incrémenterons `i` de 2 à chaque boucle avec `i += 2`.

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` contiendra maintenant `[0,2,4,6,8]`. Modifions notre `initialisation` pour pouvoir compter par nombres impairs.

-----

Poussez les nombres impairs de 1 à 9 vers `myArray` en utilisant une boucle `for`.

> Vous devriez utiliser une boucle `for` pour cela.
> `myArray` doit être égal à `[1,3,5,7,9]`.

```js
// Setup
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```

-----



## 96. Compter à rebours avec une boucle `for`

[Learn Basic JavaScript: Count Backwards With a For Loop | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/count-backwards-with-a-for-loop)

Une boucle `for` peut également compter à rebours, tant que nous pouvons définir les bonnes conditions.
Afin de compter à rebours par deux, nous devons changer notre `initialisation`, notre `condition` et notre `expression-finale`.
Nous allons commencer à `i = 10` et boucler tant que `i > 0`. Nous décrémenterons `i` de 2 chaque boucle avec `i -= 2`.

```js
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` contiendra maintenant `[10,8,6,4,2]`. Modifions notre `initialisation` et notre `expression-finale` afin que nous puissions  compter en arrière par deux par des nombres impairs.

-----

Poussez les nombres impairs de 9 à 1 vers `myArray` en utilisant une boucle `for`.

> Vous devriez utiliser une boucle `for` pour cela.
> Vous devriez utiliser la méthode de tableau `push`.
> `myArray` doit être égal à `[9,7,5,3,1]`.

```js
// Setup
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```

-----



## 97. Itérer à travers un tableau avec une boucle For

[Learn Basic JavaScript: Iterate Through an Array with a For Loop | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)

Une tâche courante en JavaScript consiste à parcourir le contenu d'un  tableau. Une façon de faire est d'utiliser une boucle `for`. Ce code  affichera chaque élément du tableau arr vers la console :

```js
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Rappelez-vous que les tableaux ont une indexation de base zéro, ce qui  signifie que le dernier index du tableau est `length - 1`. Notre condition pour cette boucle est `i < arr.length`, qui arrête la boucle lorsque `i` est  égal à `length`. Dans ce cas, la dernière itération est `i === 4` c'est-à-dire quand `i` devient égal à `arr.length` et envoie `6` à la console.

-----

Déclarez et initialisez une variable `total` à `0`. Utilisez une boucle `for` pour  ajouter la valeur de chaque élément du tableau `myArr` à `total`.

> `total` doit être déclaré et initialisé à 0.
> `total` doit être égal à 20.
> Vous devez utiliser une boucle `for` pour parcourir `myArr`.
> Vous ne devez pas essayer d'attribuer directement la valeur 20 à `total`.

```js
// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
   total = total + myArr[i]
}
```

-----



## 98. Imbrication de boucles `for`

[Learn Basic JavaScript: Nesting For Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops)

Si vous avez un tableau multidimensionnel, vous pouvez utiliser la même  logique que le point de passage précédent pour parcourir à la fois le tableau et tous les sous-tableaux. Voici un exemple :

```js
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

Cela sort chaque sous-élément dans `arr` un à la fois. Notez que pour la  boucle interne, nous vérifions la longueur (`length`) de `arr[i]`, puisque `arr[i]`  est lui-même un tableau.

-----

Modifiez la fonction `multiplyAll` pour qu'elle retourne le produit de tous les nombres dans les sous-tableaux de `arr`.

> `multiplyAll([[1],[2],[3]])` doit renvoyer `6`
> `multiplyAll([[1,2],[3,4],[5,6,7]])` doit renvoyer `5040`
> `multiplyAll([[5,1],[0.2, 4, 0.5], [3, 9]])` doit renvoyer `54`

```js
function multiplyAll(arr) {
  var product = 1;
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
```

-----



## 99. Itérer avec les boucles JavaScript `do...while`

[Learn Basic JavaScript: Iterate with JavaScript Do...While Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-do---while-loops)

Le prochain type de boucle que vous apprendrez est appelé une boucle `do...while`. Elle est appelée une boucle `do...while` car elle effectuera  d'abord une passe du code à l'intérieur de la boucle, quoi qu'il arrive, puis continuera à exécuter la boucle pendant (`while`) que la condition spécifiée est évaluée à `true`.

```js
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

L'exemple ci-dessus se comporte de la même manière que les autres types  de boucles, et le tableau résultant ressemblera à `[0, 1, 2, 3, 4]`.  Cependant, ce qui rend le `do...while` différent des autres  boucles, c'est comment il se comporte lorsque la condition échoue au  premier contrôle. Voyons cela en action : Voici une boucle `while` régulière qui exécutera le code dans la boucle tant que `i < 5` :

```js
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
```

Dans cet exemple, nous initialisons la valeur de `ourArray` à un tableau  vide et la valeur de `i` à 5. Lorsque nous exécutons la boucle `while`, la  condition est évaluée à `false` car `i` n'est pas inférieur à 5, nous n'exécutons donc pas le code à l'intérieur de la boucle. Le résultat est  que `ourArray` se retrouvera sans aucune valeur ajoutée, et il ressemblera toujours à `[]` lorsque tout le code de l'exemple ci-dessus sera terminé. Maintenant, jetez un œil à une boucle `do...while` :

```js
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

Dans ce cas, nous initialisons la valeur de `i` à 5, comme nous l'avons  fait avec la boucle `while`. Lorsque nous arrivons à la ligne suivante, il n'y a pas de condition à évaluer, nous allons donc au code à  l'intérieur des accolades et l'exécutons. Nous allons ajouter un seul  élément au tableau, puis incrémenter `i` avant d'arriver à la vérification de la condition. Lorsque nous évaluons enfin la condition `i < 5` sur la  dernière ligne, nous voyons que `i` vaut maintenant 6, ce qui échoue à la  vérification conditionnelle, nous quittons donc la boucle et nous avons  terminé. À la fin de l'exemple ci-dessus, la valeur de `ourArray` est `[5]`. Essentiellement, une boucle `do...while` garantit que le code à  l'intérieur de la boucle s'exécutera au moins une fois. Essayons de  faire fonctionner une boucle `do...while` en poussant des valeurs dans  un tableau.

-----

Remplacez la boucle `while` du code par une boucle `do...while` afin que la boucle ne pousse que le nombre `10` vers `myArray`, et `i` sera égal à `11` lorsque votre code sera terminé.

> Vous devriez utiliser une boucle `do...while` pour cet exercice.
> `myArray` doit être égal à `[10]`.
> `i` devrais égaler `11`

```js
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
```

```js
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);
```

-----



## 100. Remplacer les boucles à l'aide de la récursivité

[Learn Basic JavaScript: Replace Loops using Recursion | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion)

La récursivité est le concept selon lequel une fonction peut être  exprimée en termes d'elle-même. Pour vous aider à comprendre cela,  commencez par penser à la tâche suivante : multipliez les `n` premiers  éléments d'un tableau pour créer le produit de ces éléments. En  utilisant une boucle `for`, vous pouvez faire ceci :

```js
function multiply(arr, n) {
   var product = 1;
  for (var i = 0; i < n; i++) {
      product *= arr[i];
  }
  return product;
}
```

Cependant, notez que `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. Cela signifie que vous pouvez réécrire `multiply` en lui-même et ne jamais avoir besoin d'utiliser une boucle.

```js
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
```

La version récursive de `multiply` se décompose comme ceci. Dans le cas de base, où `n <= 0`, il renvoie `1`. Pour des valeurs plus grandes de `n`, il  s'appelle lui-même, mais avec `n - 1`. Cet appel de fonction est évalué de la même manière, en appelant à nouveau multiplier jusqu'à `n <= 0`. À ce point, toutes les fonctions peuvent retourner et `multiply` d'origine renvoie la réponse.

Remarque : les fonctions récursives  doivent avoir un cas de base lorsqu'elles retournent sans appeler à  nouveau la fonction (dans cet exemple, lorsque `n <= 0`), sinon elles ne  peuvent jamais terminer l'exécution.

-----

Écrivez une fonction récursive, `sum(arr, n)`, qui renvoie la somme des `n` premiers éléments d'un tableau `arr`.

> `sum([1], 0)` doit être égal à 0.
> `sum([2, 3, 4], 1)` doit être égal à 2.
> `sum([2, 3, 4, 5], 3)` doit être égal à 9.
> Votre code ne doit reposer sur aucun type de boucles (`for` ou `while` ou des  fonctions d'ordre supérieur telles que `forEach`, `map`, `filter` ou `reduce`).
> Vous devez utiliser la récursivité pour résoudre ce problème.

```js
function sum(arr, n) {
  // Only change code below this line
	if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}
```

-----



## 101. Recherche de profil

[Learn Basic JavaScript: Profile Lookup | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)

Nous avons un tableau d'objets représentant différentes personnes dans nos listes de contacts.
Une fonction `lookUpProfile` qui prend `name` et une propriété (`prop`) comme arguments a été pré-écrite pour vous.
La fonction doit vérifier si `name` est le `firstName` d'un contact réel et si la propriété donnée (`prop`) est une propriété de ce contact.
Si les deux sont vrais, renvoyez la valeur ("value") de cette propriété.
Si le nom (`name`) ne correspond à aucun contact, renvoyez `"No such contact"`.
Si `prop` ne correspond à aucune propriété valide d'un contact trouvé pour correspondre à `name`, renvoyez `"No such property"`.

> `"Kristian", "lastName"` doit renvoyer `"Vos"`
> `"Sherlock", "likes"` devraient renvoyer `["Intriguing Cases", "Violin"]`
> `"Harry","likes"` devraient renvoyer un tableau
> `"Bob", "number"` doit renvoyer '"No such contact"
> `"Bob", "potato"` devrait renvoyer "No such contact"
> `"Akira", "address"` doit renvoyer "No such property"

```js
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
for (var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
}

lookUpProfile("Akira", "likes");
```

-----



## 102. Générer des fractions aléatoires avec JavaScript

[Learn Basic JavaScript: Generate Random Fractions with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-fractions-with-javascript)

Les nombres aléatoires sont utiles pour créer un comportement aléatoire.
JavaScript a une fonction `Math.random()` qui génère un nombre décimal aléatoire entre `0` (inclus) et pas tout à fait jusqu'à `1` (exclusif). Ainsi `Math.random()` peut renvoyer un `0` mais jamais tout à fait un `1`.

**Remarque**
Comme pour **3. Stocker des valeurs avec l'opérateur égal**, tous les appels de  fonction seront résolus avant l'exécution du `return`, nous pouvons donc `return` la valeur de la fonction `Math.random()`.

-----

Modifiez `randomFraction` pour renvoyer un nombre aléatoire au lieu de renvoyer `0`.

> `randomFraction` doit renvoyer un nombre aléatoire.
> Le nombre renvoyé par `randomFraction` doit être une décimale.
> Vous devriez utiliser `Math.random` pour générer le nombre décimal aléatoire.

```js
function randomFraction() {
  return Math.random();
}
console.log(randomFraction())
```

-----



## 103. Générer des nombres entiers aléatoires avec JavaScript

[Learn Basic JavaScript: Generate Random Whole Numbers with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-with-javascript)

C'est formidable de pouvoir générer des nombres décimaux aléatoires,  mais c'est encore plus utile si nous l'utilisons pour générer des  nombres entiers aléatoires.

1. Utilisez `Math.random()` pour générer une décimale aléatoire.
2. Multipliez cette décimale aléatoire par `20`.
3. Utilisez une autre fonction, `Math.floor()` pour arrondir le nombre à son nombre entier le plus proche.

Rappelez-vous que `Math.random()` ne peut jamais tout à fait retourner un `1` et, parce que nous arrondissons vers le bas, il est impossible d'obtenir  réellement `20`. Cette technique nous donnera un nombre entier compris  entre `0` et `19`.
En mettant tout ensemble, voici à quoi ressemble notre code :

`Math.floor(Math.random() * 20);`

Nous appelons `Math.random()`, en multipliant le résultat par 20, puis en  passant la valeur à la fonction `Math.floor()` pour arrondir la valeur au nombre entier le plus proche.

-----

Utilisez cette technique pour générer et renvoyer un nombre entier aléatoire compris entre `0` et `9`.

> Le résultat de `randomWholeNum` doit être un nombre entier.
> Vous devez utiliser `Math.random` pour générer un nombre aléatoire.
> Vous devriez avoir multiplié le résultat de `Math.random` par 10 pour en faire un nombre compris entre zéro et neuf.
> Vous devez utiliser `Math.floor` pour supprimer la partie décimale du nombre.

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
```

-----



## 104. Générer des nombres entiers aléatoires dans une plage

[Learn Basic JavaScript: Generate Random Whole Numbers within a Range | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range)

Au lieu de générer un nombre entier aléatoire entre zéro et un nombre  donné comme nous le faisions auparavant, nous pouvons générer un nombre entier aléatoire qui se situe dans une plage de deux nombres  spécifiques.
Pour ce faire, nous définirons un nombre minimum `min` et un nombre maximum `max`.
Voici la formule que nous utiliserons. Prenez un moment pour le lire et essayez de comprendre ce que fait ce code :

`Math.floor(Math.random() * (max - min + 1)) + min`

-----

Créez une fonction appelée `randomRange` qui prend une plage `myMin` et `myMax` et  retourne un nombre entier aléatoire supérieur ou égal à `myMin` et  inférieur ou égal à `myMax`, inclus.

> Le nombre aléatoire le plus bas pouvant être généré par `randomRange` doit être égal à votre nombre minimum, `myMin`.
> Le nombre aléatoire le plus élevé pouvant être généré par `randomRange` doit être égal à votre nombre maximal, `myMax`.
> Le nombre aléatoire généré par `randomRange` doit être un entier et non une décimale.
> `randomRange` doit utiliser à la fois `myMax` et `myMin` et renvoyer un nombre aléatoire dans votre plage.

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(2, 856));
```

-----



## 105. Utilisez la fonction parseInt()

[Learn Basic JavaScript: Use the parseInt Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function)

La fonction `parseInt()` analyse une chaîne et renvoie un entier. Voici un exemple :

`var a = parseInt("007");`

La fonction ci-dessus convertit la chaîne "007" en un entier 7. Si le  premier caractère de la chaîne ne peut pas être converti en nombre, elle renvoie `NaN`.

-----

Utilisez `parseInt()` dans la fonction `convertToInteger` pour qu'elle convertisse la chaîne d'entrée `str` en un  entier et la renvoie.

> `convertToInteger` doit utiliser la fonction parseInt ()
> `convertToInteger("56")` doit renvoyer un nombre
> `convertToInteger("56")` doit renvoyer 56
> `convertToInteger("77")` doit renvoyer 77
> `convertToInteger("JamesBond")` doit renvoyer NaN

```js
function convertToInteger(str) {
	return parseInt(str);
}
convertToInteger("56");
/////
console.log(convertToInteger("56")); // 56
console.log(convertToInteger("77")); // 77
console.log(convertToInteger("JamesBond")); // Nan
```

-----



## 106. Utiliser la fonction parseInt() avec une base

[Learn Basic JavaScript: Use the parseInt Function with a Radix | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function-with-a-radix)

La fonction `parseInt()` analyse une chaîne et renvoie un entier. Il  prend un deuxième argument pour la base, qui spécifie la base du nombre  dans la chaîne. La base peut être un entier compris entre 2 et 36.
L'appel de fonction ressemble à ceci :

`parseInt(string, radix);`

Et voici un exemple :

`var a = parseInt ("11", 2);`

La variable de base indique que "11" est dans le système binaire, ou base  2. Cet exemple convertit la chaîne "11" en un entier 3.

-----

Utilisez `parseInt()` dans la fonction `convertToInteger` pour qu'il convertisse un nombre binaire en entier et le renvoie.

> `convertToInteger` doit utiliser la fonction `parseInt()`
> `convertToInteger("10011")` doit renvoyer un nombre
> `convertToInteger("10011")` doit renvoyer 19
> `convertToInteger("111001")` doit renvoyer 57
> `convertToInteger("JamesBond")` doit renvoyer NaN

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");
/////
console.log(convertToInteger("10011")); // 19
console.log(convertToInteger("111001")); // 57
console.log(convertToInteger("JamesBond")); // NaN
```

-----



## 107. Utiliser l'opérateur conditionnel (ternaire)

[Learn Basic JavaScript: Use the Conditional (Ternary) Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-conditional-ternary-operator)

L'*opérateur conditionnel*, également appelé *opérateur ternaire*, peut être utilisé comme une expression `if-else` sur une ligne.
La syntaxe est :

`condition ? instruction-si-vrai : instruction-si-faux;`

La fonction suivante utilise une instruction `if-else` pour vérifier une condition :

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

Cela peut être réécrit à l'aide de l'`opérateur conditionnel` :

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

-----

Utilisez l'`opérateur conditionnel` dans la fonction `checkEqual` pour vérifier si deux nombres sont égaux ou non. La fonction doit renvoyer "Equal" ou "Not Equal".

> `checkEqual` doit utiliser l'`opérateur conditionnel`
> `checkEqual(1, 2)` doit renvoyer "Not Equal"
> `checkEqual(1, 1)` doit renvoyer "Equal"
> `checkEqual(1, -1)` doit renvoyer "Not Equal"

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);
/////
console.log(checkEqual(1, 2)); // Not Equal
console.log(checkEqual(1, 1)); // Equal
console.log(checkEqual(1, -1)); // Not Equal
```

-----



## 108. Utiliser plusieurs opérateurs conditionnels (ternaires)

[Learn Basic JavaScript: Use Multiple Conditional (Ternary) Operators | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)

Dans le défi précédent, vous avez utilisé un seul opérateur conditionnel. Vous pouvez également les enchaîner pour vérifier  plusieurs conditions.
La fonction suivante utilise les instructions if, else if et else pour vérifier plusieurs conditions :

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

La fonction ci-dessus peut être réécrite à l'aide de plusieurs opérateurs conditionnels :

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

Il est recommandé de formater plusieurs opérateurs conditionnels de  telle sorte que chaque condition se trouve sur une ligne distincte,  comme indiqué ci-dessus. L'utilisation de plusieurs opérateurs conditionnels sans indentation appropriée peut rendre votre code  difficile à lire. Par exemple :

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

-----

Dans la fonction `checkSign`, utilisez plusieurs opérateurs conditionnels - en suivant le format recommandé utilisé dans `findGreaterOrEqual` - pour  vérifier si un nombre est positif, négatif ou zéro. La fonction doit renvoyer `"positif"`, `"négatif"` ou `"zéro"`.

> `checkSign` doit utiliser plusieurs opérateurs conditionnels
> `checkSign(10)` doit retourner 'positif'. Notez que la capitalisation compte
> `checkSign(-12)` doit renvoyer 'négatif'. Notez que la capitalisation compte
> `checkSign(0)`  doit renvoyer "zero". Notez que la capitalisation compte

```js
function checkSign(num) {
  return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}
checkSign(10);
/////
console.log(checkSign(10)); // positive
console.log(checkSign(-12)); // negative
console.log(checkSign(0)); // zero
```

-----



## 109. Utilisez la récursivité pour créer un compte à rebours

[Learn Basic JavaScript: Use Recursion to Create a Countdown | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown)

Dans un défi précédent (100), vous avez appris à utiliser la récursivité pour remplacer une boucle for. Examinons maintenant une fonction plus  complexe qui renvoie un tableau d'entiers consécutifs commençant par `1`  jusqu'au nombre passé à la fonction.

Comme mentionné dans le défi précédent, il y aura un *cas de base*. Le cas de base indique à la  fonction récursive quand elle n'a plus besoin de s'appeler. C'est un cas simple où la valeur de retour est déjà connue. Il y aura également un  appel récursif qui exécute la fonction d'origine avec différents  arguments. Si la fonction est écrite correctement, le cas de base sera  finalement atteint.

Par exemple, supposons que vous souhaitiez  écrire une fonction récursive qui renvoie un tableau contenant les nombres `1` à `n`. Cette fonction devra accepter un argument, `n`,  représentant le nombre final. Ensuite, il devra s'appeler avec des  valeurs de `n` progressivement plus petites jusqu'à ce qu'il atteigne `1`.  Vous pouvez écrire la fonction comme suit :

```js
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
```

Au début, cela semble contre-intuitif puisque la valeur de `n` diminue,  mais les valeurs du tableau final augmentent. Cela se produit parce que  le push se produit en dernier, après le retour de l'appel récursif. Au  point où `n` est poussé dans le tableau, `countup(n - 1)` a déjà été évalué et renvoyé `[1, 2, ..., n - 1]`.

-----

Nous avons défini une fonction  appelée `countdown` avec un paramètre (`n`). La fonction doit  utiliser la récursivité pour renvoyer un tableau contenant les entiers `n` à `1` en fonction du paramètre `n`. Si la fonction est appelée avec un  nombre inférieur à 1, la fonction doit renvoyer un tableau vide. Par  exemple, l'appel de cette fonction avec `n = 5` doit renvoyer le tableau  `[5, 4, 3, 2, 1]`. Votre fonction doit utiliser la récursivité en  s'appelant elle-même et ne doit utiliser aucune boucle d'aucune sorte.

> `countdown(-1)` doit renvoyer un tableau vide.
> `countdown(10)` doit revenir `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`
> `countdown(5)` doit renvoyer `[5, 4, 3, 2, 1]`
> Votre code ne doit reposer sur aucun type de boucles (`for`, `while` ou des  fonctions d'ordre supérieur telles que f`forEach`, `map`, `filter`, et  `reduce`).
> Vous devez utiliser la récursivité pour résoudre ce problème.

```js
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
};
/////
console.log(countdown(-1)); // []
console.log(countdown(10)); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(countdown(5)); // [ 5, 4, 3, 2, 1 ]
```

-----



## 110. Utiliser la récursivité pour créer une plage de nombres

[Learn Basic JavaScript: Use Recursion to Create a Range of Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers)

Dans la continuité du défi précédent, nous vous offrons une autre opportunité de créer une fonction récursive pour résoudre un problème.

----

Nous avons défini une fonction nommée `rangeOfNumbers` avec deux paramètres. La fonction doit retourner un tableau d'entiers qui commence par un  nombre représenté par le paramètre `startNum` et se termine par un nombre  représenté par le paramètre `endNum`. Le numéro de départ sera toujours inférieur ou égal au numéro de fin. Votre fonction doit utiliser la  récursivité en s'appelant elle-même et ne pas utiliser de boucles d'aucune sorte. Cela devrait également fonctionner dans les cas où `startNum` et `endNum` sont identiques.

> Votre fonction doit renvoyer un tableau.
> Votre code ne doit utiliser aucune syntaxe de boucle (`for` ou `while` ou des fonctions d'ordre supérieur telles que `forEach`, `map`, `filter`, ou `reduce`).
> `rangeOfNumbers` devrait utiliser la récursivité (s'appeler lui-même) pour résoudre ce problème.
> `rangeOfNumbers(1, 5)` doit renvoyer `[1, 2, 3, 4, 5]`.
> `rangeOfNumbers(6, 9)` doit renvoyer `[6, 7, 8, 9]`.
> `rangeOfNumbers(4, 4)` doit renvoyer `[4]`.

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};
console.log(rangeOfNumbers(1, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(rangeOfNumbers(6, 9)); // [ 6, 7, 8, 9 ]
console.log(rangeOfNumbers(4, 4)); // [ 4 ]
```

