"use strict";

var frontEndFrameworks = ['React', 'Angular', 'Ember', 'Knockout', 'Backbone', 'Vue'];

function Frameworks() {
  var renderFrameworks = frontEndFrameworks.map(function (i) {
    return React.createElement("li", {
        key: i + 1
    }, i);
  });

  return React.createElement("div", null, React.createElement("h1", null, "Popular Front End JavaScript Frameworks"), React.createElement("ul", null, renderFrameworks));
}

ReactDOM.render( React.createElement(Frameworks, null), document.getElementById('root'));
