import SockApi from '../services/sockapi.js'

export function fetchSocks(){
  return function(dispatch){
    dispatch(fetchingSocks())
    SockApi.fetchSocks().then(socks => {
      console.log("in fetchSocks", socks)
      dispatch(fetchedSocks(socks))
    })
  }
}

function fetchingSocks(){
  return{
    type: 'FETCHING_SOCKS'
  }
}

function fetchedSocks(socks){
  return {
    type: 'FETCHED_SOCKS',
    payload: socks
  }
}
