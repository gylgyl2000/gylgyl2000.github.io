---
id: freeCodeCamp-Basic_Data_Structures
title: Basic Data Structures
---



## Introduction to the Basic Data Structure Challenges

[Basic Data Structures | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/)

Data can be stored and accessed in many different ways, both in JavaScript and other languages. This section will teach you how to manipulate arrays, as well as access and copy the information within them. It will also teach you how to manipulate and access the data within JavaScript objects, using both dot and bracket notation. When you're done with this section, you should understand the basic properties and differences between arrays and objects, as well as how to choose which to use for a given purpose. 

-----



## 1. Use an Array to Store a Collection of Data

[Learn Basic Data Structures: Use an Array to Store a Collection of Data | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-an-array-to-store-a-collection-of-data)

The below is an example of the simplest implementation of an array data structure. This is known as a *one-dimensional array*, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains *booleans, strings, and numbers*, among other valid JavaScript data types:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7
```

All arrays have a length property, which as shown above, can be very easily accessed with the syntax `Array.length`. A more complex implementation of an array can be seen below. This is known as a *multi-dimensional array*, or an array that contains other arrays. Notice that this array also contains JavaScript *objects*, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

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

------

We have defined a variable called `yourArray`. Complete the statement by assigning an array of at least 5 elements in length to the `yourArray` variable. Your array should contain at least one *string*, one *number*, and one *boolean*.

> `yourArray` should be an array.
> `yourArray` should be at least 5 elements long.
> `yourArray` should contain at least one `boolean`.
> `yourArray` should contain at least one `number`.
> `yourArray` should contain at least one `string`.

```js
let yourArray; // Change this line
```

```js
let yourArray = [true, false, 8, "hello!", "good bye"];
```

-----



## 2. Access an Array's Contents Using Bracket Notation

[Learn Basic Data Structures: Access an Array's Contents Using Bracket Notation | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-an-arrays-contents-using-bracket-notation)

The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.
When we define a simple array as seen below, there are 3 items in it:

```js
let ourArray = ["a", "b", "c"];
```

In an array, each array item has an *index*.  This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are *zero-indexed*, meaning that the first element of an array is actually at the ***zeroth*** position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as *bracket notation*. For example, if we want to retrieve the `"a"` from `ourArray` and assign it to a variable, we can do so with the following code:

```js
let ourVariable = ourArray[0];
// ourVariable equals "a"
```

In addition to accessing the value associated with an index, you can also *set* an index to a value using the same notation:

```js
ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];
```

Using bracket notation, we have now reset the item at index 1 from `"b"`, to `"not b anymore"`.

------

In order to complete this challenge, set the 2nd position (index `1`) of `myArray` to anything you want, besides `"b"`.

> `myArray[0]` should be equal to `"a"`
> `myArray[1]` should not be equal to `"b"`
> `myArray[2]` should be equal to `"c"`
> `myArray[3]` should be equal to `"d"`

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
// Only change code above this line
console.log(myArray);
```

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "What?"
console.log(myArray); // [ 'a', 'What?', 'c', 'd' ]
```

----



## 3. Add Items to an Array with push() and unshift()

[Learn Basic Data Structures: Add Items to an Array with push() and unshift() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-to-an-array-with-push-and-unshift)

An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are *mutable*. In this challenge, we will look at two methods with which we can programmatically modify an array: `Array.push()` and `Array.unshift()`.
Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the `push()` method adds elements to the end of an array, and `unshift()` adds elements to the beginning. Consider the following:

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']
romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.
```

------

We have defined a function, `mixedNumbers`, which we are passing an array as an argument. Modify the function by using `push()` and `unshift()` to add `'I', 2, 'three'` to the beginning of the array and `7, 'VIII', 9` to the end so that the returned array contains representations of the numbers 1-9 in order.

> `mixedNumbers(["IV", 5, "six"])` should now return `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`
> The `mixedNumbers` function should utilize the `push()` method
> The `mixedNumbers` function should utilize the `unshift()` method

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

-----



## 4. Remove Items from an Array with pop() and shift()

[Learn Basic Data Structures: Remove Items from an Array with pop() and shift() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-from-an-array-with-pop-and-shift)

