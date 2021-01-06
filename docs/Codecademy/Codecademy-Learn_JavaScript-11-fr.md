---
id: Codecademy-Learn_JavaScript-11-fr
title: Modules JavaScript intermédiaires
---

Apprenez à utiliser les modules JavaScript, un moyen de créer une logique réutilisable dans vos programmes.

## 01. Bonjour les modules

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/hello-modules)

Les *modules* JavaScript sont des morceaux de  code réutilisables qui peuvent être exportés à partir d'un programme et  importés pour être utilisés dans un autre programme.
Les modules  sont particulièrement utiles pour un certain nombre de raisons. En  séparant le code avec une logique similaire en fichiers appelés modules, nous pouvons :

- trouver, corriger et déboguer le code plus facilement ;
- réutiliser et recycler la logique définie dans différentes parties de notre application ;
- garder les informations privées et protégées des autres modules ;
- et, surtout, éviter la pollution de l'espace de noms global et les  éventuelles collisions de dénomination, en sélectionnant prudemment les  variables et le comportement que nous chargeons dans un programme.

Dans cette leçon, nous aborderons deux manières d'implémenter des modules en JavaScript : les syntaxes `module.exports` et `require()` de [Node.js’s](https://nodejs.org/fr/about/), ainsi que la syntaxe d'import / export ES6.

**Instructions**

Une fois que vous avez l'impression d'avoir une compréhension de haut niveau des modules, passez à l'exercice suivant.

-----



## 02. module.exports

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/module-exports)

Nous pouvons commencer avec les modules en définissant un module dans un  fichier et en rendant le module disponible pour une utilisation dans un  autre fichier avec la syntaxe Node.js `module.exports`. Chaque fichier JavaScript exécuté dans Node a un objet `module` local avec une propriété `exports` utilisée pour définir ce qui doit être exporté à partir du  fichier.
Voici un exemple de la façon de définir un module et de l'exporter à l'aide de l'instruction `module.exports`.
Dans **menu.js**, nous écrivons :

```js
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;
```

Voyons ce que signifie ce code.

1. `let Menu = {};` crée  l'objet qui représente le module `Menu`. L'instruction contient une  variable en majuscule nommée `Menu` qui est définie comme égale à un objet vide.
2. `Menu.specialty` est défini comme une propriété du module `Menu`. Nous ajoutons des données à l'objet `Menu` en définissant des  propriétés sur cet objet et en attribuant une valeur aux propriétés.
3. `"Roasted Beet Burger with Mint Sauce";` est la valeur stockée dans la propriété `Menu.specialty`.
4. `module.exports = Menu;` exporte l'objet `Menu` en tant que module. `module` est une variable qui représente le module et les `exports` expose le module en tant qu'objet.

Le modèle que nous utilisons pour exporter les modules est donc :

1. Créez un objet pour représenter le module.
2. Ajoutez des propriétés ou des méthodes à l'objet module.
3. Exportez le module avec `module.exports`.

Créons notre premier module.

**Instructions**

**1.** Commençons par implémenter le modèle ci-dessus dans un exemple. Dans **1-airplane.js**, créez un objet nommé `Airplane`.

**2.** Dans le même fichier, ajoutez une propriété à l'objet `Airplane` nommé `myAirplane` et définissez-la sur `"StarJet"`.

**3.** Exportez le module.

```js
// 1-airplane.js
let Airplane = {};
Airplane.myAirplane = "StarJet";
module.exports = Airplane;
```

-----



## 03. require()

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/require)

Pour utiliser le module exporté et le comportement que nous définissons  en son sein, nous importons le module dans un autre fichier. Dans Node.js, utilisez la fonction `require()` pour importer des modules.
Par exemple, disons que nous voulons que le module contrôle les données et  le comportement du menu, et que nous voulons un fichier séparé pour  gérer la commande. Nous créerions un fichier séparé **order.js** et importer le module `Menu` de **menu.js** vers **order.js** en utilisant `require()`. `require()` prend un argument de chemin de fichier pointant vers le  fichier du module d'origine.
Dans **order.js**, nous écririons :

