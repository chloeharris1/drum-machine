import React from 'react';
import './Styles.scss';

import DrumContainer from './components/DrumContainer';

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
  <div className='wrapper'>
    <div id="drum-machine">
      <div className="display-container">
        <div className='header'>
          <h1>Drum Machine</h1>
        </div>
        <div id="display">
          {this.state.display}
          </div>
      </div>
      <DrumContainer
      updateDisplay={this.displaySoundName}
      handleKeyPress={this.handleKeyPress}/>
    </div>
  </div>
  );
}
}

export default App;
