import axios from "axios";
import { SIGNUP, SIGNIN, LOGOUT, USERDETAILS } from './types';

axios.defaults.baseURL = "http://localhost:8000"

const authToken = localStorage.getItem("auth-token")
if(authToken != null){
  console.log(authToken)
  axios.defaults.headers.common['Authorization'] = `Token ${authToken}`
}

export function userSignup(data) {
    return function(dispatch) {
      axios.post("/api/auth/registration/", data)
        .then(res => dispatch({
            type: SIGNUP,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: SIGNUP,
            payload: err.response
          })
        );
    }
}

export function userSignin(data){
  return function(dispatch) {
      axios.post("/api/auth/login/", data)
        .then(res => dispatch({
            type: SIGNIN,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: SIGNIN,
            payload: err.response
          })
        );
    }
}

export function getUserDetail(){
  return function(dispatch) {
      axios.get("/api/auth/user/")
        .then(res => dispatch({
            type: USERDETAILS,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: USERDETAILS,
            payload: err.response
          })
        );
    }
}

export function userLogout(data) {
    return function(dispatch) {
      axios.post("/api/auth/logout/", data)
        .then(res => dispatch({
            type: LOGOUT,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: LOGOUT,
            payload: err.response
          })
        );
    }
}