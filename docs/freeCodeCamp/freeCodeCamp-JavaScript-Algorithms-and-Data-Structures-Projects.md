---
id: freeCodeCamp-JavaScript-Algorithms-and-Data-Structures-Projects
title: JavaScript Algorithms and Data Structures Projects
---



Introduction to the JavaScript Algorithms and Data Structures Projects

[JavaScript Algorithms and Data Structures Projects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects)

Time to put your new JavaScript skills to work! These challenges will be similar to the algorithm scripting challenges but more difficult. This will allow you to prove how much you have learned.

In this section you will create the following small JavaScript programs:

- Palindrome Checker
- Roman Numeral Converter
- Caesars Cipher
- Telephone Number Validator
- Cash Register

Have fun and remember to use the [Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) method if you get stuck.

Good Luck!

-----



## 1. Palindrome Checker

[Learn JavaScript Algorithms and Data Structures Projects: Palindrome Checker | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)

Return `true` if the given string is a palindrome. Otherwise, return `false`.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
**Note** : You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and `"race CAR"` among others.
We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3  3a2"`, and `"2_A3*3#A2"`.

> `palindrome("eye")` should return a boolean.
> `palindrome("eye")` should return true.
> `palindrome("_eye")` should return true.
> `palindrome("race car")` should return true.
> `palindrome("not a palindrome")` should return false.
> `palindrome("A man, a plan, a canal. Panama")` should return true.
> `palindrome("never odd or even")` should return true.
> `palindrome("nope")` should return false.
> `palindrome("almostomla")` should return false.
> `palindrome("My age is 0, 0 si ega ym.")` should return true.
> `palindrome("1 eye for of 1 eye.")` should return false.
> `palindrome("0_0 (: /-\ :) 0-0")` should return true.
> `palindrome("five|_/|four")` should return false.

```js
function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|_/|four"));
```

```
true
true
true
false
true
true
false
false
true
false
true
false
```

-----



## 2. Roman Numeral Converter

[Learn JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)