Both `push()` and `unshift()` have corresponding methods that are nearly functional opposites: `pop()` and `shift()`. As you may have guessed by now, instead of adding, `pop()` *removes* an element from the end of an array, while `shift()` removes an element from the beginning. The key difference between `pop()` and `shift()` and their cousins `push()` and `unshift()`, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.
Let's take a look:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
// now equals ['whats up?', 'hello']
greetings.shift();
// now equals ['hello']
```

We can also return the value of the removed element with either method like this:

```js
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
```

------

We have defined a function, `popShift`, which takes an array as an argument and returns a new array. Modify the function, using `pop()` and `shift()`, to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

> `popShift(["challenge", "is", "not", "complete"])` should return `["challenge", "complete"]`
> The `popShift` function should utilize the `pop()` method
> The `popShift` function should utilize the `shift()` method

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
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

-----



## 5. Remove Items Using splice()

[Learn Basic Data Structures: Remove Items Using splice() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-using-splice)

Ok, so we've learned how to remove elements from the beginning and end of arrays using `shift()` and `pop()`, but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where `splice()` comes in. `splice()` allows us to do just that: **remove any number of consecutive elements** from anywhere in an array.
`splice()` can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of `splice()` are integers which represent indexes, or positions, of the array that `splice()` is being called upon. And remember, arrays are *zero-indexed*, so to indicate the first element of an array, we would use `0`. `splice()`'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

```js
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
```

`splice()` not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
```

------

We've initialized an array `arr`. Use `splice()` to remove elements from `arr`, so that it only contains elements that sum to the value of `10`.

> You should not change the original line of `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`.
> `arr` should only contain elements that sum to `10`.
> Your code should utilize the `splice()` method on `arr`.
> The splice should only remove elements from `arr` and not add any additional elements to `arr`.

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
// Only change code above this line
console.log(arr); // [ 2, 4, 5, 1, 7, 5, 2, 1 ]
```

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr); // [ 2, 5, 2, 1 ]
```

-----



## 6. Add Items Using splice()

[Learn Basic Data Structures: Add Items Using splice() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-using-splice)

