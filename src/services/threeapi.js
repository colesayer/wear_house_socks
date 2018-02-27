const baseUrl = 'https://mylifesocks-backend.herokuapp.com'

export default class ThreeApi{

  static createSock(params){
  return fetch(`${baseUrl}/socks`, {method: "post", headers: {
    "Content-Type":"application/json",
    "Accept":"application/json"
  },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }
}
