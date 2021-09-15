import ActionTypes from '../actionTypes';

/* const interestsDefaultData = {
	id:0,
	name: '',
	description: '',
	createdAt: new Date().toISOString()
} */

const initialState = {
    states: [],
    error: false,
    message: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_STATE_SERVICES:
            return { ...state };
        case ActionTypes.ADD_STATE_SERVICES_SUCCESS:
            return {
                ...state,
                states: [
                    ...state.states,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        description: action.payload.description,
                        createdAt: action.payload.createdAt,
                    },
                ],
            };
        case ActionTypes.DELETE_STATE_SERVICES_SUCCESS:
            return { ...state, states: action.payload.states };
        case ActionTypes.UPDATE_STATE_SERVICES_SUCCESS:
            return { ...state, states: action.payload.states };
        default:
            return state;
    }
};

export default reducer;
