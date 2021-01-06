---
id: freeCodeCamp-Basic_Algorithm_Scripting-fr
title: Script d'algorithme de base
---



## Introduction aux scripts d'algorithmes de base

[Basic Algorithm Scripting | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/)

Un algorithme informatique est une séquence d'étapes qui est suivie pour  atteindre un résultat particulier. Pour écrire un algorithme, vous devez d'abord comprendre un problème, puis le résoudre avec du codage.

Pour faciliter la résolution des problèmes, il peut être utile de les  décomposer en plusieurs morceaux. Ensuite, chaque morceau peut être  résolu un par un. Par exemple, si vous construisez une calculatrice,  n'essayez pas de résoudre le problème dans son ensemble. Tout d'abord,  considérez comment obtenir des intrants. Ensuite, déterminez chaque  opération arithmétique une par une. Enfin, affichez les résultats.

Dans cette section, nous allons apprendre à résoudre des problèmes  d'algorithme de base à l'aide de JavaScript. Cela vous aidera à  améliorer vos compétences en résolution de problèmes et à vous préparer à résoudre ultérieurement des problèmes plus complexes.

**Astuce :** si vous êtes bloqué, essayez d'utiliser `console.log()` pour enregistrer  les valeurs des variables dans la console. Cela aidera à déboguer les  problèmes.

------



## 1. Convertir Celsius en Fahrenheit

[Learn Basic Algorithm Scripting: Convert Celsius to Fahrenheit | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit)

L'algorithme pour convertir de Celsius en Fahrenheit est la température en Celsius fois `9/5`, plus `32`.

-----

On vous donne une variable `celsius` représentant une température en  Celsius. Utilisez la variable `fahrenheit` déjà définie et attribuez-lui  la température Fahrenheit équivalente à la température Celsius donnée.  Utilisez l'algorithme mentionné ci-dessus pour convertir la température  Celsius en Fahrenheit.

> `convertToF(0)` doit renvoyer un nombre
> `convertToF(-30)` doit renvoyer une valeur de `-22`
> `convertToF(-10)` doit renvoyer une valeur de `14`
> `convertToF(0)` doit renvoyer une valeur de `32`
> `convertToF(20)` doit renvoyer une valeur de `68`
> `convertToF(30)` doit renvoyer une valeur de `86`

```js
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
convertToF(30);

console.log(convertToF(-30)); // -22
console.log(convertToF(-10)); // 14
console.log(convertToF(0)); // 32
console.log(convertToF(20)); // 68
console.log(convertToF(30)); // 86
```

-----



## 2. Inverser une chaîne

[Learn Basic Algorithm Scripting: Reverse a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string)

Inversez la chaîne fournie.
Vous devrez peut-être transformer la chaîne en tableau avant de pouvoir l'inverser.
Votre résultat doit être une chaîne.

> `reverseString('hello')` doit renvoyer une chaîne.
> `reverseString('hello')` devrait devenir `'olleh'`.
> `reverseString('Howdy')` doit devenir `'ydwoH'`.
> `reverseString('Greetings from Earth')` doit renvoyer `'htraE morf sgniteerG'`.

```js
function reverseString(str) {
  let arr = [];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    arr.unshift(str[i]);
  }
  for (let j = 0; j < (str.length); j++) {
    newStr = arr.pop() + newStr;
  }
  return newStr;
}
console.log(reverseString("hello")); // olleh
console.log(reverseString("Howdy")); // ydwoH
console.log(reverseString("Greetings from Earth")); // htraE morf sgniteerG
```

-----



## 3. Factorialiser un nombre

[Learn Basic Algorithm Scripting: Factorialize a Number | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number)

Renvoyez la factorielle de l'entier fourni.
Si l'entier est représenté par la lettre n, une factorielle est le produit de tous les entiers positifs inférieurs ou égaux à n.
Les factorielles sont souvent représentées avec la notation abrégée `n!`
Par exemple : `5! = 1 * 2 * 3 * 4 * 5 = 120`
Seuls les entiers supérieurs ou égaux à zéro seront fournis à la fonction.

> `factorialize(5)` doit renvoyer un nombre.
> `factorialize(5)` doit renvoyer 120.
> `factorialize(10)` doit renvoyer 3628800.
> `factorialize(20)` doit renvoyer 2432902008176640000.
> `factorialize(0)` doit renvoyer 1.

