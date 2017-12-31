import React, { Component } from 'react';

class SockBumpCard extends Component{

  state={
    selected: false
  }

  handleClick = (e) => {
    console.log("clicked", e)
    this.props.selectBump(this.props.bump)
  }

  render(){
    let border = ""
    if(this.props.selectedBump.id === this.props.bump.id){
      border = "2px solid yellow"
    } else {
      border = ""
    }

    return(
      <li>
        <img src={this.props.bump.bump_url} style={{"width": "150px", "border": `${border}`}} onClick={this.handleClick}/>
      </li>
    )
  }
}

export default SockBumpCard
