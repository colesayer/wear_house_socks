import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'oklyvbyd'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/mylifesocks/image/upload'

class SockBumpForm extends Component{

  state = {
    uploadFile: "",
    bump_url: "",
    name: "",
    needle_count: 200,
    construction: "Extended-Crew",
    cushion: "",
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
          bump_url: response.body.secure_url
        })
      } else {
        console.log("not a successful upload")
      }
    });
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleNeedleCount = (e) => {
    const number = parseInt(e.target.value, 10)
    this.setState({
      needle_count: number
    })
  }

  handleConstruction = (e) => {
    this.setState({
      construction: e.target.value
    })
  }

  handleCushion = (e) => {
    this.setState({
      cushion: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const bump = {name: this.state.name, bump_url: this.state.bump_url, needle_count: this.state.needle_count, construction: this.state.construction, cushion: this.state.cushion}
    console.log(bump)

    this.props.createBump(bump)

    this.setState({
      uploadFile: "",
      bump_url: "",
      name: "",
      needle_count: 200,
      construction: "Extended-Crew",
      cushion: "",
    })
  }




  render(){
    return(
      <div>
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
          {this.state.bump_url === "" ? null :
          <div>
            <p>{this.state.uploadFile.name}</p>
            <img alt="successful upload" src={this.state.bump_url} style={{"width": "150px", "margin": "0 auto"}}/>
          </div>}
        </div>

        <form id="BumpInputs" onSubmit={this.handleSubmit}>
          <p>
            <label>Name:</label>
          </p>
          <p>
            <input type="text" onChange={this.handleName} value={this.state.name}/>
          </p>
          <p>
            <label>Needle Count:</label>
          </p>
          <p>
            <select value={this.state.needle_count} onChange={this.handleNeedleCount}>
              <option value="108">108</option>
              <option value="120">120</option>
              <option value="144">144</option>
              <option value="156">156</option>
              <option value="200">200</option>
            </select>
          </p>
          <p>
            <label>Construction:</label>
          </p>
          <p>
            <select value={this.state.construction} onChange={this.handleConstruction}>
              <option value="No-Show">No-Show</option>
              <option value="Low">Low</option>
              <option value="Quarter">Quarter</option>
              <option value="Half-Crew">Half-Crew</option>
              <option value="Three-Quarter-Crew">Three-Quarter-Crew</option>
              <option value="Crew">Crew</option>
              <option value="Extended-Crew">Extended-Crew</option>
              <option value="Mid-Calf">Mid-Calf</option>
              <option value="Over-the-Calf">Over-the-Calf</option>
              <option value="Knee-High">Knee-High</option>
              <option value="Thigh-High">Thigh-High</option>
            </select>
          </p>
          <p>
            <label>Cushion:</label>
          </p>
          <p>
            <select value={this.state.cushion} onChange={this.handleCushion}>
              <option value="full">Full</option>
              <option value="foot-bottom">Foot-Bottom</option>
              <option value="zoned">Zoned</option>
            </select>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </div>

    )
  }
}

export default SockBumpForm
