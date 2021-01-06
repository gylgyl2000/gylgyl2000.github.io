---
id: freeCodeCamp-Intermediate-Algorithm-Scripting
title: Intermediate Algorithm Scripting
---



## Introduction to the Intermediate Algorithm Scripting Challenges

[Intermediate Algorithm Scripting | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/)

The following challenges are part of FCC's Intermediate Algorithm Scripting Challenges. These should prepare you to complete the final challenges for the JavaScript Algorithms And Data Structures Certification.

These challenges will allow you to test how much you have learned and which parts you may need to review again before starting the projects.

With that being said-

Have fun and remember to use the [Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) method if you get stuck.

Good Luck!

------



## 1. Sum All Numbers in a Range

[Learn Intermediate Algorithm Scripting: Sum All Numbers in a Range | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range)

:::info Instructions
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.<br />
For example, `sumAll([4,1])` should return `10` because sum of all the numbers between 1 and 4 (both inclusive) is `10`.
:::

:::tip missions
`sumAll([1, 4])` should return a number.<br />
`sumAll([1, 4])` should return 10.<br />
`sumAll([4, 1])` should return 10.<br />
`sumAll([5, 10])` should return 45.<br />
`sumAll([10, 5])` should return 45.
:::

```js
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let temp = 0;
  for (let i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4])
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
```
```shell title="console"
10
10
45
45
```

-----



## 2. Diff Two Arrays

[Learn Intermediate Algorithm Scripting: Diff Two Arrays | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays)

:::info Instructions
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.<br />
**Note** : You can return the array with its elements in any order.
:::

:::tip missions
`diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])` should return an array.<br />
`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return `["pink wool"]`.<br />
`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return an array with one item.<br />
`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return `["diorite", "pink wool"]`.<br />
`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return an array with two items.<br />
`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` should return `[]`.<br />
`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` should return an empty array.<br />
`[1, 2, 3, 5], [1, 2, 3, 4, 5]` should return `[4]`.<br />
`[1, 2, 3, 5], [1, 2, 3, 4, 5]` should return an array with one item.<br />
`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` should return `["piglet", 4]`.<br />
`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` should return an array with two items.<br />
`[], ["snuffleupagus", "cookie monster", "elmo"]` should return `["snuffleupagus", "cookie monster", "elmo"]`.<br />
`[], ["snuffleupagus", "cookie monster", "elmo"]` should return an array with three items.<br />
`[1, "calf", 3, "piglet"], [7, "filly"]` should return `[1, "calf", 3, "piglet", 7, "filly"]`.<br />
`[1, "calf", 3, "piglet"], [7, "filly"]` should return an array with six items.
:::

```js
function diffArray(arr1, arr2) {
  let newArr = [];

  function onlyInFirst(first, second) {
    // Faire une boucle dans un tableau pour trouver des éléments qui n'existent pas dans un autre tableau
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pousser les éléments uniques du premier vers newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
```

```shell title="console"
[ 4 ]
[ 'pink wool' ]
[ 'pink wool', 'diorite' ]
[]
[ 'piglet', 4 ]
[ 'snuffleupagus', 'cookie monster', 'elmo' ]
[ 1, 'calf', 3, 'piglet', 7, 'filly' ]
```

-----



## 3. Seek and Destroy

[Learn Intermediate Algorithm Scripting: Seek and Destroy | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy)


:::info instructions
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.<br />
**Note :** You have to use the `arguments` object.
:::

:::tip missions
`destroyer([1, 2, 3, 1, 2, 3], 2, 3)` should return `[1, 1]`.<br />
`destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)` should return `[1, 5, 1]`.<br />
`destroyer([3, 5, 1, 2, 2], 2, 3, 5)` should return `[1]`.<br />
`destroyer([2, 3, 2, 3], 2, 3)` should return `[]`.<br />
`destroyer(["tree", "hamburger", 53], "tree", 53)` should return `["hamburger"]`.<br />
`destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")` should return `[12,92,65]`.
:::

