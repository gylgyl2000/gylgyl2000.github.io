---
id: codewars-katas
title: Codewars Katas
---

## Multiply

**Instructions :** The code does not execute properly. Try to figure out why.

```javascript
function multiply(a, b){
  a * b
}
```

**Test Driven Development (TDD)**

```javascript
Test.assertEquals(multiply(1,1), 1);
Test.assertEquals(multiply(2,1), 2);
Test.assertEquals(multiply(2,2), 4);
Test.assertEquals(multiply(3,5), 15);

Test.describe('Some random tests', function() {
  for(let i=0; i<100; i++) {
    let [a,b] = [r()*100|0, r()*100|0];
    Test.assertEquals(multiply(a,b), a*b);
  }
})
```

**Solution**


```javascript
function multiply(a, b) {
  return a * b;
}

//////////

multiply = (a, b) => a * b;
```



------



## Even or Odd

**Instructions :** Create a function (or write a script in Shell) that takes an integer as  an argument and returns "Even" for even numbers or "Odd" for odd  numbers.

```javascript
function even_or_odd(number) {
  // ...
}
```

**Sample Tests :**

```javascript
Test.assertEquals(even_or_odd(2), "Even")
Test.assertEquals(even_or_odd(0), "Even")
Test.assertEquals(even_or_odd(7), "Odd")
Test.assertEquals(even_or_odd(1), "Odd")
```

**Solution :**

```javascript
function even_or_odd(number) {
  number = parseInt(number);
  return ((number & 1) == '0')?"Even":"Odd";
}
```



------



## Opposite number

**Instructions :** very simple, given a number, find its opposite.

**Examples :**

```markdown
1: -1
14: -14
-34: 34
```

```javascript
function opposite(number) {
  //your code here
}
```
**Sample tests :**

```javascript
Test.assertEquals(opposite(1), -1,)
```

**Solution :**

```javascript
function opposite(number) {
  return -number
}
```



------



## String repeat

**Instructions :** Write a function called `repeatString` which repeats the given String `src` exactly `count` times.

```javascript
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
```



```javascript
function repeatStr (n, s) {
  return '';
}
```

**Sample Tests :**

```javascript
describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});
```

**Solution :**

```javascript
function repeatStr (n, s) {
  return s.repeat(n);
}
```



------



## **Jenny's secret message**

**Instructions :** Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny,  and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her ?

> Jenny a écrit une fonction qui renvoie un message d'accueil pour un  utilisateur. Cependant, elle est amoureuse de Johnny et aimerait le  saluer légèrement différemment. Elle a ajouté un cas particulier à sa  fonction, mais elle a fait une erreur.
>
> Peux-tu l'aider ?
>

```javascript
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}
```

**Sample Tests :**

```javascript
Test.describe("Jenny's greeting function", function(){
  Test.it("should greet some people normally",function(){
    Test.assertEquals(greet("Jim"), "Hello, Jim!");
    Test.assertEquals(greet("Jane"), "Hello, Jane!");
    Test.assertEquals(greet("Simon"), "Hello, Simon!");
  });
  Test.it("should greet Johnny a little bit more special",function(){
    Test.assertEquals(greet("Johnny"), "Hello, my love!");
  });
});
```

**Solution :**

```javascript
function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}
```



------



## Convert boolean values to strings 'Yes' or 'No'

**Instructions :** Complete the method that takes a boolean value and return a `"Yes"` string for `true`, or a `"No"` string for `false`.

> Complétez la méthode qui prend une valeur booléenne et retournez une chaîne `"Yes"` pour `true` ou une chaîne "No"` pour `false`.

```javascript
function boolToWord( bool ){
  //...
}
```

**Samples Tests :**

```javascript
Test.assertEquals(boolToWord(true), 'Yes')
Test.assertEquals(boolToWord(false), 'No')
```

**Solution :**

```javascript
function boolToWord( bool ){
  if(bool == true)
    return 'Yes';
  if(bool == false)
    return 'No';
}

//////////

function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

//////////

function boolToWord( bool ){
  if( bool ){
    return "Yes";
  }
  return "No";
}

//////////

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

//////////

const boolToWord = bool => bool ? 'Yes' : 'No';

```



------



## **Remove First and Last Character**

**Instructions**

It's pretty straightforward. Your goal is to create a function that  removes the first and last characters of a string. You're given one  parameter, the original string.  You don't have to worry with strings  with less than two characters.

> C'est assez simple. Votre objectif est de créer une fonction qui  supprime les premier et dernier caractères d'une chaîne. Vous obtenez un paramètre, la chaîne d'origine. Vous n'avez pas à vous soucier des  chaînes de moins de deux caractères.

```javascript
function removeChar(str){
 //You got this!

};
```

**Sample Tests**

```javascript
Test.describe("Tests", function(){

Test.assertEquals(removeChar('eloquent'), 'loquen');
Test.assertEquals(removeChar('country'), 'ountr');
Test.assertEquals(removeChar('person'), 'erso');
Test.assertEquals(removeChar('place'), 'lac');

});
```

**Solution**

```javascript
function removeChar(str){
 return str.substring(1, str.length-1);

};
//////////
function removeChar(str) {
  return str.slice(1, -1);
}
//////////
const removeChar = str => str.slice(1,-1);
```



------



## Vowel Count

**Instructions**

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

> Renvoie le nombre (count) de voyelles dans la chaîne donnée.
>
> Nous considérerons a, e, i, o et u comme voyelles pour ce Kata.
>
> La chaîne d'entrée sera uniquement composée de lettres minuscules et / ou d'espaces.

```javascript
function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here

  return vowelsCount;
}
```

**Sample tests**

```javascript
describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});
```

**Solution**

```javascript
function getCount(str) {
  var vowelsCount = 0;
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i)==='a' || str.charAt(i)==='e' || str.charAt(i)==='i' || str.charAt(i)==='o' || str.charAt(i)==='u'){
      vowelsCount +=1;
  }
  }
  return vowelsCount;
}

