import { loadBodyDesign, loadBodyBump, loadToe, loadHeel, loadWelt } from './loadTextures.js'
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);


export function loadModel(THREEloader, sockConstruction, sockGroup, selectedDesign, selectedBump, toeColor, heelColor, weltColor){
  var sockLoader = new THREEloader.OBJLoader()

  sockLoader.load(`./models/${sockConstruction}/body.obj`, (body) => {
    body.position.set(3.75, -5, 1.6)
    body.name = "body"
    sockGroup.add(body)

      sockLoader.load(`./models/${sockConstruction}/toe.obj`, (toe) => {
        toe.position.set(3.75, -5, 1.6)
        toe.name = "toe"
        sockGroup.add(toe)

        sockLoader.load(`./models/${sockConstruction}/heel.obj`, (heel) => {
          heel.position.set(3.75, -5, 1.6)
          heel.name = "heel"
          sockGroup.add(heel)

          sockLoader.load(`./models/${sockConstruction}/welt.obj`, (welt) => {
            welt.position.set(3.75, -5, 1.6)
            welt.name = "welt"
            sockGroup.add(welt)

            if(selectedDesign.id){
              console.log("DESIGN WAS INCLUDED")
              loadBodyDesign(selectedDesign, sockGroup)
            } else {
              console.log("DEFAULT DESIGN")
              let defaultDesign = {}
              defaultDesign["design_url"] = "http://res.cloudinary.com/mylifesocks/image/upload/v1514072588/cream_ma9gqb.png"
              loadBodyDesign(defaultDesign, sockGroup)
            }

            if(selectedBump.id){
              console.log("BUMP WAS INCLUDED")
              loadBodyBump(selectedBump, sockGroup)
            } else {
              let defaultBump = {}
              defaultBump["bump_url"] = "http://res.cloudinary.com/dwnehv6tb/image/upload/v1513647868/knit_texture_seamless_132n_fine_q6pl3n.jpg"
              loadBodyBump(defaultBump, sockGroup)
            }

            loadToe(sockGroup, toeColor)
            loadHeel(sockGroup, heelColor)
            loadWelt(sockGroup, weltColor)

          })
        })
      })
    })







  sockGroup.rotation.y = - Math.PI / 2;


}
