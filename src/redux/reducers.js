
import { combineReducers } from 'redux';
import userReducer from './Users/users.reducer';
import rolesReducer from './Roles/roles.reducers';


const rootReducer = combineReducers({
    users: {
    	list: userReducer,
    	roles: rolesReducer
    },
});

export default rootReducer;