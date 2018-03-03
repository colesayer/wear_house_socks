const baseUrl = 'https://mylifesocks-backend.herokuapp.com'

export default class DesignApi{

  static fetchSocks(){
    return fetch(`${baseUrl}/socks`)
    .then((res) => res.json())
  }

  static deleteSock(params){
    return fetch(`${baseUrl}/socks/${params.id}`, {method: "DELETE", headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }

  static fetchSock(params){
    return fetch(`${baseUrl}/socks/${params.id}`)
    .then((res) => res.json())
  }

}
