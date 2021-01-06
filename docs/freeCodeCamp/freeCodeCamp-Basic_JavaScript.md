---
id: freeCodeCamp-Basic_JavaScript
title: Basic JavaScript
---

## Introduction to JavaScript

[Basic JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)

JavaScript is a high-level programming language that all modern web browsers support. It is also one of the core technologies of the web, along with HTML and CSS that you may have learned previously. This section will cover basic JavaScript programming concepts, which range from variables and arithmetic to objects and loops.

------



## 1. Comment Your JavaScript Code

[Learn Basic JavaScript: Comment Your JavaScript Code | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code)

Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.
There are two ways to write comments in JavaScript :
Using `//` will tell JavaScript to ignore the remainder of the text on the current line:

```js
// This is an in-line comment.
```

You can make a multi-line comment beginning with `/*` and ending with `*/`:

```js
/* This is a
multi-line comment */
```

**Best Practice**
As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others *and* for your future self.

------

Try creating one of each type of comment.

> You should create a `//` style comment that contains at least five letters.
> You should create a `/* */` style comment that contains at least five letters.

```js
// This is an in-line comment.

/* This is a
multi-line comment */
```

------



## 2. Declare JavaScript Variables

[Learn Basic JavaScript: Declare JavaScript Variables | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables)

In computer science, data is anything that is meaningful to the computer. JavaScript provides seven different data types which are `undefined`, `null`, `boolean`, `string`, `symbol`, `number`, and `object`.

For example, computers distinguish between numbers, such as the number `12`, and `strings`, such as `"12"`, `"dog"`, or `"123 cats"`, which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the seven data types may be stored in a variable.

`Variables` are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer `variables` differ from mathematical variables in that they can store different values at different times.

We tell JavaScript to create or declare a variable by putting the keyword `var` in front of it, like so :

```js
var ourName;
```

creates a `variable` called `ourName`. In JavaScript we end statements with semicolons. `Variable` names can be made up of numbers, letters, and `$` or `_`, but may not contain spaces or start with a number.

------

Use the `var` keyword to create a variable called `myName`.

**Hint**
Look at the `ourName` example above if you get stuck.

> You should declare `myName` with the `var` keyword, ending with a semicolon.

```js
var myName;
```

------



## 3. Storing Values with the Assignment Operator

[Learn Basic JavaScript: Storing Values with the Assignment Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator)

In JavaScript, you can store a value in a variable with the assignment operator.

```js
myVariable = 5;
```

This assigns the `Number` value `5` to `myVariable`.
Assignment always goes from right to left. Everything to the right of the `=` operator is resolved before the value is assigned to the variable to the left of the operator.

```js
myVar = 5;
myNum = myVar;
```

This assigns `5` to `myVar` and then resolves `myVar` to `5`  again and assigns it to `myNum`.

------

Assign the value `7` to variable `a`.
Assign the contents of `a` to variable `b`.

> You should not change code above the specified comment.
> `a` should have a value of 7.
> `b` should have a value of 7.
> `a` should be assigned to `b` with `=`.

```js
// Setup
var a;
var b = 2;

// Only change code below this line
var a = 7;
var b = a;
```

------



## 4. Assigning the Value of One Variable to Another

[Learn Basic JavaScript: Assigning the Value of One Variable to Another | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assigning-the-value-of-one-variable-to-another)

After a value is assigned to a variable using the *assignment* operator, you can assign the value of that variable to another variable using the *assignment* operator.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

The above declares a `myVar` variable with no value, then assigns it the value `5`. Next, a variable named `myNum` is declared with no value. Then, the contents of `myVar` (which is `5`) is assigned to the variable `myNum`. Now, `myNum` also has the value of `5`.

------

Assign the contents of `a` to variable `b`.

> You should not change code above the specified comment.
> `b` should have a value of 7.
> `a` should be assigned to `b` with `=`.

```js
// Setup
var a;
a = 7;
var b;
// Only change code below this line
b = a;
console.log(b); // 7
```

-----



## 5. Initializing Variables with the Assignment Operator

[Learn Basic JavaScript: Initializing Variables with the Assignment Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/initializing-variables-with-the-assignment-operator)

It is common to initialize a variable to an initial value in the same line as it is declared.

```js
var myVar = 0;
```

Creates a new variable called `myVar` and assigns it an initial value of `0`.

------

Define a variable `a` with `var` and initialize it to a value of `9`.

> You should initialize `a` to a value of `9`.

```js
var a = 9;
```

------



## 5. Understanding Uninitialized Variables

[Learn Basic JavaScript: Understanding Uninitialized Variables | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables)

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means "Not a Number". If you concatenate a string with an `undefined` variable, you will get a literal string of `"undefined"`.

------

Initialize the three variables `a`, `b`, and `c` with `5`, `10`, and `"I am a"` respectively so that they will not be `undefined`.

> `a` should be defined and evaluated to have the value of `6`.
> `b` should be defined and evaluated to have the value of `15`.
> `c` should not contain `undefined` and should have a value of "I am a String!"
> You should not change code below the specified comment.

```js
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

------



## 6. Understanding Case Sensitivity in Variables

[Learn Basic JavaScript: Understanding Case Sensitivity in Variables | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-case-sensitivity-in-variables)

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
`MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you *do not* use this language feature.

**Best Practice**
Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

**Examples :**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

------

Modify the existing declarations and assignments so their names use camelCase.
Do not create any new variables.

> `studlyCapVar` should be defined and have a value of `10`.
> `properCamelCase` should be defined and have a value of `"A String"`.
> `titleCaseOver` should be defined and have a value of `9000`.
> `studlyCapVar` should use camelCase in both declaration and assignment sections.
> `properCamelCase` should use camelCase in both declaration and assignment sections.
> `titleCaseOver` should use camelCase in both declaration and assignment sections.

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

```js
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```

------



## 7. Add Two Numbers with JavaScript

[Learn Basic JavaScript: Add Two Numbers with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/add-two-numbers-with-javascript)

`Number` is a data type in JavaScript which represents numeric data.
Now let's try to add two numbers using JavaScript.
JavaScript uses the `+` symbol as an addition operator when placed between two numbers.

**Example :**

```js
myVar = 5 + 10; // assigned 15
```

------

Change the `0` so that sum will equal `20`.

> `sum` should equal `20`.
> You should use the `+` operator.

```js
var sum = 10 + 0;
```

```js
var sum = 10 + 10;
```

------



## 8. Subtract One Number from Another with JavaScript

[Learn Basic JavaScript: Subtract One Number from Another with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/subtract-one-number-from-another-with-javascript)

We can also subtract one number from another.
JavaScript uses the `-` symbol for subtraction.

**Example :**

```js
myVar = 12 - 6; // assigned 6
```

------

Change the `0` so the difference is `12`.

> The variable `difference` should be equal to 12.
> You should only subtract one number from 45.

```js
var difference = 45 - 0;
```

```js
var difference = 45 - 33;
```

------



## 9. Multiply Two Numbers with JavaScript

[Learn Basic JavaScript: Multiply Two Numbers with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-numbers-with-javascript)

We can also multiply one number by another.
JavaScript uses the `*` symbol for multiplication of two numbers.

**Example :**

```js
myVar = 13 * 13; // assigned 169
```

------

Change the `0` so that product will equal `80`.

> The variable `product` should be equal to 80.
> You should use the `*` operator.

```js
var product = 8 * 0;
```

```js
var product = 8 * 10;
```

------



## 10. Divide One Number by Another with JavaScript

[Learn Basic JavaScript: Divide One Number by Another with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/divide-one-number-by-another-with-javascript)

We can also divide one number by another.
JavaScript uses the `/` symbol for division.

**Example :**

```js
myVar = 16 / 2; // assigned 8
```

------

Change the `0` so that the `quotient` is equal to `2`.

> The variable `quotient` should be equal to 2.
> You should use the `/` operator.

```js
var quotient = 66 / 0;
```

```js
var quotient = 66 / 33;
```

------



## 11. Increment a Number with JavaScript

[Learn Basic JavaScript: Increment a Number with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/increment-a-number-with-javascript)

You can easily increment or add one to a variable with the `++` operator.

```js
i++;
```

is the equivalent of

```js
i = i + 1;
```

**Note**
The entire line becomes `i++;`, eliminating the need for the equal sign.

------

Change the code to use the `++` operator on `myVar`.

**Hint**
Learn more about [Arithmetic operators - Increment (++)](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()).

> `myVar` should equal `88`.
> You should not use the assignment operator.
> You should use the `++` operator.
> You should not change code above the specified comment.

```js
var myVar = 87;

// Only change code below this line
myVar = myVar + 1;
```

```js
var myVar = 87;

// Only change code below this line
myVar++;
```

------



## 12. Decrement a Number with JavaScript

[Learn Basic JavaScript: Decrement a Number with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/decrement-a-number-with-javascript)

You can easily decrement or decrease a variable by one with the `--` operator.

```js
i--;
```

is the equivalent of

```js
i = i - 1;
```

**Note**
The entire line becomes `i--;`, eliminating the need for the equal sign.

------

Change the code to use the `--` operator on `myVar`.

> `myVar` should equal `10`.
> `myVar = myVar - 1;` should be changed.
> You should use the `--` operator on `myVar`.
> You should not change code above the specified comment.

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

```js
var myVar = 11;

// Only change code below this line
myVar--;
```

------



## 13. Create Decimal Numbers with JavaScript

[Learn Basic JavaScript: Create Decimal Numbers with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/create-decimal-numbers-with-javascript)

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

**Note**
Not all real numbers can accurately be represented in floating point. This can lead to rounding errors. [Details Here](https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems).

------

Create a variable `myDecimal` and give it a decimal value with a fractional part (e.g. `5.7`).

> `myDecimal` should be a number.
> `myDecimal` should have a decimal point

```js
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 8.2;
```

------



## 14. Multiply Two Decimals with JavaScript

[Learn Basic JavaScript: Multiply Two Decimals with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-decimals-with-javascript)

In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.
Let's multiply two decimals together to get their product.

------

Change the `0.0` so that product will equal `5.0`.

> The variable `product` should equal `5.0`.
> You should use the `*` operator

```js
var product = 2.0 * 0.0;
```

```js
var product = 2.0 * 2.5;
```

------



## 15. Divide One Decimal by Another with JavaScript

[Learn Basic JavaScript: Divide One Decimal by Another with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/divide-one-decimal-by-another-with-javascript)

Now let's divide one decimal by another.

------

Change the `0.0` so that `quotient` will equal to `2.2`.

> The variable `quotient` should equal `2.2`
> You should use the `/` operator to divide 4.4 by 2
> The quotient variable should only be assigned once

```js
var quotient = 0.0 / 2.0; // Change this line
```

```js
var quotient = 4.4 / 2.0; // Change this line
```

------



## 16. Finding a Remainder in JavaScript

[Learn Basic JavaScript: Finding a Remainder in JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript)

The remainder operator `%` gives the remainder of the division of two numbers.

**Example :**

```js
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
```

