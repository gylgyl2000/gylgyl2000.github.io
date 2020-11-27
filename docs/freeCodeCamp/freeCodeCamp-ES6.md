---
id: freeCodeCamp-ES6
title: ES6
---



## Introduction to the ES6 Challenges

[ES6 | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/)

ECMAScript is a standardized version of JavaScript with the goal of  unifying the language's specifications and features. As all major  browsers and JavaScript-runtimes follow this specification, the term *ECMAScript* is interchangeable with the term *JavaScript*.

Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5)  specification of the language, finalized in 2009. But JavaScript is an  evolving programming language. As features are added and revisions are  made, new versions of the language are released for use by developers.

The most recent standardized version is called ECMAScript 6 (ES6),  released in 2015. This new version of the language adds some powerful  features that will be covered in this section of challenges, including :

- Arrow functions
- Classes
- Modules
- Promises
- Generators
- `let` and `const`

**Note** : Not all browsers support ES6 features. If you  use ES6 in your own projects, you may need to use a program (transpiler) to convert your ES6 code into ES5 until browsers support ES6.

-----



## 1. Explore Differences Between the var and let Keywords

[Learn ES6: Explore Differences Between the var and let Keywords | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/explore-differences-between-the-var-and-let-keywords)

One of the biggest problems with declaring variables with the `var` keyword is that you can overwrite variable declarations without an error.

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'
```

As you can see in the code above, the `camper` variable is originally declared as `James` and then overridden to be `David`. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
 A new keyword called `let` was introduced in ES6 to solve this potential issue with the `var` keyword. If you were to replace `var` with `let` in the variable declarations of the code above, the result would be an error.

```js
let camper = 'James';
let camper = 'David'; // throws an error
```

This error can be seen in the console of your browser. So unlike `var`, when using `let`, a variable with the same name can only be declared once. Note the `"use strict"`. This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance :

```js
"use strict";
x = 3.14; // throws an error because x is not declared
```

------

Update the code so it only uses the `let` keyword.

> `var` should not exist in the code.
> `catName` should be `Oliver`.
> `quote` should be `"Oliver says Meow!"`

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
```

```js
let catName;
let quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();
console.log(quote); // Oliver says Meow!
```

-----



## 2. Compare Scopes of the var and let Keywords

[Learn ES6: Compare Scopes of the var and let Keywords | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/compare-scopes-of-the-var-and-let-keywords)

When you declare a variable with the `var` keyword, it is declared globally, or locally if declared inside a function.
The `let` keyword behaves similarly, but with some extra features. When you declare a variable with the `let` keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
For example :

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // returns [0, 1, 2]
console.log(i); // returns 3
```

With the `var` keyword, `i` is declared globally. So when `i++` is executed, it updates the global variable. This code is similar to the following :

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // returns [0, 1, 2]
console.log(i); // returns 3
```

This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the `i` variable. This is because the stored function will always refer to the value of the updated global `i` variable.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 3
```

As you can see, `printNumTwo()` prints 3 and not 2. This is because the value assigned to `i` was updated and the `printNumTwo()` returns the global `i` and not the value `i` had when the function was created in the for loop. The `let` keyword does not follow this behavior :

```js
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 2
console.log(i); // returns "i is not defined"
```

`i` is not defined because it was not declared in the global scope. It is only declared within the for loop statement. `printNumTwo()` returned the correct value because three different `i` variables with unique values (0, 1, and 2) were created by the `let` keyword within the loop statement.

------

Fix the code so that `i` declared in the if statement is a separate variable than `i` declared in the first line of the function. Be certain not to use the `var` keyword anywhere in your code.

This exercise is designed to illustrate the difference between how `var` and `let` keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.

> `var` should not exist in code.
> The variable `i` declared in the if statement should equal "block scope".
> `checkScope()` should return "function scope"

```js
function checkScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

```js
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i); // Block scope i is:  block scope
  }
  console.log('Function scope i is: ', i); // Function scope i is:  function scope
  return i;
}
console.log(checkScope()); // function scope
```

-----



## 3. Declare a Read-Only Variable with the const Keyword

[Learn ES6: Declare a Read-Only Variable with the const Keyword | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/declare-a-read-only-variable-with-the-const-keyword)

