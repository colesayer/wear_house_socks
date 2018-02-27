import DesignApi from '../services/designapi.js'

export function createDesign(params){
  return function(dispatch){
    DesignApi.createDesign(params)
      .then((design) => {
        dispatch(saveDesign(design))
      })
  }
}

export function saveDesign(design){
  return {
    type: 'SAVE_DESIGN',
    payload: design
  }
}

export function fetchDesigns(){
  return function(dispatch){
  dispatch(fetchingDesigns())
  DesignApi.fetchDesigns().then(designs => {
      dispatch(fetchedDesigns(designs))
    })
  }
}

function fetchingDesigns(){
  return{
    type: 'FETCHING_DESIGNS'
  }
}

function fetchedDesigns(designs){
  return {
    type: 'FETCHED_DESIGNS',
    payload: designs
  }
}

export function selectDesign(design){
  return {
    type: 'SELECT_DESIGN',
    payload: design
  }
}

export function deselectDesign(){
  return {
    type: 'DESELECT_DESIGN',
  }
}

export function deleteDesign(params){
  return function(dispatch){
    DesignApi.deleteDesign(params)
      .then((designs) => {
        dispatch(fetchedDesigns(designs))
      })
  }
}