```js
function factorialize(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i
  }
  return fact;
}
factorialize(5);
console.log(factorialize(5)); // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
console.log(factorialize(0)); // 1
```

-----



## 4. Rechercher le mot le plus long d'une chaîne

[Learn Basic Algorithm Scripting: Find the Longest Word in a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string)

Renvoyez la longueur du mot le plus long de la phrase fournie.
Votre réponse doit être un nombre.

> `findLongestWordLength("The quick brown fox jumped over the lazy dog")` devrait renvoyer un nombre.
> `findLongestWordLength("The quick brown fox jumped over the lazy dog")` devrait revenir 6.
> `findLongestWordLength("May the force be with you")` devrait renvoyer 5.
> `findLongestWordLength("Google do a barrel roll")` devrait renvoyer 6.
> `findLongestWordLength("What is the average airspeed velocity of an unladen swallow")` devrait renvoyer 8.
> `findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")` doit renvoyer 19.

```js
function findLongestWordLength(str) {
  let word = /\w+/g;
  let result = str.match(word);
  let letter = /\w/g;
  let num = 0;
  for (let i = 0; i < result.length; i++) {
    if (num < result[i].match(letter).length) {
      num = result[i].match(letter).length;
    };
  };
  return num;
};
findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWordLength("May the force be with you")); // 5
console.log(findLongestWordLength("Google do a barrel roll")); // 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19
```

-----



## 5. Renvoyer les plus grands nombres dans les tableaux

[Learn Basic Algorithm Scripting: Return Largest Numbers in Arrays | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays)

Renvoyez un tableau constitué du plus grand nombre de chaque sous-tableau fourni. Pour plus de simplicité, le tableau fourni contiendra  exactement 4 sous-tableaux.
N'oubliez pas que vous pouvez  parcourir un tableau avec une simple boucle `for` et accéder à chaque  membre avec la syntaxe de tableau `arr[i]`.

> `mostOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])` doit renvoyer un tableau.
> `largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])` doit renvoyer `[27, 5 , 39, 1001]`.
> `largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])` doit renvoyer `[9, 35 , 97, 1000000]`.
> `mostOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])` doit renvoyer  `[25, 48, 21, -3]`.

```js
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let numMax = Number('-Infinity');
    for (let j = 0; j < arr[i].length; j++) {      
      if (numMax < arr[i][j]) {
        numMax = arr[i][j];
      }
    }
    newArr.push(numMax)
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(mostOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [5, 27, 39, 1001]
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [27, 5, 39, 1001]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])); // [9, 35, 97, 1000000]
console.log(mostOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); // [25, 48, 21, -3]
```

------



## 6. Confirmer la fin

[Learn Basic Algorithm Scripting: Confirm the Ending | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending)

Vérifiez si une chaîne (premier argument, `str`) se termine par la chaîne cible donnée (deuxième argument, `target`).
Ce défi peut être résolu avec la méthode `.endsWith()`, qui a été  introduite dans ES2015. Mais dans le cadre de ce défi, nous aimerions  que vous utilisiez à la place l'une des méthodes de sous-chaîne JavaScript.

> `confirmEnding("Bastian", "n")` doit renvoyer `true`.
> `confirmEnding("Congratulation", "on")` doit renvoyer `true`.
> `confirmEnding("Connor", "n")` doit renvoyer `false`.
> `confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` doit renvoyer `false`.
> `confirmEnding("He has to give me a new name", "name")` doit retourner `true`.
> `confirmEnding("Open sesame", "same")` doit renvoyer `true`.
> `confirmEnding("Open sesame", "sage")` doit renvoyer `false`.
> `confirmEnding("Open sesame", "game")` doit renvoyer `false`.
> `confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` doit renvoyer `false`.
> `confirmEnding("Abstraction", "action")` doit renvoyer `true`.
> Votre code ne doit pas utiliser la méthode intégrée `.endsWith()` pour résoudre le problème.

