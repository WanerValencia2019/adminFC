import ActionTypes from '../actionTypes';

export const addMatch =
    ({ id, userId, userMatchId, matched, matchedAt }) =>
    (dispatch, prevState) => {
        // eslint-disable-next-line no-unused-vars
        const suma = id + 0;
        const count = prevState().matchs.matchs.length;
        return dispatch({
            type: ActionTypes.ADD_MATCH_SUCCESS,
            payload: {
                id: count + 1,
                userId,
                userMatchId,
                matched,
                matchedAt,
                createdAt: new Date().toUTCString(),
            },
        });
    };

export const deleteMatch = (id) => (dispatch, prevState) => {
    const matchs = prevState().matchs.matchs.filter((state) => state.id !== id);
    return dispatch({
        type: ActionTypes.DELETE_MATCH_SUCCESS,
        payload: {
            matchs,
        },
    });
};

export const updateMatch =
    ({ id, userId, userMatchId, matched, matchedAt }) =>
    (dispatch, prevState) => {
        const newData = {
            userId,
            userMatchId,
            matched,
            matchedText: matched ? 'SI' : 'NO',
            matchedAt,
        };
        const index = prevState().matchs.matchs.findIndex((r) => r.id === id);
        const { matchs } = prevState().matchs;

        matchs[index] = { ...matchs[index], ...newData };

        return dispatch({
            type: ActionTypes.UPDATE_MATCH_SUCCESS,
            payload: {
                matchs,
            },
        });
    };
