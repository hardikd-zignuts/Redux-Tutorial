const redux = require('redux')
const axios = require('axios')
const thunk = require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore

// Actions 
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAIL = 'FETCH_USER_FAIL'

// initial state
const initialState = {
    loading: false,
    data: [],
    error: ''
}

// Action creators
const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payLoad: users
    }
}

const fetchUserFail = error => {
    return {
        type: FETCH_USER_FAIL,
        payLoad: error
    }
}

// Reducer which take previous state and action
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                data: action.payLoad,
                error: ''
            }
        case FETCH_USER_FAIL:
            return {
                loading: false,
                data: [],
                error: action.payLoad
            }

    }
}

const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.id)
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUserFail(error.message))
            })
    }
}

// Create Redux Store which take reducer and middleware as argument
const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchUser())