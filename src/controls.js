import React from "react";

class Controls extends React.Component {
  render() {
    return (
      <div id="drum-controls">
        <label id="display">Display Label</label>
        <input type="range" min="0" max="100" />
      </div>
    );
  }
}

export default Controls;
