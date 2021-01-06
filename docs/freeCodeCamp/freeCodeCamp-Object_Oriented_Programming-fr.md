---
id: freeCodeCamp-Object_Oriented_Programming-fr
title: Programmation orientée objet
---



## Introduction aux défis de la programmation orientée objet

[Object Oriented Programming | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/)

À la  base, le développement logiciel résout un problème ou obtient un  résultat avec le calcul. Le processus de développement logiciel définit  d'abord un problème, puis présente une solution. La programmation  orientée objet est l'une des principales approches du processus de  développement logiciel.

Comme son nom l'indique, la programmation orientée objet organise le code en définitions d'objets. Celles-ci sont parfois appelées classes et regroupent des données avec un comportement associé. Les données sont les attributs d'un objet et le comportement  (ou les fonctions) sont des méthodes.

La structure de l'objet le  rend flexible au sein d'un programme. Les objets peuvent transférer des  informations en appelant et en passant des données aux méthodes d'un  autre objet. De plus, les nouvelles classes peuvent recevoir ou hériter  de toutes les fonctionnalités d'une classe de base ou parente. Cela aide à réduire le code répété.

Votre choix d'approche de  programmation dépend de quelques facteurs. Il s'agit notamment du type  de problème, ainsi que de la manière dont vous souhaitez structurer vos  données et vos algorithmes. Cette section couvre les principes de  programmation orientée objet en JavaScript.

-----



## 1. Créer un objet JavaScript de base

[Learn Object Oriented Programming: Create a Basic JavaScript Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-basic-javascript-object)

Pensez aux choses que les gens voient tous les jours, comme les  voitures, les magasins et les oiseaux. Ce sont tous des objets : des  choses tangibles que les gens peuvent observer et avec lesquelles ils  peuvent interagir.
Quelles sont les qualités de ces objets ? Une voiture a des roues. Les magasins vendent des articles. Les oiseaux ont des ailes.
Ces qualités, ou propriétés, définissent ce qui constitue un objet. Notez  que des objets similaires partagent les mêmes propriétés, mais peuvent  avoir des valeurs différentes pour ces propriétés. Par exemple, toutes  les voitures ont des roues, mais toutes les voitures n'ont pas le même  nombre de roues.
Les objets en JavaScript sont utilisés pour  modéliser des objets du monde réel, en leur donnant des propriétés et un comportement tout comme leurs homologues du monde réel. Voici un  exemple utilisant ces concepts pour créer un objet `duck` :

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

Cet objet `duck` a deux paires propriété/valeur : un nom de "Aflac" et un `numLegs` de 2.

-----

Créez un objet `dog` avec les propriétés `name` et `numLegs`, et définissez-les respectivement sur une chaîne et un nombre.

> `dog` doit être un objet.
> `dog` doit avoir une propriété `name` définie sur `string`.
> `dog` doit avoir une propriété `numLegs` définie sur `number`.

```js
let dog = {
    name: "toto",
    numLegs: 4
};
console.log(dog); // { name: 'toto', numLegs: 4 }
```

-----



## 2. Utiliser la notation par points pour accéder aux propriétés d'un objet

[Learn Object Oriented Programming: Use Dot Notation to Access the Properties of an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object)

Le dernier défi a créé un objet avec diverses propriétés. Vous allez  maintenant voir comment accéder aux valeurs de ces propriétés. Voici un  exemple :

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// Ceci imprime 'Aflac' sur la console
```

La notation par points est utilisée sur le nom de l'objet, `duck`, suivi du  nom de la propriété, `name`, pour accéder à la valeur de 'Aflac'.

-----

Imprimez les deux propriétés de l'objet `dog` sur votre console.

> Votre code doit utiliser `console.log` pour afficher la valeur de la propriété `name` de l'objet chien.
> Votre code doit utiliser `console.log` pour afficher la valeur de la propriété `numLegs` de l'objet chien.

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Changer uniquement le code en dessous de cette ligne
```

```js
let dog = {
  name: "Spot",
  numLegs: 4
};

console.log(dog.name); // Spot
console.log(dog.numLegs); // 4
```

-----



## 3. Créer une méthode sur un objet

[Learn Object Oriented Programming: Create a Method on an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-method-on-an-object)

Les objets peuvent avoir un type spécial de propriété, appelé méthode.
Les méthodes sont des propriétés qui sont des fonctions. Cela ajoute un  comportement différent à un objet. Voici l'exemple de `duck` avec une  méthode :

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Renvoie "The name of this duck is Aflac."
```

L'exemple ajoute la méthode `sayName`, qui est une fonction qui renvoie une phrase donnant le nom de `duck`. Notez que la méthode a accédé à la propriété  `name` dans l'instruction `return` en utilisant `duck.name`. Le prochain défi  couvrira une autre façon de faire cela.

-----

En utilisant l'objet `dog`, donnez-lui une méthode appelée `sayLegs`. La méthode doit renvoyer la phrase "This dog has 4 legs."

> `dog.sayLegs()` doit être une fonction.
> `dog.sayLegs()` doit renvoyer la chaîne donnée - notez que la ponctuation et l'espacement sont importants.

```js
let dog = {
  name: "Spot",
  numLegs: 4,
};
dog.sayLegs();
```

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
console.log(dog.sayLegs()); // This dog has 4 legs.
```

