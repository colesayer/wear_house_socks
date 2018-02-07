export default class ThreeApi{
  
  static createSock(params){
  return fetch(`http://localhost:3000/socks`, {method: "post", headers: {
    "Content-Type":"application/json",
    "Accept":"application/json"
  },
  body: JSON.stringify(params)
  }).then((res) => res.json())
  }
}
