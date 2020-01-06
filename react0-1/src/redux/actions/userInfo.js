import { get, post, postForm } from '../../api/server'

export const GET_USER_INFO = "userInfo/GET_USER_INFO";
export const CLEAR_USER_INFO = 'userInfo/CLEAR_USER_INFO'

export function getUserInfo(callback) {
	return (dispatch) => {
		get('getUserInfo').then((res) => {
			dispatch({
				type: GET_USER_INFO,
				payload: res
			});
		}).then(() => {
			if(typeof callback === "function") {
				callback()
			}
		})
	}
}

export function clearUserInfo() {
	return (dispatch) => {
		dispatch({
			type: CLEAR_USER_INFO
		})
	}
}