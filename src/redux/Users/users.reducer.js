import ActionTypes from '../actionTypes';

const initialState = {
    users: [],
    error: false,
    message: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_USERS:
            return { ...state };
        case ActionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                users: [
                    ...state.users,
                    {
                        id: action.payload.id,
                        username: action.payload.username,
                        name: action.payload.name,
                        lastName: action.payload.lastName,
                        description: action.payload.description,
                        age: action.payload.age,
                        email: action.payload.email,
                        mobilePhone: action.payload.mobilePhone,
                        coordinates: action.payload.coordinates,
                        cityId: action.payload.cityId,
                        countryId: action.payload.countryId,
                        status: action.payload.status,
                        createdAt: action.payload.createdAt,
                    },
                ],
            };
        case ActionTypes.DELETE_USER_SUCCESS:
            return { ...state, users: action.payload.users };
        case ActionTypes.UPDATE_USER_SUCCESS:
            return { ...state, users: action.payload.users };
        default:
            return state;
    }
};

export default reducer;
