import ActionTypes from "./../actionTypes";



export const addRol =
	({
		id = 0,
		name,
		description,
		status
	}) => (dispatch, prevState) => {
		let count = prevState().rolesUser.roles.length
		console.log('TAMAÑO '+count)
		return dispatch({
			type: ActionTypes.ADD_ROLE_SUCCESS,
			payload: {
				id: count + 1,
				name,
				status,
				description,
				createdAt: new Date().toUTCString(),
			},
		});
	};

export const deleteRol = ({
	id
}) => (dispatch, prevState) => {
	let roles = prevState().rolesUser.roles.filter((rol) => rol.id !== id);
	return dispatch({
		type: ActionTypes.DELETE_ROLE_SUCCESS,
		payload: {
			roles
		},
	})
}

export const updateRol = ({
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
	let index = prevState().rolesUser.roles.findIndex((r) => r.id === id);
	let roles = prevState().rolesUser.roles;

	roles[index] = { ...roles[index],
		...newData
	};

	return dispatch({
		type: ActionTypes.UPDATE_ROLE_SUCCESS,
		payload: {
			roles
		},
	});
}