```js
const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();
```

Nous avons maintenant tout le comportement de `Menu` disponible dans **order.js**. Ici, on remarque :

1. Dans **order.js**, nous importons le module en créant une variable `const` appelée `Menu` et en la définissant égale à la valeur de la fonction  `require()`. Nous pouvons définir le nom de cette variable sur tout ce  que nous voulons, comme `menuItems`.
2. `require()` est une fonction JavaScript qui charge un module. L’argument est le chemin du fichier du  module : `./menu.js`. Avec `require()`, l'extension `.js` est facultative et sera utilisée si elle n'est pas incluse.
3. La fonction `placeOrder()` utilise alors le module `Menu`. En appelant `Menu.specialty`, nous  accédons à la propriété `specialty` définie dans le module `Menu`.

En y regardant de plus près, le modèle pour importer un module est :

1. Importez le module avec `require()` et affectez-le à une variable locale.
2. Utilisez le module et ses propriétés dans un programme.

**Instructions**

**1.** Dans **1-missionControl.js**, utilisez la fonction `require()` pour importer le module `Airplane` depuis **1-plane.js**.
Rappelez-vous que vous devrez utiliser le nom précis du fichier contenant le module.

**2.** Dans **1-missionControl.js**, définissez une fonction `displayAirplane()`. Dans  la fonction, enregistrez la valeur du module et sa propriété dans la  console.

**3. **Appelez la fonction `displayAirplane()`. Dans la  console, vous devriez voir le nom de l'avion que vous avez défini dans  le module.

```js
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
};

displayAirplane(); // StarJet
```

-----



## 04. module.exports II

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/module-exports-ii)

Nous pouvons également envelopper n'importe quelle collection de données et de fonctions dans un objet et exporter l'objet à l'aide de  `module.exports`. Dans **menu.js**, nous pourrions écrire :

```js
module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
};
```

Dans le code ci-dessus, notez :

1. `module.exports` expose le module actuel en tant qu'objet.
2. `specialty` et `getSpecialty` sont des propriétés de l'objet.

Ensuite, dans **order.js**, nous écrivons :

```js
const Menu = require('./menu.js');

console.log(Menu.getSpecialty());
```

Ici, nous pouvons toujours accéder au comportement dans le module `Menu`.

**Instructions**

**1. **Dans **2-plane.js**, définissez `module.exports` égal à un objet vide.

**2. **Dans l'objet, créez une clé appelée `myAirplane` et définissez-la sur une valeur `"CloudJet"`.

**3. **Encore une fois, dans `module.exports`, créez une autre clé `displayAirplane` et  définissez-la sur une fonction anonyme. La fonction doit utiliser l'instruction `this` pour renvoyer `myAirplane`.

**4. **Dans **2-missionControl.js**, utilisez la fonction `require()` pour importer le module `Airplane`.

**5.** Dans **2-missionControl.js**, enregistrez le résultat de l'appel de  `.displayAirplane()` sur la console, en notant qu'il s'agit d'une méthode de l'objet `Airplane`.

```js
// 2-plane.js
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};
```

```js
// 2-missionControl.js
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane()); // CloudJet
```

-----



## 05. export default

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/export-default)

Node.js prend en charge `require()` / `module.exports`, mais depuis ES6, JavaScript prend en charge une nouvelle syntaxe plus lisible et plus  flexible pour l'exportation de modules. Celles-ci sont généralement divisées en deux techniques, l'exportation par défaut (*default export*) et les exportations nommées (*named exports*).
Nous allons commencer par la première syntaxe, l'exportation par défaut. La syntaxe d'exportation par défaut  fonctionne de la même manière que la syntaxe `module.exports`, ce qui nous permet d'exporter un module par fichier.
Prenons un exemple dans **menu.js**.

```js
let Menu = {};

export default Menu;
```

1. `export default` utilise l'instruction JavaScript `export` pour exporter des objets JavaScript, des fonctions et des types de données  primitifs.
2. `Menu` fait référence au nom de l'objet `Menu`, l'objet dont nous définissons les propriétés dans nos modules.

