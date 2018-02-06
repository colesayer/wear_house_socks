import React, { Component } from 'react';

class NavBar extends Component{
  handleGallery = (e) => {
    e.preventDefault()
    this.props.openGallery()
  }

  handleDesigner = (e) => {
    e.preventDefault()
    this.props.closeGallery()
  }

  render(){
    return(
      <div className="navbar">
        <ul>
          <li><button onClick={this.handleGallery}>Gallery</button></li>
          <li><button onClick={this.handleDesigner}>Designer</button></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
