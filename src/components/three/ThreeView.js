import React, { Component } from 'react';
import TrackballControls from '../../ref/trackball.js'
import { initSock } from './initSock.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearParams } from '../../actions/three.js'
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

class ThreeView extends Component{

  constructor(props){
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
    this.THREE = THREE
  }

  componentDidMount(){

    //CREATE CANVAS
    this.canvas = document.createElement('div')
    this.canvas.setAttribute("id", "Canvas")
    this.canvasContainer = document.getElementById('CanvasContainer')
    this.canvasContainer.appendChild(this.canvas)
    this.canvasArea = this.canvas.getBoundingClientRect()

    //RENDERER
    this.renderer = new THREE.WebGLRenderer({antialias: true})
    this.renderer.setClearColor("#F6ECEC", 1)
    this.renderer.setSize(this.canvasArea.width, this.canvasArea.height);
    this.renderer.domElement.style.zIndex = 5;
    this.canvas.appendChild(this.renderer.domElement);

    //CAMERA
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.y = 0;
		this.camera.position.z = 7;

    //CONTROLS
    this.controls = new TrackballControls(this.camera, this.canvas);
    this.controls.rotateSpeed = 1;
    this.controls.zoomSpeed = .7;
    this.controls.panSpeed = .25;
    this.controls.noZoom = false;
    this.controls.noPan = false;
    this.controls.staticMoving = false;
    this.controls.dynamicDampingFactor = 0.1;

    //SCENE
    this.scene = new THREE.Scene();

    //KEYLIGHT
    this.keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(this.keyLight);

    //POINTLIGHT
    this.pointLight = new THREE.PointLight( 0xffffff, 1 )
    this.pointLight.position.set( -3, 7, 5 )
    this.scene.add(this.pointLight)

    var pointLightHelper = new THREE.PointLightHelper( this.pointLight, 1 )
    this.scene.add(pointLightHelper)

    //GROUP
    this.sockGroup = new THREE.Group()

    initSock(this.THREE, this.sockGroup, this.props.sockConstruction, this.props.toeColor, this.props.heelColor, this.props.weltColor)

    this.scene.add(this.sockGroup)

    this.start()
  }

  componentWillUnmount(){
    this.stop()
  }

  componentWillReceiveProps(nextProps){
    if(this.props.sockConstruction !== nextProps.sockConstruction){
      this.scene.remove(this.sockGroup)
      this.props.clearParams()
      this.sockGroup = new THREE.Group()
      initSock(this.THREE, this.sockGroup, nextProps.sockConstruction, this.props.toeColor, this.props.heelColor, this.props.weltColor)
      this.scene.add(this.sockGroup)
      console.log("CONSTRUCTION", this.scene)
    }
    if(this.sockGroup.children[3]){
      if(this.props.toeColor !== nextProps.toeColor){
        this.sockGroup.children[0].children[0].material.color.set(nextProps.toeColor)
      } else if(this.props.heelColor !== nextProps.heelColor){
        this.sockGroup.children[1].children[0].material.color.set(nextProps.heelColor)
      } else if(this.props.weltColor !== nextProps.weltColor){
        this.sockGroup.children[2].children[0].material.color.set(nextProps.weltColor)
      } else if(this.props.selectedDesign !== nextProps.selectedDesign){
        let sockBodyImageURL = nextProps.selectedDesign.design_url
        let sockBody = this.sockGroup.children[3].children[0]
        let sockBodyTextureL = new THREE.TextureLoader()

        console.log("IN CWRP nextProps:", sockBodyImageURL)
        const sockBodyTexture = sockBodyTextureL.load(sockBodyImageURL, function(texture){
          console.log("IN TEXTURE LOADER:", texture)
          texture.offset.y -= 1;
          texture.offset.x += .6;
          texture.wrapS = THREE.RepeatWrapping;
          texture.repeat.set(2, 2)

          sockBody.material.map = texture
          sockBody.material.map.needsUpdate = true;
          sockBody.material.needsUpdate = true;
        })

      } else if(this.props.selectedBump !== nextProps.selectedBump){
        let sockBodyBumpUrl = nextProps.selectedBump.bump_url
        let sockBody = this.sockGroup.children[3].children[0]

        let sockBodyBumpTextureLoader = new THREE.TextureLoader()
        const sockBodyBumpMap = sockBodyBumpTextureLoader.load(sockBodyBumpUrl, function(bump){
          console.log("IN BUMP LOADER:", bump)
          sockBodyBumpMap.wrapT = THREE.RepeatWrapping;
          sockBodyBumpMap.wrapS = THREE.RepeatWrapping;

          sockBody.material.bumpMap = sockBodyBumpMap;
          sockBody.material.bumpScale = 0.12
          sockBody.material.bumpMap.needsUpdate = true;
          sockBody.material.needsUpdate = true;
        })


      }

    }


  }



  start(){
    if (!this.frameId) {
    this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop(){
    cancelAnimationFrame(this.frameId)
  }

  animate(){
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  render(){
    return(
      <div
      ref={(canvas) => {this.canvas = canvas}}>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    sockConstruction: state.sockConstruction,
    toeColor: state.sockToe,
    heelColor: state.sockHeel,
    weltColor: state.sockWelt,
    selectedDesign: state.selectedDesign,
    selectedBump: state.selectedBump,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearParams: clearParams
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeView)
