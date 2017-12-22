import React, { Component } from 'react';
import './App.css';
import ThreeContainer from './components/three/ThreeContainer.js'
import SockColorContainer from './components/sockColor/SockColorContainer.js'
import SockImageContainer from './components/sockImage/SockImageContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SockColorContainer />
        <SockImageContainer />
        <ThreeContainer />
      </div>
    );
  }
}

export default App;
