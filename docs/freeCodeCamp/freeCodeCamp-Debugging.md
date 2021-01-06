---
id: freeCodeCamp-Debugging
title: Debugging
---



## Introduction to the Debugging Challenges

[Debugging | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/)

Debugging is a valuable and (unfortunately) necessary tool for programmers. It follows the testing phase of checking if your code works as intended, and discovering it does not. Debugging is the process of finding exactly what isn't working and fixing it. After spending time creating a brilliant block of code, it is tough realizing it may have errors. These issues generally come in three forms: 

1. syntax errors that prevent a program from running
2. runtime errors when code fails to execute or has unexpected behavior
3. semantic (or logical) errors when code doesn't do what it's meant to.

Modern code editors (and experience) can help identify syntax errors. Semantic and runtime errors are harder to find. They may cause your program to crash, make it run forever, or give incorrect output. Think of debugging as trying to understand why your code is behaving the way it is. Example of a syntax error - often detected by the code editor:

```js
funtcion willNotWork( 
  console.log("Yuck");
}
// "function" keyword is misspelled and there's a missing parenthesis
```

Here's an example of a runtime error - often detected while the program executes:

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
// Calling loopy starts an infinite loop, which may crash your browser
```

Example of a semantic error - often detected after testing code output:

```js
function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Correct syntax and the program executes, but this gives the wrong answer
```

Debugging is frustrating, but it helps to develop (and follow) a step-by-step approach to review your code. This means checking the intermediate values and types of variables to see if they are what they should be. You can start with a simple process of elimination.

For example, if function A works and returns what it's supposed to, then function B may have the issue. Or start checking values in a block of code from the middle to try to cut the search space in half. A problem in one spot indicates a bug in the first half of the code. If not, it's likely in the second.

This section will cover a couple helpful tools to find bugs, and some of the common forms they take. Fortunately, debugging is a learnable skill that just requires a little patience and practice to master.

-----



## 1. Use the JavaScript Console to Check the Value of a Variable

[Learn Debugging: Use the JavaScript Console to Check the Value of a Variable | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-the-javascript-console-to-check-the-value-of-a-variable)

Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.
You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.
The `console.log()` method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.
Here's an example to print 'Hello world!' to the console:

```js
console.log('Hello world!');
```

------

Use the `console.log()` method to print the value of the variable `a` where noted in the code.

> Your code should use `console.log()` to check the value of the variable `a`.

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

------



## 2. Understanding the Differences between the freeCodeCamp and Browser Console

[Learn Debugging: Understanding the Differences between the freeCodeCamp and Browser Console | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/understanding-the-differences-between-the-freecodecamp-and-browser-console)

You may have noticed that some freeCodeCamp JavaScript challenges include their own console. This console behaves a little differently than the browser console you used in the last challenge.
The following challenge is meant to highlight the main difference between the freeCodeCamp console and your browser console.
When you run ordinary JavaScript, the browser's console will display your `console.log()` statements the exact number of times it is called.
The freeCodeCamp console will print your `console.log()` statements a short time after the editor detects a change in the script, as well as during testing.
The freeCodeCamp console is cleared before the tests are run and, to avoid spam, only prints the logs during the first test (see the note below for exceptions).
If you would like to see every log for every test, run the tests, and open the browser console. If you prefer to use the browser console, and want it to mimic the freeCodeCamp console, place `console.clear()` before any other `console` calls, to clear the browser console.
**Note:** `console.log`s inside functions are printed to the freeCodeCamp console whenever those functions are called, this can help debugging functions that are called during testing.

------

First, use `console.log` to log the `output` variable. Then, use `console.clear` to clear the browser console.

> You should use `console.clear()` to clear the browser console.
> You should use `console.log()` to print the `output` variable.

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
// Run the tests to see the difference between the two consoles.
// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```

```js
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
console.clear();
console.log(output); // Get this to log once in the freeCodeCamp console and twice in the browser console
```

-----



## 3. Use typeof to Check the Type of a Variable

