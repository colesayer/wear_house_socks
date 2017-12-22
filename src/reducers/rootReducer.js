export default function rootReducer(
  state = {
    sockHeel: "#eceade",
    sockToe: "#eceade",
    sockWelt: "#eceade",
    sockBody: {},
    sockDesigns: [],
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
    default:
    return state
  }
}
