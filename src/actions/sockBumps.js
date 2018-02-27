import BumpApi from '../services/bumpapi.js'

export function createBump(params){
  return function(dispatch){
    BumpApi.createBump(params)
      .then((bump) => {
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

export function deleteBump(params){
  return function(dispatch){
    BumpApi.deleteBump(params)
      .then((bumps) => {
        dispatch(fetchedBumps(bumps))
      })
  }
}
