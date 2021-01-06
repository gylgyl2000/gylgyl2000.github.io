---
id: freeCodeCamp-Object_Oriented_Programming
title: Object Oriented Programming
---



## Introduction to the Object Oriented Programming Challenges

[Object Oriented Programming | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/)

At its core, software development solves a problem or achieves a result with computation. The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.

As its name implies, object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.

The object structure makes it flexible within a program. Objects can transfer information by calling and passing data to another object's methods. Also, new classes can receive, or inherit, all the features from a base or parent class. This helps to reduce repeated code.

Your choice of programming approach depends on a few factors. These include the type of problem, as well as how you want to structure your data and algorithms. This section covers object oriented programming principles in JavaScript.

-----



## 1. Create a Basic JavaScript Object

[Learn Object Oriented Programming: Create a Basic JavaScript Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-basic-javascript-object)

Think about things people see every day, like cars, shops, and birds. These are all objects: tangible things people can observe and interact with.
What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.
These qualities, or properties, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.
Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. Here's an example using these concepts to create a `duck` object:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

This `duck` object has two property/value pairs: a `name` of "Aflac" and a `numLegs` of 2.

------

Create a `dog` object with `name` and `numLegs` properties, and set them to a string and a number, respectively.

> `dog` should be an object.
> `dog` should have a `name` property set to a `string`.
> `dog` should have a `numLegs` property set to a `number`.

```js
let dog = {
    name: "toto",
    numLegs: 4
};
console.log(dog); // { name: 'toto', numLegs: 4 }
```

------



## 2. Use Dot Notation to Access the Properties of an Object

[Learn Object Oriented Programming: Use Dot Notation to Access the Properties of an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object)

The last challenge created an object with various properties. Now you'll see how to access the values of those properties. Here's an example:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// This prints "Aflac" to the console
```

Dot notation is used on the object name, `duck`, followed by the name of the property, `name`, to access the value of "Aflac".

------

Print both properties of the `dog` object to your console.

> Your code should use `console.log` to print the value for the `name` property of the `dog` object.
> Your code should use `console.log` to print the value for the `numLegs` property of the `dog` object.

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

```js
let dog = {
  name: "Spot",
  numLegs: 4
};

console.log(dog.name); // Spot
console.log(dog.numLegs); // 4
```

-----



## 3. Create a Method on an Object

[Learn Object Oriented Programming: Create a Method on an Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-method-on-an-object)

Objects can have a special type of property, called a method.
Methods are properties that are functions. This adds different behavior to an object. Here is the `duck` example with a method:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."
```

The example adds the `sayName` method, which is a function that returns a sentence giving the name of the `duck`. Notice that the method accessed the `name` property in the return statement using `duck.name`. The next challenge will cover another way to do this.

------

Using the `dog` object, give it a method called `sayLegs`. The method should return the sentence "This dog has 4 legs."

> `dog.sayLegs()` should be a function.
> `dog.sayLegs()` should return the given string - note that punctuation and spacing matter.

```js
let dog = {
  name: "Spot",
  numLegs: 4,
};
dog.sayLegs();
```

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
console.log(dog.sayLegs()); // This dog has 4 legs.
```

------



## 4. Make Code More Reusable with the this Keyword

[Learn Object Oriented Programming: Make Code More Reusable with the this Keyword | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/make-code-more-reusable-with-the-this-keyword)

The last challenge introduced a method to the `duck` object. It used `duck.name` dot notation to access the value for the `name` property within the return statement:

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.
A way to avoid these issues is with the `this` keyword:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` is a deep topic, and the above example is only one way to use it. In the current context, `this` refers to the object that the method is associated with: `duck`. If the object's name is changed to `mallard`, it is not necessary to find all the references to `duck` in the code. It makes the code reusable and easier to read.

------

Modify the `dog.sayLegs` method to remove any references to `dog`. Use the `duck` example for guidance.

> `dog.sayLegs()` should return the given string.
> Your code should use the `this` keyword to access the `numLegs` property of `dog`.

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};
dog.sayLegs();
console.log(dog.sayLegs()); //This dog has 4 legs.
```

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dog.sayLegs();

console.log(dog.sayLegs()); // This dog has 4 legs.
```

-----



## 5. Define a Constructor Function

