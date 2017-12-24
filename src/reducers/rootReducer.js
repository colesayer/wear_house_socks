export default function rootReducer(
  state = {
    sockHeel: "#eceade",
    sockToe: "#eceade",
    sockWelt: "#eceade",
    sockBody: {},
    sockDesigns: [],
    selectedDesign: {},
    isLoading: false
  },
  action
){
  switch(action.type){
    case 'CHOOSE_TOE_COLOR':
      return {...state, sockToe: action.payload}
    case 'CHOOSE_HEEL_COLOR':
      return {...state, sockHeel: action.payload}
    case 'CHOOSE_WELT_COLOR':
      return {...state, sockWelt: action.payload}
    case 'SAVE_DESIGN':
      return {...state, sockDesigns: state.sockDesigns.concat(action.payload)}
    case 'FETCHING_DESIGNS':
      return {...state, isLoading: true}
    case 'FETCHED_DESIGNS':
      return {...state, sockDesigns: action.payload, isLoading: false}
    case 'SELECT_DESIGN':
      return {...state, selectedDesign: action.payload}
    default:
    return state
  }
}
