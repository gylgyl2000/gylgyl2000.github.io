---
id: Codewars-javascript_basic
title: Training JavaScript
---

## #1 Create your first JS function helloWorld

[Train: Training JS #1: create your first JS function and print "Helloworld!" | Codewars](https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/train/javascript)

In JavaScript, your code is running in a function, let us step by step complete your first JS function.
Look at this example :

```js
  --------keyword "function"
  |       ----your function name  
  |       |    ---if needed, some arguments will appear in brackets
  |       |    |
function myfunc(){  ---------your function code will starting with "{"
  //you should type your code here
}----------------------------ending with "}"
```

If we want to print some to the screen, maybe we can use `Document.write()` in the web, or use `alert()` pop your message, but Codewars did not support these methods, we should use `console.log()` in your function. see this example :

```js
function printWordToScreen(){
  var somewords="This is an example."
  console.log(somewords)
}
```

If we run this function, `This is an example`. will be seen on the screen. As you see, `console.log()` is an useful method help your work, you will become more and more like it.

**Task**
Please refer to two examples above and write your first JS function.
**Mission 1 :** use keyword `function` to define your function, function name should be `helloWorld` (don't forget the `()` and `{}`).
**Mission 2 :** use keyword `var` to define a variable `str`, value of `str` should be a string : `"Hello World!"` (don't forget the `=`).
**Mission 3 :** type the `console.log()` in the next line (don't forget to put the `str` in the brackets).

```js
function helloWorld() {
   var str = "Hello World!";
   console.log(str);
};
```

```js
// Sample tests
Test.expect(helloWorld, "function helloWorld is not defined")
helloWorld();
```

------



## #2 Basic data types--Number

[Train: Training JS #2: Basic data types--Number | Codewars](https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript)

In JavaScript, Number is one of basic data types. It can be positive : `1, 2, 3`, negative : `-1, -100` , integer : `123, 456`, decimal : `3.1415926, -8.88` etc.

Numbers can use operators such as `+ - * / %`

**Task**
I've written five function `equal1, equal2, equal3, equal4, equal5`, defines six global variables `v1 v2 v3 v4 v5 v6`, every function has two local variables `a, b`, please set the appropriate value for the two variables (select from v1--v6), making these function return value equal to 100. The function `equal1` is completed, please refer to this example  to complete the following functions.

```js
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v3   //set number value to a
  var b=v1   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v6   //set number value to a
  var b=v3   //set number value to b
  return a%b;
}
```

```js
// Sample tests
Test.assertSimilar(equal1(),100,"value of a+b is not equal to 100");
Test.assertSimilar(equal2(),100,"value of a-b is not equal to 100");
Test.assertSimilar(equal3(),100,"value of a*b is not equal to 100");
Test.assertSimilar(equal4(),100,"value of a/b is not equal to 100");
Test.assertSimilar(equal5(),100,"value of a%b is not equal to 100");
```

------



## #3 Basic data types--String

[Train: Training JS #3: Basic data types--String | Codewars](https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript)

In JavaScript, String is one of basic data types. Use `""` or `''` to declare a string variable. It can be letters : `a, b, c, A, B, C`, numbers : `1 2 3...`, Various symbol : `@ # $ % ^ & *`, Control symbol : `\n ,\t` etc.

String can use operators `+`, Connect two or more strings together.

**Task**
**Mission 1 :** I've create three functions, and defined some global variables, please select some variables that can make up the name of the function, and return them (Please note the uppercase and lowercase letters are different).
**Mission 2 :** After mission 1 finished. you should click "Submit" to see my three questions, and write the answer in function `answer1, answer2, answer3`

```js
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}
```

```js
// Sample test
Test.assertSimilar(Dad(),"Dad");
Test.assertSimilar(Bee(),"Bee");
Test.assertSimilar(banana(),"banana");
```
```js
// question1
// John's iron axe fell into the river. He cried sadly by the river. Then a monster came out of the water, with a golden axe in his hand. He asked John: is this golden axe yours?

//question2
// John replied that it was not his axe. The monster took out a silver axe. He asked John: is this silver axe yours?

// question3
// John replied that it was not his axe. The monster took out a iron axe. He asked John: is this iron axe yours?

// John said happily: This is my iron axe!!! The monster smiled and said to John, "you are an honest boy!"
```

------



## #4 Basic data types--Array

[Train: Training JS #4: Basic data types--Array | Codewars](https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript)

In JavaScript, Array is one of basic data types. Define an empty array can use `var arr=new Array()` or `var arr=[]`
Array has an attribute : `length`, if there is an array named `arr`, using `arr.length` to know how many elements are contained in the array.
Each element in the array has an `index`, use `arr[index]` to get the value of element.
`index` always start from 0, so the first element of array is `arr[0]`, the last element of array is `arr[arr.length-1]`.
If we want to add new elements to the array, you can use the array method : `push()`. It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method : `pop()`.
For example :

```javascript
var arr=[1,2,3];     //define an array arr contains elements 1 2 3
arr.push(4);         //add element 4 to arr
console.log(arr);     //[1,2,3,4]
arr.pop();           //remove the last element from arr
console.log(arr);     //[1,2,3]
```

**Task**
I've written five functions, each function receives a parameter : arr (an array), you should coding something with arr.

```js
1. getLength(arr)    should return length of arr
2. getFirst(arr)     should return the first element of arr
3. getLast(arr)      should return the last element of arr
4. pushElement(arr)  should push an element to arr, and then return arr
5. popElement(arr)   should pop an element from arr, and then return arr
```

```js
function getLength(arr){
  //return length of arr
  return arr.length;
};
function getFirst(arr){
  //return the first element of arr
  return arr[0];
};
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1];
};
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  return arr;
};
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
};
```

```js
// Sample tests
Test.assertSimilar(getLength([1,2,3]),3);
Test.assertSimilar(getFirst([1,2,3]),1);
Test.assertSimilar(getLast([1,2,3]),3);
Test.assertSimilar(pushElement([1,2,3]).length,4);
Test.assertSimilar(popElement([1,2,3]).length,2);
```

------



## #5 Basic data types--Object

[Train: Training JS #5: Basic data types--Object | Codewars](https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript)

In JavaScript, Object is one of basic data types. Define an Object can use `var obj=new Object()` or `var obj={}`
You can define the object attributes during initialization, like this :

```js
var animal={name:"dog"}
```

you can also set/get some properties after the object definition, like this :

```js
var animal={}
animal.name="dog"  (or animal["name"]="dog")
```

**Task**
Give you a function ```animal```, accept 1 parameter :```obj``` like this :

```js
{name:"dog",legs:4,color:"white"}
```

and return a string like this :

```js
"This white dog has 4 legs."
```

```js
function animal(obj){
  return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
}
//////////
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
```

```js
// Sample tests
Test.assertSimilar(animal({name:"dog",legs:4,color:"white"}),"This white dog has 4 legs.");
Test.assertSimilar(animal({name:"cock",legs:2,color:"red"}),"This red cock has 2 legs.");
Test.assertSimilar(animal({name:"rabbit",legs:4,color:"gray"}),"This gray rabbit has 4 legs.");
```
------



## #6 Basic data types--Boolean and conditional statements if..else

[Train: Training JS #6: Basic data types--Boolean and conditional statements if..else | Codewars](https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript)

In JavaScript, Boolean object only has two value, `true` or `false`. Use `===, ==, >, <, >=, <=` between two variables (or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators :`&&, ||` or some bitwise operators :`&, |, !, ^`

Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example :

```js
var arr=[];
...
...
......
if (arr.length) return "arr has elements";
else            return "arr is empty";
```

You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. It means, if arr.length value is 0, convert value to `false`, if arr.length value is not 0, convert value to `true`.
These values are converted to `false` in the conditional statement :

```js
0, -0, "", null, undefined, NaN
```

**Task**
Coding in function ```trueOrFalse```, function accept 1  parameters :```val```, try to use the conditional statement if...else, if ```val``` value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

```js
function trueOrFalse(val){
  if (val==false)    return "false";             
  else     return "true";
}
```

```js
function trueOrFalse(val){
  if (val == false || val == null || val == undefined)
    return "false";             
  else
    return "true";
}
```

```js
//test for equations and inequalities
var a=1,b=2,c=1;
Test.assertSimilar(trueOrFalse(a>b),"false");
Test.assertSimilar(trueOrFalse(a===b),"false");
Test.assertSimilar(trueOrFalse(a<b),"true");
Test.assertSimilar(trueOrFalse(a!==b),"true");
Test.assertSimilar(trueOrFalse(b>c),"true");
Test.assertSimilar(trueOrFalse(b===c),"false");
Test.assertSimilar(trueOrFalse(b<c),"false");
Test.assertSimilar(trueOrFalse(b!==c),"true");
Test.assertSimilar(trueOrFalse(a===c),"true");
Test.assertSimilar(trueOrFalse(a!==c),"false");
//test for logical operators and bitwise operators
var t=true,f=false;
Test.assertSimilar(trueOrFalse(t&&f),"false");
Test.assertSimilar(trueOrFalse(f&&f),"false");
Test.assertSimilar(trueOrFalse(t&&t),"true");
Test.assertSimilar(trueOrFalse(t||f),"true");
Test.assertSimilar(trueOrFalse(t||t),"true");
Test.assertSimilar(trueOrFalse(f||f),"false");
Test.assertSimilar(trueOrFalse(t&f),"false");
Test.assertSimilar(trueOrFalse(t&t),"true");
Test.assertSimilar(trueOrFalse(f&f),"false");
Test.assertSimilar(trueOrFalse(t|f),"true");
Test.assertSimilar(trueOrFalse(t|t),"true");
Test.assertSimilar(trueOrFalse(f|f),"false");
Test.assertSimilar(trueOrFalse(!t),"false");
Test.assertSimilar(trueOrFalse(!f),"true");
Test.assertSimilar(trueOrFalse(t^f),"true");
Test.assertSimilar(trueOrFalse(t^t),"false");
Test.assertSimilar(trueOrFalse(f^f),"false");
//test for implicit conversion 
Test.assertSimilar(trueOrFalse(true),"true");
Test.assertSimilar(trueOrFalse(123),"true");
Test.assertSimilar(trueOrFalse("123"),"true");
Test.assertSimilar(trueOrFalse(["123"]),"true");
Test.assertSimilar(trueOrFalse("false"),"true");
Test.assertSimilar(trueOrFalse(false),"false");
Test.assertSimilar(trueOrFalse(0),"false");
Test.assertSimilar(trueOrFalse(""),"false");
Test.assertSimilar(trueOrFalse(null),"false");
Test.assertSimilar(trueOrFalse([].length),"false");
Test.assertSimilar(trueOrFalse(undefined),"false");
```

------



## #7 if..else and ternary operator

[Train: Training JS #7: if..else and ternary operator | Codewars](https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript)

In JavaScript, `if..else` is the most basic condition statement, it consists of three parts:`condition, statement1, statement2`, like this :

```javascript
if (condition) statementa
else           statementb
```

It means that if the condition is true, then execute the statementa, otherwise execute the statementb. If the statementa or statementb more than one line, you need to add `{` and `}` at the head and tail of statement in JS, to keep the same indentation on Python and to put a `end` in Ruby where it indeed ends.
An example, if we want to judge whether a number is odd or even, we can write code like this :

```javascript
function oddEven(n){
  if (n%2==1) return "odd number";
  else        return "even number";
}
```

If there is more than one condition to judge, we can use the compound if...else statement. an example :

```javascript
function oldYoung(age){
  if (age<16)      return "children"
  else if (age<50) return "young man"   //use "else if" if needed
  else             return "old man"
}
```

This function returns a different value depending on the parameter age.
Looks very complicated ? Well, JS and Ruby also support the `ternary operator` and Python has something similar too :

```javascript
condition ? statementa : statementb
```

Condition and statement separated by "?", different statement separated by " : " in both Ruby and JS ; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator :

```javascript
function oddEven(n){
  return n%2==1 ? "odd number" : "even number";
}
function oldYoung(age){
  return age<16 ? "children" : age<50 ? "young man" : "old man";
}
```

**Task**
Complete function `saleHotdogs`/`SaleHotDogs`, function accept 1  parameters :`n`, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

```js
+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|      n<5      |    100      |
+---------------+-------------+
| n>=5 and n<10 |     95      |
+---------------+-------------+
|     n>=10     |     90      |
+---------------+-------------+
```

You can use if..else or ternary operator to complete it.

```js
function saleHotdogs(n){
  return n<5 ? n*100 : n<10 ? n*95 : n*90;
}
```

```js
// Sample tests
Test.assertSimilar(saleHotdogs(1),100);
Test.assertSimilar(saleHotdogs(4),400);
Test.assertSimilar(saleHotdogs(5),475);
Test.assertSimilar(saleHotdogs(9),855);
Test.assertSimilar(saleHotdogs(10),900);
Test.assertSimilar(saleHotdogs(100),9000);
```

------



## #8 Conditional statement--switch

[Kata Stats: Training JS #8: Conditional statement--switch | Codewars](https://www.codewars.com/kata/572059afc2f4612825000d8a)

In JavaScript, `switch` is another condition statement.

```javascript
switch(n){
  case 1:  
    //code block
    break;
  case 2:
    //code block
    break;
  case ...:
    //code block
    break;

  default:       //default is optional, sometimes it can be omitted
    //code block
                 //The last one does not need break
}
```

`switch` is the keyword, `n` is the variable to switch, `case 1` means when `n===1`, following the `":"`, you can add some executable statement, with keyword `break` as termination (if you forgot "break", code will running with case 2, case 3... until a "break" appear),`default` like `else` in the if..else statement.
In some cases, use the `switch` statement to look more clearly than the `if..else` statement.
For example, we can write a function to calculate what day is today, like this :

```javascript
function whatDayIsToday(n){
  //getDay() is a methods of Date(), we will learn them later.
  var day=new Date().getDay(),x; 
  switch (day){
    case 0:
      x="Today it's Sunday";
      break;
    case 1:
      x="Today it's Monday";
      break;
    case 2:
      x="Today it's Tuesday";
      break;
    case 3:
      x="Today it's Wednesday";
      break;
    case 4:
      x="Today it's Thursday";
      break;
    case 5:
      x="Today it's Friday";
      break;
    case 6:
      x="Today it's Saturday";
      break;
  }
  return x;
}
```

**Task**
Complete function `howManydays`, function accept 1 parameter :`month`, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month (month is always greater than 0, less than or equal to 12).

```
+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|    4,6,9,11   |     30      |
+---------------+-------------+
|       2       |     28      |  (Do not consider the leap year)
+---------------+-------------+
```

Little tips : Use `default` for most of the cases can reduce your work.

```js
function howManydays(month){
  var days;
  switch (){
  
  }
  return days;
}
```

```js
// sample tests
Test.assertSimilar(howManydays(1),31);
Test.assertSimilar(howManydays(2),28);
Test.assertSimilar(howManydays(3),31);
Test.assertSimilar(howManydays(4),30);
Test.assertSimilar(howManydays(12),31);
```

```js
function howManydays(month){
  var days;
  switch (month){
    case 2:
      days=28;
      break;
    case 4:
      days=30;
      break;
    case 6:
      days=30;
      break;
    case 9:
      days=30;
      break;
    case 11:
      days=30;
      break;
    
    default:
      days=31;
  }
  return days;
}
```

-----



## #9 loop statement--while and do..while

[Solutions: Training JS #9: loop statement --while and do..while | Codewars](https://www.codewars.com/kata/57216d4bcdd71175d6000560/solutions/javascript/me/best_practice)

If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this :

```javascript
function sum1_10(){
  return 1+2+3+4+5+6+7+8+9+10;
}
sum1_10=()->
  return 1+2+3+4+5+6+7+8+9+10;
```

Wow~~, looks very cool ! But if we need to calculate the cumulative value from 1 to 100, the code becomes :

```javascript
function sum1_100(){
  return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
  +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
  +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
  +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
}
sum1_100=()->
  return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
  +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
  +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
  +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
```

Do you feel a bit tired? We can use a loop statement do it :

```javascript
function sum1_100(){
  var sum=0,num=1;    //Initialize two variables sum and num
  while (num<=100){   //Determine the expression in brackets, while true, 
                      //run the code block one time, while false, break the loop
    sum=sum+num;      //Each time num will be added to the current value of sum
                      //It can be simplified as:  sum+=num
    num=num+1;        //Each time the value of num increases by 1
                      //It can be simplified as:  num++
  }
  return sum;         //return the final cumulative value
}
sum1_100=()->
  var sum=0,num=1;    //Initialize two variables sum and num
  sum and num
  while (num<=100)   //Determine the expression in brackets, while true, 
                      //run the code block one time, while false, break the loop
    sum=sum+num;      //Each time sum will add the current value of the num
                      //It can be simplified as:  sum+=num
    num=num+1;        //Each time the value of num increases by 1
                      //It can be simplified as:  num++

  return sum;         //return the final cumulative value
```

The `do..while` is a variant of `while`. The example above can be written like this :

```javascript
function sum1_100(){
  var sum=0,num=1;
  do{
    sum+=num;
    num++;
  }while (num<=100)
  return sum;
}
sum1_100=()->
  var sum=0,num=1;
  do
    sum+=num;
    num++;
  while (num<=100)
  return sum;
```

The difference is, `while` judges the condition before perform code execution, `do..while` judges the condition after code run one time.

Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions), otherwise it will turn into an infinite loop.

Ok, lesson is over. Let us do some task with `while`.

**Task**
Coding in function ```padIt```, function accept 2  parameters :

1. `str`,  it's a string representing the string to pad, we need pad some ```"*"``` at leftside or rightside of `str`

2. `n`, it's a number, how many times to pad the string.

**Behaviour**
You need to write a loop statement within the function that loops `n` times. Each time through the loop it will add one `*` to `str`, alternating on which side it is padded : the first time will add a `*` to the left side of `str`, the second time will add a `*` to the right side, and so on.

Finally, return the padded string.

```js
const padIt = (str, n) => {
  let result = str
  let i = 0

  while (i < n) {
    if (i % 2 === 0) {
      result = `*${result}`
    } else {
      result = `${result}*`
    }

    i += 1
  }

  return result
}
```

-----



## #10 loop statement --for

[Kata Stats: Training JS #10: loop statement --for | Codewars](https://www.codewars.com/kata/5721a78c283129e416000999)

`for` loop is one of the most frequently used loop statements in JS. It works like `while` loop. In lesson 9, we wrote a while loop :

```javascript
function sum1_100(){
  var sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}
```

We can rewrite it by using for loop, like this :

```javascript
function sum1_100(){
  for (var sum=0,num=1;num<=100;num++){
    sum+=num;
  }
  return sum;
}
```

As you see, there are three parts in the brackets, separated by `";"`. The first part is the initialization variable, this part will run before the loop starts. The second part is the conditional expressions, check the expression before the start of each time loops, when the value of the expression is false, loop will be terminated. The third part is the statement about increasing and decreasing variables, they will run after the code block.

For the example above, the running order of the code is :

```javascript
                              <--- back to part 2
                  -------------------------------------------
                  |                 true                    |
var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
                                |  
                           false|
                       loop terminated
```

When you need to traverse an array, you can use the for loop. look this example :

```javascript
function displayElements(array){
  for (var i=0;i<array.length;i++){
    console.log(array[i]);
  }
}
```

This function will display every element of array on your screen.

Ok, lesson is over, let's us do some task with `for`.

**Task**
Coding in function ```pickIt```, function accept 1 parameter :```arr```, it's a number array, we need traverse ```arr``` by using ```for``` loop, if element is odd number, push it to array ```odd```, if it's a even number, push it to array ```even```.

I've defined two array ```odd``` and ```even``` in the function, and also wrote the return statement. ```your work is write a for loop.```

If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).

```js
function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for (var i=0; i<arr.length; i++) {
    if (arr[i]%2 != 0)
      odd.push(arr[i]);
    else
      even.push(arr[i]);
  };
  return [odd,even];
}
```

```js
// Sasmple tests
    Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
    Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
    Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
    Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
    Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
    Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
```

-----



## #11 loop statement --break,continue

[Kata Stats: Training JS #11: loop statement --break,continue | Codewars](https://www.codewars.com/kata/5721c189cdd71194c1000b9b/javascript)

We have seen `break` in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example :

```javascript
function findFirstOddNumber(arr){
  var result;
  for (var i=0;i<arr.length;i++){
    if (arr[i]%2==1){
      result=arr[i];
      break;
    }
  }
  return result;
}
```

In this example, for loop traverse the array arr. when the first odd number found, `break` statement will jump out the for loop.
In the loop statement, we can use `continue` skipping some code. for example, the following code ignores negative values :

```javascript
function dontDisplayNegative(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]<0) continue;   
    console.log(arr[i])
  }
}
```

In this example, `console.log(arr[i])` is never executed for negative element. thanks to `continue`.
Through the use of `break` and `continue`, you can make the loop statement more flexible and convenient.
Ok, lesson is over. let's us do some task with `break` and `continue`.

**Task**
Coding in function ```grabDoll```. function accept 1 parameter :```dolls```. it's a string array, a list of some dolls.
You need traverse ```dolls``` by using ```for``` loop. If element is  "Hello Kitty" or "Barbie doll", you should push it to a ```bag```(bag is an array, I've defined in the function); if it's other strings, we should use ```continue``` skip it. 
When the ```bag``` has three element, ```bag``` is full. You should use ```break``` jump out the loop ; If ```bag``` is not full, you should traverse ```dolls``` until the last element. 
Return the ```bag``` after for loop finished.
You should use ```for```, ```break``` and ```continue``` in your code. otherwise, your solution may not pass this kata.
If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).

```js
function grabDoll(dolls){
  var bag=[];
  //coding here
  for (let i=0; i<dolls.length; i++) {
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
      bag.push(dolls[i]);
    }
    if (bag.length<3) continue;
    if (bag.length=3) break;
  }
  return bag;
}
```

```js
// Sample test
    Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]),["Hello Kitty"]);
    Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);
    Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);
    Test.assertSimilar(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]),["Barbie doll","Hello Kitty","Hello Kitty"]);

```

-----



## #12 loop statement --for..in and for..of

[Kata Stats: Training JS #12: loop statement --for..in and for..of | Codewars](https://www.codewars.com/kata/5722b3f0bd5583cf44001000)

In [lesson #11](http://www.codewars.com/kata/5721c189cdd71194c1000b9b), we learned that `for` loop can traverse the array. If we want to traverse an object, we can use the variant of the for : `for..in`, it can traverse all the keys of the object. an example :

```javascript
function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);
```

Code results :

```javascript
keys of ob:
item1
item2
item3
item4
values of ob:
This
is
an
example
```

`for..in` can also be used in arrays, at this time the array is treated as an object. Modify the code above, we can see :

```javascript
function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var arr=["one","two","three"];
console.log("keys of arr:")
showObjectKeys(arr);
console.log("values of arr:")
showObjectValues(arr);
```

Code results :

```javascript
keys of arr:
0
1
2
values of arr:
one
two
three
```

We can see, keys is the index of the array elements. Need attention : When using `for..in` with an array, key(index) is always a string, not a number. In the example above, keys is "0", "1" and "2", we can't see the quotes because console.log() doesn't show it. 

Although `for..in` can traverse the array, but we do not recommend the use of it. Because it has a flaw, in some cases, it may not be in accordance with the order of the array elements to traverse the array. So we recommend you use another variant :`for..of`(New member of ES6), it can traverse all the values of the array, if you don't care about its index. In the example above, function showObjectValues() can be modified like this :

```javascript
function showArrayValues(arr){
  for (var value of arr){
    console.log(value);
  }
}
```

Ok, lesson is over, let's us do some task with `for..in`.

**Task**
Coding in function ```giveMeFive```, function accept 1 parameter :```obj```, it's an object.
You need to the traverse the `obj`, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.
Return the ```five``` after works finished.
You should use ```for..in``` in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)

```js
function giveMeFive(obj){
  //coding here
  var takeFive = [];
  for (var key in obj){
    if (key.length === 5) {
      takeFive.push(key);
    }
    if (obj[key].length === 5) {
      takeFive.push(obj[key]);
    }
  }
  return takeFive;
}
```

```js
// Sample tests
    Test.assertSimilar(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
    Test.assertSimilar(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
    Test.assertSimilar(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);
```

-----



## #13 Number object and  its properties

[Kata Stats: Training JS #13: Number object and its properties | Codewars](https://www.codewars.com/kata/5722fd3ab7162a3a4500031f)

The number is a basic data type in javascript. javascript also supports `Number objects`. The object is the original value of the package object. When necessary, JavaScript automatically converts between the original data and the objects. You can explicitly create a Number object with the constructor `Number()`. Although it is not necessary to do so. Usage :

```javascript
var num=new Number(value);
```

Parameter `value` is the value of the Number object to be created or the value to be converted into a numeric value.
Constructor `Number()` can be used without operator `new` and directly as a transformation function to use. In this way, when the Number is called, it transforms itself into a number and then returns the converted value (or NaN).  Usage :

```javascript
var num=Number(value);
```

Number object has two generic object properties : `constructor` and `prototype`. all the objects in JS have these two properties. they are two very important attributes. because of their importance and complexity, we will learn it in the future.
In addition to the above two, the Number objects have five attributes (or called constant) :

1. `MAX_VALUE`: The maximum number that can be expressed in JS. Usage :`Number.MAX_VALUE`. Its approximate value is `1.7976931348623157e+308`

2. `MIN_VALUE`: The minimum number that can be expressed in JS (Close to 0, but not negative). Usage :`Number.MIN_VALUE`. Its approximate value is `5e-324`

3. `NaN`: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) or the result of the method are not numbers, return NaN. Usage :`Number.NaN`. It can be simplified and replaced with `NaN`.
   Please note : the results of comparison between NaN and other values are always not equal (including its own). Therefore, can not be compared with `Number.NaN` to detect a value is not a number but can only call `isNaN()` to compare. 

4. `NEGATIVE_INFINITY`:    The value represents the negative infinity. Usage :`Number.NEGATIVE_INFINITY`. When a number is generated in an arithmetic operation or function and it smaller than -Number.MAX_VALUE return this value. It can be simplified and replaced with `-Infinity`.

5. `POSITIVE_INFINITY`: The value represents the positive infinity. Usage :`Number.POSITIVE_INFINITY`. When a number is generated in an arithmetic operation or function and it larger than Number.MAX_VALUE return this value. It can be simplified and replaced with `Infinity`.

Ok, lesson is over. let's us do some task with `Number objects`.

**Task**
Coding in function ```whatNumberIsIt```. function accept 1 parameter :```n```. it's a number.
To judge the number ```n```. If n is one of the above five constants, return one of these string :

```
"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
```

Other values should return ```"Input number is xxx"```. xxx means this number.
For example :

```
whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
```
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

```js
function whatNumberIsIt(n){
  //coding here
  if (n == Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
    }
  if (n == Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  }
  if (isNaN(n)) {
    return "Input number is Number.NaN";
  }
  if (n == Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  }
  if (n == Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  }
  if (n == n) {
    return "Input number is " + n;
  }
  if (n == 1 / 0) {
    return "Input number is Number.POSITIVE_INFINITY";
  }
}

//////////

function whatNumberIsIt(n){
  switch (true) {
    case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    case (isNaN(n)): return "Input number is Number.NaN";
    default: return "Input number is " + n;
  }
}
```

```js
// Sample tests
    Test.assertSimilar(whatNumberIsIt(1/0),"Input number is Number.POSITIVE_INFINITY");
    Test.assertSimilar(whatNumberIsIt(100),"Input number is 100");
    Test.assertSimilar(whatNumberIsIt(1.7976931348623157e+308),"Input number is Number.MAX_VALUE");
    Test.assertSimilar(whatNumberIsIt(5e-324),"Input number is Number.MIN_VALUE");
    Test.assertSimilar(whatNumberIsIt(-Number.MAX_VALUE*2),"Input number is Number.NEGATIVE_INFINITY");
    Test.assertSimilar(whatNumberIsIt(NaN),"Input number is Number.NaN");
    Test.assertSimilar(whatNumberIsIt(Infinity+1),"Input number is Number.POSITIVE_INFINITY");
```

-----



## #14 Methods of Number object--toString() and toLocaleString()

[Train: Training JS #14: Methods of Number object--toString() and toLocaleString() | Codewars](https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript)

This time we learn about two useful methods of Number objects : `toString()` and `toLocaleString()`. the basic usage of the two methods is to convert a number into a string. look at this :

```javascript
var num=111;
var a=num.toString(), 
    b=num.toLocaleString(), 
    c=num+""
console.log([a,b,c])   //put them to an array, we can see the quotes
//output: [ '111', '111', '111' ]
```

We can see, if you just want to translate a number into a string representation, in the general case the results obtained in these ways is the same. I love to use the last one, cause I'm lazy ;-)

But these two methods have other uses as well. 

When used `toLocaleString()` converted a number to a string. the results obtained are in the order of the local numeric format (I don't have this experience. it is always the same as toString() in my here).

And toString() of Number object has a more special usage : According to the base output different strings. 

```javascript
NumberObject.toString(radix)
```

`radix` is optional parameter. if ignored it, the output will be the default decimal. If not, like this :

```javascript
var num=111;
var a=num.toString(2), 
    b=num.toString(8), 
    c=num.toString(16), 
console.log([a,b,c])
//output: [ '1101111', '157', '6f' ]
```

They are converted to binary, octal and hexadecimal.

Ok, lesson is over. let's us do some task with `Number .toString()`.

**Task**
Coding in function ```colorOf```. function accept 3 parameter :```r``` ```g``` ```b```. It means value of color red green and blue. the value range is 0-255.
Use ```toString(16)``` Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
the color code should starting with "#". and then use 2 characters per color.
for example :

```js
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"

```

That's all of your work. My work is print your color code on your screen.

```js
function colorOf(r,g,b) {
  //coding here
  if (r < 10) {
    r = "0" + r
  };
  if (g < 10) {
    g = "0" + g
  };
  if (b < 10) {
    b = "0" + b
  };
  let R = r.toString(16);
  if (R.length < 2) {
    R = "0" + R
  };
  let G = g.toString(16);
  if (G.length < 2) {
    G = "0" + G
  };
  let B = b.toString(16);
  if (B.length < 2) {
    B = "0" + B
  };
  return "#" + R + G + B
  
  ///////////
 
function colorOf(r,g,b){
  r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
  g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
  b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);
  
  return '#' + r + g + b;
}
```

```js
// Sample tests
	Test.assertSimilar(colorOf(255,0,0), "#ff0000");
    showColor("#ff0000")
    Test.assertSimilar(colorOf(0,111,0), "#006f00");
    showColor("#006f00")
    Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
    showColor("#010203")
```

-----



## #15 Methods of Number object--toFixed(), toExponential() and toPrecision()

[Train: Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision() | Codewars](https://www.codewars.com/kata/57256064856584bc47000611/train/javascript)

This time we learn about three useful methods of Number objects: `toFixed()`, `toExponential()` and `toPrecision()`. their purpose is to convert numbers into strings and the difference between them and toString() is :

```js
1. NumberObject.toFixed(n)
```

toFixed() accepts 1 parameter n, returns a string representation of NumberObject. It does not use the exponential notation. after the decimal point has fixed n digit. If necessary, the number will be rounded or use "0" to make it reach the specified length. If number is greater than le+21, the method only calls NumberObject.toString() and returns a string that is represented by an exponential notation.

```js
2. NumberObject.toExponential(n) 
```

toExponential() accepts 1 parameter n, returns NumberObject string representation, using the exponential count method. that is, there is one digit before the decimal point and n digits after the decimal point. The decimal part of the number is rounded. when necessary, with 0 to make up the specified length.

```js
3. NumberObject.toPrecision(n)
```

toPrecision(n) accepts 1 parameter n, returns a string representation of NumberObject, contains n valid numbers. If num is large enough To include all the integer part of the NumberObject, then the returned string will use point counting method. otherwise using the exponential counting method.

Simple introduction is abstract, not easy to understand. Here we use examples to explain the difference between them :

```javascript
//example 1
var num=111;
var a=num.toFixed(), 
    b=num.toExponential(), 
    c=num.toPrecision()
console.log([a,b,c])   //put them to an array, we can see the quotes
//output: [ '111', '1.11e+2', '111' ]
```

We can see, if the parameter n is omitted, `a` and `c` return a string with the number of original state; `b` is returned a string using the exponential counting method, the string contains the decimal maximum possible.

```javascript
//example 2
var num=111.11;
var a=num.toFixed(1), 
    b=num.toExponential(1), 
    c=num.toPrecision(1)
console.log([a,b,c]) 
//output: [ '111.1', '1.1e+2', '1e+2' ]
```

We can see, `a` returns a string with 1 decimal places, using fixed point counting method; `b` returns a string with 1 integer and 1 decimal places, using the exponential count method; `c` also uses the exponential count method, but returns a string with 1 integer.

```javascript
//example 3
var num=111.11;
var a=num.toFixed(6), 
    b=num.toExponential(6), 
    c=num.toPrecision(6)
console.log([a,b,c]) 
//output: [ '111.110000', '1.111100e+2', '111.110' ]
```

We can see, `a` returns a string with 6 decimal places(make up with "0"), using fixed point counting method; `b` returns a string with 1 integer and 6 decimal places(make up with "0"), using the exponential count method; `c` returns a string with 3 integer and 3 decimal places(make up with "0"), returns the integer and decimal numbers in the string to a total of 6 digits.

In a word, parameter n of toFixed() and toExponential() are used for digital fractional parts; parameter n of toPrecision() is used for the entire number. We can choose to use them according to different needs.

Sometimes, it's not our ultimate goal to use these methods to convert the number into a string. We need to use the value after the change. What should we do?

We need to learn two (or three) very useful global methods:`parseInt()` and `parseFloat()`. They can help you get the string back into the number. see the example learn to use them :

```javascript
//example 4
var num=111.1234;
var s=num.toFixed(2)   //s=="111.12"
var a=parseInt(s),
    b=parseFloat(s),
    c= +s
console.log([a,b,c]) 
//output: [ 111, 111.12, 111.12 ]
```

We can see, use `parseInt(s)` can convert s to an integer ; use `parseFloat(s)` can convert s to a decimal ; The `'+'` is a simplified form of the `parseFloat()`(when it is used in front of a string). 

Ok, lesson is over. let's us do some task.

**Task**
Coding in function ```howManySmaller```, function accept 2 parameter:```arr``` and ```n```. ```arr``` is a decimal array. ```n``` is a decimal. 
The first mission : let all elements in the array keep two decimal places (No need to convert number n). 
The second mission : Traversal arr, count the number of the element which smaller than n and return it.
For example :

```js
howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
```

```js
function howManySmaller(arr,n){
  //coding here..
  var howMany=0;
  for (var i=0;i<arr.length;i++) {
    arr[i] = arr[i].toFixed(2);
    if (arr[i] < n){
      howMany++
    }
  }
  return howMany;
}
```

-----



## #16 Methods of String object--slice(), substring() and substr()

[Train: Training JS #16: Methods of String object--slice(), substring() and substr() | Codewars](https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript)

From this lesson, we begin to learn about String objects. 

First of all, we have a look at the attributes of String : `length`. Use `StringObject.length` to get the length of a string, like this :

```javascript
var str="dsfsdwesdfsadfwerfsdfsdfsdfsdfsdf";
console.log(str.length)  //output: 33
```

Secondly, a string can be like an array. each character in a string has an index. We can use the index to access this character. like this :

```javascript
var str="codewars";
for (var i=0;i<str.length;i++) console.log(str[i])
//output:
c
o
d
e
w
a
r
s
```

String Object has a lot of methods, many of these methods are used for web page text style and color modification. These methods are rarely used in programming and some of they are deprecated now. So we will omit the learning of these methods. These methods are :

```bash
anchor()    Create HTML anchor.
big()       Display a string in a large font.
blink()     Display flashing string.
bold()      Use bold display string.
fixed()     Using a typewriter text display string.
fontcolor() Displays a string using the specified color.
fontsize()  Displays a string using the specified size.
italics()   Use italics string.
link()      Display a string as a link.
small()     Use small size to display string.
strike()    Use the delete line to display the string.
sub()       Display the string as a subscript.
sup()       Display the string as a superscript.
```

This time we learn three methods that used to obtain the substring of the string :`slice()` `substring()` and `substr()`. Their usage :

```javascript
StringObject.slice(startindex,endindex)
StringObject.substring(startindex,endindex)
StringObject.substr(startindex,length)
```

Here we use some examples to illustrate their usage and difference :

```javascript
var str="Hello World!";
console.log(str.slice(6))
console.log(str.substring(6))
console.log(str.substr(6))
//output:
World!
World!
World!
```

We can see, the first parameter startindex can not be omitted, it represents the beginning of the interception of the string. Second parameter can be omitted, the three method will intercept the string to the end of the string. Look at the following example :

```javascript
var str="Hello World!";
console.log(str.slice(0,5))
console.log(str.substring(0,5))
console.log(str.substr(0,5))
//output:
Hello
Hello
Hello
```

We can see, When the startindex is 0, the results obtained by the three methods are the same. But in fact, their operations are different. `slice()` and `substring()` intercepted characters from index0 to index5 (not including index5). substr  operation is to start from the index0, the interception of a substring of length 5. Look at the following example :

```javascript
var str="Hello beautiful World!";
console.log(str.slice(6,16))
console.log(str.substring(6,16))
console.log(str.substr(6,9))
//output:
beautiful 
beautiful 
beautiful
```

We can see, In order to intercept the same string "beautiful", they use different parameters. Looks like substring and slice usage is similar, what is the difference between them ? Look at the following example :

```javascript
var str="Hello beautiful World!";
console.log(str.slice(16,21))
console.log(str.substring(16,21))
console.log(str.slice(16,-1))
//output:
World
World
World
```

From this example we can see that the parameters of the `slice()` can be a negative number. Negative meaning is starting from the right. -1 is first position from the right (at the end of that string).

In a word, for `slice()` and `substring()`, we usually choose to use slice(), because it is more flexible and simple. We can choose to use them according to different needs.

Ok, lesson is over. let's us do some task.

**Task**
Coding in function ```cutIt```, function accept 1 parameter :```arr```. ```arr``` is a string array.
The first mission : Traversing ```arr```, find the shortest string length.
The second mission : Traversing ```arr``` again, intercept all strings to the shortest string length (Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
For example :

```js
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
```

**Solution**

```js
function cutIt(arr){
  //coding here...
  var howMany=1000;
  var result;
  for (var i=0;i<arr.length;i++) {
    if (howMany >= arr[i].length) {
      howMany = arr[i].length;
    }
  }
  for (var j=0;j<arr.length;j++) {
    arr[j] = arr[j].substr(0,howMany);
  }
  return arr;
}
```

-----



## #17 Methods of String object--indexOf(), lastIndexOf() and search()

[Kata Stats: Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search() | Codewars](https://www.codewars.com/kata/57277a31e5e51450a4000010)

This time we learn three methods to retrieve the string:`indexOf()` `lastIndexOf()` and `search()`. Their usage :

```javascript
StringObject.indexOf(searchvalue,fromindex)
StringObject.lastIndexOf(searchvalue,fromindex)
StringObject.search(searchvalue/regexp)
```

`indexOf()` retrieves a string from the location of the fromindex to the right (If fromindex is omitted, began retrieval from index0).

`lastIndexOf()` retrieves a string from the location of the fromindex to the left (If fromindex is omitted, began retrieval from last chars).

Usage of `search()` is similar to `indexOf()`. It is characterized by the support of regular expressions, but it always returns the position of the first match from the left side(This means that it does not support the option `"g"` of regular expressions). 

Here we use some examples to illustrate their usage and difference :

```javascript
var str="Hello World!";
console.log(str.indexOf("e"))
console.log(str.lastIndexOf("e"))
console.log(str.search("e"))
//output:
1
1
1
```

We can see, str.indexOf("e") equals str.lastIndexOf("e"), because there is only one "e" in str. Look at the following example :

```javascript
var str="Hello World!";
console.log(str.indexOf("o"))
console.log(str.lastIndexOf("o"))
console.log(str.search("o"))
//output:
4
7
4
```

We can see, indexOf() returned 4 and lastIndexOf() returned 7. search() always returned the first "o". Look at the following example :

```javascript
var str="Hello World!";
console.log(str.indexOf("o",5))
console.log(str.lastIndexOf("o",5))
console.log(str.search("o"))
//output:
7
4
4
```

We can see, indexOf() returned 7, because it start retrieves from index 5 to the right ; lastIndexOf() returned 4 because it start retrieves from index 5 to the left ; . search() always returned the first "o". Look at the following example :

```javascript
var str="Hello World!";
console.log(str.indexOf("world"))
console.log(str.lastIndexOf("world"))
console.log(str.search(/world/i))
console.log(str.search(/word/i))
//output:
-1
-1
6
-1
```

From this example we can see that `indexOf()` and `lastIndexOf()` can not find "world" in str, because "World" and "world" are diffrent ; `search()` uses a regular expression, the option i allows it to ignore the case (Regular expressions are powerful and complex, and we will learn it later). when the search string is not found, they always return -1 .

Ok, lesson is over. let's us do some task.

**Task**
Coding in function ```firstToLast```, function accept 2 parameters :```str``` and ```c```. ```str``` is a string. ```c``` is a char. 
Please return the gap between the first position of ```c``` and the last position of ```c```.
If there are a lot of ```c``` in the ```str```, should  return a positive integer ; If there is only one ```c``` in ```str```, should return 0 ; If there is no ```c``` in the ```str```, should return -1. Retrieval should not ignored the case.
for example :

```js
firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1
```

```js
function firstToLast(str,c){
  //coding here..
  firstStr = str.indexOf(c);
  lastStr = str.lastIndexOf(c);
  if (str.search(c) === -1) {
    return -1
  } else {
    return lastStr - firstStr;
  }
}
```

-----



## #18 Methods of String object--concat() split() and its good friend join()

[Train: Training JS #18: Methods of String object--concat() split() and its good friend join() | Codewars](https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript)

This time we learn two methods to split or merge string :`split()` and `concat()`. also learn a good friend of the split() method : `join()`. It is an Array method. Their usage :

```javascript
stringObject.split(separator,howmany)
stringObject.concat(string1,string2,...,stringx)
arrayObject.join(separator)
```

`split()` can divided a string into several parts by a specified separator. The result is an array of strings. The split string does not include the separator itself. One of its classic uses is to divide a sentence into an array of words :

```javascript
var str="My name is John";
var words=str.split(" ");
console.log(words);
//output:
[ 'My', 'name', 'is', 'John' ]
```

In the example above, we use the space as the separator, divide a sentence into 4 words. If we specify the second parameters, it will be like this :

```javascript
var str="My name is John";
var words1=str.split(" ",3);
console.log("words1:",words1);
var words2=str.split(" ",5);
console.log("words2:",words2);

//output:
words1:[ 'My', 'name', 'is' ]
words2:[ 'My', 'name', 'is', 'John' ]
```

When we specify the number of fewer than 4, the result will be a specified number of strings ; if the number of the partition is too many, the results will only be the same as the default results.
If we use the empty string as the separator, we'll get an array of strings containing each character :

```javascript
var str="My name is John";
var words=str.split("");
console.log(words);

//output:
[ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]
```

Split can use regular expressions to split the string. But because we have not learned the use of regular expressions, so we do not have to learn this usage.
`concat()` can merge many strings into a string like this :

```javascript
var str="My".concat("name","is","John");
console.log(str);

//output:
MynameisJohn
```

In fact, we rarely see the actual use of `concat()`, because we have a more simple way. that is using the `+` operator :

```javascript
var str="My"+"name"+"is"+"John";
console.log(str);

//output:
MynameisJohn
```

But even using the `+` operator, the four words are not the perfect combination of a sentence, because there is no space separator. What should we do ? Using `join()` is the best choice.
`join()` is the reverse operation of the `split()` method. We can see a lot of code in the actual use :

```javascript
var str="My name is John";
var words=str.split(" ");
console.log("use split():",words);
var s=words.join(" ");
console.log("use join():",s);
console.log("use split() and join():",str.split(" ").join(" "))
//output:
use split():[ 'My', 'name', 'is', 'John' ]
use join():My name is John
use split() and join():My name is John
```

Ok, lesson is over. let's us do some task.

**Task**
Implement a function which accepts 2 arguments : `string` and `separator`.
The expected algorithm : split the `string` into words by spaces, split each word into separate characters and join them back with the specified `separator`, join all the resulting "words" back into a sentence with spaces.
For example :

```js
splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
```

```js
function splitAndMerge(str, sp) {
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}

///////////

function splitAndMerge(str,sp){
  var words = str.split(" ");
  var arr =[];
  var res = []
  for(i=0;i<words.length;i++){
   arr.push(words[i].split("").join(sp));
  }
  res = arr.join(" ");
  return res;
}
```

