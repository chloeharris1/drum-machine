import React from 'react';
import './Styles.scss';

import DrumContainer from './components/DrumContainer';
// import drumSounds from './drumSounds';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
    this.displaySoundName = this.displaySoundName.bind(this);
    
  }
  displaySoundName(name) {
    this.setState({
      display: name
    });
  }

render() {
  return (
  <div className='app'>
    <div className='header'>
      <h1>Drum Machine</h1>
    </div>
    <div id="drum-machine">
        <DrumContainer
        updateDisplay={this.displaySoundName}
        handleKeyPress={this.handleKeyPress}/>
      <div className="display-container">
        <p id="display">{this.state.display}</p>
      </div>
    </div>
  </div>
  );
}
}

export default App;
