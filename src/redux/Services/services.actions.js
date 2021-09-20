/* eslint-disable no-shadow */
import ActionTypes from '../actionTypes';

export const addServices =
    ({ id = 0, name, description }) =>
    (dispatch, prevState) => {
        // eslint-disable-next-line no-unused-vars
        const suma = id + 0;
        const count = prevState().services.services.length;

        return dispatch({
            type: ActionTypes.ADD_SERVICES_SUCCESS,
            payload: {
                id: count + 1,
                name,
                description,
                createdAt: new Date().toUTCString(),
            },
        });
    };

export const deleteServices = (id) => (dispatch, prevState) => {
    console.log(id);
    const services = prevState().services.services.filter((services) => services.id !== id);
    console.log(services);

    return dispatch({
        type: ActionTypes.DELETE_SERVICES_SUCCESS,
        payload: {
            services,
        },
    });
};

export const updateServices =
    ({ id, name, description }) =>
    (dispatch, prevState) => {
        const newData = {
            name,
            description,
        };
        const index = prevState().services.services.findIndex((r) => r.id === id);
        const { services } = prevState().services;

        services[index] = { ...services[index], ...newData };

        return dispatch({
            type: ActionTypes.UPDATE_SERVICES_SUCCESS,
            payload: {
                services,
            },
        });
    };
