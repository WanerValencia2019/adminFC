import ActionTypes from '../actionTypes';

export const addStateServices =
    ({ id = 0, name, description }) =>
    (dispatch, prevState) => {
        // eslint-disable-next-line no-unused-vars
        const suma = id + 0;
        const count = prevState().stateServices.states.length;

        return dispatch({
            type: ActionTypes.ADD_STATE_SERVICES_SUCCESS,
            payload: {
                id: count + 1,
                name,
                description,
                createdAt: new Date().toUTCString(),
            },
        });
    };

export const deleteStateServices = (id) => (dispatch, prevState) => {
    const states = prevState().stateServices.states.filter((state) => state.id !== id);
    return dispatch({
        type: ActionTypes.DELETE_STATE_SERVICES_SUCCESS,
        payload: {
            states,
        },
    });
};

export const updateStateServices =
    ({ id, name, description }) =>
    (dispatch, prevState) => {
        const newData = {
            name,
            description,
        };
        const index = prevState().stateServices.states.findIndex((r) => r.id === id);
        const { states } = prevState().stateServices;

        states[index] = { ...states[index], ...newData };

        return dispatch({
            type: ActionTypes.UPDATE_STATE_SERVICES_SUCCESS,
            payload: {
                states,
            },
        });
    };