The keyword `let` is not the only new way to declare variables. In ES6, you can also declare variables using the `const` keyword.
`const` has all the awesome features that `let` has, with the added bonus that variables declared using `const` are read-only. They are a constant value, which means that once a variable is assigned with `const`, it cannot be reassigned.

```js
"use strict";
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
```

As you can see, trying to reassign a variable declared with `const` will throw an error. You should always name variables you don't want to reassign using the `const` keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

**Note :** It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.

------

Change the code so that all variables are declared using `let` or `const`. Use `let` when you want the variable to change, and `const` when you want the variable to remain constant. Also, rename variables declared with `const` to conform to common practices, meaning constants should be in all caps.

> `var` should not exist in your code.
> `SENTENCE` should be a constant variable declared with `const`.
> `i` should be declared with `let`.
> `console.log` should be changed to print the `SENTENCE` variable.

```js
function printManyTimes(str) {
  "use strict";
  // Only change code below this line
  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }
  // Only change code above this line
}
printManyTimes("freeCodeCamp");
```

```js
function printManyTimes(str) {
  "use strict";
  // Only change code below this line
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
  // Only change code above this line
}
printManyTimes("freeCodeCamp");
```

```bash
freeCodeCamp is cool!
freeCodeCamp is cool!
freeCodeCamp is cool!
freeCodeCamp is cool!
freeCodeCamp is cool!
freeCodeCamp is cool!
```

-----



## 4. Mutate an Array Declared with const

[Learn ES6: Mutate an Array Declared with const | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const)

The `const` declaration has many use cases in modern JavaScript.
Some developers prefer to assign all their variables using `const` by default, unless they know they will need to reassign the value. Only in that case, they use `let`.
However, it is important to understand that objects (including arrays and functions) assigned to a variable using `const` are still mutable. Using the `const` declaration only prevents reassignment of the variable identifier.

```js
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

As you can see, you can mutate the object `[5, 6, 7]` itself and the variable `s` will still point to the altered array `[5, 6, 45]`. Like all arrays, the array elements in `s` are mutable, but because `const` was used, you cannot use the variable identifier `s` to point to a different array using the assignment operator.

------

An array is declared as `const s = [5, 7, 2]`. Change the array to `[2, 5, 7]` using various element assignment.

> You should not replace `const` keyword.
> `s` should be a constant variable (by using `const`).
> You should not change the original array declaration.
> `s` should be equal to `[2, 5, 7]`.

```js
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
  s.unshift(2);
  s.pop();
  // Using s = [2, 5, 7] would be invalid
  // Only change code above this line
}
editInPlace();
```

-----



## 5. Prevent Object Mutation

[Learn ES6: Prevent Object Mutation | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/prevent-object-mutation)

As seen in the previous challenge, `const` declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze` to prevent data mutation.
Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); // { name: "FreeCodeCamp", review:"Awesome"}
```

------

In this challenge you are going to use `Object.freeze` to prevent mathematical constants from changing. You need to freeze the `MATH_CONSTANTS` object so that no one is able to alter the value of `PI`, add, or delete properties.

> You should not replace `const` keyword.
> `MATH_CONSTANTS` should be a constant variable (by using `const`).
> You should not change original `MATH_CONSTANTS`.
> `PI` should equal `3.14`.

```js
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

------



## 6. Use Arrow Functions to Write Concise Anonymous Functions

[Learn ES6: Use Arrow Functions to Write Concise Anonymous Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions)

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
To achieve this, we often use the following syntax :

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use **arrow function syntax** :

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword `return` as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements :

```js
const myFunc = () => "value";
```

This code will still return `value` by default.

------

Rewrite the function assigned to the variable `magic` which returns a `new Date()` to use arrow function syntax. Also, make sure nothing is defined using the keyword `var`.

> User should replace `var` keyword.
> `magic` should be a constant variable (by using `const`).
> `magic` should be a `function`.
> `magic()` should return correct date.
> `function` keyword should not be used.

```js
var magic = function() {
  "use strict";
  return new Date();
};
```

```js
const magic = () => new Date();
```

-----



## 7. Write Arrow Functions with Parameters

[Learn ES6: Write Arrow Functions with Parameters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters)

Just like a regular function, you can pass arguments into an arrow function.

```js
// doubles input value and returns it
const doubler = (item) => item * 2;
```