**Usage**
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by `2`.

```js
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
```

**Note**
The remainder operator is sometimes incorrectly referred to as  the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.

------

Set `remainder` equal to the remainder of `11` divided by `3` using the remainder (`%`) operator.

> The variable `remainder` should be initialized
> The value of `remainder` should be `2`
> You should use the `%` operator

```js
// Only change code below this line
var remainder = 11%3;
```

------



## 17. Compound Assignment With Augmented Addition

[Learn Basic JavaScript: Compound Assignment With Augmented Addition | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-addition)

In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say :

```js
myVar = myVar + 5;
```

to add `5` to `myVar`. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.
One such operator is the `+=` operator.

```js
var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6
```

------

Convert the assignments for `a`, `b`, and `c` to use the `+=` operator.

> `a` should equal `15`.
> `b` should equal `26`.
> `c` should equal `19`.
> You should use the `+=` operator for each variable.
> You should not modify the code above the specified comment.

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
```

------



## 18. Compound Assignment With Augmented Subtraction

[Learn Basic JavaScript: Compound Assignment With Augmented Subtraction | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-subtraction)

Like the `+=` operator, `-=` subtracts a number from a variable.

```js
myVar = myVar - 5;
```

will subtract `5` from `myVar`. This can be rewritten as :

```js
myVar -= 5;
```

------

Convert the assignments for `a`, `b`, and `c` to use the `-=` operator.

> `a` should equal `5`.
> `b` should equal `-6`.
> `c` should equal `2`.
> You should use the `-=` operator for each variable.
> You should not modify the code above the specified comment.

```js
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

```js
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
```

------



## 19. Compound Assignment With Augmented Multiplication

[Learn Basic JavaScript: Compound Assignment With Augmented Multiplication | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)

The `*=` operator multiplies a variable by a number.

```js
myVar = myVar * 5;
```

will multiply `myVar` by `5`. This can be rewritten as :

```js
myVar *= 5;
```

------

Convert the assignments for `a`, `b`, and `c` to use the `*=` operator.

