import React, { Component } from 'react';
import { BlockPicker } from 'react-color'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseToeColor, chooseHeelColor, chooseWeltColor } from '../../actions/sockColors.js'

class SockColorForm extends Component{

  handleToeColor = (color) => {
    this.props.chooseToeColor(color.hex)
  }

  handleHeelColor = (color) => {
    this.props.chooseHeelColor(color.hex)
  }

  handleWeltColor = (color) => {
    this.props.chooseWeltColor(color.hex)
  }
  render(){
    var blockColors = [
      '#c2da64', '#c1d263', '#49b860', '#4e6f39', '#0ab691', '#81bea2', '#0b7784', '#08859c', '#4ea4ba', '#016cab', '#2c4086', '#2c3540', '#54697b', '#578ca9', '#849ba6', '#556566', '#354847', '#4d5954', '#606049', '#a2af94',
      '#f4ed96', '#fae333', '#edbc27', '#d29236', '#63513b', '#84745b', '#a89f8e', '#755d3d', '#694d43', '#403935', '#423330', '#824b49', '#5d303a', '#5b3d43', '#43355d', '#6a5b5e', '#7b4986', '#872368',
      '#9499c1', '#c51e57', '#d770a2', '#ec8981', '#ee5628', '#d04d42', '#b81f38', '#9c413f', '#ffffff', '#eceade', '#ccccca', '#7a8387', '#47b44e', '#2b2b2b', '#000000',
    ]
    return(
      <div style={{"padding": "5%"}}>
        <h4>Toe Color:</h4>
        <BlockPicker colors={blockColors} onChange={this.handleToeColor} color={this.props.sockToe}/>
        <h4>Heel Color:</h4>
        <BlockPicker colors={blockColors} onChange={this.handleHeelColor} color={this.props.sockHeel}/>
        <h4>Welt Color:</h4>
        <BlockPicker colors={blockColors} onChange={this.handleWeltColor} color={this.props.sockWelt}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    sockToe: state.sockToe,
    sockHeel: state.sockHeel,
    sockWelt: state.sockWelt
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    chooseToeColor: chooseToeColor,
    chooseHeelColor: chooseHeelColor,
    chooseWeltColor: chooseWeltColor
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SockColorForm)
