---
id: freeCodeCamp-Data_Visualization_with_D3
title: Data Visualization with D3
---




## Introduction to the Data Visualization with D3 Challenges

[Data Visualization with D3 | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/)

D3.js, or D3, stands for Data Driven Documents. D3 is a JavaScript library to create dynamic and interactive data visualizations in the browser. It's built to work with common web standards, namely HTML, CSS, and Scalable Vector Graphics (SVG).

D3 takes input data and maps it into a visual representation of that data. It supports many different data formats. D3 lets you bind (or attach) the data to the Document Object Model (DOM). You use HTML or SVG elements with D3's built-in methods to transform the data into a visualization.

D3 gives you a lot of control over the presentation of data. This section covers the basic functionality and how to create visualizations with the D3 library.

-----



## 1. Add Document Elements with D3

[Learn Data Visualization with D3: Add Document Elements with D3 | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-document-elements-with-d3)

D3 has several methods that let you add and change elements in your document.
The `select()` method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:

```js
const anchor = d3.select("a");
```

The above example finds the first anchor tag on the page and saves an HTML node for it in the variable `anchor`. You can use the selection with other methods. The "d3" part of the example is a reference to the D3 object, which is how you access D3 methods.
Two other useful methods are `append()` and `text()`.
The `append()` method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.
The `text()` method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.
Here's an example that selects an unordered list, appends a list item, and adds text:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

D3 allows you to chain several methods together with periods to perform a number of actions in a row.

------

Use the `select` method to select the `body` tag in the document. Then `append` an `h1` tag to it, and add the text "Learning D3" into the `h1` element.

> The `body` should have one `h1` element.
> The `h1` element should have the text "Learning D3" in it.
> Your code should access the `d3` object.
> Your code should use the `select` method.
> Your code should use the `append` method.
> Your code should use the `text` method.

```html
<body>
  <script>
    // Add your code below this line
    d3.select("body")
      .append("h1")
      .text("Learning D3");
    // Add your code above this line
  </script>
</body>
```

-----



## 2. Select a Group of Elements with D3

[Learn Data Visualization with D3: Select a Group of Elements with D3 | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/select-a-group-of-elements-with-d3)

D3 also has the `selectAll()` method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:

```
const anchors = d3.selectAll("a");
```

Like the `select()` method, `selectAll()` supports method chaining, and you can use it with other methods.

------

Select all of the `li` tags in the document, and change their text to "list item" by chaining the `.text()` method.

> There should be 3 `li` elements on the page, and the text in each one should say "list item". Capitalization and spacing should match exactly.
> Your code should access the `d3` object.
> Your code should use the `selectAll` method.

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line
    d3.selectAll("li")
      .text("list item");
    // Add your code above this line
  </script>
</body>
```

-----



## 3. Work with Data in D3

[Learn Data Visualization with D3: Work with Data in D3 | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/work-with-data-in-d3)

The D3 library focuses on a data-driven approach. When you have a set of data, you can apply D3 methods to display it on the page. Data comes in many formats, but this challenge uses a simple array of numbers.
The first step is to make D3 aware of the data. The `data()` method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.
A common workflow pattern is to create a new element in the document for each piece of data in the set. D3 has the `enter()` method for this purpose.
When `enter()` is combined with the `data()` method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.
Here is an example that selects a `ul` element and creates a new list item based on the number of entries in the array:

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

It may seem confusing to select elements that don't exist yet. This code is telling D3 to first select the `ul` on the page. Next, select all list items, which returns an empty selection. Then the `data()` method reviews the dataset and runs the following code three times, once for each item in the array. The `enter()` method sees there are no `li` elements on the page, but it needs 3 (one for each piece of data in `dataset`). New `li` elements are appended to the `ul` and have the text "New item".

------

Select the `body` node, then select all `h2` elements. Have D3 create and append an `h2` tag for each item in the `dataset` array. The text in the `h2` should say "New Title". Your code should use the `data()` and `enter()` methods.

> Your document should have 9 `h2` elements.
> The text in the `h2` elements should say "New Title". The capitalization and spacing should match exactly.
> Your code should use the `data()` method.
> Your code should use the `enter()` method.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    // Add your code below this line
    d3.select("body").select("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title");
    // Add your code above this line
  </script>
</body>
```

-----



## 4. Work with Dynamic Data in D3

[Learn Data Visualization with D3: Work with Dynamic Data in D3 | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/work-with-dynamic-data-in-d3)

The last two challenges cover the basics of displaying data dynamically with D3 using the `data()` and `enter()` methods. These methods take a data set and, together with the `append()` method, create a new DOM element for each entry in the data set.
In the previous challenge, you created a new `h2` element for each item in the `dataset` array, but they all contained the same text, "New Title". This is because you have not made use of the data that is bound to each of the `h2` elements.
The D3 `text()` method can take a string or a callback function as an argument:

```js
selection.text((d) => d)
```

In the example above, the parameter `d` refers to a single entry in the dataset that a selection is bound to.
Using the current example as context, the first `h2` element is bound to 12, the second `h2` element is bound to 31, the third `h2` element is bound to 22, and so on.

------

Change the `text()` method so that each `h2` element displays the corresponding value from the `dataset` array with a single space and "USD". For example, the first heading should be "12 USD".

