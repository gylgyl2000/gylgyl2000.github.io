---
id: freeCodeCamp-Regular_Expressions-fr
title: Expressions régulières
---



## Introduction aux défis de l'expression régulière

[Regular Expressions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/)

Les expressions  régulières sont des chaînes spéciales qui représentent un modèle de  recherche. Aussi connus sous le nom de « regex » ou « regexp », ils aident  les programmeurs à faire correspondre, rechercher et remplacer du texte. Les expressions régulières peuvent paraître énigmatiques car quelques  caractères ont une signification particulière. Le but est de combiner  les symboles et le texte dans un modèle qui correspond à ce que vous  voulez, mais uniquement à ce que vous voulez. Cette section couvrira les caractères, quelques raccourcis et les utilisations courantes de  l'écriture d'expressions régulières.

-----



## 1. Utilisation de la méthode de test (`.test()`)

[Learn Regular Expressions: Using the Test Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method)

Les expressions régulières sont utilisées dans les langages de  programmation pour faire correspondre des parties de chaînes. Vous créez des modèles pour vous aider à faire cette correspondance.
Si  vous voulez trouver le mot `"le"` dans la chaîne `"Le chien a chassé le  chat"`, vous pouvez utiliser l'expression régulière suivante : `/le/`.  Notez que les guillemets ne sont pas obligatoires dans l'expression régulière.
JavaScript a plusieurs façons d'utiliser les  expressions régulières. Une façon de tester une expression régulière consiste à utiliser la méthode `.test()`. La méthode `.test()` prend  l'expression rationnelle, l'applique à une chaîne (qui est placée entre  parenthèses) et renvoie `true` ou `false` si votre modèle trouve quelque  chose ou non.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```

-----

Appliquez l'expression régulière `myRegex` sur la chaîne `myString` à l'aide de la méthode `.test()`.

> Vous devez utiliser `.test()` pour tester l'expression régulière.
> Votre résultat doit retourner `true`.

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // true
```

-----



## 2. Faire correspondre les chaînes littérales (`//`)

[Learn Regular Expressions: Match Literal Strings | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-literal-strings)

Dans le dernier défi, vous avez recherché le mot `"Hello"` en utilisant  l'expression régulière `/Hello/`. Cette expression régulière a recherché une correspondance littérale de la chaîne `"Hello"`. Voici un autre  exemple de recherche d'une correspondance littérale de la chaîne `"Kevin"` :

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true
```

Aucune autre forme de `"Kevin"` ne correspondra. Par exemple, l'expression  régulière `/Kevin/` ne correspondra pas à `"kevin"` ou `"KEVIN"`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false
```

Un défi futur montrera également comment faire correspondre ces autres formes.

-----

Complétez la regex `waldoRegex` pour trouver `"Waldo"` dans la chaîne `waldoIsHiding` avec une correspondance littérale.

> Votre regex `waldoRegex` devrait trouver `"Waldo"`
> Votre regex `waldoRegex` ne doit pas rechercher autre chose.
> Vous devez effectuer une correspondance de chaîne littérale avec votre regex.

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result); // true
```

-----



## 3. Faire correspondre une chaîne littérale avec différentes possibilités (`|`)

[Learn Regular Expressions: Match a Literal String with Different Possibilities | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-a-literal-string-with-different-possibilities)

En utilisant des expressions rationnelles comme `/coding/`, vous pouvez rechercher le modèle `"coding"` dans une autre chaîne.
Ceci est puissant pour rechercher des chaînes uniques, mais il est limité à  un seul modèle. Vous pouvez rechercher plusieurs modèles à l'aide de  `alternation` ou de l'opérateur `OR` : `|`.
Cet opérateur fait  correspondre les modèles avant ou après. Par exemple, si vous vouliez  faire correspondre `"yes"` ou `"no"`, l'expression régulière que vous  souhaitez est `/yes|no/`.
Vous pouvez également rechercher plus de deux modèles. Vous pouvez le faire en ajoutant plus de modèles avec  plus d'opérateurs `OR` les séparant, comme `/yes|no|maybe/`.

-----

Complétez l'expression `petRegex` pour correspondre aux animaux de compagnie `"dog"`, `"cat"`, `"bird"`, ou `"fish"`.

> Votre expression `petRegex` doit renvoyer `true` pour la chaîne `"John has a pet dog."`
> Votre expression `petRegex` doit renvoyer `false` pour la chaîne `"Emma has a pet rock."`
> Votre expression `petRegex` doit renvoyer `true` pour la chaîne `"Emma has a pet bird."`
> Votre expression `petRegex` doit renvoyer `true` pour la chaîne `"Liz has a pet cat."`
> Votre expression `petRegex` doit retourner `false` pour la chaîne `"Kara has a pet dolphin."`
> Votre expression `petRegex` doit retourner `true` pour la chaîne `"Alice has a pet fish."`
> Votre expression `petRegex` doit retourner `false` pour la chaîne `"Jimmy has a pet computer."`

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(result); // true
```

-----



## 4. Ignorer la casse lors de la correspondance (`i`)

[Learn Regular Expressions: Ignore Case While Matching | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/ignore-case-while-matching)

Jusqu'à présent, vous avez examiné les expressions régulières pour faire des  correspondances littérales de chaînes. Mais parfois, vous voudrez  peut-être également faire correspondre les différences de casse.
La casse (ou parfois la casse des lettres) est la différence entre les  lettres majuscules et minuscules. Des exemples de majuscules sont `"A"`, `"B"`, et `"C"`. Des exemples de minuscules sont `"a"`, `"b"`, et `"c"`.
Vous pouvez faire correspondre les deux cas en utilisant ce qu'on appelle un drapeau. Il y a d'autres drapeaux, mais ici vous vous concentrerez sur  le drapeau qui ignore la casse - le drapeau `i`. Vous pouvez l'utiliser en l'ajoutant à l'expression régulière. Un exemple d'utilisation de cet  indicateur est `/ignorecase/i`. Cette expression régulière peut  correspondre aux chaînes `"ignorecase"`, `"igNoreCase"`, et `"IgnoreCase"`.

-----

Écrivez une expression régulière `fccRegex` pour qu'elle corresponde à  `"freeCodeCamp"`, quel que soit son cas. Votre expression régulière ne doit correspondre à aucune abréviation ou variation avec des espaces.

