import ThreeApi from '../services/threeapi.js'

export function clearParams(){
  return{
    type: 'CLEAR_PARAMS'
  }
}

export function createSock(params){
  return function(dispatch){
    ThreeApi.createSock(params)
      .then((sock) => {
        console.log("created new sock")
        dispatch(saveSock(sock))
      })
  }
}

export function saveSock(sock){
  return {
    type: 'SAVE_SOCK',
    payload: sock
  }
}
