import React, { Component } from 'react';
import SockPickerForm from './sockPickerForm.js'

class SockPickerContainer extends Component{
  render(){
    return(
      <div className="sock-picker-container" style={{backgroundColor: 'blue'}}>
        <SockPickerForm />
      </div>

    )
  }
}

export default SockPickerContainer
