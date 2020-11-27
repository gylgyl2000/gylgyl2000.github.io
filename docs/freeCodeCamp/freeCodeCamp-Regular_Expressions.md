---
id: freeCodeCamp-Regular_Expressions
title: Regular Expressions
---



## Introduction to the Regular Expression Challenges

[Regular Expressions | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/)

Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they help programmers match, search, and replace text. Regular expressions can appear cryptic because a few characters have special meaning. The goal is to combine the symbols and text into a pattern that matches what you want, but only what you want. This section will cover the characters, a few shortcuts, and the common uses for writing regular expressions.

-----



## 1. Using the Test Method

[Learn Regular Expressions: Using the Test Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method)

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
If you want to find the word `"the"` in the string `"The dog chased the cat"`, you could use the following regular expression: `/the/`. Notice that quote marks are not required within the regular expression.
JavaScript has multiple ways to use regexes. One way to test a regex is using the `.test()` method. The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns `true` or `false` if your pattern finds something or not.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```

------

Apply the regex `myRegex` on the string `myString` using the `.test()` method.

> You should use `.test()` to test the regex.
> Your result should return `true`.

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





## 2. Match Literal Strings

[Learn Regular Expressions: Match Literal Strings | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-literal-strings)

In the last challenge, you searched for the word `"Hello"` using the regular expression `/Hello/`. That regex searched for a literal match of the string `"Hello"`. Here's another example searching for a literal match of the string `"Kevin"`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true
```

Any other forms of `"Kevin"` will not match. For example, the regex `/Kevin/` will not match `"kevin"` or `"KEVIN"`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false
```

A future challenge will show how to match those other forms as well.

------

Complete the regex `waldoRegex` to find `"Waldo"` in the string `waldoIsHiding` with a literal match.

> Your regex `waldoRegex` should find `"Waldo"`
> Your regex `waldoRegex` should not search for anything else.
> You should perform a literal string match with your regex.

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



## 3. Match a Literal String with Different Possibilities

[Learn Regular Expressions: Match a Literal String with Different Possibilities | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-a-literal-string-with-different-possibilities)

Using regexes like `/coding/`, you can look for the pattern `"coding"` in another string.
This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the `alternation` or `OR` operator: `|`.
This operator matches patterns either before or after it. For example, if you wanted to match `"yes"` or `"no"`, the regex you want is `/yes|no/`.
You can also search for more than just two patterns. You can do this by adding more patterns with more `OR` operators separating them, like `/yes|no|maybe/`.

------

Complete the regex `petRegex` to match the pets `"dog"`, `"cat"`, `"bird"`, or `"fish"`.

> Your regex `petRegex` should return `true` for the string `"John has a pet dog."`
> Your regex `petRegex` should return `false` for the string `"Emma has a pet rock."`
> Your regex `petRegex` should return `true` for the string `"Emma has a pet bird."`
> Your regex `petRegex` should return `true` for the string `"Liz has a pet cat."`
> Your regex `petRegex` should return `false` for the string `"Kara has a pet dolphin."`
> Your regex `petRegex` should return `true` for the string `"Alice has a pet fish."`
> Your regex `petRegex` should return `false` for the string `"Jimmy has a pet computer."`

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



## 4. Ignore Case While Matching

[Learn Regular Expressions: Ignore Case While Matching | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/ignore-case-while-matching)

Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are `"A"`, `"B"`, and `"C"`. Examples of lowercase are `"a"`, `"b"`, and `"c"`.
You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the `i` flag. You can use it by appending it to the regex.  An example of using this flag is `/ignorecase/i`. This regex can match the strings `"ignorecase"`, `"igNoreCase"`, and `"IgnoreCase"`.

------

Write a regex `fccRegex` to match `"freeCodeCamp"`, no matter its case. Your regex should not match any abbreviations or variations with spaces.

> Your regex should match `freeCodeCamp`
> Your regex should match `FreeCodeCamp`
> Your regex should match `FreecodeCamp`
> Your regex should match `FreeCodecamp`
> Your regex should not match `Free Code Camp`
> Your regex should match `FreeCOdeCamp`
> Your regex should not match `FCC`
> Your regex should match `FrEeCoDeCamp`
> Your regex should match `FrEeCodECamp`
> Your regex should match `FReeCodeCAmp`

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

------



## 5. Extract Matches

[Learn Regular Expressions: Extract Matches | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/extract-matches)

So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the `.match()` method.
To use the `.match()` method, apply the method on a string and pass in the regex inside the parentheses.
Here's an example:

```js
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```

Note that the `.match` syntax is the "opposite" of the `.test` method you have been using thus far:

```js
'string'.match(/regex/);
/regex/.test('string');
```

------

Apply the `.match()` method to extract the word `coding`.

> The `result` should have the word `coding`
> Your regex `codingRegex` should search for `coding`
> You should use the `.match()` method.

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

------



## 6. Find More Than the First Match

[Learn Regular Expressions: Find More Than the First Match | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-more-than-the-first-match)

So far, you have only been able to extract or search a pattern once.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
```