> `a` should equal `25`.
> `b` should equal `36`.
> `c` should equal `46`.
> You should use the `*=` operator for each variable.
> You should not modify the code above the specified comment.

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
```

------



## 20. Compound Assignment With Augmented Division

[Learn Basic JavaScript: Compound Assignment With Augmented Division | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-division)

The `/=` operator divides a variable by another number.

```js
myVar = myVar / 5;
```

Will divide `myVar` by `5`. This can be rewritten as :

```js
myVar /= 5;
```

------

Convert the assignments for `a`, `b`, and `c` to use the `/=` operator.

> `a` should equal `4`.
> `b` should equal `27`.
> `c` should equal `3`.
> You should use the `/=` operator for each variable.
> You should not modify the code above the specified comment.

```js
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
```

```js
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
```

------



## 21. Declare String Variables

[Learn Basic JavaScript: Declare String Variables | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-string-variables)

Previously we have used the code

```js
var myName = "your name";
```

`"your name"` is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

------

Create two new `string` variables: `myFirstName` and `myLastName` and assign them the values of your first and last name, respectively.

> `myFirstName` should be a string with at least one character in it.
> `myLastName` should be a string with at least one character in it.

```js
var myFirstName = "Bob";
var myLastName = "The Sponge";
```

------



## 22. Escaping Literal Quotes in Strings

[Learn Basic JavaScript: Escaping Literal Quotes in Strings | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/escaping-literal-quotes-in-strings)

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: `"` or `'` inside of your string ?
In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (`\`) in front of the quote.

```js
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

```js
Alan said, "Peter is learning JavaScript".
```

------

Use *backslashes* to assign a string to the `myStr` variable so that if you were to print it to the console, you would see:

```js
I am a "double quoted" string inside "double quotes".
```

> You should use two double quotes (`"`) and four escaped double quotes (`\"`).
> Variable myStr should contain the string : I am a "double quoted" string inside "double quotes".

```js
var myStr = ""; // Change this line
```

```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```

------



## 23. Quoting Strings with Single Quotes

[Learn Basic JavaScript: Quoting Strings with Single Quotes | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/quoting-strings-with-single-quotes)

String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

```js
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
```

The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an `<a>` tag with various attributes in quotes, all within a string.

```js
conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

```js
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"'; // Throws an error
```

In the goodStr above, you can use both quotes safely by using the backslash `\` as an escape character. **Note**
The backslash `\` should not be confused with the forward slash `/`. They do not do the same thing.

------

Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the `<a>` tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.

> You should remove all the `backslashes` (`\`).
> You should have two single quotes `'` and four double quotes `"`.

```js
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```

------



## 24. Escape Sequences in Strings

[Learn Basic JavaScript: Escape Sequences in Strings | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/escape-sequences-in-strings)

Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters :

1. To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
2. To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

We learned this in the previous challenge.

| Code | Output          |
| ---- | --------------- |
| `\'` | single quote    |
| `\"` | double quote    |
| `\\` | backslash       |
| `\n` | newline         |
| `\r` | carriage return |
| `\t` | tab             |
| `\b` | word boundary   |
| `\f` | form feed       |

*Note that the backslash itself must be escaped in order to display as a backslash.*

------

Assign the following three lines of text into the single variable `myStr` using escape sequences.

```js
FirstLine
  \SecondLine
ThirdLine
```

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.
Here is the text with the escape sequences written out.
"FirstLine`newline tab backslash` SecondLine`newline`ThirdLine

> `myStr` should not contain any spaces
> `myStr` should contain the strings `FirstLine`, `SecondLine` and `ThirdLine` (remember case sensitivity)
> FirstLine` should be followed by the newline character `\n
> `myStr` should contain a tab character `\t` which follows a newline character
> SecondLine` should be preceded by the backslash character `\
> There should be a newline character between `SecondLine` and `ThirdLine`
> myStr should only contain characters shown in the instructions

```js
var myStr; // Change this line
```

```js
const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';
```

------



## 25. Concatenating Strings with Plus Operator

[Learn Basic JavaScript: Concatenating Strings with Plus Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator)

In JavaScript, when the `+` operator is used with a `String` value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

**Example**

```js
'My name is Alan,' + ' I concatenate.'
```

**Note**
Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example :

```js
var ourStr = "I come first. " + "I come second.";
// ourStr is "I come first.  I come second."
```

------

Build `myStr` from the strings `"This is the start. "` and `"This is the end."` using the `+` operator.

> `myStr` should have a value of `This is the start. This is the end.`
> You should use the `+` operator to build `myStr`.
> `myStr` should be created using the `var` keyword.
> You should assign the result to the `myStr` variable.

```js
var myStr; // Only change this line
```

```js
var myStr = "This is the start. " + "This is the end.";
```

------



## 26. Concatenating Strings with the Plus Equals Operator

[Learn Basic JavaScript: Concatenating Strings with the Plus Equals Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)

We can also use the `+=` operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

**Note**
Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example :

```js
var ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."
```

------

Build `myStr` over several lines by concatenating these two strings : `"This is the first sentence. "` and `"This is the second sentence."` using the `+=` operator. Use the `+=` operator similar to how it is shown in the editor. Start by assigning the first string to `myStr`, then add on the second string.

> `myStr` should have a value of `This is the first sentence. This is the second sentence.`
> You should use the `+=` operator to build `myStr`.

```js
// Only change code below this line
var myStr;
```

```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

------



## 27. Constructing Strings with Variables

[Learn Basic JavaScript: Constructing Strings with Variables | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/constructing-strings-with-variables)

Sometimes you will need to build a string, [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) style. By using the concatenation operator (`+`), you can insert one or more variables into a string you're building.

Example :

```js
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr is now "Hello, our name is freeCodeCamp, how are you?"
```

------

Set `myName` to a string equal to your name and build `myStr` with `myName` between the strings `"My name is "` and `" and I am well!"`

> `myName` should be set to a string at least 3 characters long.
> You should use two `+` operators to build `myStr` with `myName` inside it.

```js
// Only change code below this line
var myName;
var myStr;
```

```js
var myName = "LaLoutre";
var myStr = "My name is " + myName + " and I am well!";
```

------



## 28. Appending Variables to Strings

[Learn Basic JavaScript: Appending Variables to Strings | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/appending-variables-to-strings)

Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (`+=`) operator.

Example :

```js
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr is now "freeCodeCamp is awesome!"
```

------

Set `someAdjective` and append it to `myStr` using the `+=` operator.

> `someAdjective` should be set to a string at least 3 characters long.
> You should append `someAdjective` to `myStr` using the `+=` operator.

```js
// Change code below this line
var someAdjective;
var myStr = "Learning to code is ";
```

```js
var someAdjective = "cool";
var myStr = "Learning to code is ";
myStr += someAdjective;
```

------



## 29. Find the Length of a String

[Learn Basic JavaScript: Find the Length of a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string)

You can find the length of a `String` value by writing `.length` after the string variable or string literal.

```js
"Alan Peter".length; // 10
```

For example, if we created a variable `var firstName = "Charles"`, we could find out how long the string `"Charles"` is by using the `firstName.length` property.

------

Use the `.length` property to count the number of characters in the `lastName` variable and assign it to `lastNameLength`.

You should not change the variable declarations in the `// Setup` section.

> `lastNameLength` should be equal to eight.
> You should be getting the length of `lastName` by using `.length` like this : `lastName.length`.

```js
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
```

```js
lastNameLength = lastName.length;
```

------



## 30. Use Bracket Notation to Find the First Character in a String

[Learn Basic JavaScript: Use Bracket Notation to Find the First Character in a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-first-character-in-a-string)

Bracket notation is a way to get a character at a specific `index` within a string.
Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.
For example, the character at index 0 in the word "Charles" is "C". So if `var firstName = "Charles"`, you can get the value of the first letter of the string by using `firstName[0]`.

Example :

```js
var firstName = "Charles";
var firstLetter = firstName[0]; // firstLetter is "C"
```

------

Use bracket notation to find the first character in the `lastName` variable and assign it to `firstLetterOfLastName`.

**Hint :**  Try looking at the example above if you get stuck.

> The `firstLetterOfLastName` variable should have the value of `L`.
> You should use bracket notation.

```js
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

```js
firstLetterOfLastName = lastName[0];
```

------



## 31. Understand String Immutability

[Learn Basic JavaScript: Understand String Immutability | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understand-string-immutability)

In JavaScript, `String` values are immutable, which means that they cannot be altered once created.

For example, the following code :

```js
var myStr = "Bob";
myStr[0] = "J";
```

cannot change the value of `myStr` to "Job", because the contents of `myStr` cannot be altered. Note that this does *not* mean that `myStr` cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change `myStr` would be to assign it with a new string, like this :

```js
var myStr = "Bob";
myStr = "Job";
```

------

Correct the assignment to `myStr` so it contains the string value of `Hello World` using the approach shown in the example above.

> `myStr` should have a value of `Hello World`.
> You should not change the code above the specified comment.

```js
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

```js
myStr = "Hello World";
```

------



## 32. Use Bracket Notation to Find the Nth Character in a String

[Learn Basic JavaScript: Use Bracket Notation to Find the Nth Character in a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-character-in-a-string)

You can also use bracket notation to get the character at other positions within a string.
Remember that computers start counting at `0`, so the first character is actually the zeroth character.

Example :

```js
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName is "d"
```

------

Let's try to set `thirdLetterOfLastName` to equal the third letter of the `lastName` variable using bracket notation.

**Hint :**  Try looking at the example above if you get stuck.

> The `thirdLetterOfLastName` variable should have the value of `v`.
> You should use bracket notation.

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName; // Change this line
```

```js
var thirdLetterOfLastName = lastName[2];
```

------



## 33. Use Bracket Notation to Find the Last Character in a String

[Learn Basic JavaScript: Use Bracket Notation to Find the Last Character in a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-last-character-in-a-string)

In order to get the last letter of a string, you can subtract one from the string's length.
For example, if `var firstName = "Charles"`, you can get the value of the last letter of the string by using `firstName[firstName.length - 1]`.

Example :

```js
var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"
```

------

Use bracket notation to find the last character in the `lastName` variable.

**Hint :**  Try looking at the example above if you get stuck.

> `lastLetterOfLastName` should be "e".
> You should use `.length` to get the last letter.

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName; // Change this line
```

```js
var lastLetterOfLastName = lastName[lastName.length - 1];
```

------



## 34. Use Bracket Notation to Find the Nth-to-Last Character in a String

[Learn Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.
For example, you can get the value of the third-to-last letter of the `var firstName = "Charles"` string by using `firstName[firstName.length - 3]`

Example :

```js
var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3]; // thirdToLastLetter is "l"
```

------

Use bracket notation to find the second-to-last character in the `lastName` string.

**Hint :**  Try looking at the example above if you get stuck.

> `secondToLastLetterOfLastName` should be "c".
> You should use `.length` to get the second last letter.

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName; // Change this line
```

```js
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```

------



## 35. Word Blanks

[Learn Basic JavaScript: Word Blanks | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/word-blanks)

We will now use our knowledge of strings to build a "[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.
In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.
Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows :

```js
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

------

In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
You will need to use the string concatenation operator `+` to build a new string, using the provided variables: `myNoun`, `myAdjective`, `myVerb`, and `myAdverb`. You will then assign the formed string to the `wordBlanks` variable.  You should not change the words assigned to the variables.
You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

> `wordBlanks` should be a string.
> You should not change the values assigned to `myNoun`, `myVerb`, `myAdjective` or `myAdverb`.
> You should not directly use the values "dog", "ran", "big", or "quickly" to create `wordBlanks`.
> `wordBlanks` should contain all of the words assigned to the variables `myNoun`, `myVerb`, `myAdjective` and `myAdverb` separated by non-word characters (and any additional words in your madlib).

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = ""; // Change this line
// Only change code above this line
```

```js
var wordBlanks = "My " + myNoun + " is not " + myAdjective + " and it " + myVerb + " more " + myAdverb + " than yours!";
```

------



## 36. Store Multiple Values in one Variable using JavaScript Arrays

[Learn Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays)

With JavaScript `array` variables, we can store several pieces of data in one place.
You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this :

`var sandwich = ["peanut butter", "jelly", "bread"]`.

------

Modify the new array `myArray` so that it contains both a `string` and a `number` (in that order).

**Hint**
Refer to the example code in the text editor if you get stuck.

> `myArray` should be an `array`.
> The first item in `myArray` should be a `string`.
> The second item in `myArray` should be a `number`.

```js
// Only change code below this line
var myArray = [];
```

```js
var myArray = ["banana", 7];
```

------



## 37. Nest one Array within Another Array

[Learn Basic JavaScript: Nest one Array within Another Array | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array)

You can also nest arrays within other arrays, like below:

```js
[["Bulls", 23], ["White Sox", 45]]
```

This is also called a multi-dimensional array.

------

Create a nested array called `myArray`.

> `myArray` should have at least one array nested within another array.

```js
// Only change code below this line
var myArray = [];
```

```js
var myArray = [["Bulls", 23], ["White Sox", 45]];
```

------



## 38. Access Array Data with Indexes

[Learn Basic JavaScript: Access Array Data with Indexes | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-array-data-with-indexes)

We can access the data inside arrays using *indexes*.
Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of `0`.

**Example**

```js
var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  // equals 60
```

**Note**
There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

------

Create a variable called `myData` and set it to equal the first value of `myArray` using bracket notation.

> The variable `myData` should equal the first value of `myArray`.
> The data in variable `myArray` should be accessed using bracket notation.

```js
// Setup
var myArray = [50,60,70];

// Only change code below this line
```

```js
var myData = myArray[0];
```

------



## 39. Modify Array Data With Indexes

[Learn Basic JavaScript: Modify Array Data With Indexes | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/modify-array-data-with-indexes)

Unlike strings, the entries of arrays are *mutable* and can be changed freely.

**Example**

```js
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
```

**Note**
There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

------

Modify the data stored at index `0` of `myArray` to a value of `45`.

> `myArray` should now be [45,64,99].
> You should be using correct index to modify the value in `myArray`.

```js
// Setup
var myArray = [18,64,99];

// Only change code below this line
```

```js
myArray[0] = 45;
```

------



## 40. Access Multi-Dimensional Arrays With Indexes

[Learn Basic JavaScript: Access Multi-Dimensional Arrays With Indexes | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-multi-dimensional-arrays-with-indexes)

One way to think of a *multi-dimensional* array, is as an *array of arrays*. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

**Example**

```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

**Note**
There shouldn't be any spaces between the array name and the square brackets, like `array [0][0]` and even this `array [0] [0]` is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

------

Using bracket notation select an element from `myArray` such that `myData` is equal to `8`.

> `myData` should be equal to `8`.
> You should be using bracket notation to read the correct value from `myArray`.

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[0][0];
```

```js
var myData = myArray[2][1];
```

-----



## 41. Manipulate Arrays With push()

[Learn Basic JavaScript: Manipulate Arrays With push() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push)

An easy way to append data to the end of an array is via the `push()` function.
`.push()` takes one or more parameters and "pushes" them onto the end of the array.

**Examples**

```js
var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
```

------

Push `["dog", 3]` onto the end of the `myArray` variable.

> `myArray` should now equal `[["John", 23], ["cat", 2], ["dog", 3]]`.

```js
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
```

-----



## 42. Manipulate Arrays With pop()

[Learn Basic JavaScript: Manipulate Arrays With pop() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop)

Another way to change the data in an array is with the `.pop()` function.
`.pop()` is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, `.pop()` removes the last element from an array and returns that element.
Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```

------

Use the `.pop()` function to remove the last item from `myArray`, assigning the "popped off" value to `removedFromMyArray`.

> `myArray` should only contain `[["John", 23]]`.
> You should use `pop()` on `myArray`.
> `removedFromMyArray` should only contain `["cat", 2]`.

```js
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray;
```

```js
var removedFromMyArray = myArray.pop();
```

-----



## 43. Manipulate Arrays With shift()

[Learn Basic JavaScript: Manipulate Arrays With shift() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift)

`pop()` always removes the last element of an array. What if you want to remove the first ?
That's where `.shift()` comes in. It works just like `.pop()`, except it removes the first element instead of the last.

Example :

```js
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
```

------

Use the `.shift()` function to remove the first item from `myArray`, assigning the "shifted off" value to `removedFromMyArray`.

> `myArray` should now equal `[["dog", 3]]`.
> `removedFromMyArray` should contain `["John", 23]`.

```js
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray;
```

```js
var removedFromMyArray = myArray.shift();
```

-----



## 44. Manipulate Arrays With unshift()

[Learn Basic JavaScript: Manipulate Arrays With unshift() | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift)

Not only can you `shift` elements off of the beginning of an array, you can also `unshift` elements to the beginning of an array i.e. add elements in front of the array.
`.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.

Example :

```js
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
```

------

Add `["Paul",35]` to the beginning of the `myArray` variable using `unshift()`.

> `myArray` should now have [["Paul", 35], ["dog", 3]].

```js
myArray.unshift(["Paul",35]);
```

-----



## 45. Shopping List

[Learn Basic JavaScript: Shopping List | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/shopping-list)

Create a shopping list in the variable `myList`. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

```js
["Chocolate Bar", 15]
```

> There should be at least 5 sub-arrays in the list.`myList` should be an array.
> The first elements in each of your sub-arrays should all be strings.
> The second elements in each of your sub-arrays should all be numbers.
> You should have at least 5 items in your list.

```js
var myList = [];
```

```js
var myList = [
  ["Chocolate Bar", 15],
  ["Coffee", 2],
  ["Bread", 1],
  ["butter", 2],
  ["Apple", 17]
];
```

-----



## 46. Write Reusable JavaScript with Functions

[Learn Basic JavaScript: Write Reusable JavaScript with Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)

In JavaScript, we can divide up our code into reusable parts called *functions*.
Here's an example of a function :

```js
function functionName() {
  console.log("Hello World");
}
```

You can call or *invoke* this function by using its name followed by parentheses, like this : `functionName();` Each time the function is called it will print out the message `"Hello World"` on the dev console. All of the code between the curly braces will be executed every time the function is called.

------

1. Create a function called `reusableFunction` which prints `"Hi World"` to the dev console.
2. Call the function.

> `reusableFunction` should be a function.
> `reusableFunction` should output "Hi World" to the dev console.
> You should call `reusableFunction` after you define it.

```js
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction()
```

-----



## 47. Passing Values to Functions with Arguments

[Learn Basic JavaScript: Passing Values to Functions with Arguments | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments)

*Parameters* are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "*passed*") into a function when it is called are known as *arguments*.
Here is a function with two parameters, `param1` and `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Then we can call `testFun`: `testFun("Hello", "World");` We have passed two arguments, `"Hello"` and `"World"`. Inside the function, `param1` will equal "Hello" and `param2` will equal "World". Note that you could call `testFun` again with different arguments and the parameters would take on the value of the new arguments.

------

1. Create a function called `functionWithArgs` that accepts two arguments and outputs their sum to the dev console.
2. Call the function with two numbers as arguments.

> `functionWithArgs` should be a function.
> `functionWithArgs(1,2)` should output `3`.
> `functionWithArgs(7,9)` should output `16`.
> You should call `functionWithArgs` with two numbers after you define it.

```js
function functionWithArgs(arg1,arg2) {
  console.log(arg1 + arg2);
};
functionWithArgs(1,2);
functionWithArgs(7,9);
```

-----



## 48. Global Scope and Functions

[Learn Basic JavaScript: Global Scope and Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)

In JavaScript, *scope* refers to the visibility of variables. Variables which are defined outside of a function block have *Global* scope. This means, they can be seen everywhere in your JavaScript code.
Variables which are used without the `var` keyword are automatically created in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `var`.

------

Using `var`, declare a global variable named `myGlobal` outside of any function. Initialize it with a value of `10`.
Inside function `fun1`, assign `5` to `oopsGlobal` **without** using the `var` keyword.

> `myGlobal` should be defined
> `myGlobal` should have a value of `10`
> `myGlobal` should be declared using the `var` keyword
> `oopsGlobal` should be a global variable and have a value of `5`

```js
// Declare the myGlobal variable below this line
function fun1() {
  // Assign 5 to oopsGlobal Here
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

```js
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5
}
```

-----



## 49. Local Scope and Functions

[Learn Basic JavaScript: Local Scope and Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)

Variables which are declared within a function, as well as the function parameters have *local* scope. That means, they are only visible within that function.
Here is a function `myTest` with a local variable called `loc`.

```js
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
```

`loc` is not defined outside of the function.

------

The editor has two `console.log`s to help you see what is happening. Check the console as you code to see how it changes.  Declare a local variable `myVar` inside `myLocalScope` and run the tests.

**Note :** The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.

> The code should not contain a global `myVar` variable.
> You should add a local `myVar` variable.

```js
function myLocalScope() {
  'use strict';

  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

```js
function myLocalScope() {
  'use strict';
  var myVar = "Toto";
  console.log('inside myLocalScope', myVar);
}
myLocalScope(); // inside myLocalScope Toto
console.log('outside myLocalScope', myVar); // ReferenceError: myVar is not defined
```

-----



## 50. Global vs. Local Scope in Functions

[Learn Basic JavaScript: Global vs. Local Scope in Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs.-local-scope-in-functions)

It is possible to have both *local* and *global* variables with the same name. When you do this, the `local` variable takes precedence over the `global` variable.
In this example :

```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

The function `myFun` will return `"Head"` because the `local` version of the variable is present.

------

Add a local variable to `myOutfit` function to override the value of `outerWear` with `"sweater"`.

> You should not change the value of the global `outerWear`.
> `myOutfit` should return `"sweater"`.
> You should not change the return statement.

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}
myOutfit();
```

```js
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();
```

-----



## 51. Return a Value from a Function with Return

[Learn Basic JavaScript: Return a Value from a Function with Return | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)

We can pass values into a function with *arguments*. You can use a `return` statement to send a value back out of a function.

**Example**

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```

`plusThree` takes an *argument* for `num` and returns a value equal to `num + 3`.

------

Create a function `timesFive` that accepts one argument, multiplies it by `5`, and returns the new value. See the last line in the editor for an example of how you can test your `timesFive` function.

> `timesFive` should be a function
> `timesFive(5)` should return `25`
> `timesFive(2)` should return `10`
> `timesFive(0)` should return `0`

```js
function timesFive(arg) {
  return arg * 5;
}
var answer1 = timesFive(5); // 25
var answer2 = timesFive(2); // 10
var answer3 = timesFive(0); // 0
```

-----



## 52. Understanding Undefined Value returned from a Function

[Learn Basic JavaScript: Understanding Undefined Value returned from a Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)

A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.

**Example**

```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
```

`addSum` is a function without a `return` statement. The function will change the global `sum` variable but the returned value of the function is `undefined`.

------

Create a function `addFive` without any arguments. This function adds 5 to the `sum` variable, but its returned value is `undefined`.

> `addFive` should be a function.
> Once both functions have ran, the `sum` should be equal to 8.
> Returned value from `addFive` should be `undefined`.
> Inside the `addFive` function, you should add `5` to the `sum` variable.

```js
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}
// Only change code below this line

// Only change code above this line
addThree();
addFive();
```

```js
var sum = 0;

function addThree() {
  sum = sum + 3;
};

function addFive() {
  sum = sum + 5;
};

addThree();
addFive();
```

-----



## 53. Assignment with a Returned Value

[Learn Basic JavaScript: Assignment with a Returned Value | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value)

If you'll recall from our discussion of [Storing Values with the Assignment Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator), everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.
Assume we have pre-defined a function `sum` which adds two numbers together, then :

```js
ourSum = sum(5, 12);
```

will call `sum` function, which returns a value of `17` and assigns it to `ourSum` variable.

------

Call the `processArg` function with an argument of `7` and assign its return value to the variable `processed`.

> `processed` should have a value of `2`
> You should assign `processArg` to `processed`

```js
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7); // 2
```

-----



## 54. Stand in Line

[Learn Basic JavaScript: Stand in Line | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)

In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function `nextInLine` which takes an array (`arr`) and a number (`item`) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The `nextInLine` function should then return the element that was removed.

> `nextInLine([], 5)` should return a number.
> `nextInLine([], 1)` should return `1``
> ``nextInLine([2], 1)` should return `2``
> ``nextInLine([5,6,7,8,9], 1)` should return `5`
> After `nextInLine(testArr, 10)`, `testArr[4]` should be `10`

```js
function nextInLine(arr, item) {
  // Only change code below this line  
  return item;
  // Only change code above this line
}
// Setup
var testArr = [1,2,3,4,5];
// Display code
console.log("Before: " + JSON.stringify(testArr)); // Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // 6
console.log("After: " + JSON.stringify(testArr)); // After: [1,2,3,4,5]
```

```js
function nextInLine(arr, item) {
  arr.push(item);
  var movedItem = arr[0];
  arr.shift();
  return movedItem;
}
```

-----



## 55. Understanding Boolean Values

[Learn Basic JavaScript: Understanding Boolean Values | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-boolean-values)

Another data type is the Boolean. `Booleans` may only be one of two values : `true` or `false`. They are basically little on-off switches, where `true` is "on" and `false` is "off."  These two states are mutually exclusive.

**Note**
`Boolean` values are never written with quotes. The `strings` `"true"` and `"false"` are not `Boolean` and have no special meaning in JavaScript.

------

Modify the `welcomeToBooleans` function so that it returns `true` instead of `false` when the run button is clicked.

> The `welcomeToBooleans()` function should return a boolean (true/false) value.
> `welcomeToBooleans()` should return true.

```js
function welcomeToBooleans() {
  // Only change code below this line
  return false; // Change this line
  // Only change code above this line
}
```

```js
function welcomeToBooleans() {
  return true; // true
}
```

-----



## 56. Use Conditional Logic with If Statements

[Learn Basic JavaScript: Use Conditional Logic with If Statements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements)

`If` statements are used to make decisions in code. The keyword `if` tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as `Boolean` conditions and they may only be `true` or `false`.

When the condition evaluates to `true`, the program executes the statement inside the curly braces. When the Boolean condition evaluates to `false`, the statement inside the curly braces will not execute.

**Pseudocode**

> if (*condition is true*) {
>  *statement is executed*
> }

**Example**

```js
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
```

When `test` is called with a value of `true`, the `if` statement evaluates `myCondition` to see if it is `true` or not. Since it is `true`, the function returns `"It was true"`. When we call `test` with a value of `false`, `myCondition` is *not* `true` and the statement in the curly braces is not executed and the function returns `"It was false"`.

------

Create an `if` statement inside the function to return `"Yes, that was true"` if the parameter `wasThatTrue` is `true` and return `"No, that was false"` otherwise.`trueOrFalse` should be a function

> `trueOrFalse(true)` should return a string
> `trueOrFalse(false)` should return a string
> `trueOrFalse(true)` should return "Yes, that was true"
> `trueOrFalse(false)` should return "No, that was false"

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
 if (wasThatTrue) {
   return "Yes, that was true";
 }
 return "No, that was false";
  // Only change code above this line
}
trueOrFalse(true);
trueOrFalse(false);
```

