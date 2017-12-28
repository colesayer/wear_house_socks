import BumpApi from '../services/bumpapi.js'

export function createBump(params){
  return function(dispatch){
    BumpApi.createBump(params)
      .then((bump) => {
        console.log("created new bump")
        dispatch(saveBump(bump))
      })
  }
}

export function saveBump(bump){
  return {
    type: 'SAVE_BUMP',
    payload: bump
  }
}

export function fetchBumps(){
  return function(dispatch){
  dispatch(fetchingBumps())
  BumpApi.fetchBumps().then(bumps => {
      console.log("in fetchBumps", bumps)
      dispatch(fetchedBumps(bumps))
    })
  }
}

function fetchingBumps(){
  return{
    type: 'FETCHING_BUMPS'
  }
}

function fetchedBumps(bumps){
  return {
    type: 'FETCHED_BUMPS',
    payload: bumps
  }
}

export function selectBump(bump){
  return {
    type: 'SELECT_BUMP',
    payload: bump
  }
}
