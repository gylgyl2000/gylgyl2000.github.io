function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const drumData = [
{
  name: "Drummer-Chunk",
  key: "Q",
  src: "https://github.com/gylgyl2000/Drum-machine/raw/main/Dirty%20Drummer-Chunk.wav" },


{
  name: "Drummer-Clean",
  key: "W",
  src: "https://github.com/gylgyl2000/Drum-machine/raw/main/Dirty%20Drummer-Clean.wav" },


{
  name: "Drummer-Heavy",
  key: "E",
  src: "https://github.com/gylgyl2000/Drum-machine/raw/main/Dirty%20Drummer-Heavy.wav" },


{
  name: "Drummer-Jazz",
  key: "A",
  src: "https://github.com/gylgyl2000/Drum-machine/raw/main/Dirty%20Drummer-Jazz.wav" },


{
  name: "Drummer-Tough",
  key: "S",
  src: "https://github.com/gylgyl2000/Drum-machine/raw/main/Dirty%20Drummer-Tough.wav" },


{
  name: "Drummer-Trip",
  key: "D",
  src: "https://github.com/gylgyl2000/Drum-machine/raw/main/Dirty%20Drummer-Trip.wav" },


{
  name: "Wolfman-Chunk",
  key: "Z",
  src: "https://github.com/gylgyl2000/Drum-machine/raw/main/The%20Wolfman-Chunk.wav" },


{
  name: "Wolfman-Clean",
  key: "X",
  src: "https://github.com/gylgyl2000/Drum-machine/raw/main/The%20Wolfman-Clean.wav" },


{
  name: "Wolfman-Tough",
  key: "C",
  src: "https://github.com/gylgyl2000/Drum-machine/raw/main/The%20Wolfman-Tough.wav" }];


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "changeDisplay",





    name => {
      this.setState({ display: name });
    });this.state = { display: "Cliquez sur une tuile !" };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h3", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", { className: "drum-buttons" },
      drumData.map((button) => /*#__PURE__*/
      React.createElement(DrumPad, {
        changeDisplay: this.changeDisplay,
        name: button.name,
        key: button.key,
        id: button.key,
        src: button.src })))));





  }}



class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleClick",








    () => {
      this.audio.play();
      this.props.changeDisplay(this.props.name);
    });_defineProperty(this, "handleKeydown",

    e => {
      if (e.keyCode === this.props.id.charCodeAt()) {
        this.audio.play();
        this.props.changeDisplay(this.props.name);
      }
    });}componentDidMount() {document.addEventListener("keydown", this.handleKeydown);}componentWillUnmount() {document.removeEventListener("keydown", this.handleKeydown);}

  render() {

    const { id, src } = this.props;

    return /*#__PURE__*/(
      React.createElement("div", { onClick: this.handleClick, className: "drum-pad", id: id },
      id, /*#__PURE__*/
      React.createElement("audio", {
        ref: ref => this.audio = ref,
        className: "clip",
        id: id,
        src: src })));



  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));