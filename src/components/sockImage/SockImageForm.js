import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import request from 'superagent'

const CLOUDINARY_UPLOAD_PRESET = 'oklyvbyd'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/mylifesocks/image/upload'

class SockImageForm extends Component{

  state = {
    uploadFile: "",
    image_url: "",
  }

  handleDrop = (files) => {
    this.setState({
      uploadFile: files[0]
    })
    this.handleImageUpload(files[0])
  }

  handleImageUpload = (file) => {

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file)


    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.secure_url !== ''){
        this.setState({
          image_url: response.body.secure_url
        })
      } else {
        console.log("not a successful upload")
      }
    });
  }

  render(){
    return(
      <div style={{"padding": "5%"}}>
        <h4>Add Design:</h4>
        <div className="file-upload">
          <Dropzone
            onDrop={this.handleDrop}
            multiple={false}
            accept="image/*"
            style={{"width": "200px", "height": "200px", "paddingTop": "25px", "borderWidth": "2px", "borderColor": "rgb(102, 102, 102)", "borderStyle": "dashed", "borderRadius": "5px", "margin": "0 auto"}}
            >
            <p>Drop your files or click here to upload</p>
          </Dropzone>
        </div>

        <div className="ImagePreview">
          {this.state.image_url === "" ? null :
          <div>
            <p>{this.state.uploadFile.name}</p>
            <img alt="successful upload" src={this.state.image_url} style={{"width": "150px", "margin": "0 auto"}}/>
          </div>}
        </div>
        <h4>Select Design:</h4>
      </div>
    )
  }
}

export default SockImageForm
