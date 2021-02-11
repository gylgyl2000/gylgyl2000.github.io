import React from 'react';

"use strict";

const JSX =
    React.createElement("div", null,
        React.createElement("h1", null, "Animaux"),
        React.createElement("p", null, "Mammif\xE8res"),
        React.createElement("ul", null,
            React.createElement("li", null, "Chat"),
            React.createElement("li", null, "Chien"),
            React.createElement("li", null, "Cheval")
        )
    );

ReactDOM.render(JSX, document.getElementById('root'));