> Votre expression régulière doit correspondre à `freeCodeCamp`
> Votre expression régulière doit correspondre à `FreeCodeCamp`
> Votre expression régulière doit correspondre à `FreecodeCamp`
> Votre expression régulière doit correspondre à `FreeCodecamp`
> Votre expression régulière ne doit pas correspondre à `Free Code Camp`
> Votre expression régulière doit correspondre à `FreeCOdeCamp`
> Votre expression régulière ne doit pas correspondre à `FCC`
> Votre expression régulière doit correspondre à `FrEeCoDeCamp`
> Votre expression régulière doit correspondre à `FrEeCodECamp`
> Votre expression régulière doit correspondre à `FReeCodeCAmp`

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
console.log(result); // true
```

-----



## 5. Extraire les correspondances (`.match()`)

[Learn Regular Expressions: Extract Matches | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/extract-matches)

Jusqu'à présent, vous avez seulement vérifié si un modèle existe ou non dans  une chaîne. Vous pouvez également extraire les correspondances réelles  que vous avez trouvées avec la méthode `.match()`.
Pour utiliser la méthode `.match()`, appliquez la méthode sur une chaîne et passez l'expression régulière entre parenthèses.
Voici un exemple :

```js
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```

Notez que la syntaxe `.match` est l'opposé de la méthode `.test` que vous avez utilisée jusqu'à présent :

```js
'string'.match(/regex/);
/regex/.test('string');
```

-----

Appliquez la méthode `.match()` pour extraire le mot `coding`.

> Le résultat doit avoir le mot `coding`
> Votre expression régulière `codingRegex` devrait rechercher `coding`
> Vous devez utiliser la méthode `.match()`.

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
consol.log(result); // [ 'coding', index: 18, input: 'Extract the word \'coding\' from this string.', groups: undefined ]
```

-----



## 6. Trouvez plus que la première correspondance (`g`)

[Learn Regular Expressions: Find More Than the First Match | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-more-than-the-first-match)

Jusqu'à présent, vous n'avez pu extraire ou rechercher un motif qu'une seule fois.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
```

Pour rechercher ou extraire un motif plusieurs fois, vous pouvez utiliser l'indicateur `g`.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```

-----

À l'aide de l'expression régulière `starRegex`, recherchez et extrayez les deux mots `"Twinkle"` de la chaîne `twinkleStar`.
**Remarque :** Vous pouvez avoir plusieurs indicateurs sur votre expression régulière comme `/search/gi`.

> Votre regex `starRegex` devrait utiliser l'indicateur global `g`
> Votre regex `starRegex` doit utiliser l'indicateur insensible à la casse `i`
> Votre correspondance doit correspondre aux deux occurrences du mot `"Twinkle"`
> Votre correspondance `result` doit contenir deux éléments.

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex);
console.log(result); // [ 'Twinkle', 'twinkle' ]
```

-----



## 7. Faire tout correspondre avec une période générique (`.`)

[Learn Regular Expressions: Match Anything with Wildcard Period | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-anything-with-wildcard-period)

Parfois, vous ne connaissez pas (ou n'avez pas besoin de) connaître les  caractères exacts de vos modèles. Penser à tous les mots qui  correspondent, par exemple, à une faute d'orthographe prendrait beaucoup de temps. Heureusement, vous pouvez gagner du temps en utilisant le  caractère générique : `.`
Le caractère générique `.` correspondra à  n'importe quel caractère. Le caractère générique est également appelé `dot` et `period`. Vous pouvez utiliser le caractère générique comme  n'importe quel autre caractère de l'expression régulière. Par exemple,  si vous vouliez faire correspondre `"hug"`, `"huh"`, `"hut"`, et `"hum"`, vous  pouvez utiliser l'expression régulière `/hu./` pour faire correspondre les quatre mots.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true
```

-----

Complétez le regex `unRegex` pour qu'il corresponde aux chaînes `"run"`, `"sun"`, `"fun"`, `"pun"`, `"nun"`, et `"bun"`. Votre regex doit utiliser le caractère  générique.

> Vous devez utiliser la méthode `.test()`.
> Vous devez utiliser le caractère générique dans votre regex `unRegex`
> Votre regex `unRegex` doit correspondre à `"run"` dans `"Let us go on a run."`
> Votre regex `unRegex` doit correspondre à `"sun"` dans `"The sun is out today."`
> Votre regex `unRegex` doit correspondre à `"fun"` dans `"Coding is a lot of fun."`
> Votre regex `unRegex` devrait correspondre à `"pun"` dans `"Seven days without a pun makes one weak."`
> Votre regex `unRegex` doit correspondre à `"nun"` dans `"One takes a vow to be a nun."`
> Votre regex `unRegex` doit correspondre à `"bun"` dans `"She got fired from the hot dog stand for putting her hair in a bun."`
> Votre regex `unRegex` ne doit pas correspondre à `"There is a bug in my code."`
> Votre regex `unRegex` ne doit pas correspondre à `"Catch me if you can."`

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
console.log(result); // true
```

-----



## 8. Faire correspondre un seul caractère avec plusieurs possibilités (`[]`)

[Learn Regular Expressions: Match Single Character with Multiple Possibilities | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-single-character-with-multiple-possibilities)

Vous avez appris à faire correspondre des modèles littéraux (`/literal/`) et des caractères génériques (`/./`). Ce sont les extrêmes des expressions  régulières, où l'un trouve des correspondances exactes et l'autre  correspond à tout. Il existe des options qui équilibrent les deux  extrêmes.
Vous pouvez rechercher un modèle littéral avec une  certaine flexibilité avec les classes de caractères. Les classes de  caractères vous permettent de définir un groupe de caractères que vous  souhaitez mettre en correspondance en les plaçant entre crochets (`[`et`]`).
Par exemple, vous voulez faire correspondre`"bag"`, `"big"`, et `"bug"` mais pas `"bog"`. Vous pouvez créer le regex `/b[aiu]g/` pour ce faire. Le `[aiu]`  est la classe de caractères qui ne correspondra qu'aux caractères `"a"`, `"i"`, ou `"u"`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null
```

-----

Utilisez une classe de caractères avec des voyelles (`a`, `e`, `i`, `o`, `u`) dans votre regex `vowelRegex` pour trouver toutes les voyelles dans la chaîne  `quoteSample`.
**Remarque :** Assurez-vous de faire correspondre les voyelles majuscules et minuscules.

> Vous devriez trouver les 25 voyelles.
> Votre regex `vowelRegex` doit utiliser une classe de caractères.
> Votre regex `vowelRegex` doit utiliser l'indicateur global.
> Votre regex `vowelRegex` doit utiliser l'indicateur insensible à la casse.
> Votre regex ne doit correspondre à aucune consonnes.

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
console.log(result); // [ 'e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e', 'I', 'a', 'e', 'o', 'o', 'e', 'i', 'o', 'e', 'o', 'i', 'e', 'i' ]
```

------



## 9. Correspondre aux lettres de l'alphabet (`-`)

[Learn Regular Expressions: Match Letters of the Alphabet | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-letters-of-the-alphabet)

Vous avez vu comment vous pouvez utiliser *des jeux de caractères* pour  spécifier un groupe de caractères à faire correspondre, mais c'est  beaucoup de saisie lorsque vous devez faire correspondre une large gamme de caractères (par exemple, chaque lettre de l'alphabet). Heureusement, il existe une fonctionnalité intégrée qui rend cela court et simple.
Dans un jeu de caractères, vous pouvez définir une plage de caractères à faire correspondre à l'aide d'un trait d'union : `-`.
Par exemple, pour faire correspondre les lettres minuscules de `a` à `e`, vous utiliseriez `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

-----

Faites correspondre toutes les lettres de la chaîne `quoteSample`.
**Remarque :** Assurez-vous de faire correspondre les lettres majuscules et minuscules.

