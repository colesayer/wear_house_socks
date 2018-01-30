export default class BumpApi{

  static createBump(params){
  return fetch(`http://localhost:3000/bumps`, {method: "post", headers: {
    "Content-Type":"application/json",
    "Accept":"application/json"
  },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }

  static fetchBumps(){
    return fetch('http://localhost:3000/bumps')
    .then((res) => res.json())
  }

  static deleteBump(params){
    return fetch(`http://localhost:3000/bumps/${params.id}`, {method: "DELETE", headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }

}