If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.

```js
// the same function, without the argument parentheses
const doubler = item => item * 2;
```

It is possible to pass more than one argument into an arrow function.

```js
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
```

------

Rewrite the `myConcat` function which appends contents of `arr2` to `arr1` so that the function uses arrow function syntax.

> You should replace the `var` keyword.
> `myConcat` should be a constant variable (by using `const`).
> `myConcat` should be an arrow function with two parameters.
> `myConcat()` should return `[1, 2, 3, 4, 5]`.
> `function` keyword should not be used.

```js
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
```

```js
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]
```

-----



## 8. Set Default Parameters for Your Functions

[Learn ES6: Set Default Parameters for Your Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions)

In order to help us create more flexible functions, ES6 introduces *default parameters* for functions.
Check out this code :

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter `name` will receive its default value `"Anonymous"` when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

------

Modify the function `increment` by adding default parameters so that it will add 1 to `number` if `value` is not specified.

> The result of `increment(5, 2)` should be `7`.
> The result of `increment(5)` should be `6`.
> A default parameter value of `1` should be used for `value`.

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

```js
const increment = (number, value = 1) => number + value;
```

------



## 9. Use the Rest Parameter with Function Parameters

[Learn ES6: Use the Rest Parameter with Function Parameters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters)

In order to help us create more flexible functions, ES6 introduces the *rest parameter* for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
Check out this code :

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```

The rest parameter eliminates the need to check the `args` array and allows us to apply `map()`, `filter()` and `reduce()` on the parameters array.

------

Modify the function `sum` using the rest parameter in such a way that the function `sum` is able to take any number of arguments and return their sum.

> The result of `sum(0,1,2)` should be 3.
> The result of `sum(1,2,3,4)` should be 10.
> The result of `sum(5)` should be 5.
> The result of `sum()` should be 0.
> The `sum` function should use the `...` rest parameter on the `args` parameter.

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
```

```js
const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(0, 1, 2)); // 3
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5)); // 5
console.log(sum(0)); // 0
```

-----



## 10. Use the Spread Operator to Evaluate Arrays In-Place

[Learn ES6: Use the Spread Operator to Evaluate Arrays In-Place | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place)

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
The ES5 code below uses `apply()` to compute the maximum value in an array :

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
```

We had to use `Math.max.apply(null, arr)` because `Math.max(arr)` returns `NaN`. `Math.max()` expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```

`...arr` returns an unpacked array. In other words, it *spreads* the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

```js
const spreaded = ...arr; // will throw a syntax error
```

------

Copy all contents of `arr1` into another array `arr2` using the spread operator.

> `arr2` should be correct copy of `arr1`.
> `...` spread operator should be used to duplicate `arr1`.
> `arr2` should remain unchanged when `arr1` is changed.

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [];  // Change this line
console.log(arr2);
```

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);
```

------



## 11. Use Destructuring Assignment to Extract Values from Objects

[Learn ES6: Use Destructuring Assignment to Extract Values from Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-extract-values-from-objects)

