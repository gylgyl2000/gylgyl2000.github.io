import React from 'react';
import ReactDOM from 'react-dom';

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

var addMessage = function addMessage(message) {
  return {
    type: 'ADD',
    message: message
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: function submitNewMessage(message) {
      dispatch(addMessage(message));
    }
  };
};

var Presentational = function (_React$Component) {
  _inherits(Presentational, _React$Component);

  var _super = _createSuper(Presentational);

  function Presentational(props) {
    _classCallCheck(this, Presentational);

    return _super.call(this, props);
  }

  _createClass(Presentational, [{
    key: "render",
    value: function render() {
      return React.createElement("h3", null, "This is a Presentational Component");
    }
  }]);

  return Presentational;
}(React.Component);

;
var connect = ReactRedux.connect; // Change code below this line

var ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);



var store = Redux.createStore(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '__INITIAL__STATE__';
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
});

var AppWrapper = function (_React$Component) {
  _inherits(AppWrapper, _React$Component);

  var _super = _createSuper(AppWrapper);

  function AppWrapper() {
    _classCallCheck(this, AppWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: function render() {
      return React.createElement(ReactRedux.Provider, {
        store: store
      }, React.createElement(ConnectedComponent, null));
    }
  }]);

  return AppWrapper;
}(React.Component);

;
ReactDOM.render( React.createElement(AppWrapper, null), document.getElementById('root'));
