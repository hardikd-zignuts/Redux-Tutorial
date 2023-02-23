const redux = require('redux')


const BUY_CAKE = 'BUY_CAKE'

const initialState = {
    numOfCake: 10
}


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

// (PrevState, Action)  and return New State
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)

console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log("State Updated", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