> Votre regex `alphabetRegex` doit correspondre à 35 éléments.
> Votre regex `alphabetRegex` doit utiliser l'indicateur global.
> Votre regex `alphabetRegex` doit utiliser l'indicateur insensible à la casse.

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
console.log(result); // [ 'T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's', 'o', 'v', 'e', 'r', 't', 'h', 'e', 'l', 'a', 'z', 'y', 'd', 'o', 'g' ]
```

------



## 10. Faire correspondre les nombres et les lettres de l'alphabet (`-`)

[Learn Regular Expressions: Match Numbers and Letters of the Alphabet | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-numbers-and-letters-of-the-alphabet)

L'utilisation du trait d'union (`-`) pour faire correspondre une plage de  caractères n'est pas limitée aux lettres. Il fonctionne également pour  correspondre à une plage de nombres.
Par exemple, `/[0-5]/` correspond à n'importe quel nombre entre `0` et `5`, y compris le `0` et le `5`.
En outre, il est possible de combiner une plage de lettres et de chiffres dans un seul jeu de caractères.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```

------

Créez une seule expression régulière qui correspond à une plage de lettres entre `h` et `s`, et une plage de nombres entre `2` et `6`. N'oubliez pas  d'inclure les indicateurs appropriés dans l'expression régulière.

> Votre regex `myRegex` doit correspondre à 17 éléments.
> Votre regex `myRegex` doit utiliser l'indicateur global.
> Votre regex `myRegex` doit utiliser l'indicateur insensible à la casse.

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);
console.log(result); // [ 'l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's' ]
```

-----



##  11. Faire correspondre les caractères uniques non spécifiés (`[^ ]`)

[Learn Regular Expressions: Match Single Characters Not Specified | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-single-characters-not-specified)

Jusqu'à présent, vous avez créé un ensemble de caractères que vous  souhaitez associer, mais vous pouvez également créer un ensemble de  caractères que vous ne souhaitez pas associer. Ces types de jeux de  caractères sont appelés jeux de *caractère inversé*.
Pour créer  un jeu de caractères inversé, vous placez un caractère curseur (`^`) après  le crochet ouvrant et avant les caractères que vous ne souhaitez pas  faire correspondre.
Par exemple, `/[^aeiou]/gi` correspond à  tous les caractères qui ne sont pas une voyelle. Notez que les  caractères comme `.`, `!`, `[`, `@`, `/`  et les espaces blancs sont mis en  correspondance - le jeu de caractères de voyelle inversée exclut  uniquement les caractères de voyelle.

------

Créez une seule expression  régulière qui correspond à tous les caractères qui ne sont pas un nombre ou une voyelle. N'oubliez pas d'inclure les indicateurs appropriés dans l'expression régulière.

> Votre regex `myRegex` doit correspondre à 9 éléments.
> Votre regex `myRegex` doit utiliser l'indicateur global.
> Votre regex `myRegex` doit utiliser l'indicateur insensible à la casse.

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi;
let result = quoteSample.match(myRegex);
console.log(result); // [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]
```

------



## 12. Faire correspondre les caractères qui apparaissent une ou plusieurs fois (`+`)

[Learn Regular Expressions: Match Characters that Occur One or More Times | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-one-or-more-times)

Parfois, vous devez faire correspondre un caractère (ou un groupe de caractères) qui apparaît une ou plusieurs fois de suite. Cela signifie qu'il se  produit au moins une fois et peut être répété.
Vous pouvez  utiliser le caractère `+` pour vérifier si tel est le cas. N'oubliez pas  que le caractère ou le motif doit être présent consécutivement.  Autrement dit, le caractère doit se répéter l'un après l'autre.
Par exemple, `/a+/g` trouverait une correspondance dans `"abc"` et  retournerait `["a"]`. En raison du `+`, il trouverait également une seule  correspondance dans `"aabc"` et retournerait `["aa"]`.
S'il vérifiait à la place la chaîne `"abab"`, il trouverait deux correspondances et  retournerait `["a", "a"]` parce que les caractères `a` ne sont pas dans une  ligne - il y a un `b` entre eux. Enfin, comme il n'y a pas de `"a"` dans la  chaîne `"bcd"`, il ne trouverait pas de correspondance.

-----

Vous  souhaitez rechercher des correspondances lorsque la lettre `s` apparaît  une ou plusieurs fois dans `"Mississippi"`. Écrivez une expression  régulière qui utilise le signe `+`.

> Votre regex `myRegex` doit utiliser le signe `+` pour correspondre à un ou plusieurs caractères `s`.
> Votre regex `myRegex` doit correspondre à 2 éléments.
> La variable `result` doit être un tableau avec deux correspondances de `"ss"`

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
console.log(result); // [ 'ss', 'ss' ]
```

-----



## 13. Faire correspondre les caractères qui se produisent zéro fois ou plus (`*`)

[Learn Regular Expressions: Match Characters that Occur Zero or More Times | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-zero-or-more-times)

Le dernier défi a utilisé le signe plus `+` pour rechercher des caractères qui se produisent une ou plusieurs fois. Il existe également une option qui correspond aux caractères qui apparaissent zéro fois ou plus.
Le caractère pour cela est l'astérisque ou l'étoile : `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

-----

Pour ce défi, `chewieQuote` a été initialisé en tant que  "Aaaaaaaaaaaaaaaarrrgh!" dans les coulisses. Créez une regex `chewieRegex` qui utilise le caractère `*` pour faire correspondre un caractère `"A"` majuscule immédiatement suivi de zéro ou plusieurs caractères `"a"` minuscules dans `chewieQuote`. Votre expression régulière n'a pas besoin  d'indicateurs ou de classes de caractères, et ne doit correspondre à  aucune des autres expressions.

> Votre regex `chewieRegex` doit utiliser le caractère `*` pour correspondre à zéro ou plusieurs caractères `a`.
> Votre regex doit correspondre à `"A"` dans `chewieQuote`.
> Votre regex doit correspondre à `"Aaaaaaaaaaaaaaaa"` dans `chewieQuote`.
> Votre regex `chewieRegex` doit correspondre à 16 caractères dans `chewieQuote`.
> Votre regex ne doit correspondre à aucun caractère dans "He made a fair move. Screaming about it can't help you."
> Votre regex ne doit correspondre à aucun caractère dans "Let him have it. It's not wise to upset a Wookiee."

```js
// Changer uniquement le code en dessous de cette ligne
let chewieRegex = /change/; // Changer cette ligne
// Ne changez le code qu'au-dessus de cette ligne
let result = chewieQuote.match(chewieRegex);
```

```js
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
console.log(result); // [ 'Aaaaaaaaaaaaaaaa', index: 0, input: 'Aaaaaaaaaaaaaaaarrrgh!', groups: undefined ]
```

------



## 14. Rechercher des caractères avec une correspondance paresseuse (`?`)

[Learn Regular Expressions: Find Characters with Lazy Matching | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-characters-with-lazy-matching)

Dans les expressions régulières, une correspondance *gourmande* trouve la  partie la plus longue possible d'une chaîne qui correspond au modèle  regex et la renvoie comme correspondance. L'alternative s'appelle une correspondance *paresseuse*, qui trouve la plus petite partie possible de la chaîne qui satisfait le modèle de regex.
Vous pouvez appliquer  l'expression régulière `/t[a-z]*i/` à la chaîne `"titanic"`. Cette  expression régulière est fondamentalement un modèle qui commence par `t`,  se termine par `i` et a quelques lettres entre les deux.
Les  expressions régulières sont par défaut gourmandes, donc la  correspondance renverrait `["titani"]`. Il trouve la plus grande  sous-chaîne possible pour s'adapter au modèle.
Cependant, vous  pouvez utiliser le caractère `?` pour le changer en correspondance paresseuse. `"titanic"` correspond à l'expression régulière ajustée de `/t[a-z]*?i/` renvoie `["ti"]`.
**Remarque :** L'analyse HTML avec des expressions régulières doit être évitée, mais la mise en correspondance de modèles d'une chaîne HTML avec des expressions régulières est tout à fait correcte.

------

Corrigez l'expression régulière `/<.*>/` pour  renvoyer la balise HTML `<h1>`et non le texte`"<h1>Winter is coming</h1>"`. Souvenez-vous du joker `.` dans une expression régulière qui correspond à  n'importe quel caractère.

> La variable `result` doit être un tableau contenant `<h1>`
> `myRegex` devrait utiliser la correspondance paresseuse
> `myRegex` ne doit pas inclure la chaîne `'h1'`

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);
console.log(result); // [ '<h1>', index: 0, input: '<h1>Winter is coming</h1>', groups: undefined ]
```

-----



## 15. Trouver un ou plusieurs criminels dans une chasse (`/z+/`)

[Learn Regular Expressions: Find One or More Criminals in a Hunt | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-one-or-more-criminals-in-a-hunt)

Il est temps de faire une pause et de tester vos nouvelles compétences  en écriture regex. Un groupe de criminels s'est échappé de prison et  s'est enfui, mais vous ne savez pas combien. Cependant, vous savez  qu'ils restent proches les uns des autres lorsqu'ils sont autour  d'autres personnes. Vous êtes responsable de trouver tous les criminels à la fois.
Voici un exemple pour découvrir comment procéder :
L'expression régulière `/z+/` correspond à la lettre `z` lorsqu'elle apparaît une ou  plusieurs fois de suite. Il trouverait des correspondances dans toutes  les chaînes suivantes :

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

Mais il ne trouve pas de correspondance dans les chaînes suivantes car il n'y a pas de caractères de la lettre `z` :

```js
""
"ABC"
"abcabc"
```

------

Écrivez une expression régulière gourmande qui trouve un ou plusieurs criminels au sein d'un groupe d'autres personnes. Un criminel est représenté par  la lettre majuscule `C`.

> Votre expression régulière doit correspondre à un criminel (`C`) dans `"C"`
> Votre regex doit correspondre à deux criminels (`CC`) dans `"CC"`
> Votre regex doit correspondre à trois criminels (`CCC`) dans `"P1P5P4CCCP2P6P3"`
> Votre regex doit correspondre à cinq criminels (`CCCCC`) dans `"P6P2P7P4P5CCCCCP3P1"`
> Votre regex ne doit correspondre à aucun criminel dans `""`
> Votre regex ne doit correspondre à aucun criminel dans `"P1P2P3"`
> Votre regex doit correspondre à cinquante criminels  (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) dans  `"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"`.

```js
let reCriminals = /./; // Change this line
```

```js
let reCriminals = /C+/g;
console.log('C'.match(reCriminals)); // [ 'C' ]
console.log('CC'.match(reCriminals)); // [ 'CC' ]
console.log('P1P5P4CCCP2P6P3'.match(reCriminals)); // [ 'CCC' ]
console.log(''.match(reCriminals)); // null
console.log('P1P2P3'.match(reCriminals)); // null
console.log('P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(reCriminals));
// [ 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC' ]
```

------



## 16. Faire correspondre les modèles en début de chaîne (`/^/`)

[Learn Regular Expressions: Match Beginning String Patterns | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-beginning-string-patterns)

Les défis précédents ont montré que les expressions régulières peuvent  être utilisées pour rechercher un certain nombre de correspondances. Ils sont également utilisés pour rechercher des modèles à des positions  spécifiques dans les chaînes.
Dans un défi précédent, vous avez  utilisé le caractère caret (`^`) dans un jeu de caractères pour créer un  jeu de caractères inversé sous la forme `[^thingsThatWillNotBeMatched]`.  En dehors d'un jeu de caractères, le signe d'insertion est utilisé pour  rechercher des modèles au début des chaînes.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
```

------

Utilisez le caractère caret dans une expression régulière pour trouver `"Cal"` uniquement au début de la chaîne `rickyAndCal`.

> Votre regex doit rechercher `"Cal"` avec une majuscule.
> Votre regex ne doit utiliser aucun indicateur.
> Votre regex doit correspondre à `"Cal"` au début de la chaîne.
> Votre regex ne doit pas correspondre à `"Cal"` au milieu d'une chaîne.

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result); // true
```

------



## 17. Faire correspondre les modèles en fin de chaîne (`$`)

[Learn Regular Expressions: Match Ending String Patterns | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-ending-string-patterns)

Dans le dernier défi, vous avez appris à utiliser le caractère caret  pour rechercher des motifs au début des chaînes. Il existe également un  moyen de rechercher des modèles à la fin des chaînes.
Vous pouvez rechercher la fin des chaînes en utilisant le caractère de signe dollar `$` à la fin de l'expression régulière.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
```

