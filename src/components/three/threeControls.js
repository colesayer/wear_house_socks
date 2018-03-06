import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class threeControls extends Component{
  state = {
    saveModalIsOpen: false,
    renderModalIsOpen: false,
    name: "",
  }

  openSaveModal = () => {
    this.props.resetCamera()
    this.setState({
      saveModalIsOpen: true
    })
  }

  closeSaveModal = () => {
    this.setState({
      saveModalIsOpen: false
    })
  }

  openRenderModal = () => {
    this.props.onRender()
    this.setState({
      renderModalIsOpen: true
    })
  }

  closeRenderModal = () => {
    this.setState({
      renderModalIsOpen: false
    })
  }

  handleInput = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSave = (e) => {
    e.preventDefault()
    this.props.onSave(this.state.name)
    this.setState({
      saveModalIsOpen: false
    })
  }

  handleDownload = () => {
    var link = document.createElement('a');
    link.href = this.props.rendering
    link.download = 'Rendering.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }

  handleCamera = () => {
    this.props.resetCamera()
  }

  render(){
    let saveModalContent = ""
    if(!this.props.selectedDesign.id || !this.props.selectedBump.id){
      saveModalContent =
      <div>
      <h2 ref={subtitle => this.subtitle = subtitle}>You must select a design and bump.</h2>
      <button onClick={this.closeSaveModal}>close</button>
      </div>
    } else {
      saveModalContent =
      <div>
      <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
      <button onClick={this.closeSaveModal}>close</button>
      <div>Name Your Design:</div>
      <form>
        <input onChange={this.handleInput}/>
        <button onClick={this.handleSave}>Save</button>
      </form>
      </div>
    }
    return(
      <div className="three-controls">
        <button onClick={this.openSaveModal}>save</button>
        <button onClick={this.handleCamera}>reset camera</button>
        <button onClick={this.openRenderModal}>render</button>
        <Modal
          isOpen={this.state.saveModalIsOpen}
          onRequestClose={this.closeSaveModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        {saveModalContent}
        </Modal>
        <Modal
          isOpen={this.state.renderModalIsOpen}
          onRequestClose={this.closeRenderModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <img src={this.props.rendering} />
        <div className="modal-buttons">
          <button onClick={this.closeRenderModal}>close</button>
          <button onClick={this.handleDownload}>download</button>
        </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    selectedDesign: state.selectedDesign,
    selectedBump: state.selectedBump
  })
}


export default connect(mapStateToProps)(threeControls)