```js
function confirmEnding(str, target) {
  if (str.lastIndexOf(target) === (str.length - target.length)) {
    return true
  } else {
    return false;
  }
};

confirmEnding("Bastian", "n");

console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // false
console.log(confirmEnding("He has to give me a new name", "name")); // true
console.log(confirmEnding("He has to give me a new name", "sage")); // false
console.log(confirmEnding("He has to give me a new name", "game")); // false
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // false
console.log(confirmEnding("Abstraction", "action")); // true
```

Solutions (https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-confirm-the-ending/16006)

```js
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("He has to give me a new name", "name");
```

Explication du code :

- Nous utilisons d'abord la méthode `slice` pour copier la chaîne.
- Afin d'obtenir les derniers caractères de `str` équivalents à la longueur de `target`, nous utilisons la méthode `slice`.
- Le premier paramètre à l'intérieur de la méthode `slice` est l'index de départ et le deuxième paramètre serait l'index de fin.
- Par exemple, `str.slice(10, 17)` renverra `give me`.
- Dans ce cas, nous n'incluons qu'un seul paramètre dont il copiera tout à partir de l'index de départ.
- Nous soustrayons la longueur de `str` et la longueur de `target`, de  cette façon, nous obtiendrons les derniers caractères restants  équivalents à la longueur de `target`.
- Enfin, nous comparons le résultat de retour de `slice` à `target` et vérifions si elles ont les mêmes caractères.

```js
function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}
console.log(confirmEnding("Bastian", "n"));
```

Explication du code :

- Nous devons créer un modèle à partir de la variable `target` qui existe à la fin de la chaîne `str`.
- Puisque nous allons utiliser une variable qui changera le modèle à  chaque fois que la fonction sera appelée, nous utiliserons le  constructeur de l'objet d'expression régulière `new RegExp(pattern [,  flags])`, donc nous commençons par : `new RegExp(target)`.
- Ensuite,  nous devons vérifier à la fin de la chaîne, donc nous concaténons à la variable `target` le caractère `$` pour correspondre à la fin : `new RegExp (target + '$')`.
- Nous utilisons le drapeau `i` pour ignorer la casse du modèle et nous avons notre RegExp complété : `new RegExp(target + '$', 'i')`, ou nous pouvons entièrement ignorer le drapeau.
- Enfin,  nous utilisons notre expression régulière avec la méthode `test` sur la chaîne donnée, pour vérifier si la chaîne se termine par le modèle et  renvoie `true` ou `false` en conséquence.

```js
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}
confirmEnding("Bastian", "n");
```

Explication du code :

- Si un nombre négatif est fourni comme  premier paramètre à `slice()`, le décalage est pris en arrière à partir de la fin de la chaîne.

-----



## 7. Répéter une chaîne Répéter une chaîne

[Learn Basic Algorithm Scripting: Repeat a String Repeat a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string)

Répétez une chaîne donnée `str` (premier argument) `num` fois  (deuxième argument). Renvoyez une chaîne vide si `num` n'est pas un nombre positif. Dans le cadre de ce défi, n'utilisez pas la méthode intégrée `.repeat()`.

> `repeatStringNumTimes('*', 3)` doit renvoyer `'***'`.
> `repeatStringNumTimes('abc', 3)` doit renvoyer `'abcabcabc'`.
> `repeatStringNumTimes('abc', 4)` doit renvoyer `'abcabcabcabc'`.
> `repeatStringNumTimes('abc', 1)` doit renvoyer `'abc'`.
> `repeatStringNumTimes('*', 8)` doit renvoyer `'****'`.
> `repeatStringNumTimes('abc', -2)` doit renvoyer `''`.
> La méthode intégrée `repeat()` ne doit pas être utilisée.
> `repeatStringNumTimes('abc', 0)` doit renvoyer `''`.

```js
function repeatStringNumTimes(str, num) {
  let repeatString = "";
  if (num <= 0 || num === NaN) {
    return "";
  } else {
    for (let i = 0; i < num; i++) {
      repeatString = repeatString + str;
    }
  return repeatString;
  };
};

repeatStringNumTimes("abc", 3);

console.log(repeatStringNumTimes("abc", 3)); // abcabcabc
console.log(repeatStringNumTimes("*", 3)); // ***
console.log(repeatStringNumTimes("abc", 4)); // abcabcabcabc
console.log(repeatStringNumTimes("abc", 1)); // abc
console.log(repeatStringNumTimes("*", 8)); // ********
console.log(repeatStringNumTimes("abc", -2)); // 
console.log(repeatStringNumTimes("abc", 0)); // 
```

