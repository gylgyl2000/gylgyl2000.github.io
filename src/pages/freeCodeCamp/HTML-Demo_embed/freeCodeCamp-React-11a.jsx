import React from 'react';

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.varructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _classCallCheck(instance, varructor) { if (!(instance instanceof varructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(varructor, protoProps, staticProps) { if (protoProps) _defineProperties(varructor.prototype, protoProps); if (staticProps) _defineProperties(varructor, staticProps); return varructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { varructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectvarruct = _isNativeReflectvarruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectvarruct) { var NewTarget = _getPrototypeOf(this).varructor; result = Reflect.varruct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possiblevarructorReturn(this, result); }; }
function _possiblevarructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectvarruct() { if (typeof Reflect === "undefined" || !Reflect.varruct) return false; if (Reflect.varruct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.varruct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NonCitrus = function (_React$Component) {
  _inherits(NonCitrus, _React$Component);

  var _super = _createSuper(NonCitrus);

  function NonCitrus() {
    _classCallCheck(this, NonCitrus);

    return _super.apply(this, arguments);
  }

  _createClass(NonCitrus, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null,
        React.createElement("h4", null, "Non-Citrus:"),
        React.createElement("ul", null,
            React.createElement("li", null, "Apples"),
            React.createElement("li", null, "Blueberries"),
            React.createElement("li", null, "Strawberries"),
            React.createElement("li", null, "Bananas")
        )
    );
    }
  }]);

  return NonCitrus;
}(React.Component);

;

var Citrus = function (_React$Component2) {
  _inherits(Citrus, _React$Component2);

  var _super2 = _createSuper(Citrus);

  function Citrus() {
    _classCallCheck(this, Citrus);

    return _super2.apply(this, arguments);
  }

  _createClass(Citrus, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null,
        React.createElement("h4", null, "Citrus:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Lemon"),
                React.createElement("li", null, "Lime"),
                React.createElement("li", null, "Orange"),
                React.createElement("li", null, "Grapefruit")
            )
        );
    }
  }]);

  return Citrus;
}(React.Component);

;

var Vegetables = function (_React$Component3) {
  _inherits(Vegetables, _React$Component3);

  var _super3 = _createSuper(Vegetables);

  function Vegetables() {
    _classCallCheck(this, Vegetables);

    return _super3.apply(this, arguments);
  }

  _createClass(Vegetables, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null,
        React.createElement("h2", null, "Vegetables:"),
        React.createElement("ul", null,
            React.createElement("li", null, "Brussel Sprouts"),
            React.createElement("li", null, "Broccoli"),
            React.createElement("li", null, "Squash")));
    }
  }]);

  return Vegetables;
}(React.Component);

"use strict";


var Fruits = function (_React$Component) {
  _inherits(Fruits, _React$Component);

  var _super = _createSuper(Fruits);

  function Fruits(props) {
    _classCallCheck(this, Fruits);

    return _super.call(this, props);
  }

  _createClass(Fruits, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null,
        React.createElement("h2", null, "Fruits:"),
        React.createElement(NonCitrus, null),
        React.createElement(Citrus, null)
        );
    }
  }]);

  return Fruits;
}(React.Component);

;

var TypesOfFood = function (_React$Component2) {
  _inherits(TypesOfFood, _React$Component2);

  var _super2 = _createSuper(TypesOfFood);

  function TypesOfFood(props) {
    _classCallCheck(this, TypesOfFood);

    return _super2.call(this, props);
  }

  _createClass(TypesOfFood, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null,
        React.createElement("h1", null, "Types of Food:"),
        React.createElement(Fruits, null),
        React.createElement(Vegetables, null));
    }
  }]);

  return TypesOfFood;
}(React.Component);

ReactDOM.render( React.createElement(TypesOfFood, null), document.getElementById('root'));
