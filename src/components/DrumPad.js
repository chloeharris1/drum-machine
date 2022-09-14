import React from "react";


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