------



## 8. Tronquer une chaîne

[Learn Basic Algorithm Scripting: Truncate a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string)

Tronquez une chaîne (premier argument) si elle est plus longue que la  longueur de chaîne maximale donnée (deuxième argument). Renvoie la  chaîne tronquée avec  `...` final.

> `truncateString('A-tisket a-tasket A green and yellow basket', 8)` devrait renvoyer `'A-tisket...'`.
> `truncateString('Peter Piper a choisi un pic de poivrons marinés', 11)` devrait renvoyer `'Peter Piper...'`.
> `truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A  green and yellow basket'.length)` devrait renvoyer `'A-tisket a-tasket A  green and yellow basket'`.
> `truncateString('A-tisket a-tasket A  green and yellow basket', 'A-tisket a-tasket A green and yellow  basket'.length + 2)` devrait renvoyer `'A-tisket a-tasket A green and  yellow basket'`.
> `truncateString('A-', 1)` doit renvoyer `'A...'`.
> `truncateString('Absolutely Longer', 2)` doit renvoyer `'Ab...'`.

```js
function truncateString(str, num) {
  if (str.length <= num) {
    return str.slice(0, num);
  } else {
  return str.slice(0, num) + "...";
  };
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1)); // A...
console.log(truncateString("Absolutely Longer", 2)); // Ab...
```

------



## 9. Qui trouve garde

[Learn Basic Algorithm Scripting: Finders Keepers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers)

Créez une fonction qui regarde à travers un  tableau `arr` et renvoie le premier élément qui passe un « test de vérité ». Cela signifie que pour un élément `x`, le « test de vérité » est passé si `func(x)` est `true`. Si aucun élément ne réussit le test, renvoie  `undefined`.

> `findElement([1, 3, 5, 8, 9, 10], function(num) {return num % 2 === 0;})` doit renvoyer `8`.
> `findElement([1, 3, 5, 9], function(num) {return num % 2 === 0;})` doit renvoyer `undefined`.

```js
function findElement(arr, func) {
  let num = 0;
  while (num < arr.length) {
    if (func(arr[num]) === true) {
      break;
    }
    num++;
  }
  return arr[num];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // 2
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // undefined
```

-----



## 10. Boo qui

[Learn Basic Algorithm Scripting: Boo who | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who)

Vérifiez si une valeur est classée comme primitive booléenne. Renvoie vrai ou faux.
Les primitives booléennes sont vraies et fausses.

> `booWho(true)` doit renvoyer `true`.
> `booWho(false)` doit renvoyer `true`.
> `booWho([1, 2, 3])` doit retourner `false`.
> `booWho([]. slice)` doit renvoyer `false`.
> `booWho({'a': 1})` doit renvoyer `false`.
> `booWho(1)` doit renvoyer `false`.
> `booWho(NaN)` doit renvoyer `false`.
> `booWho('a')` doit renvoyer `false`.
> `booWho('true')` doit renvoyer `false`.
> `booWho('false')` doit renvoyer `false`.

```js
function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

booWho(null);

console.log(booWho(null)); // false
console.log(booWho(true)); // true
console.log(booWho(false)); // true
console.log(booWho([1, 2, 3])); // false
console.log(booWho([].slice)); // false
console.log(booWho({ "a": 1 })); // false
console.log(booWho(1)); // false
console.log(booWho(NaN)); // false
console.log(booWho("a")); // false
console.log(booWho("true")); // false
console.log(booWho("false")); // false
```

------



## 11. Titrer une phrase

[Learn Basic Algorithm Scripting: Title Case a Sentence | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence)

Renvoyez la chaîne fournie avec la première lettre de chaque mot en  majuscule. Assurez-vous que le reste du mot est en minuscules.
Pour les besoins de cet exercice, vous devez également mettre en majuscule les mots de connexion tels que « le » et « de ».

> `titleCase('I'm a little tea pot')` doit renvoyer une chaîne.
> `titleCase('I'm a little tea pot')` devrait renvoyer `I'm A Little Tea Pot`.
> `titleCase('sHoRt and sToUt')` doit renvoyer `Short And Stout`.
> `titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` devrait renvoyer `Here Is My Handle Here Is My Spout`.

