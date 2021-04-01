import { USERS_LOADING, USERS_LOADING_FAILED, SET_USERS } from '../types'
import { usersAPI } from '../../api/api'

const setUsers = (users) => ({ type: SET_USERS, payload: users })
const usersLoadingFailed = () => ({ type: USERS_LOADING_FAILED })
const usersIsLoading = () => ({ type: USERS_LOADING })

export const getUsers = (accessToken) => {
	return async (dispatch) => {
		dispatch(usersIsLoading())
		const response = await usersAPI.getUsers(accessToken)
		if (!response.isError) {
			dispatch(setUsers(response.data))
		} else {
			dispatch(usersLoadingFailed())
		}
	}
}
