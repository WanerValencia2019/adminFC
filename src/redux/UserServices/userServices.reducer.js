import ActionTypes from '../actionTypes';

/* const userServicesDefaultData = {
	id:0,
	userId: 0,
	stateServiceId: 0,
	servicesId: 0,
	value: 0.0,
	description: '',
	dateService: new Date().toISOString(),
	createdAt: new Date().toISOString()
} */

const initialState = {
    services: [],
    error: false,
    message: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_USER_SERVICES:
            return { ...state };
        case ActionTypes.ADD_USER_SERVICES_SUCCESS:
            return {
                ...state,
                services: [
                    ...state.services,
                    {
                        id: action.payload.id,
                        userId: action.payload.userId,
                        stateServiceId: action.payload.stateServiceId,
                        servicesId: action.payload.servicesId,
                        value: action.payload.value,
                        description: action.payload.description,
                        dateService: action.payload.dateService,
                        createdAt: action.payload.createdAt,
                    },
                ],
            };
        case ActionTypes.DELETE_USER_SERVICES_SUCCESS:
            return { ...state, services: action.payload.services };
        case ActionTypes.UPDATE_USER_SERVICES_SUCCESS:
            return { ...state, services: action.payload.services };
        default:
            return state;
    }
};

export default reducer;
