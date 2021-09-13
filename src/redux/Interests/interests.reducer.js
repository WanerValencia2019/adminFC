import ActionTypes from "../actionTypes";


/*const interestsDefaultData = {
	id:0,
	name: '',
	description: '',
	status: false,
	createdAt: new Date().toISOString()
}*/

const initialState = {
	interests: [],
	error: false,
	message: null,
}


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.LOAD_INTERESTS:
			return { ...state
			}
		case ActionTypes.ADD_INTEREST_SUCCESS:
			return { ...state,
				interests: [
					...state.interests, {
						id: action.payload.id,
						name: action.payload.name,
						description: action.payload.description,
						status: action.payload.status,
						createdAt: action.payload.createdAt
					}
				]
			}
		case ActionTypes.DELETE_INTEREST_SUCCESS:
			return { ...state,
				interests: action.payload.interests
			}
		case ActionTypes.UPDATE_INTEREST_SUCCESS:
			return { ...state,
				interests: action.payload.interests
			}
		default:
			return state;
	}
}

export default reducer;