-----

Utilisez le caractère d'ancrage (`$`) pour faire correspondre la chaîne `"caboose"` à la fin de la chaîne `caboose`.

> Vous devez rechercher `"caboose"` avec le signe d'ancrage dollar `$` dans votre regex.
> Votre regex ne doit utiliser aucun indicateur.
> Vous devez faire correspondre `"caboose"` à la fin de la chaîne `"La dernière voiture d'un train est le caboose"`

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
console.log(result); //true
```

------



## 18. Faire correspondre toutes les lettres et tous les nombres (`\w`)

[Learn Regular Expressions: Match All Letters and Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-letters-and-numbers)

En utilisant des classes de caractères, vous avez pu rechercher toutes  les lettres de l'alphabet avec `[a-z]`. Ce type de classe de caractères  est assez courant pour qu'il y ait un raccourci pour cela, bien qu'il  comprenne également quelques caractères supplémentaires.
La  classe de caractères JavaScript pour faire correspondre l'alphabet est `\w`.  Ce raccourci est égal à `[A-Za-z0-9_]`. Cette classe de caractères  correspond aux lettres majuscules et minuscules ainsi qu'aux chiffres.  Notez que cette classe de caractères comprend également le caractère de  soulignement (`_`).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
```

Ces classes de caractères de raccourci sont également appelées *classes de caractère abrégé*.

-----

Utilisez la classe de caractère abrégé `\w` pour compter le nombre de caractères alphanumériques entre guillemets et chaînes.

