---
id: freeCodeCamp-jQuery
title: jQuery
---





## Introduction to jQuery

[jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/)

jQuery is one of the many libraries for JavaScript. It is designed to simplify scripting done on the client side. jQuery's most recognizable characteristic is its dollar sign (`$`) syntax. With it, you can easily manipulate elements, create animations and handle input events.

-----



## 1. Learn How Script Tags and Document Ready Work

[Learn jQuery: Learn How Script Tags and Document Ready Work | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/learn-how-script-tags-and-document-ready-work)

Now we're ready to learn jQuery, the most popular JavaScript tool of all time.
Before we can start using jQuery, we need to add some things to our HTML.
First, add a `script` element at the top of your page. Be sure to close it on the following line.
Your browser will run any JavaScript inside a `script` element, including jQuery.
Inside your `script` element, add this code: `$(document).ready(function() {` to your `script`. Then close it on the following line (still inside your `script` element) with: `});`.
We'll learn more about `functions` later. The important thing to know is that code you put inside this `function` will run as soon as your browser has loaded your page.
This is important because without your `document ready function`, your code may run before your HTML is rendered, which would cause bugs.

> You should create a `script` element making sure it is valid and has a closing tag.
> You should add `$(document).ready(function() {` to the beginning of your `script` element.
> You should close your `$(document).ready(function() {` function with `});`.