-----



## 4. Rendre le code plus réutilisable avec le mot-clé `this`

[Learn Object Oriented Programming: Make Code More Reusable with the this Keyword | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/make-code-more-reusable-with-the-this-keyword)

Le dernier défi a introduit une méthode pour l'objet `duck`. Il a utilisé la notation par points `duck.name` pour accéder à la valeur de la  propriété `name` dans l'instruction `return` :

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

Bien que ce soit un moyen valide d'accéder à la propriété de l'objet, il y a un piège ici. Si le nom de la variable change, tout code référençant le nom d'origine devra également être mis à jour. Dans une courte  définition d'objet, ce n'est pas un problème, mais si un objet a de  nombreuses références à ses propriétés, il y a plus de risques d'erreur.
Un moyen d'éviter ces problèmes consiste à utiliser le mot-clé `this` :

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` est un sujet profond, et l'exemple ci-dessus n'est qu'une façon de  l'utiliser. Dans le contexte actuel, `this` fait référence à l'objet auquel la méthode est associée : `duck`. Si le nom de l'objet est changé en `mallard`, il n'est pas nécessaire de trouver toutes les références à `duck` dans le code. Cela rend le code réutilisable et plus facile à  lire.

------

Modifiez la méthode `dog.sayLegs` pour supprimer toutes les références à `dog`. Utilisez l'exemple du canard pour vous guider.

> `dog.sayLegs()` doit renvoyer la chaîne donnée.
> Votre code doit utiliser le mot clé `this` pour accéder à la propriété `numLegs` de `dog`.

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};
dog.sayLegs();
console.log(dog.sayLegs()); //This dog has 4 legs.
```

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dog.sayLegs();

console.log(dog.sayLegs()); // This dog has 4 legs.
```

-----



## 5. Définir une fonction constructeur

[Learn Object Oriented Programming: Define a Constructor Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function)

Les *constructeurs* sont des fonctions qui créent de nouveaux objets. Ils  définissent les propriétés et les comportements qui appartiendront au  nouvel objet. Considérez-les comme un modèle pour la création de  nouveaux objets.
Voici un exemple de constructeur :

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

Ce constructeur définit un objet `Bird` avec les propriétés `name`, `color` et `numLegs` définies respectivement sur `Albert`, `blue` et `2`. Les constructeurs suivent quelques conventions :

- Les constructeurs sont définis avec un nom en majuscule pour les distinguer des autres fonctions qui  ne sont pas des constructeurs.
- Les constructeurs utilisent le mot-clé `this` pour définir les propriétés de l'objet qu'ils vont créer. À l'intérieur du constructeur, cela fait référence au nouvel objet qu'il  créera.
- Les constructeurs définissent les propriétés et les  comportements au lieu de renvoyer une valeur comme le feraient d'autres  fonctions.

-----

Créez un constructeur, `Dog`, avec les propriétés `name`, `color` et `numLegs` définies respectivement sur une chaîne, une chaîne et un nombre.

> `Dog` doit avoir une propriété `name` définie sur une chaîne.
> `Dog` doit avoir une propriété `color` définie sur une chaîne.
> `Dog` doit avoir une propriété `numLegs` définie sur un nombre.

```js
function Dog() {
    this.name = "Spot";
    this.color = "brown";
    this.numLegs = 4;
}
```

-----



## 6. Utiliser un constructeur pour créer des objets

[Learn Object Oriented Programming: Use a Constructor to Create Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects)

Voici le constructeur `Bird` du défi précédent :

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
  // 'this' à l'intérieur du constructeur fait toujours référence à l'objet en cours de création
}

let blueBird = new Bird();
```

Notez que l'opérateur `new` est utilisé lors de l'appel d'un constructeur. Cela indique à JavaScript de créer une nouvelle instance de `Bird` appelée `blueBird`. Sans l'opérateur `new`, `this` à l'intérieur du constructeur ne pointerait pas vers l'objet nouvellement créé, donnant des résultats  inattendus. Maintenant, `blueBird` a toutes les propriétés définies dans  le constructeur `Bird` :

```js
blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
```

Comme tout autre objet, ses propriétés sont accessibles et modifiables :

```js
blueBird.name = 'Elvira';
blueBird.name; // => Elvira
```

-----

Utilisez le constructeur `Dog` de la dernière leçon pour créer une nouvelle instance de `Dog`, en l'affectant à une variable `hound`.

