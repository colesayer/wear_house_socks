import React, { Component } from 'react';
import SockDesignForm from './SockDesignForm.js'
import SockDesignList from './SockDesignList.js'
import { createDesign, fetchDesigns, selectDesign, deleteDesign } from '../../actions/sockDesigns.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SockDesignContainer extends Component{

  componentDidMount(){
    this.props.fetchDesigns()
  }
  render(){
    return(
      <div id="SockDesignBar">
        <div style={{"padding": "5%"}}>
        <h4>Add Design:</h4>
        <SockDesignForm createDesign={this.props.createDesign}/>
        </div>
        <div style={{"padding": "5%"}}>
        <h4>Select Design:</h4>
        <SockDesignList sockDesigns={this.props.sockDesigns} selectDesign={this.props.selectDesign} selectedDesign={this.props.selectedDesign} deleteDesign={this.props.deleteDesign}/>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    sockDesigns: state.sockDesigns,
    selectedDesign: state.selectedDesign
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createDesign: createDesign,
    fetchDesigns: fetchDesigns,
    selectDesign: selectDesign,
    deleteDesign: deleteDesign,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SockDesignContainer)
