import React, { Component } from 'react';

class SockGalleryCard extends Component{
  render(){
    return(
      <div><img src={this.props.sock.image}/></div>
    )
  }
}

export default SockGalleryCard
