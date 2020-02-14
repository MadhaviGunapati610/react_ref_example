import {INPUT_VALUE} from './actionTypes';

const initialState = {
value: 'madhavi'
}

export const reducer = (state=initialState, action)=> {
switch(action.type){
  case INPUT_VALUE: return {
    ...state,
    value: action.payload
  }
  default: return state
}
}