[Learn Debugging: Use typeof to Check the Type of a Variable | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-typeof-to-check-the-type-of-a-variable)

You can use `typeof` to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.
Here are some examples using `typeof`:

```js
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
```

JavaScript recognizes six primitive (immutable) data types: `Boolean`, `Null`, `Undefined`, `Number`, `String`, and `Symbol` (new with ES6) and one type for mutable items: `Object`. Note that in JavaScript, arrays are technically a type of object.

------

Add two `console.log()` statements to check the `typeof` each of the two variables `seven` and `three` in the code.

> Your code should use `typeof` in two `console.log()` statements to check the type of the variables.
> Your code should use `typeof` to check the type of the variable `seven`.
> Your code should use `typeof` to check the type of the variable `three`.

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
```

```js
let seven = 7;
let three = "3";
console.log(seven + three); //73
console.log(typeof seven); //number
console.log(typeof three); // string
```

-----



## 4. Catch Misspelled Variable and Function Names

[Learn Debugging: Catch Misspelled Variable and Function Names | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-misspelled-variable-and-function-names)

The `console.log()` and `typeof` methods are the two primary ways to check intermediate values and types of program output. Now it's time to get into the common forms that bugs take. One syntax-level issue that fast typers can commiserate with is the humble spelling error.
Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.

------

Fix the two spelling errors in the code so the `netWorkingCapital` calculation works.

> Check the spelling of the two variables used in the netWorkingCapital calculation, the console output should show that "Net working capital is: 2".
> There should be no instances of mis-spelled variables in the code.
> The `receivables` variable should be declared and used properly in the code.
> There should be no instances of mis-spelled variables in the code.
> The `payables` variable should be declared and used properly in the code.

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



## 5. Catch Unclosed Parentheses, Brackets, Braces and Quotes

[Learn Debugging: Catch Unclosed Parentheses, Brackets, Braces and Quotes | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-unclosed-parentheses-brackets-braces-and-quotes)

Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.
One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them and continue coding. Fortunately, most modern code editors generate the second half of the pair automatically.

------

Fix the two pair errors in the code.

> Your code should fix the missing piece of the array.
> Your code should fix the missing piece of the `.reduce()` method. The console output should show that "Sum of array values is: 6".

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`); // SyntaxError: unknown: Unexpected token, expected "," (1:22)
```

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  (previous + current));
console.log(`Sum of array values is: ${arraySum}`); // Sum of array values is: 6
```

-----



## 6. Catch Mixed Usage of Single and Double Quotes

[Learn Debugging: Catch Mixed Usage of Single and Double Quotes | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-mixed-usage-of-single-and-double-quotes)

JavaScript allows the use of both single (`'`) and double (`"`) quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.
Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.
Here are some examples of mixing quotes:

```js
// These are correct:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// This is incorrect:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (`\`) escape character:

```js
// Correct use of same quotes:
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

------

Fix the string so it either uses different quotes for the `href` value, or escape the existing ones. Keep the double quote marks around the entire string.

> Your code should fix the quotes around the `href` value "#Home" by either changing or escaping them.
> Your code should keep the double quotes around the entire string.

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml); // SyntaxError: unknown: Unexpected token, expected ";" (1:43)
```

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml); // <p>Click here to <a href="#Home">return home</a></p>
// or
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml); // <p>Click here to <a href="#Home">return home</a></p>
```

----



## 7. Catch Use of Assignment Operator Instead of Equality Operator

[Learn Debugging: Catch Use of Assignment Operator Instead of Equality Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-use-of-assignment-operator-instead-of-equality-operator)

Branching programs, i.e. ones that do different things if certain conditions are met, rely on `if`, `else if`, and `else` statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.
This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the `=`, or assignment operator. This leads to unexpected control flow in your program.
As covered in previous challenges, the assignment operator (`=`) in JavaScript assigns a value to a variable name. And the `==` and `===` operators check for equality (the triple `===` tests for strict equality, meaning both value and type are the same).
The code below assigns `x` to be 2, which evaluates as `true`. Almost every value on its own in JavaScript evaluates to `true`, except what are known as the "falsy" values: `false`, `0`, `""` (an empty string), `NaN`, `undefined`, and `null`.

