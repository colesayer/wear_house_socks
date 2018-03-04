import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

export function initSock(THREEloader, sockGroup, sockConstruction, toeColor, heelColor, weltColor, sockDesign, sockBump){
  //SOCK BODY

  //texture
  var sockBodyImageURL = "http://res.cloudinary.com/mylifesocks/image/upload/v1514072588/cream_ma9gqb.png"
  // var sockBodyImageURL = this.props.selectedDesign.design_url
  const sockBodyTextureL = new THREE.TextureLoader()
  var sockBodyTexture = sockBodyTextureL.load(sockBodyImageURL)
  sockBodyTexture.offset.y -= .1;
  sockBodyTexture.wrapS = THREE.RepeatWrapping;
  sockBodyTexture.repeat.set(2, 2)
  sockBodyTexture.needsUpdate = true;

  //BODY MATERIAL
  var sockBodyMaterial = new THREE.MeshPhongMaterial({color: "white"})

  // var sockBodyBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647477/knit_texture_seamless_132n_ek1fsj.jpg"
  var sockBodyBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
  const sockBodyBumpTextureLoader = new THREE.TextureLoader()
  var sockBodyBumpMap = sockBodyBumpTextureLoader.load(sockBodyBumpMapURL)

  sockBodyBumpMap.wrapT = THREE.RepeatWrapping;
  sockBodyBumpMap.wrapS = THREE.RepeatWrapping;

  var sockBodyLoader = new THREEloader.OBJLoader();
  sockBodyLoader.load(`./models/${sockConstruction}/body.obj`, (object) => {
  object.traverse(function(child){
    if(child instanceof THREE.Mesh){
      child.material = sockBodyMaterial;
      child.material.map = sockBodyTexture;
      child.material.map.needsUpdate = true;
      child.material.bumpMap = sockBodyBumpMap;
      child.material.bumpScale = 0.12;
      child.material.side = THREE.DoubleSide;
    }
  })
  object.position.set(3.75, -5, 1.6)
  object.name = "body"
  sockGroup.add(object)
})

//SOCK TOE

//TOE MATERIAL
var sockToeMaterial = new THREE.MeshPhongMaterial({color: `${toeColor}`})

//TOE BUMP MAP
var sockToeBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
const sockToeBumpTextureLoader = new THREE.TextureLoader()
var sockToeBumpMap = sockToeBumpTextureLoader.load(sockToeBumpMapURL)

sockToeBumpMap.wrapT = THREE.RepeatWrapping;
sockToeBumpMap.wrapS = THREE.RepeatWrapping;
sockToeBumpMap.repeat.set(.25, .25)

var sockToeLoader = new THREEloader.OBJLoader();
sockToeLoader.load(`./models/${sockConstruction}/toe.obj`, (object) => {
  object.traverse((child) => {
    if(child instanceof THREE.Mesh){
      child.material = sockToeMaterial;
      child.material.bumpMap = sockToeBumpMap;
      child.material.bumpScale = 0.12;
      child.material.side = THREE.DoubleSide;
    }
  })
  object.position.set(3.75, -5, 1.6)
  object.name = "toe"
  sockGroup.add(object)
})

//SOCK HEEL

//HEEL MATERIAL
var sockHeelMaterial = new THREE.MeshPhongMaterial({color: `${heelColor}`})

//HEEL BUMP MAP
var sockHeelBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
const sockHeelBumpMapTextureLoader = new THREE.TextureLoader()
var sockHeelBumpMap = sockHeelBumpMapTextureLoader.load(sockHeelBumpMapURL)

sockHeelBumpMap.wrapT = THREE.RepeatWrapping;
sockHeelBumpMap.wrapS = THREE.RepeatWrapping;
sockHeelBumpMap.repeat.set(.5, .5)

var sockHeelLoader = new THREEloader.OBJLoader();
sockHeelLoader.load(`./models/${sockConstruction}/heel.obj`, (object) => {
  object.traverse(function(child){
    if(child instanceof THREE.Mesh){
      child.material = sockHeelMaterial;
      child.material.bumpMap = sockHeelBumpMap;
      child.material.bumpScale = 0.12;
      child.material.side = THREE.DoubleSide;
    }
  })
  object.position.set(3.75, -5, 1.6)
  object.name = "heel"
  sockGroup.add(object)
})

//SOCK WELT

//WELT MATERIAL
var sockWeltMaterial = new THREE.MeshPhongMaterial({color: `${weltColor}`})

//WELT BUMP MAP
var sockWeltBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647477/knit_texture_seamless_132n_ek1fsj.jpg"
const sockWeltBumpMapTextureLoader = new THREE.TextureLoader()
var sockWeltBumpMap = sockWeltBumpMapTextureLoader.load(sockWeltBumpMapURL)

sockWeltBumpMap.wrapT = THREE.RepeatWrapping;
sockWeltBumpMap.wrapS = THREE.RepeatWrapping;
sockWeltBumpMap.repeat.set(1.5, 1.5)


var sockWeltLoader = new THREEloader.OBJLoader();
sockWeltLoader.load(`./models/${sockConstruction}/welt.obj`, (object) => {
  object.traverse(function(child){
    if(child instanceof THREE.Mesh){
      child.material = sockWeltMaterial;
      child.material.bumpMap = sockWeltBumpMap;
      child.material.bumpScale = 0.12;
      child.material.side = THREE.DoubleSide;
    }
  })
  object.position.set(3.75, -5, 1.6)
  object.name = "welt"
  sockGroup.add(object)
})

sockGroup.rotation.y = - Math.PI / 2;

}
