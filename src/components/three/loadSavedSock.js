import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

export function loadSavedSock(THREEloader, sockGroup, sockConstruction, sockDesign, sockBump, toe, heel, welt){

  console.log("LOADING SAVED SOCK")

  const sockBodyDesignLoader = new THREE.TextureLoader()

  sockBodyDesignLoader.load(sockDesign.design_url, (texture) => {
    texture.offset.y = 0
    texture.wrapS = THREE.RepeatWrapping
    texture.repeat.set(2, 2)
    texture.needsUpdate = true

    console.log("TEXTURE", texture)

    const sockBodyBumpLoader = new THREE.TextureLoader()
    sockBodyBumpLoader.load(sockBump.bump_url, (bump) => {
      bump.wrapT = THREE.RepeatWrapping
      bump.wrapS = THREE.RepeatWrapping

      console.log("BUMP", bump)

      const sockBodyLoader = new THREEloader.OBJLoader()
      sockBodyLoader.load(`./models/${sockConstruction}/body.obj`, (object) => {
        object.traverse((child) => {
          if(child instanceof THREE.Mesh){
            child.material = new THREE.MeshPhongMaterial()
            child.material.map = texture
            child.material.map.needsUpdate = true
            child.material.bumpMap = bump
            child.material.bumpScale = 0.12
            child.material.side = THREE.DoubleSide
          }
        })
        object.position.set(3.75, -5, 1.6)
        object.name = "body"
        sockGroup.add(object)
      })
    })
  })
}
