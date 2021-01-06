---
id: freeCodeCamp-Functional_Programming-fr*
title: Programmation fonctionnelle
---



## Introduction aux défis de la programmation fonctionnelle

[Functional Programming | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/)

La  programmation fonctionnelle est une approche du développement logiciel  basée sur l'évaluation des fonctions. Comme les mathématiques, les  fonctions de programmation mappent l'entrée à la sortie pour produire un résultat. Vous pouvez combiner les fonctions de base de plusieurs  façons pour créer des programmes de plus en plus complexes.

La programmation fonctionnelle suit quelques principes fondamentaux :

- Les fonctions sont indépendantes de l'état du programme ou des  variables globales. Ils ne dépendent que des arguments qui leur sont  passés pour faire un calcul
- Les fonctions tentent de limiter les  modifications de l'état du programme et d'éviter les modifications des  objets globaux contenant des données
- Les fonctions ont des effets secondaires minimes dans le programme

L'approche de développement de logiciels de programmation fonctionnelle divise un  programme en petites parties testables. Cette section couvre les  principes de base de la programmation fonctionnelle en JavaScript.

------



## 1. En savoir plus sur la programmation fonctionnelle

[Learn Functional Programming: Learn About Functional Programming | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/learn-about-functional-programming)

La programmation fonctionnelle est un style de programmation où les solutions sont des fonctions simples et isolées, sans aucun effet  secondaire en dehors de la portée de la fonction.

`ENTRÉE -> PROCESSUS -> SORTIE` - `INPUT -> PROCESS -> OUTPUT`

La programmation fonctionnelle concerne :
1) Fonctions isolées - il n'y a aucune dépendance de l'état du programme,  qui inclut des variables globales susceptibles de changer
2) Fonctions pures - la même entrée donne toujours la même sortie
3) Fonctions avec des effets secondaires limités - tout changement ou  mutation de l'état du programme en dehors de la fonction est  soigneusement contrôlé

-----

Les membres de freeCodeCamp adorent le thé.
Dans l'éditeur de code, les fonctions `prepareTea` et `getTea` sont déjà  définies pour vous. Appelez la fonction `getTea` pour obtenir 40 tasses de thé pour l'équipe et stockez-les dans la variable `tea4TeamFCC`.

> La variable `tea4TeamFCC` doit contenir 40 tasses de thé pour l'équipe.
> La variable `tea4TeamFCC` doit contenir des tasses de thé vert.

```js
// Fonction qui renvoie une chaîne représentant une tasse de thé vert
const prepareTea = () => 'greenTea';
/* Étant donné une fonction (représentant le type de thé) et le nombre de tasses nécessaires, la fonction 
suivante renvoie un tableau de chaînes (chacune représentant une tasse d'un type de thé spécifique). */
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Changer uniquement le code en dessous de cette ligne
const tea4TeamFCC = null;
// Changer uniquement le code au-dessus de cette ligne
```

``` js
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC); // ['greenTea', greenTea,...x40]
```

-----



## 2. Comprendre la terminologie de la programmation fonctionnelle

[Learn Functional Programming: Understand Functional Programming Terminology | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/understand-functional-programming-terminology)

L'équipe FCC a eu un changement d'humeur et veut maintenant deux types  de thé : le thé vert et le thé noir. Fait général : Les sautes d'humeur des clients sont assez courantes.
Avec ces informations, nous  devrons revoir la fonction `getTea` du dernier défi pour gérer diverses  demandes de thé. Nous pouvons modifier `getTea` pour accepter une fonction comme paramètre afin de pouvoir changer le type de thé qu'il prépare. Cela rend `getTea` plus flexible et donne au programmeur plus de contrôle  lorsque les demandes des clients changent.
Mais d'abord, couvrons une terminologie fonctionnelle :
*Les rappels* sont les fonctions qui sont glissées ou passées dans une autre  fonction pour décider de l'invocation de cette fonction. Vous les avez  peut-être vus passés à d'autres méthodes, par exemple dans `filter`, la  fonction de rappel indique à JavaScript les critères de filtrage d'un  tableau.
Les fonctions qui peuvent être affectées à une variable, passées dans une autre fonction ou renvoyées par une autre fonction  comme toute autre valeur normale sont appelées fonctions de *première classe*. En JavaScript, toutes les fonctions sont des fonctions de  première classe.
Les fonctions qui prennent une fonction comme  argument ou qui renvoient une fonction comme valeur de retour sont  appelées fonctions *d'ordre supérieur*.
Lorsque les fonctions sont  passées à une autre fonction ou renvoyées par une autre fonction, les  fonctions qui sont passées ou renvoyées peuvent être appelées *lambda*.

-----

Préparez 27 tasses de thé vert et 13 tasses de thé noir et conservez-les  respectivement dans les variables `tea4GreenTeamFCC` et `tea4BlackTeamFCC`. Notez que la fonction `getTea` a été modifiée et prend désormais une  fonction comme premier argument.
Remarque : Les données (le nombre de tasses de thé) sont fournies comme dernier argument. Nous en  discuterons plus dans les prochaines leçons.

> La variable `tea4GreenTeamFCC` devrait contenir 27 tasses de thé vert pour l'équipe.
> La variable `tea4GreenTeamFCC` doit contenir des tasses de thé vert.
> La variable `tea4BlackTeamFCC` doit contenir 13 tasses de thé noir.
> La variable `tea4BlackTeamFCC` doit contenir des tasses de thé noir.

```js
// Fonction qui renvoie une chaîne représentant une tasse de thé vert
const prepareGreenTea = () => 'greenTea';

// Fonction qui renvoie une chaîne représentant une tasse de thé noir
const prepareBlackTea = () => 'blackTea';

/* Étant donné une fonction (représentant le type de thé) et le nombre de tasses nécessaires, la fonction 
suivante renvoie un tableau de chaînes (chacune représentant une tasse d'un type de thé spécifique). */
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
 
// Changer uniquement le code en dessous de cette ligne
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Changer uniquement le code au-dessus de cette ligne

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
); // null null
```

```js
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
// ['greenTea',x27] ['blackTea',x13]
```

-----



## 3. Comprendre les dangers de l'utilisation du code impératif

[Learn Functional Programming: Understand the Hazards of Using Imperative Code | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/understand-the-hazards-of-using-imperative-code)

