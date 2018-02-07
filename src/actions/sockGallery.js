import SockApi from '../services/sockapi.js'
import {chooseToeColor, chooseHeelColor, chooseWeltColor} from './sockColors.js'
import {selectDesign} from './sockDesigns.js'
import {selectBump} from './sockBumps.js'

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

export function selectSock(sock){
  return function(dispatch){
    dispatch(selectedSock(sock))
    dispatch(fetchingSocks())
    SockApi.fetchSock(sock).then(sock => {
      console.log("in fetch sock", sock)
      dispatch(chooseToeColor(sock.toe_color))
      dispatch(chooseHeelColor(sock.heel_color))
      dispatch(chooseWeltColor(sock.welt_color))
      dispatch(selectDesign(sock.design))
      dispatch(selectBump(sock.bump))
    })
  }
}

function selectedSock(sock){
  return{
    type: 'SELECTED_SOCK',
    payload: sock
  }
}