Lors de l'utilisation de la syntaxe ES6, nous utilisons `export default` à la place de `module.exports`. Node.js ne prend pas en charge `export default` par défaut, donc `module.exports` est  généralement utilisé pour le développement Node.js et la syntaxe ES6 est utilisée pour le développement front-end. Comme avec la plupart des  fonctionnalités ES6, il est courant de transpiler du code car ES6 n'est  pas pris en charge par tous les navigateurs.

**Instructions**

**1.** Dans **airplane.js**, créons à nouveau un module `Airplane` à partir de zéro, cette fois en exportant le module avec `export default`. Créez un objet  pour représenter le module appelé `Airplane`.

**2. **Maintenant que  nous avons un objet `Airplane`, nous pouvons continuer en ajoutant des  données sous forme de propriétés et de valeurs au module `Airplane`.
Créez une variable `availableAirplanes` et définissez-la sur un tableau vide.  Assurez-vous que `availableAirplanes` est une propriété de l'objet `Airplane`.

**3.** Dans le tableau `availableAirplanes`, ajoutez deux éléments de tableau qui sont tous deux de type objet.
Le premier objet doit contenir une propriété `name` avec une valeur `'AeroJet'` et une propriété `fuelCapacity` avec une valeur de `800`.
Le deuxième objet doit avoir une propriété `name` avec une valeur de `'SkyJet'` et une propriété `fuelCapacity` avec une valeur de `500`.

**4.** Utilisez `export default` pour exporter `Airplane module`.
Bon travail ! Nous avons ajouté une propriété qui répertorie `availableAirplanes` dans le module `Airplane`.

```js
// airplane.js
let Airplane = {
  availableAirplanes: [
    {
      name: 'AeroJet',
      fuelCapacity: 800
    },
    {
      name: 'SkyJet',
      fuelCapacity: 500
    }
  ]
};
export default Airplane;
```

-----



## 06. import

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/import)

La syntaxe du module ES6 introduit également le mot-clé `import` pour l'importation d'objets. Dans notre exemple **order.js**, nous importons un  objet comme celui-ci :

```js
import Menu from './menu';
```

1. Le mot-clé `import` commence l'instruction.
2. Le mot-clé `Menu` spécifie ici le nom de la variable dans laquelle stocker l'exportation par défaut.
3. `from` spécifie où charger le module.
4. `'./menu'` est le nom du module à charger. Lorsqu'il s'agit de  fichiers locaux, il fait spécifiquement référence au nom du fichier sans l'extension du fichier.

Nous pouvons ensuite continuer à utiliser le module `Menu` dans le fichier **order.js**.

**Instructions**

**1.** Dans **missionControl.js**, nous utiliserons le module `Airplane` pour afficher la capacité en carburant de nos deux avions.
Utilisez le mot-clé `import` pour importer le module `Airplane`.

**2.** Définissez une fonction `displayFuelCapacity()`.

**3.** Dans le corps de la fonction `displayFuelCapacity`, utilisez `forEach()` pour parcourir le tableau `Airplane.availableAirplanes`.
Le `forEach()` doit prendre une fonction anonyme comme paramètre. Nous en ajouterons d'autres à l'étape suivante.

**4.** Passez à la fonction anonyme que vous avez créée à la dernière étape un paramètre de `element`.

**5.** Dans la fonction `displayFuelCapacity`, utilisez `console.log()` pour afficher  le nom de l'élément et sa capacité en carburant. La sortie devrait  ressembler à ceci :

```js
'Fuel Capacity of + (element name) : + (element fuelCapacity)'
```

**6.** Appelez la fonction `displayFuelCapacity`.

```js
// missionControl.js
import Airplane from './airplane';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach((element) => {
    console.log('Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity)
  });
};
displayFuelCapacity();
// Fuel Capacity of AeroJet : 800
// Fuel Capacity of SkyJet : 500
```

-----



## 07. Exportations nommées

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/named-exports)

