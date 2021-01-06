---
id: freeCodeCamp-Functional_Programming
title: Functional Programming
---



## Introduction to the Functional Programming Challenges

[Functional Programming | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/)

Functional programming is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result. You can combine basic functions in many ways to build more and more complex programs.

Functional programming follows a few core principles:

- Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation
- Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data
- Functions have minimal side effects in the program

The functional programming software development approach breaks a program into small, testable parts. This section covers basic functional programming principles in JavaScript.

-----



## 1. Learn About Functional Programming

[Learn Functional Programming: Learn About Functional Programming | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/learn-about-functional-programming)

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

`INPUT -> PROCESS -> OUTPUT`

Functional programming is about:
1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2) Pure functions - the same input always gives the same output
3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

------

The members of freeCodeCamp happen to love tea.
In the code editor, the `prepareTea` and `getTea` functions are already defined for you. Call the `getTea` function to get 40 cups of tea for the team, and store them in the `tea4TeamFCC` variable.

> The `tea4TeamFCC` variable should hold 40 cups of tea for the team.
> The `tea4TeamFCC` variable should hold cups of green tea.

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

```js
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC); // ['greenTea', greenTea,...x40]
```

-----



## 2. Understand Functional Programming Terminology

[Learn Functional Programming: Understand Functional Programming Terminology | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/understand-functional-programming-terminology)

The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood swings are pretty common.
With that information, we'll need to revisit the `getTea` function from last challenge to handle various tea requests. We can modify `getTea` to accept a function as a parameter to be able to change the type of tea it prepares. This makes `getTea` more flexible, and gives the programmer more control when client requests change.
But first, let's cover some functional terminology:
*Callbacks* are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter`, the callback function tells JavaScript the criteria for how to filter an array.
Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called *first class* functions. In JavaScript, all functions are first class functions.
The functions that take a function as an argument, or return a function as a return value are called *higher order* functions.
When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a *lambda*.

------

Prepare 27 cups of green tea and 13 cups of black tea and store them in `tea4GreenTeamFCC` and `tea4BlackTeamFCC` variables, respectively. Note that the `getTea` function has been modified so it now takes a function as the first argument.
Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.

> The `tea4GreenTeamFCC` variable should hold 27 cups of green tea for the team.
> The `tea4GreenTeamFCC` variable should hold cups of green tea.
> The `tea4BlackTeamFCC` variable should hold 13 cups of black tea.
> The `tea4BlackTeamFCC` variable should hold cups of black tea.

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

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



## 3. Understand the Hazards of Using Imperative Code

[Learn Functional Programming: Understand the Hazards of Using Imperative Code | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/understand-the-hazards-of-using-imperative-code)

Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.
In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.
Often the statements change the state of the program, like updating global variables. A classic example is writing a `for` loop that gives exact directions to iterate over the indices of an array.
In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.
JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the `for` loop mentioned above, you could call the `map` method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.
Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.
A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.
The code editor shows an implementation of this functionality with functions for `tabOpen()`, `tabClose()`, and `join()`. The array `tabs` is part of the Window object that stores the name of the open pages.

------

Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in `finalTabs.tabs`, should be `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` but the list produced by the code is slightly different.
Change `Window.prototype.tabClose` so that it removes the correct tab.

> `finalTabs.tabs` should be `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line
  var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
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

-----



## 4. Avoid Mutations and Side Effects Using Functional Programming

[Learn Functional Programming: Avoid Mutations and Side Effects Using Functional Programming | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/avoid-mutations-and-side-effects-using-functional-programming)

If you haven't already figured it out, the issue in the previous challenge was with the `splice` call in the `tabClose()` function. Unfortunately, `splice` changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.
This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.
One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.
The previous example didn't have any complicated operations but the `splice` method changed the original array, and resulted in a bug.
Recall that in functional programming, changing or altering things is called *mutation*, and the outcome is called a *side effect*. A function, ideally, should be a *pure function*, meaning that it does not cause any side effects.
Let's try to master this discipline and not alter any variable or object in our code.

------

Fill in the code for the function `incrementer` so it returns the value of the global variable `fixedValue` increased by one.

> Your function `incrementer` should not change the value of `fixedValue` (which is `4`).
> Your `incrementer` function should return a value that is one larger than the `fixedValue` value.
> Your `incrementer` function should return a value based on the global `fixedValue` variable value.

