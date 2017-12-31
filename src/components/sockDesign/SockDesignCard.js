import React, { Component } from 'react';

class SockDesignCard extends Component{
  state={
    selected: false
  }

  handleClick = (e) => {
    console.log("clicked", e)
    this.props.selectDesign(this.props.design)
  }
  render(){
    let border = ""
    if(this.props.selectedDesign.id === this.props.design.id){
      border = "2px solid yellow"
    } else {
      border = ""
    }

    return(
      <li>
      <img src={this.props.design.design_url} style={{"width": "150px", "border": `${border}`}} onClick={this.handleClick}/>
      </li>
    )
  }
}

export default SockDesignCard