ES6 a introduit une deuxième approche commune des modules d'exportation. En plus de `export default`, les *exportations nommées* nous  permettent d'exporter des données via l'utilisation de variables.
Voyons comment cela fonctionne. Dans **menu.js**, nous serions sûrs de donner à  chaque élément de données un nom de variable distinct :

```js
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };
```

1. Notez que, lorsque nous utilisons des exportations nommées, nous ne  définissons pas les propriétés d'un objet. Chaque exportation est  stockée dans sa propre variable.
2. `specialty` est un objet string,  tandis que `isVegetarian` et `isLowSodium` sont des objets sous forme de  fonctions. Rappelez-vous qu'en JavaScript, chaque fonction est en fait  un objet fonction.
3. `export { specialty, isVegetarian };` exporte les objets par leurs noms de variables. Notez que le mot-clé `export` est le préfixe.
4. `specialty` et `isVegetarian` sont exportés, tandis  que `isLowSodium` ne l'est pas, car il n'est pas spécifié dans la syntaxe  d'exportation.

**Instructions**

```js
let Airplane = {
  availableAirplanes: [
    {
      name: 'AeroJet',
      fuelCapacity: 800
    },
    {
      name: 'SkyJet',
      fuelCapacity: 500
    }
  ]
};
export default Airplane;
```

**1.** Supprimez l'instruction qui définit `Airplane` comme un objet vide et supprimez toute la ligne `export default`.
Vous verrez une erreur dans la console, mais nous corrigerons ce problème à l'étape suivante.

**2.** Modifiez le tableau `availableAirplanes` de sorte qu'il soit une variable définie avec `let` et non plus une propriété sur l'objet `Airplane`.

**3.** Ajoutons quelques données supplémentaires au tableau `availableAirplanes`.
Dans le premier objet, `AeroJet`, ajoutez une propriété `availableStaff` et  définissez-la égale à un tableau avec les éléments `'pilots'`, `'flightAttendants'`, `'engineers'`, `'medicalAssistance'` et `'sensorOperators'`.
Dans le deuxième objet, `SkyJet`, ajoutez une  propriété `availableStaff` et définissez-la égale à un tableau avec les  éléments `'pilots'` et `'flightAttendants'`.

**4.** Définissez une nouvelle variable avec `let` nommée `flightRequirements` et définissez-la égale à un objet vide.

**5.** Dans l'objet `flightRequirements`, ajoutez une propriété `requiredStaff` et définissez-la sur `4`.

**6.** Définissez une fonction avec le nom `meetsStaffRequirements()` qui prend `availableStaff` et `requiredStaff` comme paramètres.

**7.** Dans le corps de la fonction `meetsStaffRequirements()`, écrivez une logique  pour vérifier si la longueur du tableau `availableStaff` est supérieure ou égale à `requiredStaff`.
La fonction doit contenir cette logique :

```js
if length of availableStaff is greater than or equal to requiredStaff
  return true
else 
  return false
```

**8.** À l'aide du mot-clé `export`, exportez les variables `availableAirplanes`, `flightRequirements` et `meetsStaffRequirements`.

```js
let Airplane = {};
let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: [
      'pilots',
      'flightAttendants',
      'engineers',
      'medicalAssistance',
      'sensorOperators'
    ]
  }, 
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: [
      'pilots',
      'flightAttendants'
    ]
  }
];
let flightRequirements = {
  requiredStaff: 4
};
function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true
  } else {
    return false
  }
};
export { availableAirplanes, flightRequirements, meetsStaffRequirements };
```

-----



## 08. Importations nommées

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/named-imports)

Pour importer des objets stockés dans une variable, nous utilisons le mot-clé `import` et incluons les variables dans un ensemble de `{}`.
Dans le fichier **order.js**, par exemple, nous écririons :

```js
import { specialty, isVegetarian } from './menu';

console.log(specialty);
```

Ici `specialty` and `isVegetarian` sont importés.
Si nous ne voulions importer aucune de ces variables, nous pourrions les omettre de l'instruction `import`.
Nous pouvons ensuite utiliser ces objets comme dans notre code. Par  exemple, nous utiliserions `specialty` au lieu de `Menu.specialty`.

**Instructions**

