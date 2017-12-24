export default class DesignApi{

  static createDesign(params){
  return fetch(`http://localhost:3000/designs`, {method: "post", headers: {
    "Content-Type":"application/json",
    "Accept":"application/json"
  },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }

  static fetchDesigns(){
    return fetch('http://localhost:3000/designs')
    .then((res) => res.json())
  }

}