Remember in the last challenge we mentioned that `splice()` can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
```

Here we begin with an array of numbers. We then pass the following to `splice()`. The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the elements (13, 14) to be inserted at that same index. Note that there can be any number of elements (separated by commas) following `amountToDelete`, each of which gets inserted.

------

We have defined a function, `htmlColorNames`, which takes an array of HTML colors as an argument. Modify the function using `splice()` to remove the first two elements of the array and add `'DarkSalmon'` and `'BlanchedAlmond'` in their respective places.

> `htmlColorNames` should return `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`
> The `htmlColorNames` function should utilize the `splice()` method
> You should not use `shift()` or `unshift()`.
> You should not use array bracket notation.

```js
function htmlColorNames(arr) {
  // Only change code below this line
  // Only change code above this line
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



## 7. Copy Array Items Using slice()

[Learn Basic Data Structures: Copy Array Items Using slice() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

The next method we will cover is `slice()`. Rather than modifying an array, `slice()` copies or *extracts* a given number of elements to a new array, leaving the array it is called upon untouched. `slice()` takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
```

In effect, we have created a new array by extracting elements from an existing array.

------

We have defined a function, `forecast`, that takes an array as an argument. Modify the function using `slice()` to extract information from the argument array and return a new array that contains the elements `'warm'` and `'sunny'`.

> `forecast` should return `["warm", "sunny"]`
> The `forecast` function should utilize the `slice()` method

```js
function forecast(arr) {
  // Only change code below this line
  return arr;
}
// Only change code above this line
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

-----



## 8. Copy an Array with the Spread Operator

[Learn Basic Data Structures: Copy an Array with the Spread Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator)

While `slice()` allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy *all* of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: `...`
In practice, we can use the spread operator to copy an array like so:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged and thatArray contains the same elements as thisArray
```

------

We have defined a function, `copyMachine` which takes `arr` (an array) and `num` (a number) as arguments. The function is supposed to return a new array made up of `num` copies of `arr`. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

> `copyMachine([true, false, true], 2)` should return `[[true, false, true], [true, false, true]]`
> `copyMachine([1, 2, 3], 5)` should return `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`
> `copyMachine([true, true, null], 1)` should return `[[true, true, null]]`
> `copyMachine(["it works"], 3)` should return `[["it works"], ["it works"], ["it works"]]`
> The `copyMachine` function should utilize the `spread operator` with array `arr`

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    // Only change code above this line
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



## 9. Combine Arrays with the Spread Operator

[Learn Basic Data Structures: Combine Arrays with the Spread Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

Another huge advantage of the *spread* operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```

Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

------

We have defined a function `spreadOut` that returns the variable `sentence`. Modify the function using the spread operator so that it returns the array `['learning', 'to', 'code', 'is', 'fun']`.

> `spreadOut` should return `["learning", "to", "code", "is", "fun"]`
> The `spreadOut` function should utilize spread syntax

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



## 10. Check For The Presence of an Element With indexOf()

[Learn Basic Data Structures: Check For The Presence of an Element With indexOf() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof)

Since arrays can be changed, or *mutated*, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, `indexOf()`, that allows us to quickly and easily check for the presence of an element on an array. `indexOf()` takes an element as a parameter, and when called, it returns the position, or index, of that element, or `-1` if the element does not exist on the array.
For example:

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists
```

------

`indexOf()` can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, `quickCheck`, that takes an array and an element as arguments. Modify the function using `indexOf()` so that it returns `true` if the passed element exists on the array, and `false` if it does not.

> The `quickCheck` function should return a boolean (`true` or `false`), not a string (`"true"` or `"false"`)
> `quickCheck(["squash", "onions", "shallots"], "mushrooms")` should return `false`
> `quickCheck(["onions", "squash", "shallots"], "onions")` should return `true`
> `quickCheck([3, 5, 9, 125, 45, 2], 125)` should return `true`
> `quickCheck([true, false, false], undefined)` should return `false`
> The `quickCheck` function should utilize the `indexOf()` method

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

-----



## 11. Iterate Through All an Array's Items Using For Loops

[Learn Basic Data Structures: Iterate Through All an Array's Items Using For Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops)

Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as `every()`, `forEach()`, `map()`, etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple `for` loop.
Consider the following:

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
// returns [12, 14, 80]
```

Using a `for` loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. In this way, we have easily and programmatically determined which data items are greater than `10`, and returned a new array containing those items.

------

We have defined a function, `filteredArray`, which takes `arr`, a nested array, and `elem` as arguments, and returns a new array. `elem` represents an element that may or may not be present on one or more of the arrays nested within `arr`. Modify the function, using a `for` loop, to return a filtered version of the passed array such that any array nested within `arr` containing `elem` has been removed.

> `filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` should return `[ [10, 8, 3], [14, 6, 23] ]`
> `filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)` should return `[ ["flutes", 4] ]`
> `filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")` should return `[ ["amy", "beth", "sam"] ]`
> `filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` should return `[ ]`
> The `filteredArray` function should utilize a `for` loop

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



## 12. Create complex multi-dimensional arrays

[Learn Basic Data Structures: Create complex multi-dimensional arrays | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/create-complex-multi-dimensional-arrays)

Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, and there is plenty more to learn about working with arrays, much of which you will see in later sections. But before moving on to looking at Objects, lets take one more look, and see how arrays can become a bit more complex than what we have seen in previous challenges.
One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a *multi-dimensional*, or nested array. Consider the following example:

```js
let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];
```

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data. However, we can still very easily access the deepest levels of an array this complex with bracket notation:

```js
console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?
```

And now that we know where that piece of data is, we can reset it if we need to:

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still
```

------

We have defined a variable, `myNestedArray`, set equal to an array. Modify `myNestedArray`, using any combination of *strings*, *numbers*, and *booleans* for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string `'deep'`, on the fourth level, include the string `'deeper'`, and on the fifth level, include the string `'deepest'`.

> `myNestedArray` should contain only numbers, booleans, and strings as data elements
> `myNestedArray` should have exactly 5 levels of depth
> `myNestedArray` should contain exactly one occurrence of the string `"deep"` on an array nested 3 levels deep
> `myNestedArray` should contain exactly one occurrence of the string `"deeper"` on an array nested 4 levels deep
> `myNestedArray` should contain exactly one occurrence of the string `"deepest"` on an array nested 5 levels deep

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

------



## 13. Add Key-Value Pairs to JavaScript Objects

[Learn Basic Data Structures: Add Key-Value Pairs to JavaScript Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-key-value-pairs-to-javascript-objects)

At their most basic, objects are just collections of *key-value* pairs. In other words, they are pieces of data (*values*) mapped to unique identifiers called properties (*keys*). Take a look at an example:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

The above code defines a Tekken video game character object called `tekkenCharacter`. It has three properties, each of which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning `origin` to the object:

```js
tekkenCharacter.origin = 'South Korea';
```

This uses dot notation. If you were to observe the `tekkenCharacter` object, it will now include the `origin` property. Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. Here's an example with a variable:

```js
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
```

After adding all the examples, the object will look like this:

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

------

 A `foods` object has been created with three entries. Using the syntax of your choice, add three more entries to it: `bananas` with a value of `13`, `grapes` with a value of `35`, and `strawberries` with a value of `27`.

> `foods` should be an object.
> The `foods` object should have a key `"bananas"` with a value of `13`.
> The `foods` object should have a key `"grapes"` with a value of `35`.
> The `foods` object should have a key `"strawberries"` with a value of `27`.
> The key-value pairs should be set using dot or bracket notation.

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// Only change code below this line
// Only change code above this line
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



## 14. Modify an Object Nested Within an Object

[Learn Basic Data Structures: Modify an Object Nested Within an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-object-nested-within-an-object)

Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:

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

`nestedObject` has three properties: `id` (value is a number), `date` (value is a string), and `data` (value is an object with its nested structure). While structures can quickly become complex, we can still use the same notations to access the information we need. To assign the value `10` to the `busy` property of the nested `onlineStatus` object, we use dot notation to reference the property:

```js
nestedObject.data.onlineStatus.busy = 10;
```

------

Here we've defined an object `userActivity`, which includes another object nested within it. Set the value of the `online` key to `45`.

> `userActivity` should have `id`, `date` and `data` properties.
> `userActivity` should have a `data` key set to an object with keys `totalUsers` and `online`.
> The `online` property nested in the `data` key of `userActivity` should be set to `45`
> The `online` property should be set using dot or bracket notation.

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



## 15. Access Property Names with Bracket Notation

[Learn Basic Data Structures: Access Property Names with Bracket Notation | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-property-names-with-bracket-notation)

In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable. For instance, imagine that our `foods` object is being used in a program for a supermarket cash register. We have some function that sets the `selectedFood` and we want to check our `foods` object for the presence of that food. This might look like:

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

This code will evaluate the value stored in the `selectedFood` variable and return the value of that key in the `foods` object, or `undefined` if it is not present. Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.

------

We've defined a function, `checkInventory`, which receives a scanned item as an argument. Return the current value of the `scannedItem` key in the `foods` object. You can assume that only valid keys will be provided as an argument to `checkInventory`.

> `checkInventory` should be a function.
> The `foods` object should have only the following key-value pairs: `apples: 25`, `oranges: 32`, `plums: 28`, `bananas: 13`, `grapes: 35`, `strawberries: 27`.
> `checkInventory("apples")` should return `25`.
> `checkInventory("bananas")` should return `13`.
> `checkInventory("strawberries")` should return `27`.

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
  // Only change code below this line
  // Only change code above this line
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



## 16. Use the delete Keyword to Remove Object Properties

[Learn Basic Data Structures: Use the delete Keyword to Remove Object Properties | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-the-delete-keyword-to-remove-object-properties)

Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive way to structure data, ***and\***, they provide very fast lookup time. Throughout the rest of these challenges, we will describe several common operations you can perform on objects so you can become comfortable applying these useful data structures in your programs.
In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can *remove* a key-value pair from an object.
Let's revisit our `foods` object example one last time. If we wanted to remove the `apples` key, we can remove it by using the `delete` keyword like this:

```js
delete foods.apples;
```

------

Use the delete keyword to remove the `oranges`, `plums`, and `strawberries` keys from the `foods` object.

> The `foods` object should only have three keys: `apples`, `grapes`, and `bananas`.
> The `oranges`, `plums`, and `strawberries` keys should be removed using `delete`.

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// Only change code below this line
// Only change code above this line
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



## 17. Check if an Object has a Property

[Learn Basic Data Structures: Check if an Object has a Property | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property)

Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the `hasOwnProperty()` method and the other uses the `in` keyword. If we have an object `users` with a property of `Alan`, we could check for its presence in either of the following ways:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
```

------

We've created an object, `users`, with some users in it and a function `isEveryoneHere`, which we pass the `users` object to as an argument. Finish writing this function so that it returns `true` only if the `users` object contains all four names, `Alan`, `Jeff`, `Sarah`, and `Ryan`, as keys, and `false` otherwise.

> The `users` object should only contain the keys `Alan`, `Jeff`, `Sarah`, and `Ryan`
> The function `isEveryoneHere` should return `true` if `Alan`, `Jeff`, `Sarah`, and `Ryan` are properties on the `users` object
> The function `isEveryoneHere` should return `false` if `Alan` is not a property on the `users` object
> The function `isEveryoneHere` should return `false` if `Jeff` is not a property on the `users` object
> The function `isEveryoneHere` should return `false` if `Sarah` is not a property on the `users` object
> The function `isEveryoneHere` should return `false` if `Ryan` is not a property on the `users` object

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
  // Only change code below this line
  // Only change code above this line
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

-----



## 18. Iterate Through the Keys of an Object with a for...in Statement

[Learn Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement)

Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a *for...in* statement. For our `users` object, this could look like:

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

In this statement, we defined a variable `user`, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console. **NOTE:** Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

------

We've defined a function `countOnline` which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose `online` property is set to `true`.  An example of a users object which could be passed to `countOnline` is shown below.  Each user will have an `online` property with either a `true` or `false` value.

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

> The function `countOnline` should use a `for in` statement to iterate through the object keys of the object passed to it.
> The function `countOnline` should return `1` when the object `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` is passed to it
> The function `countOnline` should return `2` when the object `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` is passed to it
> The function `countOnline` should return `0` when the object `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` is passed to it

```js
function countOnline(usersObj) {
  // Only change code below this line
  // Only change code above this line
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



## 19. Generate an Array of All Object Keys with Object.keys()

[Learn Basic Data Structures: Generate an Array of All Object Keys with Object.keys() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/generate-an-array-of-all-object-keys-with-object-keys)

We can also generate an array which contains all the keys stored in an object using the `Object.keys()` method and passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array.

------

Finish writing the `getArrayOfUsers` function so that it returns an array containing all the properties in the object it receives as an argument.

> The `users` object should only contain the keys `Alan`, `Jeff`, `Sarah`, and `Ryan`
> The `getArrayOfUsers` function should return an array which contains all the keys in the `users` object

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
  // Only change code below this line
  // Only change code above this line
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



## 20. Modify an Array Stored in an Object

[Learn Basic Data Structures: Modify an Array Stored in an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-array-stored-in-an-object)

Now you've seen all the basic operations for JavaScript objects. You can add, modify, and remove key-value pairs, check if keys exist, and iterate over all the keys in an object. As you continue learning JavaScript you will see even more versatile applications of objects. Additionally, the Data Structures lessons located in the Coding Interview Prep section of the curriculum also cover the ES6 Map and Set objects, both of which are similar to ordinary objects but provide some additional features. Now that you've learned the basics of arrays and objects, you're fully prepared to begin tackling more complex problems using JavaScript!

------

Take a look at the object we've provided in the code editor. The `user` object contains three keys. The `data` key contains five keys, one of which contains an array of `friends`. From this, you can see how flexible objects are as data structures. We've started writing a function `addFriend`. Finish writing it so that it takes a `user` object and adds the name of the `friend` argument to the array stored in `user.data.friends` and returns that array.

> The `user` object should have `name`, `age`, and `data` keys.
> The `addFriend` function should accept a `user` object and a `friend` string as arguments and add the friend to the array of `friends` in the `user` object.
> `addFriend(user, "Pete")` should return `["Sam", "Kira", "Tomo", "Pete"]`.

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
  // Only change code below this line
  // Only change code above this line
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

