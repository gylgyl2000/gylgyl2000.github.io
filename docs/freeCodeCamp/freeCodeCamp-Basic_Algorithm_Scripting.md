---
id: freeCodeCamp-Basic_Algorithm_Scripting
title: Basic Algorithm Scripting
---



## Introduction to Basic Algorithm Scripting

[Basic Algorithm Scripting | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/)

A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.

To make solving problems easier, it can be helpful to break them down into many chunks. Then, each chunk can be solved one by one. For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results.

In this section we will learn to solve basic algorithm problems using JavaScript. This will help you improve your problem solving skills and prepare you to later solve more complex problems.

**Hint**: If you get stuck, try using `console.log()` to log variable values to the console. This will help to debug problems.

-----



## 1. Convert Celsius to Fahrenheit

[Learn Basic Algorithm Scripting: Convert Celsius to Fahrenheit | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit)

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

------

You are given a variable `celsius` representing a temperature in Celsius. Use the variable `fahrenheit` already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

> `convertToF(0)` should return a number
> `convertToF(-30)` should return a value of `-22`
> `convertToF(-10)` should return a value of `14`
> `convertToF(0)` should return a value of `32`
> `convertToF(20)` should return a value of `68`
> `convertToF(30)` should return a value of `86`

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



## 2. Reverse a String

[Learn Basic Algorithm Scripting: Reverse a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string)

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

> `reverseString("hello")` should return a string.
> `reverseString("hello")` should become `"olleh"`.
> `reverseString("Howdy")` should become `"ydwoH"`.
> `reverseString("Greetings from Earth")` should return `"htraE morf sgniteerG"`.

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



## 3. Factorialize a Number

[Learn Basic Algorithm Scripting: Factorialize a Number | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number)

Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation `n!`
For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`
Only integers greater than or equal to zero will be supplied to the function.

> `factorialize(5)` should return a number.
> `factorialize(5)` should return 120.
> `factorialize(10)` should return 3628800.
> `factorialize(20)` should return 2432902008176640000.
> `factorialize(0)` should return 1.

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



## 4. Find the Longest Word in a String

[Learn Basic Algorithm Scripting: Find the Longest Word in a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string)

Return the length of the longest word in the provided sentence.
Your response should be a number.

> `findLongestWordLength("The quick brown fox jumped over the lazy dog")` should return a number.
> `findLongestWordLength("The quick brown fox jumped over the lazy dog")` should return 6.
> `findLongestWordLength("May the force be with you")` should return 5.
> `findLongestWordLength("Google do a barrel roll")` should return 6.
> `findLongestWordLength("What is the average airspeed velocity of an unladen swallow")` should return 8.
> `findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")` should return 19.

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



## 5. Return Largest Numbers in Arrays

[Learn Basic Algorithm Scripting: Return Largest Numbers in Arrays | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays)

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.

> `largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])` should return an array.
> `largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])` should return `[27, 5, 39, 1001]`.
> `largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])` should return `[9, 35, 97, 1000000]`.
> `largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])` should return `[25, 48, 21, -3]`.

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

-----



## 6. Confirm the Ending

[Learn Basic Algorithm Scripting: Confirm the Ending | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending)

Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).
This challenge *can* be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

> `confirmEnding("Bastian", "n")` should return true.
> `confirmEnding("Congratulation", "on")` should return true.
> `confirmEnding("Connor", "n")` should return false.
> `confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` should return false.
> `confirmEnding("He has to give me a new name", "name")` should return true.
> `confirmEnding("Open sesame", "same")` should return true.
> `confirmEnding("Open sesame", "sage")` should return false.
> `confirmEnding("Open sesame", "game")` should return false.
> `confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` should return false.
> `confirmEnding("Abstraction", "action")` should return true.
> Your code should not use the built-in method `.endsWith()` to solve the challenge.

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

-----



## 7. Repeat a String Repeat a String

[Learn Basic Algorithm Scripting: Repeat a String Repeat a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string)

Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if `num` is not a positive number. For the purpose of this challenge, do *not* use the built-in `.repeat()` method.

> `repeatStringNumTimes("*", 3)` should return `"***"`.
> `repeatStringNumTimes("abc", 3)` should return `"abcabcabc"`.
> `repeatStringNumTimes("abc", 4)` should return `"abcabcabcabc"`.
> `repeatStringNumTimes("abc", 1)` should return `"abc"`.
> `repeatStringNumTimes("*", 8)` should return `"***\**\***"`.
> `repeatStringNumTimes("abc", -2)` should return `""`.
> The built-in `repeat()` method should not be used.
> `repeatStringNumTimes("abc", 0)` should return `""`.

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

-----



## 8. Truncate a String

[Learn Basic Algorithm Scripting: Truncate a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string)

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.

> `truncateString("A-tisket a-tasket A green and yellow basket", 8)` should return "A-tisket...".
> `truncateString("Peter Piper picked a peck of pickled peppers", 11)` should return "Peter Piper...".
> `truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)` should return "A-tisket a-tasket A green and yellow basket"
> .`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)` should return "A-tisket a-tasket A green and yellow basket".
> `truncateString("A-", 1)` should return "A...".
> `truncateString("Absolutely Longer", 2)` should return "Ab...".

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

-----



## 9. Finders Keepers

