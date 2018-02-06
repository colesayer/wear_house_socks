export default class DesignApi{

  static fetchSocks(){
    return fetch('http://localhost:3000/socks')
    .then((res) => res.json())
  }

  // static deleteDesign(params){
  //   return fetch(`http://localhost:3000/designs/${params.id}`, {method: "DELETE", headers: {
  //     "Content-Type":"application/json",
  //     "Accept":"application/json"
  //   },
  // body: JSON.stringify(params)
  // }).then((res) => res.json())
  // }

}
