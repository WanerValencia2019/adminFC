import ActionTypes from "../actionTypes";


/*const roleDefaultData = {
	id:0,
	name: '',
	description: '',
	createdAt: new Date().toISOString()
}*/

const initialState = {
	roles: [],
	error: false,
	message: null,
}


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.LOAD_ROLES:
			return { ...state
			}
		case ActionTypes.ADD_ROLE_SUCCESS:
			return { ...state,
				roles: [
					...state.roles, {
						id: action.payload.id,
						name: action.payload.name,
						description: action.payload.description,
						status: action.payload.status,
						createdAt: action.payload.createdAt
					}
				]
			}
		case ActionTypes.DELETE_ROLE_SUCCESS:
			return { ...state,
				roles: action.payload.roles
			}
		case ActionTypes.UPDATE_ROLE_SUCCESS:
			return { ...state,
				roles: action.payload.roles
			}
		default:
			return state;
	}
}

export default reducer;