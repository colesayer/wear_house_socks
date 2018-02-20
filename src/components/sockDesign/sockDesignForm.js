import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'oklyvbyd'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/mylifesocks/image/upload'

class SockDesignForm extends Component{

  state = {
    uploadFile: "",
    name: "",
    design_url: "",
    needle_count: 200,
    construction: "Extended-Crew",
    date: ""
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
          design_url: response.body.secure_url
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

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const design = {name: this.state.name, design_url: this.state.design_url, needle_count: this.state.needle_count, construction: this.state.construction, date: this.state.date}
    console.log(design)

    this.props.createDesign(design)

    this.setState({
      uploadFile: "",
      name: "",
      design_url: "",
      needle_count: 200,
      construction: "Extended-Crew",
      date: ""
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
          {this.state.design_url === "" ? null :
          <div>
            <p>{this.state.uploadFile.name}</p>
            <img alt="successful upload" src={this.state.design_url} style={{"width": "150px", "margin": "0 auto"}}/>
          </div>}
        </div>

        <form className="sock-design-form" onSubmit={this.handleSubmit}>
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
            <label>Date: </label>
          </p>
          <p>
            <input type="number" onChange={this.handleDate} value={this.state.date} placeholder="yyyy"/>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>

      </div>
    )
  }
}


export default SockDesignForm