```html
<script>
  $(document).ready(function() {
  });
</script>
<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 2. Target HTML Elements with Selectors Using jQuery

[Learn jQuery: Target HTML Elements with Selectors Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-html-elements-with-selectors-using-jquery)

Now we have a `document ready function`.
Now let's write our first jQuery statement. All jQuery functions start with a `$`, usually referred to as a dollar sign operator, or as bling.
jQuery often selects an HTML element with a selector, then does something to that element.
For example, let's make all of your `button` elements bounce. Just add this code inside your document ready function:

```xquery
$("button").addClass("animated bounce");
```

Note that we've already included both the jQuery library and the Animate.css library in the background so that you can use them in the editor. So you are using jQuery to apply the Animate.css `bounce` class to your `button` elements.

> You should use the jQuery `addClass()` function to give the classes `animated` and `bounce` to your `button` elements.
> You should only use jQuery to add these classes to the element.
> Your jQuery code should be within the `$(document).ready();` function.

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 3. Target Elements by Class Using jQuery

[Learn jQuery: Target Elements by Class Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-elements-by-class-using-jquery)

You see how we made all of your `button` elements bounce? We selected them with `$("button")`, then we added some CSS classes to them with `.addClass("animated bounce");`.
You just used jQuery's `.addClass()` function, which allows you to add classes to elements.
First, let's target your `div` elements with the class `well` by using the `$(".well")` selector.
Note that, just like with CSS declarations, you type a `.` before the class's name.
Then use jQuery's `.addClass()` function to add the classes `animated` and `shake`.
For example, you could make all the elements with the class `text-primary` shake by adding the following to your `document ready function`:

```javascript
$(".text-primary").addClass("animated shake");
```

> You should use the jQuery `addClass()` function to give the classes `animated` and `shake` to all your elements with the class `well`.
> You should only use jQuery to add these classes to the element.

```html
<script>
  $(document).ready(function() {
    $(".well").addClass("animated bounce");
    $(".well").addClass("shake");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 4. Target Elements by id Using jQuery

[Learn jQuery: Target Elements by id Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-elements-by-id-using-jquery)

You can also target elements by their id attributes.
First target your `button` element with the id `target3` by using the `$("#target3")` selector.
Note that, just like with CSS declarations, you type a `#` before the id's name.
Then use jQuery's `.addClass()` function to add the classes `animated` and `fadeOut`.
Here's how you'd make the `button` element with the id `target6` fade out:
`$("#target6").addClass("animated fadeOut")`.

> You should select the `button` element with the `id` of `target3` and use the jQuery `addClass()` function to give it the class of `animated`.
> You should target the element with the id `target3` and use the jQuery `addClass()` function to give it the class `fadeOut`.
> You should only use jQuery to add these classes to the element.

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("fadeOut");
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 5. Delete Your jQuery Functions

[Learn jQuery: Delete Your jQuery Functions | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/delete-your-jquery-functions)

These animations were cool at first, but now they're getting kind of distracting.
Delete all three of these jQuery functions from your `document ready function`, but leave your `document ready function` itself intact.

> All three of your jQuery functions should be deleted from your `document ready function`.
> You should leave your `script` element intact.
> You should leave your `$(document).ready(function() {` at the beginning of your `script` element.
> You should leave your "document ready function" closing `})` intact.
> You should leave your `script` element closing tag intact.

```html
<script>
  $(document).ready(function() {
    
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 6. Target the Same Element with Multiple jQuery Selectors

[Learn jQuery: Target the Same Element with Multiple jQuery Selectors | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-the-same-element-with-multiple-jquery-selectors)

Now you know three ways of targeting elements: by type: `$("button")`, by class: `$(".btn")`, and by id `$("#target1")`.
Although it is possible to add multiple classes in a single `.addClass()` call, let's add them to the same element in *three separate ways*.
Using `.addClass()`, add only one class at a time to the same element, three different ways:

- Add the `animated` class to all elements with type `button`.
- Add the `shake` class to all the buttons with class `.btn`.
- Add the `btn-primary` class to the button with id `#target1`.

**Note** : You should only be targeting one element and adding only one class at a time. Altogether, your three individual selectors will end up adding the three classes `shake`, `animated`, and `btn-primary` to `#target1`.

> Your code should use the `$("button")` selector.
> Your code should use the `$(".btn")` selector.
> Your code should use the `$("#target1")` selector.
> You should only add one class with each of your three selectors.
> Your `#target1` element should have the classes `animated`‚ `shake` and `btn-primary`.
> You should only use jQuery to add these classes to the element.

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 7. Remove Classes from an Element with jQuery

[Learn jQuery: Remove Classes from an Element with jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/remove-classes-from-an-element-with-jquery)

In the same way you can add classes to an element with jQuery's `addClass()` function, you can remove them with jQuery's `removeClass()` function.
Here's how you would do this for a specific button:

```javascript
$("#target2").removeClass("btn-default");
```

Let's remove the `btn-default` class from all of our `button` elements.

> The `btn-default` class should be removed from all of your `button` elements.
> You should only use jQuery to remove this class from the element.
> You should only remove the `btn-default` class.

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default"); // Cibler les éléments avec la balise 'button' et supprimez la classe btn-default.
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 8. Change the CSS of an Element Using jQuery

[Learn jQuery: Change the CSS of an Element Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/change-the-css-of-an-element-using-jquery)

We can also change the CSS of an HTML element directly with jQuery.
jQuery has a function called `.css()` that allows you to change the CSS of an element.
Here's how we would change its color to blue:

```js
$("#target1").css("color", "blue");
```

This is slightly different from a normal CSS declaration, because the CSS property and its value are in quotes, and separated with a comma instead of a colon.
Delete your jQuery selectors, leaving an empty `document ready function`.
Select `target1` and change its color to red.

> Your `target1` element should have red text.
> You should only use jQuery to add these classes to the element.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red"); // Sélectionne l'élément avec un identifiant de #target1 et change sa couleur de texte en rouge
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 9. Disable an Element Using jQuery

[Learn jQuery: Disable an Element Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/disable-an-element-using-jquery)

You can also change the non-CSS properties of HTML elements with jQuery. For example, you can disable buttons.
When you disable a button, it will become grayed-out and can no longer be clicked.
jQuery has a function called `.prop()` that allows you to adjust the properties of elements.
Here's how you would disable all buttons:

```js
$("button").prop("disabled", true);
```

Disable only the `target1` button.

> Your `target1` button should be disabled.
> No other buttons should be disabled.
> You should only use jQuery to add these classes to the element.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 10. Change Text Inside an Element Using jQuery

[Learn jQuery: Change Text Inside an Element Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/change-text-inside-an-element-using-jquery)

Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.
jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.
Here's how you would rewrite and emphasize the text of our heading:

```js
$("h3").html("<em>jQuery Playground</em>");
```

jQuery also has a similar function called `.text()` that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.
Change the button with id `target4` by emphasizing its text.
[View our news article for ](https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element) to learn the difference between `<i>` and `<em>` and their uses.
Note that while the `<i>` tag has traditionally been used to emphasize text, it has since been adopted for use as a tag for icons. The `<em>` tag is now widely accepted as the tag for emphasis. Either will work for this challenge.

> You should emphasize the text in your `target4` button by adding HTML tags.
> The text should otherwise remain unchanged.
> You should not alter any other text.
> You should be using `.html()` and not `.text()`.
> You should select `button id="target4"` with jQuery.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html("<em>#target4</em>");
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 11. Remove an Element Using jQuery

[Learn jQuery: Remove an Element Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/remove-an-element-using-jquery)

Now let's remove an HTML element from your page using jQuery.
jQuery has a function called `.remove()` that will remove an HTML element entirely.
Remove element `target4` from the page by using the `.remove()` function.

> You should use jQuery to remove your `target4` element from your page.
> You should only use jQuery to remove this element.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 12. Use appendTo to Move Elements with jQuery

[Learn jQuery: Use appendTo to Move Elements with jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/use-appendto-to-move-elements-with-jquery)

Now let's try moving elements from one `div` to another.
jQuery has a function called `appendTo()` that allows you to select HTML elements and append them to another element.
For example, if we wanted to move `target4` from our right well to our left well, we would use:

```js
$("#target4").appendTo("#left-well");
```

Move your `target2` element from your `left-well` to your `right-well`.

> Your `target2` element should not be inside your `left-well`.
> Your `target2` element should be inside your `right-well`.
> You should only use jQuery to move these elements.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 13. Clone an Element Using jQuery

[Learn jQuery: Clone an Element Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/clone-an-element-using-jquery)

In addition to moving elements, you can also copy them from one place to another.
jQuery has a function called `clone()` that makes a copy of an element.
For example, if we wanted to copy `target2` from our `left-well` to our `right-well`, we would use:

```js
$("#target2").clone().appendTo("#right-well");
```

Did you notice this involves sticking two jQuery functions together? This is called function chaining and it's a convenient way to get things done with jQuery.
Clone your `target5` element and append it to your `left-well`.

> Your `target5` element should be inside your `right-well`.
> A copy of your `target5` element should also be inside your `left-well`.
> You should only use jQuery to move these elements.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");

  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 14. Target the Parent of an Element Using jQuery

[Learn jQuery: Target the Parent of an Element Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-the-parent-of-an-element-using-jquery)

Every HTML element has a `parent` element from which it `inherits` properties.
For example, your `jQuery Playground` `h3` element has the parent element of `<div class="container-fluid">`, which itself has the parent `body`.
jQuery has a function called `parent()` that allows you to access the parent of whichever element you've selected.
Here's an example of how you would use the `parent()` function if you wanted to give the parent element of the `left-well` element a background color of blue:

```js
$("#left-well").parent().css("background-color", "blue")
```

Give the parent of the `#target1` element a background-color of red.

> Your `left-well` element should have a red background.
> You should use the `.parent()` function to modify this element.
> The `.parent()` method should be called on the `#target1` element.
> You should only use jQuery to add these classes to the element.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red")
  });