```js
let x = 1;
let y = 2;
if (x = y) {
  // this code block will run for any value of y (unless y were originally set as a falsy)
} else {
  // this code block is what should run (but won't) in this example
}
```

------

Fix the condition so the program runs the right branch, and the appropriate value is assigned to `result`.

> Your code should fix the condition so it checks for equality, instead of using assignment.
> The condition should use either `==` or `===` to test for equality.

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



## 8. Catch Missing Open and Closing Parenthesis After a Function Call

[Learn Debugging: Catch Missing Open and Closing Parenthesis After a Function Call | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-missing-open-and-closing-parenthesis-after-a-function-call)

When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.
The variables in the following example are different:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
```

------

Fix the code so the variable `result` is set to the value returned from calling the function `getNine`.

> Your code should fix the variable `result` so it is set to the number that the function `getNine` returns.
> Your code should call the `getNine` function.

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let result = getNine;
console.log(result);
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



## 9. Catch Arguments Passed in the Wrong Order When Calling a Function

[Learn Debugging: Catch Arguments Passed in the Wrong Order When Calling a Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-arguments-passed-in-the-wrong-order-when-calling-a-function)

Continuing the discussion on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.

------

The function `raiseToPower` raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of `power` is the expected 8.

> Your code should fix the variable `power` so it equals 2 raised to the 3rd power, not 3 raised to the 2nd power.
> Your code should use the correct order of the arguments for the `raiseToPower` function call.

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



## 10. Catch Off By One Errors When Using Indexing

[Learn Debugging: Catch Off By One Errors When Using Indexing | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-off-by-one-errors-when-using-indexing)

Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print `undefined`.
When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors:

```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  // loops one too many times at the end
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // loops one too few times and misses the first character at index 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // Goldilocks approves - this is just right
  console.log(alphabet[k]);
}
```

------

Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.

> Your code should set the initial condition of the loop so it starts at the first index.
> Your code should fix the initial condition of the loop so that the index starts at 0.
> Your code should set the terminal condition of the loop so it stops at the last index.
> Your code should fix the terminal condition of the loop so that it stops at 1 before the length.

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 1; i <= len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
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



## 11. Use Caution When Reinitializing Variables Inside a Loop

[Learn Debugging: Use Caution When Reinitializing Variables Inside a Loop | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-caution-when-reinitializing-variables-inside-a-loop)

Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.
Printing variable values with each cycle of your loop by using `console.log()` can uncover buggy behavior related to resetting, or failing to reset a variable.

------

The following function is supposed to create a two-dimensional array with `m` rows and `n` columns of zeroes. Unfortunately, it's not producing the expected output because the `row` variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like `[[0, 0], [0, 0], [0, 0]]`.

> Your code should set the `matrix` variable to an array holding 3 rows of 2 columns of zeroes each.
> The `matrix` variable should have 3 rows.
> The `matrix` variable should have 2 columns in each row.

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
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
    let row = []; // row has been declared inside the outer loop. Now a new row will be initialised during each iteration of the outer loop allowing for the desired matrix.
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



## 12. Prevent Infinite Loops with a Valid Terminal Condition

[Learn Debugging: Prevent Infinite Loops with a Valid Terminal Condition | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/prevent-infinite-loops-with-a-valid-terminal-condition)

The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.
There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the `while` loop inside `loopy()`. Do NOT call this function!

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.

------

The `myFunc()` function contains an infinite loop because the terminal condition `i != 4` will never evaluate to `false` (and break the looping) - `i` will increment by 2 each pass, and jump right over 4 since `i` is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for `i` less than or equal to 4.

> Your code should change the comparison operator in the terminal condition (the middle part) of the `for` loop.
> Your code should fix the comparison operator in the terminal condition of the loop.

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