*Destructuring assignment* is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
Consider the following ES5 code :

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
```

Here's an equivalent assignment statement using the ES6 destructuring syntax:

```js
const { name, age } = user;
// name = 'John Doe', age = 34
```

Here, the `name` and `age` variables will be created and assigned the values of their respective values from the `user` object. You can see how much cleaner this is.
You can extract as many or few values from the object as you want.

------

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `today` and `tomorrow` the values of `today` and `tomorrow` from the `HIGH_TEMPERATURES` object.

> You should remove the ES5 assignment syntax.
> You should use destructuring to create the `today` variable.
> You should use destructuring to create the `tomorrow` variable.
> `today` should be equal to `77` and `tomorrow` should be equal to `80`.

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
// Only change code above this line
```

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today); // 77
console.log(tomorrow); // 80
```

------



## 12. Use Destructuring Assignment to Assign Variables from Objects

[Learn ES6: Use Destructuring Assignment to Assign Variables from Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-objects)

Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.
Using the same object from the last example :

```js
const user = { name: 'John Doe', age: 34 };
```

Here's how you can give new variable names in the assignment :

```js
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
```

You may read it as "get the value of `user.name` and assign it to a new variable named `userName`" and so on.

------

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `highToday` and `highTomorrow` the values of `today` and `tomorrow` from the `HIGH_TEMPERATURES` object.

> You should remove the ES5 assignment syntax.
> You should use destructuring to create the `highToday` variable.
> You should use destructuring to create the `highTomorrow` variable.
> `highToday` should be equal to `77` and `highTomorrow` should be equal to `80`.

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow;
// Only change code above this line
```

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};  
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday); // 77
console.log(highTomorrow); // 80
```

------



## 13. Use Destructuring Assignment to Assign Variables from Nested Objects

[Learn ES6: Use Destructuring Assignment to Assign Variables from Nested Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects)

You can use the same principles from the previous two lessons to destructure values from nested objects.
Using an object similar to previous examples :

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Here's how to extract the values of object properties and assign them to variables with the same name :

```js
const { johnDoe: { age, email }} = user;
```

And here's how you can assign an object properties' values to variables with different names :

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

------

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `lowToday` and `highToday` the values of `today.low` and `today.high` from the `LOCAL_FORECAST` object.

> You should remove the ES5 assignment syntax.
> You should use destructuring to create the `lowToday` variable.
> You should use destructuring to create the `highToday` variable.
> `lowToday` should be equal to `64` and `highToday` should be equal to `77`.

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// Only change code below this line  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;
// Only change code above this line
```

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
console.log(lowToday); // 64
console.log(highToday); // 77
```

-----



## 14. Use Destructuring Assignment to Assign Variables from Arrays

[Learn ES6: Use Destructuring Assignment to Assign Variables from Arrays | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-arrays)

ES6 makes destructuring arrays as easy as destructuring objects.
One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.
Destructuring an array lets us do exactly that :

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

The variable `a` is assigned the first value of the array, and `b` is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index :

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

------

Use destructuring assignment to swap the values of `a` and `b` so that `a` receives the value stored in `b`, and `b` receives the value stored in `a`.

> Value of `a` should be 6, after swapping.
> Value of `b` should be 8, after swapping.
> You should use array destructuring to swap a and b.

```js
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a); // 6
console.log(b); // 8
```

-----



## 15. Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

[Learn ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements)

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
The result is similar to `Array.prototype.slice()`, as shown below :

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

Variables `a` and `b` take the first and second values from the array. After that, because of the rest parameter's presence, `arr` gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

------

Use destructuring assignment with the rest parameter to perform an effective `Array.prototype.slice()` so that `arr` is a sub-array of the original array `source` with the first two elements omitted.

> `arr` should be `[3,4,5,6,7,8,9,10]`.
> `source` should be `[1,2,3,4,5,6,7,8,9,10]`.
> `Array.slice()` should not be used.
> Destructuring on `list` should be used.

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;  
}
const arr = removeFirstTwo(source);
console.log(source); // [1,2,3,4,5,6,7,8,9,10]
console.log(arr); // [3,4,5,6,7,8,9,10]
```

------



## 16. Use Destructuring Assignment to Pass an Object as a Function's Parameters

[Learn ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters)

In some cases, you can destructure the object in a function argument itself.
Consider the code below :

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```

This effectively destructures the object sent into the function. This can also be done in-place :

```js
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
```

When `profileData` is passed to the above function, the values are destructured from the function parameter for use within the function.

------

Use destructuring assignment within the argument to the function `half` to send only `max` and `min` inside the function.

> `stats` should be an `object`.
> `half(stats)` should be `28.015`.
> Destructuring should be used.
> Destructured parameter should be used.

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => {
  return (max + min) / 2.0;
};
console.log(half(stats)); // 28.015
```

-----



## 17. Create Strings using Template Literals

[Learn ES6: Create Strings using Template Literals | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-strings-using-template-literals)

A new feature of ES6 is the *template literal*. This is a special type of string that makes creating complex strings easier.
Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
Consider the code below :

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};
// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```

