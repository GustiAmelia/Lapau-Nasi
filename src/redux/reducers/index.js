import { combineReducers } from 'redux';
import menuReducers from './menu';
import authReducer from './auth';

const indexReducer = combineReducers({
    menu: menuReducers,
    auth : authReducer,
});

export default indexReducer;