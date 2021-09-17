import ActionTypes from '../actionTypes';

export const addRol =
    ({ id = 0, name, description, status }) =>
    (dispatch, prevState) => {
        // eslint-disable-next-line no-unused-vars
        const suma = id + 0;
        const count = prevState().rolesUser.roles.length;
        return dispatch({
            type: ActionTypes.ADD_ROLE_SUCCESS,
            payload: {
                id: count + 1,
                name,
                status,
                description,
                createdAt: new Date().toUTCString(),
            },
        });
    };

export const deleteRol = (id) => (dispatch, prevState) => {
    console.log(id);
    const roles = prevState().rolesUser.roles.filter((rol) => rol.id !== id);
    return dispatch({
        type: ActionTypes.DELETE_ROLE_SUCCESS,
        payload: {
            roles,
        },
    });
};

export const updateRol =
    ({ id, name, description, status }) =>
    (dispatch, prevState) => {
        const newData = {
            name,
            description,
            status,
            statusText: status ? 'Activo' : 'Inactivo',
        };
        const index = prevState().rolesUser.roles.findIndex((r) => r.id === id);
        const { roles } = prevState().rolesUser;

        roles[index] = { ...roles[index], ...newData };

        return dispatch({
            type: ActionTypes.UPDATE_ROLE_SUCCESS,
            payload: {
                roles,
            },
        });
    };