```js
function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
```

```shell title="console"
[1, 1]
[1, 5, 1]
[1]
[]
['hamburger']
[12, 92, 65]
```

-----



## 4. Wherefore art thou

[Learn Intermediate Algorithm Scripting: Wherefore art thou | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou)

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

> `whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })` should return `[{ first: "Tybalt", last: "Capulet" }]`.
> `whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })` should return `[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]`.
> `whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })` should return `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]`.
> `whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })` should return `[{ "apple": 1, "bat": 2, "cookie": 2 }]`.
> `whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })` should return `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]`.
> `whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})` should return `[]`.

```js
function whatIsInAName(collection, source) {
  var arr = Object.keys(source);

  return collection.filter(function(obj) {
    return arr.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
```

```sh
[{ first: 'Tybalt', last: 'Capulet' }]
[{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]
[{ apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 }]
[{ apple: 1, bat: 2, cookie: 2 }]
[{ apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 }]
[]
```

-----



## 5. Spinal Tap Case

[Learn Intermediate Algorithm Scripting: Spinal Tap Case | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case)

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

> `spinalCase("This Is Spinal Tap")` should return `"this-is-spinal-tap"`.
> `spinalCase("thisIsSpinalTap")` should return `"this-is-spinal-tap"`.
> `spinalCase("The*Andy*Griffith_Show")` should return `"the-andy-griffith-show"`.
> `spinalCase("Teletubbies say Eh-oh")` should return `"teletubbies-say-eh-oh"`.
> `spinalCase("AllThe-small Things")` should return `"all-the-small-things"`.

```js
function spinalCase(str) {
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("TheAndyGriffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
```

```sh title="console"
this-is-spinal-tap
this-is-spinal-tap
the-andy-griffith-show
teletubbies-say-eh-oh
all-the-small-things
```

-----



## 6. Pig Latin

[Learn Intermediate Algorithm Scripting: Pig Latin | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin)

Pig Latin is a way of altering English Words. The rules are as follows:
\- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
\- If a word begins with a vowel, just add "way" at the end.

------

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

> `translatePigLatin("california")` should return "aliforniacay".
> `translatePigLatin("paragraphs")` should return "aragraphspay".
> `translatePigLatin("glove")` should return "oveglay".
> `translatePigLatin("algorithm")` should return "algorithmway".
> `translatePigLatin("eight")` should return "eightway".
> Should handle words where the first vowel comes in the middle of the word.  `translatePigLatin("schwartz")` should return "artzschway".
> Should handle words without vowels. `translatePigLatin("rhythm")` should return "rhythmay".

```js
function translatePigLatin(str) {
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    pigLatin = str + "ay";
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }
  return pigLatin;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
```

```
onsonantcay
aliforniacay
aragraphspay
oveglay
algorithmway
eightway
artzschway
rhythmay
```

-----



## 7. Search and Replace

[Learn Intermediate Algorithm Scripting: Search and Replace | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace)

Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
**Note** : Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

> `myReplace("Let us go to the store", "store", "mall")` should return "Let us go to the mall".
> `myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` should return "He is Sitting on the couch".
> `myReplace("I think we should look up there", "up", "Down")` should return "I think we should look down there".
> `myReplace("This has a spellngi error", "spellngi", "spelling")` should return "This has a spelling error".
> `myReplace("His name is Tom", "Tom", "john")` should return "His name is John".
> `myReplace("Let us get back to more Coding", "Coding", "algorithms")` should return "Let us get back to more Algorithms".

```js
function myReplace(str, before, after) {
  let index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
```

```
A quick brown fox leaped over the lazy dog
Let us go to the mall
He is Sitting on the couch
I think we should look down there
This has a spelling error
His name is John
Let us get back to more Algorithms
```

-----



## 8. DNA Pairing