La programmation fonctionnelle est une bonne habitude. Il facilite la  gestion de votre code et vous évite les bogues sournois. Mais avant d'en arriver là, examinons une approche impérative de la programmation pour  mettre en évidence les problèmes potentiels.
En anglais (et dans  de nombreuses autres langues), le temps impératif est utilisé pour  donner des commandes. De même, un style impératif en programmation est  celui qui donne à l'ordinateur un ensemble d'instructions pour effectuer une tâche.
Souvent, les instructions changent l'état du  programme, comme la mise à jour des variables globales. Un exemple  classique est l'écriture d'une boucle `for` qui donne des directions  exactes pour itérer sur les indices d'un tableau.
En revanche, la programmation fonctionnelle est une forme de programmation déclarative. Vous dites à l'ordinateur ce que vous voulez faire en appelant une  méthode ou une fonction.
JavaScript propose de nombreuses  méthodes prédéfinies qui gèrent les tâches courantes, vous n'avez donc  pas besoin d'écrire comment l'ordinateur doit les exécuter. Par exemple, au lieu d'utiliser la boucle `for` mentionnée ci-dessus, vous pouvez  appeler la méthode `map` qui gère les détails de l'itération sur un  tableau. Cela permet d'éviter les erreurs sémantiques, comme les "Off By One Errors" qui ont été couvertes dans la section Débogage.
Considérez le scénario : vous naviguez sur le Web dans votre navigateur et  souhaitez suivre les onglets que vous avez ouverts. Essayons de  modéliser cela en utilisant un code simple orienté objet.
Un  objet Window est composé d'onglets et vous avez généralement plusieurs  fenêtres ouvertes. Les titres de chaque site ouvert dans chaque objet  Window sont conservés dans un tableau. Après avoir travaillé dans le  navigateur (ouverture de nouveaux onglets, fusion de fenêtres et  fermeture d'onglets), vous souhaitez imprimer les onglets encore  ouverts. Les onglets fermés sont supprimés du tableau et de nouveaux  onglets (pour plus de simplicité) sont ajoutés à la fin de celui-ci.
L'éditeur de code montre une implémentation de cette fonctionnalité avec des  fonctions pour `tabOpen()`, `tabClose()` et `join()`. Le tableau `tabs` fait partie de l'objet Window qui stocke le nom des pages  ouvertes.

-----

Examinez le code dans l'éditeur. Il utilise une méthode qui a des effets secondaires dans le programme, provoquant un  comportement incorrect. La liste finale des onglets ouverts, stockés  dans `finalTabs.tabs`, devrait être `['FB', 'Gitter', 'Reddit', 'Twitter',  'Medium', 'new tab', 'Netflix', 'YouTube', ' Vine ',' GMail ',' Work  mail ',' Docs ',' freeCodeCamp ',' new tab ']` mais la liste produite par le code est légèrement différente.
Modifiez `Window.prototype.tabClose` pour qu'il supprime l'onglet correct.

> `finalTabs.tabs` doit être `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab',  'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail ',' Docs ','  freeCodeCamp ',' nouvel onglet ']`

```js
// tabs est un tableau de titres de chaque site ouvert dans la fenêtre
var Window = function(tabs) {
  this.tabs = tabs; // Nous gardons un enregistrement du tableau à l'intérieur de l'objet
};

// Lorsque vous joignez deux fenêtres en une seule fenêtre
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Lorsque vous ouvrez un nouvel onglet à la fin
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Ouvrons un nouvel onglet pour l'instant
  return this;
};

// Lorsque vous fermez un onglet
Window.prototype.tabClose = function (index) {

  // Changer uniquement le code en dessous de cette ligne
  var tabsBeforeIndex = this.tabs.splice(0, index); // Récupère les onglets avant l'onglet
  var tabsAfterIndex = this.tabs.splice(index + 1); // Récupère les onglets après l'onglet

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Rejoignez-les ensemble
   // Changer uniquement le code au-dessus de cette ligne

  return this;
 };

// Créons trois fenêtres de navigateur
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Votre boîte aux lettres, lecteur et autres sites de travail
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sites sociaux
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sites de divertissement

// Effectuez maintenant les opérations d'ouverture, de fermeture et autres de l'onglet
var finalTabs = socialWindow
  .tabOpen() // Ouvre un nouvel onglet pour les mèmes de chat
  .join(videoWindow.tabClose(2)) // Fermer le troisième onglet de la fenêtre vidéo et rejoindre
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
// [ 'FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'GMail', 'Docs', 'freeCodeCamp', 'new tab' ]
```

