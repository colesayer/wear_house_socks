import React, { Component } from 'react';
import SockPickerForm from './sockPickerForm.js'

class SockPickerContainer extends Component{
  render(){
    return(
      <div className="sock-picker-container">
        <SockPickerForm />
      </div>

    )
  }
}

export default SockPickerContainer
