import React, { Component } from 'react';
import SockBumpCard from './sockBumpCard.js'

class SockBumpList extends Component{
  render(){
      const bumps = this.props.sockBumps.map((bump, idx) => <SockBumpCard key={idx} bump={bump} {...this.props}/>)
    return(
      <ul style={{"listStyle": "none", "margin": "0 auto", "paddingTop": "5%"}}>
        {bumps}
      </ul>
    )
  }
}

export default SockBumpList