> Votre regex doit utiliser l'indicateur global.
> Votre expression régulière doit utiliser le caractère abrégé `\w` pour correspondre à tous les caractères alphanumériques.
> Votre regex devrait trouver 31 caractères alphanumériques dans `"The five boxing wizards jump quickly."`
> Votre regex devrait trouver 32 caractères alphanumériques dans `"Pack my box with five dozen liquor jugs."`
> Votre regex devrait trouver 30 caractères alphanumériques dans `"How vexingly quick daft zebras jump!"`
> Votre regex devrait trouver 36 caractères alphanumériques dans `"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."`

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result); // 31
console.log('Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length); // 32
console.log('How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length); // 30
console.log('123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2).length); // 36
```

-----



## 19. Faites correspondre tout sauf les lettres et les chiffres (\W)

[Learn Regular Expressions: Match Everything But Letters and Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-everything-but-letters-and-numbers)

Vous avez appris que vous pouvez utiliser un raccourci pour faire  correspondre les caractères alphanumériques `[A-Za-z0-9_]` en utilisant `\w`. Un motif naturel que vous voudrez peut-être rechercher est le  contraire des alphanumériques.
Vous pouvez rechercher l'opposé de `\w` avec `\W`. Notez que le modèle opposé utilise une lettre  majuscule. Ce raccourci est le même que `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```

-----

Utilisez la classe de caractères abrégés `\W` pour compter le nombre de  caractères non alphanumériques entre guillemets et chaînes.

> Votre regex doit utiliser l'indicateur global.
> Votre regex devrait trouver 6 caractères non alphanumériques dans `"The five boxing wizards jump quickly."`.
> Votre expression régulière doit utiliser le caractère abrégé pour faire  correspondre les caractères qui ne sont pas alphanumériques.
> Votre regex devrait trouver 8 caractères non alphanumériques dans `"Pack my box with five dozen liquor jugs."`
> Votre regex devrait trouver 6 caractères non alphanumériques dans `"How vexingly quick daft zebras jump!"`
> Votre expression régulière devrait trouver 12 caractères non alphanumériques  dans `"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."`

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result); // 6
console.log('Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length); // 8
console.log('How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length); // 6
console.log('123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex).length); // 12
```

-----



## 20. Faire correspondre tous les nombres (`\d`)

[Learn Regular Expressions: Match All Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-numbers)

Vous avez appris des raccourcis pour les modèles de chaîne courants tels que les alphanumériques. Un autre modèle courant consiste à rechercher  uniquement des chiffres ou des nombres.
Le raccourci pour  rechercher des caractères numériques est `\d`, avec un `d` minuscule. Ceci est égal à la classe de caractères `[0-9]`, qui recherche un seul  caractère de n'importe quel nombre entre zéro et neuf.

-----

Utilisez  la classe de caractères abrégés `\d` pour compter le nombre de chiffres  dans les titres de films. Les nombres écrits ("six" au lieu de 6) ne  comptent pas.

> Votre regex doit utiliser le caractère de raccourci pour faire correspondre les caractères numériques
> Votre regex doit utiliser l'indicateur global.
> Votre regex devrait trouver 1 chiffre dans `"9"`.
> Votre regex devrait trouver 2 chiffres dans `"Catch 22"`.
> Votre regex devrait trouver 3 chiffres dans `"101 Dalmatiens"`.
> Votre regex ne devrait trouver aucun chiffre dans `"Un, Deux, Trois"`.
> Votre regex devrait trouver 2 chiffres dans `"21 Jump Street"`.
> Votre regex devrait trouver 4 chiffres dans `"2001: A Space Odyssey"`.

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;
console.log(result); // 4
console.log('9'.match(numRegex).length); // 1
console.log('Catch 22'.match(numRegex).length); // 2
console.log('101 Dalmatiens'.match(numRegex).length); // 3
console.log('Un, Deux, Trois'.match(numRegex).length); // TypeError: can't access property "length", "Un, Deux, Trois".match(...) is null
console.log('21 Jump Street'.match(numRegex).length); // 2
```

-----



## 21. Faire correspondre tous les non-nombres (\D)

[Learn Regular Expressions: Match All Non-Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-non-numbers)

Le dernier défi a montré comment rechercher des chiffres en utilisant le raccourci `\d` avec un `d` minuscule. Vous pouvez également rechercher  des non-chiffres en utilisant un raccourci similaire qui utilise un `D` majuscule à la place.
Le raccourci pour rechercher des caractères non numériques est `\D`. Ceci est égal à la classe de caractères `[^0-9]`, qui recherche un seul caractère qui n'est pas un nombre entre zéro et neuf.

-----

Utilisez la classe de caractères abrégés pour les  non-chiffres `\D` pour compter le nombre de non-chiffres dans les titres de films.

> Votre expression régulière doit utiliser le caractère de raccourci pour faire correspondre les caractères non numériques.
> Votre regex doit utiliser l'indicateur global.
> Votre regex ne devrait trouver aucun autre chiffre dans `"9"`.
> Votre regex devrait trouver 6 non-chiffres dans `"Catch 22"`.
> Votre regex devrait trouver 11 non-chiffres dans `"101 Dalmatiens"`.
> Votre regex devrait trouver 15 non-chiffres dans `"Un, Deux, Trois"`.
> Votre regex devrait trouver 12 non-chiffres dans `"21 Jump Street"`.
> Votre regex devrait trouver 17 non-chiffres dans `"2001: A Space Odyssey"`.

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;
console.log(result); //17
console.log('9'.match(noNumRegex).length); // TypeError: can't access property "length", "9".match(...) is null
console.log('Catch 22'.match(noNumRegex).length); // 6
console.log('101 Dalmatiens'.match(noNumRegex).length); // 11
console.log('Un, Deux, Trois'.match(noNumRegex).length); // 15
console.log('21 Jump Street'.match(noNumRegex).length); // 12
```

-----



## 22. Restreindre les noms d'utilisateurs possibles

[Learn Regular Expressions: Restrict Possible Usernames | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames)

Les noms d'utilisateur sont utilisés partout sur Internet. Ce sont eux  qui donnent aux utilisateurs une identité unique sur leurs sites  préférés.
Vous devez vérifier tous les noms d'utilisateur dans  une base de données. Voici quelques règles simples que les utilisateurs  doivent suivre lors de la création de leur nom d'utilisateur.
1) Les noms d'utilisateur ne peuvent utiliser que des caractères alphanumériques.
2) Les seuls chiffres du nom d'utilisateur doivent être à la fin. Il peut y en avoir zéro ou plus à la fin. Le nom d'utilisateur ne peut pas commencer par un numéro.
3) Les lettres du nom d'utilisateur peuvent être en minuscules et en majuscules.
4) Les noms d'utilisateur doivent comporter au moins deux caractères. Un  nom d'utilisateur à deux caractères ne peut utiliser que des lettres de  l'alphabet comme caractères.

-----

Modifiez le `userCheck` de l'expression régulière pour l'adapter aux contraintes répertoriées ci-dessus.