```js
function titleCase(str) {
  let sentence = str.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
}

titleCase("I'm a little tea pot");

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Here Is My Handle Here Is My Spout
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-title-case-a-sentence/16088)

-----



## 12. Trancher et épisser

[Learn Basic Algorithm Scripting: Slice and Splice | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice)

Vous recevez deux tableaux et un index.
Copiez chaque élément du premier tableau dans le deuxième tableau, dans l'ordre.
Commencez à insérer des éléments à l'index `n` du deuxième tableau.
Renvoyez le tableau résultant. Les tableaux d'entrée doivent rester les mêmes après l'exécution de la fonction.

> `frankenSplice([1, 2, 3], [4, 5], 1)` devrait renvoyer `[4, 1, 2, 3, 5]`.
> `frankenSplice([1, 2], ['a', 'b'], 1)` devrait renvoyer `['a', 1, 2, 'b']`.
> `frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)`  devrait renvoyer `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.
> Tous les éléments du premier tableau doivent être ajoutés au deuxième tableau dans leur ordre d'origine.
> Le premier tableau doit rester le même après l'exécution de la fonction.
> Le deuxième tableau doit rester le même après l'exécution de la fonction.

```js
function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();
  arr3.splice(n, 0, ...arr1);  
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [ 4, 1, 2, 3, 5, 6 ]
console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [ 4, 1, 2, 3, 5 ]
console.log(frankenSplice([1, 2], ["a", "b"], 1)); // [ 'a', 1, 2, 'b' ]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); //[ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-slice-and-splice/301148)

-----



## 13. Videur de faux

[Learn Basic Algorithm Scripting: Falsy Bouncer | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer)

Supprimez toutes les valeurs fausses d'un tableau.
Les valeurs fausses en JavaScript sont `false`, `null`, `0`, `""`, `undefined` et `NaN`.
Conseil : essayez de convertir chaque valeur en valeur booléenne.

> `bouncer([7, "ate", "", false, 9])` devrait renvoyer `[7, "ate", 9]`.
> `bouncer(["a", "b", "c"])` devrait renvoyer `["a", "b", "c"]`.
> `bouncer([false, null, 0, NaN, undefined, ""])` devrait renvoyer `[]`.
> `bouncer([null, NaN, 1, 2, undefined])` devrait renvoyer `[1, 2]`.

```js
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]
console.log(bouncer(["a", "b", "c"])); // [ 'a', 'b', 'c' ]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
console.log(bouncer([null, NaN, 1, 2, undefined])); // [ 1, 2 ]

// ou

function bouncer(arr) {
  return arr.filter(Boolean);
}
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-falsy-bouncer/16014)

-----



## 14. Où est-ce que j'appartiens

[Learn Basic Algorithm Scripting: Where do I Belong | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong)

Renvoyez l'index le plus bas auquel une valeur (deuxième argument) doit  être insérée dans un tableau (premier argument) une fois qu'elle a été  triée. La valeur renvoyée doit être un nombre.
Par exemple, `getIndexToIns([1,2,3,4], 1,5)` doit renvoyer `1` car il est supérieur à `1` (index 0), mais inférieur à `2` (index 1).
De même, `getIndexToIns([20,3,5], 19)` doit renvoyer `2` car une fois le  tableau trié, il ressemblera à `[3,5,20]` et `19` est inférieur à `20` (index  2) et supérieur à `5` ( index 1).

> `getIndexToIns([10, 20, 30, 40, 50], 35)` doit renvoyer `3`.
> `getIndexToIns([10, 20, 30, 40, 50], 35)` doit renvoyer un nombre.
> `getIndexToIns([10, 20, 30, 40, 50], 30)` doit renvoyer `2`.
> `getIndexToIns([10, 20, 30, 40, 50], 30)` doit renvoyer un nombre.
> `getIndexToIns([40, 60], 50)` doit renvoyer `1`.
> `getIndexToIns([40, 60], 50)` doit renvoyer un nombre.
> `getIndexToIns([3, 10, 5], 3)` doit renvoyer `0`.
> `getIndexToIns([3, 10, 5], 3)` doit renvoyer un nombre.
> `getIndexToIns([5, 3, 20, 3], 5)` doit renvoyer `2`.
> `getIndexToIns([5, 3, 20, 3], 5)` doit renvoyer un nombre.
> `getIndexToIns([2, 20, 10], 19)` doit renvoyer `2`.
> `getIndexToIns([2, 20, 10], 19)` doit renvoyer un nombre.
> `getIndexToIns([2, 5, 10], 15)` doit renvoyer `3`.
> `getIndexToIns([2, 5, 10], 15)` doit renvoyer un nombre.
> `getIndexToIns([], 1)` doit renvoyer `0`.
> `getIndexToIns([], 1)` doit renvoyer un nombre.

