import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import DrumPad from "./drumpad";
import Controls from "./controls";

/* Object used for Key Press event listening */
const drumKeys = {
  81: "Q",
  87: "W",
  69: "E",
  65: "A",
  83: "S",
  68: "D",
  90: "Z",
  88: "X",
  67: "C",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onButton = this.onButton.bind(this);
    this.state = {
      name: "Drum Sound",
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress);
    document.addEventListener("click", this.onButton);
  }

  onKeyPress(event) {
    if (drumKeys.hasOwnProperty(event.keyCode)) {
      let button = document.getElementById(drumKeys[event.keyCode])
        .parentElement;
      button.click();
      button.focus();
    }
  }

  onButton(event) {
    if (event.target.type === "submit") {
      this.setState({ name: event.target.id });
    }
  }

  render() {
    return (
      <div id="drum-machine">
        <DrumPad />
        <Controls name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