> The first `h2` should have the text "12 USD".
> The second `h2` should have the text "31 USD".
> The third `h2` should have the text "22 USD".
> The fourth `h2` should have the text "17 USD".
> The fifth `h2` should have the text "25 USD".
> The sixth `h2` should have the text "18 USD".
> The seventh `h2` should have the text "29 USD".
> The eighth `h2` should have the text "14 USD".
> The ninth `h2` should have the text "9 USD".

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      // Add your code below this line
      // before : .text("New Title");
      .text((d) => d + " USD");
      // Add your code above this line
  </script>
</body>
```

-----



## 5. Add Inline Styling to Elements

[Learn Data Visualization with D3: Add Inline Styling to Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-inline-styling-to-elements)

D3 lets you add inline CSS styles on dynamic elements with the `style()` method.
The `style()` method takes a comma-separated key-value pair as an argument. Here's an example to set the selection's text color to blue:

```js
selection.style("color","blue");
```

------

Add the `style()` method to the code in the editor to make all the displayed text have a `font-family` of `verdana`.

> Your `h2` elements should have a `font-family` of verdana.
> Your code should use the `style()` method.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("font-family","verdana");
      // Add your code above this line
  </script>
</body>
```

-----



## 6. Change Styles Based on Data

[Learn Data Visualization with D3: Change Styles Based on Data | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/change-styles-based-on-data)

D3 is about visualization and presentation of data. It's likely you'll want to change the styling of elements based on the data. You can use a callback function in the `style()` method to change the styling for different elements.
For example, you may want to color a data point blue if it has a value less than 20, and red otherwise. You can use a callback function in the `style()` method and include the conditional logic. The callback function uses the `d` parameter to represent the data point:

```js
selection.style("color", (d) => {
  /* Logic that returns the color based on a condition */
});
```

The `style()` method is not limited to setting the `color` - it can be used with other CSS properties as well.

------

Add the `style()` method to the code in the editor to set the `color` of the `h2` elements conditionally. Write the callback function so if the data value is less than 20, it returns "red", otherwise it returns "green".
**Note :** You can use if-else logic, or the ternary operator.

> The first `h2` should have a `color` of red.
> The second `h2` should have a `color` of green.
> The third `h2` should have a `color` of green.
> The fourth `h2` should have a `color` of red.
> The fifth `h2` should have a `color` of green.
> The sixth `h2` should have a `color` of red.
> The seventh `h2` should have a `color` of green.
> The eighth `h2` should have a `color` of red.
> The ninth `h2` should have a `color` of red.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("color", (d) => {
        if (d < 20){
          return 'red'
        } else {
          return 'green'
        }
      });
      // Add your code above this line
  </script>
</body>
```

-----



## 7. Add Classes with D3

[Learn Data Visualization with D3: Add Classes with D3 | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-classes-with-d3)

Using a lot of inline styles on HTML elements gets hard to manage, even for smaller apps. It's easier to add a class to elements and style that class one time using CSS rules. D3 has the `attr()` method to add any HTML attribute to an element, including a class name.
The `attr()` method works the same way that `style()` does. It takes comma-separated values, and can use a callback function. Here's an example to add a class of "container" to a selection:

```js
selection.attr("class", "container");
```

Note that the "class" parameter will remain the same whenever you need to add a class and only the "container" parameter will change.

------

Add the `attr()` method to the code in the editor and put a class of `bar` on the `div` elements.

> Your `div` elements should have a class of `bar`.
> Your code should use the `attr()` method.

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class", "bar")
      // Add your code above this line
  </script>
</body>
```

-----



## 8. Update the Height of an Element Dynamically

[Learn Data Visualization with D3: Update the Height of an Element Dynamically | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/update-the-height-of-an-element-dynamically)

The previous challenges covered how to display data from an array and how to add CSS classes. You can combine these lessons to create a simple bar chart. There are two steps to this:

1. Create a `div` for each data point in the array
2. Give each `div` a dynamic height, using a callback function in the `style()` method that sets height equal to the data value

Recall the format to set a style using a callback function:

```js
selection.style("cssProperty", (d) => d)
```

------

Add the `style()` method to the code in the editor to set the `height` property for each element. Use a callback function to return the value of the data point with the string "px" added to it.

> The first `div` should have a `height` of 12 pixels.
> The second `div` should have a `height` of 31 pixels.
> The third `div` should have a `height` of 22 pixels.
> The fourth `div` should have a `height` of 17 pixels.
> The fifth `div` should have a `height` of 25 pixels.
> The sixth `div` should have a `height` of 18 pixels.
> The seventh `div` should have a `height` of 29 pixels.
> The eighth `div` should have a `height` of 14 pixels.
> The ninth `div` should have a `height` of 9 pixels.

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (d) => d + 'px');
      // Add your code above this line
  </script>