> Votre expression régulière doit correspondre à `JACK`
> Votre regex ne doit pas correspondre à `J`
> Votre regex doit correspondre à `Jo`
> Votre regex doit correspondre à `Oceans11`
> Votre regex doit correspondre à `RegexGuru`
> Votre regex ne doit pas correspondre à `007`
> Votre regex ne doit pas correspondre à `9`
> Votre regex ne doit pas correspondre à `A1`
> Votre regex ne doit pas correspondre à `BadUs3rnam3`
> Votre regex doit correspondre à `Z97`
> Votre regex ne doit pas correspondre à `c57bT3`

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

```js
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result); // true
console.log(userCheck.test('JACK')); // true
console.log(userCheck.test('J')); // false
console.log(userCheck.test('Jo')); // true
console.log(userCheck.test('Oceans11')); // true
console.log(userCheck.test('RegexGuru')); //true
console.log(userCheck.test('007')); //false
console.log(userCheck.test('9')); // false
console.log(userCheck.test('A1')); // false
console.log(userCheck.test('BadUs3rnam3')); // false
console.log(userCheck.test('Z97')); // true
console.log(userCheck.test('c57bT3')); // false
```

**Explication du code**

1. `^` - début de l'entrée
2. `[a-z]` - le premier caractère est une lettre
3. `[a-z]+` - les caractères suivants sont des lettres
4. `\d*$` - l'entrée se termine par 0 ou plus de chiffres
5. `|` - ou
6. `^[a-z]` - le premier caractère est une lettre
7. `\d\d+` - les caractères suivants sont au moins 2 chiffres
8. `$`- fin de l'entrée

-----



## 23. Faire correspondre les espaces (`\s`)

[Learn Regular Expressions: Match Whitespace | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-whitespace)

Les défis jusqu'à présent ont porté sur la correspondance des lettres de l'alphabet et des chiffres. Vous pouvez également faire correspondre  les espaces ou les espaces entre les lettres.
Vous pouvez  rechercher des espaces en utilisant `\s`, qui est un `s` minuscule. Ce  modèle correspond non seulement aux espaces, mais également aux  caractères de retour chariot, de tabulation, de saut de formulaire et de nouvelle ligne. Vous pouvez le considérer comme similaire à la classe  de caractères `[\r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```

-----

Modifiez l'expression régulière `countWhiteSpace` pour rechercher plusieurs espaces blancs dans une chaîne.

> Votre regex doit utiliser l'indicateur global.
> Votre regex doit utiliser le caractère abrégé `\s` pour correspondre à tous les caractères d'espacement.
> Votre expression régulière devrait trouver huit espaces dans `"Men are from Mars and women are from Venus."`
> Votre regex devrait trouver trois espaces dans `"Space: the final frontier."`
> Votre regex ne devrait trouver aucun espace dans `"MindYourPersonalSpace"`

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
console.log(result); // [ ' ', ' ', ' ', ' ', ' ' ]
console.log('Men are from Mars and women are from Venus.'.match(countWhiteSpace)); // [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ]
console.log('Space: the final frontier.'.match(countWhiteSpace)); // [ ' ', ' ', ' ' ]
console.log('MindYourPersonalSpace'.match(countWhiteSpace)); // null
```

-----



## 24. Faire correspondre les caractères non-espaces

[Learn Regular Expressions: Match Non-Whitespace Characters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-non-whitespace-characters)

Vous avez appris à rechercher des espaces en utilisant `\s`, avec un `s` minuscule. Vous pouvez également rechercher tout sauf les espaces.
Recherchez les espaces non blancs en utilisant `\S`, qui est un `s` majuscule. Ce modèle ne correspondra pas aux espaces, aux retours chariot, aux  tabulations, aux sauts de page et aux caractères de nouvelle ligne. Vous pouvez penser qu'il est similaire à la classe de caractères `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
```

-----

Modifiez l'expression régulière `countNonWhiteSpace` pour rechercher plusieurs caractères non-espaces dans une chaîne.

> Votre regex doit utiliser l'indicateur global.
> Votre expression régulière doit utiliser le caractère abrégé `\S` pour faire correspondre tous les caractères non-espaces.
> Votre regex devrait trouver 35 non-espaces dans `"Men are from Mars and women are from Venus."`
> Votre regex devrait trouver 23 non-espaces dans `"Space: the final frontier."`
> Votre regex devrait trouver 21 non-espaces dans `"MindYourPersonalSpace"`

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
console.log(result); // [ 'W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p', 'a', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 'd', 's' ]
console.log('Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)); // [ 'M', 'e', 'n', 'a', 'r', 'e', 'f', 'r', 'o', 'm', 'M', 'a', 'r', 's', 'a', 'n', 'd', 'w', 'o', 'm', 'e', 'n', 'a', 'r', 'e', 'f', 'r', 'o', 'm', 'V', 'e', 'n', 'u', 's', '.' ]
console.log('Space: the final frontier.'.match(countNonWhiteSpace)); // [ 'S', 'p', 'a', 'c', 'e', ':', 't', 'h', 'e', 'f', 'i', 'n', 'a', 'l', 'f', 'r', 'o', 'n', 't', 'i', 'e', 'r', '.' ]
console.log('MindYourPersonalSpace'.match(countNonWhiteSpace)); // [ 'M', 'i', 'n', 'd', 'Y', 'o', 'u', 'r', 'P', 'e', 'r', 's', 'o', 'n', 'a', 'l', 'S', 'p', 'a', 'c', 'e' ]
```

------



## 25. Spécifiez le nombre supérieur et inférieur des correspondances (`{3,5}`)

[Learn Regular Expressions: Specify Upper and Lower Number of Matches | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches)

Rappelez-vous que vous utilisez le signe plus `+` pour rechercher un ou  plusieurs caractères et l'astérisque `*` pour rechercher zéro ou plusieurs caractères. Celles-ci sont pratiques, mais vous souhaitez parfois faire correspondre une certaine gamme de modèles.
Vous pouvez  spécifier le nombre inférieur et supérieur de modèles avec des  *spécificateurs de quantité*. Les spécificateurs de quantité sont utilisés avec des accolades (`{`et`}`). Vous mettez deux nombres entre les accolades - pour le nombre inférieur et supérieur de motifs.
Par exemple,  pour correspondre uniquement à la lettre `a` apparaissant entre `3` et `5` fois dans la chaîne `"ah"`, votre expression régulière serait `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

-----

Changez l'expression régulière `ohRegex` pour qu'elle corresponde à la phrase  entière `"Oh no"` uniquement lorsqu'elle a `3` à `6` lettres `h`.

> Votre regex doit utiliser des accolades.
> Votre regex ne doit pas correspondre à`"Ohh no"`
> Votre regex doit correspondre à `"Ohhh no"`
> Votre expression régulière doit correspondre à `"Ohhhh no"`
> Votre expression régulière doit correspondre à `Ohhhhh no`
> Votre expression régulière doit correspondre à `"Ohhhhhh no"`
> Votre regex ne doit pas correspondre à `"Ohhhhhhh no"`

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr);
console.log(result); // true
console.log(ohRegex.test('Ohh no')); // false
console.log(ohRegex.test('Ohhhh no')); // true
console.log(ohRegex.test('Ohhhhh no')); // true
console.log(ohRegex.test('Ohhhhhh no')); // true
console.log(ohRegex.test('Ohhhhhhh no')); // false
```

------



