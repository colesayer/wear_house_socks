import React, { Component } from 'react';
import NavBar from '../navBar/navBar.js'
import SockGalleryContainer from '../sockGallery/sockGalleryContainer.js'
import SockPickerContainer from '../sockPicker/sockPickerContainer.js'
import SockColorContainer from '../sockColor/sockColorContainer.js'
import SockDesignContainer from '../sockDesign/sockDesignContainer.js'
import SockBumpContainer from '../sockBump/sockBumpContainer.js'

class SideBarContainer extends Component{
  state = {
    galleryIsOpen: false,
  }

  openGallery = () => {
    this.setState({
      galleryIsOpen: true
    })
  }

  closeGallery = () => {
    this.setState({
      galleryIsOpen: false
    })
  }

  render(){
    let sideBarContent = ""
    if(this.state.galleryIsOpen){
      sideBarContent =
      <SockGalleryContainer />
    } else {
      sideBarContent =
      <div>
      <SockPickerContainer />
      <SockColorContainer />
      <SockDesignContainer />
      <SockBumpContainer />
      </div>
    }

    return(
      <div className="sidebar">
        <NavBar openGallery={this.openGallery} closeGallery={this.closeGallery}/>
        {sideBarContent}
      </div>

    )
  }
}

export default SideBarContainer
