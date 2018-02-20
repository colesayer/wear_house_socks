import React, { Component } from 'react';
import SockColorForm from './sockColorForm.js'

class SockColorContainer extends Component{
  render(){
    return(
      <div className="sock-color-container">
        <SockColorForm />
      </div>
    )
  }
}

export default SockColorContainer
