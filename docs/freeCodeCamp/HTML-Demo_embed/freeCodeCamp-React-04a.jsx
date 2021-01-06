"use strict";

const JSX =
    React.createElement("div", null,
        React.createElement("h1", null, "Hello World"),
        React.createElement("p", null, "Lets render this to the DOM"));

ReactDOM.render(JSX, document.getElementById('challenge-node'));