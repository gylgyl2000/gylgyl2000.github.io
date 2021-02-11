"use strict";

const JSX =
    React.createElement("div", null,
        React.createElement("h2", null, "Welcome to React!"),
        " ",
        React.createElement("br", null),
        React.createElement("p", null, "Be sure to close all tags!"),
        React.createElement("hr", null)
    );

ReactDOM.render(JSX, document.getElementById('root'));