</body>
```

-----



## 9. Change the Presentation of a Bar Chart

[Learn Data Visualization with D3: Change the Presentation of a Bar Chart | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/change-the-presentation-of-a-bar-chart)

The last challenge created a bar chart, but there are a couple of formatting changes that could improve it:

1. Add space between each bar to visually separate them, which is done by adding a margin to the CSS for the `bar` class
2. Increase the height of the bars to better show the difference in values, which is done by multiplying the value by a number to scale the height

------

First, add a `margin` of 2px to the `bar` class in the `style` tag. Next, change the callback function in the `style()` method so it returns a value 10 times the original data value (plus the "px").
**Note :** Multiplying each data point by the *same* constant only alters the scale. It's like zooming in, and it doesn't change the meaning of the underlying data.

> The first `div` should have a `height` of 120 pixels and a `margin` of 2 pixels.
> The second `div` should have a `height` of 310 pixels and a `margin` of 2 pixels.
> The third `div` should have a `height` of 220 pixels and a `margin` of 2 pixels.
> The fourth `div` should have a `height` of 170 pixels and a `margin` of 2 pixels.
> The fifth `div` should have a `height` of 250 pixels and a `margin` of 2 pixels.
> The sixth `div` should have a `height` of 180 pixels and a `margin` of 2 pixels.
> The seventh `div` should have a `height` of 290 pixels and a `margin` of 2 pixels.
> The eighth `div` should have a `height` of 140 pixels and a `margin` of 2 pixels.
> The ninth `div` should have a `height` of 90 pixels and a `margin` of 2 pixels.

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Only change code below this line */
    margin: 2px;    
    /* Only change code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Only change code below this line
      .style("height", (d) => (d * 10 + "px"))
      // Only change code above this line
  </script>
</body>
```

-----



## 10. Learn About SVG in D3

[Learn Data Visualization with D3: Learn About SVG in D3 | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/learn-about-svg-in-d3)

SVG stands for Scalable Vector Graphics.
Here "scalable" means that, if you zoom in or out on an object, it would not appear pixelated. It scales with the display system, whether it's on a small mobile screen or a large TV monitor.
SVG is used to make common geometric shapes. Since D3 maps data into a visual representation, it uses SVG to create the shapes for the visualization. SVG shapes for a web page must go within an HTML `svg` tag.
CSS can be scalable when styles use relative units (such as `vh`, `vw`, or percentages), but using SVG is more flexible to build data visualizations.

------

Add an `svg` node to the `body` using `append()`. Give it a `width` attribute set to the provided `w` constant and a `height` attribute set to the provided `h` constant using the `attr()` or `style()` methods for each. You'll see it in the output because there's a `background-color` of pink applied to it in the `style` tag.
**Note:** When using `attr()` width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.

> Your document should have 1 `svg` element.
> The `svg` element should have a `width` attribute set to 500 or styled to have a width of 500px.
> The `svg` element should have a `height` attribute set to 100 or styled to have a height of 100px.

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line
                  .append("svg")
                  .attr("width",w)
                  .attr("height",h);
                  // Add your code above this line
  </script>
</body>
```

-----



## 11. Display Shapes with SVG

[Learn Data Visualization with D3: Display Shapes with SVG | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/display-shapes-with-svg)

The last challenge created an `svg` element with a given width and height, which was visible because it had a `background-color` applied to it in the `style` tag. The code made space for the given width and height.
The next step is to create a shape to put in the `svg` area. There are a number of supported shapes in SVG, such as rectangles and circles. They are used to display data. For example, a rectangle (`<rect>`) SVG shape could create a bar in a bar chart.
When you place a shape into the `svg` area, you can specify where it goes with `x` and `y` coordinates. The origin point of (0, 0) is in the upper-left corner. Positive values for `x` push the shape to the right, and positive values for `y` push the shape down from the origin point.
To place a shape in the middle of the 500 (width) x 100 (height) `svg` from last challenge, the `x` coordinate would be 250 and the `y` coordinate would be 50.
An SVG `rect` has four attributes. There are the `x` and `y` coordinates for where it is placed in the `svg` area. It also has a `height` and `width` to specify the size.

------

Add a `rect` shape to the `svg` using `append()`, and give it a `width` attribute of 25 and `height` attribute of 100. Also, give the `rect` `x` and `y` attributes each set to 0.

> Your document should have 1 `rect` element.
> The `rect` element should have a `width` attribute set to 25.
> The `rect` element should have a `height` attribute set to 100.
> The `rect` element should have an `x` attribute set to 0.
> The `rect` element should have a `y` attribute set to 0.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  // Add your code below this line
                  .append("rect")
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr("height", 100)
                  .attr("width", 25)
                  // Add your code above this line
  </script>
</body>
```

-----



## 12. Create a Bar for Each Data Point in the Set

[Learn Data Visualization with D3: Create a Bar for Each Data Point in the Set | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/create-a-bar-for-each-data-point-in-the-set)

The last challenge added only one rectangle to the `svg` element to represent a bar. Here, you'll combine what you've learned so far about `data()`, `enter()`, and SVG shapes to create and append a rectangle for each data point in `dataset`.
A previous challenge showed the format for how to create and append a `div` for each item in `dataset`:

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

There are a few differences working with `rect` elements instead of `divs`. The `rects` must be appended to an `svg` element, not directly to the `body`. Also, you need to tell D3 where to place each `rect` within the `svg` area. The bar placement will be covered in the next challenge.

------

Use the `data()`, `enter()`, and `append()` methods to create and append a `rect` for each item in `dataset`. The bars should display all on top of each other; this will be fixed in the next challenge.

> Your document should have 9 `rect` elements.
> Your code should use the `data()` method.
> Your code should use the `enter()` method.
> Your code should use the `append()` method.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       // Add your code below this line
       .data(dataset)
       .enter()
       .append("rect")
       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

