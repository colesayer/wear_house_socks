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
      <li className="sock-bump-card">
        <button onClick={this.handleDelete}>X</button>
        <img src={this.props.bump.bump_url} style={{"border": `${border}`}} onClick={this.handleClick}/>
        <p>{this.props.bump.name}</p>
      </li>
    )
  }
}

export default SockBumpCard
