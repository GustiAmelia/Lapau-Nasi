import { combineReducers } from 'redux';
import menuReducers from './menu';
import authReducer from './auth';
import historyReducer from './history';

const indexReducer = combineReducers({
    menu: menuReducers,
    auth : authReducer,
    history:historyReducer,
});

export default indexReducer;