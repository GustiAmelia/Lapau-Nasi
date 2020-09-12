import { combineReducers } from 'redux';
import menuReducers from './menu';

const indexReducer = combineReducers({
    menu: menuReducers,
});

export default indexReducer;