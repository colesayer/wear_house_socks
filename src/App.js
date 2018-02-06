import React, { Component } from 'react';
import './App.css';
import ThreeContainer from './components/three/threeContainer.js'
import SockPickerContainer from './components/sockPicker/sockPickerContainer.js'
import SockColorContainer from './components/sockColor/sockColorContainer.js'
import SockDesignContainer from './components/sockDesign/sockDesignContainer.js'
import SockBumpContainer from './components/sockBump/sockBumpContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <SockPickerContainer />
          <SockColorContainer />
          <SockDesignContainer />
          <SockBumpContainer />
        </div>
        <div className="three-container">
          <ThreeContainer />
        </div>
      </div>
    );
  }
}

export default App;
