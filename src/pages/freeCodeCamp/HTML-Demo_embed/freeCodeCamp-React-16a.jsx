import React from 'react';

"use strict";

var ShoppingCart = function ShoppingCart(props) {
  return React.createElement("div", null,
    React.createElement("h1", null, "Shopping Cart Component"));
};

ShoppingCart.defaultProps = {
  items: 0
};

ReactDOM.render( React.createElement(ShoppingCart, null), document.getElementById('root'));
