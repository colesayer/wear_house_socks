import React, { Component } from 'react';
import Modal from 'react-modal';

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
    modalIsOpen: false,
    name: "",
  }

  openModal = () => {
    this.props.resetCamera()
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
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
        modalIsOpen: false
      })
  }

  render(){
    return(
      <div className="three-controls">
        <button onClick={this.openModal}>save</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>Name Your Design:</div>
          <form>
            <input onChange={this.handleInput}/>
            <button onClick={this.handleSave}>Save</button>
          </form>
        </Modal>
      </div>
    )
  }
}

export default threeControls
