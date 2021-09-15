import ActionTypes from '../actionTypes';

/* const userServicesDefaultData = {
	id:0,
	userId: 0,
	userMatchId: 0,
	matched: false,
	matchedAt: new Date().toISOString(),
	createdAt: new Date().toISOString()
} */

const initialState = {
    matchs: [],
    error: false,
    message: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_MATCHS:
            return { ...state };
        case ActionTypes.ADD_MATCH_SUCCESS:
            return {
                ...state,
                matchs: [
                    ...state.matchs,
                    {
                        id: action.payload.id,
                        userId: action.payload.userId,
                        userMatchId: action.payload.userMatchId,
                        matched: action.payload.matched,
                        matchedAt: action.payload.matchedAt,
                        createdAt: action.payload.createdAt,
                    },
                ],
            };
        case ActionTypes.DELETE_MATCH_SUCCESS:
            return { ...state, matchs: action.payload.matchs };
        case ActionTypes.UPDATE_MATCH_SUCCESS:
            return { ...state, matchs: action.payload.matchs };
        default:
            return state;
    }
};

export default reducer;