A lot of things happened there. Firstly, the example uses backticks (```), not quotes (`'` or `"`), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting `\n` within strings. The `${variable}` syntax used above is a placeholder. Basically, you won't have to use concatenation with the `+` operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with `${` and `}`. Similarly, you can include other expressions in your string literal, for example `${a + b}`. This new way of creating strings gives you more flexibility to create robust strings.

------

Use template literal syntax with backticks to create an array of list element (`li`) strings. Each list element's text should be one of the array elements from the `failure` property on the `result` object and have a `class` attribute with the value `text-warning`. The `makeList` function should return the array of list item strings.
Use an iterator method (any kind of loop) to get the desired output (shown below).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

> `failuresList` should be an array containing `result failure` messages.
> `failuresList` should be equal to the specified output.
> Template strings and expression interpolation should be used.
> An iterator should be used.

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line
  return failureItems;
}
const failuresList = makeList(result.failure);
```

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  let failureItems = [];
  for (let i = 0; i < result.failure.length; i++) {
    failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)   
  };
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList)
// [ '<li class="text-warning">no-var</li>',
//  '<li class="text-warning">var-on-top</li>',
//  '<li class="text-warning">linebreak</li>' ]
```

------



## 18. Write Concise Object Literal Declarations Using Object Property Shorthand

[Learn ES6: Write Concise Object Literal Declarations Using Object Property Shorthand | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-concise-object-literal-declarations-using-object-property-shorthand)

ES6 adds some nice support for easily defining object literals.
Consider the following code :

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write `x: x`. You can simply write `x` once, and it will be converted to`x: x` (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax :

```js
const getMousePosition = (x, y) => ({ x, y });
```

------

Use object property shorthand with object literals to create and return an object with `name`, `age` and `gender` properties.

> `createPerson("Zodiac Hasbro", 56, "male")` should return `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.
> Your code should not use `key:value`.

```js
const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

```js
const createPerson = (name, age, gender) => {
  "use strict";
  return { name, age, gender };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"))
// { name: 'Zodiac Hasbro', age: 56, gender: 'male' }
```

------



## 19. Write Concise Declarative Functions with ES6

[Learn ES6: Write Concise Declarative Functions with ES6 | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-concise-declarative-functions-with-es6)

When defining functions within objects in ES5, we have to use the keyword `function` as follows :

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

With ES6, You can remove the `function` keyword and colon altogether when defining functions in objects. Here's an example of this syntax :

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

------

Refactor the function `setGear` inside the object `bicycle` to use the shorthand syntax described above.

> Traditional function expression should not be used.
> `setGear` should be a declarative function.
> `bicycle.setGear(48)` should change the `gear` value to 48.

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(48);
console.log(bicycle.gear); // 48
```

-----



## 20. Use class Syntax to Define a Constructor Function

[Learn ES6: Use class Syntax to Define a Constructor Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-class-syntax-to-define-a-constructor-function)

ES6 provides a new syntax to create objects, using the *class* keyword.
It should be noted that the `class` syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
In ES5, we usually define a constructor function and use the `new` keyword to instantiate an object.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

The `class` syntax simply replaces the constructor function creation :

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

It should be noted that the `class` keyword declares a new function, to which a constructor is added. This constructor is invoked when `new` is called to create a new object.
 **Notes :**

-  UpperCamelCase should be used by convention for ES6 class names, as in `SpaceShuttle` used above.
-  The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

------

Use the `class` keyword and write a constructor to create the `Vegetable` class.
The `Vegetable` class allows you to create a vegetable object with a property `name` that gets passed to the constructor.

> `Vegetable` should be a `class` with a defined `constructor` method.
> `class` keyword should be used.
> `Vegetable` should be able to be instantiated.
> `carrot.name` should return `carrot`.

```js
// Only change code below this line
// Only change code above this line
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  };
};
const carrot = new Vegetable('carrot');
console.log(carrot.name); // carrot
```

------



## 21. Use getters and setters to Control Access to an Object

[Learn ES6: Use getters and setters to Control Access to an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object)

You can obtain values from an object and set the value of a property within an object.
These are classically called *getters* and *setters*.
Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor
```

Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. **Note :** It is convention to precede the name of a private variable with an underscore (`_`). However, the practice itself does not make a variable private.

------

Use the `class` keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
Now create a `getter` and a `setter` in the class, to obtain the temperature in Celsius.
Remember that `C = 5/9 * (F - 32)` and `F = C * 9.0 / 5 + 32`, where `F` is the value of temperature in Fahrenheit, and `C` is the value of the same temperature in Celsius.
**Note :** When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
In other words, you are abstracting implementation details from the user.