```js
  var tabsBeforeIndex = this.tabs.splice(0, index);
  var tabsAfterIndex = this.tabs.splice(1);
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
/* ou */
  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

console.log(finalTabs.tabs);
// [ 'FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab' ]
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-understand-the-hazards-of-using-imperative-code/301241)

-----



## 4. Évitez les mutations et les effets secondaires à l'aide de la programmation fonctionnelle

[Learn Functional Programming: Avoid Mutations and Side Effects Using Functional Programming | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/avoid-mutations-and-side-effects-using-functional-programming)

Si vous ne l'avez pas déjà compris, le problème dans le défi précédent  était avec l'appel `splice` dans la fonction `tabClose()`.  Malheureusement, `splice` modifie le tableau d'origine sur lequel il est  appelé, de sorte que le deuxième appel a utilisé un tableau modifié et a donné des résultats inattendus.
Ceci est un petit exemple d'un  modèle beaucoup plus grand - vous appelez une fonction sur une variable, un tableau ou un objet, et la fonction change la variable ou quelque  chose dans l'objet.
L'un des principes fondamentaux de la  programmation fonctionnelle est de ne pas changer les choses. Les  changements conduisent à des bogues. Il est plus facile d'éviter les  bogues en sachant que vos fonctions ne changent rien, y compris les  arguments de fonction ou toute variable globale.
L'exemple  précédent n'avait pas d'opérations compliquées, mais la méthode `splice` a changé le tableau d'origine et a entraîné un bogue.
Rappelez-vous que dans la programmation fonctionnelle, changer ou modifier des choses s'appelle une *mutation* et que le résultat est appelé un *effet  secondaire*. Une fonction, idéalement, devrait être une *fonction pure*, ce qui signifie qu'elle ne provoque aucun effet secondaire.
Essayons de maîtriser cette discipline et de ne modifier aucune variable ou objet dans notre code.

-----

Remplissez le code de la fonction `incrementer` afin qu'il renvoie la valeur de la variable globale `fixedValue` augmentée de un.

> Votre fonction `incrementer` ne doit pas changer la valeur de `fixedValue` (qui est `4`).
> Votre fonction `incrementer` doit renvoyer une valeur supérieure à la valeur `fixedValue`.
> Votre fonction `incrementer` doit renvoyer une valeur basée sur la valeur de la variable `fixedValue` globale.

```js
// La variable globale
var fixedValue = 4;
function incrementer () {
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
}
```

```js
var fixedValue = 4;
function incrementer () {
  return fixedValue + 1;
}
console.log(incrementer()); // 5
console.log(fixedValue); // 4
```

[solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-avoid-mutations-and-side-effects-using-functional-programming/301228)

-----



## 5. Passer des arguments pour éviter la dépendance externe dans une fonction

[Learn Functional Programming: Pass Arguments to Avoid External Dependence in a Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/pass-arguments-to-avoid-external-dependence-in-a-function)

Le dernier défi était un pas de plus vers les principes de programmation fonctionnelle, mais il manque encore quelque chose.
Nous n'avons pas modifié la valeur de la variable globale, mais la fonction `incrementer` ne fonctionnerait pas sans la variable  globale `fixedValue`.
Un autre principe de la programmation  fonctionnelle est de toujours déclarer vos dépendances explicitement.  Cela signifie que si une fonction dépend de la présence d'une variable  ou d'un objet, passez cette variable ou cet objet directement dans la  fonction en tant qu'argument.
Il y a plusieurs bonnes  conséquences de ce principe. La fonction est plus facile à tester, vous  savez exactement quelle entrée elle prend, et cela ne dépendra de rien  d'autre dans votre programme.
Cela peut vous donner plus de  confiance lorsque vous modifiez, supprimez ou ajoutez un nouveau code.  Vous sauriez ce que vous pouvez ou ne pouvez pas changer et vous pouvez  voir où se trouvent les pièges potentiels.
Enfin, la fonction  produirait toujours la même sortie pour le même ensemble d'entrées,  quelle que soit la partie du code qui l'exécute.

-----

Mettons à jour la fonction `incrementer` pour déclarer clairement ses dépendances.
Écrivez la fonction `incrementer` pour qu'elle prenne un argument, puis  renvoie un résultat après avoir augmenté la valeur de un.

> Votre fonction `incrementer` ne doit pas changer la valeur de `fixedValue` (qui est `4`).
> Votre fonction `incrementer` doit prendre un argument.
> Votre fonction `incrementer` doit renvoyer une valeur supérieure à la valeur `fixedValue`.

```js
// La variable globale
var fixedValue = 4;
// Changer uniquement le code en dessous de cette ligne
function incrementer () {
// Changer uniquement le code au-dessus de cette ligne
}
```

```js
var fixedValue = 4;
function incrementer (value) {
  return value + 1;
}
console.log(incrementer(fixedValue)); // 5
console.log(fixedValue); // 4
```

[solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-pass-arguments-to-avoid-external-dependence-in-a-function/301234)

-----



## 6. Refactoriser les variables globales hors des fonctions

[Learn Functional Programming: Refactor Global Variables Out of Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions)

Jusqu'à présent, nous avons vu deux principes distincts pour la programmation fonctionnelle :

1. Ne modifiez pas une variable ou un objet - créez de nouvelles variables et objets et renvoyez-les si nécessaire à partir d'une fonction.
2. Déclarez les arguments de fonction - tout calcul à l'intérieur d'une  fonction dépend uniquement des arguments, et non d'aucun objet ou  variable global.

Ajouter 1 à un nombre n'est pas très excitant,  mais nous pouvons appliquer ces principes lorsque nous travaillons avec  des tableaux ou des objets plus complexes.

-----

Réécrivez le code afin que le tableau global `bookList` ne soit pas modifié dans l'une ou  l'autre des fonctions. La fonction `add` doit ajouter le `bookName` donné à  la fin du tableau qui lui est passé et renvoyer un nouveau tableau (liste). La fonction `remove` doit supprimer le `bookName` donné du tableau  qui lui est passé.
**Remarque :** les deux fonctions doivent renvoyer  un tableau et tous les nouveaux paramètres doivent être ajoutés avant le paramètre `bookName`.

> `bookList` ne devrait pas changer et toujours  égaler `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.
> `newBookList` devrait être égal à  `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.
> `newerBookList` doit être égal à `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.
> `latestBookList` devrait être égal à `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
// La variable globale
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Changer le code sous cette ligne
function add (bookName) {
  bookList.push(bookName);
  return bookList;
// Changer le code au-dessus de cette ligne
}
// Changer le code sous cette ligne
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    bookList.splice(book_index, 1);
    return bookList;
// Changer le code au-dessus de cette ligne
	}
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);
//[ 'The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae' ]
```

```js
function add (list, bookName) {
  let newList = [...list];
  newList.push(bookName);
  return newList;
}
function remove (list, bookName) {
  let newList = [...list];
  let book_index = list.indexOf(bookName);
  if (book_index >= 0) {
    newList.splice(book_index, 1);
    return newList;
  }
}
/* ou */
function add(list, bookName) {
  return [...list, bookName];
}
function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}
console.log(bookList); // [ 'The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae' ]
console.log(newBookList); // [ 'The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time' ]
console.log(newerBookList); // [ 'The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae' ]
console.log(newestBookList); // [ 'The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time' ]
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-refactor-global-variables-out-of-functions/301235)

-----



## 7. Utilisez la méthode `map` pour extraire des données d'un tableau

[Learn Functional Programming: Use the map Method to Extract Data from an Array | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

Jusqu'à présent, nous avons appris à utiliser des fonctions pures pour  éviter les effets secondaires dans un programme. De plus, nous avons vu  que la valeur d'une fonction ne dépend que de ses arguments d'entrée.
Ce n'est que le début. Comme son nom l'indique, la programmation fonctionnelle est centrée sur une théorie des fonctions.
Il serait logique de pouvoir les transmettre comme arguments à d'autres  fonctions et de renvoyer une fonction à partir d'une autre fonction. Les fonctions sont considérées comme des *objets de première classe* en  JavaScript, ce qui signifie qu'elles peuvent être utilisées comme  n'importe quel autre objet. Ils peuvent être enregistrés dans des  variables, stockés dans un objet ou passés comme arguments de fonction.
Commençons par quelques fonctions de tableau simples, qui sont des méthodes sur le prototype d'objet de tableau. Dans cet exercice, nous examinons  `Array.prototype.map()`, ou plus simplement `map`.
La méthode `map`  itère sur chaque élément d'un tableau et retourne un nouveau tableau  contenant les résultats de l'appel de la fonction de rappel sur chaque  élément. Il le fait sans muter le tableau d'origine.
Lorsque le  rappel est utilisé, trois arguments lui sont transmis. Le premier  argument est l'élément en cours de traitement. Le second est l'index de  cet élément et le troisième est le tableau sur lequel la méthode `map` a  été appelée.
Voir ci-dessous un exemple d'utilisation de la  méthode `map` sur le tableau `users` pour renvoyer un nouveau tableau  contenant uniquement les noms des utilisateurs comme éléments. Par souci de simplicité, l'exemple n'utilise que le premier argument du rappel.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
```

-----

Le tableau `watchList` contient des objets contenant des informations sur  plusieurs films. Utilisez `map` sur `watchList` pour attribuer un nouveau  tableau d'objets avec uniquement les clés `title` et `rating` à la variable `ratings`. Le code de l'éditeur utilise actuellement une  boucle `for` pour ce faire, vous devez donc remplacer la fonctionnalité de boucle par votre expression `map`.

> La variable `watchList` ne doit pas changer.
> Votre code ne doit pas utiliser de boucle `for`.
> Votre code doit utiliser la méthode `map`.
> `rating` doit être égales à `[{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}]`.

```js
// La variable globale
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];
// Changer uniquement le code en dessous de cette ligne
var ratings = [];
for(var i=0; i < watchList.length; i++){
  ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}
// Changer uniquement le code au-dessus de cette ligne
console.log(JSON.stringify(ratings)); // [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}]
```

```js
const ratings = watchList.map(movie => ({  
  title: movie["Title"],
  rating: movie["imdbRating"]
}));
/* ou */
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
```