------



## 13. Dynamically Set the Coordinates for Each Bar

[Learn Data Visualization with D3: Dynamically Set the Coordinates for Each Bar | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/dynamically-set-the-coordinates-for-each-bar)

The last challenge created and appended a rectangle to the `svg` element for each point in `dataset` to represent a bar. Unfortunately, they were all stacked on top of each other.
The placement of a rectangle is handled by the `x` and `y` attributes. They tell D3 where to start drawing the shape in the `svg` area. The last challenge set them each to 0, so every bar was placed in the upper-left corner.
For a bar chart, all of the bars should sit on the same vertical level, which means the `y` value stays the same (at 0) for all bars. The `x` value, however, needs to change as you add new bars. Remember that larger `x` values push items farther to the right. As you go through the array elements in `dataset`, the x value should increase.
The `attr()` method in D3 accepts a callback function to dynamically set that attribute. The callback function takes two arguments, one for the data point itself (usually `d`) and one for the index of the data point in the array. The second argument for the index is optional. Here's the format:

```js
selection.attr("property", (d, i) => {
  /* 
  * d is the data point value
  * i is the index of the data point in the array
  */
})
```

It's important to note that you do NOT need to write a `for` loop or use `forEach()` to iterate over the items in the data set. Recall that the `data()` method parses the data set, and any method that's chained after `data()` is run once for each item in the data set.

------

Change the `x` attribute callback function so it returns the index times 30.
**Note:** Each bar has a width of 25, so increasing each `x` value by 30 adds some space between the bars. Any value greater than 25 would work in this example.

> The first `rect` should have an `x` value of 0.
> The second `rect` should have an `x` value of 30.
> The third `rect` should have an `x` value of 60.
> The fourth `rect` should have an `x` value of 90.
> The fifth `rect` should have an `x` value of 120.
> The sixth `rect` should have an `x` value of 150.
> The seventh `rect` should have an `x` value of 180.
> The eighth `rect` should have an `x` value of 210.
> The ninth `rect` should have an `x` value of 240.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         // Add your code below this line
         return i * 30
         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

-----



## 14. Dynamically Change the Height of Each Bar

[Learn Data Visualization with D3: Dynamically Change the Height of Each Bar | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/dynamically-change-the-height-of-each-bar)

The height of each bar can be set to the value of the data point in the array, similar to how the `x` value was set dynamically.

```js
selection.attr("property", (d, i) => {
  /* 
  * d is the data point value
  * i is the index of the data point in the array
  */
})
```

------

Change the callback function for the `height` attribute to return the data value times 3.
**Note:** Remember that multiplying all data points by the same constant scales the data (like zooming in). It helps to see the differences between bar values in this example.

> The first `rect` should have a `height` of 36.
> The second `rect` should have a `height` of 93.
> The third `rect` should have a `height` of 66.
> The fourth `rect` should have a `height` of 51.
> The fifth `rect` should have a `height` of 75.
> The sixth `rect` should have a `height` of 54.
> The seventh `rect` should have a `height` of 87.
> The eighth `rect` should have a `height` of 42.
> The ninth `rect` should have a `height` of 27.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line
         return d * 3
         // Add your code above this line
       });
  </script>
</body>
```

-----



## 15. Invert SVG Elements

[Learn Data Visualization with D3: Invert SVG Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/invert-svg-elements)

You may have noticed the bar chart looked like it's upside-down, or inverted. This is because of how SVG uses (x, y) coordinates.
In SVG, the origin point for the coordinates is in the upper-left corner. An `x` coordinate of 0 places a shape on the left edge of the SVG area. A `y` coordinate of 0 places a shape on the top edge of the SVG area. Higher `x` values push the rectangle to the right. Higher `y` values push the rectangle down.
To make the bars right-side-up, you need to change the way the `y` coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area.
The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of the SVG area (not the top). To do this, the `y` coordinate needs a value of 100. If the data point value were 1, you would start with a `y` coordinate of 100 to set the bar at the bottom. Then you need to account for the height of the bar of 1, so the final `y` coordinate would be 99.
The `y` coordinate that is `y = heightOfSVG - heightOfBar` would place the bars right-side-up.

------

Change the callback function for the `y` attribute to set the bars right-side-up. Remember that the `height` of the bar is 3 times the data value `d`.
**Note:** In general, the relationship is `y = h - m * d`, where `m` is the constant that scales the data points.

> The first `rect` should have a `y` value of 64.
> The second `rect` should have a `y` value of 7.
> The third `rect` should have a `y` value of 34.
> The fourth `rect` should have a `y` value of 49.
> The fifth `rect` should have a `y` value of 25.
> The sixth `rect` should have a `y` value of 46.
> The seventh `rect` should have a `y` value of 13.
> The eighth `rect` should have a `y` value of 58.
> The ninth `rect` should have a `y` value of 73.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => {
         // Add your code below this line
         return h - 3 * d
         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
```

-----



## 16. Change the Color of an SVG Element

[Learn Data Visualization with D3: Change the Color of an SVG Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/change-the-color-of-an-svg-element)

The bars are in the right position, but they are all the same black color. SVG has a way to change the color of the bars.
In SVG, a `rect` shape is colored with the `fill` attribute. It supports hex codes, color names, and rgb values, as well as more complex options like gradients and transparency.

------