> `hound` doit être créé à l'aide du constructeur `Dog`.
> Votre code doit utiliser l'opérateur `new` pour créer une instance de `Dog`.

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Changer uniquement le code en dessous de cette ligne
let hound = new Dog();
```

-----



## 7. Étendre les constructeurs pour recevoir des arguments

[Learn Object Oriented Programming: Extend Constructors to Receive Arguments | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments)

Les constructeurs `Bird` et `Dog` du dernier défi ont bien fonctionné.  Cependant, notez que tous les `Birds` créés avec le constructeur `Bird` sont automatiquement nommés Albert, sont de couleur bleue et ont deux  pattes. Et si vous voulez des oiseaux avec des valeurs différentes pour  le nom et la couleur ? Il est possible de modifier manuellement les  propriétés de chaque oiseau, mais ce serait beaucoup de travail :

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Supposons que vous écriviez un programme pour suivre des centaines, voire des  milliers d'oiseaux différents dans une volière. Il faudrait beaucoup de  temps pour créer tous les oiseaux, puis changer les propriétés en  différentes valeurs pour chacun. Pour créer plus facilement différents  objets `Bird`, vous pouvez concevoir votre constructeur `Bird` pour accepter les paramètres :

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Passez ensuite les valeurs comme arguments pour définir chaque oiseau unique dans le constructeur `Bird` : `let cardinal = new Bird('Bruce', 'red');` Cela donne une nouvelle instance de `Bird` avec les propriétés de nom et  de couleur définies respectivement sur Bruce et Red. La propriété `numLegs` est toujours définie sur 2. Le cardinal possède les propriétés  suivantes :

```js
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2
```

Le constructeur est plus flexible. Il est maintenant possible de définir  les propriétés de chaque `Bird` au moment de sa création, ce qui est une des façons dont les constructeurs JavaScript sont si utiles. Ils  regroupent les objets en fonction de caractéristiques et de  comportements partagés et définissent un plan qui automatise leur  création.

-----

Créez un autre constructeur `Dog`. Cette fois, configurez-le pour prendre `name` et `color` des paramètres, et fixez la propriété `numLegs` à 4. Ensuite, créez un nouveau `Dog` enregistré dans une variable `terrier`. Passez-lui deux chaînes comme arguments pour  les propriétés `name` et `color`.

> `Dog` devrait recevoir un argument pour `name`.
> `Dog` devrait recevoir un argument pour `color`.
> `Dog` doit avoir la propriété `numLegs` définie sur `4`.
> `terrier` doit être créé à l'aide du constructeur `Dog`.

```js
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Bouh", "white");

console.log(terrier.name); // Bouh
console.log(terrier.color); // white
console.log(terrier.numLegs); // 4
```

------



## 8. Vérifier le constructeur d'un objet avec `instanceof`

[Learn Object Oriented Programming: Verify an Object's Constructor with instanceof | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/verify-an-objects-constructor-with-instanceof)

Chaque fois qu'une fonction constructeur crée un nouvel objet, cet objet est  considéré comme une *instance* de son constructeur. JavaScript offre un  moyen pratique de vérifier cela avec l'opérateur `instanceof`. `instanceof` vous permet de comparer un objet à un constructeur, retournant `true` ou `false` selon que l'objet a été créé ou non avec le constructeur. Voici un  exemple :

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```

Si un objet est créé sans utiliser de constructeur, `instanceof` vérifiera qu'il ne s'agit pas d'une instance de ce constructeur :

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false
```

------

Créez une nouvelle instance du constructeur `House`, en l'appelant `myHouse` et  en passant un certain nombre de chambres. Ensuite, utilisez `instanceof` pour vérifier qu'il s'agit d'une instance de `House`.

> `myHouse` doit avoir un attribut `numBedrooms` défini sur un nombre.
> Vous devez vérifier que `myHouse` est une instance de `House` à l'aide de l'opérateur `instanceof`.

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Changer uniquement le code en dessous de cette ligne
let myHouse = new House(4);
myHouse instanceof House;
console.log(myHouse instanceof House); // true
```

-----



## 9. Comprendre ses propres propriétés (`hasOwnProperty`)

[Learn Object Oriented Programming: Understand Own Properties | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties)

Dans l'exemple suivant, le constructeur `Bird` définit deux propriétés : `name` et `numLegs` :

```js
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` et `numLegs` sont appelés propriétés `own`, car ils sont définis  directement sur l'objet d'instance. Cela signifie que `duck` et `canary` ont chacun leur propre copie de ces propriétés. En fait, chaque  instance de `Bird` aura sa propre copie de ces propriétés. Le code suivant ajoute toutes les propriétés `own` de `duck` au tableau `ownProps` :

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
```

-----

Ajoutez les propriétés `own` de `canary` au tableau `ownProps`.

> `ownProps` doit inclure les valeurs `"numLegs"` et `"name"`.
> Vous devez résoudre ce problème sans utiliser la méthode intégrée `Object.keys()`.
> Vous devez résoudre ce problème sans coder en dur le tableau `ownProps`.

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Changer uniquement le code en dessous de cette ligne
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); // [ 'name', 'numLegs' ]
```

[solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-understand-own-properties/301326)

-----



## 10. Utilisez les propriétés `prototype` pour réduire le code en double

[Learn Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code)

Puisque `numLegs` aura probablement la même valeur pour toutes les instances de `Bird`, vous avez essentiellement une variable `numLegs` dupliquée dans chaque instance de `Bird`.
Cela peut ne pas être un  problème lorsqu'il n'y a que deux instances, mais imaginez s'il y a des  millions d'instances. Ce serait beaucoup de variables dupliquées.
Une meilleure façon est d’utiliser le `prototype` de `Bird`. Les propriétés du `prototype` sont partagées entre TOUTES les instances de `Bird`. Voici  comment ajouter des `numLegs` au `Bird prototype` :

```js
Bird.prototype.numLegs = 2;
```

