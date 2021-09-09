import ActionTypes from "./../actionTypes";



export const addUserServices =
	({
		id = 0,
		userId,
		stateServiceId,
		servicesId,
		value=0.0,
		description,
		dateService
	}) => (dispatch, prevState) => {
		let count = prevState().userServices.services.length

		return dispatch({
			type: ActionTypes.ADD_USER_SERVICES_SUCCESS,
			payload: {
				id: count + 1,
				userId,
				stateServiceId,
				servicesId,
				value,
				description,
				dateService,
				createdAt: new Date().toUTCString(),
			},
		});
	};

export const deleteUserServices = (
	id
) => (dispatch, prevState) => {
	let services = prevState().userServices.services.filter((state) => state.id !== id);
	return dispatch({
		type: ActionTypes.DELETE_USER_SERVICES_SUCCESS,
		payload: {
			services
		},
	})
}

export const updateUserServices = ({
	id = 0,
	userId,
	stateServiceId,
	servicesId,
	value=0.0,
	description,
	dateService
}) => (dispatch, prevState) => {
	let newData = {
		userId,
		stateServiceId,
		servicesId,
		value,
		description,
		dateService
	}
	let index = prevState().userServices.services.findIndex((r) => r.id === id);
	let services = prevState().userServices.services;

	services[index] = { ...services[index],
		...newData
	};
	console.log(services)
	return dispatch({
		type: ActionTypes.UPDATE_USER_SERVICES_SUCCESS,
		payload: {
			services
		},
	});
}