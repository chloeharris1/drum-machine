import React from "react";

const drumSounds = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

class DrumPad extends React.Component {
    constructor(props){
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);

    }

    // Event listener for key press when component is mounted
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    // Event listener cleanup before the component is unmounted
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e){
        if(e.keyCode === this.props.keyCode){
            this.playSound();
        }
    }

    playSound(e){
        const sound = document.getElementById(this.props.keyTrigger); 
        sound.currentTime = 0;
        sound.play();
        this.props.updateDisplay(this.props.soundId);
    }
    render(){
        return (
            <div 
            className="drum-pad"
            id={this.props.soundId}
            onClick={this.playSound}>
            <audio 
            id={this.props.keyTrigger}
            src={this.props.url}/>
            {this.props.keyTrigger}
            </div>
        );
    }
};

export default DrumPad;