Désormais, toutes les instances de `Bird` ont la propriété `numLegs`.

```js
console.log (duck.numLegs); // imprime 2
console.log (canary.numLegs); // imprime 2
```

Puisque toutes les instances ont automatiquement les propriétés du `prototype`,  considérez un `prototype` comme une « recette » pour créer des objets. Notez que le `prototype` pour `duck` et `canary` fait partie du  constructeur `Bird` sous le nom `Bird.prototype`. Presque chaque objet en  JavaScript a une propriété `prototype` qui fait partie de la fonction constructeur qui l'a créé.

-----

Ajouter une propriété `numLegs` au `prototype` de `Dog`.

> `beagle` doit avoir une propriété `numLegs`.
> `beagle.numLegs` doit être un nombre.
> `numLegs` doit être une propriété `prototype` et non une propriété `own`.

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
// Changer uniquement le code au-dessus de cette ligne
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs); // 4
```

------



## 11. Itérer sur toutes les propriétés

[Learn Object Oriented Programming: Iterate Over All Properties | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties)

Vous avez maintenant vu deux types de propriétés : les propriétés `own` et les propriétés `prototype`. Les propriétés `own` sont définies  directement sur l'instance d'objet elle-même. Et les propriétés `prototype` sont définies sur le `prototype`.

```js
function Bird (name) {
  this.name = name; // propriété own
}

Bird.prototype.numLegs = 2; // propriété prototype

let duck = new Bird ('Donald');
```

Voici comment ajouter les propriétés `own` de `duck` au tableau `ownProps` et les propriétés `prototype` au tableau `prototypeProps` :

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // imprime ['name']
console.log(prototypeProps); // imprime ['numLegs']
```

-----

Ajoutez toutes les propriétés `own` de `beagle` au tableau `ownProps`. Ajoutez toutes les propriétés `prototype` de `Dog` au tableau `prototypeProps`.

> Le tableau `ownProps` doit inclure `"name"`.
> Le tableau `prototypeProps` doit inclure `"numLegs"`.
> Vous devez résoudre ce problème sans utiliser la méthode intégrée `Object.keys()`.

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Changer uniquement le code en dessous de cette ligne
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps); // [ 'name' ]
console.log(prototypeProps); // [ 'numLegs' ]
```

-----



## 12. Comprendre la propriété `constructor`

[Learn Object Oriented Programming: Understand the Constructor Property | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property)

Il existe une propriété spéciale de `constructor` située sur les instances d'objet `duck` et `beagle` créées dans les défis précédents :

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); // imprime true
console.log(beagle.constructor === Dog); // imprime true
```

Notez que la propriété `constructor` est une référence à la fonction constructeur qui a créé l'instance. L'avantage de la propriété `constructor` est qu'il est possible de vérifier cette propriété pour savoir de quel type d'objet il s'agit. Voici un exemple de la façon dont cela pourrait être utilisé :

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**Remarque :** Étant donné que la propriété `constructor` peut être écrasée (ce qui sera couvert dans les deux prochains défis), il est généralement préférable  d'utiliser la méthode `instanceof` pour vérifier le type d'un objet.

-----

Écrivez une fonction `joinDogFraternity` qui prend un paramètre `candidate` et, à  l'aide de la propriété `constructor`, renvoie `true` si `candidate` est `dog`, sinon renvoie `false`.

> `joinDogFraternity` doit être défini comme une fonction.
> `joinDogFraternity` doit renvoyer `true` si `candidat` est une instance de `Dog`.
> `joinDogFraternity` doit utiliser la propriété `constructor`.

```js
function Dog(name) {
  this.name = name;
}
// Changer uniquement le code en dessous de cette ligne
let candidate = new Dog();
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

console.log(joinDogFraternity(candidate)); // true
```

-----



## 13. Changer le prototype en nouvel objet

[Learn Object Oriented Programming: Change the Prototype to a New Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object)

Jusqu'à présent, vous ajoutiez individuellement des propriétés au `prototype` :

```js
Bird.prototype.numLegs = 2;
```

Cela devient fastidieux après plus de quelques propriétés.

```js
Bird.prototype.eat = function () {
  console.log('nom nom nom');
}

Bird.prototype.describe = function () {
  console.log('Mon nom est ' + this.name);
}
```

Un moyen plus efficace consiste à définir le `prototype` sur un nouvel objet contenant déjà les propriétés. De cette façon, les propriétés sont  ajoutées en une seule fois :

```js
Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log('nom nom nom');
  },
  describe: function() {
    console.log('Mon nom est ' + this.name);
  }
};
```

-----

Ajoutez la propriété `numLegs` et les deux méthodes `eat()` et `describe()` au `prototype` de `Dog` en définissant le `prototype` sur un nouvel objet.

