const baseUrl = 'https://mylifesocks-backend.herokuapp.com'

export default class BumpApi{

  static createBump(params){
  return fetch(`${baseUrl}/bumps`, {method: "post", headers: {
    "Content-Type":"application/json",
    "Accept":"application/json"
  },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }

  static fetchBumps(){
    return fetch(`${baseUrl}/bumps`)
    .then((res) => res.json())
  }

  static deleteBump(params){
    return fetch(`${baseUrl}/bumps/${params.id}`, {method: "DELETE", headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }

}
