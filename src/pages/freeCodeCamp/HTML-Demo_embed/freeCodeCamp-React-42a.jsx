import React from 'react';

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Results = function (_React$Component) {
  _inherits(Results, _React$Component);

  var _super = _createSuper(Results);

  function Results(props) {
    _classCallCheck(this, Results);

    return _super.call(this, props);
  }

  _createClass(Results, [{
    key: "render",
    value: function render() {
      {
        /* Change code below this line */
      }
      return React.createElement("h1", null, this.props.fiftyFifty ? "You Win!" : "You Lose!");
      {
        /* Change code above this line */
      }
    }
  }]);

  return Results;
}(React.Component);

var GameOfChance = function (_React$Component2) {
  _inherits(GameOfChance, _React$Component2);

  var _super2 = _createSuper(GameOfChance);

  function GameOfChance(props) {
    var _this;

    _classCallCheck(this, GameOfChance);

    _this = _super2.call(this, props);
    _this.state = {
      counter: 1
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GameOfChance, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        counter: this.state.counter + 1 // Change this line

      });
    }
  }, {
    key: "render",
    value: function render() {
      var expression = Math.random() >= 0.5 ? true : false; // Change this line

      return React.createElement("div", null, React.createElement("button", {
        onClick: this.handleClick
      }, "Play Again"), React.createElement(Results, {
        fiftyFifty: expression
      }), React.createElement("p", null, 'Turn: ' + this.state.counter));
    }
  }]);

  return GameOfChance;
}(React.Component);

ReactDOM.render( React.createElement(GameOfChance, null), document.getElementById('root'));