Add an `attr()` method to set the "fill" of all the bars to the color "navy".

> The bars should all have a `fill` color of navy.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       // Add your code below this line
       .attr("fill", "navy");
       // Add your code above this line
  </script>
</body>
```

-----



## 17. Add Labels to D3 Elements

[Learn Data Visualization with D3: Add Labels to D3 Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-labels-to-d3-elements)

D3 lets you label a graph element, such as a bar, using the SVG `text` element.
Like the `rect` element, a `text` element needs to have `x` and `y` attributes, to place it on the SVG canvas. It also needs to access the data to display those values.
D3 gives you a high level of control over how you label your bars.

------

The code in the editor already binds the data to each new `text` element. First, append `text` nodes to the `svg`. Next, add attributes for the `x` and `y` coordinates. They should be calculated the same way as the `rect` ones, except the `y` value for the `text` should make the label sit 3 units higher than the bar. Finally, use the D3 `text()` method to set the label equal to the data point value.
**Note:** For the label to sit higher than the bar, decide if the `y` value for the `text` should be 3 greater or 3 less than the `y` value for the bar.

> The first `text` element should have a label of 12 and a `y` value of 61.
> The second `text` element should have a label of 31 and a `y` value of 4.
> The third `text` element should have a label of 22 and a `y` value of 31.
> The fourth `text` element should have a label of 17 and a `y` value of 46.
> The fifth `text` element should have a label of 25 and a `y` value of 22.
> The sixth `text` element should have a label of 18 and a `y` value of 43.
> The seventh `text` element should have a label of 29 and a `y` value of 10.
> The eighth `text` element should have a label of 14 and a `y` value of 55.
> The ninth `text` element should have a label of 9 and a `y` value of 70.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d - 3)
       .text((d, i) => d);
       // Add your code above this line
  </script>
<body>
```

-----



## 18. Style D3 Labels

[Learn Data Visualization with D3: Style D3 Labels | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/style-d3-labels)

D3 methods can add styles to the bar labels. The `fill` attribute sets the color of the text for a `text` node. The `style()` method sets CSS rules for other styles, such as "font-family" or "font-size".

------

Set the `font-size` of the `text` elements to 25px, and the color of the text to red.

> The labels should all have a `fill` color of red.
> The labels should all have a `font-size` of 25 pixels.

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       // Add your code below this line
       .attr("fill", "red")
       .attr("font-size", "25px");
       // Add your code above this line
  </script>
</body>
```

-----



## 19. Add a Hover Effect to a D3 Element

[Learn Data Visualization with D3: Add a Hover Effect to a D3 Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-a-hover-effect-to-a-d3-element)

It's possible to add effects that highlight a bar when the user hovers over it with the mouse. So far, the styling for the rectangles is applied with the built-in D3 and SVG methods, but you can use CSS as well.
You set the CSS class on the SVG elements with the `attr()` method. Then the `:hover` pseudo-class for your new class holds the style rules for any hover effects.

------

Use the `attr()` method to add a class of `bar` to all the `rect` elements. This changes the `fill` color of the bar to brown when you mouse over it.

> Your `rect` elements should have a class of `bar`.

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line
       .attr("class", "bar")
       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

  </script>
</body>
```

-----



## 20. Add a Tooltip to a D3 Element

[Learn Data Visualization with D3: Add a Tooltip to a D3 Element | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-a-tooltip-to-a-d3-element)

A tooltip shows more information about an item on a page when the user hovers over that item. There are several ways to add a tooltip to a visualization, this challenge uses the SVG `title` element.
`title` pairs with the `text()` method to dynamically add data to the bars.

------

Append a `title` element under each `rect` node. Then call the `text()` method with a callback function so the text displays the data value.

> Your code should have 9 `title` elements.
> The first `title` element should have tooltip text of 12.
> The second `title` element should have tooltip text of 31.
> The third `title` element should have tooltip text of 22.
> The fourth `title` element should have tooltip text of 17.
> The fifth `title` element should have tooltip text of 25.
> The sixth `title` element should have tooltip text of 18.
> The seventh `title` element should have tooltip text of 29.
> The eighth `title` element should have tooltip text of 14.
> The ninth `title` element should have tooltip text of 9.

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line
       .append("title")
       .text((d) => d);
       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```

-----



## 21. Create a Scatterplot with SVG Circles

[Learn Data Visualization with D3: Create a Scatterplot with SVG Circles | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/create-a-scatterplot-with-svg-circles)

A scatter plot is another type of visualization. It usually uses circles to map data points, which have two values each. These values tie to the `x` and `y` axes, and are used to position the circle in the visualization.
SVG has a `circle` tag to create the circle shape. It works a lot like the `rect` elements you used for the bar chart.

------

Use the `data()`, `enter()`, and `append()` methods to bind `dataset` to new `circle` elements that are appended to the SVG canvas.
**Note:** The circles won't be visible because we haven't set their attributes yet. We'll do that in the next challenge.

> Your code should have 10 `circle` elements.

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       // Add your code below this line
       .data(dataset)
       .enter()
       .append("circle");
       // Add your code above this line

  </script>
</body>
```

-----



## 22. Add Attributes to the Circle Elements

[Learn Data Visualization with D3: Add Attributes to the Circle Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-attributes-to-the-circle-elements)

