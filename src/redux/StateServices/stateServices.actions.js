import ActionTypes from "./../actionTypes";



export const addStateServices =
	({
		id = 0,
		name,
		description,
	}) => (dispatch, prevState) => {
		let count = prevState().stateServices.states.length

		return dispatch({
			type: ActionTypes.ADD_STATE_SERVICES_SUCCESS,
			payload: {
				id: count + 1,
				name,
				description,
				createdAt: new Date().toUTCString(),
			},
		});
	};

export const deleteStateServices = (
	id
) => (dispatch, prevState) => {
	let states = prevState().stateServices.states.filter((state) => state.id !== id);
	return dispatch({
		type: ActionTypes.DELETE_STATE_SERVICES_SUCCESS,
		payload: {
			states
		},
	})
}

export const updateStateServices = ({
	id,
	name,
	description,
}) => (dispatch, prevState) => {
	let newData = {
		name,
		description,		
	}
	let index = prevState().stateServices.states.findIndex((r) => r.id === id);
	let states = prevState().stateServices.states;

	states[index] = { ...states[index],
		...newData
	};

	return dispatch({
		type: ActionTypes.UPDATE_STATE_SERVICES_SUCCESS,
		payload: {
			states
		},
	});
}