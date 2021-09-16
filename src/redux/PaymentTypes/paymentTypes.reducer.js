import ActionTypes from '../actionTypes';

/* const paymentTypesDefaultData = {
	id:0,
	name: '',
	description: '',
	status: false,
	createdAt: new Date().toISOString()
} */

const initialState = {
    types: [],
    error: false,
    message: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_PAYMENT_TYPES:
            return { ...state };
        case ActionTypes.ADD_PAYMENT_TYPE_SUCCESS:
            return {
                ...state,
                types: [
                    ...state.types,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        description: action.payload.description,
                        status: action.payload.status,
                        statusText: action.payload.status ? 'Activo' : 'Inactivo',
                        createdAt: action.payload.createdAt,
                    },
                ],
            };
        case ActionTypes.DELETE_PAYMENT_TYPE_SUCCESS:
            return { ...state, types: action.payload.types };
        case ActionTypes.UPDATE_PAYMENT_TYPE_SUCCESS:
            return { ...state, types: action.payload.types };
        default:
            return state;
    }
};

export default reducer;
