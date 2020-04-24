import { SIGNUP, SIGNIN, LOGOUT, USERDETAILS } from "../actions/types"

const initialState = {
    user: []
}

export default function(state=initialState, action){
    switch(action.type){
      case SIGNUP:
        return {
          ...state,
          response: action.payload
        };
      case SIGNIN:
        return {
          ...state,
          response: action.payload
        };
      case LOGOUT:
        return {
          ...state,
          response: action.payload
        };
      case USERDETAILS:
        return {
          ...state,
          response: action.payload
        }
      default:
        return state;
    }
}