```js
// The global variable
var fixedValue = 4;
function incrementer () {
  // Only change code below this line
  // Only change code above this line
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

-----



## 5. Pass Arguments to Avoid External Dependence in a Function

[Learn Functional Programming: Pass Arguments to Avoid External Dependence in a Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/pass-arguments-to-avoid-external-dependence-in-a-function)

The last challenge was a step closer to functional programming principles, but there is still something missing.
We didn't alter the global variable value, but the function `incrementer` would not work without the global variable `fixedValue` being there.
Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.
This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.
Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

------

Let's update the `incrementer` function to clearly declare its dependencies.
Write the `incrementer` function so it takes an argument, and then returns a result after increasing the value by one.

> Your function `incrementer` should not change the value of `fixedValue` (which is `4`).
> Your `incrementer` function should take an argument.
> Your `incrementer` function should return a value that is one larger than the `fixedValue` value.

```js
// The global variable
var fixedValue = 4;
// Only change code below this line
function incrementer () {
  // Only change code above this line
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

-----



## 6. Refactor Global Variables Out of Functions

[Learn Functional Programming: Refactor Global Variables Out of Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions)

So far, we have seen two distinct principles for functional programming:
1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.
2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

------

Rewrite the code so the global array `bookList` is not changed inside either function. The `add` function should add the given `bookName` to the end of the array passed to it and return a new array (list). The `remove` function should remove the given `bookName` from the array passed to it.
**Note:** Both functions should return an array, and any new parameters should be added before the `bookName` parameter.

> `bookList` should not change and still equal `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.
> `newBookList` should equal `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.
> `newerBookList` should equal `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.
> `newestBookList` should equal `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

``` js
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Change code below this line
function add (bookName) {
  bookList.push(bookName);
  return bookList;
  // Change code above this line
}
// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    bookList.splice(book_index, 1);
    return bookList;
    // Change code above this line
    }
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);
/*
[ 'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae' ]
*/
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

-----



## 7. Use the map Method to Extract Data from an Array

[Learn Functional Programming: Use the map Method to Extract Data from an Array | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.
This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.
It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered *first class objects* in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.
Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at `Array.prototype.map()`, or more simply `map`.
The `map` method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element.  It does this without mutating the original array.
When the callback is used, it is passed three arguments.  The first argument is the current element being processed.  The second is the index of that element and the third is the array upon which the `map` method was called.
See below for an example using the `map` method on the `users` array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
```

------

The `watchList` array holds objects with information on several movies.  Use `map` on `watchList` to assign a new array of objects with only `title` and `rating` keys to the `ratings` variable. The code in the editor currently uses a `for` loop to do this, so you should replace the loop functionality with your `map` expression.

> The `watchList` variable should not change.
> Your code should not use a `for` loop.
> Your code should use the `map` method.
> `ratings` should equal `[{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}]`.

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
var ratings = [];
for(var i=0; i < watchList.length; i++){
  ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}
// Only change code above this line
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

-----



## 8. Implement map on a Prototype

[Learn Functional Programming: Implement map on a Prototype | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype)

As you have seen from applying `Array.prototype.map()`, or simply `map()` earlier, the `map` method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.
In other words, `map` is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.
You might learn a lot about the `map` method if you implement your own version of it. It is recommended you use a `for` loop or `Array.prototype.forEach()`.

------

Write your own `Array.prototype.myMap()`, which should behave exactly like `Array.prototype.map()`. You should not use the built-in `map` method. The `Array` instance can be accessed in the `myMap` method using `this`.

> `new_s` should equal `[46, 130, 196, 10]`.
> Your code should not use the `map` method.

```js
// The global variable
var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  // Only change code above this line
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
/* or */
this.forEach(a => newArray.push(callback(a)));
```

------



## 9. Use the filter Method to Extract Data from an Array

[Learn Functional Programming: Use the filter Method to Extract Data from an Array | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

Another useful array function is `Array.prototype.filter()`, or simply `filter()`. 
`filter` calls a function on each element of an array and returns a new array containing only the elements for which that function returns `true`.  In other words, it filters the array, based on the function passed to it.  Like `map`, it does this without needing to modify the original array.
The callback function accepts three arguments.  The first argument is the current element being processed.  The second is the index of that element and the third is the array upon which the `filter` method was called.
See below for an example using the `filter` method on the `users` array to return a new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
```

------

The variable `watchList` holds an array of objects with information on several movies. Use a combination of `filter` and `map` on `watchList` to assign a new array of objects with only `title` and `rating` keys.  The new array should only include objects where `imdbRating` is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

> The `watchList` variable should not change.
> Your code should use the `filter` method.
> Your code should not use a `for` loop.
> `filteredList` should equal `[{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}]`.

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

-----



## 10. Implement the filter Method on a Prototype

[Learn Functional Programming: Implement the filter Method on a Prototype | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype)

You might learn a lot about the `filter` method if you implement your own version of it. It is recommended you use a `for` loop or `Array.prototype.forEach()`.

------

Write your own `Array.prototype.myFilter()`, which should behave exactly like `Array.prototype.filter()`. You should not use the built-in `filter` method. The `Array` instance can be accessed in the `myFilter` method using `this`.

> `new_s` should equal `[23, 65, 5]`.
> Your code should not use the `filter` method.

```js
// The global variable
var s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
  return newArray;
};
var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
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
/* or */
this.forEach(function(x) {
    if (callback(x) == true) {
        newArray.push(x);
    }
});
```

-----



## 11. Return Part of an Array Using the slice Method

[Learn Functional Programming: Return Part of an Array Using the slice Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method)

The `slice` method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The `slice` method does not mutate the original array, but returns a new one.
Here's an example:

```js
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]
```

------

Use the `slice` method in the `sliceArray` function to return part of the `anim` array given the provided `beginSlice` and `endSlice` indices. The function should return an array.

> Your code should use the `slice` method.
> The `inputAnim` variable should not change.
> `sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` should return `["Dog", "Tiger"]`.
> `sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` should return `["Cat"]`.
> `sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` should return `["Dog", "Tiger", "Zebra"]`.

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  // Only change code above this line
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



## 12. Remove Elements from an Array Using slice Instead of splice

[Learn Functional Programming: Remove Elements from an Array Using slice Instead of splice | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/remove-elements-from-an-array-using-slice-instead-of-splice)

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the `splice` method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the `splice` method mutates the original array it is called on. Here's an example:

```js
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
```

As we saw in the last challenge, the `slice` method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the `slice` method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the `slice` method instead of `splice` helps to avoid any array-mutating side effects.

------

Rewrite the function `nonMutatingSplice` by using `slice` instead of `splice`. It should limit the provided `cities` array to a length of 3, and return a new array with only the first three items.
Do not mutate the original array provided to the function.

> Your code should use the `slice` method.
> Your code should not use the `splice` method.
> The `inputCities` array should not change.
> `nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` should return `["Chicago", "Delhi", "Islamabad"]`.

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);
  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
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



## 13. Combine Two Arrays Using the concat Method

[Learn Functional Programming: Combine Two Arrays Using the concat Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-two-arrays-using-the-concat-method)

*Concatenation* means to join items end to end. JavaScript offers the `concat` method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to `concat`, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

```js
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]
```

------

Use the `concat` method in the `nonMutatingConcat` function to concatenate `attach` to the end of `original`. The function should return the concatenated array.

> Your code should use the `concat` method.
> The `first` array should not change.
> The `second` array should not change.
> `nonMutatingConcat([1, 2, 3], [4, 5])` should return `[1, 2, 3, 4, 5]`.

```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  // Only change code above this line
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



