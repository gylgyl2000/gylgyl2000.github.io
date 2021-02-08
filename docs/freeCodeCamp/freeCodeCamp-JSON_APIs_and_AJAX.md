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



## 5. Access the JSON Data from an API

[Learn JSON APIs and Ajax: Access the JSON Data from an API | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/access-the-json-data-from-an-api)

In the previous challenge, you saw how to get JSON data from the freeCodeCamp Cat Photo API.
Now you'll take a closer look at the returned data to better understand the JSON format. Recall some notation in JavaScript:

> [ ] -> Square brackets represent an array
> { } -> Curly brackets represent an object
> " " -> Double quotes represent a string. They are also used for key names in JSON

Understanding the structure of the data that an API returns is important because it influences how you retrieve the values you need.
On the right, click the "Get Message" button to load the freeCodeCamp Cat Photo API JSON into the HTML.
The first and last character you see in the JSON data are square brackets `[ ]`. This means that the returned data is an array. The second character in the JSON data is a curly `{` bracket, which starts an object. Looking closely, you can see that there are three separate objects. The JSON data is an array of three objects, where each object contains information about a cat photo.
You learned earlier that objects contain "key-value pairs" that are separated by commas. In the Cat Photo example, the first object has `"id":0` where "id" is a key and 0 is its corresponding value. Similarly, there are keys for "imageLink", "altText", and "codeNames". Each cat photo object has these same keys, but with different values.
Another interesting "key-value pair" in the first object is `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]`. Here "codeNames" is the key and its value is an array of three strings. It's possible to have arrays of objects as well as a key with an array as a value.
Remember how to access data in arrays and objects. Arrays use bracket notation to access a specific index of an item. Objects use either bracket or dot notation to access the value of a given property. Here's an example that prints the "altText" of the first cat photo - note that the parsed JSON data in the editor is saved in a variable called `json`:

```js
console.log(json[0].altText);
// Prints "A white cat wearing a green helmet shaped melon on its head."
```

------

For the cat with the "id" of 2, print to the console the second value in the `codeNames` array. You should use bracket and dot notation on the object (which is saved in the variable `json`) to access the value.

> Your code should use bracket and dot notation to access the proper code name, and print "Loki" to the console.

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
        // Add your code above this line
      };
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



## 6. Convert JSON Data to HTML

[Learn JSON APIs and Ajax: Convert JSON Data to HTML | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/convert-json-data-to-html)

Now that you're getting data from a JSON API, you can display it in the HTML.
You can use a `forEach` method to loop through the data since the cat photo objects are held in an array. As you get to each item, you can modify the HTML elements.
First, declare an html variable with `let html = "";`.
Then, loop through the JSON, adding HTML to the variable that wraps the key names in `strong` tags, followed by the value. When the loop is finished, you render it.
Here's the code that does this:

```js
let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
```

**Note:** For this challenge, you need to add new HTML elements to the page, so you cannot rely on `textContent`. Instead, you need to use `innerHTML`, which can make a site vulnerable to Cross-site scripting attacks.

------

Add a `forEach` method to loop over the JSON data and create the HTML elements to display it.
Here is some example JSON

```json
[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
```

> Your code should store the data in the `html` variable.
> Your code should use a `forEach` method to loop over the JSON data from the API.
> Your code should wrap the key names in `strong` tags.

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line
        json.forEach(function(val) {
          const keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
            html += "<strong>" + key + "</strong>:" + val[key] + "<br>";
          })
          html += "</div><br>";
        });
        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
      };
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



## 7. Render Images from Data Sources

[Learn JSON APIs and Ajax: Render Images from Data Sources | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/render-images-from-data-sources)

The last few challenges showed that each object in the JSON array contains an `imageLink` key with a value that is the URL of a cat's image.
When you're looping through these objects, you can use this `imageLink` property to display this image in an `img` element.
Here's the code that does this:

```js
html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
```

------

Add code to use the `imageLink` and `altText` properties in an `img` tag.