-----



## 57. Comparison with the Equality Operator

[Learn Basic JavaScript: Comparison with the Equality Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

There are many comparison operators in JavaScript. All of these operators return a boolean `true` or `false` value.

The most basic operator is the equality operator `==`. The equality operator compares two values and returns `true` if they're equivalent or `false` if they are not. Note that equality is different from assignment (`=`), which assigns the value on the right of the operator to a variable on the left.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
```

If `myVal` is equal to `10`, the equality operator returns `true`, so the code in the curly braces will execute, and the function will return `"Equal"`. Otherwise, the function will return `"Not Equal"`. In order for JavaScript to compare two different data types (for example, `numbers` and `strings`), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

```js
1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true
```

------

Add the equality operator to the indicated line so that the function will return "Equal" when `val` is equivalent to `12`.

> `testEqual(10)` should return "Not Equal"
> `testEqual(12)` should return "Equal"
> `testEqual("12")` should return "Equal"
> You should use the `==` operator

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

-----



## 58. Comparison with the Strict Equality Operator

[Learn Basic JavaScript: Comparison with the Strict Equality Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

Strict equality (`===`) is the counterpart to the equality operator (`==`). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

**Examples**

```js
3 ===  3   // true
3 === '3'  // false
```

In the second example, `3` is a `Number` type and `'3'` is a `String` type.

------

Use the strict equality operator in the `if` statement so the function will return "Equal" when `val` is strictly equal to `7`.

> `testStrict(10)` should return "Not Equal"
> `testStrict(7)` should return "Equal"
> `testStrict("7")` should return "Not Equal"
> You should use the `===` operator

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

-----



## 59. Practice comparing different values

[Learn Basic JavaScript: Practice comparing different values | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values)

In the last two challenges, we learned about the equality operator (`==`) and the strict equality operator (`===`). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

**Examples**

```js
3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
```

**Note**
In JavaScript, you can determine the type of a variable or a value with the `typeof` operator, as follows :

```js
typeof 3   // returns 'number'
typeof '3' // returns 'string'
```

------

The `compareEquality` function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.

> `compareEquality(10, "10")` should return "Not Equal"
> `compareEquality("20", 20)` should return "Not Equal"
> You should use the `===` operator

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

```js
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

-----



## 60. Comparison with the Inequality Operator

[Learn Basic JavaScript: Comparison with the Inequality Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator)

The inequality operator (`!=`) is the opposite of the equality operator. It means "Not Equal" and returns `false` where equality would return `true` and *vice versa*. Like the equality operator, the inequality operator will convert data types of values while comparing.

**Examples**

```js
1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
```

------

Add the inequality operator `!=` in the `if` statement so that the function will return "Not Equal" when `val` is not equivalent to `99`.

> `testNotEqual(99)` should return "Equal"
> `testNotEqual("99")` should return "Equal"
> `testNotEqual(12)` should return "Not Equal"
> `testNotEqual("12")` should return "Not Equal"
> `testNotEqual("bob")` should return "Not Equal"
> You should use the `!=` operator

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

-----



## 61. Comparison with the Strict Inequality Operator

[Learn Basic JavaScript: Comparison with the Strict Inequality Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator)

The strict inequality operator (`!==`) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns `false` where strict equality would return `true` and *vice versa*. Strict inequality will not convert data types.

**Examples**

```js
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true
```

------

Add the strict inequality operator to the `if` statement so the function will return "Not Equal" when `val` is not strictly equal to `17`.

> `testStrictNotEqual(17)` should return "Equal"
> `testStrictNotEqual("17")` should return "Not Equal"
> `testStrictNotEqual(12)` should return "Not Equal"
> `testStrictNotEqual("bob")` should return "Not Equal"
> You should use the `!==` operator

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

-----



## 62. Comparison with the Greater Than Operator

[Learn Basic JavaScript: Comparison with the Greater Than Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator)

The greater than operator (`>`) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, greater than operator will convert data types of values while comparing.

**Examples**

```js
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false
```

------

Add the greater than operator to the indicated lines so that the return statements make sense.

> `testGreaterThan(0)` should return "10 or Under"
> `testGreaterThan(10)` should return "10 or Under"
> `testGreaterThan(11)` should return "Over 10"
> `testGreaterThan(99)` should return "Over 10"
> `testGreaterThan(100)` should return "Over 10"
> `testGreaterThan(101)` should return "Over 100"
> `testGreaterThan(150)` should return "Over 100"
> You should use the `>` operator at least twice

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

```js
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

-----



## 63. Comparison with the Greater Than Or Equal To Operator

[Learn Basic JavaScript: Comparison with the Greater Than Or Equal To Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator)

The greater than or equal to operator (`>=`) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, `greater than or equal to` operator will convert data types while comparing.

**Examples**

```js
6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false
```

------

Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

> `testGreaterOrEqual(0)` should return "Less than 10"
> `testGreaterOrEqual(9)` should return "Less than 10"
> `testGreaterOrEqual(10)` should return "10 or Over"
> `testGreaterOrEqual(11)` should return "10 or Over"
> `testGreaterOrEqual(19)` should return "10 or Over"
> `testGreaterOrEqual(100)` should return "20 or Over"
> `testGreaterOrEqual(21)` should return "20 or Over"
> You should use the `>=` operator at least twice

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

-----



## 64. Comparison with the Less Than Operator

[Learn Basic JavaScript: Comparison with the Less Than Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator)

The less than operator (`<`) compares the values of two numbers. If the number to the left is less than the number to the right, it returns `true`. Otherwise, it returns `false`. Like the equality operator, less than operator converts data types while comparing.

**Examples**

```js
2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false
```

------

Add the less than operator to the indicated lines so that the return statements make sense.

> `testLessThan(0)` should return "Under 25"
> `testLessThan(24)` should return "Under 25"
> `testLessThan(25)` should return "Under 55"
> `testLessThan(54)` should return "Under 55"
> `testLessThan(55)` should return "55 or Over"
> `testLessThan(99)` should return "55 or Over"
> You should use the `<` operator at least twice

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

```js
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

-----



## 65. Comparison with the Less Than Or Equal To Operator

[Learn Basic JavaScript: Comparison with the Less Than Or Equal To Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-or-equal-to-operator)

The less than or equal to operator (`<=`) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns `true`. If the number on the left is greater than the number on the right, it returns `false`. Like the equality operator, `less than or equal to` converts data types.

**Examples**

```js
4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false
```

------

Add the less than or equal to operator to the indicated lines so that the return statements make sense.

> `testLessOrEqual(0)` should return "Smaller Than or Equal to 12"
> `testLessOrEqual(11)` should return "Smaller Than or Equal to 12"
> `testLessOrEqual(12)` should return "Smaller Than or Equal to 12"
> `testLessOrEqual(23)` should return "Smaller Than or Equal to 24"
> `testLessOrEqual(24)` should return "Smaller Than or Equal to 24"
> `testLessOrEqual(25)` should return "More Than 24"
> `testLessOrEqual(55)` should return "More Than 24"
> You should use the `<=` operator at least twice

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

```js
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

------



## 66. Comparisons with the Logical And Operator

[Learn Basic JavaScript: Comparisons with the Logical And Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator)

Sometimes you will need to test more than one thing at a time. The logical and operator (`&&`) returns `true` if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if :

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

will only return "Yes" if `num` is greater than `5` and less than `10`. The same logic can be written as :

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

------

Replace the two if statements with one statement, using the && operator, which will return `"Yes"` if `val` is less than or equal to `50` and greater than or equal to `25`. Otherwise, will return `"No"`.

> You should use the `&&` operator once
> You should only have one `if` statement
> `testLogicalAnd(0)` should return "No"
> `testLogicalAnd(24)` should return "No"
> `testLogicalAnd(25)` should return "Yes"
> `testLogicalAnd(30)` should return "Yes"
> `testLogicalAnd(50)` should return "Yes"
> `testLogicalAnd(51)` should return "No"
> `testLogicalAnd(75)` should return "No"
> `testLogicalAnd(80)` should return "No"

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

```js
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

testLogicalAnd(10);
```

-----



## 67. Comparisons with the Logical Or Operator

[Learn Basic JavaScript: Comparisons with the Logical Or Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator)

The logical or operator (`||`) returns `true` if either of the operands is `true`. Otherwise, it returns `false`.

The logical or operator is composed of two pipe symbols: (`||`). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints :

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

will return "Yes" only if `num` is between `5` and `10` (5 and 10 included). The same logic can be written as :

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

------

Combine the two `if` statements into one statement which returns `"Outside"` if `val` is not between `10` and `20`, inclusive. Otherwise, return `"Inside"`.

> You should use the `||` operator once
> You should only have one `if` statement
> `testLogicalOr(0)` should return "Outside"
> `testLogicalOr(9)` should return "Outside"
> `testLogicalOr(10)` should return "Inside"
> `testLogicalOr(15)` should return "Inside"
> `testLogicalOr(19)` should return "Inside"
> `testLogicalOr(20)` should return "Inside"
> `testLogicalOr(21)` should return "Outside"
> `testLogicalOr(25)` should return "Outside"

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);
```

-----



## 68. Introducing Else Statements

[Learn Basic JavaScript: Introducing Else Statements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-statements)

When a condition for an `if` statement is true, the block of code following it is executed. What about when that condition is false?  Normally nothing would happen. With an `else` statement, an alternate block of code can be executed.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

------

Combine the `if` statements into a single `if/else` statement.

> You should only have one `if` statement in the editor
> You should use an `else` statement
> `testElse(4)` should return "5 or Smaller"
> `testElse(5)` should return "5 or Smaller"
> `testElse(6)` should return "Bigger than 5"
> `testElse(10)` should return "Bigger than 5".
> You should not change the code above or below the specified comments.

```js
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
```

```js
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);
```

-----



## 69. Introducing Else If Statements

[Learn Basic JavaScript: Introducing Else If Statements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements)

If you have multiple conditions that need to be addressed, you can chain `if` statements together with `else if` statements.

```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

------

Convert the logic to use `else if` statements.

> You should have at least two `else` statements
> You should have at least two `if` statements
> You should have closing and opening curly braces for each `if else` code block.
> `testElseIf(0)` should return "Smaller than 5"
> `testElseIf(5)` should return "Between 5 and 10"
> `testElseIf(7)` should return "Between 5 and 10"
> `testElseIf(10)` should return "Between 5 and 10"
> `testElseIf(12)` should return "Greater than 10"

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
```

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}

