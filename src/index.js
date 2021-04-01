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

    // Listener Bindings
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onButton = this.onButton.bind(this);

    // Function passed to volume slider to set update the volume state
    this.sliderChange = this.sliderChange.bind(this);

    // state variables. Name will be used in the display window to "name" the sound.
    this.state = {
      name: "Drum Sound",
      volume: 100,
    };
  }
  /* Add the event listeners, one listening for keypress. Will allow for buttons to be triggered by keyboard
    click listener is what will trigger the display update. Will listen for any button click (performed via "click" or 
    key press) and then will update the display*/
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress);
    document.addEventListener("click", this.onButton);
  }

  onKeyPress(event) {
    // Monitor key press events. If the keyCode is one of the drumKeys, target that button then click and focus it
    if (drumKeys.hasOwnProperty(event.keyCode)) {
      let button = document.getElementById(drumKeys[event.keyCode])
        .parentElement;
      button.click();
      button.focus();
    }
  }

  onButton(event) {
    // Monitor clicks. If the click occured on a button update the state.name variable (This will update the display)
    if (event.target.type === "submit") {
      this.setState({ name: event.target.id });
    }
  }

  sliderChange = (value) => {
    /* Function passed to the control conponent, updates state.volume which is passed to the drumPad, and then applied to 
    the HTML audio elements when they are played */
    this.setState({ volume: value });
  };

  render() {
    return (
      <div id="drum-machine">
        <DrumPad volume={this.state.volume} />
        <Controls
          name={this.state.name}
          volume={this.state.volume}
          sliderChange={this.sliderChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