> `Thermostat` should be a `class` with a defined `constructor` method.
> `class` keyword should be used.
> `Thermostat` should be able to be instantiated.
> A `getter` should be defined.
> A `setter` should  be defined.
> Calling the `setter` should set the temperature.

```js
// Only change code below this line
// Only change code above this line
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

```js
class Thermostat {
  constructor(Fahrenheit) {
    this._Fahrenheit = (Fahrenheit - 32) * 5/9;
  };
  get temperature() {
    return this._Fahrenheit;
  };
  set temperature(Celsius) {
    this._Fahrenheit = Celsius;
  };
};
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

-----



## 22. Create a Module Script

[Learn ES6: Create a Module Script | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-module-script)

JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of `module`. Here’s an example :

```html
<script type="module" src="filename.js"></script>
```

A script that uses this `module` type can now use the `import` and `export` features you will learn about in the upcoming challenges. 

------

Add a script to the HTML document of type `module` and give it the source file of `index.js`

> You should create a `script` tag.
> Your `script` tag should be of type `module`.
> Your `script` tag should have a `src` of `index.js`.

```html
<html>
  <body>
    <!-- Only change code below this line -->
    <!-- Only change code above this line -->
  </body>
</html>
```

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

------



## 23. Use export to Share a Code Block

[Learn ES6: Use export to Share a Code Block | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-export-to-share-a-code-block)

Imagine a file called `math_functions.js` that contains several functions related to mathematical operations. One of them is stored in a variable, `add`, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to `export` it.

```js
export const add = (x, y) => {
  return x + y;
}
```

The above is a common way to export a single function, but you can achieve the same thing like this :

```js
const add = (x, y) => {
  return x + y;
}
export { add };
```

When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this :

```js
export { add, subtract };
```

------

There are two string-related functions in the editor. Export both of them using the method of your choice.

> You should properly export `uppercaseString`.
> You should properly export `lowercaseString`.

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}
const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
};
const lowercaseString = (string) => {
  return string.toLowerCase()
};
export { lowercaseString };
```

-----



## 24. Reuse JavaScript Code Using import

[Learn ES6: Reuse JavaScript Code Using import | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/reuse-javascript-code-using-import)

`import` allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported `add` from the `math_functions.js` file. Here's how you can import it to use in another file :

```js
import { add } from './math_functions.js';
```

Here, `import` will find `add` in `math_functions.js`, import just that function for you to use, and ignore the rest. The `./` tells the import to look for the `math_functions.js` file in the same folder as the current file. The relative file path (`./`) and file extension (`.js`) are required when using import in this way.
You can import more than one item from the file by adding them in the `import` statement like this :

```js
import { add, subtract } from './math_functions.js';
```

------

Add the appropriate `import` statement that will allow the current file to use the `uppercaseString` and `lowercaseString` functions you exported in the previous lesson. These functions are in a file called `string_functions.js`, which is in the same directory as the current file.

> You should properly import `uppercaseString`.
> You should properly import `lowercaseString`.

```js
// Only change code above this line
uppercaseString("hello");
lowercaseString("WORLD!");
```

```js
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");
```

-----



## 25. Use * to Import Everything from a File

[Learn ES6: Use * to Import Everything from a File | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use--to-import-everything-from-a-file)

Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the `import * as` syntax. Here's an example where the contents of a file named `math_functions.js` are imported into a file in the same directory :

```js
import * as myMathModule from "./math_functions.js";
```

The above `import` statement will create an object called `myMathModule`. This is just a variable name, you can name it anything. The object will contain all of the exports from `math_functions.js` in it, so you can access the functions like you would any other object property. Here's how you can use the `add` and `subtract` functions that were imported :

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

------

The code in this file requires the contents of the file: `string_functions.js`, that is in the same directory as the current file. Use the `import * as` syntax to import everything from the file into an object called `stringFunctions`.

> Your code should properly use `import * as` syntax.

```js
// Only change code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

