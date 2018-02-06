import React, { Component } from 'react';
import ThreeView from './threeView.js';
import ThreeControls from './threeControls.js'

class ThreeContainer extends Component{
  render(){
    return(
      <div id='CanvasContainer'>
        <ThreeControls />
        <ThreeView/>
      </div>
    )
  }
}

export default ThreeContainer