> `Dog.prototype` doit être défini sur un nouvel objet.
> `Dog.prototype` doit avoir la propriété `numLegs`.
> `Dog.prototype` doit avoir la méthode `eat()`.
> `Dog.prototype` doit avoir la méthode `describe()`.

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
// Changer uniquement le code en dessous de cette ligne
  numLegs: 2,
  eat: function() {
    console.log('chicken');
  },
  describe: function() {
    console.log('My name is ' + this.name);
  }
};
```

-----



## 14. N'oubliez pas de définir la propriété du `constructor` lors de la modification du `prototype`

[Learn Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/remember-to-set-the-constructor-property-when-changing-the-prototype)

Il existe un effet secondaire crucial de la définition manuelle du  prototype sur un nouvel objet. Il efface la propriété du `constructor` !  Cette propriété peut être utilisée pour vérifier quelle fonction `constructor` a créé l'instance, mais comme la propriété a été écrasée,  elle donne désormais de faux résultats :

```js
duck.constructor === Bird; // false - Oups
duck.constructor === Objet; // true, tous les objets héritent de Object.prototype
duck instanceof Bird; // true, fonctionne toujours
```

Pour résoudre ce problème, chaque fois qu'un prototype est défini manuellement sur un nouvel objet, n'oubliez pas de définir la propriété `constructor` :

```js
Bird.prototype = {
  constructor: Bird, // définir la propriété du constructeur
  numLegs: 2,
  manger: function() {
    console.log('nom nom nom');
  },
  describe: function() {
    console.log('Mon nom est' + this.name);
  }
};
```

-----

Définissez la propriété `constructor` sur le `prototype` `Dog`.

> `Dog.prototype` doit définir la propriété `constructor`.

```js
function Dog(name) {
  this.name = name;
}
// Changer uniquement le code en dessous de cette ligne
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

-----



## 15. Comprendre d’où vient le prototype d’un objet (`isPrototypeOf`)

[Learn Object Oriented Programming: Understand Where an Object’s Prototype Comes From | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from)

Tout comme les gens héritent des gènes de leurs parents, un objet hérite de son `prototype` directement de la fonction `constructor` qui l'a créé.  Par exemple, ici, le `constructor` `Bird` crée l'objet `duck` :

```js
function Bird(name) {
  this.name = name;
}
let duck = new Bird ('Donald');
```

`duck` hérite de son `prototype` de la fonction `constructor` `Bird`. Vous pouvez  afficher cette relation avec la méthode `isPrototypeOf` :

```js
Bird.prototype.isPrototypeOf(duck);
// renvoie true
```

-----

Utilisez `isPrototypeOf` pour vérifier le `prototype` de `beagle`.

> Vous devez montrer que `Dog.prototype` est le `prototype` de `beagle`.

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
// Changer uniquement le code en dessous de cette ligne
Dog.prototype.isPrototypeOf(beagle);

console.log(Dog.prototype.isPrototypeOf(beagle)); // true
```

-----



## 16. Comprendre la chaîne de prototype

[Learn Object Oriented Programming: Understand the Prototype Chain | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-prototype-chain)

Tous les objets en JavaScript (à quelques exceptions près) ont un `prototype`. De plus, le `prototype` d’un objet lui-même est un objet.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // donne 'objet'
```

Parce qu'un `prototype` est un objet, un `prototype` peut avoir son propre `prototype` ! Dans ce cas, le `prototype` de `Bird.prototype` est `Object.prototype` :

```js
Object.prototype.isPrototypeOf(Bird.prototype); // renvoie true
```

En quoi est-ce utile ? Vous pouvez vous rappeler la méthode `hasOwnProperty` d'un défi précédent :

```js
let duck = new Bird('Donald');
duck.hasOwnProperty('name'); // donne true
```

La méthode `hasOwnProperty` est définie dans `Object.prototype`, qui est  accessible par `Bird.prototype`, qui est ensuite accessible par `duck`.  Ceci est un exemple de la chaîne de `prototype`. Dans cette chaîne de `prototype`, `Bird` est le `supertype` pour `duck`, tandis que `duck` est le `subtype`. `objet` est un `supertype` pour `Bird` et `duck`. `object` est un `supertype` pour tous les objets en JavaScript. Par conséquent, tout objet peut utiliser la méthode `hasOwnProperty`.

-----

Modifiez le code pour afficher la chaîne de prototype correcte.

> Votre code doit montrer que `Object.prototype` est le `prototype` de `Dog.prototype`.

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // donne true
// Corrigez le code ci-dessous pour qu'il soit évalué à true
???.isPrototypeOf(Dog.prototype);
```

```js
Object.prototype.isPrototypeOf(Dog.prototype);
console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // true
```

-----



## 17. Utilisez l'héritage pour ne pas vous répéter

[Learn Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-inheritance-so-you-dont-repeat-yourself)

Il y a un principe dans la programmation appelé *Don't Repeat Yourself (DRY)*. La raison pour laquelle le code répété est un problème est que toute modification nécessite de corriger le code à plusieurs endroits.  Cela signifie généralement plus de travail pour les programmeurs et plus de place pour les erreurs.
Notez dans l'exemple ci-dessous que la méthode `describe` est partagée par `Bird` and `Dog` :

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

La méthode `describe` est répétée à deux endroits. Le code peut être  édité pour suivre le principe DRY en créant un `supertype` (ou parent) appelé `Animal` :

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Puisque `Animal` inclut la méthode `describe`, vous pouvez la supprimer de `Bird` and `Dog` :

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

-----

La méthode `eat` est répétée à la fois chez `Cat` et `Bear`. Modifiez le code dans l'esprit de DRY en déplaçant la méthode `eat` vers le `supertype` `Animal`.

> `Animal.prototype` doit avoir la propriété `eat`.
> `Bear.prototype` ne doit pas avoir la propriété `eat`.
> `Cat.prototype` ne doit pas avoir la propriété `eat`.

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```