## 14. Add Elements to the End of an Array Using concat Instead of push

[Learn Functional Programming: Add Elements to the End of an Array Using concat Instead of push | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/add-elements-to-the-end-of-an-array-using-concat-instead-of-push)

Functional programming is all about creating and using non-mutating functions.
The last challenge introduced the `concat` method as a way to combine arrays into a new one without mutating the original arrays. Compare `concat` to the `push` method. `Push` adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way
```

`Concat` offers a way to add new items to the end of an array without any mutating side effects.

------

Change the `nonMutatingPush` function so it uses `concat` to add `newItem` to the end of `original` instead of `push`. The function should return an array.

> Your code should use the `concat` method.
> Your code should not use the `push` method.
> The `first` array should not change.
> The `second` array should not change.
> `nonMutatingPush([1, 2, 3], [4, 5])` should return `[1, 2, 3, 4, 5]`.

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
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

-----



## 15. Use the reduce Method to Analyze Data

[Learn Functional Programming: Use the reduce Method to Analyze Data | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data)

`Array.prototype.reduce()`, or simply `reduce()`, is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the `reduce` method.
The `reduce` method allows for more general forms of array processing, and it's possible to show that both `filter` and `map` can be derived as special applications of `reduce`. The `reduce` method iterates over each item in an array and returns a single value (i.e. string, number, object, array).  This is achieved via a callback function that is called on each iteration.
The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which `reduce` is called.
In addition to the callback function, `reduce` has an additional parameter which takes an initial value for the accumulator.  If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.
See below for an example using `reduce` on the `users` array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64
```