testElseIf(7);
```

-----



## 70. Logical Order in If Else Statements

[Learn Basic JavaScript: Logical Order in If Else Statements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/logical-order-in-if-else-statements)

Order is important in `if`, `else if` statements.
The function is executed from top to bottom so you will want to be careful of what statement comes first.
Take these two functions as an example.
Here's the first :

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

And the second just switches the order of the statements :

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

While these two functions look nearly identical if we pass a number to both we get different outputs.

```js
foo(0) // "Less than one"
bar(0) // "Less than two"
```

------

Change the order of logic in the function so that it will return the correct statements in all cases.

> `orderMyLogic(4)` should return "Less than 5"
> `orderMyLogic(6)` should return "Less than 10"
> `orderMyLogic(11)` should return "Greater than or equal to 10"

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

```js
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

-----



## 71. Chaining If Else Statements

[Learn Basic JavaScript: Chaining If Else Statements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements)

`if/else` statements can be chained together for complex logic. Here is pseudocode of multiple chained `if` / `else if` statements :

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

------

Write chained `if`/`else if` statements to fulfill the following conditions :

`num < 5` - return "Tiny"
`num < 10` - return "Small"
`num < 15` - return "Medium"
`num < 20` - return "Large"
`num >= 20`  - return "Huge"

> You should have at least four `else` statements
> You should have at least four `if` statements
> You should have at least one `return` statement
> `testSize(0)` should return "Tiny"
> `testSize(4)` should return "Tiny"
> `testSize(5)` should return "Small"
> `testSize(8)` should return "Small"
> `testSize(10)` should return "Medium"
> `testSize(14)` should return "Medium"
> `testSize(15)` should return "Large"
> `testSize(17)` should return "Large"
> `testSize(20)` should return "Huge"
> `testSize(25)` should return "Huge"

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
```

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }
}

testSize(7);
```

-----



## 72. Golf Code

[Learn Basic JavaScript: Golf Code | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)

In the game of [golf](https://en.wikipedia.org/wiki/Golf) each hole has a `par` meaning the average number of `strokes` a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below `par` your `strokes` are, there is a different nickname.
Your function will be passed `par` and `strokes` arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest) :

| Strokes    | Return         |
| ---------- | -------------- |
| 1          | "Hole-in-one!" |
| <= par - 2 | "Eagle"        |
| par - 1    | "Birdie"       |
| par        | "Par"          |
| par + 1    | "Bogey"        |
| par + 2    | "Double Bogey" |
| >= par + 3 | "Go Home!"     |

`par` and `strokes` will always be numeric and positive. We have added an array of all the names for your convenience.

> `golfScore(4, 1)` should return "Hole-in-one!"
> `golfScore(4, 2)` should return "Eagle"
> `golfScore(5, 2)` should return "Eagle"
> `golfScore(4, 3)` should return "Birdie"
> `golfScore(4, 4)` should return "Par"
> `golfScore(1, 1)` should return "Hole-in-one!"
> `golfScore(5, 5)` should return "Par"
> `golfScore(4, 5)` should return "Bogey"
> `golfScore(4, 6)` should return "Double Bogey"
> `golfScore(4, 7)` should return "Go Home!"
> `golfScore(5, 9)` should return "Go Home!"

```js
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  return "Change Me";
  // Only change code above this line
}
golfScore(5, 4);
```

```js
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes - par <= -2) {
    return names[1];
  } else if (strokes - par === -1) {
    return names[2];
  } else if (strokes - par === 0) {
    return names[3];
  } else if (strokes - par === 1) {
    return names[4];
  } else if (strokes - par === 2) {
    return names[5];
  } else if (strokes - par >= 3) {
    return names[6];
  }
  return "Change Me";
}
golfScore(5, 4);
```

-----



## 73. Selecting from Many Options with Switch Statements

[Learn Basic JavaScript: Selecting from Many Options with Switch Statements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements)

If you have many options to choose from, use a switch statement. A `switch` statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.
Here is an example of a `switch` statement :