-----



## 18. Hériter des comportements d'un supertype (`Object.create(obj)`)

[Learn Object Oriented Programming: Inherit Behaviors from a Supertype | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype)

Dans le défi précédent, vous avez créé un `supertype` appelé `Animal` qui définissait les comportements partagés par tous les animaux :

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log('nom nom nom');
};
```

Ce défi et le prochain couvriront comment réutiliser les méthodes d'`Animal` dans `Bird` and `Dog` sans les redéfinir. Il utilise une technique appelée héritage. Ce défi couvre la première étape : créer une instance du `supertype` (ou parent). Vous connaissez déjà un moyen de créer une  instance `Animal` à l'aide du opérateur `new` :

```js
let animal = new animal();
```

Il existe certains inconvénients lors de l'utilisation de cette syntaxe  pour l'héritage, qui sont trop complexes pour la portée de ce défi. Au  lieu de cela, voici une approche alternative sans ces inconvénients :

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` crée un nouvel objet et définit `obj` comme `prototype` du nouvel  objet. Rappelez-vous que le `prototype` est comme la « recette » pour créer  un objet. En définissant le `prototype` de `animal` comme `prototype d'Animal`, vous donnez effectivement à l'instance `animal` la même  « recette » que toute autre instance `Animal`.

```js
animal.eat(); // imprime 'nom nom nom'
animal instanceof Animal; // => true
```

-----

Utilisez `Object.create` pour créer deux instances `Animal` nommées `duck` et `beagle`.

> La variable `duck` doit être définie.
> La variable `beagle` doit être définie.
> La variable `duck` doit être initialisée avec `Object.create`.
> La variable `beagle` doit être initialisée avec `Object.create`.
> `duck` devrait avoir un `prototype` de `Animal`.
> `beagle` devrait avoir un `prototype` de `Animal`.

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
// Changer uniquement le code en dessous de cette ligne
let duck; // Changer cette ligne
let beagle; // Changer cette ligne
```

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
```

-----



## 19. Définir le prototype de l'enfant sur une instance du parent

[Learn Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent)

Dans le défi précédent, vous avez vu la première étape pour hériter du  comportement du `supertype` (ou parent) `Animal` : créer une nouvelle  instance de `Animal`.
Ce défi couvre l'étape suivante : définir le `prototype` du sous-type (ou enfant) - dans ce cas, `Bird` - comme une  instance de `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

N'oubliez pas que le `prototype` est comme la « recette » pour créer un objet. D'une  certaine manière, la recette de `Bird` comprend désormais tous les  « ingrédients » clés de `Animal`.

```js
let duck = new Bird('Donald');
duck.eat(); // imprime 'nom nom nom'
```

`duxk` hérite de toutes les propriétés de `Animal`, y compris la méthode `eat`.

------

Modifiez le code pour que les instances de `Dog` héritent de `Animal`.

> `Dog.prototype` doit être une instance de `Animal`.

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { }
// Changer uniquement le code en dessous de cette ligne
let beagle = new Dog();
```

```js
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog("Snoopy");

beagle.eat(); // nom nom nom
```

-----



## 20. Réinitialiser une propriété de constructeur héritée

[Learn Object Oriented Programming: Reset an Inherited Constructor Property | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property)

Lorsqu'un objet hérite de son `prototype` d'un autre objet, il hérite également de la propriété constructeur du supertype.
Voici un exemple :

```js
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // fonction Animal () {...}
```

Mais `duck` et toutes les instances de `Bird` doivent montrer qu'ils ont  été construits par `Bird` et non par `Animal`. Pour ce faire, vous pouvez  définir manuellement la propriété constructeur de `Bird` sur l'objet `Bird` :

```js
Bird.prototype.constructor = Bird;
duck.constructor // fonction Bird () {...}
```

-----

Corrigez le code pour que `duck.constructor` et `beagle.constructor` renvoient leurs constructeurs respectifs.

> `Bird.prototype` doit être une instance de `Animal`.
> `duck.constructor` devrait retourner `Bird`.
> `Dog.prototype` doit être une instance de `Animal`.
> `beagle.constructor` doit renvoyer `Dog`.

```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Changer uniquement le code en dessous de cette ligne
let duck = new Bird();
let beagle = new Dog();
```

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor); // [Function: Animal]
console.log(beagle.constructor); // [Function: Animal]

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

console.log(duck.constructor); //[Function: Bird]
console.log(beagle.constructor); // [Function: Dog]
```

-----



## 21. Ajouter des méthodes après l'héritage

[Learn Object Oriented Programming: Add Methods After Inheritance | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance)

Une fonction constructeur qui hérite de son objet `prototype` d'une  fonction constructeur de supertype peut toujours avoir ses propres  méthodes en plus des méthodes héritées.
Par exemple, `Bird` est un constructeur qui hérite de son prototype de `Animal` :

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