//////////

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

//////////

function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length
}

//////////

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

//////////

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
```

------



## Get the Middle Character

**Instructions**

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

> Vous allez recevoir un mot. Votre travail consiste à renvoyer le caractère  central du mot. Si la longueur du mot est impaire, renvoyez le caractère du milieu. Si la longueur du mot est paire, renvoyez les 2 caractères  du milieu.

**Examples**

```shell
 Kata.getMiddle("test") should return "es"

 Kata.getMiddle("testing") should return "t"

 Kata.getMiddle("middle") should return "dd"

 Kata.getMiddle("A") should return "A"
```

#Input

A word (string) of length `0 < str < 1000` (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

>  #Contribution
>
> Un mot (chaîne) de longueur `0 < str < 1000` (En javascript, vous pouvez obtenir un peu plus de 1000 dans certains cas de test en raison d'une erreur  dans les cas de test). Vous n'avez pas besoin de tester cela. Ceci est  uniquement là pour vous dire que vous n'avez pas à vous soucier de  l'expiration de votre solution.
>
> \#Production
>
> Le ou les caractères du milieu du mot représentés sous forme de chaîne.



```javascript
function getMiddle(s)
{
  //Code goes here!
}
```



**Sample tests**

```javascript
Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});
```

**Solution**

```javascript
function getMiddle(s)
{
  if(s.length % 2 === 0){
    return s.charAt((s.length / 2) - 1) + s.charAt(s.length / 2);
  } else {
    return s.charAt(s.length / 2);
  }
}

//////////

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//////////

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

//////////

function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}
```

------



## Jaden Casing Strings

**Instructions**

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for [some of his philosophy that he delivers via Twitter](https://twitter.com/jaden). When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

> Jaden Smith, le fils de Will Smith, est la star de films tels que The  Karate Kid (2010) et After Earth (2013). Jaden est également connu pour  une partie de sa philosophie qu'il livre via Twitter. Lorsqu'il écrit  sur Twitter, il est connu pour capitaliser presque toujours chaque mot.  Pour plus de simplicité, vous devrez mettre en majuscule chaque mot,  vérifiez comment les contractions devraient être dans l'exemple  ci-dessous.
>
> Votre tâche consiste à convertir les chaînes comme  elles seraient écrites par Jaden Smith. Les chaînes sont des citations  réelles de Jaden Smith, mais elles ne sont pas capitalisées de la même  manière qu'il les a tapées à l'origine.

**Example**

```shell
 Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
 Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
```

[Link to Jaden's former Twitter account @officialjaden via archive.org](https://web.archive.org/web/20190624190255/https://twitter.com/officialjaden)

```javascript
String.prototype.toJadenCase = function () {
  //...
};
```

**Sample tests**

```javascript
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
```

**Solution**

```javascript
String.prototype.toJadenCase = function () {

let strArr = this.split(" ");
let newArr = [];

  for(let i = 0 ; i < strArr.length ; i++ ){

    let FirstLetter = strArr[i].charAt(0).toUpperCase();
    let restOfWord = strArr[i].slice(1);
    
    newArr[i] = FirstLetter + restOfWord;

  };

  return newArr.join(' ');

};

//////////

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

//////////

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};

//////////

String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};
```

------



## Mumbling

**Instructions**

This time no story, no theory. The examples below show you how to write function `accum` :

> Cette fois, pas d'histoire, pas de théorie. Les exemples ci-dessous vous montrent comment écrire la fonction `accum` :

**Examples**

```shell
 accum("abcd") -> "A-Bb-Ccc-Dddd"
 accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 accum("cwAt") -> "C-Ww-Aaa-Tttt"


```

The parameter of accum is a string which includes only letters from `a..z` and `A..Z`.

> Le paramètre de accum est une chaîne qui ne comprend que des lettres de `a..z` et `A..Z`.



**Code de départ**

```javascript
function accum(s) {
	// your code
}
```

**Sample tests**

```javascript
Test.describe("accum",function() {
Test.it("Basic tests",function() {    
	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
})})
```

**Solution**

```javascript
function accum(s) {
	let strArr = s.split('');
    let newArr = [];

    	for(i = 0 ; i < strArr.length ; i++) {
		let upperLetter = strArr[i].toUpperCase();
		let lowerLetter = strArr[i].toLowerCase();
		newArr[i] = upperLetter + lowerLetter.repeat(i);
		};
	return newArr.join('-');
};

//////////

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

//////////

function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

//////////

function accum (s) {
  return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}
```

-----



## Is n divisible by x and y ?

[Train: Is n divisible by x and y? | Codewars](https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript)

**Instructions**
Create a function that checks if a number `n` is divisible by two numbers `x` **AND** `y`. All inputs are positive, non-zero digits.

**Examples**
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

**Sample Tests**

```js
Test.assertSimilar(isDivisible(3,3,4),false);
Test.assertSimilar(isDivisible(12,3,4),true);
Test.assertSimilar(isDivisible(8,3,4),false);
Test.assertSimilar(isDivisible(48,3,4),true);
```

 **Solution**

```js
function isDivisible(n, x, y) {
  if (n%x===0 && n%y===0) {
    return true;
  } else {
    return false;
  }
}
//////////
return n % x === 0 && n % y === 0;
//////////
return (n % x === 0 && n % y === 0) ? true : false;
```