[Learn Object Oriented Programming: Define a Constructor Function | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function)

*Constructors* are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
Here is an example of a constructor:

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

This constructor defines a `Bird` object with properties `name`, `color`, and `numLegs` set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

- Constructors are defined with a capitalized name to distinguish them from other functions that are not `constructors`.
- Constructors use the keyword `this` to set properties of the object they will create. Inside the constructor, `this` refers to the new object it will create.
- Constructors define properties and behaviors instead of returning a value as other functions might.

------

Create a constructor, `Dog`, with properties `name`, `color`, and `numLegs` that are set to a string, a string, and a number, respectively.

> `Dog` should have a `name` property set to a string.
> `Dog` should have a `color` property set to a string.
> `Dog` should have a `numLegs` property set to a number.

```js
function Dog() {
    this.name = "Spot";
    this.color = "brown";
    this.numLegs = 4;
}
```

-----



## 6. Use a Constructor to Create Object

[Learn Object Oriented Programming: Use a Constructor to Create Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects)

Here's the `Bird` constructor from the previous challenge:

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
```

Notice that the `new` operator is used when calling a constructor. This tells JavaScript to create a new instance of `Bird` called `blueBird`. Without the `new` operator, `this` inside the constructor would not point to the newly created object, giving unexpected results. Now `blueBird` has all the properties defined inside the `Bird` constructor:

```js
blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
```

Just like any other object, its properties can be accessed and modified:

```js
blueBird.name = 'Elvira';
blueBird.name; // => Elvira
```

------

Use the `Dog` constructor from the last lesson to create a new instance of `Dog`, assigning it to a variable `hound`.

> `hound` should be created using the `Dog` constructor.
> Your code should use the `new` operator to create an instance of `Dog`.

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();
```

-----



## 7. Extend Constructors to Receive Arguments

[Learn Object Oriented Programming: Extend Constructors to Receive Arguments | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments)

The `Bird` and `Dog` constructors from last challenge worked well. However, notice that all `Birds` that are created with the `Bird` constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different `Bird` objects, you can design your Bird constructor to accept parameters:

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Then pass in the values as arguments to define each unique bird into the `Bird` constructor: `let cardinal = new Bird("Bruce", "red");` This gives a new instance of `Bird` with name and color properties set to Bruce and red, respectively. The `numLegs` property is still set to 2. The `cardinal` has these properties:

```js
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2
```

The constructor is more flexible. It's now possible to define the properties for each `Bird` at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

------

Create another `Dog` constructor. This time, set it up to take the parameters `name` and `color`, and have the property `numLegs` fixed at 4. Then create a new `Dog` saved in a variable `terrier`. Pass it two strings as arguments for the `name` and `color` properties.

> `Dog` should receive an argument for `name`.
> `Dog` should receive an argument for `color`.
> `Dog` should have property `numLegs` set to 4.
> `terrier` should be created using the `Dog` constructor.

```js
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Bouh", "white");

console.log(terrier.name); // Bouh
console.log(terrier.color); // white
console.log(terrier.numLegs); // 4
```

-----



## 8. Verify an Object's Constructor with instanceof

