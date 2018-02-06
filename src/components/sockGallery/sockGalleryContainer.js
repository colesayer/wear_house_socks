import React, { Component } from 'react';
import SockGalleryList from './sockGalleryList.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSocks } from '../../actions/sockGallery.js'

class SockGalleryContainer extends Component{
  componentDidMount(){
    this.props.fetchSocks()
  }
  render(){
    return(
      <div className="sock-gallery-container">
        <SockGalleryList socks={this.props.savedSocks}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    savedSocks: state.savedSocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSocks: fetchSocks,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SockGalleryContainer)