The last challenge created the `circle` elements for each point in the `dataset`, and appended them to the SVG canvas. But D3 needs more information about the position and size of each `circle` to display them correctly.
A `circle` in SVG has three main attributes. The `cx` and `cy` attributes are the coordinates. They tell D3 where to position the *center* of the shape on the SVG canvas. The radius (`r` attribute) gives the size of the `circle`.
Just like the `rect` `y` coordinate, the `cy` attribute for a `circle` is measured from the top of the SVG canvas, not from the bottom.
All three attributes can use a callback function to set their values dynamically. Remember that all methods chained after `data(dataset)` run once per item in `dataset`. The `d` parameter in the callback function refers to the current item in `dataset`, which is an array for each point. You use bracket notation, like `d[0]`, to access the values in that array.

------

Add `cx`, `cy`, and `r` attributes to the `circle` elements. The `cx` value should be the first number in the array for each item in `dataset`. The `cy` value should be based off the second number in the array, but make sure to show the chart right-side-up and not inverted. The `r` value should be 5 for all circles.

> Your code should have 10 `circle` elements.
> The first `circle` element should have a `cx` value of 34, a `cy` value of 422, and an `r` value of 5.
> The second `circle` element should have a `cx` value of 109, a `cy` value of 220, and an `r` value of 5.
> The third `circle` element should have a `cx` value of 310, a `cy` value of 380, and an `r` value of 5.
> The fourth `circle` element should have a `cx` value of 79, a `cy` value of 89, and an `r` value of 5.
> The fifth `circle` element should have a `cx` value of 420, a `cy` value of 280, and an `r` value of 5.
> The sixth `circle` element should have a `cx` value of 233, a `cy` value of 355, and an `r` value of 5.
> The seventh `circle` element should have a `cx` value of 333, a `cy` value of 404, and an `r` value of 5.
> The eighth `circle` element should have a `cx` value of 222, a `cy` value of 167, and an `r` value of 5.
> The ninth `circle` element should have a `cx` value of 78, a `cy` value of 180, and an `r` value of 5.
> The tenth `circle` element should have a `cx` value of 21, a `cy` value of 377, and an `r` value of 5.

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5);
       // Add your code above this line

  </script>
</body>
```

-----



## 23. Add Labels to Scatter Plot Circles

[Learn Data Visualization with D3: Add Labels to Scatter Plot Circles | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-labels-to-scatter-plot-circles)

You can add text to create labels for the points in a scatter plot.
The goal is to display the comma-separated values for the first (`x`) and second (`y`) fields of each item in `dataset`.
The `text` nodes need `x` and `y` attributes to position it on the SVG canvas. In this challenge, the `y` value (which determines height) can use the same value that the `circle` uses for its `cy` attribute. The `x` value can be slightly larger than the `cx` value of the `circle`, so the label is visible. This will push the label to the right of the plotted point.

------

Label each point on the scatter plot using the `text` elements. The text of the label should be the two values separated by a comma and a space. For example, the label for the first point is "34, 78". Set the `x` attribute so it's 5 units more than the value you used for the `cx` attribute on the `circle`. Set the `y` attribute the same way that's used for the `cy` value on the `circle`.

> Your code should have 10 `text` elements.
> The first label should have text of "34, 78", an `x` value of 39, and a `y` value of 422.
> The second label should have text of "109, 280", an `x` value of 114, and a `y` value of 220.
> The third label should have text of "310, 120", an `x` value of 315, and a `y` value of 380.
> The fourth label should have text of "79, 411", an `x` value of 84, and a `y` value of 89.
> The fifth label should have text of "420, 220", an `x` value of 425, and a `y` value of 280.
> The sixth label should have text of "233, 145", an `x` value of 238, and a `y` value of 355.
> The seventh label should have text of "333, 96", an `x` value of 338, and a `y` value of 404.
> The eighth label should have text of "222, 333", an `x` value of 227, and a `y` value of 167.
> The ninth label should have text of "78, 320", an `x` value of 83, and a `y` value of 180.
> The tenth label should have text of "21, 123", an `x` value of 26, and a `y` value of 377.

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       // Add your code below this line
       .text((d) => d[0] + ", " + d[1])
       .attr("x", (d, i) => d[0] + 5)
       .attr("y", (d, i) => h - d[1]);
       // Add your code above this line
  </script>
</body>
```

-----



## 24. Create a Linear Scale with D3

[Learn Data Visualization with D3: Create a Linear Scale with D3 | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/create-a-linear-scale-with-d3)

The bar and scatter plot charts both plotted data directly onto the SVG canvas. However, if the height of a bar or one of the data points were larger than the SVG height or width values, it would go outside the SVG area.
In D3, there are scales to help plot data. `Scales` are functions that tell the program how to map a set of raw data points onto the pixels of the SVG canvas.
For example, say you have a 100x500-sized SVG canvas and you want to plot Gross Domestic Product (GDP) for a number of countries. The set of numbers would be in the billion or trillion-dollar range. You provide D3 a type of scale to tell it how to place the large GDP values into that 100x500-sized area.
It's unlikely you would plot raw data as-is. Before plotting it, you set the scale for your entire data set, so that the `x` and `y` values fit your canvas width and height.
D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method `scaleLinear()`:

```js
const scale = d3.scaleLinear()
```

