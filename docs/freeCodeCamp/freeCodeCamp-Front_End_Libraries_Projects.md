---
id: freeCodeCamp-Front_End_Libraries_Projects
title: Front End Libraries Projects
---





## Introduction to the Front End Libraries Projects

[Front End Libraries Projects | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects)

It's now time to test out the frontend skills learned. This will help to bolster your skills, so don't hesitate to showcase your frontend skills in these projects. In this section you will complete the following projects with Bootstrap, jQuery, Sass, React and Redux:

- A Random Quote Machine
- A Markdown Previewer
- A Drum Machine
- A JavaScript Calculator
- A 25 + 5 Clock

Have fun and remember to use the [Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) method if you get stuck.

-----



## 1. Build a Random Quote Machine

[Front End Libraries Projects - Build a Random Quote Machine | Learn | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine)

**Objective:** Build a [CodePen.io](https://codepen.io) app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/qRZeGZ.

Fulfill the below [user stories](https://en.wikipedia.org/wiki/User_story) and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story #1:** I can see a wrapper element with a corresponding `id="quote-box"`.

**User Story #2:** Within `#quote-box`, I can see an element with a corresponding `id="text"`.

**User Story #3:** Within `#quote-box`, I can see an element with a corresponding `id="author"`.

**User Story #4:** Within `#quote-box`, I can see a clickable element with a corresponding `id="new-quote"`.

**User Story #5:** Within `#quote-box`, I can see a clickable `a` element with a corresponding `id="tweet-quote"`.

**User Story #6:** On first load, my quote machine displays a random quote in the element with `id="text"`.

**User Story #7:** On first load, my quote machine displays the random quote's author in the element with `id="author"`.

**User Story #8:** When the `#new-quote` button is clicked, my quote machine should fetch a new quote and display it in the `#text` element.

**User Story #9:** My quote machine should fetch the new quote's author when the `#new-quote` button is clicked and display it in the `#author` element.

**User Story #10:** I can tweet the current quote by clicking on the `#tweet-quote``a` element. This `a` element should include the `"twitter.com/intent/tweet"` path in its `href` attribute to tweet the current quote.

**User Story #11:** The `#quote-box` wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

You can build your project by forking [this CodePen pen](https://codepen.io/freeCodeCamp/pen/MJjpwO). Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.

**Note:** Twitter does not allow links to be loaded in an iframe. Try using the `target="_blank"` or `target="_top"` attribute on the `#tweet-quote` element if your tweet won't load. `target="_top"` will replace the current tab so make sure your work is saved.

<iframe height="600px;" title="FCC: Random Quote Machine" src="https://codepen.io/freeCodeCamp/full/qRZeGZ" >
</iframe>



<iframe height="600px;" title="Machine à citations aléatoires" src="https://codepen.io/freeCodeCamp/full/ExgOoay" >
</iframe>


-----



## 2. Build a Markdown Previewer

[Front End Libraries Projects - Build a Markdown Previewer | Learn | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)

**Objective:** Build a [CodePen.io](https://codepen.io) app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/GrZVVO.

Fulfill the below [user stories](https://en.wikipedia.org/wiki/User_story) and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story #1:** I can see a `textarea` element with a corresponding `id="editor"`.

**User Story #2:** I can see an element with a corresponding `id="preview"`.

**User Story #3:** When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.

**User Story #4:** When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

**User Story #5:** When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

**User Story #6:** When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.

**Optional Bonus (you do not need to make this test pass):** My markdown previewer interprets carriage returns and renders them as `br` (line break) elements.

You can build your project by forking [this CodePen pen](https://codepen.io/freeCodeCamp/pen/MJjpwO). Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.

<iframe height="600px;" title="FCC: Markdown Previewer" src="https://codepen.io/freeCodeCamp/full/GrZVVO" >
</iframe>



<iframe height="600px;" title="Éditeur markdown" src="https://codepen.io/freeCodeCamp/full/PoGVPvJ" >
</iframe>

-----



## 3. Build a Drum Machine

[Front End Libraries Projects - Build a Drum Machine | Learn | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine)

**Objective:** Build a [CodePen.io](https://codepen.io) app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/MJyNMd.

Fulfill the below [user stories](https://en.wikipedia.org/wiki/User_story) and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story #1:** I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.

**User Story #2:** Within `#drum-machine` I can see an element with a corresponding `id="display"`.

**User Story #3:** Within `#drum-machine` I can see 9 clickable drum pad elements, each with a class name of `drum-pad`, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

**User Story #4:** Within each `.drum-pad`, there should be an HTML5 `audio` element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an id corresponding to the inner text of its parent `.drum-pad` (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).

**User Story #5:** When I click on a `.drum-pad` element, the audio clip contained in its child `audio` element should be triggered.

**User Story #6:** When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `audio` element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

**User Story #7:** When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique).

You can build your project by forking [this CodePen pen](https://codepen.io/freeCodeCamp/pen/MJjpwO). Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.

<iframe height="600px;" title="FCC: Drum Machine" src="https://codepen.io/freeCodeCamp/full/MJyNMd" >
</iframe>

<iframe height="600px;" title="Boîte à rythmes" src="https://codepen.io/freeCodeCamp/full/abmXjYM" >
</iframe>

-----



## 4. Build a JavaScript Calculator

[Front End Libraries Projects - Build a JavaScript Calculator | Learn | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator)

**Objective:** Build a [CodePen.io](https://codepen.io) app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/wgGVVX.

Fulfill the below [user stories](https://en.wikipedia.org/wiki/User_story) and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story #1:** My calculator should contain a clickable element containing an `=` (equal sign) with a corresponding `id="equals"`.

**User Story #2:** My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, and `id="nine"`.

**User Story #3:** My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.

**User Story #4:** My calculator should contain a clickable element containing a `.` (decimal point) symbol with a corresponding `id="decimal"`.

**User Story #5:** My calculator should contain a clickable element with an `id="clear"`.

**User Story #6:** My calculator should contain an element to display values with a corresponding `id="display"`.

**User Story #7:** At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of `display`.

**User Story #8:** As I input numbers, I should be able to see my input in the element with the id of `display`.

**User Story #9:** In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit `=`, the correct result should be shown in the element with the id of `display`.

**User Story #10:** When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

**User Story #11:** When the decimal element is clicked, a `.` should append to the currently displayed value; two `.` in one number should not be accepted.

**User Story #12:** I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

**User Story #13:** If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if `5 + * 7 =` is entered, the result should be `35` (i.e. 5 * 7); if `5 * - 5 =` is entered, the result should be `-25` (i.e. 5 x (-5)).

**User Story #14:** Pressing an operator immediately following `=` should start a new calculation that operates on the result of the previous evaluation.

**User Story #15:** My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like `2 / 7` with reasonable precision to at least 4 decimal places).

**Note On Calculator Logic:** It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.

**EXAMPLE:** `3 + 5 x 6 - 2 / 4 =`

- **Immediate Execution Logic:** `11.5`
- **Formula/Expression Logic:** `32.5`

You can build your project by forking [this CodePen pen](https://codepen.io/freeCodeCamp/pen/MJjpwO). Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.

<iframe height="600px;" title="FCC: JavaScript Calculator" src="https://codepen.io/freeCodeCamp/full/wgGVVX" >
</iframe>

<iframe height="600px;" title="Calculatrice JavaScript" src="https://codepen.io/gylgyl2000/full/dypEypj" >
</iframe>

------



## 5. Build a 25 + 5 Clock

[Front End Libraries Projects - Build a 25 + 5 Clock | Learn | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock)

**Objective:** Build a [CodePen.io](https://codepen.io) app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/XpKrrW.

Fulfill the below [user stories](https://en.wikipedia.org/wiki/User_story) and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story #1:** I can see an element with `id="break-label"` that contains a string (e.g. "Break Length").

**User Story #2:** I can see an element with `id="session-label"` that contains a string (e.g. "Session Length").

**User Story #3:** I can see two clickable elements with corresponding IDs: `id="break-decrement"` and `id="session-decrement"`.

**User Story #4:** I can see two clickable elements with corresponding IDs: `id="break-increment"` and `id="session-increment"`.

**User Story #5:** I can see an element with a corresponding `id="break-length"`, which by default (on load) displays a value of 5.

**User Story #6:** I can see an element with a corresponding `id="session-length"`, which by default displays a value of 25.

**User Story #7:** I can see an element with a corresponding `id="timer-label"`, that contains a string indicating a session is initialized (e.g. "Session").

**User Story #8:** I can see an element with corresponding `id="time-left"`. NOTE: Paused or running, the value in this field should always be displayed in `mm:ss` format (i.e. 25:00).

**User Story #9:** I can see a clickable element with a corresponding `id="start_stop"`.

**User Story #10:** I can see a clickable element with a corresponding `id="reset"`.

**User Story #11:** When I click the element with the id of `reset`, any running timer should be stopped, the value within `id="break-length"` should return to `5`, the value within `id="session-length"` should return to 25, and the element with `id="time-left"` should reset to it's default state.

**User Story #12:** When I click the element with the id of `break-decrement`, the value within `id="break-length"` decrements by a value of 1, and I can see the updated value.

**User Story #13:** When I click the element with the id of `break-increment`, the value within `id="break-length"` increments by a value of 1, and I can see the updated value.

**User Story #14:** When I click the element with the id of `session-decrement`, the value within `id="session-length"` decrements by a value of 1, and I can see the updated value.

**User Story #15:** When I click the element with the id of `session-increment`, the value within `id="session-length"` increments by a value of 1, and I can see the updated value.

**User Story #16:** I should not be able to set a session or break length to <= 0.

**User Story #17:** I should not be able to set a session or break length to > 60.

**User Story #18:** When I first click the element with `id="start_stop"`, the timer should begin running from the value currently displayed in `id="session-length"`, even if the value has been incremented or decremented from the original value of 25.

**User Story #19:** If the timer is running, the element with the id of `time-left` should display the remaining time in `mm:ss` format (decrementing by a value of 1 and updating the display every 1000ms).

**User Story #20:** If the timer is running and I click the element with `id="start_stop"`, the countdown should pause.

**User Story #21:** If the timer is paused and I click the element with `id="start_stop"`, the countdown should resume running from the point at which it was paused.

**User Story #22:** When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a break has begun.

**User Story #23:** When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the `id="break-length"` element.

**User Story #24:** When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a session has begun.

**User Story #25:** When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the `id="session-length"` element.

**User Story #26:** When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 `audio` tag and have a corresponding `id="beep"`.

**User Story #27:** The audio element with `id="beep"` must be 1 second or longer.

**User Story #28:** The audio element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked.

You can build your project by forking [this CodePen pen](https://codepen.io/freeCodeCamp/pen/MJjpwO). Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.