[Learn Object Oriented Programming: Verify an Object's Constructor with instanceof | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/verify-an-objects-constructor-with-instanceof)

Anytime a constructor function creates a new object, that object is said to be an *instance* of its constructor. JavaScript gives a convenient way to verify this with the `instanceof` operator. `instanceof` allows you to compare an object to a constructor, returning `true` or `false` based on whether or not that object was created with the constructor. Here's an example:

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```

If an object is created without using a constructor, `instanceof` will verify that it is not an instance of that constructor:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false
```

------

Create a new instance of the `House` constructor, calling it `myHouse` and passing a number of bedrooms. Then, use `instanceof` to verify that it is an instance of `House`.

> `myHouse` should have a `numBedrooms` attribute set to a number.
> You should verify that `myHouse` is an instance of `House` using the `instanceof` operator.

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House;
console.log(myHouse instanceof House); // true
```

-----



## 9. Understand Own Properties

[Learn Object Oriented Programming: Understand Own Properties | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties)

In the following example, the `Bird` constructor defines two properties: `name` and `numLegs`:

```js
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` and `numLegs` are called `own` properties, because they are defined directly on the instance object. That means that `duck` and `canary` each has its own separate copy of these properties. In fact every instance of `Bird` will have its own copy of these properties. The following code adds all of the `own` properties of `duck` to the array `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
```

------

Add the `own` properties of `canary` to the array `ownProps`.

> `ownProps` should include the values `"numLegs"` and `"name"`.
> You should solve this challenge without using the built in method `Object.keys()`.
> You should solve this challenge without hardcoding the `ownProps` array.

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); // [ 'name', 'numLegs' ]
```

-----



## 10. Use Prototype Properties to Reduce Duplicate Code

[Learn Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code)

Since `numLegs` will probably have the same value for all instances of `Bird`, you essentially have a duplicated variable `numLegs` inside each `Bird` instance.
This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.
A better way is to use `Bird’s` `prototype`. Properties in the `prototype` are shared among ALL instances of `Bird`. Here's how to add `numLegs` to the `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

Now all instances of `Bird` have the `numLegs` property.

```js
console.log(duck.numLegs);  // prints 2
console.log(canary.numLegs);  // prints 2
```

Since all instances automatically have the properties on the `prototype`, think of a `prototype` as a "recipe" for creating objects. Note that the `prototype` for `duck` and `canary` is part of the `Bird` constructor as `Bird.prototype`. Nearly every object in JavaScript has a `prototype` property which is part of the constructor function that created it.

------

Add a `numLegs` property to the `prototype` of `Dog

> `beagle` should have a `numLegs` property.
> `beagle.numLegs` should be a number.
> `numLegs` should be a `prototype` property not an `own` property.

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs); // 4
```

------



## 11. Iterate Over All Properties

[Learn Object Oriented Programming: Iterate Over All Properties | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties)

You have now seen two kinds of properties: `own` properties and `prototype` properties. `Own` properties are defined directly on the object instance itself. And `prototype` properties are defined on the `prototype`.

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Here is how you add `duck`'s `own` properties to the array `ownProps` and `prototype` properties to the array `prototypeProps`:

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

------

Add all of the `own` properties of `beagle` to the array `ownProps`. Add all of the `prototype` properties of `Dog` to the array `prototypeProps`.

> The `ownProps` array should include `"name"`.
> The `prototypeProps` array should include `"numLegs"`.
> You should solve this challenge without using the built in method `Object.keys()`.

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps); // [ 'name' ]
console.log(prototypeProps); // [ 'numLegs' ]
```

-----



## 12. Understand the Constructor Property

[Learn Object Oriented Programming: Understand the Constructor Property | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property)

There is a special `constructor` property located on the object instances `duck` and `beagle` that were created in the previous challenges:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true
```

Note that the `constructor` property is a reference to the constructor function that created the instance. The advantage of the `constructor` property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

Since the `constructor` property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the `instanceof` method to check the type of an object.

------

Write a `joinDogFraternity` function that takes a `candidate` parameter and, using the `constructor` property, return `true` if the candidate is a `Dog`, otherwise return `false`.

> `joinDogFraternity` should be defined as a function.
> `joinDogFraternity` should return true if`candidate` is an instance of `Dog`.
> `joinDogFraternity` should use the `constructor` property.

```js
function Dog(name) {
  this.name = name;
}
// Only change code below this line
let candidate = new Dog();
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

console.log(joinDogFraternity(candidate)); // true
```

-----



## 13. Change the Prototype to a New Object

[Learn Object Oriented Programming: Change the Prototype to a New Object | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object)

Up until now you have been adding properties to the `prototype` individually:

```js
Bird.prototype.numLegs = 2;
```

This becomes tedious after more than a few properties.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

A more efficient way is to set the `prototype` to a new object that already contains the properties. This way, the properties are added all at once:

```js
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

------

Add the property `numLegs` and the two methods `eat()` and `describe()` to the `prototype` of `Dog` by setting the `prototype` to a new object.

> `Dog.prototype` should be set to a new object.
> `Dog.prototype` should have the property `numLegs`.
> `Dog.prototype` should have the method `eat()`.
> `Dog.prototype` should have the method `describe()`.

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat: function() {
    console.log('chicken');
  },
  describe: function() {
    console.log('My name is ' + this.name);
  }
};
```

-----



