import * as actions from '../actions/actionTypes';

const initialState={
  history :null,
	isPending:false,
	isFulfilled: false,
  isRejected: false,
}

const historyReducer =(state=initialState,action)=>{
  switch(action.type){
    case actions.fetchHistory + actions.pending:
      return{
        ...state,
        isPending:true,
      };
    case actions.fetchHistory + actions.rejected:
      return{
        ...state,
        isRejected:true,
        error:action.payload,
        isPending:false,
      };
    case actions.fetchHistory + actions.fulfilled:
      return {
        ...state,
        history :action.payload.data.results,
        isPending:false,
        isFulfilled: true,
        isRejected: false,
      };
    default:
      return state;
  }
}

export default historyReducer;