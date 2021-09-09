import ActionTypes from "./../actionTypes";



export const addServices =
	({
		id = 0,
		name,
		description,
	}) => (dispatch, prevState) => {
		let count = prevState().services.services.length

		return dispatch({
			type: ActionTypes.ADD_SERVICES_SUCCESS,
			payload: {
				id: count + 1,
				name,
				description,
				createdAt: new Date().toUTCString(),
			},
		});
	};

export const deleteServices = (
	id
) => (dispatch, prevState) => {
	console.log(id)
	let services = prevState().services.services.filter((services) => services.id !== id);
	console.log(services)

	return dispatch({
		type: ActionTypes.DELETE_SERVICES_SUCCESS,
		payload: {
			services
		},
	})
}

export const updateServices = ({
	id,
	name,
	description
}) => (dispatch, prevState) => {
	let newData = {
		name,
		description,
	}
	let index = prevState().services.services.findIndex((r) => r.id === id);
	let services = prevState().services.services;

	services[index] = { ...services[index],
		...newData
	};

	return dispatch({
		type: ActionTypes.UPDATE_SERVICES_SUCCESS,
		payload: {
			services
		},
	});
}