</script>

<body>
  <div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
      <div class="col-xs-6">
        <h4>#left-well</h4>
        <div class="well" id="left-well">
          <button class="btn btn-default target" id="target1">#target1</button>
          <button class="btn btn-default target" id="target2">#target2</button>
          <button class="btn btn-default target" id="target3">#target3</button>
        </div>
      </div>
      <div class="col-xs-6">
        <h4>#right-well</h4>
        <div class="well" id="right-well">
          <button class="btn btn-default target" id="target4">#target4</button>
          <button class="btn btn-default target" id="target5">#target5</button>
          <button class="btn btn-default target" id="target6">#target6</button>
        </div>
      </div>
    </div>
  </div>
</body>
```

-----



## 15. Target the Children of an Element Using jQuery

[Learn jQuery: Target the Children of an Element Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-the-children-of-an-element-using-jquery)

When HTML elements are placed one level below another they are called children of that element. For example, the button elements in this challenge with the text "#target1", "#target2", and "#target3" are all children of the `<div class="well" id="left-well">` element.
jQuery has a function called `children()` that allows you to access the children of whichever element you've selected.
Here's an example of how you would use the `children()` function to give the children of your `left-well` element the color `blue`:

```js
$("#left-well").children().css("color", "blue")
```

------

Give all the children of your `right-well` element the color orange.

> All children of `#right-well` should have orange text.
> You should use the `children()` function to modify these elements.
> You should only use jQuery to add these classes to the element.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange")
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 16. Target a Specific Child of an Element Using jQuery

[Learn jQuery: Target a Specific Child of an Element Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-a-specific-child-of-an-element-using-jquery)

You've seen why id attributes are so convenient for targeting with jQuery selectors. But you won't always have such neat ids to work with.
Fortunately, jQuery has some other tricks for targeting the right elements.
jQuery uses CSS Selectors to target elements. The `target:nth-child(n)` CSS selector allows you to select all the nth elements with the target class or element type.
Here's how you would give the third element in each well the bounce class:

```js
$(".target:nth-child(3)").addClass("animated bounce");
```

Make the second child in each of your well elements bounce. You must select the elements' children with the `target` class.

> The second element in your `target` elements should bounce.
> Only two elements should bounce.
> You should use the `:nth-child()` selector to modify these elements.
> You should only use jQuery to add these classes to the element.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $(".target:nth-child(2)").addClass("animated bounce");
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

------



## 17. Target Even Elements Using jQuery

[Learn jQuery: Target Even Elements Using jQuery | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-even-elements-using-jquery)

You can also target elements based on their positions using `:odd` or `:even` selectors.
Note that jQuery is zero-indexed which means the first element in a selection has a position of 0. This can be a little confusing as, counter-intuitively, `:odd` selects the second element (position 1), fourth element (position 3), and so on.
Here's how you would target all the odd elements with class `target` and give them classes:

```js
$(".target:odd").addClass("animated shake");
```

Try selecting all the even `target` elements and giving them the classes of `animated` and `shake`. Remember that **even** refers to the position of elements with a zero-based system in mind.

> All of the `target` elements that jQuery considers to be even should shake.
> You should use the `:even` selector to modify these elements.
> You should only use jQuery to add these classes to the element.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

-----



## 18. Use jQuery to Modify the Entire Page

[Learn jQuery: Use jQuery to Modify the Entire Page | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/jquery/use-jquery-to-modify-the-entire-page)

We're done playing with our jQuery playground. Let's tear it down!
jQuery can target the `body` element as well.
Here's how we would make the entire body fade out: `$("body").addClass("animated fadeOut");`
But let's do something more dramatic. Add the classes `animated` and `hinge` to your `body` element.

> You should add the classes `animated` and `hinge` to your `body` element.

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
    $("body").addClass("animated hinge");
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```



