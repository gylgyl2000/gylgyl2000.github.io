function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const fullDashArray = 283;
const WARNING_THRESHOLD = 60;
const ALERT_THRESHOLD = 20;
const COLOR_CODES = {
  info: { color: "green" },
  warning: { color: "orange", threshold: WARNING_THRESHOLD },
  alert: { color: "red", threshold: ALERT_THRESHOLD } };

let remainingPathColor = "base-timer__path-remaining-info";

class ClockApp extends React.Component {
  constructor(props) {
    super(props);
    this.alarmSoundRef = React.createRef();
    this.initialState = {
      currentMode: "session",
      breakLength: 5,
      sessionLength: 25,
      seconds: 1500,
      timerStatus: "paused",
      intervalID: "",
      timeLimit: 1500,
      timerStartTime: 0,
      timeOffset: 1000,
      timePassed: 0,
      timeLeft: 0,
      timerInterval: "" };


    this.state = this.initialState;
    this.handleLengthButton = this.handleLengthButton.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.beginCounting = this.beginCounting.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
    this.soundAlarm = this.soundAlarm.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.setRemainingPathColor = this.setRemainingPathColor.bind(this);
    this.calculateTimeFraction = this.calculateTimeFraction.bind(this);
    this.setCircleDasharray = this.setCircleDasharray.bind(this);
  }

  soundAlarm() {
    this.alarmSoundRef.current.currentTime = 0;
    this.alarmSoundRef.current.play();
  }

  // Animated Countdown

