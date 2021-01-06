---
id: freeCodeCamp-Debugging-fr
title: Débogage
---



## Introduction aux défis du débogage

Le débogage est un outil  précieux et (malheureusement) nécessaire pour les programmeurs. Il suit  la phase de test consistant à vérifier si votre code fonctionne comme  prévu et à le découvrir s'il ne fonctionne pas. Le débogage consiste à trouver exactement  ce qui ne fonctionne pas et à le réparer. Après avoir passé du temps à  créer un bloc de code brillant, il est difficile de se rendre compte  qu'il peut contenir des erreurs. Ces problèmes se présentent  généralement sous trois formes :

1. erreurs de syntaxe qui empêchent un programme de s'exécuter
2. erreurs d'exécution lorsque le code ne s'exécute pas ou a un comportement inattendu
3. erreurs sémantiques (ou logiques) lorsque le code ne fait pas ce qu'il est censé faire.

Les éditeurs de code modernes (et l'expérience) peuvent aider à identifier  les erreurs de syntaxe. Les erreurs sémantiques et d'exécution sont plus difficiles à trouver. Ils peuvent provoquer le plantage de votre  programme, le faire fonctionner pour toujours ou donner une sortie  incorrecte. Considérez le débogage comme une tentative de comprendre  pourquoi votre code se comporte comme il est. Exemple d'erreur de  syntaxe - souvent détectée par l'éditeur de code :

```js
funtcion willNotWork( 
  console.log("Yuck");
}
// Le mot-clé "function" est mal orthographié et il manque une parenthèse
```

Voici un exemple d'erreur d'exécution - souvent détectée pendant l'exécution du programme :

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
// L'appel de loopy démarre une boucle infinie, ce qui peut planter votre navigateur
```

Exemple d'erreur sémantique - souvent détectée après avoir testé la sortie du code :

```js
function calcAreaOfRect(w, h) {
  return w + h; // Cela devrait être w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Corriger la syntaxe et le programme s'exécute, mais cela donne la mauvaise réponse
```

Le débogage est frustrant, mais il permet de développer (et de suivre) une approche étape par étape pour réviser votre code. Cela signifie  vérifier les valeurs intermédiaires et les types de variables pour voir  si elles sont ce qu'elles devraient être. Vous pouvez commencer par un  simple processus d'élimination.

Par exemple, si la fonction A  fonctionne et renvoie ce qu'elle est censée faire, alors la fonction B  peut avoir le problème. Ou commencez à vérifier les valeurs dans un bloc de code à partir du milieu pour essayer de réduire de moitié l'espace  de recherche. Un problème à un endroit indique un bogue dans la première moitié du code. Sinon, c'est probablement dans le second.

Cette  section couvrira quelques outils utiles pour trouver des bogues et  certaines des formes courantes qu'ils prennent. Heureusement, le  débogage est une compétence d'apprentissage qui nécessite juste un peu  de patience et de pratique pour être maîtrisée.

------



## 1. Utilisez la console JavaScript pour vérifier la valeur d'une variable

[Learn Debugging: Use the JavaScript Console to Check the Value of a Variable | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-the-javascript-console-to-check-the-value-of-a-variable)

Chrome et Firefox ont tous deux d'excellentes consoles JavaScript, également appelées DevTools, pour déboguer votre JavaScript.
Vous pouvez trouver des outils de développement dans le menu de votre Chrome ou dans la console Web du menu de Firefox. Si vous utilisez un autre  navigateur ou un téléphone mobile, nous vous recommandons vivement de  passer à Firefox ou Chrome pour ordinateur.
La méthode `console.log()`, qui « imprime » la sortie de ce qui est entre ses  parenthèses sur la console, sera probablement l'outil de débogage le  plus utile. Le placer à des points stratégiques de votre code peut vous  montrer les valeurs intermédiaires des variables. C'est une bonne  pratique d'avoir une idée de ce que devrait être la sortie avant de  regarder de quoi il s'agit. Avoir des points de contrôle pour voir  l'état de vos calculs tout au long de votre code vous aidera à  identifier le problème.
Voici un exemple pour imprimer 'Hello world!' à la console :

```js
console.log('Hello world!');
```

-----

Utilisez la méthode `console.log()` pour afficher la valeur de la variable a à l'endroit indiqué dans le code.

> Votre code doit utiliser `console.log()` pour vérifier la valeur de la variable a.

```js
let a = 5;
let b = 1;
a++;
// Only change code below this line
let sumAB = a + b;
console.log(sumAB);
```

```js
let a = 5;
let b = 1;
a++;
console.log(a);
let sumAB = a + b;
console.log(sumAB);
```

-----



## 2. Comprendre les différences entre freeCodeCamp et la console du navigateur

[Learn Debugging: Understanding the Differences between the freeCodeCamp and Browser Console | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/understanding-the-differences-between-the-freecodecamp-and-browser-console)

Vous avez peut-être remarqué que certains défis JavaScript de  freeCodeCamp incluent leur propre console. Cette console se comporte un  peu différemment de la console du navigateur que vous avez utilisée lors du dernier défi.
Le défi suivant vise à mettre en évidence la  principale différence entre la console freeCodeCamp et la console de  votre navigateur.
Lorsque vous exécutez du JavaScript ordinaire,  la console du navigateur affiche vos instructions `console.log()` le  nombre exact de fois où elles sont appelées.
La console  freeCodeCamp imprimera vos instructions `console.log()` peu de temps  après que l'éditeur ait détecté un changement dans le script, ainsi que  pendant les tests.
La console freeCodeCamp est effacée avant  l'exécution des tests et, pour éviter le spam, n'imprime les journaux  que lors du premier test (voir la note ci-dessous pour les exceptions).
Si vous souhaitez voir chaque journal pour chaque test, exécutez les tests et ouvrez la console du navigateur. Si vous préférez utiliser la  console du navigateur et souhaitez qu'elle imite la console freeCodeCamp, placez `console.clear()` avant tout autre appel de `console`, pour effacer la console du navigateur.
**Remarque :** les `console.log` à l'intérieur des fonctions sont imprimées sur la console freeCodeCamp chaque fois que ces fonctions sont appelées, cela peut  aider à déboguer les fonctions qui sont appelées pendant les tests.

-----

Tout d'abord, utilisez `console.log` pour consigner la variable `output`.  Ensuite, utilisez `console.clear` pour effacer la console du navigateur.

> Vous devez utiliser `console.clear()` pour effacer la console du navigateur.
> Vous devez utiliser `console.log()` pour imprimer la variable `output`.

```js
// Ouvrez la console de votre navigateur.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Utilisez console.log() pour imprimer la variable de sortie.
// Exécutez les tests pour voir la différence entre les deux consoles.
// Maintenant, ajoutez console.clear() avant votre console.log() pour effacer la console du navigateur et passez les tests.
```

```js
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
console.clear();
console.log(output); // Get this to log once in the freeCodeCamp console and twice in the browser console
```

-----



## 3. Utilisez `typeof` pour vérifier le type d'une variable

[Learn Debugging: Use typeof to Check the Type of a Variable | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-typeof-to-check-the-type-of-a-variable)

Vous pouvez utiliser `typeof` pour vérifier la structure de données, ou le type, d'une variable. Ceci est utile pour le débogage lorsque vous  travaillez avec plusieurs types de données. Si vous pensez ajouter deux  nombres, mais que l'un est en fait une chaîne, les résultats peuvent  être inattendus. Les erreurs de type peuvent se cacher dans les calculs  ou les appels de fonction. Faites attention en particulier lorsque vous  accédez et travaillez avec des données externes sous la forme d'un objet JavaScript Object Notation (JSON).
Voici quelques exemples utilisant `typeof` :

```js
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
```

JavaScript reconnaît six types de données primitifs (immuables) : `Boolean`, `Null`, `Undefined`, `Number`, `String`, et `Symbol` (nouveau avec ES6) et un type pour  les éléments mutables : `Object`. Notez qu'en JavaScript, les tableaux sont techniquement un type d'objet.

-----

Ajoutez deux instructions `console.log()` pour vérifier le type de chacune des deux variables `seven` et `three` dans le code.

> Votre code doit utiliser `typeof` dans deux instructions `console.log()` pour vérifier le type des variables.
> Votre code doit utiliser `typeof` pour vérifier le type de la variable `seven`.
> Votre code doit utiliser `typeof` pour vérifier le type de la variable `three`.

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Changer uniquement le code en dessous de cette ligne
```

```js
let seven = 7;
let three = "3";
console.log(seven + three); //73
console.log(typeof seven); //number
console.log(typeof three); // string
```

------



## 4. Repérer les noms de variables et de fonctions mal orthographiés

[Learn Debugging: Catch Misspelled Variable and Function Names | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-misspelled-variable-and-function-names)

Les méthodes `console.log()` et `typeof` sont les deux principaux moyens de vérifier les valeurs intermédiaires et les types de sortie du  programme. Il est maintenant temps de se familiariser avec les formes courantes que prennent les bogues. Un problème au niveau de la syntaxe  avec lequel les dactylographes rapides peuvent compatir est l'humble  erreur d'orthographe.
Les caractères transposés, manquants ou mal mis en majuscules dans un nom de variable ou de fonction obligeront le  navigateur à rechercher un objet qui n'existe pas - et à se plaindre  sous la forme d'une erreur de référence. Les noms de variables et de  fonctions JavaScript sont sensibles à la casse.

-----

Corrigez les deux fautes d'orthographe dans le code pour que le calcul `netWorkingCapital` fonctionne.

> Vérifiez l'orthographe des deux variables utilisées dans le calcul `netWorkingCapital`, la sortie de la console doit indiquer que `"Net working capital is: 2"`.
> Il ne doit y avoir aucune instance de variables mal orthographiées dans le code.
> La variable `receivables` doit être déclarée et utilisée correctement dans le code.
> Il ne doit y avoir aucune instance de variables mal orthographiées dans le code.
> La variable `payables` doit être déclarée et utilisée correctement dans le code.

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`); // ReferenceError: recievables is not defined
```

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`); // Net working capital is: 2
```

-----



## 5. Repérez les parenthèses, crochets, accolades et guillemets non fermés

[Learn Debugging: Catch Unclosed Parentheses, Brackets, Braces and Quotes | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-unclosed-parentheses-brackets-braces-and-quotes)

Une autre erreur de syntaxe à prendre en compte est que toutes les  parenthèses ouvrantes, crochets, accolades et guillemets ont une paire  de fermeture. L'oubli d'un élément a tendance à se produire lorsque vous modifiez du code existant et que vous insérez des éléments avec l'un  des types de paires. Faites également attention lorsque vous imbriquez  des blocs de code dans d'autres, par exemple en ajoutant une fonction de rappel en tant qu'argument à une méthode.
Une façon d'éviter  cette erreur est dès que le caractère d'ouverture est tapé, d'inclure  immédiatement la correspondance de fermeture, puis de déplacer le  curseur entre eux et de continuer le codage. Heureusement, la plupart  des éditeurs de code modernes génèrent automatiquement la seconde moitié de la paire.

Corrigez les erreurs de deux paires dans le code.

> Votre code devrait corriger la partie manquante du tableau.
> Votre code devrait corriger la partie manquante de la méthode `.reduce()`. La  sortie de la console doit indiquer que `"Sum of array values is: 6"`.

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`); // Erreur de syntaxe: inconnu: Jeton inattendu, attendu "," (1:22)
```

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  (previous + current));
console.log(`Sum of array values is: ${arraySum}`); // Sum of array values is: 6
```

-----



## 6. Repérer l'utilisation mixte de citations simples et doubles

[Learn Debugging: Catch Mixed Usage of Single and Double Quotes | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-mixed-usage-of-single-and-double-quotes)

JavaScript permet l'utilisation de guillemets simples (`'`) et doubles (`"`) pour déclarer une chaîne. Décider lequel utiliser se résume  généralement à des préférences personnelles, à quelques exceptions près.
Avoir deux choix est idéal lorsqu'une chaîne a des contractions ou un autre  texte entre guillemets. Veillez simplement à ne pas fermer la chaîne  trop tôt, ce qui provoque une erreur de syntaxe.
Voici quelques exemples de mélange de citations :

```js
// Ceux-ci sont corrects:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// Ceci est une erreur:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

Bien sûr, il est acceptable d'utiliser un seul style de guillemets. Vous  pouvez échapper les guillemets à l'intérieur de la chaîne en utilisant  le caractère d'échappement (`\`) :

```js
// Utilisation correcte des mêmes guillemets:
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

-----

Corrigez la chaîne afin qu'elle utilise des guillemets différents pour la valeur `href` ou échappe les guillemets existants. Gardez les guillemets doubles autour de toute la chaîne.

> Votre code doit corriger les guillemets autour de la valeur `href` `"#Home"` en les modifiant ou en les échappant.
> Votre code doit conserver les guillemets doubles autour de la chaîne entière.

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml); // SyntaxError: unknown: Unexpected token, expected ";" (1:43)
```

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml); // <p>Click here to <a href="#Home">return home</a></p>
// ou
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml); // <p>Click here to <a href="#Home">return home</a></p>
```