```js
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

`case` values are tested with strict equality (`===`). The `break` tells JavaScript to stop executing statements. If the `break` is omitted, the next statement will be executed.

------

Write a switch statement which tests `val` and sets `answer` for the following conditions :
`1` - "alpha"
`2` - "beta"
`3` - "gamma"
`4` - "delta"

> `caseInSwitch(1)` should have a value of "alpha"
> `caseInSwitch(2)` should have a value of "beta"
> `caseInSwitch(3)` should have a value of "gamma"
> `caseInSwitch(4)` should have a value of "delta"
> You should not use any `if` or `else` statements
> You should have at least 3 `break` statements

```js
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  // Only change code above this line
  return answer;
}
caseInSwitch(1);
```

```js
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  return answer;
}
caseInSwitch(1);
```

-----



## 74. Adding a Default Option in Switch Statements

[Learn Basic JavaScript: Adding a Default Option in Switch Statements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements)

In a `switch` statement you may not be able to specify all possible values as `case` statements. Instead, you can add the `default` statement which will be executed if no matching `case` statements are found. Think of it like the final `else` statement in an `if/else` chain.
A `default` statement should be the last case.

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

------

Write a switch statement to set `answer` for the following conditions :
`"a"` - "apple"
`"b"` - "bird"
`"c"` - "cat"
`default` - "stuff"

> `switchOfStuff("a")` should have a value of "apple"
> `switchOfStuff("b")` should have a value of "bird"
> `switchOfStuff("c")` should have a value of "cat"
> `switchOfStuff("d")` should have a value of "stuff"
> `switchOfStuff(4)` should have a value of "stuff"
> You should not use any `if` or `else` statements
> You should use a `default` statement
> You should have at least 3 `break` statements

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  // Only change code above this line
  return answer;
}
switchOfStuff(1);
```

```js
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
switchOfStuff(1);
```

-----



## 75. Multiple Identical Options in Switch Statements

[Learn Basic JavaScript: Multiple Identical Options in Switch Statements | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements)

If the `break` statement is omitted from a `switch` statement's `case`, the following `case` statement(s) are executed until a `break` is encountered. If you have multiple inputs with the same output, you can represent them in a `switch` statement like this :

```js
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

Cases for 1, 2, and 3 will all produce the same result.

------

Write a switch statement to set `answer` for the following ranges :
`1-3` - "Low"
`4-6` - "Mid"
`7-9` - "High"

**Note**
You will need to have a `case` statement for each number in the range.

> `sequentialSizes(1)` should return "Low"
> `sequentialSizes(2)` should return "Low"
> `sequentialSizes(3)` should return "Low"
> `sequentialSizes(4)` should return "Mid"
> `sequentialSizes(5)` should return "Mid"
> `sequentialSizes(6)` should return "Mid"
> `sequentialSizes(7)` should return "High"
> `sequentialSizes(8)` should return "High"
> `sequentialSizes(9)` should return "High"
> You should not use any `if` or `else` statements
> You should have nine `case` statements

```js
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  // Only change code above this line
  return answer;
}
sequentialSizes(1);
```

```js
function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
sequentialSizes(1);
```

-----



## 76. Replacing If Else Chains with Switch

[Learn Basic JavaScript: Replacing If Else Chains with Switch | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch)

If you have many options to choose from, a `switch` statement can be easier to write than many chained `if`/`else if` statements. The following:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

can be replaced with :

```js
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

------

Change the chained `if`/`else if` statements into a `switch` statement.

> You should not use any `else` statements anywhere in the editor
> You should not use any `if` statements anywhere in the editor
> You should have at least four `break` statements
> `chainToSwitch("bob")` should be "Marley"
> `chainToSwitch(42)` should be "The Answer"
> `chainToSwitch(1)` should be "There is no #1"
> `chainToSwitch(99)` should be "Missed me by this much!"
> `chainToSwitch(7)` should be "Ate Nine"
> `chainToSwitch("John")` should be "" (empty string)
> `chainToSwitch(156)` should be "" (empty string)

```js
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
```

```js
function chainToSwitch(val) {
  var answer = "";
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
  }
  return answer;
}

chainToSwitch(7);
```

-----



## 77. Returning Boolean Values from Functions

[Learn Basic JavaScript: Returning Boolean Values from Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/returning-boolean-values-from-functions)

You may recall from [Comparison with the Equality Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator) that all comparison operators return a boolean `true` or `false` value.
Sometimes people use an if/else statement to do a comparison, like this :

```js
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

But there's a better way to do this. Since `===` returns `true` or `false`, we can return the result of the comparison :

```js
function isEqual(a,b) {
  return a === b;
}
```

------

Fix the function `isLess` to remove the `if/else` statements.

> `isLess(10,15)` should return `true`
> `isLess(15,10)` should return `false`
> You should not use any `if` or `else` statements

```js
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
```

```js
function isLess(a, b) {
  return a < b;
}

isLess(10, 15);
```

-----



## 78. Return Early Pattern for Functions

[Learn Basic JavaScript: Return Early Pattern for Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions)

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

**Example**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

The above outputs "Hello" to the console, returns "World", but `"byebye"` is never output, because the function exits at the `return` statement.

------

Modify the function `abTest` so that if `a` or `b` are less than `0` the function will immediately exit with a value of `undefined`.

**Hint**
Remember that [`undefined` is a keyword](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables), not a string.

> `abTest(2,2)` should return a number
> `abTest(2,2)` should return `8`
> `abTest(-2,2)` should return `undefined`
> `abTest(2,-2)` should return `undefined`
> `abTest(2,8)` should return `18`
> `abTest(3,3)` should return `12`
> `abTest(0,0)` should return `0`

```js
// Setup
function abTest(a, b) {
  // Only change code below this line
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

```js
// Setup
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return abTest = undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

-----



## 79. Counting Cards

[Learn Basic JavaScript: Counting Cards | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards)

In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called [Card Counting](https://en.wikipedia.org/wiki/Card_counting).
Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

| Count Change | Cards                  |
| ------------ | ---------------------- |
| +1           | 2, 3, 4, 5, 6          |
| 0            | 7, 8, 9                |
| -1           | 10, 'J', 'Q', 'K', 'A' |

You will write a card counting function. It will receive a `card` parameter, which can be a number or a string, and increment or decrement the global `count` variable according to the card's value (see table). The function will then return a string with the current count and the string `Bet` if the count is positive, or `Hold` if the count is zero or negative. The current count and the player's decision (`Bet` or `Hold`) should be separated by a single space.

**Example Output**
`-3 Hold`
`5 Bet`

**Hint**
Do NOT reset `count` to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

> Cards Sequence 2, 3, 4, 5, 6 should return `5 Bet`
> Cards Sequence 7, 8, 9 should return `0 Hold`
> Cards Sequence 10, J, Q, K, A should return `-5 Hold`
> Cards Sequence 3, 7, Q, 8, A should return `-1 Hold`
> Cards Sequence 2, J, 9, 2, 7 should return `1 Bet`
> Cards Sequence 2, 2, 10 should return `1 Bet`
> Cards Sequence 3, 2, A, 10, K should return `-1 Hold`

```js
var count = 0;
function cc(card) {
  // Only change code below this line
  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```

```js
var count = 0;
function cc(card) {
  switch(card) {
    case 2: case 3: case 4: case 5: case 6:
      count += 1;
      break;
    case 7: case 8: case 9:
      count += 0;
      break;
    case 10: case 'J': case 'Q': case 'K': case 'A':
      count -= 1;
      break;
  }
  if (count <= 0) {
    return count + " Hold";
  } else if (count > 0) {
    return count + " Bet";
  }
  return "Change Me";
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
```

-----



## 80. Build JavaScript Objects

[Learn Basic JavaScript: Build JavaScript Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects)

You may have heard the term `object` before.
Objects are similar to `arrays`, except that instead of using indexes to access and modify their data, you access the data in objects through what are called `properties`.
Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
Here's a sample cat object :

```js
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

In this example, all the properties are stored as strings, such as - `"name"`, `"legs"`, and `"tails"`. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows :

```js
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

------

Make an object that represents a dog called `myDog` which contains the properties `"name"` (a string), `"legs"`, `"tails"` and `"friends"`.

You can set these object properties to whatever values you want, as long as `"name"` is a string, `"legs"` and `"tails"` are numbers, and `"friends"` is an array.

> `myDog` should contain the property `name` and it should be a `string`.
> `myDog` should contain the property `legs` and it should be a `number`.
> `myDog` should contain the property `tails` and it should be a `number`.
> `myDog` should contain the property `friends` and it should be an `array`.
> `myDog` should only contain all the given properties.

```js
var myDog = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "friends": ["Water", "Dogs"]
};
```

-----



## 81. Accessing Object Properties with Dot Notation

[Learn Basic JavaScript: Accessing Object Properties with Dot Notation | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-dot-notation)

There are two ways to access the properties of an object: dot notation (`.`) and bracket notation (`[]`), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
Here is a sample of using dot notation (`.`) to read an object's property :

```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```

------

Read in the property values of `testObj` using dot notation. Set the variable `hatValue` equal to the object's property `hat` and set the variable `shirtValue` equal to the object's property `shirt`.

> `hatValue` should be a string
> The value of `hatValue` should be `"ballcap"``
> ``shirtValue` should be a string
> The value of `shirtValue` should be `"jersey"`
> You should use dot notation twice

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
// Only change code below this line
var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line
```

```js
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```

-----



## 82. Accessing Object Properties with Bracket Notation

[Learn Basic JavaScript: Accessing Object Properties with Bracket Notation | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation)

The second way to access the properties of an object is bracket notation (`[]`). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
However, you can still use bracket notation on object properties without spaces.
Here is a sample of using bracket notation to read an object's property :

```js
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
```

Note that property names with spaces in them must be in quotes (single or double).

------

Read the values of the properties `"an entree"` and `"the drink"` of `testObj` using bracket notation and assign them to `entreeValue` and `drinkValue` respectively.

> `entreeValue` should be a string
> The value of `entreeValue` should be `"hamburger"``
> ``drinkValue` should be a string
> The value of `drinkValue` should be `"water"`
> You should use bracket notation twice

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
// Only change code below this line
var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line
```

```js
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
```

-----



## 83. Accessing Object Properties with Variables

[Learn Basic JavaScript: Accessing Object Properties with Variables | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables)

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
Here is an example of using a variable to access a property :

```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows :

```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
```

Note that we do *not* use quotes around the variable name when using it to access the property because we are using the *value* of the variable, not the *name*.

------

Use the `playerNumber` variable to look up player `16` in `testObj` using bracket notation. Then assign that name to the `player` variable.

> `playerNumber` should be a number
> The variable `player` should be a string
> The value of `player` should be "Montana"
> You should use bracket notation to access `testObj`
> You should not assign the value `Montana` to the variable `player` directly.
> You should be using the variable `playerNumber` in your bracket notation

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
// Only change code below this line
var playerNumber;       // Change this line
var player = testObj;   // Change this line
```

```js
var playerNumber = 16;
var player = testObj[playerNumber];
```

-----



## 84. Updating Object Properties

[Learn Basic JavaScript: Updating Object Properties | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/updating-object-properties)

After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
For example, let's look at `ourDog`:

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property: `ourDog.name = "Happy Camper";` or `ourDog["name"] = "Happy Camper";` Now when we evaluate `ourDog.name`, instead of getting "Camper", we'll get his new name, "Happy Camper".

------

Update the `myDog` object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.

> You should update `myDog`'s `"name"` property to equal "Happy Coder".
> You should not edit the `myDog` definition.

```js
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line
myDog.name = "Happy Coder";
```

-----



## 85. Add New Properties to a JavaScript Object

[Learn Basic JavaScript: Add New Properties to a JavaScript Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object)

You can add new properties to existing JavaScript objects the same way you would modify them.
Here's how we would add a `"bark"` property to `ourDog`:

```js
ourDog.bark = "bow-wow";
```

or

```js
ourDog["bark"] = "bow-wow";
```

Now when we evaluate `ourDog.bark`, we'll get his bark, "bow-wow".

Example :

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

------

Add a `"bark"` property to `myDog` and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

> You should add the property `"bark"` to `myDog`.
> You should not add `"bark"` to the setup section.

```js
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line
myDog.bark = "woof";
```

-----



## 86. Delete Properties from a JavaScript Object

[Learn Basic JavaScript: Delete Properties from a JavaScript Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object)

We can also delete properties from objects like this :

`delete ourDog.bark;`

Example :

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

After the last line shown above, `ourDog` looks like :

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

------

Delete the `"tails"` property from `myDog`. You may use either dot or bracket notation.

> You should delete the property `"tails"` from `myDog`.
> You should not modify the `myDog` setup.

```js
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;
```

-----



## 87. Using Objects for Lookups

[Learn Basic JavaScript: Using Objects for Lookups | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups)

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a `switch` statement or an `if/else` chain. This is most useful when you know that your input data is limited to a certain range.
Here is an example of a simple reverse alphabet lookup :

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
```

------

Convert the switch statement into an object called `lookup`. Use it to look up `val` and assign the associated string to the `result` variable.

> `phoneticLookup("alpha")` should equal `"Adams"`
> `phoneticLookup("bravo")` should equal `"Boston"`
> `phoneticLookup("charlie")` should equal `"Chicago"`
> `phoneticLookup("delta")` should equal `"Denver"`
> `phoneticLookup("echo")` should equal `"Easy"`
> `phoneticLookup("foxtrot")` should equal `"Frank"`
> `phoneticLookup("")` should equal `undefined
> You should not modify the `return` statement
> You should not use `case`, `switch`, or `if` statements

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

```js
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  };
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");
```

-----



## 88. Testing Objects for Properties

[Learn Basic JavaScript: Testing Objects for Properties | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/testing-objects-for-properties)

Sometimes it is useful to check if the property of a given object exists or not. We can use the `.hasOwnProperty(propname)` method of objects to determine if that object has the given property name. `.hasOwnProperty()` returns `true` or `false` if the property is found or not.

**Example**

```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
```

------

Modify the function `checkObj` to test if an object passed to the function (`obj`) contains a specific property (`checkProp`). If the property is found, return that property's value. If not, return `"Not Found"`.

> `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` should return `"pony"`.
> `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` should return `"kitten"`.
> `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` should return `"Not Found"`.
> `checkObj({city: "Seattle"}, "city")` should return `"Seattle"`.
> `checkObj({city: "Seattle"}, "district")` should return `"Not Found"`.

```js
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}
```

```js
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } else {
    return "Not Found";
  };
}
```

-----



## 89. Manipulating Complex Objects

[Learn Basic JavaScript: Manipulating Complex Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects)

Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
Here's an example of a complex data structure :

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested `"formats"` array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, `"artist": "Daft Punk"` is a property that has a key of `"artist"` and a value of `"Daft Punk"`. [JavaScript Object Notation](http://www.json.org/) or `JSON` is a related data interchange format used to store data.

```json
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