```js
// missionControl.js
import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();
```

**1.** Supprimons toute référence à `Airplane` dans notre code car nous n'exportons plus ce module.
Par exemple, `Airplane.availableAirplanes` devrait être modifié en `availableAirplanes`.
Encore une fois, vous verrez une `ReferenceError` dans la console pour le  moment, mais nous corrigerons cela dans notre prochaine étape.

**2.** Modifiez l'instruction `import` afin qu'elle importe les variables  `availableAirplanes`, `flightRequirements` et `meetsStaffRequirements`.
Maintenant, modifiez n'importe quelle instance de la variable `Airplane.availableAirplanes`, afin de n'utiliser que `availableAirplanes`.

**3.** Définissez une fonction `displayStaffStatus()`.

**4.** Dans le corps de la fonction `displayStaffStatus()`, utilisez `forEach` pour parcourir le tableau `availableAirplanes`.
Plus précisément, `forEach()` doit prendre une fonction comme paramètre. La  fonction doit à son tour prendre `element` comme paramètre.

**5.** Dans la fonction `displayStaffStatus()`, utilisez `console.log()` pour  afficher le nom de l'élément. Nous en ajouterons d'autres à l'étape  suivante.

**6.** En continuant dans la fonction `displayStaffStatus()`, modifiez l'instruction `console.log()` en sortie

```js
(element name) + ' meets staff requirements: ' + (true/false)
```

Pour ce faire, nous pouvons appeler la méthode `meetsStaffRequirements`, en  passant deux paramètres `element.availableStaff` et  `flightRequirements.requiredStaff`.

**7.** Appelez la fonction `displayStaffStatus()`.

```js
// missionControl.js
import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
};
displayFuelCapacity();
displayStaffStatus();
```

```bash
Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500
AeroJet meets staff requirements: true
SkyJet meets staff requirements: false
```

-----



## 09. Exporter les exportations nommées

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/export-named-exports)

Les exportations nommées sont également distinctes en ce qu'elles peuvent être exportées dès qu'elles sont déclarées, en plaçant le mot-clé `export` devant les déclarations de variables.
Dans **menu.js**

```js
export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
}; 
```

1. Le mot-clé `export` nous permet d'exporter des objets lors de la  déclaration, comme indiqué dans `export let specialty` et `export function isVegetarian() {}`.
2. Nous n'avons plus besoin d'une instruction `export` au bas de notre fichier, car ce comportement est traité ci-dessus.

**Instructions**

**1.** Ajoutons quelques données supplémentaires à notre fichier **plane.js**.
Continuez en ajoutant plus de données aux objets dans la variable `availableAirplanes`.
Au premier objet AeroJet, ajoutez une propriété `maxSpeed` avec une valeur de `1200` et une propriété `minSpeed` avec une valeur de `300`.
Au  deuxième objet SkyJet, ajoutez une propriété `maxSpeed` avec une valeur  de `800` et une propriété `minSpeed` avec une valeur de `200`.

**2.** Dans l'objet `flightRequirements`, ajoutez une propriété `requiredSpeedRange` et définissez-la sur `700`.

**3.** En continuant avec le même fichier, ajoutez une nouvelle fonction `meetsSpeedRangeRequirements()` qui prend trois arguments `maxSpeed`,  `minSpeed` et `requiredSpeedRange`.

**4.** Dans la fonction `meetsSpeedRangeRequirements`, créez une variables `range` et définissez-la sur la différence entre `maxSpeed` et `minSpeed`.

**5.** Dans le corps de la fonction `meetsSpeedRangeRequirements()`, créez une  logique pour vérifier si la `range` est supérieure à la valeur `requiredSpeedRange`.
La fonction doit contenir cette logique :

```js
if the `range` is greater than the `requiredSpeedRange`
  return true
else 
  return false 
```

**6.** Utilisez `export` pour exporter les variables dès qu'elles sont déclarées et  supprimez l'instruction `export` au bas du fichier.

