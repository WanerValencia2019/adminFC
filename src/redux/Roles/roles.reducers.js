import ActionTypes from "../actionTypes";

const initialState = {
    roles: [],
    error: false,
    message: null,
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_ROLES:
            return {...state}
        default:
            return state;
    }
}

export default reducer;