To search or extract a pattern more than once, you can use the `g` flag.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```

------

Using the regex `starRegex`, find and extract both `"Twinkle"` words from the string `twinkleStar`.
**Note** : You can have multiple flags on your regex like `/search/gi

> Your regex `starRegex` should use the global flag `g`
> Your regex `starRegex` should use the case insensitive flag `i`
> Your match should match both occurrences of the word `"Twinkle"`
> Your match `result` should have two elements in it.

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

------



## 7. Match Anything with Wildcard Period

[Learn Regular Expressions: Match Anything with Wildcard Period | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-anything-with-wildcard-period)

Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: `.`
The wildcard character `.` will match any one character. The wildcard is also called `dot` and `period`. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match `"hug"`, `"huh"`, `"hut"`, and `"hum"`, you can use the regex `/hu./` to match all four words.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true
```

------

Complete the regex `unRegex` so that it matches the strings `"run"`, `"sun"`, `"fun"`, `"pun"`, `"nun"`, and `"bun"`. Your regex should use the wildcard character.

> You should use the `.test()` method.
> You should use the wildcard character in your regex `unRegex`
> Your regex `unRegex` should match `"run"` in `"Let us go on a run."`
> Your regex `unRegex` should match `"sun"` in `"The sun is out today."`
> Your regex `unRegex` should match `"fun"` in `"Coding is a lot of fun."`
> Your regex `unRegex` should match `"pun"` in `"Seven days without a pun makes one weak."`
> Your regex `unRegex` should match `"nun"` in `"One takes a vow to be a nun."`
> Your regex `unRegex` should match `"bun"` in `"She got fired from the hot dog stand for putting her hair in a bun."`
> Your regex `unRegex` should not match `"There is a bug in my code."`
> Your regex `unRegex` should not match `"Catch me if you can."`

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



## 8. Match Single Character with Multiple Possibilities

[Learn Regular Expressions: Match Single Character with Multiple Possibilities | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-single-character-with-multiple-possibilities)

You learned how to match literal patterns (`/literal/`) and wildcard character (`/./`). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.
You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square (`[` and `]`) brackets.
For example, you want to match `"bag"`, `"big"`, and `"bug"` but not `"bog"`. You can create the regex `/b[aiu]g/` to do this. The `[aiu]` is the character class that will only match the characters `"a"`, `"i"`, or `"u"`.

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

------

Use a character class with vowels (`a`, `e`, `i`, `o`, `u`) in your regex `vowelRegex` to find all the vowels in the string `quoteSample`.
**Note :** Be sure to match both upper- and lowercase vowels.

> You should find all 25 vowels.
> Your regex `vowelRegex` should use a character class.
> Your regex `vowelRegex` should use the global flag.
> Your regex `vowelRegex` should use the case insensitive flag.
> Your regex should not match any consonants.

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



## 9. Match Letters of the Alphabet

[Learn Regular Expressions: Match Letters of the Alphabet | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-letters-of-the-alphabet)

You saw how you can use *character sets* to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
Inside a character set, you can define a range of characters to match using a hyphen character: `-`.
For example, to match lowercase letters `a` through `e` you would use `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