## 26. Spécifiez uniquement le nombre inférieur de correspondances (`{3,}`)

[Learn Regular Expressions: Specify Only the Lower Number of Matches | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-only-the-lower-number-of-matches)

Vous pouvez spécifier le nombre inférieur et supérieur de motifs avec  des spécificateurs de quantité utilisant des accolades. Parfois, vous  souhaitez uniquement spécifier le nombre inférieur de motifs sans limite supérieure.
Pour spécifier uniquement le nombre inférieur de motifs, conservez le premier nombre suivi d'une virgule.
Par exemple, pour faire correspondre uniquement la chaîne `"hah"` avec la lettre `a` apparaissant au moins `3` fois, votre regex serait `/ha{3,}h/`.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
```

----

Changez l'expression régulière `haRegex` pour qu'elle corresponde au mot `"Hazzah"` uniquement lorsqu'il a quatre lettres `z` ou plus.

> Votre regex doit utiliser des accolades.
> Votre expression régulière ne doit pas correspondre à `"Hazzah"`
> Votre expression régulière ne doit pas correspondre à `"Hazzzah"`
> Votre regex doit correspondre à `"Hazzzzah"`
> Votre regex doit correspondre à `"Hazzzzzah"`
> Votre regex doit correspondre à `"Hazzzzzzah"`
> Votre regex doit correspondre à `"Hazzah"` avec 30 `z` dedans.

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);
console.log(result); // true
console.log(haRegex.test('Hazzah')); // false
console.log(haRegex.test('Hazzzah')); // false
console.log(haRegex.test('Hazzzzzah')); // true
console.log(haRegex.test('Hazzzzzzah')); // true
console.log(haRegex.test('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah')); // true
```

-----



## 27. Spécifiez le nombre exact de correspondances (`{3}`)

[Learn Regular Expressions: Specify Exact Number of Matches | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-exact-number-of-matches)

Vous pouvez spécifier le nombre inférieur et supérieur de motifs avec des spécificateurs de quantité utilisant des accolades. Parfois, vous ne voulez qu'un nombre spécifique de correspondances.
Pour spécifier un certain nombre de motifs, placez simplement ce chiffre entre les accolades.
Par exemple, pour faire correspondre uniquement le mot `"hah"` avec la lettre `a` `3` fois, votre expression régulière serait `/ha{3}h/`.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false
```

------

Changez l'expression régulière `timRegex` pour qu'elle corresponde au mot `"Timber"` uniquement lorsqu'il a quatre lettres `m`.

> Votre regex doit utiliser des accolades.
> Votre expression régulière ne doit pas correspondre à `"Timber"`
> Votre expression régulière ne doit pas correspondre à `"Timmber"`
> Votre expression régulière ne doit pas correspondre à `"Timmmber"`
> Votre expression régulière doit correspondre à `"Timmmmber"`
> Votre regex ne doit pas correspondre à `"Timber"` avec 30 `m` dedans.

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
console.log(result); // true
console.log(timRegex.test('Timber')); // false
console.log(timRegex.test('Timmber')); // false
console.log(timRegex.test('Timmmber')); // false
console.log(timRegex.test('Timmmmmmmmmmmmmmmmmmmmmmmmmmmmmmber')); // false
```

-----



## 28. Vérifier tout ou rien (`?`)

[Learn Regular Expressions: Check for All or None | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-all-or-none)

Parfois, les modèles que vous souhaitez rechercher peuvent contenir des  parties qui peuvent exister ou non. Cependant, il peut être important de les vérifier quand même.
Vous pouvez spécifier l'existence  possible d'un élément avec un point d'interrogation, `?`. Cela vérifie zéro ou l'un des éléments précédents. Vous pouvez considérer ce symbole  comme indiquant que l'élément précédent est facultatif.
Par  exemple, il existe de légères différences entre l'anglais américain et  britannique et vous pouvez utiliser le point d'interrogation pour faire  correspondre les deux orthographes.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

-----

Changez le regex `favRegex` pour qu'il corresponde à la fois à la version  anglaise américaine (favorite) et britannique (favourite) du mot.

> Votre expression régulière doit utiliser le symbole facultatif, `?`.
> Votre regex doit correspondre à `"favorite"`
> Votre regex doit correspondre à `"favourite"`
> Votre expression régulière ne doit pas correspondre à `"fav"`

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

```js
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
console.log(result); // true
console.log(favRegex.test('favourite')); // true
console.log(favRegex.test('fav')); // false
```

-----



## 29. Anticipation (lookahead) positif et négatif `(?=...)` `(?!...)`

[Learn Regular Expressions: Positive and Negative Lookahead | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead)

Les *lookaheads* sont des modèles qui indiquent à JavaScript de regarder en avant dans votre chaîne pour vérifier les modèles plus loin. Cela  peut être utile lorsque vous souhaitez rechercher plusieurs modèles sur  la même chaîne.
Il existe deux types d'anticipations : *l'anticipation positive* et *l'anticipation négative*.
Une anticipation positive cherchera à s'assurer que l'élément dans le  modèle de recherche est là, mais ne correspondra pas réellement. Une  anticipation positive est utilisée comme `(?=...)` où le `...` est la  partie requise qui ne correspond pas.
D'un autre côté, une  anticipation négative cherchera à s'assurer que l'élément dans le modèle de recherche n'est pas là. Une anticipation négative est utilisée comme `(?!...)` où le `...` est le motif que vous ne voulez pas être là. Le reste du motif est renvoyé si la partie d'anticipation négative n'est  pas présente.
Les lookaheads sont un peu déroutants mais quelques exemples vous aideront.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
```

Une utilisation plus pratique des lookaheads consiste à vérifier deux ou  plusieurs modèles dans une chaîne. Voici un vérificateur de mot de passe simple (naïvement) qui recherche entre 3 et 6 caractères et au moins un nombre :

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

-----

Utilisez des lookaheads dans le `pwRegex` pour faire correspondre les mots de  passe de plus de 5 caractères, ne commençant pas par des chiffres et  comportant deux chiffres consécutifs.

> Votre regex doit utiliser deux anticipations positives.
> Votre expression régulière ne doit pas correspondre à `"astronaut"`
> Votre expression régulière ne doit pas correspondre à `"banan1"`
> Votre expression régulière doit correspondre à `"bana12"`
> Votre expression régulière doit correspondre à `"abc123"`
> Votre expression régulière ne doit pas correspondre à `"1234"`
> Votre expression régulière ne doit pas correspondre à `"8pass99"`
> Votre regex ne doit pas correspondre à `"12abcde"`
> Votre regex doit correspondre à `"astr1on11aut"`

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

```js
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result); // false
console.log(pwRegex.test('banan1')); // false
console.log(pwRegex.test('bana12')); // true
console.log(pwRegex.test('abc123')); //true
console.log(pwRegex.test('1234')); // false
console.log(pwRegex.test('8pass99')); // false
console.log(pwRegex.test('12abcde')); // false
console.log(pwRegex.test('astr1on11aut')); // true
```

------



## 30. Vérifier le regroupement mixte de caractères

[Learn Regular Expressions: Check For Mixed Grouping of Characters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters)

Parfois, nous voulons vérifier les groupes de caractères en utilisant  une expression régulière et pour y parvenir, nous utilisons des  parenthèses `()`.
Si vous voulez trouver `Penguin` ou `Pumpkin` dans  une chaîne, vous pouvez utiliser l'expression régulière suivante : `/P(engu|umpk)in/g`
Vérifiez ensuite si les groupes de chaînes souhaités se trouvent dans la chaîne de test à l'aide de la méthode `test()`.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true
```