-----



## 7. Repérer l'utilisation de l'opérateur d'affectation au lieu de l'opérateur d'égalité

[Learn Debugging: Catch Use of Assignment Operator Instead of Equality Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-use-of-assignment-operator-instead-of-equality-operator)

Les programmes de branchement, c'est-à-dire ceux qui font des choses  différentes si certaines conditions sont remplies, reposent sur des  instructions `if`, `else if` et `else` en JavaScript. La condition prend  parfois la forme de test si un résultat est égal à une valeur.
Cette logique est parlée (du moins en anglais) comme « si x est égal à y, alors... » qui peut littéralement se traduire en code à l'aide de  `=`, ou opérateur d'affectation. Cela conduit à un flux de contrôle  inattendu dans votre programme.
Comme indiqué dans les défis  précédents, l'opérateur d'affectation (`=`) dans JavaScript attribue une  valeur à un nom de variable. Et les opérateurs `==` et `===` vérifient l'égalité (le triple `===` teste l'égalité stricte, ce qui signifie que la valeur et le type sont identiques).
Le code ci-dessous attribue à `x` la valeur 2, ce qui est évalué comme vrai. Presque chaque valeur seule en JavaScript est évaluée à `true`, à l'exception de ce que l'on  appelle les valeurs "fausses" : `false`, `0`, `""` (une chaîne vide), `NaN`,  `undefined` et `null`.

