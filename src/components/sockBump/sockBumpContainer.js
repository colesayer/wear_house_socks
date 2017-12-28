import React, { Component } from 'react';
import SockBumpForm from './sockBumpForm.js'
import { createBump, fetchBumps, selectBump } from '../../actions/sockBumps.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SockBumpContainer extends Component{
  render(){
    return(
      <div id="SockBumpBar">
        <div style={{"padding": "5%"}}>
        <h4>Add Bump Map:</h4>
        <SockBumpForm createBump={this.props.createBump}/>
        </div>

      </div>
    )
  }
}

export default connect()(SockBumpContainer)