In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

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

------

The variable `watchList` holds an array of objects with information on several movies. Use `reduce` to find the average IMDB rating of the movies **directed by Christopher Nolan**. Recall from prior challenges how to `filter` data and `map` over it to pull what you need. You may need to create other variables, and return the average rating from `getRating` function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

> The `watchList` variable should not change.
> Your code should use the `reduce` method.
> The `getRating(watchList)` should equal 8.675.
> Your code should not use a `for` loop.
> Your code should return correct output after modifying the `watchList` object.

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
  // Only change code below this line
  var averageRating;
  // Only change code above this line
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

-----



## 16. Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

[Learn Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

Now that you have worked through a few challenges using higher-order functions like `map()`, `filter()`, and `reduce()`, you now get to apply them to solve a more complex challenge.

------

We have defined a function named `squareList`.  You need to complete the code for the `squareList` function using any combination of `map()`, `filter()`, and `reduce()` so that it returns a new array containing only the square of *only* the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.  An example of an array containing only real numbers is `[-3, 4.8, 5, 3, -3.2]`.
**Note:** Your function should not use any kind of `for` or `while` loops or the `forEach()` function.

> `squareList` should be a `function`.
> for or while loops or forEach should not be used.
> `map`, `filter`, or `reduce` should be used.
> The function should return an `array`.
> `squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` should return `[16, 1764, 36]`.
> `squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` should return `[9, 100, 49]`.

```js
const squareList = (arr) => {
  // Only change code below this line
  return arr;
  // Only change code above this line
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

-----



## 17. Sort an Array Alphabetically using the sort Method

[Learn Functional Programming: Sort an Array Alphabetically using the sort Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method)

The `sort` method sorts the elements of an array according to the callback function.
For example:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
```

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called `compareFunction`, is supplied, the array elements are sorted according to the return value of the `compareFunction`: If `compareFunction(a,b)` returns a value less than 0 for two elements `a` and `b`, then `a` will come before `b`. If `compareFunction(a,b)` returns a value greater than 0 for two elements `a` and `b`, then `b` will come before `a`. If `compareFunction(a,b)` returns a value equal to 0 for two elements `a` and `b`, then `a` and `b` will remain unchanged.

------

Use the `sort` method in the `alphabeticalOrder` function to sort the elements of `arr` in alphabetical order.

> Your code should use the `sort` method.
> `alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` should return `["a", "a", "c", "d", "g", "z"]`.
> `alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` should return `["a", "h", "m", "m", "n", "x"]`.
> `alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` should return `["a", "a", "a", "a", "t", "x"]`.

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
/* or */
function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}
```

------



## 18. Return a Sorted Array Without Changing the Original Array

[Learn Functional Programming: Return a Sorted Array Without Changing the Original Array | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array)

A side effect of the `sort` method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that `slice` and `concat` return a new array), then run the `sort` method.

------

Use the `sort` method in the `nonMutatingSort` function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the `globalArray` variable.

> Your code should use the `sort` method.
> The `globalArray` variable should not change.
> `nonMutatingSort(globalArray)` should return `[2, 3, 5, 6, 9]`.
> `nonMutatingSort(globalArray)` should not be hard coded.
> The function should return a new array, not the array passed to it.

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  // Only change code above this line
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

-----



## 19. Split a String into an Array Using the split Method

[Learn Functional Programming: Split a String into an Array Using the split Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method)

The `split` method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.
Here are two examples that split one string by spaces, then another by digits using a regular expression:

```js
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
```

Since strings are immutable, the `split` method makes it easier to work with them.

------

Use the `split` method inside the `splitify` function to split `str` into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

> Your code should use the `split` method.
> `splitify("Hello World,I-am code")` should return `["Hello", "World", "I", "am", "code"]`.
> `splitify("Earth-is-our home")` should return `["Earth", "is", "our", "home"]`.
> `splitify("This.is.a-sentence")` should return `["This", "is", "a", "sentence"]`.

```js
function splitify(str) {
  // Only change code below this line
  // Only change code above this line
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
```

-----



## 20. Combine an Array into a String Using the join Method

[Learn Functional Programming: Combine an Array into a String Using the join Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method)

The `join` method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.
Here's an example:

```js
var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"
```

------

Use the `join` method (among others) inside the `sentensify` function to make a sentence from the words in the string `str`. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the `replace` method.

> Your code should use the `join` method.
> Your code should not use the `replace` method.
> `sentensify("May-the-force-be-with-you")` should return a string.
> `sentensify("May-the-force-be-with-you")` should return `"May the force be with you"`.
> `sentensify("The.force.is.strong.with.this.one")` should return `"The force is strong with this one"`.
> `sentensify("There,has,been,an,awakening")` should return `"There has been an awakening"`.

```js
function sentensify(str) {
  // Only change code below this line
  // Only change code above this line
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

-----



## 21. Apply Functional Programming to Convert Strings to URL Slugs

[Learn Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about `reduce`, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that `map` and `filter` are special cases of `reduce`.
Let's combine what we've learned to solve a practical problem.
Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce"). You may have already noticed this on the freeCodeCamp site.

------

Fill in the `urlSlug` function so it converts a string `title` and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use `replace`. Here are the requirements:

- The input is a string with spaces and title-cased words
- The output is a string with the spaces between words replaced by a hyphen (`-`)
- The output should be all lower-cased letters
- The output should not have any spaces

> Your code should not use the `replace` method for this challenge.
> `urlSlug("Winter Is Coming")` should return `"winter-is-coming"`.
> `urlSlug(" Winter Is  Coming")` should return `"winter-is-coming"`.
> `urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` should return `"a-mind-needs-books-like-a-sword-needs-a-whetstone"`.
> `urlSlug("Hold The Door")` should return `"hold-the-door"`.

```js
// Only change code below this line
function urlSlug(title) {
}
// Only change code above this line
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
/* or */
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
```

-----



## 22. Use the every Method to Check that Every Element in an Array Meets a Criteria

[Learn Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria)

The `every` method works with arrays to check if *every* element passes a particular test. It returns a Boolean value - `true` if all values meet the criteria, `false` if not.
For example, the following code would check if every element in the `numbers` array is less than 10:

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
```

------

Use the `every` method inside the `checkPositive` function to check if every element in `arr` is positive. The function should return a Boolean value.

> Your code should use the `every` method.
> `checkPositive([1, 2, 3, -4, 5])` should return `false`.
> `checkPositive([1, 2, 3, 4, 5])` should return `true`.
> `checkPositive([1, -2, 3, -4, 5])` should return `false`.

```js
function checkPositive(arr) {
  // Only change code below this line
  // Only change code above this line
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
/* or */
function checkPositive(arr) {
  return arr.every(val => val > 0);
}
/* or */
function checkPositive(arr) {
  return arr.every(function(value) {
    return value > 0;
  });
}
```

-----



## 23. Use the some Method to Check that Any Elements in an Array Meet a Criteria

[Learn Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria)

The `some` method works with arrays to check if *any* element passes a particular test. It returns a Boolean value - `true` if any of the values meet the criteria, `false` if not.
For example, the following code would check if any element in the `numbers` array is less than 10:

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true
```

------

Use the `some` method inside the `checkPositive` function to check if any element in `arr` is positive. The function should return a Boolean value.

> Your code should use the `some` method.
> `checkPositive([1, 2, 3, -4, 5])` should return `true`.
> `checkPositive([1, 2, 3, 4, 5])` should return `true`.
> `checkPositive([-1, -2, -3, -4, -5])` should return `false`.

```js
function checkPositive(arr) {
  // Only change code below this line
  // Only change code above this line
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
/* or */
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```

-----



## 24. Introduction to Currying and Partial Application

[Learn Functional Programming: Introduction to Currying and Partial Application | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application)

The *arity* of a function is the number of arguments it requires. *Currying* a function means to convert a function of N arity into N functions of arity 1.
In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
Here's an example:

```js
//Un-curried function
function unCurried(x, y) {
  return x + y;
}
//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y
curried(1)(2) // Returns 3
```

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

```js
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
```

Similarly, *partial application* can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

```js
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```

------

Fill in the body of the `add` function so it uses currying to add parameters `x`, `y`, and `z`.

> `add(10)(20)(30)` should return `60`.
> `add(1)(2)(3)` should return `6`.
> `add(11)(22)(33)` should return `66`.
> Your code should include a final statement that returns `x + y + z`.

```js
function add(x) {
  // Only change code below this line
  // Only change code above this line
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
/* or */
function add(x) {
	return y => z => x + y + z;
}
```