```js
export let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: [
      'pilots',
      'flightAttendants',
      'engineers',
      'medicalAssistance',
      'sensorOperators'
    ],
    maxSpeed: 1200,
    minSpeed: 300
  }, 
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: [
      'pilots',
      'flightAttendants'
    ],
    maxSpeed: 800,
    minSpeed: 200
  }
];
export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true
  } else {
    return false
  }
};
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true
  } else {
    return false
  };
};
```

-----



## 10. Importer des importations nommées

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/import-named-imports)

Pour importer des variables déclarées, nous utilisons simplement la syntaxe d'origine qui décrit le nom de la variable. En d'autres termes,  l'exportation après déclaration n'a pas d'impact sur la façon dont nous  importons les variables.

```js
import { specialty, isVegetarian } from 'menu';
```

**Instructions**

**1.** Ajoutez `meetsSpeedRangeRequirements` à l'instruction `import` en haut du fichier.

**2.** Définissez une fonction `displaySpeedRangeStatus()`.

**3.** Dans la fonction `displaySpeedRangeStatus()`, utilisez la méthode `forEach`  pour parcourir chaque élément du tableau `availableAirplanes`.
Encore une fois, `forEach()` devrait prendre une fonction comme paramètre ; cette fonction doit prendre `element` comme paramètre.

**4.** Dans la fonction `displaySpeedRangeStatus()`, utilisez `console.log()` pour afficher le nom de l'élément.

**5.** En continuant dans la fonction `displaySpeedRangeStatus()`, modifiez  l'instruction `console.log()` pour afficher une instruction comme celle-ci :

```js
(element name) + 'meets speed range requirements: ' + (true/false)
```

Pour ce faire, nous pouvons appeler la méthode `meetsSpeedRangeRequirements`, en passant trois paramètres `element.maxSpeed`, `element.minSpeed` et  `flightRequirements.requiredSpeedRange`.

**6.** Appelez la fonction `displaySpeedRangeStatus()`.

```js
import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
};
function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};
displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();
```

```bash
Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500
AeroJet meets staff requirements: true
SkyJet meets staff requirements: false
AeroJetmeets speed range requirements: true
SkyJetmeets speed range requirements: false
```

-----



## 11. Exporter sous

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/export-as)

Les exportations nommées offrent également un moyen pratique de modifier le nom des variables lorsque nous les exportons ou les importons. Nous  pouvons le faire avec le mot-clé `as`.
Voyons comment cela fonctionne. Dans notre exemple **menu.js**

```js
let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
```

Dans l'exemple ci-dessus, jetez un œil à l'instruction d'exportation au bas du fichier.

1. Le mot-clé `as` nous permet de donner un nom de variable un alias comme démontré dans la spécialité comme `chefsSpecial` et `isVegetarian`  comme `isVeg`.
2. Comme nous n'avons pas donné d'alias à `isLowSodium`, il conservera son nom d'origine.

**Instructions**

**1.** Supprimez le mot-clé `export` devant chaque nom de variable, car nous n'en aurons plus besoin.

**2.** Ajoutez une instruction `export` pour exporter l'objet `availableAirplanes`  en tant que`aircrafts`, `flightRequirements` en tant que `flightReqs`, la méthode `meetsStaffRequirements` en tant que `meetsStaffReqs` et  `meetsSpeedRangeRequirements` en tant que `meetsSpeedRangeReqs`.

```js
let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: [
      'pilots',
      'flightAttendants',
      'engineers',
      'medicalAssistance',
      'sensorOperators'
    ],
    maxSpeed: 1200,
    minSpeed: 300
  }, 
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: [
      'pilots',
      'flightAttendants'
    ],
    maxSpeed: 800,
    minSpeed: 200
  }
];
let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true
  } else {
    return false
  }
};
function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true
  } else {
    return false
  };
};
export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };
```

-----



## 12. Importer sous

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/import-as)

Pour importer des alias d'exportation nommés avec le mot clé `as`, nous ajoutons la variable aliasée dans notre instruction d'importation.

```js
import { chefsSpecial, isVeg } from './menu';
```

Dans **orders.js**

