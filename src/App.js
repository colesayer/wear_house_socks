import React, { Component } from 'react';
import './App.css';
import ThreeContainer from './components/three/ThreeContainer.js'
import SockColorContainer from './components/sockColor/SockColorContainer.js'
import SockDesignContainer from './components/sockDesign/SockDesignContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SockColorContainer />
        <SockDesignContainer />
        <ThreeContainer />
      </div>
    );
  }
}

export default App;
