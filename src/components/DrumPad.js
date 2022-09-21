import React from "react";

const activeStyle = {
    minWidth: '6.25rem',
    height: '6.25rem',
    margin: '0.2rem',
    textAlign: 'center',
    borderRadius: '50%',
    fontSize: '1.1rem',
    zIndex: '1',
    border: '2px solid silver',
    boxShadow: '0 0 2px 2px darkgray',
    background: 'radial-gradient(darkgray, #fff)',
    backgroundRepeat: 'no-repeat',
    paddingTop: '38%'

}

const inactiveStyle = {
    minWidth: '6.25rem',
    height: '6.25rem',
    margin: '0.2rem',
    textAlign: 'center',
    paddingTop: '35%',
    borderRadius: '50%',
    fontSize: '1.1rem',
    zIndex: '1',
    backgroundColor: 'white',
    border: '2px solid silver',
    boxShadow: '0 0 2px 2px darkgray'
}



class DrumPad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            padStyle: inactiveStyle
        }
       
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);
        this.activatePad = this.activatePad.bind(this);

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

    activatePad(){
        if(this.state.padStyle.background === 'radial-gradient(darkgray, #fff)'){
            this.setState({
                padStyle: inactiveStyle
            });
        } else {
            this.setState({
                padStyle: activeStyle
            });
        }
    }

    playSound(e){
        const sound = document.getElementById(this.props.keyTrigger); 
        sound.currentTime = 0;
        sound.play();
        this.activatePad();
    setTimeout(() => this.activatePad(), 100);
        this.props.updateDisplay(this.props.soundId);
    }
    render(){
        return (
            <div 
            className="drum-pad"
            id={this.props.soundId}
            onClick={this.playSound}
            style={this.state.padStyle}>
            <audio 
            className="clip"
            id={this.props.keyTrigger}
            src={this.props.url}/>
            {this.props.keyTrigger}
            </div>
        );
    }
};

export default DrumPad;