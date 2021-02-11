"use strict";

const JSX =
    React.createElement("div", {
        className: "myDiv"
    },
        React.createElement("h1", null, "Add a class to this div")
    );

ReactDOM.render(JSX, document.getElementById('root'));