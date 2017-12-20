import React, { Component } from 'react';
import { BlockPicker } from 'react-color'

class SockForm extends Component{
  render(){
    var blockColors = [
      '#c2da64', '#c1d263', '#49b860', '#4e6f39', '#0ab691', '#81bea2', '#0b7784', '#08859c', '#4ea4ba', '#016cab', '#2c4086', '#2c3540', '#54697b', '#578ca9', '#849ba6', '#556566', '#354847', '#4d5954', '#606049', '#a2af94',
      '#f4ed96', '#fae333', '#edbc27', '#d29236', '#63513b', '#84745b', '#755d3d', '#a89f8e', '#755d3d', '#403935', '#694d43', '#403935', '#423330', '#824b49', '#5d303a', '#5b3d43', '#43355d', '#6a5b5e', '#7b4986', '#872368',
      '#9499c1', '#c51e57', '#d770a2', '#ec8981', '#ee5628', '#d04d42', '#b81f38', '#9c413f', '#ffffff', '#eceade', '#ccccca', '#7a8387', '#47b44e', '#2b2b2b', '#000000',
    ]
    return(
      <div style={{"padding": "5%"}}>
        <BlockPicker colors={blockColors}/>
      </div>
    )
  }
}

export default SockForm
