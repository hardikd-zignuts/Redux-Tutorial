import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
import axios from 'axios'


export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess = user => {
    return {
        type: FETCH_USER_SUCCESS,
        payLoad: user
    }
}
export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payLoad: error
    }
}


const fetchUser = () => {

    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const userData = response.data
                dispatch(fetchUserSuccess(userData))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }

}

export default fetchUser