By default, a scale uses the identity relationship. The value of the input is the same as the value of the output. A separate challenge covers how to change this.

------

Change the `scale` variable to create a linear scale. Then set the `output` variable to the scale called with an input argument of 50.

> The text in the `h2` should be 50.
> Your code should use the `scaleLinear()` method.
> The `output` variable should call `scale` with an argument of 50.

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear(); // undefined; // Create the scale here
    const output = scale(50); // Call scale with an argument here
    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

-----



## 25. Set a Domain and a Range on a Scale

[Learn Data Visualization with D3: Set a Domain and a Range on a Scale | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/set-a-domain-and-a-range-on-a-scale)

By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.
Say a dataset has values ranging from 50 to 480. This is the input information for a scale, also known as the domain.
You want to map those points along the `x` axis on the SVG canvas, between 10 units and 500 units. This is the output information, also known as the range.
The `domain()` and `range()` methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:

```js
// Set a domain
// The domain covers the set of input values
scale.domain([50, 480]);
// Set a range
// The range covers the set of output values
scale.range([10, 500]);
scale(50) // Returns 10
scale(480) // Returns 500
scale(325) // Returns 323.37
scale(750) // Returns 807.67
d3.scaleLinear()
```

Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.

------

Create a scale and set its domain to `[250, 500]` and range to `[10, 150]`.
**Note:** You can chain the `domain()` and `range()` methods onto the `scale` variable.

> Your code should use the `domain()` method.
> The `domain()` of the scale should be set to `[250, 500]`.
> Your code should use the `range()` method.
> The `range()` of the scale should be set to `[10, 150]`.
> The text in the `h2` should be -102.

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear()
      .domain([250, 500])
      .range([10, 150]);
    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

-----



## 26. Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset

[Learn Data Visualization with D3: Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset)

The D3 methods `domain()` and `range()` set that information for your scale based on the data. There are a couple methods to make that easier.
Often when you set the domain, you'll want to use the minimum and maximum values within the data set. Trying to find these values manually, especially in a large data set, may cause errors.
D3 has two methods - `min()` and `max()` to return this information. Here's an example:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData) // Returns 6
d3.max(exampleData) // Returns 234
```

A dataset may have nested arrays, like the [x, y] coordinate pairs that were in the scatter plot example. In that case, you need to tell D3 how to calculate the maximum and minimum. Fortunately, both the `min()` and `max()` methods take a callback function. In this example, the callback function's argument `d` is for the current inner array. The callback needs to return the element from the inner array (the x or y value) over which you want to compute the maximum or minimum. Here's an example for how to find the min and max values with an array of arrays:

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
// Returns the smallest number out of the first elements
const minX = d3.min(locationData, (d) => d[0]);
// minX compared 1, 6, and 8 and is set to 1
```

------

The `positionData` array holds sub arrays of x, y, and z coordinates. Use a D3 method to find the maximum value of the z coordinate (the third value) from the arrays and save it in the `output` variable.

> The text in the `h2` should be 8.
> Your code should use the `max()` method.

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line
    const output = d3.max(positionData, (d) => d[2]); // undefined; // Change this line
    // Add your code above this line
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

-----



## 27. Use Dynamic Scales

[Learn Data Visualization with D3: Use Dynamic Scales | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/use-dynamic-scales)

The D3 `min()` and `max()` methods are useful to help set the scale.
Given a complex data set, one priority is to set the scale so the visualization fits the SVG container's width and height. You want all the data plotted inside the SVG canvas so it's visible on the web page.
The example below sets the x-axis scale for scatter plot data. The `domain()` method passes information to the scale about the raw data values for the plot. The `range()` method gives it information about the actual space on the web page for the visualization.
In the example, the domain goes from 0 to the maximum in the set. It uses the `max()` method with a callback function based on the x values in the arrays. The range uses the SVG canvas' width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG canvas.

