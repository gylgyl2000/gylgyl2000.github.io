import React from 'react';

"use strict";

const JSX =
    React.createElement("div", null,
        React.createElement("h1", null, "This is a block of JSX"),
        React.createElement("p", null, "Here's a subtitle")
    );

ReactDOM.render(JSX, document.getElementById('root'));