**Note**
You will need to place a comma after every object in the array, unless it is the last object in the array.

------

Add a new album to the `myMusic` array. Add `artist` and `title` strings, `release_year` number, and a `formats` array of strings.

> `myMusic` should be an array
> `myMusic` should have at least two elements
> `myMusic[1]` should be an object
> `myMusic[1]` should have at least 4 properties
> `myMusic[1]` should contain an `artist` property which is a string
> `myMusic[1]` should  contain a `title` property which is a string
> `myMusic[1]` should contain a `release_year` property which is a number
> `myMusic[1]` should contain a `formats` property which is an array
> `formats` should be an array of strings with at least two elements

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add a record here
  {
    "artist": "David Bowie",
    "title": "Aladdin Sane",
    "release_year": 1973,
    "formats": [
      "CD",
      "LP"
    ],
    "gold": true
  }
];
```

-----

## [...]

-----



## 93. Iterate with JavaScript While Loops

[Learn Basic JavaScript: Iterate with JavaScript While Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops)

You can run the same code multiple times by using a loop.
The first type of loop we will learn is called a `while` loop because it runs "while" a specified condition is true and stops once that condition is no longer true.

```js
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```

In the code example above, the `while` loop will execute 5 times and append the numbers 0 through 4 to `ourArray`.
Let's try getting a while loop to work by pushing values to an array.

------

Add the numbers 5 through 0 (inclusive) in descending order to `myArray` using a `while` loop.

> You should be using a `while` loop for this.
> `myArray` should equal `[5,4,3,2,1,0]`.

```js
// Setup
var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
};
// Only change code below this line
```

-----



## 94. Iterate with JavaScript For Loops

[Learn Basic JavaScript: Iterate with JavaScript For Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)

You can run the same code multiple times by using a loop.
The most common type of JavaScript loop is called a `for` loop because it runs "for" a specific number of times.
For loops are declared with three optional expressions separated by semicolons :

`for ([initialization]; [condition]; [final-expression])`

The `initialization` statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The `condition` statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to `true`. When `condition` is `false` at the start of the iteration, the loop will stop executing. This means if `condition` starts as `false`, your loop will never execute.

The `final-expression` is executed at the end of each loop iteration, prior to the next `condition` check and is usually used to increment or decrement your loop counter.

In the following example we initialize with `i = 0` and iterate while our condition `i < 5` is true. We'll increment `i` by `1` in each loop iteration with `i++` as our `final-expression`.

```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` will now contain `[0,1,2,3,4]`.

------

Use a `for` loop to work to push the values 1 through 5 onto `myArray`.

> You should be using a `for` loop for this.
> `myArray` should equal `[1,2,3,4,5]`.

```js
// Setup
var myArray = [];
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
```

-----



## 95. Iterate Odd Numbers With a For Loop

[Learn Basic JavaScript: Iterate Odd Numbers With a For Loop | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop)

For loops don't have to iterate one at a time. By changing our `final-expression`, we can count by even numbers.
We'll start at `i = 0` and loop while `i < 10`. We'll increment `i` by 2 each loop with `i += 2`.

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` will now contain `[0,2,4,6,8]`. Let's change our `initialization` so we can count by odd numbers.

------

Push the odd numbers from 1 through 9 to `myArray` using a `for` loop.

> You should be using a `for` loop for this.
> `myArray` should equal `[1,3,5,7,9]`.

```js
// Setup
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```

-----



## 96. Count Backwards With a For Loop

[Learn Basic JavaScript: Count Backwards With a For Loop | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/count-backwards-with-a-for-loop)

A for loop can also count backwards, so long as we can define the right conditions.
In order to count backwards by twos, we'll need to change our `initialization`, `condition`, and `final-expression`.
We'll start at `i = 10` and loop while `i > 0`. We'll decrement `i` by 2 each loop with `i -= 2`.

```js
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` will now contain `[10,8,6,4,2]`. Let's change our `initialization` and `final-expression` so we can count backward by twos by odd numbers.

------

Push the odd numbers from 9 through 1 to `myArray` using a `for` loop.

> You should be using a `for` loop for this.
> You should be using the array method `push`.
> `myArray` should equal `[9,7,5,3,1]`.

```js
// Setup
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```

-----



## 97. Iterate Through an Array with a For Loop

[Learn Basic JavaScript: Iterate Through an Array with a For Loop | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)

A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a `for` loop. This code will output each element of the array `arr` to the console :

```js
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Remember that arrays have zero-based indexing, which means the last index of the array is `length - 1`. Our condition for this loop is `i < arr.length`, which stops the loop when `i` is equal to `length`. In this case the last iteration is `i === 4` i.e. when `i` becomes equal to `arr.length` and outputs `6` to the console.

------

Declare and initialize a variable `total` to `0`. Use a `for` loop to add the value of each element of the `myArr` array to `total`.

> `total` should be declared and initialized to 0.
> `total` should equal 20.
> You should use a `for` loop to iterate through `myArr`.
> You should not attempt to directly assign the value 20 to `total`.

```js
// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
   total = total + myArr[i]
}
```

-----



## 98. Nesting For Loops

[Learn Basic JavaScript: Nesting For Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops)

If you have a multi-dimensional array, you can use the same logic as the prior way point to loop through both the array and any sub-arrays. Here is an example :

```js
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

This outputs each sub-element in `arr` one at a time. Note that for the inner loop, we are checking the `.length` of `arr[i]`, since `arr[i]` is itself an array.

------

Modify function `multiplyAll` so that it returns the product of all the numbers in the sub-arrays of `arr`.

> `multiplyAll([[1],[2],[3]])` should return `6`
> `multiplyAll([[1,2],[3,4],[5,6,7]])` should return `5040`
> `multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])` should return `54`

```js
function multiplyAll(arr) {
  var product = 1;
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
```

-----



## 99. Iterate with JavaScript Do...While Loops

[Learn Basic JavaScript: Iterate with JavaScript Do...While Loops | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-do---while-loops)

The next type of loop you will learn is called a `do...while` loop.  It is called a `do...while` loop because it will first `do` one pass of the code inside the loop no matter what, and then continue to run the loop `while` the specified condition evaluates to `true`.

```js
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

The example above behaves similar to other types of loops, and the resulting array will look like `[0, 1, 2, 3, 4]`. However, what makes the `do...while` different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular `while` loop that will run the code in the loop as long as `i < 5` :

```js
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
```

In this example, we initialize the value of `ourArray` to an empty array and the value of `i` to 5. When we execute the `while` loop, the condition evaluates to `false` because `i` is not less than 5, so we do not execute the code inside the loop. The result is that `ourArray` will end up with no values added to it, and it will still look like `[]` when all of the code in the example above has completed running. Now, take a look at a `do...while` loop :

```js
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

In this case, we initialize the value of `i` to 5, just like we did with the `while` loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it.  We will add a single element to the array and then increment `i` before we get to the condition check. When we finally evaluate the condition `i < 5` on the last line, we see that `i` is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of `ourArray` is `[5]`. Essentially, a `do...while` loop ensures that the code inside the loop will run at least once. Let's try getting a `do...while` loop to work by pushing values to an array.

------

Change the `while` loop in the code to a `do...while` loop so the loop will push only the number `10` to `myArray`, and `i` will be equal to `11` when your code has finished running.

> You should be using a `do...while` loop for this exercise.
> `myArray` should equal `[10]`.
> `i` should equal `11`

