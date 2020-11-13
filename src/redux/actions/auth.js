import {signIn, signUp} from '../../services/urlApi';
import * as actions from './actionTypes';

export const signInCreator = (credentials)=>{
  return {
    type: actions.login,
    payload:signIn(credentials)
  }
}

export const logOutCreator =()=>{
  return {
    type :actions.logout
  }
}

export const signUpCreator =(newUser)=>{
  return {
    type: actions.register,
    payload:signUp(newUser)
  }
}