-----

Corrigez l'expression régulière afin qu'elle vérifie les noms de `Franklin Roosevelt` ou de `Eleanor Roosevelt` en respectant la casse et qu'elle fasse des concessions pour les prénoms.
Ensuite, corrigez le code afin que l'expression régulière que vous avez créée soit vérifiée par rapport à `myString` et que la valeur `true` ou `false` soit renvoyée selon  que l'expression régulière correspond.

> Votre regex `myRegex` doit retourner `true` pour la chaîne `Franklin D. Roosevelt`
> Votre regex `myRegex` doit retourner `true` pour la chaîne `Eleanor Roosevelt`
> Votre regex `myRegex` doit retourner `false` pour la chaîne `Franklin Rosevelt`
> Votre regex `myRegex` doit retourner `false` pour la chaîne `Frank Roosevelt`
> Vous devez utiliser `.test()` pour tester l'expression régulière.
> Votre résultat doit retourner `true`.

```js
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor) Roosevelt/;
let result = myRegex.test(myString); // true
console.log(myRegex.test('Franklin D. Roosevelt')); // true
console.log(myRegex.test('Eleanor Roosevelt')); //true
console.log(myRegex.test('Franklin Rosevelt')); // false
console.log(myRegex.test('Frank Roosevelt')); // false
```

-----



## 31. Réutiliser des modèles à l'aide de groupes de capture `(\w+)`

[Learn Regular Expressions: Reuse Patterns Using Capture Groups | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups)

Certains modèles que vous recherchez apparaîtront plusieurs fois dans  une chaîne. Il est inutile de répéter manuellement cette expression  régulière. Il existe un meilleur moyen de spécifier si vous avez  plusieurs sous-chaînes de répétition dans votre chaîne.
Vous  pouvez rechercher des sous-chaînes répétées à l'aide de *groupes de  capture*. Les parenthèses, `(` et `)`, sont utilisées pour rechercher des  sous-chaînes répétées. Vous mettez l'expression régulière du modèle qui  se répète entre les parenthèses.
Pour spécifier où cette chaîne  de répétition apparaîtra, vous utilisez une barre oblique inverse (`\`)  puis un nombre. Ce nombre commence à 1 et augmente avec chaque groupe de capture supplémentaire que vous utilisez. Un exemple serait `\1` pour  correspondre au premier groupe.
L'exemple ci-dessous correspond à n'importe quel mot qui apparaît deux fois séparé par un espace :

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```

L'utilisation de la méthode `.match()` sur une chaîne renverra un tableau avec la  chaîne qu'il correspond, ainsi que son groupe de capture.

-----

Utilisez des groupes de capture dans `reRegex` pour faire correspondre des nombres qui ne sont répétés que trois fois dans une chaîne, chacun étant séparé par un espace.

> Votre expression régulière doit utiliser la classe de caractères abrégés pour les chiffres.
> Votre regex doit réutiliser un groupe de capture deux fois.
> Votre regex doit avoir deux espaces séparant les trois nombres.
> Votre regex doit correspondre à `"42 42 42"`.
> Votre regex doit correspondre à `"100 100 100"`.
> Votre regex ne doit pas correspondre à `"42 42 42 42"`.
> Votre regex ne doit pas correspondre à `"42 42"`.
> Votre expression régulière ne doit pas correspondre à `"101 102 103"`.
> Votre regex ne doit pas correspondre à `"1 2 3"`.
> Votre expression régulière doit correspondre à `"10 10 10"`.

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
console.log(result); // true
console.log(reRegex.test("100 100 100")); // true
console.log(reRegex.test("42 42 42 42")); // false
console.log(reRegex.test("42 42")); //false
console.log(reRegex.test("101 102 103")); // false
console.log(reRegex.test("1 2 3")); // false
console.log(reRegex.test("10 10 10")); // true
```

-----



## 32. Utiliser des groupes de capture pour rechercher et remplacer (`$n`) (`.replace()`)

[Learn Regular Expressions: Use Capture Groups to Search and Replace | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/use-capture-groups-to-search-and-replace)

La recherche est utile. Cependant, vous pouvez rendre la recherche  encore plus puissante lorsqu'elle modifie (ou remplace) le texte  correspondant.
Vous pouvez rechercher et remplacer du texte dans  une chaîne en utilisant `.replace()` sur une chaîne. Les entrées pour `.replace()` sont d'abord le modèle regex que vous souhaitez rechercher.  Le deuxième paramètre est la chaîne pour remplacer la correspondance ou  une fonction pour faire quelque chose.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```

Vous pouvez également accéder aux groupes de capture dans la chaîne de remplacement avec des signes dollar (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```

------

Écrivez une regex `fixRegex` en utilisant trois groupes de capture qui  rechercheront chaque mot dans la chaîne `"one two three"`. Mettez ensuite à jour la variable `replaceText` pour remplacer `"one two three"` par la  chaîne `"three two one"` et attribuez le résultat à la variable `result`. Assurez-vous que vous utilisez des groupes de capture dans la  chaîne de remplacement à l'aide de la syntaxe du signe dollar (`$`).

> Vous devez utiliser `.replace()` pour rechercher et remplacer.
> Votre regex devrait changer `"one two three"` en `"three two one"`
> Vous ne devez pas changer la dernière ligne.
> `fixRegex` doit utiliser au moins trois groupes de capture.
> `replaceText` doit utiliser des chaînes de sous-correspondance entre parenthèses (c'est-à-dire que la nième chaîne de sous-correspondance entre  parenthèses, $n, correspond au nième groupe de capture).

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

```js
let str = "one two three";
let fixRegex = /(\D+)\s(\D+)\s(\D+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
console.log(result); // three two one
```

-----



## 33. Supprimer les espaces du début et de la fin

[Learn Regular Expressions: Remove Whitespace from Start and End | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end)

Parfois, les espaces autour des chaînes ne sont pas voulus mais sont là. Le traitement typique des chaînes consiste à supprimer les espaces au début et à la fin.

-----

Écrivez une expression régulière et utilisez les  méthodes de chaîne appropriées pour supprimer les espaces au début et à  la fin des chaînes.
**Remarque :** la méthode `String.prototype.trim()` fonctionnerait ici, mais vous devrez relever ce défi en utilisant des  expressions régulières.

> `result` doit être égal à `"Hello, World!"`
> Votre solution ne doit pas utiliser la méthode `String.prototype.trim()`.
> La variable `result` ne doit pas être définie comme égale à une chaîne.

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

```js
let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(\D+)(\D+)(\s+)/;
let result = hello.replace(wsRegex, "$2");
console.log(result); // Hello, World!
```

```js
// solution
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
```

