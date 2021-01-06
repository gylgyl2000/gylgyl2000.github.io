## Hello World

[JavaScript | Hello World | Exercism](https://exercism.io/my/solutions/04a8011dbf3d4ade9c61ce743174e05a)

**Instructions**
The classical introductory exercise. Just say "Hello, World!".
["Hello, World!"](http://en.wikipedia.org/wiki/"Hello,_world!"_program) is the traditional first program for beginning programming in a new language or environment.
The objectives are simple :

- Write a function that returns the string "Hello, World!".
- Run the test suite and make sure that it succeeds.
- Submit your solution and check it at the website.

If everything goes well, you will be ready to fetch your first real exercise.

**Test suite**

```js
// hello-world.spec.js
import { hello } from './hello-world';

describe('Hello World', () => {
  test('Say Hi!', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});
```

**Solution**

```js
// hello-world.js
export const hello = () => {
  return "Hello, World!"
};
```

-----



## Two Fer

[JavaScript | Two Fer | Exercism](https://exercism.io/my/solutions/141116d2deab4f988f93956178aef18b)

**Introduction**
`Two-fer` or `2-fer` is short for two for one. One for you and one for me.
Given a name, return a string with the message :

```text
One for X, one for me.
```

Where X is the given name.
However, if the name is missing, return the string :

```text
One for you, one for me.
```

Here are some examples :

| Name   | String to return            |
| :----- | :-------------------------- |
| Alice  | One for Alice, one for me.  |
| Bob    | One for Bob, one for me.    |
|        | One for you, one for me.    |
| Zaphod | One for Zaphod, one for me. |

**Test suite**

```js
// two-fer.spec.js
import { twoFer } from './two-fer'

describe('twoFer()', () => {
  test('no name given', () => {
    expect(twoFer()).toEqual("One for you, one for me.")
  })

  xtest('a name given', () => {
    expect(twoFer("Alice")).toEqual("One for Alice, one for me.")
  })

  xtest('another name given', () => {
    expect(twoFer("Bob")).toEqual("One for Bob, one for me.")
  })
})
```

**Solution**

```js
/* two-fer.js

export const twoFer = () => {
  throw new Error("Remove this statement and implement this function");
}; */
export const twoFer = (name) => {
  return name != null ? ("One for " + name + ", one for me.") : ("One for you, one for me.");
};
```

-----



## Resistor Color

[JavaScript | Resistor Color | Exercism](https://exercism.io/my/solutions/839a8521fb014552a784a27bbc27971e)

Resistors have color coded bands, where each color maps to a number. The first 2 bands of a resistor have a simple encoding scheme : each color maps to a single number.
These colors are encoded as follows :

- Black: 0
- Brown: 1
- Red: 2
- Orange: 3
- Yellow: 4
- Green: 5
- Blue: 6
- Violet: 7
- Grey: 8
- White: 9

The goal of this exercise is to create a way :

- to look up the numerical value associated with a particular color band
- to list the different band colors

Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array: Better Be Right Or Your Great Big Values Go Wrong.
More information on the color encoding of resistors can be found in the [Electronic color code Wikipedia article](https://en.wikipedia.org/wiki/Electronic_color_code)

**Test suite**

```js
// resistor-color.spec.js
import { colorCode, COLORS } from './resistor-color'

describe('ResistorColor', () => {
  describe('Color codes', () => {
    test('Black', () => {
      expect(colorCode("black")).toEqual(0)
    })

    xtest('White', () => {
      expect(colorCode("white")).toEqual(9)
    })

    xtest('Orange', () => {
      expect(colorCode("orange")).toEqual(3)
    })
  })

  xtest('Colors', () => {
    expect(COLORS).toEqual(["black","brown","red","orange","yellow","green","blue","violet","grey","white"])
  })
})
```

**Solution**

```js
/* resistor-color.js

export const colorCode = () => {
  throw new Error("Remove this statement and implement this function");
};

export const COLORS = undefined; */


```

