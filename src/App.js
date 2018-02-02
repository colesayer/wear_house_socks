import React, { Component } from 'react';
import './App.css';
import ThreeContainer from './components/three/ThreeContainer.js'
import SockPickerContainer from './components/sockPicker/sockPickerContainer.js'
import SockColorContainer from './components/sockColor/sockColorContainer.js'
import SockDesignContainer from './components/sockDesign/sockDesignContainer.js'
import SockBumpContainer from './components/sockBump/sockBumpContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SockPickerContainer />
        <SockColorContainer />
        <SockDesignContainer />
        <SockBumpContainer />
        <ThreeContainer />
      </div>
    );
  }
}

export default App;