  startTimer() {
    // clearInterval(this.state.timerInterval)
    this.setState({
      timeLimit: this.state.seconds,
      timeLeft: this.state.timeLimit,
      timerInterval: setInterval(() => {
        this.setState(state => ({
          timePassed: state.timePassed += 1,
          timeLeft: state.timeLimit - state.timePassed }));

        if (this.state.timeLeft === 0) {
          this.setState({
            timePassed: 0 });

        }
        this.setCircleDasharray();
        this.setRemainingPathColor();
        // clearInterval(this.timerInterval);
      }, 1000) });

  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  setRemainingPathColor() {
    const { alert, warning } = COLOR_CODES;
    if (this.state.timeLeft <= alert.threshold) {
      remainingPathColor = "base-timer__path-remaining-alert";
    } else if (this.state.timeLeft <= warning.threshold) {
      remainingPathColor = "base-timer__path-remaining-warning";
    } else if (this.state.timeLeft > warning.threshold) {
      remainingPathColor = "base-timer__path-remaining-info";
    }
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.state.timeLeft / this.state.timeLimit;
    return rawTimeFraction - 1 / this.state.timeLimit * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = `${(
    this.calculateTimeFraction() * fullDashArray).
    toFixed(0)} 283`;
    document.
    getElementById("base-timer-path-remaining").
    setAttribute("stroke-dasharray", circleDasharray);
  }

  // -----

  handleLengthButton(mode, upDown) {
    // Empêche la modification du minuteur actif
    if (this.state.currentMode === mode && this.state.timerStatus === "active") {
      return;
    }

    if (mode === "session") {
      // Plage limite
      if (this.state.sessionLength <= 1 && upDown === "decrement") {
        return;
      } else if (this.state.sessionLength >= 60 && upDown === "increment") {
        return;
      }
      // Modifier la valeur
      let newLength =
      upDown === "increment" ?
      this.state.sessionLength + 1 :
      this.state.sessionLength - 1;
      this.setState(state => ({
        sessionLength: newLength,
        seconds: state.currentMode === "session" ? newLength * 60 : state.seconds }));

    }
    // Mode pause
    else {
        // Plage limite
        if (this.state.breakLength <= 1 && upDown === "decrement") {
          return;
        } else if (this.state.breakLength >= 60 && upDown === "increment") {
          return;
        }
        // let newLength =
        //   upDown === "increment"
        //     ? this.state.breakLength + 1
        //     : this.state.breakLength - 1;
        // Modifier la valeur
        this.setState(state => ({
          breakLength:
          upDown === "increment" ? state.breakLength + 1 : state.breakLength - 1 }));

      }
  }

  handleResetButton() {
    this.alarmSoundRef.current.pause();
    this.alarmSoundRef.current.currentTime = 0;
    clearInterval(this.state.intervalID);
    clearInterval(this.state.timerInterval);
    this.setState(this.initialState);
  }

  phaseControl() {
    // Jouer l'alarme
    if (this.state.seconds === 0) {
      this.soundAlarm();
    };

    // État du commutateur
    if (this.state.seconds < 0) {
      this.setState(state => ({
        currentMode: state.currentMode === "session" ? "break" : "session",
        seconds:
        state.currentMode === "session" ?
        state.breakLength * 60 :
        state.sessionLength * 60 }));

    }
  }

  decrementTimer() {
    clearInterval(this.state.intervalID);
    this.setState({
      intervalID: setInterval(() => {
        this.setState(state => ({
          seconds: state.seconds - 1 }));

        this.phaseControl();
      }, 1000) });

  }

  beginCounting() {
    // Alerte si, pour une raison quelconque, il essaie
    // de démarrer plusieurs intervalles
    if (this.state.intervalID) {
      alert(
      "trying to start interval when interval id: " +
      this.state.intervalID +
      " is still active");

      return;
    }
    // Décrémente une fois après le décalage
    if (this.state.timeOffset !== 1000) {
      setTimeout(() => {
        this.setState(state => ({
          seconds: state.seconds - 1,
          timeOffset: 1000 }));

        this.decrementTimer();
      }, this.state.timeOffset);
    } else {
      this.decrementTimer();
    }
  }

  toggleTimer() {
    // Empêche le démarrage de plusieurs intervalles
    if (this.state.timerStatus === "paused" && this.state.intervalID) {
      this.setState(state => ({
        intervalID: clearInterval(state.intervalID),
        timerInterval: clearInterval(this.state.timerInterval) }));

      return;
    }
    if (this.state.timerStatus === "paused") {
      this.setState(state => ({
        timerStatus: "active",
        timerStartTime: new Date().getTime() }));

      this.beginCounting();
      this.startTimer();
    } else {
      let offset = 1000 - (new Date().getTime() - this.state.timerStartTime) % 1000;
      this.setState(state => ({
        timerStatus: "paused",
        timeOffset: offset,
        intervalID: clearInterval(state.intervalID),
        timerInterval: clearInterval(this.state.timerInterval) }));

    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "wrapper", className: "wrapper" }, /*#__PURE__*/
      React.createElement("div", { id: "wrapper-position" }, /*#__PURE__*/
      React.createElement("h1", { id: "title", className: "title" }, "Horloge Pomodoro"), /*#__PURE__*/
      React.createElement(DateComplete, null), /*#__PURE__*/
      React.createElement("div", { id: "controllers", className: "controllers" }, /*#__PURE__*/
      React.createElement(LengthController, {
        idType: "pomodoro",
        type: "session",
        length: this.state.sessionLength,
        handleLengthButton: this.handleLengthButton }), /*#__PURE__*/

      React.createElement(LengthController, {
        idType: "pause",
        type: "break",
        length: this.state.breakLength,
        handleLengthButton: this.handleLengthButton })), /*#__PURE__*/


      React.createElement(Timer, { type: this.state.currentMode, seconds: this.state.seconds }), /*#__PURE__*/
      React.createElement("div", { id: "playback-buttons-wrapper" }, /*#__PURE__*/
      React.createElement("button", {
        id: "start_stop",
        className: "time-button",
        onClick: this.toggleTimer
        // style={{color: themes[this.state.currentMode]["text"]}}
      },
      this.state.timerStatus === "paused" ? /*#__PURE__*/
      React.createElement("i", { className: "fas fa-play" }) : /*#__PURE__*/
      React.createElement("i", { className: "fas fa-pause" })), /*#__PURE__*/

      React.createElement("button", {
        id: "reset",
        className: "time-button",
        onClick: this.handleResetButton
        // style={{color: themes[this.state.currentMode]["text"]}}
      }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-sync-alt" }))), /*#__PURE__*/

      React.createElement("audio", {
        ref: this.alarmSoundRef,
        id: "beep",
        style: { display: "hidden" },
        src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" }))));




  }}


const Timer = props => {
  const makeClockFormat = num => {
    if (num < 10) {
      return "0" + num.toString();
    }
    return num;
  };

  let typeCap = props.type;
  typeCap = typeCap.replace('session', 'Pomodoro');
  typeCap = typeCap.replace('break', 'Pause');

  let mins = makeClockFormat(Math.floor(props.seconds / 60));
  let secs = makeClockFormat(props.seconds % 60);
  const minsF = mins.toString().split("").map(item => /*#__PURE__*/React.createElement("span", { className: "digit" }, item));
  const secsF = secs.toString().split("").map(item => /*#__PURE__*/React.createElement("span", { className: "digit" }, item));

  return /*#__PURE__*/(
    React.createElement("div", { id: "timer", className: "timer" }, /*#__PURE__*/
    React.createElement("label", { id: "timer-label" }, typeCap), /*#__PURE__*/
    React.createElement("span", { id: "time-left", className: "time-left" }, mins, ":", secs), /*#__PURE__*/
    React.createElement("div", { className: "base-timer" }, /*#__PURE__*/
    React.createElement("svg", { className: "base-timer__svg", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/
    React.createElement("g", { className: "base-timer__circle", id: "" }, /*#__PURE__*/
    React.createElement("circle", { className: "base-timer__path-elapsed", cx: "50", cy: "50", r: "45" }), /*#__PURE__*/
    React.createElement("path", {
      id: "base-timer-path-remaining",
      strokeDasharray: "283",
      className: remainingPathColor,
      d: " M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 " }))), /*#__PURE__*/








    React.createElement("span", { id: "time-left-real" }, /*#__PURE__*/
    React.createElement("label", { id: "base-timer-label" }, typeCap),
    minsF, ":", secsF))));




};

const LengthController = props => {
  const type = props.type;
  const idtype = props.idType;
  return /*#__PURE__*/(
    React.createElement("div", { id: "controllers-container", className: "controllers-container" }, /*#__PURE__*/
    React.createElement("label", { id: type + "-label" }, "Durée de " + idtype), /*#__PURE__*/
    React.createElement("div", { id: "controllers-wrapper", className: "controllers-wrapper" }, /*#__PURE__*/
    React.createElement("span", { id: type + "-length" }, props.length), /*#__PURE__*/
    React.createElement(TimeButton, {
      type: props.type,
      direction: "increment",
      theme: props.theme,
      handleClick: props.handleLengthButton }), /*#__PURE__*/

    React.createElement(TimeButton, {
      type: props.type,
      direction: "decrement",
      theme: props.theme,
      handleClick: props.handleLengthButton }))));




};

class TimeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState(state => ({
      hover: !state.hover }));

  }

  render() {
    const type = this.props.type;
    const direction = this.props.direction;

    return /*#__PURE__*/(
      React.createElement("button", {
        id: type + "-" + direction,
        className: "time-button"
        // style={style}
        , onMouseEnter: this.handleHover,
        onMouseLeave: this.handleHover,
        onClick: () => {this.props.handleClick(type, direction);} },

      direction === "increment" ? /*#__PURE__*/
      React.createElement("i", { className: "fas fa-chevron-up" }) : /*#__PURE__*/
      React.createElement("i", { className: "fas fa-chevron-down" })));



  }}
;

class DateComplete extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "getHeureCourante",


















    () => {
      let heures = new Date().getHours();
      let minutes = new Date().getMinutes();
      let secondes = new Date().getSeconds();

      if (heures < 10) {heures = '0' + heures;};
      if (minutes < 10) {minutes = '0' + minutes;};
      if (secondes < 10) {secondes = '0' + secondes;};

      this.setState({
        heureCourante: heures + ':' + minutes + ':' + secondes });

    });_defineProperty(this, "getJourCourant",

    () => {
      let mesJours = new Date().getDay();
      let mois = new Date().getMonth();

      this.setState({
        jourCourant: this.joursDeLaSemaine[mesJours],
        moisCourant: this.moisDeLAnnée[mois] });

    });this.state = { heureCourante: null, jourCourant: null, moisCourant: null };this.joursDeLaSemaine = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];this.moisDeLAnnée = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];this.componentWillMount = this.componentWillMount.bind(this);this.componentDidMount = this.componentDidMount.bind(this);this.componentWillUnmount = this.componentWillUnmount.bind(this);}componentWillMount() {this.getHeureCourante();this.getJourCourant();}

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getHeureCourante();
    }, 1000);
  }

  render() {
    let date = new Date().getDate();
    if (date === 1) {date = "1er";};
    let année = new Date().getFullYear();
    let dateCourante = this.state.jourCourant + ' ' + date + ' ' + this.state.moisCourant + ' ' + année;
    return /*#__PURE__*/(
      React.createElement("div", { id: "date" }, /*#__PURE__*/
      React.createElement("p", null, dateCourante, " - ", this.state.heureCourante)));


  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(ClockApp, null),
document.getElementById("root"));