import ActionTypes from '../actionTypes';

/* const transactionsDefaultData = {
	id:0,
	userId: 0,
	serviceId: 0,
    paymentTypeId: 0,
    payInfo: '',
    status: '',
    total: 0.0,	
	createdAt: new Date().toISOString(),
	paymentAt: new Date().toISOString(),
	updated: new Date().toISOString(),
} */

const initialState = {
    transactions: [],
    error: false,
    message: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_TRANSACTIONS:
            return { ...state };
        case ActionTypes.ADD_TRANSACTION_SUCCESS:
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    {
                        id: action.payload.id,
                        userId: action.payload.userId,
                        serviceId: action.payload.serviceId,
                        paymentTypeId: action.payload.paymentTypeId,
                        payInfo: action.payload.payInfo,
                        status: action.payload.status,
                        total: action.payload.total,
                        createdAt: action.payload.createdAt,
                        paymentAt: action.payload.paymentAt,
                        updated: action.payload.updated,
                    },
                ],
            };
        case ActionTypes.DELETE_TRANSACTION_SUCCESS:
            return { ...state, transactions: action.payload.transactions };
        case ActionTypes.UPDATE_TRANSACTION_SUCCESS:
            return { ...state, transactions: [...action.payload.transactions] };
        default:
            return state;
    }
};

export default reducer;