**Explication du code :** En utilisant la déstructuration des paramètres, `title` and `rating` sont extraits et renvoyés dans un objet. Les paranthèses sont  nécessaires pour renvoyer un objet.

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-the-map-method-to-extract-data-from-an-array/18214)

[Fonctions fléchées](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)

------



## 8. Implémenter `map` sur un prototype

[Learn Functional Programming: Implement map on a Prototype | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype)

Comme vous l'avez vu en appliquant `Array.prototype.map()`, ou simplement `map()` précédemment, la méthode `map` renvoie un tableau de la même  longueur que celui sur lequel elle a été appelée. Il ne modifie pas non  plus le tableau d'origine, tant que sa fonction de rappel ne le fait  pas.
En d'autres termes, `map` est une fonction pure et sa sortie  dépend uniquement de ses entrées. De plus, il prend une autre fonction  comme argument.
Vous pourriez en apprendre beaucoup sur la  méthode `map` si vous en implémentez votre propre version. Il est  recommandé d'utiliser une boucle `for` ou `Array.prototype.forEach()`.

-----

Écrivez votre propre `Array.prototype.myMap()`, qui doit se comporter exactement comme `Array.prototype.map()`. Vous ne devez pas utiliser la méthode `map` intégrée. L'instance `Array` est accessible dans la méthode `myMap` à  l'aide de `this`.

> `new_s` doit être égal à `[46, 130, 196, 10]`.
> Votre code ne doit pas utiliser la méthode `map`.

```js
// La variable globale
var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback) {
  var newArray = [];
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
  return newArray;
};
var new_s = s.myMap(function(item) {
  return item * 2;
});
```

```js
var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback) {
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};
var new_s = s.myMap(function(item) {
  return item * 2;
});
console.log(new_s); // [ 46, 130, 196, 10 ]
/* ou */
this.forEach(a => newArray.push(callback(a)));
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-implement-map-on-a-prototype/301230)

------



## 9. Utilisez la méthode `filter` pour extraire des données d'un tableau

[Learn Functional Programming: Use the filter Method to Extract Data from an Array | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

Une autre fonction de tableau utile est `Array.prototype.filter()`, ou simplement `filter()`.
`filter` appelle une fonction sur chaque élément d'un tableau et renvoie un  nouveau tableau contenant uniquement les éléments pour lesquels cette  fonction renvoie `true`. En d'autres termes, il filtre le tableau en  fonction de la fonction qui lui est transmise. Comme `map`, il le  fait sans avoir besoin de modifier le tableau d'origine.
La  fonction de rappel accepte trois arguments. Le premier argument est  l'élément en cours de traitement. Le deuxième est l'indice de cet  élément et le troisième est le tableau sur lequel la méthode `filter` a été appelée.
Voir ci-dessous un exemple d'utilisation de la  méthode `filter` sur le tableau `users` pour renvoyer un  nouveau tableau contenant uniquement les utilisateurs de moins de 30  ans. Par souci de simplicité, l'exemple n'utilise que le premier  argument du rappel.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
```

-----

La variable `watchList` contient un tableau d'objets contenant des  informations sur plusieurs films. Utilisez une combinaison `filter` et  `map` sur `watchList` pour attribuer un nouveau tableau d'objets avec  uniquement les clés `title` et `rating`. Le nouveau tableau ne doit inclure que les objets où `imdbRating` est supérieur ou égal à 8,0. Notez que les valeurs d'évaluation sont enregistrées sous forme de chaînes  dans l'objet et que vous devrez peut-être les convertir en nombres pour  effectuer des opérations mathématiques sur elles.

> La variable `watchList` ne doit pas changer.
> Votre code doit utiliser la méthode `filter`.
> Votre code ne doit pas utiliser de boucle `for`.
> `filteredList` doit être égal à `[{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}]`.

```js
// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];
// Only change code below this line
var filteredList;
// Only change code above this line
console.log(filteredList); // undefined
```

```js
var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    // retourne vrai, il conservera l'élément
    // retourne false, il rejettera l'élément
    return parseFloat(movie.rating) >= 8.0;
  });
/* ou */
var filteredList = watchList
  .map(function(e) {
    return { title: e["Title"], rating: e["imdbRating"] };
  })
  .filter(e => e.rating >= 8);
console.log(filteredList); /*
[ { title: 'Inception', rating: '8.8' },
  { title: 'Interstellar', rating: '8.6' },
  { title: 'The Dark Knight', rating: '9.0' },
  { title: 'Batman Begins', rating: '8.3' } ] */
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-the-filter-method-to-extract-data-from-an-array/18179)

------



## 10. Implémenter la méthode `filter` sur un prototype

[Learn Functional Programming: Implement the filter Method on a Prototype | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype)

Vous en apprendrez peut-être beaucoup sur la méthode `filter` si vous en implémentez votre propre version. Il est recommandé d'utiliser une  boucle `for` ou `Array.prototype.forEach()`.

------

Écrivez votre propre `Array.prototype.myFilter()`, qui devrait se comporter exactement comme `Array.prototype.filter()`. Vous ne devez pas utiliser la méthode `filter` intégrée. L'instance `Array` est accessible dans la méthode `myFilter` à l'aide de `this`.

> `new_s` doit être égal à `[23, 65, 5]`.
> Votre code ne doit pas utiliser la méthode `filter`.

```js
// La variable globale
var s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback) {
  // Changer uniquement le code en dessous de cette ligne
  var newArray = [];   
// Changer uniquement le code au-dessus de cette ligne
  return newArray;
};
var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
console.log(new_s);
```

```js
var s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback) {
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
      };    
  };
  return newArray;
};
var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
console.log(new_s); // [ 23, 65, 5 ]
/* ou */
this.forEach(function(x) {
    if (callback(x) == true) {
        newArray.push(x);
    }
});
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-implement-the-filter-method-on-a-prototype/301231)

-----



## 11. Renvoyer une partie d'un tableau à l'aide de la méthode `slice`

[Learn Functional Programming: Return Part of an Array Using the slice Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method)

La méthode `slice` renvoie une copie de certains éléments d'un tableau. Il  peut prendre deux arguments, le premier donne l'index de l'endroit où  commencer la tranche, le second est l'index de l'endroit où terminer la  tranche (et il n'est pas inclusif). Si les arguments ne sont pas  fournis, la valeur par défaut est de commencer au début du tableau  jusqu'à la fin, ce qui est un moyen facile de faire une copie du tableau entier. La méthode `slice` ne modifie pas le tableau d'origine, mais en  renvoie un nouveau.

Voici un exemple :

```js
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Définit newArray sur ["Dog", "Tiger"]
```

-----

Utilisez la méthode `slice` dans la fonction `sliceArray` pour renvoyer une partie du tableau `anim` en fonction des indices `beginSlice` et `endSlice` fournis.  La fonction doit renvoyer un tableau.

> Votre code doit utiliser la méthode `slice`.
> La variable `inputAnim` ne doit pas changer.
> `sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)` devrait renvoyer `['Dog', 'Tiger']`.
> `sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)` doit retourner `['Cat']`.
> `sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)` devrait retourner `['Dog', 'Tiger', 'Zebra']`.

