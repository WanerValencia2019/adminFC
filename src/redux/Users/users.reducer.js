import ActionTypes from "../actionTypes";

const initialState = {
    users: [],
    error: false,
    message: null,
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_USERS:
            return {...state}
        default:
            return state;
    }
}

export default reducer;