import {
	SET_USERS,
	USERS_LOADING,
	USERS_LOADING_FAILED,
	CHANGE_USER,
	DELETE_USER,
} from '../types'

const initialState = {
	users: [],
	isLoading: false,
	loadingFailed: false,
}

function usersReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: [...action.payload],
				isLoading: false,
				loadingFailed: false,
			}
		case USERS_LOADING:
			return { ...state, isLoading: true }
		case USERS_LOADING_FAILED:
			return { ...state, loadingFailed: true }
		case CHANGE_USER:
			return state.users.map((user) =>
				user.id === action.payload.id ? action.payload : user
			)
		case DELETE_USER:
			return state.users.filter((user) => user.id !== action.payload.id)
		default:
			return state
	}
}

export default usersReducer
