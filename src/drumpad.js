import React from "react";

class DrumPad extends React.Component {
  render() {
    let soundVolume = this.props.volume / 100;

    const handleButton = (event) => {
      let name = event.target.id;
      let sound = document.getElementById(name).firstChild;
      document.getElementById(name).firstChild.volume = soundVolume;
      sound.play();
    };

    return (
      <div id="drum-buttons">
        <button id="Heater" className="drum-pad" onClick={handleButton}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            className="clip"
            id="Q"
          ></audio>
          Q
        </button>
        <button id="Disc-Oh" className="drum-pad" onClick={handleButton}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            className="clip"
            id="W"
          ></audio>
          W
        </button>
        <button id="Kick-Hat" className="drum-pad" onClick={handleButton}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            className="clip"
            id="E"
          ></audio>
          E
        </button>
        <button id="Cev" className="drum-pad" onClick={handleButton}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            className="clip"
            id="A"
          ></audio>
          A
        </button>
        <button id="Chord" className="drum-pad" onClick={handleButton}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
            className="clip"
            id="S"
          ></audio>
          S
        </button>
        <button id="Dry-Oh" className="drum-pad" onClick={handleButton}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
            className="clip"
            id="D"
          ></audio>
          D
        </button>
        <button id="Punch-Kick" className="drum-pad" onClick={handleButton}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
            className="clip"
            id="Z"
          ></audio>
          Z
        </button>
        <button id="Side-Stick" className="drum-pad" onClick={handleButton}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
            className="clip"
            id="X"
          ></audio>
          X
        </button>
        <button id="Break-Snare" className="drum-pad" onClick={handleButton}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
            className="clip"
            id="C"
          ></audio>
          C
        </button>
      </div>
    );
  }
}

export default DrumPad;
