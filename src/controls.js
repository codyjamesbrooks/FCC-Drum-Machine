import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Controls extends React.Component {
  render() {
    return (
      <div id="drum-controls">
        <label id="display">{this.props.name}</label>
        <label>Volume: {this.props.volume} %</label>
        <Slider
          min={0}
          max={100}
          value={this.props.volume}
          onChange={this.props.sliderChange}
        />
      </div>
    );
  }
}

export default Controls;
