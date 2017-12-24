import React, { Component } from 'react';
import SockDesignCard from './SockDesignCard.js'

class SockDesignList extends Component{
  render(){
    const designs = this.props.sockDesigns.map((design, idx) => <SockDesignCard key={idx} design={design} {...this.props}/>)
    return(
      <ul style={{"listStyle": "none", "margin": "0 auto", "paddingTop": "5%"}}>
        {designs}
      </ul>
    )
  }
}

export default SockDesignList
