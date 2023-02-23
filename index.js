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
const reducer = (state, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...initialState,
                numOfCake: initialState.numOfCake - 1
            }
        default:
            return state
    }
}