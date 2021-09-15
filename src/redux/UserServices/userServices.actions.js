import ActionTypes from '../actionTypes';

export const addUserServices =
    ({ id = 0, userId, stateServiceId, servicesId, value = 0.0, description, dateService }) =>
    (dispatch, prevState) => {
        // eslint-disable-next-line no-unused-vars
        const suma = id + 0;
        const count = prevState().userServices.services.length;
        return dispatch({
            type: ActionTypes.ADD_USER_SERVICES_SUCCESS,
            payload: {
                id: count + 1,
                userId,
                stateServiceId,
                servicesId,
                value,
                description,
                dateService,
                createdAt: new Date().toUTCString(),
            },
        });
    };

export const deleteUserServices = (id) => (dispatch, prevState) => {
    const services = prevState().userServices.services.filter((state) => state.id !== id);
    return dispatch({
        type: ActionTypes.DELETE_USER_SERVICES_SUCCESS,
        payload: {
            services,
        },
    });
};

export const updateUserServices =
    ({ id = 0, userId, stateServiceId, servicesId, value = 0.0, description, dateService }) =>
    (dispatch, prevState) => {
        const newData = {
            userId,
            stateServiceId,
            servicesId,
            value,
            description,
            dateService,
        };
        const index = prevState().userServices.services.findIndex((r) => r.id === id);
        const { services } = prevState().userServices;

        services[index] = { ...services[index], ...newData };
        console.log(services);
        return dispatch({
            type: ActionTypes.UPDATE_USER_SERVICES_SUCCESS,
            payload: {
                services,
            },
        });
    };