```js
let x = 1;
let y = 2;
if (x = y) {
  // ce bloc de code fonctionnera pour n'importe quelle valeur de y (sauf si y a été initialement défini comme faux)
} else {
  // ce bloc de code est ce qui devrait s'exécuter (mais ne le fera pas) dans cet exemple
}
```

-----

Corrigez la condition pour que le programme exécute la bonne branche et que la valeur appropriée soit affectée à `result`.

> Votre code doit corriger la condition afin de vérifier l'égalité, au lieu d'utiliser l'affectation.
> La condition doit utiliser `==` ou `===` pour tester l'égalité.

```js
let x = 7;
let y = 9;
let result = "to come";
if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result); // Equal!
```

```js
let x = 7;
let y = 9;
let result = "to come";
if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result); // Not equal!
```

-----



## 8. Repérer les parenthèses ouvertes et fermantes manquantes après un appel de fonction

[Learn Debugging: Catch Missing Open and Closing Parenthesis After a Function Call | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-missing-open-and-closing-parenthesis-after-a-function-call)

Lorsqu'une fonction ou une méthode ne prend aucun argument, vous pouvez  oublier d'inclure les parenthèses d'ouverture et de fermeture (vides)  lors de son appel. Souvent, le résultat d'un appel de fonction est  enregistré dans une variable pour une autre utilisation dans votre code. Cette erreur peut être détectée en enregistrant les valeurs des  variables (ou leurs types) dans la console et en voyant que l'une est  définie sur une référence de fonction, au lieu de la valeur attendue  renvoyée par la fonction.
Les variables de l'exemple suivant sont différentes :

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // défini pour égaler une fonction
let varTwo = myFunction(); // défini pour être égal à la chaîne 'You rock!'
```

-----

Corrigez le code afin que la variable `result` soit défini sur la valeur renvoyée par l'appel de la fonction `getNine`.

> Votre code doit corriger la variable `result` afin qu'il soit défini sur le nombre renvoyé par la fonction `getNine`.
> Votre code doit appeler la fonction `getNine`.

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let result = getNine;
console.log(result); // [Function: getNine]
```

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let result = getNine();
console.log(result); // 9
```

-----



## 9. Repérer les arguments d'interception passés dans le mauvais ordre lors de l'appel d'une fonction

[Learn Debugging: Catch Arguments Passed in the Wrong Order When Calling a Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-arguments-passed-in-the-wrong-order-when-calling-a-function)

Poursuivant la discussion sur l'appel des fonctions, le prochain bogue à surveiller est lorsque les arguments d'une fonction sont fournis dans  un ordre incorrect. Si les arguments sont de types différents, comme une fonction attend un tableau et un entier, cela générera probablement une erreur d'exécution. Si les arguments sont du même type (tous les  nombres entiers, par exemple), alors la logique du code n'a pas de sens. Assurez-vous de fournir tous les arguments requis, dans le bon ordre  pour éviter ces problèmes.

-----

La fonction `riseToPower` élève une base à un exposant. Malheureusement, il n'est pas appelé correctement - corrigez le code pour que la valeur de `power`  attendue soit 8.

> Votre code doit fixer la variable `power` de sorte qu'elle équivaut à 2  élevé à la 3ème puissance, et non 3 à la 2ème puissance.
> Votre code doit utiliser l'ordre correct des arguments pour l'appel de la fonction `riseToPower`.

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power); // 9
```

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power); // 8
```

------



## 10. Repérer une erreur off-by-one lors de l'utilisation de l'indexation

[Learn Debugging: Catch Off By One Errors When Using Indexing | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-off-by-one-errors-when-using-indexing)

*Des erreurs off-by-one* (parfois appelées OBOE, « erreur de décalage unitaire ») surviennent lorsque vous essayez de  cibler un index spécifique d'une chaîne ou d'un tableau (pour découper  ou accéder à un segment), ou lorsque vous bouclez sur les index de  ceux-ci. L'indexation JavaScript commence à zéro, pas à un, ce qui  signifie que le dernier index est toujours un de moins que la longueur  de l'élément. Si vous essayez d'accéder à un index égal à la longueur,  le programme peut lancer une erreur de référence « index hors limites » ("index out of range") ou imprimer `undefined`.
Lorsque vous utilisez des méthodes de chaîne ou de tableau qui prennent des plages d'index comme arguments, il est  utile de lire la documentation et de comprendre si elles sont inclusives (l'élément à l'index donné fait partie de ce qui est retourné) ou non.  Voici quelques exemples d'erreurs off by one :

```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  // fait une boucle de trop à la fin
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // fait une boucle trop souvent et manque le premier caractère à l'index 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // Boucle d'or approuve - c'est parfait
  console.log(alphabet[k]);
}
```

-----

Corrigez les deux erreurs d'indexation dans la fonction suivante afin que tous les nombres 1 à 5 soient imprimés sur la console.

> Votre code doit définir la condition initiale de la boucle afin qu'elle commence au premier index.
> Votre code doit corriger la condition initiale de la boucle afin que l'index commence à 0.
> Votre code doit définir la condition terminale de la boucle afin qu'elle s'arrête au dernier index.
> Votre code doit fixer la condition terminale de la boucle afin qu'elle s'arrête à 1 avant la longueur.

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Changer uniquement le code en dessous de cette ligne
  for (let i = 1; i <= len; i++) {
  // Ne changez le code qu'au-dessus de cette ligne
    console.log(firstFive[i]); // 2 3 4 5 undefined
  }
}
countToFive();
```

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]); // 1 2 3 4 5
  }
}
countToFive();
```

-----



## 11. Soyez prudent lors de la réinitialisation de variables à l'intérieur d'une boucle

[Learn Debugging: Use Caution When Reinitializing Variables Inside a Loop | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-caution-when-reinitializing-variables-inside-a-loop)

Parfois, il est nécessaire d'enregistrer des informations, d'incrémenter des  compteurs ou de réinitialiser des variables dans une boucle. Un problème potentiel est lorsque les variables doivent être réinitialisées et ne  le sont pas, ou vice versa. Ceci est particulièrement dangereux si vous  réinitialisez accidentellement la variable utilisée pour la condition  terminale, provoquant une boucle infinie.
L'impression de valeurs de variable à chaque cycle de votre boucle à l'aide de `console.log()` peut découvrir un comportement bogué lié à la réinitialisation ou à  l'échec de la réinitialisation d'une variable.

-----

La fonction  suivante est censée créer un tableau à deux dimensions avec `m` lignes et `n` colonnes de zéros. Malheureusement, il ne produit pas la sortie  attendue car la variable de ligne n'est pas en cours de réinitialisation (remise à un tableau vide) dans la boucle externe. Corrigez le code  pour qu'il renvoie un tableau 3x2 correct de zéros, qui ressemble à `[[0, 0], [0, 0], [0, 0]]`.

> Votre code doit définir la variable `matrix` sur un tableau contenant 3 lignes de 2 colonnes de zéros chacune.
> La variable `matrix` doit avoir 3 lignes.
> La variable `matrix` doit avoir 2 colonnes dans chaque ligne.

```js
function zeroArray(m, n) {
  // Crée un tableau 2D avec m lignes et n colonnes de zéros
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Ajoute la m-ième ligne dans newArray
    for (let j = 0; j < n; j++) {
      // Pousse n zéros dans la ligne courante pour créer les colonnes
      row.push(0);
    }
    // Pousse la ligne actuelle, qui contient maintenant n zéros, vers le tableau
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
// [ [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0 ] ]
```

```js
function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = []; // row a été déclarée à l'intérieur de la boucle externe. Maintenant, une nouvelle ligne sera initialisée à chaque itération de la boucle externe permettant pour la matrice souhaitée.
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
// [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
```

-----



## 12. Empêcher les boucles infinies avec une condition de terminal valide

[Learn Debugging: Prevent Infinite Loops with a Valid Terminal Condition | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/prevent-infinite-loops-with-a-valid-terminal-condition)

Le dernier sujet est la redoutable boucle infinie. Les boucles sont  d'excellents outils lorsque vous avez besoin que votre programme exécute un bloc de code un certain nombre de fois ou jusqu'à ce qu'une  condition soit remplie, mais elles ont besoin d'une condition terminale  qui met fin à la boucle. Les boucles infinies sont susceptibles de geler ou de planter le navigateur et de provoquer un chaos général dans  l'exécution du programme, ce dont personne ne veut.
Il y avait un exemple de boucle infinie dans l'introduction de cette section - il n'y avait pas de condition terminale pour sortir de la boucle `while` dans  `loopy()`. N'appelez PAS cette fonction !

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

C'est le travail du programmeur de s'assurer que la condition du terminal,  qui indique au programme quand sortir du code de boucle, est finalement  atteinte. Une erreur est l'incrémentation ou la décrémentation d'une  variable de compteur dans le mauvais sens à partir de l'état terminal.  Un autre consiste à réinitialiser accidentellement un compteur ou une  variable d'index dans le code de la boucle, au lieu de l'incrémenter ou  de le décrémenter.

-----

La fonction `myFunc()` contient une boucle  infinie car la condition terminale `i != 4` ne sera jamais évaluée à `false` (et interrompra la boucle) - `i` sera  incrémenter de 2 à chaque passage et sautera juste au-dessus 4 car `i` est impair pour commencer. Corrigez l'opérateur de comparaison dans la condition terminale pour que la  boucle ne s'exécute que pour `i` inférieur ou égal à 4.

> Votre code doit changer l'opérateur de comparaison dans la condition terminale (la partie médiane) de la boucle `for`.
> Votre code doit fixer l'opérateur de comparaison dans l'état terminal de la boucle.

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
```

```js
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
myFunc();
// Still going!
// Still going!
```

