import React, { Component } from 'react';
import './App.css';
import ThreeContainer from './components/three/ThreeContainer.js'
import SockColorContainer from './components/sockColor/SockColorContainer.js'
import SockDesignContainer from './components/sockDesign/SockDesignContainer.js'
import SockBumpContainer from './components/sockBump/sockBumpContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SockColorContainer />
        <SockDesignContainer />
        <SockBumpContainer />
        <ThreeContainer />
      </div>
    );
  }
}

export default App;