Convert the given number into a roman numeral.
All [roman numerals](http://www.mathsisfun.com/roman-numerals.html) answers should be provided in upper-case.

> `convertToRoman(2)` should return "II".
> `convertToRoman(3)` should return "III".
> `convertToRoman(4)` should return "IV".
> `convertToRoman(5)` should return "V".
> `convertToRoman(9)` should return "IX".
> `convertToRoman(12)` should return "XII".
> `convertToRoman(16)` should return "XVI".
> `convertToRoman(29)` should return "XXIX".
> `convertToRoman(44)` should return "XLIV".
> `convertToRoman(45)` should return "XLV".
> `convertToRoman(68)` should return "LXVIII".
> `convertToRoman(83)` should return "LXXXIII".
> `convertToRoman(97)` should return "XCVII".
> `convertToRoman(99)` should return "XCIX".
> `convertToRoman(400)` should return "CD".
> `convertToRoman(500)` should return "D".
> `convertToRoman(501)` should return "DI".
> `convertToRoman(649)` should return "DCXLIX".
> `convertToRoman(798)` should return "DCCXCVIII".
> `convertToRoman(891)` should return "DCCCXCI".
> `convertToRoman(1000)` should return "M".
> `convertToRoman(1004)` should return "MIV".
> `convertToRoman(1006)` should return "MVI".
> `convertToRoman(1023)` should return "MXXIII".
> `convertToRoman(2014)` should return "MMXIV".
> `convertToRoman(3999)` should return "MMMCMXCIX".

```js
let convertToRoman = function(num) {
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
    let romanized = "";
    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
        }
    }
    return romanized;
};

console.log(convertToRoman(36));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
```

```
XXXVI
II
III
IV
V
IX
XII
XVI
XXIX
XLIV
XLV
LXVIII
LXXXIII
XCVII
XCIX
CD
D
DI
DCXLIX
DCCXCVIII
DCCCXCI
M
MIV
MVI
MXXIII
MMXIV
MMMCMXCIX
```

-----



## 3. Caesars Cipher

[Learn JavaScript Algorithms and Data Structures Projects: Caesars Cipher | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.
Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

> `rot13("SERR PBQR PNZC")` should decode to `FREE CODE CAMP`.
> `rot13("SERR CVMMN!")` should decode to `FREE PIZZA!`
> `rot13("SERR YBIR?")` should decode to `FREE LOVE?`
> `rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` should decode to `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

```js
function rot13(str) {
    return (
        str
        .split("")
        .map.call(str, function(char) {
            let x = char.charCodeAt(0);
            if (x < 65 || x > 90) {
                return String.fromCharCode(x);
            }
            else if (x < 78) {
                return String.fromCharCode(x + 13);
            }
            return String.fromCharCode(x - 13);
        })
        .join("")
    );
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
```

```
FREE CODE CAMP
FREE PIZZA!
FREE LOVE?
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
```

-----



## 4. Telephone Number Validator

[Learn JavaScript Algorithms and Data Structures Projects: Telephone Number Validator | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)

Return `true` if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

```js
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```

For this challenge you will be presented with a string such as `800-692-7753` or `8oo-six427676;laskdjf`. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is `1`. Return `true` if the string is a valid US phone number; otherwise return `false`.

> `telephoneCheck("555-555-5555")` should return a boolean.
> `telephoneCheck("1 555-555-5555")` should return true.
> `telephoneCheck("1 (555) 555-5555")` should return true.
> `telephoneCheck("5555555555")` should return true.
> `telephoneCheck("555-555-5555")` should return true.
> `telephoneCheck("(555)555-5555")` should return true.
> `telephoneCheck("1(555)555-5555")` should return true.
> `telephoneCheck("555-5555")` should return false.
> `telephoneCheck("5555555")` should return false.
> `telephoneCheck("1 555)555-5555")` should return false.
> `telephoneCheck("1 555 555 5555")` should return true.
> `telephoneCheck("1 456 789 4444")` should return true.
> `telephoneCheck("123**&!!asdf#")` should return false.
> `telephoneCheck("55555555")` should return false.
> `telephoneCheck("(6054756961)")` should return false.
> `telephoneCheck("2 (757) 622-7382")` should return false.
> `telephoneCheck("0 (757) 622-7382")` should return false.
> `telephoneCheck("-1 (757) 622-7382")` should return false.
> `telephoneCheck("2 757 622-7382")` should return false.
> `telephoneCheck("10 (757) 622-7382")` should return false.
> `telephoneCheck("27576227382")` should return false.
> `telephoneCheck("(275)76227382")` should return false.
> `telephoneCheck("2(757)6227382")` should return false.
> `telephoneCheck("2(757)622-7382")` should return false.
> `telephoneCheck("555)-555-5555")` should return false.
> `telephoneCheck("(555-555-5555")` should return false.
> `telephoneCheck("(555)5(55?)-5555")` should return false.

```js
function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("55555555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("2 757 622-7382"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("(275)76227382"));
console.log(telephoneCheck("2(757)6227382"));
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(555)5(55?)-5555"));
```

```
true
true
true
true
true
true
false
false
false
true
true
false
false
false
false
false
false
false
false
false
false
false
false
false
false
false
```

-----



## 5. Cash Register

[Learn JavaScript Algorithms and Data Structures Projects: Cash Register | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.
`cid` is a 2D array listing available currency.
The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.
Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.
Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

| Currency Unit       | Amount             |
| ------------------- | ------------------ |
| Penny               | $0.01 (PENNY)      |
| Nickel              | $0.05 (NICKEL)     |
| Dime                | $0.1 (DIME)        |
| Quarter             | $0.25 (QUARTER)    |
| Dollar              | $1 (ONE)           |
| Five Dollars        | $5 (FIVE)          |
| Ten Dollars         | $10 (TEN)          |
| Twenty Dollars      | $20 (TWENTY)       |
| One-hundred Dollars | $100 (ONE HUNDRED) |

See below for an example of a cash-in-drawer array:

```js
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```

> `checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` should return an object.
> `checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` should return `{status: "OPEN", change: [["QUARTER", 0.5]]}`.
> `checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` should return `{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}`.
> `checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` should return `{status: "INSUFFICIENT_FUNDS", change: []}`.
> `checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` should return `{status: "INSUFFICIENT_FUNDS", change: []}`.
> `checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` should return `{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}`.

```js
let denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  let output = { status: null, change: [] };
  let change = cash - price;
  let register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  let change_arr = denom.reduce(function(acc, curr) {
    let value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
```

```
{status: 'OPEN', change: [['QUARTER', 0.5]]}
{status: 'OPEN', change: [['TWENTY', 60], ['TEN', 20], ['FIVE', 15], ['ONE', 1], ['QUARTER', 0.5], ['DIME', 0.2], ['PENNY', 0.04]]}
{status: 'INSUFFICIENT_FUNDS', change: []}
{status: 'INSUFFICIENT_FUNDS', change: []}
{status: 'CLOSED', change: [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0],
['TWENTY', 0], ['ONE HUNDRED', 0]]}
```

