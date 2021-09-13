import ActionTypes from "./../actionTypes";



export const addPaymentType=
	({
		id = 0,
		name,
		description,
		status
	}) => (dispatch, prevState) => {
		let count = prevState().paymentTypes.types.length
		return dispatch({
			type: ActionTypes.ADD_PAYMENT_TYPE_SUCCESS,
			payload: {
				id: count + 1,
				name,
				status,
				description,
				createdAt: new Date().toUTCString(),
			},
		});
	};

export const deletePaymentType= (
	id
) => (dispatch, prevState) => {
	console.log(id)
	let types = prevState().paymentTypes.types.filter((rol) => rol.id !== id);
	return dispatch({
		type: ActionTypes.DELETE_PAYMENT_TYPE_SUCCESS,
		payload: {
			types
		},
	})
}

export const updatePaymentType= ({
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
	let index = prevState().paymentTypes.types.findIndex((r) => r.id === id);
	let types = prevState().paymentTypes.types;

	types[index] = { ...types[index],
		...newData
	};

	return dispatch({
		type: ActionTypes.UPDATE_PAYMENT_TYPE_SUCCESS,
		payload: {
			types
		},
	});
}