## 14. Remember to Set the Constructor Property when Changing the Prototype

[Learn Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/remember-to-set-the-constructor-property-when-changing-the-prototype)

There is one crucial side effect of manually setting the prototype to a new object. It erases the `constructor` property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

```js
duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works
```

To fix this, whenever a prototype is manually set to a new object, remember to define the `constructor` property:

```js
Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

------

Define the `constructor` property on the `Dog` `prototype`.

> `Dog.prototype` should set the `constructor` property.

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

-----



## 15. Understand Where an Object’s Prototype Comes From

[Learn Object Oriented Programming: Understand Where an Object’s Prototype Comes From | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from)

Just like people inherit genes from their parents, an object inherits its `prototype` directly from the constructor function that created it. For example, here the `Bird` constructor creates the `duck` object:

```js
function Bird(name) {
  this.name = name;
}
let duck = new Bird("Donald");
```

`duck` inherits its `prototype` from the `Bird` constructor function. You can show this relationship with the `isPrototypeOf` method:

```js
Bird.prototype.isPrototypeOf(duck);
// returns true
```

------

Use `isPrototypeOf` to check the `prototype` of `beagle`.

> You should show that `Dog.prototype` is the `prototype` of `beagle`

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);

console.log(Dog.prototype.isPrototypeOf(beagle)); // true
```

-----



## 16. Understand the Prototype Chain

[Learn Object Oriented Programming: Understand the Prototype Chain | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-prototype-chain)

All objects in JavaScript (with a few exceptions) have a `prototype`. Also, an object’s `prototype` itself is an object.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // yields 'object'
```

Because a `prototype` is an object, a `prototype` can have its own `prototype`! In this case, the `prototype` of `Bird.prototype` is `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype); // returns true
```

How is this useful? You may recall the `hasOwnProperty` method from a previous challenge:

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // yields true
```

The `hasOwnProperty` method is defined in `Object.prototype`, which can be accessed by `Bird.prototype`, which can then be accessed by `duck`. This is an example of the `prototype` chain. In this `prototype` chain, `Bird` is the `supertype` for `duck`, while `duck` is the `subtype`. `Object` is a `supertype` for both `Bird` and `duck`. `Object` is a `supertype` for all objects in JavaScript. Therefore, any object can use the `hasOwnProperty` method.

------

Modify the code to show the correct prototype chain.

> Your code should show that `Object.prototype` is the prototype of `Dog.prototype`.

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // yields true
// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

```js
Object.prototype.isPrototypeOf(Dog.prototype);
console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // true
```

-----



## 17. Use Inheritance So You Don't Repeat Yourself

[Learn Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-inheritance-so-you-dont-repeat-yourself)

There's a principle in programming called *Don't Repeat Yourself (DRY)*. The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.
Notice in the example below that the `describe` method is shared by `Bird` and `Dog`:

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

The `describe` method is repeated in two places. The code can be edited to follow the DRY principle by creating a `supertype` (or parent) called `Animal`:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Since `Animal` includes the `describe` method, you can remove it from `Bird` and `Dog`:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

------

The `eat` method is repeated in both `Cat` and `Bear`. Edit the code in the spirit of DRY by moving the `eat` method to the `Animal` `supertype`.

> `Animal.prototype` should have the `eat` property.
> `Bear.prototype` should not have the `eat` property.
> `Cat.prototype` should not have the `eat` property.

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```

------



## 18. Inherit Behaviors from a Supertype

[Learn Object Oriented Programming: Inherit Behaviors from a Supertype | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype)

In the previous challenge, you created a `supertype` called `Animal` that defined behaviors shared by all animals:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

This and the next challenge will cover how to reuse `Animal's` methods inside `Bird` and `Dog` without defining them again. It uses a technique called inheritance. This challenge covers the first step: make an instance of the `supertype` (or parent). You already know one way to create an instance of `Animal` using the `new` operator:

```js
let animal = new Animal();
```

There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` creates a new object, and sets `obj` as the new object's `prototype`. Recall that the `prototype` is like the "recipe" for creating an object. By setting the `prototype` of `animal` to be `Animal's` `prototype`, you are effectively giving the `animal` instance the same "recipe" as any other instance of `Animal`.

```js
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```

------

