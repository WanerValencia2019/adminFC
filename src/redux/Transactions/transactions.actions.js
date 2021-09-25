import ActionTypes from '../actionTypes';

export const addTransaction =
    ({ id = 0, userId, serviceId, paymentTypeId, payInfo, status, total, paymentAt }) =>
    (dispatch, prevState) => {
        // eslint-disable-next-line no-unused-vars
        const suma = id + 0;
        const count = prevState().transactions.transactions.length;
        return dispatch({
            type: ActionTypes.ADD_TRANSACTION_SUCCESS,
            payload: {
                id: count + 1,
                userId,
                serviceId,
                paymentTypeId,
                payInfo,
                status,
                total,
                paymentAt,
                createdAt: new Date().toUTCString(),
                updatedAt: new Date().toUTCString(),
            },
        });
    };

export const deleteTransaction = (id) => (dispatch, prevState) => {
    const transactions = prevState().transactions.transactions.filter((state) => state.id !== id);
    return dispatch({
        type: ActionTypes.DELETE_TRANSACTION_SUCCESS,
        payload: {
            transactions,
        },
    });
};

export const updateTransaction =
    ({ id = 0, userId, serviceId, paymentTypeId, payInfo, status, total, paymentAt }) =>
    (dispatch, prevState) => {
        const newData = {
            userId,
            serviceId,
            paymentTypeId,
            payInfo,
            status,
            total,
            paymentAt,
            updatedAt: new Date().toUTCString(),
        };
        const index = prevState().transactions.transactions.findIndex((r) => r.id === id);
        const { transactions } = prevState().transactions;

        transactions[index] = { ...transactions[index], ...newData };
        return dispatch({
            type: ActionTypes.UPDATE_TRANSACTION_SUCCESS,
            payload: {
                transactions,
            },
        });
    };