[Learn Basic Algorithm Scripting: Finders Keepers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers)

Create a function that looks through an array `arr` and returns the first element in it that passes a 'truth test'. This means that given an element `x`, the 'truth test' is passed if `func(x)` is `true`. If no element passes the test, return `undefined`.

> `findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` should return 8.
> `findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` should return undefined.

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



## 10. Boo who

[Learn Basic Algorithm Scripting: Boo who | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who)

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

> `booWho(true)` should return true.
> `booWho(false)` should return true.
> `booWho([1, 2, 3])` should return false.
> `booWho([].slice)` should return false.
> `booWho({ "a": 1 })` should return false.
> `booWho(1)` should return false.
> `booWho(NaN)` should return false.
> `booWho("a")` should return false.
> `booWho("true")` should return false.
> `booWho("false")` should return false.

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



## 11. Title Case a Sentence

[Learn Basic Algorithm Scripting: Title Case a Sentence | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence)

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

> `titleCase("I'm a little tea pot")` should return a string.
> `titleCase("I'm a little tea pot")` should return `I'm A Little Tea Pot`.
> `titleCase("sHoRt AnD sToUt")` should return `Short And Stout`.
> `titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` should return `Here Is My Handle Here Is My Spout`.

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

------



## 12. Slice and Splice

[Learn Basic Algorithm Scripting: Slice and Splice | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice)

You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index `n` of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.

> `frankenSplice([1, 2, 3], [4, 5], 1)` should return `[4, 1, 2, 3, 5]`.
> `frankenSplice([1, 2], ["a", "b"], 1)` should return `["a", 1, 2, "b"]`.
> `frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` should return `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.
> All elements from the first array should be added to the second array in their original order.
> The first array should remain the same after the function runs.
> The second array should remain the same after the function runs.

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

-----



## 13. Falsy Bouncer

[Learn Basic Algorithm Scripting: Falsy Bouncer | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer)

Remove all falsy values from an array.
Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.
Hint: Try converting each value to a Boolean.

> `bouncer([7, "ate", "", false, 9])` should return `[7, "ate", 9]`.
> `bouncer(["a", "b", "c"])` should return `["a", "b", "c"]`.
> `bouncer([false, null, 0, NaN, undefined, ""])` should return `[]`.
> `bouncer([null, NaN, 1, 2, undefined])` should return `[1, 2]`.

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

-----



## 14. Where do I Belong

[Learn Basic Algorithm Scripting: Where do I Belong | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong)

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).
Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

> `getIndexToIns([10, 20, 30, 40, 50], 35)` should return `3`.
> `getIndexToIns([10, 20, 30, 40, 50], 35)` should return a number.
> `getIndexToIns([10, 20, 30, 40, 50], 30)` should return `2`.
> `getIndexToIns([10, 20, 30, 40, 50], 30)` should return a number.
> `getIndexToIns([40, 60], 50)` should return `1`.
> `getIndexToIns([40, 60], 50)` should return a number.
> `getIndexToIns([3, 10, 5], 3)` should return `0`.
> `getIndexToIns([3, 10, 5], 3)` should return a number.
> `getIndexToIns([5, 3, 20, 3], 5)` should return `2`.
> `getIndexToIns([5, 3, 20, 3], 5)` should return a number.
> `getIndexToIns([2, 20, 10], 19)` should return `2`.
> `getIndexToIns([2, 20, 10], 19)` should return a number.
> `getIndexToIns([2, 5, 10], 15)` should return `3`.
> `getIndexToIns([2, 5, 10], 15)` should return a number.
> `getIndexToIns([], 1)` should return `0`.
> `getIndexToIns([], 1)` should return a number.

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

-----



## 15. Mutations

[Learn Basic Algorithm Scripting: Mutations | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations)

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".
Lastly, `["Alien", "line"]`, should return true because all of the letters in "line" are present in "Alien".

> `mutation(["hello", "hey"])` should return false.
> `mutation(["hello", "Hello"])` should return true.
> `mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` should return true.
> `mutation(["Mary", "Army"])` should return true.
> `mutation(["Mary", "Aarmy"])` should return true.
> `mutation(["Alien", "line"])` should return true.
> `mutation(["floor", "for"])` should return true.
> `mutation(["hello", "neo"])` should return false.
> `mutation(["voodoo", "no"])` should return false.
> `mutation(["ate", "date"]` should return false.
> `mutation(["Tiger", "Zebra"])` should return false.
> `mutation(["Noel", "Ole"])` should return true.

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

-----



## 16. Chunky Monkey

[Learn Basic Algorithm Scripting: Chunky Monkey | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey)

Write a function that splits an array (first argument) into groups the length of `size` (second argument) and returns them as a two-dimensional array.

> `chunkArrayInGroups(["a", "b", "c", "d"], 2)` should return `[["a", "b"], ["c", "d"]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)` should return `[[0, 1, 2], [3, 4, 5]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)` should return `[[0, 1], [2, 3], [4, 5]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)` should return `[[0, 1, 2, 3], [4, 5]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)` should return `[[0, 1, 2], [3, 4, 5], [6]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)` should return `[[0, 1, 2, 3], [4, 5, 6, 7], [8]]`.
> `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)` should return `[[0, 1], [2, 3], [4, 5], [6, 7], [8]]`.

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

