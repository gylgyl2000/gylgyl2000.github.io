---
id: freeCodeCamp-JSON_APIs_and_AJAX
title: JSON APIs and AJAX
---





## Introduction to the JSON APIs and AJAX Challenges

[JSON APIs and Ajax | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/)

Similar to how User Interfaces help people use programs, Application Programming Interfaces (APIs) help programs interact with other programs. APIs are tools that computers use to communicate with one another, in part to send and receive data. You can use API functionality in your page once you understand how to make requests and process data from it. Programmers often use AJAX technologies when working with APIs.

The term AJAX originated as an acronym for Asynchronous JavaScript And XML. It refers to a group of technologies that make asynchronous requests to a server to transfer data, then load any returned data into the page. An asynchronous process has a couple key properties. The browser does not stop loading a page to wait for the server's response. Also, the browser inserts updated data into part of the page without having to refresh the entire page.

User experience benefits from asynchronous processes in several ways. Pages load faster since the browser isn't waiting for the server to respond in the middle of a page render. Requests and transfers happen in the background, without interrupting what the user is doing. When the browser receives new data, only the necessary area of the page refreshes. These qualities especially enhance the user experience for single page applications.

The data transferred between the browser and server is often in a format called JavaScript Object Notation (JSON). JSON resembles JavaScript object literal syntax, except that it's transferred as a string. Once received, it can be converted into an object and used in a script.

This section covers how to transfer and use data using AJAX technologies with a freeCodeCamp API.

-----



## 1. Handle Click Events with JavaScript using the onclick property

[Learn JSON APIs and Ajax: Handle Click Events with JavaScript using the onclick property | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/handle-click-events-with-javascript-using-the-onclick-property)

You want your code to execute only once your page has finished loading. For that purpose, you can attach a JavaScript event to the document called `DOMContentLoaded`. Here's the code that does this:

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

You can implement event handlers that go inside of the `DOMContentLoaded` function. You can implement an `onclick` event handler which triggers when the user clicks on the element with id `getMessage`, by adding the following code:

```js
document.getElementById('getMessage').onclick = function(){};
```

------

Add a click event handler inside of the `DOMContentLoaded` function for the element with id of `getMessage`.

> Your code should use the `document.getElementById` method to select the `getMessage` element.
> Your code should add an `onclick` event handler.

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    // Add your code below this line
    document.getElementById('getMessage').onclick = function(){};
    // Add your code above this line
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

-----



## 2. Change Text with click Events

[Learn JSON APIs and Ajax: Change Text with click Events | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/change-text-with-click-events)

When the click event happens, you can use JavaScript to update an HTML element.
For example, when a user clicks the "Get Message" button, it changes the text of the element with the class `message` to say "Here is the message".
This works by adding the following code within the click event:

```js
document.getElementsByClassName('message')[0].textContent="Here is the message";
```

------

Add code inside the `onclick` event handler to change the text inside the `message` element to say "Here is the message".

> Your code should use the `document.getElementsByClassName` method to select the element with class `message` and set its `textContent` to the given string.

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // Add your code below this line
      document.getElementsByClassName('message')[0].textContent="Here is the message";
      // Add your code above this line
    }
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

-----



## 3. Get JSON with the JavaScript XMLHttpRequest Method

[Learn JSON APIs and Ajax: Get JSON with the JavaScript XMLHttpRequest Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/get-json-with-the-javascript-xmlhttprequest-method)

You can also request data from an external source. This is where APIs come into play.
Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.
Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.
JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a `{` and a `}`.
These properties and their values are often referred to as "key-value pairs".
However, JSON transmitted by APIs are sent as `bytes`, and your application receives it as a `string`. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The `JSON.parse` method parses the string and constructs the JavaScript object described by it.
You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

Here's a review of what each piece is doing. The JavaScript `XMLHttpRequest` object has a number of properties and methods that are used to transfer data. First, an instance of the `XMLHttpRequest` object is created and saved in the `req` variable. Next, the `open` method initializes a request - this example is requesting data from an API, therefore is a "GET" request. The second argument for `open` is the URL of the API you are requesting data from. The third argument is a Boolean value where `true` makes it an asynchronous request. The `send` method sends the request. Finally, the `onload` event handler parses the returned data and applies the `JSON.stringify` method to convert the JavaScript object into a string. This string is then inserted as the message text.

------

Update the code to create and send a "GET" request to the freeCodeCamp Cat Photo API. Then click the "Get Message" button. Your AJAX function will replace the "The message will go here" text with the raw JSON output from the API.

> Your code should create a new `XMLHttpRequest`.
> Your code should use the `open` method to initialize a "GET" request to the freeCodeCamp Cat Photo API.
> Your code should use the `send` method to send the request.
> Your code should have an `onload` event handler set to a function.
> Your code should use the `JSON.parse` method to parse the `responseText`.
> Your code should get the element with class `message` and change its inner HTML to the string of JSON data.

```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('getMessage').onclick = function() {
      // Add your code below this line
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = function() {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
      };
      // Add your code above this line
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

-----



## 4. Get JSON with the JavaScript fetch method

[Learn JSON APIs and Ajax: Get JSON with the JavaScript fetch method | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/get-json-with-the-javascript-fetch-method)

Another way to request external data is to use the JavaScript `fetch()` method. It is equivalent to XMLHttpRequest, but the syntax is considered easier to understand.
Here is the code for making a GET request to `/json/cats.json`

```js
fetch('/json/cats.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('message').innerHTML = JSON.stringify(data);
	})
```

Take a look at each piece of this code.
The first line is the one that makes the request. So, `fetch(URL)` makes a GET request to the URL specified. The method returns a Promise.
After a Promise is returned, if the request was successful, the `then` method is executed, which takes the response and converts it to JSON format.
The `then` method also returns a Promise, which is handled by the next `then` method. The argument in the second `then` is the JSON object you are looking for!
Now, it selects the element that will receive the data by using `document.getElementById()`. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.

------

Update the code to create and send a "GET" request to the freeCodeCamp Cat Photo API. But this time, using the `fetch` method instead of `XMLHttpRequest`.

> Your code should make a GET request with `fetch`.
> Your code should use `then` to convert the response to JSON.
> Your code should use `then` to handle the data converted to JSON by the other `then`.
> Your code should get the element with id `message` and change its inner HTML to the string of JSON data.

```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('getMessage').onclick = () => {
      // Add your code below this line
      fetch('/json/cats.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById('message').innerHTML = JSON.stringify(data);
        })
      // Add your code above this line
    };
  });
</script>
<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Cat Photo Finder</h1>
<p id="message" class="box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

-----