1. Nous importons `chefsSpecial` et `isVeg` à partir de l'objet `Menu`.
2. Ici, notez que nous avons une option pour aliaser un objet qui  n'était pas précédemment aliasé lors de l'exportation. Par exemple,  l'objet `isLowSodium` que nous avons exporté pourrait avoir un alias avec le mot-clé `as` lors de l'importation : `import {isLowSodium as saltFree} from 'Menu';`

Une autre façon d'utiliser les alias est d'importer le module entier en tant qu'alias :

```js
import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium(); 
```

1. Cela nous permet d'importer un module entier depuis **menu.js** en tant qu'alias `Carte`.
2. Dans cet exemple, le nom que nous avons exporté nous serait  disponible en tant que propriétés de ce module. Par exemple, si nous  exportions les alias `chefsSpecial` et `isVeg`, ceux-ci seraient disponibles pour nous. Si nous ne donnions pas d'alias à `isLowSodium`, nous  l'appellerions comme défini sur le module `Carte`.

**Instructions**

**1.** Dans le corps de **missionControl.js**, remplacez chaque variable par son alias, à l'exception de la variable dans l'instruction d'importation.
Dans le corps, changez :

- `availableAirplanes` en `aircrafts` 
- `flightRequirements` en `flightReqs`
- `meetsStaffRequirements` en `meetsStaffReqs`
- `meetsSpeedRangeRequirements` en `meetsSpeedRangeReqs`

Vous verrez une erreur dans la console, mais nous la corrigerons dans le prochain exercice.

**2.** Modifiez maintenant l'instruction d'importation pour importer `aircrafts`, `flightReqs`, `meetsStaffReqs`, `meetsSpeedRangeReqs`. 

```js
import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs } from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
function displayStaffStatus() {
  aircrafts.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
  });
};
function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element) {
    console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
};
displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();
```

-----



## 13. Combinaison d'instructions d'exportation

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/combining-export-statements)

Nous pouvons également utiliser les exportations nommées et les exportations par défaut ensemble. Dans **menu.js** :

```js
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;
```

Ici, nous utilisons le mot-clé `export` pour exporter les exportations nommées en bas du fichier. Pendant ce temps, nous exportons la variable `isGlutenFree` en utilisant la syntaxe `export default`.
Cela fonctionnerait également si nous exportions la plupart des variables telles que déclarées et en exportions d'autres avec la syntaxe  `export default`.

```js
export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
}; 
export let isLowSodium = function() {
}; 
let isGlutenFree = function() {
};

export default isGlutenFree;
```

Ici, nous utilisons le mot-clé `export` pour exporter les variables lors  de la déclaration, puis à nouveau exporter la variable `isGlutenFree` en  utilisant la syntaxe `export default`.
S'il est préférable d'éviter de combiner deux méthodes d'exportation, cela est parfois utile. Par exemple, si vous pensez que les développeurs ne seront  intéressés que par l'importation d'une fonction spécifique et n'auront  pas besoin d'importer l'intégralité de l'exportation par défaut.

**Instructions**

**1.** Dans **airplanes.js**, utilisez le mot-clé `export` pour exporter `availableAirplanes`, `flightRequirements` et `meetsStaffRequirements` dès qu'ils sont déclarés.

**2.** Utilisez `export default` pour exporter `meetsSpeedRangeRequirements`. 

```js
export let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: [
      'pilots',
      'flightAttendants',
      'engineers',
      'medicalAssistance',
      'sensorOperators'
    ],
    maxSpeed: 1200,
    minSpeed: 300
  }, 
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: [
      'pilots',
      'flightAttendants'
    ],
    maxSpeed: 800,
    minSpeed: 200
  }
];
export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true
  } else {
    return false
  }
};
function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true
  } else {
    return false
  };
};
export default meetsSpeedRangeRequirements;
```

-----



## 14. Combinaison d'instructions d'importation

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/combining-import-statements)

Nous pouvons importer la collection d'objets et de fonctions avec les mêmes données.
Nous pouvons utiliser un mot-clé `import` pour importer les deux types de variables en tant que telles :

```js
import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';
```

**Instructions**

