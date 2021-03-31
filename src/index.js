import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import DrumPad from "./drumpad";
import Controls from "./controls";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="drum-machine">
        <DrumPad />
        <Controls />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