> You should use the `imageLink` property to display the images.
> You should use the `altText` for the alt attribute values of the images.

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // Add your code below this line
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
          // Add your code above this line
          html += "</div><br>";
        });
        document.getElementsByClassName('message')[0].innerHTML=html;
      };
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



## 8. Pre-filter JSON to Get the Data You Need

[Learn JSON APIs and Ajax: Pre-filter JSON to Get the Data You Need | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/pre-filter-json-to-get-the-data-you-need)

If you don't want to render every cat photo you get from the freeCodeCamp Cat Photo API, you can pre-filter the JSON before looping through it.
Given that the JSON data is stored in an array, you can use the `filter` method to filter out the cat whose "id" key has a value of 1.
Here's the code to do this:

```js
json = json.filter(function(val) {
  return (val.id !== 1);
});
```

------

Add code to `filter` the json data to remove the cat with the "id" value of 1.

> Your code should use the `filter` method.

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        let json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line
        json = json.filter(function(val) {
          return (val.id !== 1);
        });
        // Add your code above this line
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
         });
         document.getElementsByClassName('message')[0].innerHTML = html;
       };
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



## 9. Get Geolocation Data to Find A User's GPS Coordinates

[Learn JSON APIs and Ajax: Get Geolocation Data to Find A User's GPS Coordinates | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/get-geolocation-data-to-find-a-users-gps-coordinates)

Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.
The navigator will get the user's current longitude and latitude.
You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.
By selecting allow, you will see the text on the output phone change to your latitude and longitude.
Here's code that does this:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

First, it checks if the `navigator.geolocation` object exists. If it does, the `getCurrentPosition` method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the `position` object's values for latitude and longitude using dot notation and updates the HTML.

------

Add the example code inside the `script` tags to check a user's current location and insert it into the HTML.

> Your code should use `navigator.geolocation` to access the user's current location.
> Your code should use `position.coords.latitude` to display the user's latitudinal location.
> Your code should use `position.coords.longitude` to display the user's longitudinal location.
> You should display the user's position within the `data` div element.

```html
<script>
  // Add your code below this line
  if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

-----



## 10. Post Data with the JavaScript XMLHttpRequest Method

[Learn JSON APIs and Ajax: Post Data with the JavaScript XMLHttpRequest Method | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/post-data-with-the-javascript-xmlhttprequest-method)

In the previous examples, you received data from an external resource. You can also send data to an external resource, as long as that resource supports AJAX requests and you know the URL.
JavaScript's `XMLHttpRequest` method is also used to post data to a server. Here's an example:

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

You've seen several of these methods before. Here the `open` method initializes the request as a "POST" to the given URL of the external resource, and uses the `true` Boolean to make it asynchronous. The `setRequestHeader` method sets the value of an HTTP request header, which contains information about the sender and the request. It must be called after the `open` method, but before the `send` method. The two parameters are the name of the header and the value to set as the body of that header. Next, the `onreadystatechange` event listener handles a change in the state of the request. A `readyState` of 4 means the operation is complete, and a `status` of 201 means it was a successful request. The document's HTML can be updated. Finally, the `send` method sends the request with the `body` value, which the `userName` key was given by the user in the `input` field.

------

Update the code so it makes a "POST" request to the API endpoint. Then type your name in the input field and click "Send Message". Your AJAX function should replace "Reply from Server will be here." with data from the server. Format the response to display your name appended with " loves cats".

> Your code should create a new `XMLHttpRequest`.
> Your code should use the `open` method to initialize a "POST" request to the server.
> Your code should use the `setRequestHeader` method.
> Your code should have an `onreadystatechange` event handler set to a function.
> Your code should get the element with class `message` and change its `textContent` to "`userName` loves cats".
> Your code should use the `send` method.

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
      	if (xhr.readyState === 4 && xhr.status === 201){
        	const serverResponse = JSON.parse(xhr.response);
            document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
        }
      };
      const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
      xhr.send(body);
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

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

