import React, { Component } from 'react';
import './App.css';
import ThreeContainer from './components/three/threeContainer.js'
import SideBarContainer from './components/sideBar/sideBarContainer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBarContainer />
        <div className="three-container">
          <ThreeContainer />
        </div>
      </div>
    );
  }
}

export default App;