```js
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
```

```js
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);
```

-----



## 100. Replace Loops using Recursion

[Learn Basic JavaScript: Replace Loops using Recursion | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion)

Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task : multiply the first `n` elements of an array to create the product of those elements. Using a `for` loop, you could do this :

```js
  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
```

However, notice that `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. That means you can rewrite `multiply` in terms of itself and never need to use a loop.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

The recursive version of `multiply` breaks down like this. In the base case, where `n <= 0`, it returns 1. For larger values of `n`, it calls itself, but with `n - 1`. That function call is evaluated in the same way, calling `multiply` again until `n <= 0`.  At this point, all the functions can return and the original `multiply` returns the answer.

**Note :** Recursive functions must have a base case when they return without calling the function again (in this example, when `n <= 0`), otherwise they can never finish executing.

------

Write a recursive function, `sum(arr, n)`, that returns the sum of the first `n` elements of an array `arr`.

> `sum([1], 0)` should equal 0.
> `sum([2, 3, 4], 1)` should equal 2.
> `sum([2, 3, 4, 5], 3)` should equal 9.
> Your code should not rely on any kind of loops (`for` or `while` or higher order functions such as `forEach`, `map`, `filter`, or `reduce`.).
> You should use recursion to solve this problem.

```js
function sum(arr, n) {
  // Only change code below this line
	if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}
```

-----



## 101. Profile Lookup

[Learn Basic JavaScript: Profile Lookup | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)

We have an array of objects representing different people in our contacts lists.
A `lookUpProfile` function that takes `name` and a property (`prop`) as arguments has been pre-written for you.
The function should check if `name` is an actual contact's `firstName` and the given property (`prop`) is a property of that contact.
If both are true, then return the "value" of that property.
If `name` does not correspond to any contacts then return `"No such contact"`.
If `prop` does not correspond to any valid properties of a contact found to match `name` then return `"No such property"`.

> `"Kristian", "lastName"` should return `"Vos"`
> `"Sherlock", "likes"` should return `["Intriguing Cases", "Violin"]`
> `"Harry","likes"` should return an array
> `"Bob", "number"` should return "No such contact"
> `"Bob", "potato"` should return "No such contact"
> `"Akira", "address"` should return "No such property"

```js
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
for (var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
}

lookUpProfile("Akira", "likes");
```

-----



## 102. Generate Random Fractions with JavaScript

[Learn Basic JavaScript: Generate Random Fractions with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-fractions-with-javascript)

Random numbers are useful for creating random behavior.
JavaScript has a `Math.random()` function that generates a random decimal number between `0` (inclusive) and not quite up to `1` (exclusive). Thus `Math.random()` can return a `0` but never quite return a `1`

**Note**
Like [3. Storing Values with the Equal Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator), all function calls will be resolved before the `return` executes, so we can `return` the value of the `Math.random()` function.

------

Change `randomFraction` to return a random number instead of returning `0`.

> `randomFraction` should return a random number.
> The number returned by `randomFraction` should be a decimal.
> You should be using `Math.random` to generate the random decimal number.

```js
function randomFraction() {
  return Math.random();
}
console.log(randomFraction())
```

-----



## 103. Generate Random Whole Numbers with JavaScript

[Learn Basic JavaScript: Generate Random Whole Numbers with JavaScript | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-with-javascript)

It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

1. Use `Math.random()` to generate a random decimal.
2. Multiply that random decimal by `20`.
3. Use another function, `Math.floor()` to round the number down to its nearest whole number.

Remember that `Math.random()` can never quite return a `1` and, because we're rounding down, it's impossible to actually get `20`. This technique will give us a whole number between `0` and `19`.
Putting everything together, this is what our code looks like :

`Math.floor(Math.random() * 20);`

We are calling `Math.random()`, multiplying the result by 20, then passing the value to `Math.floor()` function to round the value down to the nearest whole number.

------

Use this technique to generate and return a random whole number between `0` and `9`.

> The result of `randomWholeNum` should be a whole number.
> You should use `Math.random` to generate a random number.
> You should have multiplied the result of `Math.random` by 10 to make it a number that is between zero and nine.
> You should use `Math.floor` to remove the decimal part of the number.

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
```

-----



## 104. Generate Random Whole Numbers within a Range

[Learn Basic JavaScript: Generate Random Whole Numbers within a Range | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range)

Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.
To do this, we'll define a minimum number `min` and a maximum number `max`.
Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing :

`Math.floor(Math.random() * (max - min + 1)) + min`

------

Create a function called `randomRange` that takes a range `myMin` and `myMax` and returns a random whole number that's greater than or equal to `myMin`, and is less than or equal to `myMax`, inclusive.

> The lowest random number that can be generated by `randomRange` should be equal to your minimum number, `myMin`.
> The highest random number that can be generated by `randomRange` should be equal to your maximum number, `myMax`.
> The random number generated by `randomRange` should be an integer, not a decimal.
> `randomRange` should use both `myMax` and `myMin`, and return a random number in your range.

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(2, 856));
```

-----



## 105. Use the parseInt Function

[Learn Basic JavaScript: Use the parseInt Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function)

The `parseInt()` function parses a string and returns an integer. Here's an example :

```
var a = parseInt("007");
```

The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns `NaN`.

------

Use `parseInt()` in the `convertToInteger` function so it converts the input string `str` into an integer, and returns it.

> `convertToInteger` should use the `parseInt()` function
> `convertToInteger("56")` should return a number
> `convertToInteger("56")` should return 56
> `convertToInteger("77")` should return 77
> `convertToInteger("JamesBond")` should return NaN

```js
function convertToInteger(str) {
	return parseInt(str);
}
convertToInteger("56");
/////
console.log(convertToInteger("56")); // 56
console.log(convertToInteger("77")); // 77
console.log(convertToInteger("JamesBond")); // Nan
```

------



## 106. Use the parseInt Function with a Radix

[Learn Basic JavaScript: Use the parseInt Function with a Radix | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function-with-a-radix)

The `parseInt()` function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
The function call looks like :

`parseInt(string, radix);`

And here's an example :

`var a = parseInt("11", 2);`

The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.

------

Use `parseInt()` in the `convertToInteger` function so it converts a binary number to an integer and returns it.

> `convertToInteger` should use the `parseInt()` function
> `convertToInteger("10011")` should return a number
> `convertToInteger("10011")` should return 19
> `convertToInteger("111001")` should return 57
> `convertToInteger("JamesBond")` should return NaN

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");
/////
console.log(convertToInteger("10011")); // 19
console.log(convertToInteger("111001")); // 57
console.log(convertToInteger("JamesBond")); // NaN
```

-----



## 107. Use the Conditional (Ternary) Operator

[Learn Basic JavaScript: Use the Conditional (Ternary) Operator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-conditional-ternary-operator)

The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
The syntax is :

`condition ? statement-if-true : statement-if-false;`

The following function uses an if-else statement to check a condition :

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

This can be re-written using the `conditional operator`:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

------

Use the `conditional operator` in the `checkEqual` function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".

> `checkEqual` should use the `conditional operator`
> `checkEqual(1, 2)` should return "Not Equal"
> `checkEqual(1, 1)` should return "Equal"
> `checkEqual(1, -1)` should return "Not Equal"

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);
/////
console.log(checkEqual(1, 2)); // Not Equal
console.log(checkEqual(1, 1)); // Equal
console.log(checkEqual(1, -1)); // Not Equal
```

-----



## 108. Use Multiple Conditional (Ternary) Operators

[Learn Basic JavaScript: Use Multiple Conditional (Ternary) Operators | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)

In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.
The following function uses if, else if, and else statements to check multiple conditions :

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

The above function can be re-written using multiple conditional operators :

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example :

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

------

In the `checkSign` function, use multiple conditional operators - following the recommended format used in `findGreaterOrEqual` - to check if a number is positive, negative or zero. The function should return `"positive"`, `"negative"` or `"zero"`.

> `checkSign` should use multiple conditional operators
> `checkSign(10)` should return "positive". Note that capitalization matters
> `checkSign(-12)` should return "negative". Note that capitalization matters
> `checkSign(0)`  should return "zero". Note that capitalization matters

```js
function checkSign(num) {
  return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}
checkSign(10);
/////
console.log(checkSign(10)); // positive
console.log(checkSign(-12)); // negative
console.log(checkSign(0)); // zero
```

-----



## 109. Use Recursion to Create a Countdown

[Learn Basic JavaScript: Use Recursion to Create a Countdown | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown)

In a [previous challenge (100)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion), you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with `1` through the number passed to the function.

As mentioned in the previous challenge, there will be a base case.  The base case tells the recursive function when it no longer needs to call itself.  It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers `1` through `n`.  This function will need to accept an argument, `n`, representing the final number. Then it will need to call itself with progressively smaller values of `n` until it reaches `1`. You could write the function as follows :

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
```

At first, this seems counterintuitive since the value of `n` *decreases*, but the values in the final array are *increasing*.  This happens because the push happens last, after the recursive call has returned.  At the point where `n` is pushed into the array, `countup(n - 1)` has already been evaluated and returned `[1, 2, ..., n - 1]`.

------

We have defined a function called `countdown` with one parameter (`n`).  The function should use recursion to return an array containing the integers `n` through `1` based on the `n` parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with `n = 5` should return the array `[5, 4, 3, 2, 1]`. Your function must use recursion by calling itself and must not use loops of any kind.

> `countdown(-1)` should return an empty array.
> `countdown(10)` should return `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`
> `countdown(5)` should return `[5, 4, 3, 2, 1]`
> Your code should not rely on any kind of loops (`for`, `while` or higher order functions such as `forEach`, `map`, `filter`, and `reduce`).
> You should use recursion to solve this problem.

```js
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
};
/////
console.log(countdown(-1)); // []
console.log(countdown(10)); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(countdown(5)); // [ 5, 4, 3, 2, 1 ]
```

-----



## 110. Use Recursion to Create a Range of Numbers

[Learn Basic JavaScript: Use Recursion to Create a Range of Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers)

Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

------

We have defined a function named `rangeOfNumbers` with two parameters. The function should return an array of integers which begins with a number represented by the `startNum` parameter and ends with a number represented by the `endNum` parameter.  The starting number will always be less than or equal to the ending number.  Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both `startNum` and `endNum` are the same.

> Your function should return an array.
> Your code should not use any loop syntax (`for` or `while` or higher order functions such as `forEach`, `map`, `filter`, or `reduce`).
> `rangeOfNumbers` should use recursion (call itself) to solve this challenge.
> `rangeOfNumbers(1, 5)` should return `[1, 2, 3, 4, 5]`.
> `rangeOfNumbers(6, 9)` should return `[6, 7, 8, 9]`.
> `rangeOfNumbers(4, 4)` should return `[4]`.

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};
console.log(rangeOfNumbers(1, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(rangeOfNumbers(6, 9)); // [ 6, 7, 8, 9 ]
console.log(rangeOfNumbers(4, 4)); // [ 4 ]
```

