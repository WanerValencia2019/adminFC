import ActionTypes from '../actionTypes';

/* const servicesDefaultData = {
	id:0,
	name: '',
	description: '',
	createdAt: new Date().toISOString()
} */

const initialState = {
    services: [],
    error: false,
    message: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_SERVICES:
            return { ...state };
        case ActionTypes.ADD_SERVICES_SUCCESS:
            return {
                ...state,
                services: [
                    ...state.services,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        description: action.payload.description,
                        createdAt: action.payload.createdAt,
                    },
                ],
            };
        case ActionTypes.DELETE_SERVICES_SUCCESS:
            return { ...state, services: action.payload.services };
        case ActionTypes.UPDATE_SERVICES_SUCCESS:
            return { ...state, services: action.payload.services };
        default:
            return state;
    }
};

export default reducer;
