import React, { Component } from 'react';

class SockDesignCard extends Component{

  handleClick = () => {
    this.props.selectDesign(this.props.design)
  }

  handleDelete = () => {
    this.props.deleteDesign(this.props.design)
  }


  render(){
    let border = ""
    if(this.props.selectedDesign.id === this.props.design.id){
      border = "2px solid yellow"
    } else {
      border = ""
    }

    return(
      <li className="sock-design-card" style={{textAlign: 'center'}}>
        <button onClick={this.handleDelete}>X</button>
        <img alt="" src={this.props.design.design_url} style={{"border": `${border}`}} onClick={this.handleClick}/>
        <p>{this.props.design.name}</p>
      </li>
    )
  }
}

export default SockDesignCard
