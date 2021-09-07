
import { combineReducers } from 'redux';
import userReducer from './Users/users.reducer';


const rootReducer = combineReducers({
    user:userReducer,
});

export default rootReducer;