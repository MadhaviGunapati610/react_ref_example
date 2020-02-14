import {INPUT_VALUE} from './actionTypes';

export const inputValue=(data)=> {
  return {
type:INPUT_VALUE,
payload : data
  }
}