```js
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
  return a - b;
  });
  
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      index++;
    }
  }
  return index;
}

getIndexToIns([40, 60], 50)

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([3, 10, 5], 3)); // 0
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
console.log(getIndexToIns([2, 20, 10], 19)); // 2
console.log(getIndexToIns([2, 5, 10], 15)); // 3
console.log(getIndexToIns([], 1)); // 0
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-where-do-i-belong/16094)

-----



## 15. Mutations

[Learn Basic Algorithm Scripting: Mutations | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations)

Renvoyez `true` si la chaîne du premier élément du tableau contient toutes les lettres de la chaîne du deuxième élément du tableau.
Par exemple, `['hello', 'Hello']`, doit retourner `true` car toutes les lettres de la deuxième chaîne sont présentes dans la première, en ignorant la  casse.
Les arguments `['hello', 'hey']` doivent renvoyer `false` car la chaîne `'hello'` ne contient pas de `'y'`.
Enfin, `['Alien', 'line']`, doit retourner `true` car toutes les lettres de `'line'` sont présentes dans `'Alien'`.

> `mutation(['hello', 'hey'])` doit retourner `false`.
> `mutation(['hello', 'Hello'])` doit retourner `true`.
> `mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])` doit retourner `true`.
> `mutation(['Mary', 'Army'])` devrait retourner `true`.
> `mutation(['Mary', 'Aarmy'])` doit retourner `true`.
> `mutation(['Alien', 'line'])` doit retourner `true`.
> `mutation(['floor', 'for'])` doit retourner `true`.
> `mutation(['hello', 'neo'])` doit retourner `false`.
> `mutation(['voodoo', 'no'])` doit retourner `false`.
> `mutation(['ate', 'date'])` doit renvoyer `false`.
> `mutation(['Tiger', 'Zebra'])` doit retourner `false`.
> `mutation(['Noel', 'Ole'])` doit retourner `true`.

```js
function mutation(arr) {
  let arr0 = arr[0].toLowerCase();
  let arr1 = arr[1].toLowerCase();
  for (let i = 0; i < arr1.length; i++) {
    if (arr0.indexOf(arr1[i]) < 0) return false;
  }
  return true;
} 

mutation(["hello", "hey"]);

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["floor", "for"])); // true
console.log(mutation(["hello", "neo"])); // false
console.log(mutation(["voodoo", "no"])); // false
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["Tiger", "Zebra"])); // false
console.log(mutation(["Noel", "Ole"])); // true
```

[solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-mutations/16025)

-----



## 16. Chunky Monkey

[Learn Basic Algorithm Scripting: Chunky Monkey | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey)

Écrivez une fonction qui divise un tableau (premier argument) en groupes de la longueur `size` (deuxième argument) et les renvoie sous forme de tableau à deux dimensions.

> `chunkArrayInGroups(["a", "b", "c", "d"], 2)` doit renvoyer `[["a", "b"], ["c", "d"]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)` doit renvoyer `[[0, 1, 2], [3, 4, 5]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)` doit renvoyer `[[0, 1], [2, 3], [4, 5]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)` doit renvoyer `[[0, 1, 2, 3], [4, 5]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)` doit renvoyer `[[0, 1, 2], [3, 4, 5], [6]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)` doit renvoyer `[[0, 1, 2, 3], [4, 5, 6, 7], [8]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)` doit renvoyer `[[0, 1], [2, 3], [4, 5], [6, 7], [8]]`.

```js
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));    
  }  
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [['a', 'b'], ['c', 'd']]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // [[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[0, 1], [2, 3], [4,5], [6,7], [8]]
```

