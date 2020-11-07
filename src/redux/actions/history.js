import {history} from '../../services/urlApi';
import * as actions from './actionTypes';

export const getHistoryCreator =()=>{
  return {
    type:actions.fetchHistory,
    payload:history(),
  }
}