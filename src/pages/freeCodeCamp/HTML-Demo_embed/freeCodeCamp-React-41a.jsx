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

var inputStyle = {
  width: 235,
  margin: 5
};

var CheckUserAge = function (_React$Component) {
  _inherits(CheckUserAge, _React$Component);

  var _super = _createSuper(CheckUserAge);

  function CheckUserAge(props) {
    var _this;

    _classCallCheck(this, CheckUserAge);

    _this = _super.call(this, props);

    _this.state = {
      userAge: '',
      input: ''
    };

    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckUserAge, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
  }, {
    key: "submit",
    value: function submit() {
      this.setState(function (state) {
        return {
          userAge: state.input
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var buttonOne = React.createElement("button", {
        onClick: this.submit
      }, "Submit");
      var buttonTwo = React.createElement("button", null, "You May Enter");
      var buttonThree = React.createElement("button", null, "You Shall Not Pass");
      return React.createElement("div", null, React.createElement("h3", null, "Enter Your Age to Continue"), React.createElement("input", {
        style: inputStyle,
        type: "number",
        value: this.state.input,
        onChange: this.handleChange
      }), React.createElement("br", null), this.state.userAge === '' ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree);
    }
  }]);

  return CheckUserAge;
}(React.Component);

ReactDOM.render( React.createElement(CheckUserAge, null), document.getElementById('root'));
