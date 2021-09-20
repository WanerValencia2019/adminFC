import ActionTypes from '../actionTypes';

export const addUser =
    (id = 0, name, lastName, email, description) =>
    (dispatch, prevState) => {
        // eslint-disable-next-line no-unused-vars
        const sum = id + 0;
        const count = prevState().listUsers.users.length;
        return dispatch({
            type: ActionTypes.ADD_USER_SUCCESS,
            payload: {
                id: count + 1,
                username: name + lastName,
                name,
                lastName,
                description,
                age: 0,
                email,
                mobilePhone: '3284348549',
                coordinates: {},
                cityId: '21',
                countryId: '21',
                status: true,
                createdAt: new Date().toUTCString(),
            },
        });
    };

export const deleteUser = (idUser) => (dispatch, prevState) => {
    const users = prevState().listUsers.users.filter((user) => user.id !== idUser);
    return dispatch({
        type: ActionTypes.DELETE_USER_SUCCESS,
        payload: {
            users,
        },
    });
};

export const updateUser = (id, name, lastName, email, description) => (dispatch, prevState) => {
    const newData = {
        name,
        lastName,
        description,
        email,
    };
    const index = prevState().listUsers.users.findIndex((u) => u.id === id);
    const { users } = prevState().listUsers;

    users[index] = { ...users[index], ...newData };

    return dispatch({
        type: ActionTypes.UPDATE_USER_SUCCESS,
        payload: {
            users,
        },
    });
};