Use `Object.create` to make two instances of `Animal` named `duck` and `beagle`.

> The `duck` variable should be defined.
> The `beagle` variable should be defined.
> The `duck` variable should be initialised with `Object.create`.
> The `beagle` variable should be initialised with `Object.create`.
> `duck` should have a `prototype` of `Animal`.
> `beagle` should have a `prototype` of `Animal`.

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
```

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
```

-----



## 19. Set the Child's Prototype to an Instance of the Parent

[Learn Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent)

In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) `Animal`: making a new instance of `Animal`.
This challenge covers the next step: set the `prototype` of the subtype (or child)—in this case, `Bird`—to be an instance of `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

Remember that the `prototype` is like the "recipe" for creating an object. In a way, the recipe for `Bird` now includes all the key "ingredients" from `Animal`.

```js
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
```

`duck` inherits all of `Animal`'s properties, including the `eat` method.

------

Modify the code so that instances of `Dog` inherit from `Animal`.

> `Dog.prototype` should be an instance of `Animal`.

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { }
// Only change code below this line
let beagle = new Dog();
```

```js
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog("Snoopy");

beagle.eat(); // nom nom nom
```

-----



## 20. Reset an Inherited Constructor Property

[Learn Object Oriented Programming: Reset an Inherited Constructor Property | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property)

When an object inherits its `prototype` from another object, it also inherits the supertype's constructor property.
Here's an example:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
```

But `duck` and all instances of `Bird` should show that they were constructed by `Bird` and not `Animal`. To do so, you can manually set `Bird's` constructor property to the `Bird` object:

```js
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
```

------

Fix the code so `duck.constructor` and `beagle.constructor` return their respective constructors.

> `Bird.prototype` should be an instance of `Animal`.
> `duck.constructor` should return `Bird`.
> `Dog.prototype` should be an instance of `Animal`.
> `beagle.constructor` should return `Dog`.

```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line
let duck = new Bird();
let beagle = new Dog();
```

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor); // [Function: Animal]
console.log(beagle.constructor); // [Function: Animal]

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

console.log(duck.constructor); //[Function: Bird]
console.log(beagle.constructor); // [Function: Dog]
```

-----



## 21. Add Methods After Inheritance

[Learn Object Oriented Programming: Add Methods After Inheritance | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance)

A constructor function that inherits its `prototype` object from a supertype constructor function can still have its own methods in addition to inherited methods.
For example, `Bird` is a constructor that inherits its `prototype` from `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

In addition to what is inherited from `Animal`, you want to add behavior that is unique to `Bird` objects. Here, `Bird` will get a `fly()` function. Functions are added to `Bird's` `prototype` the same way as any constructor function:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Now instances of `Bird` will have both `eat()` and `fly()` methods:

```js
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
```

------

Add all necessary code so the `Dog` object inherits from `Animal` and the `Dog's` `prototype` constructor is set to Dog. Then add a `bark()` method to the `Dog` object so that `beagle` can both `eat()` and `bark()`. The `bark()` method should print "Woof!" to the console.

> `Animal` should not respond to the `bark()` method.
> `Dog` should inherit the `eat()` method from `Animal`.
> `Dog` should have the `bark()` method as an `own` property.
> `beagle` should be an `instanceof` `Animal`.
> The constructor for `beagle` should be set to `Dog`.
> `beagle.bark()` should log `"Woof!"`

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
// Only change code below this line
// Only change code above this line
let beagle = new Dog();
```

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log('Woof!');
};
let beagle = new Dog();

beagle.eat(); // nom nom nom
beagle.bark(); // Woof!
```

-----



## 22. Override Inherited Methods

[Learn Object Oriented Programming: Override Inherited Methods | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/override-inherited-methods)

In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its `prototype` object:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Then the `ChildObject` received its own methods by chaining them onto its `prototype`:

```js
ChildObject.prototype.methodName = function() {...};
```

It's possible to override an inherited method. It's done the same way - by adding a method to `ChildObject.prototype` using the same method name as the one to override. Here's an example of `Bird` overriding the `eat()` method inherited from `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

If you have an instance `let duck = new Bird();` and you call `duck.eat()`, this is how JavaScript looks for the method on `duck’s` `prototype` chain:

