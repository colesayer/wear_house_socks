import React, { Component } from 'react';
import ThreeView from './threeView.js';


class ThreeContainer extends Component{
  render(){
    return(
      <div id='CanvasContainer'>
        <ThreeView/>
      </div>
    )
  }
}

export default ThreeContainer