[Learn Intermediate Algorithm Scripting: DNA Pairing | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing)

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
[Base pairs](http://en.wikipedia.org/wiki/Base_pair) are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]].
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

> `pairElement("ATCGA")` should return `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.
> `pairElement("TTGAG")` should return `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.
> `pairElement("CTCTA")` should return `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

```js
function pairElement(str) {
  let paired = [];
  let search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return paired;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
```

```
[['G','C'],['C','G'],['G','C']]
[['A','T'],['T','A'],['C','G'],['G','C'],['A','T']]
[['T','A'],['T','A'],['G','C'],['A','T'],['G','C']]
[['C','G'],['T','A'],['C','G'],['T','A'],['A','T']]
```

-----



## 9. Missing letters

[Learn Intermediate Algorithm Scripting: Missing letters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters)

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

> `fearNotLetter("abce")` should return "d".
> `fearNotLetter("abcdefghjklmno")` should return "i".
> `fearNotLetter("stvwx")` should return "u".
> `fearNotLetter("bcdf")` should return "e".
> `fearNotLetter("abcdefghijklmnopqrstuvwxyz")` should return undefined.

```js
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
```

```
d
i
u
e
undefined
```

-----



## 10. Sorted Union

[Learn Intermediate Algorithm Scripting: Sorted Union | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union)

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.

> `uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` should return `[1, 3, 2, 5, 4]`.
> `uniteUnique([1, 2, 3], [5, 2, 1])` should return `[1, 2, 3, 5]`.
> `uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` should return `[1, 2, 3, 5, 4, 6, 7, 8]`.

```js
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
```

```
[1, 3, 2, 5, 4]
[1, 2, 3, 5]
[1, 2, 3, 5, 4, 6, 7, 8]
```

-----



## 11. Convert HTML Entities

[Learn Intermediate Algorithm Scripting: Convert HTML Entities | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities)

Convert the characters `&`, `<`, `>`, `"` (double quote), and `'` (apostrophe), in a string to their corresponding HTML entities.

> `convertHTML("Dolce & Gabbana")` should return `"Dolce &amp; Gabbana"`.
> `convertHTML("Hamburgers < Pizza < Tacos")` should return `"Hamburgers &lt; Pizza &lt; Tacos"`.
> `convertHTML("Sixty > twelve")` should return `"Sixty &gt; twelve"`.
> `convertHTML('Stuff in "quotation marks"')` should return `&quot;Stuff in "quotation marks&quot;"`.
> `convertHTML("Schindler's List")` should return `"Schindler&apos;s List"`.
> `convertHTML("<>")` should return `"&lt;&gt;"`.
> `convertHTML("abc")` should return `"abc"`.

```js
function convertHTML(str) {
  let temp = str.split("");
  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  temp = temp.join("");
  return temp;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
```

```
Dolce &amp; Gabbana
Hamburgers &lt; Pizza &lt; Tacos
Sixty &gt; twelve
Stuff in &quot;quotation marks&quot;
Schindler&apos;s List
&lt;&gt;
abc
```

-----



## 12. Sum All Odd Fibonacci Numbers

[Learn Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers)

Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.

> `sumFibs(1)` should return a number.
> `sumFibs(1000)` should return 1785.
> `sumFibs(4000000)` should return 4613732.
> `sumFibs(4)` should return 5.
> `sumFibs(75024)` should return 60696.
> `sumFibs(75025)` should return 135721.

```js
function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
```

```
2
1785
4613732
5
60696
135721
```

-----



## 13. Sum All Primes

[Learn Intermediate Algorithm Scripting: Sum All Primes | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes)

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite `sumPrimes` so it returns the sum of all prime numbers that are less than or equal to num.

> `sumPrimes(10)` should return a number.
> `sumPrimes(10)` should return 17.
> `sumPrimes(977)` should return 73156.

```js
function sumPrimes(num) {
  let res = 0;
  function getPrimes(max) {
    let sieve = [];
    let i;
    let j;
    let primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }
  let primes = getPrimes(num);
  for (let  p = 0; p < primes.length; p++) {
    res += primes[p];
  }
  return res;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
```

```
17
73156
```

-----



## 14. Smallest Common Multiple

[Learn Intermediate Algorithm Scripting: Smallest Common Multiple | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple)

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers *between* 1 and 3. The answer here would be 6.

> `smallestCommons([1, 5])` should return a number.
> `smallestCommons([1, 5])` should return 60.
> `smallestCommons([5, 1])` should return 60.
> `smallestCommons([2, 10])` should return 2520.
> `smallestCommons([1, 13])` should return 360360.
> `smallestCommons([23, 18])` should return 6056820.

```js
function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  let newArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }
  let quot = 0;
  let loop = 1;
  let n;
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length);
  return quot;
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([5,1]));
console.log(smallestCommons([2,10]));
console.log(smallestCommons([1,13]));
console.log(smallestCommons([23,18]));
```

```
60
60
2520
360360
6056820
```

-----



## 15. Drop it

[Learn Intermediate Algorithm Scripting: Drop it | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it)

Given the array `arr`, iterate through and remove each element starting from the first element (the 0 index) until the function `func` returns `true` when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, `arr` should be returned as an empty array.

> `dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` should return `[3, 4]`.
> `dropElements([0, 1, 0, 1], function(n) {return n === 1;})` should return `[1, 0, 1]`.
> `dropElements([1, 2, 3], function(n) {return n > 0;})` should return `[1, 2, 3]`.
> `dropElements([1, 2, 3, 4], function(n) {return n > 5;})` should return `[]`.
> `dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` should return `[7, 4]`.
> `dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` should return `[3, 9, 2]`.

```js
function dropElements(arr, func) {
  let times = arr.length;
  for (let i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
```

```
[ 3, 4 ]
[ 1, 0, 1 ]
[ 1, 2, 3 ]
[]
[ 7, 4 ]
[ 3, 9, 2 ]
```

-----



## 16. Steamroller

[Learn Intermediate Algorithm Scripting: Steamroller | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller)

Flatten a nested array. You must account for varying levels of nesting.

> `steamrollArray([[["a"]], [["b"]]])` should return `["a", "b"]`.
> `steamrollArray([1, [2], [3, [[4]]]])` should return `[1, 2, 3, 4]`.
> `steamrollArray([1, [], [3, [[4]]]])` should return `[1, 3, 4]`.
> `steamrollArray([1, {}, [3, [[4]]]])` should return `[1, {}, 3, 4]`.
> Your solution should not use the `Array.prototype.flat()` or `Array.prototype.flatMap()` methods.

```js
function steamrollArray(arr) {
  let flattenedArray = [];
  let flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (let a in arg) {
        flatten(arg[a]);
      }
    }
  };
  arr.forEach(flatten);
  return flattenedArray;
}
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
```

```
[ 'a', 'b' ]
[ 1, 2, 3, 4 ]
[ 1, 3, 4 ]
[ 1, {}, 3, 4 ]
```

-----



## 17. Binary Agents

[Learn Intermediate Algorithm Scripting: Binary Agents | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents)

Return an English translated sentence of the passed binary string.
The binary string will be space separated.

> `binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")` should return "Aren't bonfires fun!?"
> `binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")` should return "I love FreeCodeCamp!"

```js
function binaryAgent(str) {
  let biString = str.split(" ");
  let uniString = [];
  for (let i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
```

```
Aren't bonfires fun!?
I love FreeCodeCamp!
```

-----



## 18. Everything Be True

[Learn Intermediate Algorithm Scripting: Everything Be True | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true)

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate `pre` will be an object property and you need to return `true` if its value is `truthy`. Otherwise, return `false`.
In JavaScript, `truthy` values are values that translate to `true` when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or `[]` notation.

> `truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` should return true.
> `truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` should return false.
> `truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")` should return false.
> `truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")` should return false.
> `truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")` should return true.
> `truthCheck([{"single": "yes"}], "single")` should return true.
> `truthCheck([{"single": ""}, {"single": "double"}], "single")` should return false.
> `truthCheck([{"single": "double"}, {"single": undefined}], "single")` should return false.
> `truthCheck([{"single": "double"}, {"single": NaN}], "single")` should return false.

```js
function truthCheck(collection, pre) {
  let counter = 0;
  for (let c in collection) {
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  return counter == collection.length;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"));
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"));
console.log(truthCheck([{"single": "yes"}], "single"));
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));
console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"));
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));
```

```
true
false
false
false
true
true
false
false
false
```

-----



## 19. Arguments Optional

[Learn Intermediate Algorithm Scripting: Arguments Optional | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional)

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function.
Calling this returned function with a single argument will then return the sum:

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` returns `5`.
If either argument isn't a valid number, return undefined.

> `addTogether(2, 3)` should return 5.
> `addTogether(23, 30)` should return 53.
> `addTogether(5)(7)` should return 12.
> `addTogether("http://bit.ly/IqT6zt")` should return undefined.
> `addTogether(2, "3")` should return undefined.
> `addTogether(2)([3])` should return undefined.

```js
function addTogether() {
  let checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };
  if (arguments.length > 1) {
    let a = checkNum(arguments[0]);
    let b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    let c = arguments[0];
    if (checkNum(c)) {
      return function(arg2) {
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
      };
    }
  }
}

console.log(addTogether(2,3));
console.log(addTogether(23,30));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
```

```
5
53
12
undefined
undefined
undefined
```

-----



## 20. Make a Person

[Learn Intermediate Algorithm Scripting: Make a Person | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person)

Fill in the object constructor with the following methods below:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

> `Object.keys(bob).length` should return 6.
> `bob instanceof Person` should return true.
> `bob.firstName` should return undefined.
> `bob.lastName` should return undefined.
> `bob.getFirstName()` should return "Bob".
> `bob.getLastName()` should return "Ross".
> `bob.getFullName()` should return "Bob Ross".
> `bob.getFullName()` should return "Haskell Ross" after `bob.setFirstName("Haskell")`.
> `bob.getFullName()` should return "Haskell Curry" after `bob.setLastName("Curry")`.
> `bob.getFullName()` should return "Haskell Curry" after `bob.setFullName("Haskell Curry")`.
> `bob.getFirstName()` should return "Haskell" after `bob.setFullName("Haskell Curry")`.
> `bob.getLastName()` should return "Curry" after `bob.setFullName("Haskell Curry")`.

```js
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

```js
let Person = function(firstAndLast) {
  let fullName = firstAndLast;
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };
  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  this.setFullName = function(name) {
    fullName = name;
  };
};
let bob = new Person("Bob Ross");

console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
bob.setLastName("Curry");
console.log(bob.getFullName());
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());
bob.setFullName("Haskell Curry");
console.log(bob.getLastName());
```

```
6
true
undefined
undefined
Bob
Ross
Bob Ross
Haskell Ross
Haskell Curry
Haskell Curry
Haskell
Curry
```

-----



## 21. Map the Debris

[Learn Intermediate Algorithm Scripting: Map the Debris | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris)

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format `{name: 'name', avgAlt: avgAlt}`.
You can read about orbital periods [on Wikipedia](http://en.wikipedia.org/wiki/Orbital_period).
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

> `orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` should return `[{name: "sputnik", orbitalPeriod: 86400}]`.
> `orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` should return `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`.

```js
function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let a = 2 * Math.PI;
  let newArr = [];

  let getOrbPeriod = function(obj) {
    let c = Math.pow(earthRadius + obj.avgAlt, 3);
    let b = Math.sqrt(c / GM);
    let orbPeriod = Math.round(a * b);

    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }
  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
```

```
[{name: 'sputnik', orbitalPeriod: 86400}]
[{name: 'iss', orbitalPeriod: 5557},
 {name: 'hubble', orbitalPeriod: 5734},
 {name: 'moon', orbitalPeriod: 2377399}]
```

