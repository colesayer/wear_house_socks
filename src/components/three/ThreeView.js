import React, { Component } from 'react';
import TrackballControls from '../../ref/trackball.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  state = {
    toeColor: this.props.toeColor,
    heelColor: this.props.heelColor,
    weltColor: this.props.weltColor
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
    this.renderer.setClearColor(0xffffff, 1)
    this.renderer.setSize(this.canvasArea.width, this.canvasArea.height);
    this.renderer.domElement.style.zIndex = 5;
    this.canvas.appendChild(this.renderer.domElement);

    //CAMERA
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.y = 0;
		this.camera.position.z = 7;

    //CONTROLS
    this.controls = new TrackballControls(this.camera, this.canvas);
    // this.controls.target.set(0, 0, 0)
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

    // var directionalLightHelper = new THREE.DirectionalLightHelper(this.pointLight, 50);
    // this.scene.add( directionalLightHelper);

    var pointLightHelper = new THREE.PointLightHelper( this.pointLight, 1 )
    this.scene.add(pointLightHelper)

    //GROUP
    this.sockGroup = new THREE.Group()

    //SOCK BODY

    //texture
    var sockBodyImageURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513720856/floral_200n_copy_dhv1yy.bmp"
    const sockBodyTextureL = new THREE.TextureLoader()
    var sockBodyTexture = sockBodyTextureL.load(sockBodyImageURL)
    sockBodyTexture.offset.y -= 1;
    sockBodyTexture.wrapS = THREE.RepeatWrapping;
    sockBodyTexture.repeat.set(2, 2)

    //BODY MATERIAL
    var sockBodyMaterial = new THREE.MeshPhongMaterial({color: "white"})

    // var sockBodyBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647477/knit_texture_seamless_132n_ek1fsj.jpg"
    var sockBodyBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
    const sockBodyBumpTextureLoader = new THREE.TextureLoader()
    var sockBodyBumpMap = sockBodyBumpTextureLoader.load(sockBodyBumpMapURL)

    sockBodyBumpMap.wrapT = THREE.RepeatWrapping;
    sockBodyBumpMap.wrapS = THREE.RepeatWrapping;
    sockBodyBumpMap.repeat.set(4, 4)

    var mesh



    var sockBodyLoader = new this.THREE.OBJLoader();
    sockBodyLoader.load('./models/exploded/body.obj', function(object){
    console.log("in initMesh:", object)
    object.traverse(function(child){
      if(child instanceof THREE.Mesh){
        console.log("SOCK:", child)
        child.material = sockBodyMaterial;
        child.material.map = sockBodyTexture;
        child.material.bumpMap = sockBodyBumpMap;
        child.material.bumpScale = 0.12
          child.castShadow = true;
          child.receiveShadow = true;

      }
    })
    object.position.set(3.75, -5, 1.6)
    object.name = "body"
    this.sockGroup.add(object)
  }.bind(this))

//SOCK TOE

//TOE MATERIAL
var sockToeMaterial = new THREE.MeshPhongMaterial({color: this.state.toeColor})

//TOE BUMP MAP
var sockToeBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
const sockToeBumpTextureLoader = new THREE.TextureLoader()
var sockToeBumpMap = sockToeBumpTextureLoader.load(sockToeBumpMapURL)

sockToeBumpMap.wrapT = THREE.RepeatWrapping;
sockToeBumpMap.wrapS = THREE.RepeatWrapping;
sockToeBumpMap.repeat.set(.25, .25)

  var sockToeLoader = new this.THREE.OBJLoader();
  sockToeLoader.load('./models/exploded/toe.obj', function(object){
    console.log("in initMesh:", object)
    object.traverse((child) => {
      if(child instanceof THREE.Mesh){
        console.log("SOCK:", child)
        child.material = sockToeMaterial;
        child.material.bumpMap = sockToeBumpMap;
        child.material.bumpScale = 0.12
        //   child.castShadow = true;
        //   child.receiveShadow = true;

      }
    })
    object.position.set(3.75, -5, 1.6)
    object.name = "toe"
    this.sockGroup.add(object)
  }.bind(this))

  //SOCK HEEL

  //HEEL MATERIAL
  var sockHeelMaterial = new THREE.MeshPhongMaterial({color: this.state.heelColor})

  //HEEL BUMP MAP
  var sockHeelBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
  const sockHeelBumpMapTextureLoader = new THREE.TextureLoader()
  var sockHeelBumpMap = sockHeelBumpMapTextureLoader.load(sockHeelBumpMapURL)

  sockHeelBumpMap.wrapT = THREE.RepeatWrapping;
  sockHeelBumpMap.wrapS = THREE.RepeatWrapping;
  sockHeelBumpMap.repeat.set(.5, .5)

  var sockHeelLoader = new this.THREE.OBJLoader();
  sockHeelLoader.load('./models/exploded/heel.obj', function(object){
    console.log("in initMesh:", object)
    object.traverse(function(child){
      if(child instanceof THREE.Mesh){
        console.log("SOCK:", child)
        child.material = sockHeelMaterial;
        child.material.bumpMap = sockHeelBumpMap;
        child.material.bumpScale = 0.12
          child.castShadow = true;
          child.receiveShadow = true;

      }
    })
    object.position.set(3.75, -5, 1.6)
    object.name = "heel"
    this.sockGroup.add(object)
  }.bind(this))

  //SOCK WELT

  //WELT MATERIAL
  var sockWeltMaterial = new THREE.MeshPhongMaterial({color: this.state.weltColor})

  //WELT BUMP MAP
  var sockWeltBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647477/knit_texture_seamless_132n_ek1fsj.jpg"
  const sockWeltBumpMapTextureLoader = new THREE.TextureLoader()
  var sockWeltBumpMap = sockWeltBumpMapTextureLoader.load(sockWeltBumpMapURL)

  sockWeltBumpMap.wrapT = THREE.RepeatWrapping;
  sockWeltBumpMap.wrapS = THREE.RepeatWrapping;
  sockWeltBumpMap.repeat.set(1.5, 1.5)


  var sockWeltLoader = new this.THREE.OBJLoader();
  sockWeltLoader.load('./models/exploded/welt.obj', function(object){
    console.log("in initMesh:", object)
    object.traverse(function(child){
      if(child instanceof THREE.Mesh){
        console.log("SOCK:", child)
        child.material = sockWeltMaterial;
        child.material.bumpMap = sockWeltBumpMap;
        child.material.bumpScale = 0.12
          child.castShadow = true;
          child.receiveShadow = true;

      }
    })
    object.position.set(3.75, -5, 1.6)
    object.name = "welt"
    this.sockGroup.add(object)
  }.bind(this))

    this.sockGroup.rotation.y = - Math.PI / 2;

    this.scene.add(this.sockGroup)

    this.start()
  }

  componentWillUnmount(){
    this.stop()
  }

  componentWillReceiveProps(nextProps){
    console.log("in cWRP", this.sockGroup.children[0].children[0].material.color)
    if(this.props.toeColor !== nextProps.toeColor){
      this.sockGroup.children[0].children[0].material.color.set(nextProps.toeColor)
    } else if(this.props.heelColor !== nextProps.heelColor){
      this.sockGroup.children[1].children[0].material.color.set(nextProps.heelColor)
    } else if(this.props.weltColor !== nextProps.weltColor){
      this.sockGroup.children[2].children[0].material.color.set(nextProps.weltColor)
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
      <div ref={(canvas) => {this.canvas = canvas}}>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    toeColor: state.sockToe,
    heelColor: state.sockHeel,
    weltColor: state.sockWelt
  }
}

export default connect(mapStateToProps)(ThreeView)
