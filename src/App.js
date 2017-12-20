import React, { Component } from 'react';
import './App.css';
import ThreeContainer from './components/three/ThreeContainer.js'
import SockContainer from './components/sock/SockContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SockContainer />
        <ThreeContainer />
      </div>
    );
  }
}

export default App;
