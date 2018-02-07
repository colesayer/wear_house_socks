export default function rootReducer(
  state = {
    sockConstruction: "Crew",
    sockHeel: "#eceade",
    sockToe: "#eceade",
    sockWelt: "#eceade",
    sockBody: {},
    sockDesigns: [],
    selectedDesign: {},
    sockBumps: [],
    selectedBump: {},
    isLoading: false,
    savedSocks: [],
    selectedSock: {},
  },
  action
){
  switch(action.type){
    case 'CHOOSE_SOCK':
      return {...state, sockConstruction: action.payload}
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
    case 'DESELECT_DESIGN':
      return {...state, selectedDesign: {}}
    case 'SAVE_BUMP':
      return {...state, sockBumps: state.sockBumps.concat(action.payload)}
    case 'FETCHING_BUMPS':
      return {...state, isLoading: true}
    case 'FETCHED_BUMPS':
      return {...state, sockBumps: action.payload, isLoading: false}
    case 'SELECT_BUMP':
      return {...state, selectedBump: action.payload}
    case 'CLEAR_PARAMS':
      return {...state, sockHeel: "#eceade", sockToe: "#eceade", sockWelt: "#eceade", selectedDesign: {}, selectedBump: {}, selectedSock: {}}
    case 'SAVE_SOCK':
      return {...state, savedSocks: state.savedSocks.concat(action.payload)}
    case 'FETCHING_SOCKS':
      return {...state, isLoading: true}
    case 'FETCHED_SOCKS':
      return {...state, savedSocks: action.payload, isLoading: false}
    case 'SELECTED_SOCK':
      return {...state, selectedSock: action.payload}
    default:
    return state
  }
}