```js
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

-----



## 26. Create an Export Fallback with export default

[Learn ES6: Create an Export Fallback with export default | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-an-export-fallback-with-export-default)

In the `export` lesson, you learned about the syntax referred to as a *named export*. This allowed you to make multiple functions and variables available for use in other files.
There is another `export` syntax you need to know, known as *export default*. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
Below are examples using `export default` :

```js
// named function
export default function add(x, y) {
  return x + y;
}
// anonymous function
export default function(x, y) {
  return x + y;
}
```

Since `export default` is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use `export default` with `var`, `let`, or `const`

------

The following function should be the fallback value for the module. Please add the necessary code to do so.

> Your code should use `export` fallback.

```js
function subtract(x, y) {
  return x - y;
}
```

```js
export default function subtract(x, y) {
  return x - y;
}
```

-----



## 27. Import a Default Export

[Learn ES6: Import a Default Export | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/import-a-default-export)

In the last challenge, you learned about `export default` and its uses. To import a default export, you need to use a different `import` syntax. In the following example, `add` is the default export of the `math_functions.js` file. Here is how to import it :

```js
import add from "./math_functions.js";
```

The syntax differs in one key place. The imported value, `add`, is not surrounded by curly braces (`{}`). `add` here is simply a variable name for whatever the default export of the `math_functions.js` file is. You can use any name here when importing a default.

------

In the following code, import the default export from the `math_functions.js` file, found in the same directory as this file. Give the import the name `subtract`.

> You should properly import `subtract` from `math_functions.js`.

```js
// Only change code above this line
subtract(7,4);
```

```js
import subtract from "./math_functions.js";
subtract(7,4);
```

------



## 28. Create a JavaScript Promise

[Learn ES6: Create a JavaScript Promise | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-javascript-promise)

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. `Promise` is a constructor function, so you need to use the `new` keyword to create one. It takes a function, as its argument, with two parameters - `resolve` and `reject`. These are methods used to determine the outcome of the promise. The syntax looks like this :

```js
const myPromise = new Promise((resolve, reject) => {
    
});
```

------

Create a new promise called `makeServerRequest`. Pass in a function with `resolve` and `reject` parameters to the constructor.

> You should assign a promise to a declared variable named `makeServerRequest`.
> Your promise should receive a function with `resolve` and `reject` as parameters.

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```

-----



## 29. Complete a Promise with resolve and reject

[Learn ES6: Complete a Promise with resolve and reject | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/complete-a-promise-with-resolve-and-reject)

A promise has three states : `pending`, `fulfilled`, and `rejected`. The promise you created in the last challenge is forever stuck in the `pending` state because you did not add a way to complete the promise. The `resolve` and `reject` parameters given to the promise argument are used to do this. `resolve` is used when you want your promise to succeed, and `reject` is used when you want it to fail. These are methods that take an argument, as seen below.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

------

Make the promise handle success and failure.  If `responseFromServer` is `true`, call the `resolve` method to successfully complete the promise. Pass `resolve` a string with the value `We got the data`.  If `responseFromServer` is `false`, use the `reject` method instead and pass it the string: `Data not received`.

> `resolve` should be called with the expected string when the `if` condition is `true`.
> `reject` should be called with the expected string when the `if` condition is `false`.

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;    
  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
```

```js
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
   	reject("Data not received");
  };
});
```

-----



## 30. Handle a Fulfilled Promise with then

[Learn ES6: Handle a Fulfilled Promise with then | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-fulfilled-promise-with-then)

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the `then` method. The `then` method is executed immediately after your promise is fulfilled with `resolve`. Here’s an example :

```js
myPromise.then(result => {
  // do something with the result.
});
```

`result` comes from the argument given to the `resolve` method.

------

Add the `then` method to your promise. Use `result` as the parameter of its callback function and log `result` to the console.

> You should call the `then` method on the promise.
> Your `then` method should have a callback function with `result` as its parameter.
> You should log `result` to the console.

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```

```js
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});
```

-----



## 31. Handle a Rejected Promise with catch

[Learn ES6: Handle a Rejected Promise with catch | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-rejected-promise-with-catch)

`catch` is the method used when your promise has been rejected. It is executed immediately after a promise's `reject` method is called. Here’s the syntax :

```js
myPromise.catch(error => {
  // do something with the error.
});
```

`error` is the argument passed in to the `reject` method.
**Note :** the `then` and `catch` methods can be chained to the promise declaration if you choose.

------

Add the `catch` method to your promise. Use `error` as the parameter of its callback function and log `error` to the console.

> You should call the `catch` method on the promise.
> Your `catch` method should have a callback function with `error` as its parameter.
> You should log `error` to the console.

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});
```

```js
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});
```

