import React from "react";

class DrumPad extends React.Component {
  render() {
    let sound = new Audio("../public/african-pe-lo.wav");
    const start = () => {
      console.log("in function");
      sound.play();
    };

    return (
      <div id="drum-buttons">
        <button id="Q" className="drum-pad" onClick={start}>
          Q
        </button>
        <button id="W" className="drum-pad">
          W
        </button>
        <button id="E" className="drum-pad">
          E
        </button>
        <button id="A" className="drum-pad">
          A
        </button>
        <button id="S" className="drum-pad">
          S
        </button>
        <button id="D" className="drum-pad">
          D
        </button>
        <button id="Z" className="drum-pad">
          Z
        </button>
        <button id="X" className="drum-pad">
          X
        </button>
        <button id="C" className="drum-pad">
          C
        </button>
      </div>
    );
  }
}

export default DrumPad;
