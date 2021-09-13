import { combineReducers } from 'redux';

//reducers
import userReducer from './Users/users.reducer';
import rolesReducer from './Roles/roles.reducer';
import interestsReducer from './Interests/interests.reducer';
import servicesReducer from './Services/services.reducer';
import stateServicesReducer from './StateServices/stateServices.reducer';
import userServicesReducer from './UserServices/userServices.reducer';
import matchsReducer from './Matchs/matchs.reducer';
import paymentTypesReducer from './PaymentTypes/paymentTypes.reducer';




const rootReducer = combineReducers({
    listUsers:userReducer,
    rolesUser: rolesReducer,
    interest: interestsReducer,
    services: servicesReducer,
    stateServices: stateServicesReducer,
    userServices: userServicesReducer,
    matchs: matchsReducer,
    paymentTypes: paymentTypesReducer,
});

export default rootReducer;