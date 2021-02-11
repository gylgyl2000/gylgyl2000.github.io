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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Redux:
var ADD = 'ADD';

var addMessage = function addMessage(message) {
  return {
    type: ADD,
    message: message
  };
};

var messageReducer = function messageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD:
      return [].concat(_toConsumableArray(state), [action.message]);

    default:
      return state;
  }
};

var store = Redux.createStore(messageReducer); // React:

var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect; // Change code below this line

var Presentational = function (_React$Component) {
  _inherits(Presentational, _React$Component);

  var _super = _createSuper(Presentational);

  function Presentational(props) {
    var _this;

    _classCallCheck(this, Presentational);

    _this = _super.call(this, props);
    _this.state = {
      input: '' // ,
      // messages: []

    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.submitMessage = _this.submitMessage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Presentational, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
  }, {
    key: "submitMessage",
    value: function submitMessage() {
      // this.setState((state) => ({
      // input: '',
      // messages: state.messages.concat(state.input)
      // }));
      this.props.submitNewMessage(this.state.input);
      this.setState({
        input: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h2", null, "Type in a new Message:"), React.createElement("input", {
        value: this.state.input,
        onChange: this.handleChange
      }), React.createElement("br", null), React.createElement("button", {
        onClick: this.submitMessage
      }, "Submit"), React.createElement("ul", null, this.props.messages.map(function (message, idx) {
        return React.createElement("li", {
          key: idx
        }, message);
      })));
    }
  }]);

  return Presentational;
}(React.Component);

; // Change code above this line

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

var Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

var AppWrapper = function (_React$Component2) {
  _inherits(AppWrapper, _React$Component2);

  var _super2 = _createSuper(AppWrapper);

  function AppWrapper() {
    _classCallCheck(this, AppWrapper);

    return _super2.apply(this, arguments);
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        store: store
      }, React.createElement(Container, null));
    }
  }]);

  return AppWrapper;
}(React.Component);

ReactDOM.render( React.createElement(AppWrapper, null), document.getElementById('root'));
