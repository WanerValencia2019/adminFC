import { combineReducers } from 'redux';

//reducers
import userReducer from './Users/users.reducer';
import rolesReducer from './Roles/roles.reducers';
import interestsReducer from './Interests/interests.reducers';



const rootReducer = combineReducers({
    listUsers:userReducer,
    rolesUser: rolesReducer,
    interest: interestsReducer,
});

export default rootReducer;