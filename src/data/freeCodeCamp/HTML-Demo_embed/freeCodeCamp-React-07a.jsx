import React from 'react';
import ReactDOM from 'react-dom';

"use strict";

const MyComponent = function MyComponent() {
    return React.createElement("div", null, "Hello JSX!");
};

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('root'));