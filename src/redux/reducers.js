
import { combineReducers } from 'redux';
import userReducer from './Users/users.reducer';
import rolesReducer from './Roles/roles.reducers';



const rootReducer = combineReducers({
    listUsers:userReducer,
    rolesUser: rolesReducer
});export default rootReducer;