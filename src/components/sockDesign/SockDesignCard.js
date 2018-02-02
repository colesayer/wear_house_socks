import React, { Component } from 'react';

class SockDesignCard extends Component{
  state={
    selected: false
  }

  handleClick = () => {
    this.props.selectDesign(this.props.design)
  }

  handleDelete = () => {
    console.log("DELETE", this.props)
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
      <li style={{textAlign: 'center'}}>
      <button onClick={this.handleDelete} style={{backgroundColor: 'white', color: "gray", position: 'absolute', float: 'left'}}>X</button>
        <img src={this.props.design.design_url} style={{"width": "150px", "border": `${border}`, margin: '12% 15% 15% 0%'}} onClick={this.handleClick}/>

      </li>
    )
  }
}

export default SockDesignCard