**1.** Supprimez l'instruction d'importation en haut de **missionControl.js**.
Une fois que vous avez supprimé `import`, remplacez chaque variable par son nom d'origine sans alias dans le reste du fichier.

- `aircrafts` par `availableAirplanes` 
- `flightReqs` par `flightRequirements` 
- `meetsStaffReqs` par `meetsStaffRequirements` 
- `meetsSpeedRangeReqs` par `meetsSpeedRangeRequirements` 

Si vous voyez des erreurs dans la console, ne vous inquiétez pas. Nous allons résoudre ce problème lors de notre dernière étape !

**2.** En haut du fichier, nous allons maintenant importer toutes les variables du module.

- Utilisez `import` pour importer `availableAirplanes`, `flightRequirements` et `meetsStaffRequirements` entre un ensemble de `{}`
- Utiliser `import` pour importer des `meetsSpeedRangeRequirements`.

```js
import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';
import meetsSpeedRangeRequirements from './airplane';
function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
};
function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};
displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();
```

-----



## 15. Revue

[Learn JavaScript | Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/modules/exercises/review)

Nous venons d'apprendre à utiliser les modules JavaScript. Passons en revue ce que nous avons appris :

*Les modules* de Node.js sont des morceaux de code réutilisables qui peuvent  être exportés à partir d'un programme et importés pour être utilisés  dans un autre programme.

- `module.exports` exporte le module pour une utilisation dans un autre programme.
- `require()` importe le module à utiliser dans le programme en cours.

ES6 a introduit une syntaxe plus flexible et plus simple pour exporter les modules :

- les exportations par défaut utilisent `export default` pour  exporter des objets JavaScript, des fonctions et des types de données  primitifs.
- les exportations nommées utilisent le mot-clé `export` pour exporter des données dans des variables.
- les exportations nommées peuvent avoir un alias avec le mot-clé `as`.
- `import` est un mot-clé qui importe n'importe quel objet, fonction ou type de données.

-----



## Aide-mémoire

[Learn JavaScript: Modules Cheatsheet | Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/intermediate-javascript-modules/cheatsheet)

### Importez des modules Javascript avec la fonction `require`

Dans Node.js, la fonction `require` peut être utilisée pour importer du code d'un autre fichier dans le script courant.

```js
var moduleA = require( "./module-a.js" );

// The .js extension is optional
var moduleA = require( "./module-a" );
// Both ways will produce the same result.

// Now the functionality of moduleA can be used
console.log(moduleA.someFunctionality)
```



### Javascript intermédiaire : module `export`

Pour rendre un objet de notre fichier Javascript exportable en tant que module dans Node.js, nous affectons l'objet à la propriété `exports` du `module`.

```js
let Course = {};
Course.name = "Javascript Node.js"
module.exports = Course;
```



### `export default` Javascript

À partir de ES6, les mots-clés *export default* permettent  d'exporter une seule variable ou fonction, puis, dans un autre script,  il sera simple d'importer l'exportation par défaut.

Après avoir utilisé *export default*, il est possible d'importer  une variable ou une fonction sans utiliser la fonction `require()`.

```js
// module "moduleA.js"
export default function cube(x) {
  return x * x * x;
}

// In main.js
import cube from './moduleA.js';
// Now the `cube` function can be used straightforwardly.
console.log(cube(3)); // 27
```



### Utilisation du mot-clé `import` en Javascript

Depuis ES6, le mot-clé `import` peut être utilisé pour importer des fonctions,  des objets ou des primitives précédemment exportés dans le script  courant.

Il existe de nombreuses façons d'utiliser le mot-clé `import`, par exemple, vous pouvez importer toutes les exportations d'un script en utilisant le sélecteur `*` comme suit : `import * from 'module_name';`.

Une seule fonction peut être importée avec des accolades comme suit : `import {funcA} as name from 'module_name';`.

Ou de nombreuses fonctions par nom : `import {funcA, funcB} as name from 'module_name';` .

```js
// add.js
export const add = (x, y) => {
    return x + y
}

// main.js
import { add } from './add';
console.log(add(2, 3)); // 5
```