------

Match all the letters in the string `quoteSample`.
**Note:** Be sure to match both upper- and lowercase **letters**.

> Your regex `alphabetRegex` should match 35 items.
> Your regex `alphabetRegex` should use the global flag.
> Your regex `alphabetRegex` should use the case insensitive flag.

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

-----



## 10. Match Numbers and Letters of the Alphabet

[Learn Regular Expressions: Match Numbers and Letters of the Alphabet | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-numbers-and-letters-of-the-alphabet)

Using the hyphen (`-`) to match a range of characters is not limited to letters. It also works to match a range of numbers.
For example, `/[0-5]/` matches any number between `0` and `5`, including the `0` and `5`.
Also, it is possible to combine a range of letters and numbers in a single character set.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```

------

Create a single regex that matches a range of letters between `h` and `s`, and a range of numbers between `2` and `6`. Remember to include the appropriate flags in the regex.

> Your regex `myRegex` should match 17 items.
> Your regex `myRegex` should use the global flag.
> Your regex `myRegex` should use the case insensitive flag.

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



## 11. Match Single Characters Not Specified

[Learn Regular Expressions: Match Single Characters Not Specified | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-single-characters-not-specified)

So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called *negated character* sets.
To create a negated character set, you place a caret character (`^`) after the opening bracket and before the characters you do not want to match.
For example, `/[^aeiou]/gi` matches all characters that are not a vowel. Note that characters like `.`, `!`, `[`, `@`, `/` and white space are matched - the negated vowel character set only excludes the vowel characters.

------

Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

> Your regex `myRegex` should match 9 items.
> Your regex `myRegex` should use the global flag.
> Your regex `myRegex` should use the case insensitive flag.

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

-----



## 12. Match Characters that Occur One or More Times

[Learn Regular Expressions: Match Characters that Occur One or More Times | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-one-or-more-times)

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
You can use the `+` character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
For example, `/a+/g` would find one match in `"abc"` and return `["a"]`. Because of the `+`, it would also find a single match in `"aabc"` and return `["aa"]`.
If it were instead checking the string `"abab"`, it would find two matches and return `["a", "a"]` because the `a` characters are not in a row - there is a `b` between them. Finally, since there is no `"a"` in the string `"bcd"`, it wouldn't find a match.

------

You want to find matches when the letter `s` occurs one or more times in `"Mississippi"`. Write a regex that uses the `+` sign.

> Your regex `myRegex` should use the `+` sign to match one or more `s` characters.
> Your regex `myRegex` should match 2 items.
> The `result` variable should be an array with two matches of `"ss"`

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

------



## 13. Match Characters that Occur Zero or More Times

[Learn Regular Expressions: Match Characters that Occur Zero or More Times | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-zero-or-more-times)

The last challenge used the plus `+` sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.
The character to do this is the asterisk or star: `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

------

For this challenge, `chewieQuote` has been initialized as "Aaaaaaaaaaaaaaaarrrgh!" behind the scenes. Create a regex `chewieRegex` that uses the `*` character to match an uppercase `"A"` character immediately followed by zero or more lowercase `"a"` characters in `chewieQuote`. Your regex does not need flags or character classes, and it should not match any of the other quotes.

> Your regex `chewieRegex` should use the `*` character to match zero or more `a` characters.
> Your regex should match `"A"` in `chewieQuote`.
> Your regex should match `"Aaaaaaaaaaaaaaaa"` in `chewieQuote`.
> Your regex `chewieRegex` should match 16 characters in `chewieQuote`.
> Your regex should not match any characters in "He made a fair move. Screaming about it can't help you."
> Your regex should not match any characters in "Let him have it. It's not wise to upset a Wookiee."

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line
let result = chewieQuote.match(chewieRegex);
```

```js
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
console.log(result); // [ 'Aaaaaaaaaaaaaaaa', index: 0, input: 'Aaaaaaaaaaaaaaaarrrgh!', groups: undefined ]
```

-----



## 14. Find Characters with Lazy Matching

[Learn Regular Expressions: Find Characters with Lazy Matching | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-characters-with-lazy-matching)

In regular expressions, a *greedy* match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a *lazy* match, which finds the smallest possible part of the string that satisfies the regex pattern.
You can apply the regex `/t[a-z]*i/` to the string `"titanic"`. This regex is basically a pattern that starts with `t`, ends with `i`, and has some letters in between.
Regular expressions are by default greedy, so the match would return `["titani"]`. It finds the largest sub-string possible to fit the pattern.
However, you can use the `?` character to change it to lazy matching. `"titanic"` matched against the adjusted regex of `/t[a-z]*?i/` returns `["ti"]`.
**Note:** Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

------

Fix the regex `/<.*>/` to return the HTML tag `<h1>` and not the text `"<h1>Winter is coming</h1>"`. Remember the wildcard `.` in a regular expression matches any character.

> The `result` variable should be an array with `<h1>` in it
> `myRegex` should use lazy matching
> `myRegex` should not include the string 'h1'

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



## 15. Find One or More Criminals in a Hunt

[Learn Regular Expressions: Find One or More Criminals in a Hunt | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-one-or-more-criminals-in-a-hunt)

Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.
Here's an example to review how to do this:
The regex `/z+/` matches the letter `z` when it appears one or more times in a row. It would find matches in all of the following strings:

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

But it does not find matches in the following strings since there are no letter `z` characters:

```js
""
"ABC"
"abcabc"
```

------

Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter `C`.

> Your regex should match one criminal (`C`) in `"C"`
> Your regex should match two criminals (`CC`) in `"CC"`
> Your regex should match three criminals (`CCC`) in `"P1P5P4CCCP2P6P3"`
> Your regex should match five criminals (`CCCCC`) in `"P6P2P7P4P5CCCCCP3P1"`
> Your regex should not match any criminals in `""`
> Your regex should not match any criminals in `"P1P2P3"`
> Your regex should match fifty criminals (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) in `"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"`.

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

-----



## 16. Match Beginning String Patterns

[Learn Regular Expressions: Match Beginning String Patterns | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-beginning-string-patterns)

Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.
In an earlier challenge, you used the caret character (`^`) inside a character set to create a negated character set in the form `[^thingsThatWillNotBeMatched]`. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

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

Use the caret character in a regex to find `"Cal"` only in the beginning of the string `rickyAndCal`.

> Your regex should search for `"Cal"` with a capital letter.
> Your regex should not use any flags.
> Your regex should match `"Cal"` at the beginning of the string.
> Your regex should not match `"Cal"` in the middle of a string.

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

-----



## 17. Match Ending String Patterns

[Learn Regular Expressions: Match Ending String Patterns | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-ending-string-patterns)

In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.
You can search the end of strings using the dollar sign character `$` at the end of the regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
```

------

Use the anchor character (`$`) to match the string `"caboose"` at the end of the string `caboose`.

> You should search for `"caboose"` with the dollar sign `$` anchor in your regex.
> Your regex should not use any flags.
> You should match `"caboose"` at the end of the string `"The last car on a train is the caboose"`

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



## 18. Match All Letters and Numbers

[Learn Regular Expressions: Match All Letters and Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-letters-and-numbers)

Using character classes, you were able to search for all letters of the alphabet with `[a-z]`. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
The closest character class in JavaScript to match the alphabet is `\w`. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (`_`).

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

These shortcut character classes are also known as *shorthand character classes*.

------

Use the shorthand character class `\w` to count the number of alphanumeric characters in various quotes and strings.

> Your regex should use the global flag.
> Your regex should use the shorthand character `\w` to match all characters which are alphanumeric.
> Your regex should find 31 alphanumeric characters in `"The five boxing wizards jump quickly."`
> Your regex should find 32 alphanumeric characters in `"Pack my box with five dozen liquor jugs."`
> Your regex should find 30 alphanumeric characters in `"How vexingly quick daft zebras jump!"`
> Your regex should find 36 alphanumeric characters in `"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."`

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



## 19. Match Everything But Letters and Numbers

[Learn Regular Expressions: Match Everything But Letters and Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-everything-but-letters-and-numbers)

You've learned that you can use a shortcut to match alphanumerics `[A-Za-z0-9_]` using `\w`. A natural pattern you might want to search for is the opposite of alphanumerics.
You can search for the opposite of the `\w` with `\W`. Note, the opposite pattern uses a capital letter. This shortcut is the same as `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```

------

Use the shorthand character class `\W` to count the number of non-alphanumeric characters in various quotes and strings.

> Your regex should use the global flag.
> Your regex should find 6 non-alphanumeric characters in `"The five boxing wizards jump quickly."`.
> Your regex should use the shorthand character to match characters which are non-alphanumeric.
> Your regex should find 8 non-alphanumeric characters in `"Pack my box with five dozen liquor jugs."`
> Your regex should find 6 non-alphanumeric characters in `"How vexingly quick daft zebras jump!"`
> Your regex should find 12 non-alphanumeric characters in `"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."`

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



## 20. Match All Numbers

[Learn Regular Expressions: Match All Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-numbers)

You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.
The shortcut to look for digit characters is `\d`, with a lowercase `d`. This is equal to the character class `[0-9]`, which looks for a single character of any number between zero and nine.

------

Use the shorthand character class `\d` to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

> Your regex should use the shortcut character to match digit characters
> Your regex should use the global flag.
> Your regex should find 1 digit in `"9"`.
> Your regex should find 2 digits in `"Catch 22"`.
> Your regex should find 3 digits in `"101 Dalmatians"`.
> Your regex should find no digits in `"One, Two, Three"`.
> Your regex should find 2 digits in `"21 Jump Street"`.
> Your regex should find 4 digits in `"2001: A Space Odyssey"`.

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



## 21. Match All Non-Numbers

[Learn Regular Expressions: Match All Non-Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-non-numbers)

The last challenge showed how to search for digits using the shortcut `\d` with a lowercase `d`. You can also search for non-digits using a similar shortcut that uses an uppercase `D` instead.
The shortcut to look for non-digit characters is `\D`. This is equal to the character class `[^0-9]`, which looks for a single character that is not a number between zero and nine.

------

Use the shorthand character class for non-digits `\D` to count how many non-digits are in movie titles.

> Your regex should use the shortcut character to match non-digit characters
> Your regex should use the global flag.
> Your regex should find no non-digits in `"9"`.
> Your regex should find 6 non-digits in `"Catch 22"`.
> Your regex should find 11 non-digits in `"101 Dalmatians"`.
> Your regex should find 15 non-digits in `"One, Two, Three"`.
> Your regex should find 12 non-digits in `"21 Jump Street"`.
> Your regex should find 17 non-digits in `"2001: A Space Odyssey"`.

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



## 22. Restrict Possible Usernames

[Learn Regular Expressions: Restrict Possible Usernames | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames)

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

------

Change the regex `userCheck` to fit the constraints listed above.

> Your regex should match `JACK`
> Your regex should not match `J`
> Your regex should match `Jo`
> Your regex should match `Oceans11`
> Your regex should match `RegexGuru`
> Your regex should not match `007`
> Your regex should not match `9`
> Your regex should not match `A1`
> Your regex should not match `BadUs3rnam3`
> Your regex should match `Z97`
> Your regex should not match `c57bT3`

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

**Code Explanation**

1. `^` - start of input
2. `[a-z]` - first character is a letter
3. `[a-z]+` - following characters are letters
4. `\d*$` - input ends with 0 or more digits
5. `|` - or
6. `^[a-z]` - first character is a letter
7. `\d\d+` - following characters are 2 or more digits
8. `$` - end of input

-----



## 23. Match Whitespace

[Learn Regular Expressions: Match Whitespace | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-whitespace)

The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.
You can search for whitespace using `\s`, which is a lowercase `s`. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```

------

Change the regex `countWhiteSpace` to look for multiple whitespace characters in a string.

> Your regex should use the global flag.
> Your regex should use the shorthand character `\s` to match all whitespace characters.
> Your regex should find eight spaces in `"Men are from Mars and women are from Venus."`
> Your regex should find three spaces in `"Space: the final frontier."`
> Your regex should find no spaces in `"MindYourPersonalSpace"`

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



## 24. Match Non-Whitespace Characters

[Learn Regular Expressions: Match Non-Whitespace Characters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-non-whitespace-characters)

You learned about searching for whitespace using `\s`, with a lowercase `s`. You can also search for everything except whitespace.
Search for non-whitespace using `\S`, which is an uppercase `s`. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
```

------

Change the regex `countNonWhiteSpace` to look for multiple non-whitespace characters in a string.

> Your regex should use the global flag.
> Your regex should use the shorthand character `\S` to match all non-whitespace characters.
> Your regex should find 35 non-spaces in `"Men are from Mars and women are from Venus."`
> Your regex should find 23 non-spaces in `"Space: the final frontier."`
> Your regex should find 21 non-spaces in `"MindYourPersonalSpace"`

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

-----



## 25. Specify Upper and Lower Number of Matches

[Learn Regular Expressions: Specify Upper and Lower Number of Matches | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches)

Recall that you use the plus sign `+` to look for one or more characters and the asterisk `*` to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.
You can specify the lower and upper number of patterns with *quantity specifiers*. Quantity specifiers are used with curly brackets (`{` and `}`). You put two numbers between the curly brackets - for the lower and upper number of patterns.
For example, to match only the letter `a` appearing between `3` and `5` times in the string `"ah"`, your regex would be `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

------

Change the regex `ohRegex` to match the entire phrase `"Oh no"` only when it has `3` to `6` letter `h`'s.

> Your regex should use curly brackets.
> Your regex should not match `"Ohh no"`
> Your regex should match `"Ohhh no"`
> Your regex should match `"Ohhhh no"`
> Your regex should match `"Ohhhhh no"`
> Your regex should match `"Ohhhhhh no"`
> Your regex should not match `"Ohhhhhhh no"`

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



## 26. Specify Only the Lower Number of Matches

[Learn Regular Expressions: Specify Only the Lower Number of Matches | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-only-the-lower-number-of-matches)

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.
To only specify the lower number of patterns, keep the first number followed by a comma.
For example, to match only the string `"hah"` with the letter `a` appearing at least `3` times, your regex would be `/ha{3,}h/`.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
```

------

Change the regex `haRegex` to match the word `"Hazzah"` only when it has four or more letter `z`'s.

> Your regex should use curly brackets.
> Your regex should not match `"Hazzah"`
> Your regex should not match `"Hazzzah"`
> Your regex should match `"Hazzzzah"`
> Your regex should match `"Hazzzzzah"`
> Your regex should match `"Hazzzzzzah"`
> Your regex should match `"Hazzah"` with 30 `z`'s in it.

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

------



## 27. Specify Exact Number of Matches

[Learn Regular Expressions: Specify Exact Number of Matches | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-exact-number-of-matches)

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.
To specify a certain number of patterns, just have that one number between the curly brackets.
For example, to match only the word `"hah"` with the letter `a` `3` times, your regex would be `/ha{3}h/`.

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

Change the regex `timRegex` to match the word `"Timber"` only when it has four letter `m`'s.

> Your regex should use curly brackets.
> Your regex should not match `"Timber"`
> Your regex should not match `"Timmber"`
> Your regex should not match `"Timmmber"`
> Your regex should match `"Timmmmber"`
> Your regex should not match `"Timber"` with 30 `m`'s in it.

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

------



## 28. Check for All or None

[Learn Regular Expressions: Check for All or None | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-all-or-none)

Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.
You can specify the possible existence of an element with a question mark, `?`. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

------

Change the regex `favRegex` to match both the American English (favorite) and the British English (favourite) version of the word.

> Your regex should use the optional symbol, `?`.
> Your regex should match `"favorite"`
> Your regex should match `"favourite"`
> Your regex should not match `"fav"`

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



## 29. Positive and Negative Lookahead

[Learn Regular Expressions: Positive and Negative Lookahead | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead)

*Lookaheads* are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.
There are two kinds of lookaheads: *positive lookahead* and *negative lookahead*.
A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched.
On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as `(?!...)` where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
Lookaheads are a bit confusing but some examples will help.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
```

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

------

Use lookaheads in the `pwRegex` to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.

> Your regex should use two positive `lookaheads`.
> Your regex should not match `"astronaut"`
> Your regex should not match `"banan1"`
> Your regex should match `"bana12"`
> Your regex should match `"abc123"`
> Your regex should not match `"1234"`
> Your regex should not match `"8pass99"`
> Your regex should not match `"12abcde"`
> Your regex should match `"astr1on11aut"`

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

-----



## 30. Check For Mixed Grouping of Characters

[Learn Regular Expressions: Check For Mixed Grouping of Characters | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters)

Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses `()`.
If you want to find either `Penguin` or `Pumpkin` in a string, you can use the following Regular Expression: `/P(engu|umpk)in/g`
Then check whether the desired string groups are in the test string by using the `test()` method.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true
```

------

Fix the regex so that it checks for the names of `Franklin Roosevelt` or `Eleanor Roosevelt` in a case sensitive manner and it should make concessions for middle names.
Then fix the code so that the regex that you have created is checked against `myString` and either `true` or `false` is returned depending on whether the regex matches.

> Your regex `myRegex` should return `true` for the string `Franklin D. Roosevelt`
> Your regex `myRegex` should return `true` for the string `Eleanor Roosevelt`
> Your regex `myRegex` should return `false` for the string `Franklin Rosevelt`
> Your regex `myRegex` should return `false` for the string `Frank Roosevelt`
> You should use `.test()` to test the regex.
> Your result should return `true`.

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



## 31. Reuse Patterns Using Capture Groups

[Learn Regular Expressions: Reuse Patterns Using Capture Groups | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups)

Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.
You can search for repeat substrings using *capture groups*. Parentheses, `(` and `)`, are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.
To specify where that repeat string will appear, you use a backslash (`\`) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be `\1` to match the first group.
The example below matches any word that occurs twice separated by a space:

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```

Using the `.match()` method on a string will return an array with the string it matches, along with its capture group.

------

Use capture groups in `reRegex` to match numbers that are repeated only three times in a string, each separated by a space.

> Your regex should use the shorthand character class for digits.
> Your regex should reuse a capture group twice.
> Your regex should have two spaces separating the three numbers.
> Your regex should match `"42 42 42"`.
> Your regex should match `"100 100 100"`.
> Your regex should not match `"42 42 42 42"`.
> Your regex should not match `"42 42"`.
> Your regex should not match `"101 102 103"`.
> Your regex should not match `"1 2 3"`.
> Your regex should match `"10 10 10"`.

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



## 32. Use Capture Groups to Search and Replace

[Learn Regular Expressions: Use Capture Groups to Search and Replace | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/use-capture-groups-to-search-and-replace)

Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.
You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```

You can also access capture groups in the replacement string with dollar signs (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```

------

Write a regex `fixRegex` using three capture groups that will search for each word in the string "one two three". Then update the `replaceText` variable to replace "one two three" with the string "three two one" and assign the result to the `result` variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign (`$`) syntax.

> You should use `.replace()` to search and replace.
> Your regex should change `"one two three"` to `"three two one"`
> You should not change the last line.
> `fixRegex` should use at least three capture groups.
> `replaceText` should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).

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



## 33. Remove Whitespace from Start and End

[Learn Regular Expressions: Remove Whitespace from Start and End | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end)

Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

------

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
**Note:** The `String.prototype.trim()` method would work here, but you'll need to complete this challenge using regular expressions.

> `result` should equal to `"Hello, World!"`
> Your solution should not use the `String.prototype.trim()` method.
> The `result` variable should not be set equal to a string.

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

