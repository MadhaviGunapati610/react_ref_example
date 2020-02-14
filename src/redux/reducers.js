import {INPUT_VALUE} from './actionTypes';
import { inputValue } from './actions';

const initialState = {
value: ''
}

export const reducer = (state=initialState, action)=> {
switch(action.type){
  case INPUT_VALUE: return {
    ...state,
    value: inputValue.payload
  }
  default: return state
}
}