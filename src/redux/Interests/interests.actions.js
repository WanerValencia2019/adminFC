import ActionTypes from "./../actionTypes";



export const addInterest =
	({
		id = 0,
		name,
		description,
		status
	}) => (dispatch, prevState) => {
		let count = prevState().interest.interests.length

		return dispatch({
			type: ActionTypes.ADD_INTEREST_SUCCESS,
			payload: {
				id: count + 1,
				name,
				status,
				description,
				createdAt: new Date().toUTCString(),
			},
		});
	};

export const deleteInterest = (
	id
) => (dispatch, prevState) => {
	let interests = prevState().interest.interests.filter((interest) => interest.id !== id);
	return dispatch({
		type: ActionTypes.DELETE_INTEREST_SUCCESS,
		payload: {
			interests
		},
	})
}

export const updateInterest = ({
	id,
	name,
	description,
	status
}) => (dispatch, prevState) => {
	let newData = {
		name,
		description,
		status
	}
	let index = prevState().interest.interests.findIndex((r) => r.id === id);
	let interests = prevState().interest.interests;

	interests[index] = { ...interests[index],
		...newData
	};

	return dispatch({
		type: ActionTypes.UPDATE_INTEREST_SUCCESS,
		payload: {
			interests
		},
	});
}