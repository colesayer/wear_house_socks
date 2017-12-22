export function chooseToeColor(color){
  return{
    type: 'CHOOSE_TOE_COLOR',
    payload: color
  }
}

export function chooseHeelColor(color){
  return{
    type: 'CHOOSE_HEEL_COLOR',
    payload: color
  }
}

export function chooseWeltColor(color){
  return{
    type: 'CHOOSE_WELT_COLOR',
    payload: color
  }
}
