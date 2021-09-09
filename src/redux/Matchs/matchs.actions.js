import ActionTypes from "./../actionTypes";



export const addMatch =
	({
		id,
		userId,
		userMatchId,
		matched,
		matchedAt,
	}) => (dispatch, prevState) => {
		let count = prevState().matchs.matchs.length

		return dispatch({
			type: ActionTypes.ADD_MATCH_SUCCESS,
			payload: {
				id: count + 1,
				id,
				userId,
				userMatchId,
				matched,
				matchedAt,
				createdAt: new Date().toUTCString(),
			},
		});
	};

export const deleteMatch = (
	id
) => (dispatch, prevState) => {
	let matchs = prevState().matchs.matchs.filter((state) => state.id !== id);
	return dispatch({
		type: ActionTypes.DELETE_MATCH_SUCCESS,
		payload: {
			matchs
		},
	})
}

export const updateMatch = ({
	id,
	userId,
	userMatchId,
	matched,
	matchedAt,
}) => (dispatch, prevState) => {
	let newData = {
		userId,
		userMatchId,
		matched,
		matchedAt,
	}
	let index = prevState().matchs.matchs.findIndex((r) => r.id === id);
	let matchs = prevState().matchs.matchs;

	matchs[index] = { ...matchs[index],
		...newData
	};

	return dispatch({
		type: ActionTypes.UPDATE_MATCH_SUCCESS,
		payload: {
			matchs
		},
	});
}