En plus de ce qui est hérité de `Animal`, vous souhaitez ajouter un  comportement propre aux objets `Bird`. Ici, `Bird` obtiendra une fonction `fly()`. Les fonctions sont ajoutées au `prototype` de `Bird` de la même  manière que toute fonction constructeur :

```js
Bird.prototype.fly = function() {
  console.log('Je vole!');
};
```

Désormais, les instances de `Bird` auront à la fois les méthodes `eat()` et `fly()` :

```js
let duck = new Bird();
duck.eat(); // imprime 'nom nom nom'
duck.fly(); // affiche 'Je vole!'
```

-----

Ajoutez tout le code nécessaire pour que l'objet `Dog` hérite de `Animal` et que le constructeur du `prototype` `Dog` soit défini sur `Dog`. Ajoutez ensuite une  méthode  `bark()` à l'objet `Dog` afin que `beagle` puisse à la fois `eat()` et `bark()`. La méthode `bark()` devrait afficher `'Woof!'` à la console.

> `Animal` ne doit pas répondre à la méthode `bark()`.
> `Dog` doit hériter de la méthode `eat()` de `Animal`.
> `Dog` devrait avoir la méthode `bark()` comme propriété `own`.
> `beagle` doit être une `instanceof` `Animal`.
> Le constructeur de `beagle` doit être défini sur `Dog`.
> `beagle.eat()` devrait enregistrer `'nom nom nom'`.
> `beagle.bark()` devrait enregistrer `'Woof!'`.

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
let beagle = new Dog();
```

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log('Woof!');
};
let beagle = new Dog();

beagle.eat(); // nom nom nom
beagle.bark(); // Woof!
```

[solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-add-methods-after-inheritance/301315)

-----



## 22. Remplacer les méthodes héritées

[Learn Object Oriented Programming: Override Inherited Methods | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/override-inherited-methods)

Dans les leçons précédentes, vous avez appris qu'un objet peut hériter de son comportement (méthodes) d'un autre objet en référençant son objet `prototype` :

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Puis le `ChildObject` a reçu ses propres méthodes en les chaînant sur son `prototype` :

```js
ChildObject.prototype.methodName = function() {...};
```

Il est possible de remplacer une méthode héritée. C'est fait de la même manière - en ajoutant une méthode à `ChildObject.prototype` en utilisant  le même nom de méthode que celui à remplacer. Voici un exemple de `Bird` écrasant la méthode `eat()` héritée de `Animal` :

```js
function Animal() { }
Animal.prototype.eat = function () {
  return "nom nom nom";
};
function Bird() { }

// Hérite de toutes les méthodes de Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() remplace Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

Si vous avez une instance, `let duck = new Bird();` et vous appelez `duck.eat()`, voici comment JavaScript recherche la méthode sur la chaîne de `prototype` de `duck` :

1. duck => Est-ce que eat() est défini ici ? Non.
2. Bird => Est-ce que eat() est défini ici ? => Oui. Exécutez-le et arrêtez la recherche.
3. Animal => eat() est également défini, mais JavaScript a arrêté la recherche avant d'atteindre ce niveau.
4. Object => JavaScript a arrêté la recherche avant d'atteindre ce niveau.

------

Remplacez la méthode `fly()` pour `Penguin` afin qu'elle renvoie "Alas, this is a flightless bird."

> `penguin.fly()` doit renvoyer la chaîne "Alas, this is a flightless bird."
> La méthode `bird.fly()` doit renvoyer "I am flying!"

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
let penguin = new Penguin();
console.log(penguin.fly());
```

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };
let penguin = new Penguin();
console.log(penguin.fly()); // Alas, this is a flightless bird.
console.log(Bird.prototype.fly()); // I am flying!
```

------



## 23. Utiliser un `mixin` pour ajouter un comportement commun entre des objets non liés

[Learn Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects)

Comme vous l'avez vu, le comportement est partagé par héritage. Cependant, il existe des cas où l'héritage n'est pas la meilleure solution. L'héritage ne fonctionne pas bien pour les objets non liés  tels que `Bird` et `Airplane`. Ils peuvent tous les deux voler, mais un `Bird` n'est pas un type de `Airplane` et vice versa.
Pour les objets  non liés, il est préférable d'utiliser des *mixins*. Un mixin permet à  d'autres objets d'utiliser une collection de fonctions.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log('Flying, wooosh!');
  }
};
```

Le `flyMixin` prend n'importe quel objet et lui donne la méthode `fly`.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

Ici, `bird` et `plane` sont passés dans `flyMixin`, qui attribue ensuite la  fonction `fly` à chaque objet. Maintenant, `bird` et `plane` peuvent  voler:

```js
bird.fly(); // imprime 'Flying, wooosh!'
plane.fly(); // imprime 'Flying, wooosh!'
```

Notez comment le mixin permet à la même méthode `fly` d'être réutilisée par des objets sans rapport avec `bird` et `plane`.

------

Créez un mixin nommé `glideMixin` qui définit une méthode nommée `glide`.  Ensuite, utilisez le `glideMixin` pour donner à `bird` et `boat` la  capacité de planer.

