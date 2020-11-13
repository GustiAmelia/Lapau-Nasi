import * as actions from '../actions/actionTypes';

const initialState={
  user : null,
  authError : null,
  isLogin:false,
	isPending:false,
	isFulfilled: false,
  isRejected: false,
  isAdmin:false,
  isRegister: false,
}

const authReducer = (state=initialState,action)=>{
  switch(action.type){
    case actions.login + actions.pending:
      return{
        ...state,
        isPending:true,
      };
    case actions.login + actions.rejected:
      return{
        ...state,
        isRejected:true,
        error:action.payload,
        isPending:false,
      };
    case actions.login + actions.fulfilled:
      let admin = null;
      let login = null;
      let authError = null;
      if (action.payload.data.isSuccess){
        if (action.payload.data.results.data.level_id ===1){
          admin = true;
          login = true;
          authError = null;
        } else {
          admin = false;
          login = true;
          authError= null;
        }
      } else {
        admin = false;
        login = false;
        authError = action.payload.data.results.msg
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        user: action.payload.data.results,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
        authError:authError,
      };
    case actions.register + actions.pending:
      return{
        ...state,
        isPending:true,
      };
    case actions.register + actions.rejected:
      return{
        ...state,
        isRejected:true,
        error:action.payload,
        isPending:false,
      };
    case actions.register + actions.fulfilled:
      let registerError= null;
      if (!action.payload.data.isSuccess){
        registerError = action.payload.data.results.msg
      }
      return {
        ...state,
        user : action.payload.data.results,
        authError : registerError,
        isLogin:false,
        isPending:false,
        isFulfilled: true,
        isRejected: false,
        isAdmin:false,
        isRegister: action.payload.data.isSuccess,
      }
    case actions.logout:
      return {
        ...state,
        user : null,
        authError : null,
        isLogin:false,
        isPending:false,
        isFulfilled: false,
        isRejected: false,
        isAdmin:false,
      }
    default:
      return state;
  }
}

export default authReducer;