```js
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];
const w = 500;
const h = 500;

// Padding between the SVG canvas boundary and the plot
const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

The padding may be confusing at first. Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG canvas). Including the padding in the `range()` method forces the plot to start at 30 along that line (instead of 0), and end at 470 (instead of 500).

------

Use the `yScale` variable to create a linear y-axis scale. The domain should start at zero and go to the maximum y value in the set. The range should use the SVG height (`h`) and include padding.
**Note:** Remember to keep the plot right-side-up. When you set the range for the y coordinates, the higher value (height minus padding) is the first argument, and the lower value is the second argument.

> The text in the `h2` should be 30.
> The `domain()` of yScale should be equivalent to `[0, 411]`.
> The `range()` of yScale should be equivalent to `[470, 30]`.

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;
    // Create an x and y scale
    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);
    // Add your code below this line
    const yScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[1])])
                    .range([h - padding, padding]);// undefined;
    // Add your code above this line
    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

-----



## 28. Use a Pre-Defined Scale to Place Elements

[Learn Data Visualization with D3: Use a Pre-Defined Scale to Place Elements | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/use-a-pre-defined-scale-to-place-elements)

With the scales set up, it's time to map the scatter plot again. The scales are like processing functions that turn the x and y raw data into values that fit and render correctly on the SVG canvas. They keep the data within the screen's plotting area.
You set the coordinate attribute values for an SVG shape with the scaling function. This includes `x` and `y` attributes for `rect` or `text` elements, or `cx` and `cy` for `circles`. Here's an example:

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

Scales set shape coordinate attributes to place the data points onto the SVG canvas. You don't need to apply scales when you display the actual data value, for example, in the `text()` method for a tooltip or label.

------

Use `xScale` and `yScale` to position both the `circle` and `text` shapes onto the SVG canvas. For the `circles`, apply the scales to set the `cx` and `cy` attributes. Give them a radius of 5 units, too.
For the `text` elements, apply the scales to set the `x` and `y` attributes. The labels should be offset to the right of the dots. To do this, add 10 units to the x data value before passing it to the `xScale`.

> Your code should have 10 `circle` elements.
> The first `circle` element should have a `cx` value of approximately 91 and a `cy` value of approximately 368 after applying the scales. It should also have an `r` value of 5.
> The second `circle` element should have a `cx` value of approximately 159 and a `cy` value of approximately 181 after applying the scales. It should also have an `r` value of 5.
> The third `circle` element should have a `cx` value of approximately 340 and a `cy` value of approximately 329 after applying the scales. It should also have an `r` value of 5.
> The fourth `circle` element should have a `cx` value of approximately 131 and a `cy` value of approximately 60 after applying the scales. It should also have an `r` value of 5.
> The fifth `circle` element should have a `cx` value of approximately 440 and a `cy` value of approximately 237 after applying the scales. It should also have an `r` value of 5.
> The sixth `circle` element should have a `cx` value of approximately 271 and a `cy` value of approximately 306 after applying the scales. It should also have an `r` value of 5.
> The seventh `circle` element should have a `cx` value of approximately 361 and a `cy` value of approximately 351 after applying the scales. It should also have an `r` value of 5.
> The eighth `circle` element should have a `cx` value of approximately 261 and a `cy` value of approximately 132 after applying the scales. It should also have an `r` value of 5.
> The ninth `circle` element should have a `cx` value of approximately 131 and a `cy` value of approximately 144 after applying the scales. It should also have an `r` value of 5.
> The tenth `circle` element should have a `cx` value of approximately 79 and a `cy` value of approximately 326 after applying the scales. It should also have an `r` value of 5.
> Your code should have 10 `text` elements.
> The first label should have an `x` value of approximately 100 and a `y` value of approximately 368 after applying the scales.
> The second label should have an `x` value of approximately 168 and a `y` value of approximately 181 after applying the scales.
> The third label should have an `x` value of approximately 350 and a `y` value of approximately 329 after applying the scales.
> The fourth label should have an `x` value of approximately 141 and a `y` value of approximately 60 after applying the scales.
> The fifth label should have an `x` value of approximately 449 and a `y` value of approximately 237 after applying the scales.
> The sixth label should have an `x` value of approximately 280 and a `y` value of approximately 306 after applying the scales.
> The seventh label should have an `x` value of approximately 370 and a `y` value of approximately 351 after applying the scales.
> The eighth label should have an `x` value of approximately 270 and a `y` value of approximately 132 after applying the scales.
> The ninth label should have an `x` value of approximately 140 and a `y` value of approximately 144 after applying the scales.
> The tenth label should have an `x` value of approximately 88 and a `y` value of approximately 326 after applying the scales.

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5);
       // Add your code above this line
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", " + d[1]))
       // Add your code below this line
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]));
       // Add your code above this line
  </script>
</body>
```

------



## 29. Add Axes to a Visualization

[Learn Data Visualization with D3: Add Axes to a Visualization | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-axes-to-a-visualization)

Another way to improve the scatter plot is to add an x-axis and a y-axis.
D3 has two methods, `axisLeft()` and `axisBottom()`, to render the y-axis and x-axis, respectively. Here's an example to create the x-axis based on the `xScale` in the previous challenges:

```js
const xAxis = d3.axisBottom(xScale);
```

The next step is to render the axis on the SVG canvas. To do so, you can use a general SVG component, the `g` element. The `g` stands for group. Unlike `rect`, `circle`, and `text`, an axis is just a straight line when it's rendered. Because it is a simple shape, using `g` works. The last step is to apply a `transform` attribute to position the axis on the SVG canvas in the right place. Otherwise, the line would render along the border of SVG canvas and wouldn't be visible. SVG supports different types of `transforms`, but positioning an axis needs `translate`. When it's applied to the `g` element, it moves the whole group over and down by the given amounts. Here's an example:

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

The above code places the x-axis at the bottom of the SVG canvas. Then it's passed as an argument to the `call()` method. The y-axis works in the same way, except the `translate` argument is in the form (x, 0). Because `translate` is a string in the `attr()` method above, you can use concatenation to include variable values for its arguments.

------

The scatter plot now has an x-axis. Create a y-axis in a variable named `yAxis` using the `axisLeft()` method. Then render the axis using a `g` element. Make sure to use a `transform` attribute to translate the axis by the amount of padding units right, and 0 units down. Remember to `call()` the axis.

> Your code should use the `axisLeft()` method with `yScale` passed as the argument.
> The y-axis `g` element should have a `transform` attribute to translate the axis by (60, 0).
> Your code should call the `yAxis`.

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = d3.axisLeft(yScale); // undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);
    // Add your code below this line
    svg.append("g")
       .attr("transform", "translate(" + padding + ", 0)")
       .call(yAxis);
      // Add your code above this line
  </script>
</body>
```