> Votre code doit déclarer une variable `glideMixin` qui est une fonction.
> Votre code doit utiliser le `glideMixin` sur l'objet `bird` pour lui donner la méthode `glide`.
> Votre code doit utiliser le `glideMixin` sur l'objet `boat` pour lui donner la méthode `glide`.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
// Changer uniquement le code en dessous de cette ligne
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log('Gliding, wooosh!');
  }
};
glideMixin(bird);
glideMixin(boat);

bird.glide(); // Gliding, wooosh!
boat.glide(); // Gliding, wooosh!
```

-----



## 24. Utiliser `closure` pour protéger les propriétés d'un objet contre toute modification externe

[Learn Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally)

Dans le défi précédent, `bird` avait une propriété `name` publique. Il  est considéré comme public car il peut être consulté et modifié en  dehors de la définition de `bird`.

```js
bird.name = "Duffy";
```

Par conséquent, n'importe quelle partie de votre code peut facilement  changer le nom de `bird` en n'importe quelle valeur. Pensez à des  choses comme les mots de passe et les comptes bancaires qui peuvent être facilement modifiés par n'importe quelle partie de votre base de code.  Cela pourrait causer de nombreux problèmes.
Le moyen le plus  simple de rendre cette propriété publique privée consiste à créer une  variable dans la fonction constructeur. Cela modifie la portée de cette  variable pour qu'elle soit dans la fonction constructeur contre la disponibilité globale. De cette façon, la variable ne peut être accédée et modifiée que par des méthodes également dans la fonction  constructeur.

```js
function Bird() {
  let hatchedEgg = 10; // variable privée

  /* méthode accessible au public qu'un objet bird peut utiliser */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // renvoie 10
```

Ici, `getHatchedEggCount` est une méthode privilégiée, car elle a accès à la variable privée `hatchedEgg`. Cela est possible car `hatchedEgg` est déclaré dans le même contexte que `getHatchedEggCount`. En JavaScript, une  fonction a toujours accès au contexte dans lequel elle a été créée.  C'est ce qu'on appelle `closure`.

-----

Modifiez la façon dont `weight` est déclaré dans la fonction `Bird` afin qu'il s'agisse d'une variable privée. Ensuite, créez une méthode `getWeight` qui renvoie la valeur 15 de `weight`.

> La propriété `weight` doit être une variable privée et doit avoir la valeur `15`.
> Votre code doit créer une méthode dans `Bird` appelée `getWeight` qui renvoie la valeur de la variable privée `weight`.
> Votre fonction `getWeight` doit renvoyer la variable privée `weight`.

```js
function Bird() {
  this.weight = 15;
}
```

```js
function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}

let ducky = new Bird();
console.log(ducky.getWeight()); // 15
```

-----



## 25. Comprendre l'expression de fonction immédiatement appelée (Immediately Invoked Function Expression - IIFE)

[Learn Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE) | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife)

Un modèle courant en JavaScript consiste à exécuter une fonction dès qu'elle est déclarée :

```js
(fonction() {
  console.log('Chirp, chirp!');
})(); // c'est une expression de fonction anonyme qui s'exécute tout de suite
// Sort 'Chirp, chirp!' immédiatement
```

Notez que la fonction n'a pas de nom et n'est pas stockée dans une variable.  Les deux parenthèses () à la fin de l'expression de la fonction  provoquent son exécution ou son appel immédiat. Ce modèle est appelé *expression de fonction immédiatement appelée ou  immediately invoked function expression IIFE*.

-----

Réécrivez  la fonction `makeNest` et supprimez son appel afin qu'il s'agisse plutôt  d'une expression de fonction anonyme immédiatement invoquée (IIFE).

> La fonction doit être anonyme.
> Votre fonction doit avoir des parenthèses à la fin de l'expression pour l'appeler immédiatement.

```js
function makeNest() {
  console.log("A cozy nest is ready");
}
makeNest(); // A cozy nest is ready
```

```js
(function () {
  console.log("A cozy nest is ready");
})();
// A cozy nest is ready
```

-----



## 26. Utiliser un IIFE pour créer un module

[Learn Object Oriented Programming: Use an IIFE to Create a Module | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module)

Une expression de fonction immédiatement invoquée (IIFE) est souvent  utilisée pour regrouper les fonctionnalités associées en un seul objet  ou *module*. Par exemple, un défi précédent définissait deux mixins :

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

Nous pouvons regrouper ces mixins dans un module comme suit :

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // Les deux parenthèses provoquent l'appel immédiat de la fonction
```

Notez que vous disposez d'une expression de fonction immédiatement appelée  (IIFE) qui renvoie un objet `motionModule`. Cet objet retourné contient  tous les comportements de mixin en tant que propriétés de l'objet.  L'avantage du modèle de module est que tous les comportements de  mouvement peuvent être regroupés dans un seul objet qui peut ensuite  être utilisé par d'autres parties de votre code. Voici un exemple de son utilisation :

```js
motionModule.glideMixin(duck);
duck.glide();
```

-----

Créez un module nommé `funModule` pour envelopper les deux mixins `isCuteMixin` et `singMixin`. `funModule` doit renvoyer un objet.

> `funModule` doit être défini et renvoyer un objet.
> `funModule.isCuteMixin` doit accéder à une fonction.
> `funModule.singMixin` doit accéder à une fonction.

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

```js
let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
```

