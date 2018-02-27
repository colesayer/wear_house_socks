const baseUrl = 'https://mylifesocks-backend.herokuapp.com'

export default class DesignApi{

  static createDesign(params){
  return fetch(`${baseUrl}/designs`, {method: "post", headers: {
    "Content-Type":"application/json",
    "Accept":"application/json"
  },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }

  static fetchDesigns(){
    return fetch(`${baseUrl}/designs`)
    .then((res) => res.json())
  }

  static deleteDesign(params){
    return fetch(`${baseUrl}/designs/${params.id}`, {method: "DELETE", headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }

}
