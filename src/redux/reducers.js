import { combineReducers } from 'redux';

//reducers
import userReducer from './Users/users.reducer';
import rolesReducer from './Roles/roles.reducers';
import interestsReducer from './Interests/interests.reducers';
import servicesReducer from './Services/services.reducers';
import stateServicesReducer from './StateServices/stateServices.reducers';
import userServicesReducer from './UserServices/userServices.reducers';
import matchsReducer from './Matchs/matchs.reducers';




const rootReducer = combineReducers({
    listUsers:userReducer,
    rolesUser: rolesReducer,
    interest: interestsReducer,
    services: servicesReducer,
    stateServices: stateServicesReducer,
    userServices: userServicesReducer,
    matchs: matchsReducer,
});

export default rootReducer;