import * as THREE from 'three';

export function loadBodyDesign(design, sockGroup, sockConstruction){
  let sockBodyImageURL = design.design_url

  let sockBodyArray = sockGroup.children.filter((item) => {
    return item.name === "body"
  })

  var yOffset
  var xOffset
  var xRepeat
  var yRepeat
  var repeatPattern = THREE.ClampToEdgeWrapping

  switch (sockConstruction) {
    case "Extended-Crew":
      console.log("extended")
      yOffset = 1
      xOffset = 0.24
      xRepeat = 2
      yRepeat = 2
      break;
    case "Crew":
      console.log('regs')
      yOffset = .8
      xOffset = .25
      xRepeat = 2
      yRepeat = 2
      break;
    case "Quarter-Crew":
      console.log('quarter')
      yOffset = 1.1
      xOffset = -.21
      xRepeat = 2.2
      yRepeat = 2.2
      break;
    default:
      console.log("sock construction messed up")
      yOffset = .9
      xOffset = 0.27
      xRepeat = 2
      yRepeat = 2
  }





  let sockBody = sockBodyArray[0].children[0]

  if(design.name){
    var design_name_arr = design.name.split('.')
    if(design_name_arr.length > 1){
      if(design_name_arr[design_name_arr.length - 1] === "repeat"){
        repeatPattern = THREE.RepeatWrapping
      }
    }
  }



  let sockBodyTextureLoader = new THREE.TextureLoader()

  sockBodyTextureLoader.load(sockBodyImageURL, function(texture){
    texture.offset.y -= yOffset
    texture.offset.x += xOffset
    texture.wrapS = THREE.RepeatWrapping
    texture.repeat.set(xRepeat, yRepeat) //(x, y)
    texture.wrapT = repeatPattern
    sockBody.material.map = texture
    sockBody.material.map.needsUpdate = true
    sockBody.material.needsUpdate = true
    sockBody.material.side = THREE.DoubleSide
  })
}

export function loadBodyBump(bump, sockGroup){
  const sockBodyBumpUrl = bump.bump_url
  const sockBodyArr = sockGroup.children.filter((item) => {
    return item.name === "body"
  })

  const sockBody = sockBodyArr[0].children[0]

  const sockBodyBumpTextureLoader = new THREE.TextureLoader()
  const sockBodyBumpMap = sockBodyBumpTextureLoader.load(sockBodyBumpUrl, function(bump){
    sockBodyBumpMap.wrapT = THREE.RepeatWrapping
    sockBodyBumpMap.wrapS = THREE.RepeatWrapping

    sockBody.material.bumpMap = sockBodyBumpMap
    sockBody.material.bumpScale = 0.12
    sockBody.material.bumpMap.needsUpdate = true
    sockBody.material.needsUpdate = true
    sockBody.material.side = THREE.DoubleSide
})
}

export function loadToe(sockGroup, toeColor){
  const sockToeBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
  const sockToeArr = sockGroup.children.filter((item) => {
    return item.name === "toe"
  })

  const sockToe = sockToeArr[0].children[0]

  sockToe.material.color.set(toeColor)
  const sockToeBumpTextureLoader = new THREE.TextureLoader()
  const sockToeBumpMap = sockToeBumpTextureLoader.load(sockToeBumpMapURL)

  sockToeBumpMap.wrapT = THREE.RepeatWrapping;
  sockToeBumpMap.wrapS = THREE.RepeatWrapping;
  sockToeBumpMap.repeat.set(.25, .25)

  sockToe.material.bumpMap = sockToeBumpMap
  sockToe.material.bumpScale = 0.12
  sockToe.material.bumpMap.needsUpdate = true
  sockToe.material.needsUpdate = true
  sockToe.material.side = THREE.DoubleSide
}

export function loadHeel(sockGroup, heelColor){
  const sockHeelBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
  const sockHeelArr = sockGroup.children.filter((item) => {
    return item.name === "heel"
  })

  const sockHeel = sockHeelArr[0].children[0]
  sockHeel.material.color.set(heelColor)

  const sockHeelBumpTextureLoader = new THREE.TextureLoader()
  const sockHeelBumpMap = sockHeelBumpTextureLoader.load(sockHeelBumpMapURL)

  sockHeelBumpMap.wrapT = THREE.RepeatWrapping;
  sockHeelBumpMap.wrapS = THREE.RepeatWrapping;
  sockHeelBumpMap.repeat.set(.5, .5)

  sockHeel.material.bumpMap = sockHeelBumpMap
  sockHeel.material.bumpScale = 0.12
  sockHeel.material.bumpMap.needsUpdate = true
  sockHeel.material.needsUpdate = true
  sockHeel.material.side = THREE.DoubleSide
}

export function loadWelt(sockGroup, weltColor){
  const sockWeltBumpMapURL = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
  const sockWeltArr = sockGroup.children.filter((item) => {
    return item.name === "welt"
  })

  const sockWelt = sockWeltArr[0].children[0]
  sockWelt.material.color.set(weltColor)

  const sockWeltBumpTextureLoader = new THREE.TextureLoader()
  const sockWeltBumpMap = sockWeltBumpTextureLoader.load(sockWeltBumpMapURL)

  sockWeltBumpMap.wrapT = THREE.RepeatWrapping;
  sockWeltBumpMap.wrapS = THREE.RepeatWrapping;
  sockWeltBumpMap.repeat.set(1.5, 1.5)

  sockWelt.material.bumpMap = sockWeltBumpMap
  sockWelt.material.bumpScale = 0.12
  sockWelt.material.bumpMap.needsUpdate = true
  sockWelt.material.needsUpdate = true
  sockWelt.material.side = THREE.DoubleSide
}