1. duck => Is eat() defined here? No.
2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
4. Object => JavaScript stopped searching before reaching this level.

------

Override the `fly()` method for `Penguin` so that it returns "Alas, this is a flightless bird."

> `penguin.fly()` should return the string "Alas, this is a flightless bird."
> The `bird.fly()` method should return "I am flying!"

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Only change code below this line
// Only change code above this line
let penguin = new Penguin();
console.log(penguin.fly());
```

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };
let penguin = new Penguin();
console.log(penguin.fly()); // Alas, this is a flightless bird.
console.log(Bird.prototype.fly()); // I am flying!
```

-----



## 23. Use a Mixin to Add Common Behavior Between Unrelated Objects

[Learn Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects)

As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like `Bird` and `Airplane`. They can both fly, but a `Bird` is not a type of `Airplane` and vice versa.
For unrelated objects, it's better to use *mixins*. A mixin allows other objects to use a collection of functions.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

The `flyMixin` takes any object and gives it the `fly` method.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

Here `bird` and `plane` are passed into `flyMixin`, which then assigns the `fly` function to each object. Now `bird` and `plane` can both fly:

```js
bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"
```

Note how the mixin allows for the same `fly` method to be reused by unrelated objects `bird` and `plane`.

------

Create a mixin named `glideMixin` that defines a method named `glide`. Then use the `glideMixin` to give both `bird` and `boat` the ability to glide.

> Your code should declare a `glideMixin` variable that is a function.
> Your code should use the `glideMixin` on the `bird` object to give it the `glide` method.
> Your code should use the `glideMixin` on the `boat` object to give it the `glide` method.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log('Gliding, wooosh!');
  }
};
glideMixin(bird);
glideMixin(boat);

bird.glide(); // Gliding, wooosh!
boat.glide(); // Gliding, wooosh!
```

-----



## 24. Use Closure to Protect Properties Within an Object from Being Modified Externally

[Learn Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally)

In the previous challenge, `bird` had a public property `name`. It is considered public because it can be accessed and changed outside of `bird`'s definition.

```js
bird.name = "Duffy";
```

Therefore, any part of your code can easily change the name of `bird` to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.
The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

```js
function Bird() {
  let hatchedEgg = 10; // private variable

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
```

Here `getHatchedEggCount` is a privileged method, because it has access to the private variable `hatchedEgg`. This is possible because `hatchedEgg` is declared in the same context as `getHatchedEggCount`. In JavaScript, a function always has access to the context in which it was created. This is called `closure`.

------

Change how `weight` is declared in the `Bird` function so it is a private variable. Then, create a method `getWeight` that returns the value of `weight` 15.

> The `weight` property should be a private variable and should be assigned the value of `15`.
> Your code should create a method in `Bird` called `getWeight` that returns the value of the private variable `weight`.
> Your `getWeight` function should return the private variable `weight`.

```js
function Bird() {
  this.weight = 15;
}
```

```js
function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}

let ducky = new Bird();
console.log(ducky.getWeight()); // 15
```

------



## 25. Understand the Immediately Invoked Function Expression (IIFE)

[Learn Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE) | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife)

A common pattern in JavaScript is to execute a function as soon as it is declared:

```js
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an *immediately invoked function expression or IIFE*.

------

Rewrite the function `makeNest` and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

> The function should be anonymous.
> Your function should have parentheses at the end of the expression to call it immediately.

```js
function makeNest() {
  console.log("A cozy nest is ready");
}
makeNest(); // A cozy nest is ready
```

```js
(function () {
  console.log("A cozy nest is ready");
})();
// A cozy nest is ready
```

-----



## 26. Use an IIFE to Create a Module

[Learn Object Oriented Programming: Use an IIFE to Create a Module | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module)

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or *module*. For example, an earlier challenge defined two mixins:

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

We can group these mixins into a module as follows:

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invoked
```

Note that you have an immediately invoked function expression (IIFE) that returns an object `motionModule`. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

```js
motionModule.glideMixin(duck);
duck.glide();
```

------

Create a module named `funModule` to wrap the two mixins `isCuteMixin` and `singMixin`. `funModule` should return an object.

> `funModule` should be defined and return an object.
> `funModule.isCuteMixin` should access a function.
> `funModule.singMixin` should access a function.

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

```js
let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
```