```js
function sliceArray(anim, beginSlice, endSlice) {
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

```js
function sliceArray(anim, beginSlice, endSlice) {
    let newSliceArray = anim.slice(beginSlice, endSlice);
  return newSliceArray;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
console.log(sliceArray(inputAnim, 1, 3)); // [ 'Dog', 'Tiger' ]
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)); // [ 'Dog', 'Tiger' ]
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)); // [ 'Cat' ]
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)); // [ 'Dog', 'Tiger', 'Zebra' ]
```

-----



## 12. Supprimer des éléments d'un tableau à l'aide de `slice` au lieu de `splice`

[Learn Functional Programming: Remove Elements from an Array Using slice Instead of splice | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/remove-elements-from-an-array-using-slice-instead-of-splice)

Un modèle courant lorsque vous travaillez avec des tableaux est lorsque  vous souhaitez supprimer des éléments et conserver le reste du tableau.  JavaScript propose la méthode `splice` pour cela, qui prend des  arguments pour l'index de l'endroit où commencer la suppression des  éléments, puis le nombre d'éléments à supprimer. Si le deuxième argument n'est pas fourni, la valeur par défaut consiste à supprimer les  éléments jusqu'à la fin. Cependant, la méthode `splice` mute le tableau  d'origine sur lequel elle est appelée. Voici un exemple :

```js
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Renvoie "London" et le supprime du tableau des villes
// les villes sont maintenant ["Chicago", "Delhi", "Islamabad", "Berlin"]
```

Comme nous l'avons vu dans le dernier défi, la méthode `slice` ne mute pas le  tableau d'origine, mais en renvoie un nouveau qui peut être enregistré  dans une variable. Rappelez-vous que la méthode `slice` prend deux  arguments pour que les index commencent et terminent la tranche (la fin  est non inclusive), et retourne ces éléments dans un nouveau tableau.  L'utilisation de la méthode `slice` au lieu de `splice` permet d'éviter tout effet secondaire de mutation du tableau.

-----

Réécrivez la fonction `nonMutatingSplice` en utilisant `slice` au lieu de `splice`. Il doit limiter le tableau `cities` fourni à une longueur de 3 et renvoyer un nouveau  tableau avec uniquement les trois premiers éléments.
Ne modifiez pas le tableau d'origine fourni à la fonction.

> Votre code doit utiliser la méthode `slice`.
> Votre code ne doit pas utiliser la méthode `splice`.
> Le tableau `inputCities` ne doit pas changer.
> `nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` doit retourner `["Chicago", "Delhi", "Islamabad"]`.

```js
function nonMutatingSplice(cities) {
  // Changer uniquement le code en dessous de cette ligne
  return cities.splice(3);
  // Changer uniquement le code au-dessus de cette ligne
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
console.log(nonMutatingSplice(inputCities)); // []
```

```js
function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
console.log(nonMutatingSplice(inputCities)); // [ 'Chicago', 'Delhi', 'Islamabad' ]
```

-----



## 13. Combiner deux tableaux à l'aide de la méthode `concat`

[Learn Functional Programming: Combine Two Arrays Using the concat Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-two-arrays-using-the-concat-method)

La *concaténation* signifie joindre des éléments de bout en bout.  JavaScript propose la méthode `concat` pour les chaînes et les tableaux  qui fonctionnent de la même manière. Pour les tableaux, la méthode est  appelée sur un, puis un autre tableau est fourni comme argument de `concat`, qui est ajouté à la fin du premier tableau. Il renvoie un  nouveau tableau et ne mute aucun des tableaux d'origine. Voici un  exemple :

```js
[1, 2, 3].concat ([4, 5, 6]);
// Renvoie un nouveau tableau [1, 2, 3, 4, 5, 6]
```

-----

Utilisez la méthode `concat` dans la fonction `nonMutatingConcat` pour concaténer `attach` à la fin de `original`. La fonction doit renvoyer le  tableau concaténé.

> Votre code doit utiliser la méthode `concat`.
> Le tableau `first` ne doit pas changer.
> Le tableau `second` ne doit pas changer.
> `nonMutatingConcat([1, 2, 3], [4, 5])` doit renvoyer `[1, 2, 3, 4, 5]`.

```js
function nonMutatingConcat(original, attach) {
// Changer uniquement le code en dessous de cette ligne
// Changer uniquement le code au-dessus de cette ligne
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```

```js
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
console.log(nonMutatingConcat(first, second)); // [ 1, 2, 3, 4, 5 ]
console.log(nonMutatingConcat([1, 2, 3], [4, 5]) // [ 1, 2, 3, 4, 5 ]
```

-----



## 14. Ajouter des éléments à la fin d'un tableau à l'aide de `concat` au lieu de `push`

[Learn Functional Programming: Add Elements to the End of an Array Using concat Instead of push | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/add-elements-to-the-end-of-an-array-using-concat-instead-of-push)

La programmation fonctionnelle consiste à créer et à utiliser des fonctions non mutantes.
Le dernier défi a introduit la méthode `concat` comme un moyen de combiner  des tableaux dans un nouveau sans muter les tableaux d'origine. Comparez `concat` à la méthode `push`. `push` ajoute un élément à la fin du même  tableau sur lequel il est appelé, ce qui fait muter ce tableau. Voici un exemple :

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr est remplacé par [1, 2, 3, [4, 5, 6]]
// Pas la méthode de programmation fonctionnelle
```

`concat` offre un moyen d'ajouter de nouveaux éléments à la fin d'un tableau sans aucun effet secondaire de mutation.

-----

Modifiez la fonction `nonMutatingPush` afin qu'elle utilise `concat` pour ajouter `newItem` à la fin de `original` au lieu de `push`. La fonction doit  renvoyer un tableau.

> Votre code doit utiliser la méthode `concat`.
> Votre code ne doit pas utiliser la méthode `push`.
> Le tableau `first` ne doit pas changer.
> Le tableau `second` ne doit pas changer.
> `nonMutatingPush([1, 2, 3], [4, 5])` doit renvoyer `[1, 2, 3, 4, 5]`.

```js
function nonMutatingPush(original, newItem) {
  // Changer uniquement le code en dessous de cette ligne
  return original.push(newItem);
  // Changer uniquement le code au-dessus de cette ligne
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
console.log(nonMutatingPush(first, second)); // 5
```

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
console.log(nonMutatingPush(first, second)); // [ 1, 2, 3, 4, 5 ]
```

------



## 15. Utilisez la méthode `reduce` pour analyser les données

[Learn Functional Programming: Use the reduce Method to Analyze Data | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data)

`Array.prototype.reduce()`, ou simplement `reduce()`, est la plus  générale de toutes les opérations de tableau en JavaScript. Vous pouvez  résoudre presque tous les problèmes de traitement des tableaux en  utilisant la méthode `reduce`.
La méthode `reduce` permet des formes plus générales de traitement de tableau, et il est possible  de montrer que `filter` et `map` peuvent être dérivés comme des applications spéciales de `reduce`. La méthode `reduce` effectue  une itération sur chaque élément d'un tableau et renvoie une valeur  unique (c'est-à-dire une chaîne, un nombre, un objet, un tableau). Ceci  est réalisé via une fonction de rappel qui est appelée à chaque  itération.
La fonction de rappel accepte quatre arguments. Le  premier argument est connu sous le nom d'accumulateur, qui reçoit la  valeur de retour de la fonction de rappel de l'itération précédente, le  second est l'élément en cours de traitement, le troisième est l'index de cet élément et le quatrième est le tableau sur lequel `reduce` est  appelé.
En plus de la fonction de rappel, `reduce` a un paramètre  supplémentaire qui prend une valeur initiale pour l'accumulateur. Si ce  second paramètre n'est pas utilisé, la première itération est ignorée et la seconde itération obtient le premier élément du tableau en tant  qu'accumulateur.
Voir ci-dessous un exemple d'utilisation de  `reduce` sur le tableau `users` pour renvoyer la somme de tous  les âges des utilisateurs. Par souci de simplicité, l'exemple n'utilise  que les premier et deuxième arguments.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64
```

Dans un autre exemple, voyez comment un objet peut être renvoyé contenant  les noms des utilisateurs en tant que propriétés avec leurs âges en tant que valeurs.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }
```

-----

La variable `watchList` contient un tableau d'objets avec des informations  sur plusieurs films. Utilisez `reduce` pour trouver la note IMDB moyenne  des films **réalisés par Christopher Nolan**. Rappelez-vous des défis  précédents comment `filter` les données et les `map` pour  extraire ce dont vous avez besoin. Vous devrez peut-être créer d'autres  variables et renvoyer la note moyenne à partir de la fonction `getRating`. Notez que les valeurs de notation sont enregistrées sous forme de  chaînes dans l'objet et doivent être converties en nombres avant d'être  utilisées dans des opérations mathématiques.

> La variable `watchList` ne doit pas changer.
> Votre code doit utiliser la méthode `reduce`.
> Le `getRating(watchList)` doit être égal à 8,675.
> Votre code ne doit pas utiliser de boucle `for`.
> Votre code doit renvoyer une sortie correcte après la modification de l'objet `watchList`.

```js
// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];
function getRating(watchList){
  // Changer uniquement le code en dessous de cette ligne
  var averageRating;
  // Changer uniquement le code au-dessus de cette ligne
  return averageRating;
}
console.log(getRating(watchList)); // undefined
```

```js
function getRating(watchList){
  let averageRating =
  watchList
  .filter(director => director.Director === "Christopher Nolan")
  .map(imdb => Number(imdb.imdbRating))
  .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  watchList.filter(director => director.Director === "Christopher Nolan").length;
  return averageRating;
}
console.log(getRating(watchList)); // 8.675
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-the-reduce-method-to-analyze-data/301313)

-----



## 16. Utilisez des fonctions d'ordre supérieur `map`, `filter` ou `reduce` pour résoudre un problème complexe

[Learn Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

Maintenant que vous avez relevé quelques défis en utilisant des  fonctions d'ordre supérieur comme `map()`, `filter()` et `reduce()`,  vous pouvez maintenant les appliquer pour résoudre un défi plus  complexe.

-----

Nous avons défini une fonction nommée `squareList`. Vous  devez compléter le code de la fonction `squareList` en utilisant n'importe quelle combinaison de `map()`, `filter()` et `reduce()` afin qu'il  renvoie un nouveau tableau contenant uniquement le carré des entiers  positifs (les nombres décimaux ne sont pas des entiers) lorsque un  tableau de nombres réels lui est passé. Un exemple de tableau contenant  uniquement des nombres réels est `[-3, 4.8, 5, 3, -3.2]`.
**Remarque :** Votre fonction ne doit utiliser aucun type de boucles `for` ou `while` ou la fonction `forEach()`.

> `squareList` doit être une fonction.
> Les boucles `for` ou `while` ou `forEach` ne doivent pas être utilisées.
> `map`, `filter` ou `reduce` doit être utilisé.
> La fonction doit renvoyer un tableau.
> `squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` doit renvoyer `[16, 1764, 36]`.
> `squareList([- 3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` doit renvoyer `[9, 100, 49]`.

```js
const squareList = (arr) => {
  // Changer uniquement le code en dessous de cette ligne
  return arr;
  // Changer uniquement le code au-dessus de cette ligne
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); // [ -3, 4.8, 5, 3, -3.2 ]
```

```js
const squareList = (arr) => {
  return arr
  .filter(num => num > 0 && Number.isInteger(num))
  .map(num => num * num);
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); // [ 25, 9 ]
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])); // [ 16, 1764, 36 ]
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])); // [ 9, 100, 49 ]
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem/301311)

-----



## 17. Trier un tableau par ordre alphabétique à l'aide de la méthode `sort`

[Learn Functional Programming: Sort an Array Alphabetically using the sort Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method)

La méthode `sort` trie les éléments d'un tableau en fonction de la fonction de rappel.
Par exemple :

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Renvoie [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Renvoie ['z', 's', 'l', 'h', 'b']
```

La méthode de tri par défaut de JavaScript est basée sur la valeur du  point Unicode de chaîne, qui peut renvoyer des résultats inattendus. Par conséquent, il est recommandé de fournir une fonction de rappel pour  spécifier comment trier les éléments du tableau. Lorsqu'une telle  fonction de rappel, normalement appelée `compareFunction`, est fournie,  les éléments du tableau sont triés en fonction de la valeur de retour de `compareFunction` : 

- si `compareFunction(a, b)` renvoie une valeur  inférieure à 0 pour deux éléments a et b, alors a viendra avant b,
- si `compareFunction(a, b)` renvoie une valeur supérieure à 0 pour deux  éléments a et b, alors b viendra avant a,
- si `compareFunction(a, b)` renvoie une valeur égale à 0 pour deux éléments a et b, alors a et b  resteront inchangés.

-----

Utilisez la méthode `sort` de la fonction `alphabeticalOrder` pour trier les éléments de `arr` par ordre alphabétique.

> Votre code doit utiliser la méthode `sort`.
> `alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])` doit retourner `['a', 'a', 'c', 'd', 'g' , 'z']`.
> `alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])` doit retourner `['a', 'h', 'm', 'm', 'n' , 'X']`.
> `alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])` devrait renvoyer `['a', 'a', 'a', 'a', 't' , 'X']`.

```js
function alphabeticalOrder(arr) {
	return arr.sort(function(a, b) {
    	return a > b;
  });
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); // [ 'a', 'a', 'c', 'd', 'g', 'z' ]
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])); // [ 'a', 'h', 'm', 'm', 'n', 'x' ]
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])); // [ 'a', 'a', 'a', 'a', 't', 'x' ]
/* ou */
function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}
```

[solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sort-an-array-alphabetically-using-the-sort-method/18303)

-----



## 18. Renvoyer un tableau trié sans changer le tableau d’origine

[Learn Functional Programming: Return a Sorted Array Without Changing the Original Array | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array)

Un effet secondaire de la méthode `sort` est qu'elle modifie l'ordre des éléments dans le tableau d'origine. En d'autres termes, il mute le  tableau en place. Une façon d'éviter cela est de concaténer d'abord un  tableau vide avec celui en cours de tri (rappelez-vous que `slice` et `concat` renvoient un nouveau tableau), puis exécutez la méthode `sort`.

-----

Utilisez la méthode `sort` de la fonction `nonMutatingSort` pour trier les éléments  d'un tableau par ordre croissant. La fonction doit renvoyer un nouveau  tableau et ne pas muter la variable `globalArray`.

> Votre code doit utiliser la méthode `sort`.
> La variable `globalArray` ne doit pas changer.
> `nonMutatingSort(globalArray)` doit renvoyer `[2, 3, 5, 6, 9]`.
> `nonMutatingSort(globalArray)` ne doit pas être codé en dur.
> La fonction doit renvoyer un nouveau tableau, pas le tableau qui lui est passé.

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
	// Changer uniquement le code en dessous de cette ligne
	// Changer uniquement le code au-dessus de cette ligne
}
nonMutatingSort(globalArray);
```

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArr = arr.slice();
  return newArr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}
nonMutatingSort(globalArray);
console.log(nonMutatingSort(globalArray)); // [ 2, 3, 5, 6, 9 ]
console.log(globalArray); // [ 5, 6, 3, 2, 9 ]
/* ou */
function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}
```

[solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-return-a-sorted-array-without-changing-the-original-array/301237)

-----



## 19. Fractionner une chaîne en un tableau à l'aide de la méthode `split`

[Learn Functional Programming: Split a String into an Array Using the split Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method)

La méthode `split` divise une chaîne en un tableau de chaînes. Il prend un argument pour le délimiteur, qui peut être un caractère à utiliser pour séparer la chaîne ou une expression régulière. Par exemple, si le délimiteur est un espace, vous obtenez un tableau de mots et si le  délimiteur est une chaîne vide, vous obtenez un tableau de chaque caractère de la chaîne.
Voici deux exemples qui divisent une  chaîne par des espaces, puis une autre par des chiffres à l'aide d'une  expression régulière :

```js
var str = "Hello World";
var bySpace = str.split(" ");
// Définit bySpace sur ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Définit byDigits sur ["How", "are", "you", "today"]
```

Les chaînes étant immuables, la méthode `split` facilite leur utilisation.

-----

Utilisez la méthode `split` dans la fonction `splitify` pour diviser `str` en un  tableau de mots. La fonction doit renvoyer le tableau. Notez que les  mots ne sont pas toujours séparés par des espaces et que le tableau ne  doit pas contenir de ponctuation.

> Votre code doit utiliser la méthode `split`.
> `splitify('Hello World, I-am code')` doit retourner `['Hello', 'World', 'I', 'am', 'code']`.
> `splitify('Earth-is-our home')` devrait renvoyer `['Earth', 'is', 'our', 'home']`.
> `splitify('This.is.a-sentence')` doit retourner `['This', 'is', 'a', 'sentence']`.

```js
function splitify(str) {
	// Changer uniquement le code en dessous de cette ligne
	// Changer uniquement le code au-dessus de cette ligne
}
splitify("Hello World,I-am code");
```

```js
function splitify(str) {
  let byWords = str.split(/\W/);
  return byWords;
}
splitify("Hello World,I-am code");
console.log(splitify("Hello World,I-am code")); // [ 'Hello', 'World', 'I', 'am', 'code' ]
console.log(splitify("Earth-is-our home")); // [ 'Earth', 'is', 'our', 'home' ]
console.log(splitify("This.is.a-sentence")); // [ 'This', 'is', 'a', 'sentence' ]
/* ou */
function splitify(str) {
    return str.split(/\W/);
}
```

[solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-split-a-string-into-an-array-using-the-split-method/18305)

-----



## 20. Combiner un tableau en une chaîne à l'aide de la méthode `join`

[Learn Functional Programming: Combine an Array into a String Using the join Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method)

La méthode `join` est utilisée pour joindre les éléments d'un tableau  ensemble pour créer une chaîne. Il prend un argument pour le délimiteur  utilisé pour séparer les éléments du tableau dans la chaîne.
Voici un exemple :

```js
var arr = ["Hello", "World"];
var str = arr.join(" ");
// Définit str sur 'Hello World'
```

-----

Utilisez la méthode `join` (entre autres) dans la fonction `sentensify` pour créer  une phrase à partir des mots de la chaîne `str`. La fonction doit renvoyer une chaîne. Par exemple, "I-like-Star-Wars" serait converti en "I like Star Wars". Pour ce défi, n'utilisez pas la méthode `replace`.

> Votre code doit utiliser la méthode `join`.
> Votre code ne doit pas utiliser la méthode `replace`.
> `sentensify("May-the-force-be-with-you")` doit renvoyer une chaîne.
> `sentensify("May-the-force-be-with-you")` devrait renvoyer `"May the force be with you"`.
> `sentensify("The.force.is.strong.with.this.one")` devrait renvoyer `"The force is strong with this one"`.
> `sentensify("There,has,been,an,awakening")` devrait revenir `"There has been an awakening"`.

```js
function sentensify(str) {
	// Changer uniquement le code en dessous de cette ligne
	// Changer uniquement le code au-dessus de cette ligne
}
sentensify("May-the-force-be-with-you");
```

```js
function sentensify(str) {
  return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");
console.log(sentensify("May-the-force-be-with-you")); // May the force be with you
console.log(sentensify("The.force.is.strong.with.this.one")); // The force is strong with this one
console.log(sentensify("There,has,been,an,awakening")); // There has been an awakening
```

[solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-combine-an-array-into-a-string-using-the-join-method/18221)

------



## 21. Appliquer la programmation fonctionnelle pour convertir des chaînes en slugs d'URL

[Learn Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

Les derniers défis couvraient un certain nombre de méthodes de tableau  et de chaîne utiles qui suivent les principes de programmation  fonctionnelle. Nous avons également appris à réduire, qui est une  méthode puissante utilisée pour réduire les problèmes à des formulaires  plus simples. Du calcul des moyennes au tri, toute opération de tableau  peut être réalisée en l'appliquant. Rappelez-vous que `map` et `filter` sont des cas particuliers de `reduce`.
Combinons ce que nous avons appris pour résoudre un problème pratique.
De nombreux sites de gestion de contenu (CMS) ont les titres d'un article  ajoutés à une partie de l'URL à des fins de création de signets simples. Par exemple, si vous écrivez un article sur Medium intitulé 'Stop Using Reduce', il est probable que l'URL contienne une forme de chaîne de  titre ('... / stop-using-reduction'). Vous l'avez peut-être déjà  remarqué sur le site freeCodeCamp.

------

Remplissez la fonction `urlSlug` pour qu'elle convertisse un titre de chaîne et renvoie la version avec  trait d'union pour l'URL. Vous pouvez utiliser l'une des méthodes  décrites dans cette section et n'utilisez pas `replace`. Voici les  exigences :

- L'entrée est une chaîne avec des espaces et des mots avec casse du titre
- La sortie est une chaîne avec les espaces entre les mots remplacés par un tiret (`-`)
- Le résultat doit être composé de lettres minuscules
- La sortie ne doit avoir aucun espace

> Votre code ne doit pas utiliser la méthode `replace` pour ce défi.
> `urlSlug('Winter Is Coming')` devrait renvoyer `'Winter-is-coming'`.
> `urlSlug(' Winter Is  Coming')` devrait renvoyer `'Winter-is-coming'`.
> `urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` devrait renvoyer `"a-mind-needs-books-like-a-sword-needs-a-whetstone"`.
> `urlSlug("Hold The Door")` doit renvoyer `"Hold-the-door"`.

```js
// Changer uniquement le code en dessous de cette ligne
function urlSlug(title) {
}
// Changer uniquement le code au-dessus de cette ligne
```

```js
function urlSlug(title) {
    return title
    .split(/\W/)
    .filter(obj => {
        return obj !== "";
    })
    .join("-")
    .toLowerCase();
};
console.log(urlSlug("Winter Is Coming")); // winter-is-coming
console.log(urlSlug(" Winter Is  Coming")); // winter-is-coming
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // a-mind-needs-books-like-a-sword-needs-a-whetstone
console.log(urlSlug("Hold The Door")); // hold-the-door
/* ou */
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-apply-functional-programming-to-convert-strings-to-url-slugs/301227)

-----



## 22. Utilisez la méthode `every` pour vérifier que chaque élément d'un tableau répond à un critère

[Learn Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria)

La méthode `every` fonctionne avec des tableaux pour vérifier si chaque  élément passe un test particulier. Il renvoie une valeur booléenne - `true` si toutes les valeurs répondent aux critères, `false` sinon.
Par exemple, le code suivant vérifierait si chaque élément du tableau `numbers` est inférieur à 10 :

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Renvoie false
```

-----

Utilisez la méthode `every` dans la fonction `checkPositive` pour vérifier si chaque élément de `arr` est positif. La fonction doit renvoyer une valeur  booléenne.

> Votre code doit utiliser la méthode `every`.
> `checkPositive([1, 2, 3, -4, 5])` doit renvoyer `false`.
> `checkPositive([1, 2, 3, 4, 5])` doit renvoyer `true`.
> `checkPositive([1, -2, 3, -4, 5])` doit renvoyer `false`.

```js
function checkPositive(arr) {
  	// Changer uniquement le code en dessous de cette ligne
	// Changer uniquement le code au-dessus de cette ligne
}
checkPositive([1, 2, 3, -4, 5]);
```

```js
function checkPositive(arr) {
  return arr.every(isPositive => {
    return isPositive > 0;
  });
  
}
checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5])); // false
console.log(checkPositive([1, 2, 3, 4, 5])); // true
console.log(checkPositive([1, -2, 3, -4, 5])); // false
/* ou */
function checkPositive(arr) {
  return arr.every(val => val > 0);
}
/* ou */
function checkPositive(arr) {
  return arr.every(function(value) {
    return value > 0;
  });
}
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria/301312)

------



## 23. Utilisez la méthode `some` pour vérifier que tous les éléments d'un tableau répondent à un critère

[Learn Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria)

La méthode `some` fonctionne avec des tableaux pour vérifier si un élément passe un test particulier. Il renvoie une valeur booléenne - `true` si  l'une des valeurs répond aux critères, `false` dans le cas contraire.
Par exemple, le code suivant vérifierait si un élément du tableau de nombres est inférieur à 10 :

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Renvoie true
```

-----

Utilisez la méthode `some` dans la fonction `checkPositive` pour vérifier si un  élément de `arr` est positif. La fonction doit renvoyer une valeur  booléenne.

> Votre code doit utiliser la méthode `some`.
> `checkPositive([1, 2, 3, -4, 5])` doit renvoyer `true`.
> `checkPositive([1, 2, 3, 4, 5])` doit renvoyer `true`.
> `checkPositive([- 1, -2, -3, -4, -5])` doit renvoyer `false`.

```js
function checkPositive(arr) {
  	// Changer uniquement le code en dessous de cette ligne
	// Changer uniquement le code au-dessus de cette ligne
}
checkPositive([1, 2, 3, -4, 5]);
```

```js
function checkPositive(arr) {
  return arr.some(function(value) {
    return value > 0;
  });
}
checkPositive([1, 2, 3, -4, 5]);
console.log(checkPositive([1, 2, 3, -4, 5]));
console.log(checkPositive([1, 2, 3, 4, 5]));
console.log(checkPositive([-1, -2, -3, -4, -5]));
/* ou */
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```

[solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria/301314)

------



## 24. Introduction au currying et à l'application partielle

[Learn Functional Programming: Introduction to Currying and Partial Application | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application)

*L'arité* d'une fonction est le nombre d'arguments dont elle a besoin.  *Currying* une fonction signifie convertir une fonction de N arité en N  fonctions d'arité 1.
En d'autres termes, il restructure une  fonction afin de prendre un argument, puis renvoie une autre fonction  qui prend l'argument suivant, et ainsi de suite.
Voici un exemple :

```js
// Fonction non curry
function unCurried(x, y) {
  return x + y;
}
// Fonction curry
function curried(x) {
  return function(y) {
    return x + y;
  }
}
// Alternative utilisant ES6
const curried = x => y => x + y

curried(1)(2) // Renvoie 3
```

Ceci est utile dans votre programme si vous ne pouvez pas fournir tous les  arguments à une fonction en même temps. Vous pouvez enregistrer chaque  appel de fonction dans une variable, qui contiendra la référence de  fonction retournée qui prend le prochain argument lorsqu'elle est  disponible. Voici un exemple utilisant la fonction curry dans l'exemple  ci-dessus :

```js
// Appel d'une fonction curry en plusieurs parties :
var funcForY = curried(1);
console.log(funcForY(2)); // Imprime 3
```

De même, une *application partielle* peut être décrite comme l'application  de quelques arguments à une fonction à la fois et le retour d'une autre  fonction appliquée à plus d'arguments. Voici un exemple :

```js
// Fonction impartiale
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Renvoie 13
```

-----

Remplissez le corps de la fonction `add` afin qu'elle utilise le currying pour ajouter les paramètres `x`, `y` et `z`.

> `add(10)(20)(30)` doit renvoyer `60`.
> `add(1)(2)(3)` doit renvoyer `6`.
> `add(11)(22)(33)` devrait renvoyer `66`.
> Votre code doit inclure une instruction finale qui renvoie `x + y + z`.

```js
function add(x) {
  	// Changer uniquement le code en dessous de cette ligne
	// Changer uniquement le code au-dessus de cette ligne
}
add(10)(20)(30);
```

```js
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
};
add(10)(20)(30);
console.log(add(10)(20)(30)); // 60
console.log(add(1)(2)(3)); // 6
console.log(add(11)(22)(33)); // 66
/* ou */
function add(x) {
	return y => z => x + y + z;
}
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-introduction-to-currying-and-partial-application/301232)



