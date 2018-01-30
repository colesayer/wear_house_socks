import React, { Component } from 'react';

class SockBumpCard extends Component{

  state={
    selected: false
  }

  handleClick = (e) => {
    console.log("clicked", e)
    this.props.selectBump(this.props.bump)
  }

  handleDelete = () => {
    console.log("DELETE", this.props)
    this.props.deleteBump(this.props.bump)
  }

  render(){
    let border = ""
    if(this.props.selectedBump.id === this.props.bump.id){
      border = "2px solid yellow"
    } else {
      border = ""
    }

    return(
      <li style={{textAlign: 'center'}}>
        <button onClick={this.handleDelete} style={{backgroundColor: 'red', color: "yellow", position: 'absolute', float: 'left'}}>X</button>
        <img src={this.props.bump.bump_url} style={{"width": "150px", "border": `${border}`, margin: '12% 15% 15% 0%'}} onClick={this.handleClick}/>
      </li>
    )
  }
}

export default SockBumpCard
