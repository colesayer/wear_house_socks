import React, { Component } from 'react';
import SockGalleryCard from './sockGalleryCard.js'

class SockGalleryList extends Component{
  render(){
    console.log("SOCKS!", this.props.socks)
    const socks = this.props.socks.map((sock, idx) => <SockGalleryCard key={idx} sock={sock} {...this.props}/>)
    return(
      <div className="sock-gallery-list">
        {socks}
      </div>
    )
  }
}

export default SockGalleryList
