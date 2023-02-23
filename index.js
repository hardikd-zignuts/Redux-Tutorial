const redux = require('redux')
const reduxLogger = require('redux-logger')
const combineReducer = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// const initialState = {
//     numOfCake: 10
// }

const initialCakeState = {
    numOfCake: 10
}
const initialIceCreamState = {
    numOfIceCream: 20
}

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second Redux Action'
    }
}

// (PrevState, Action)  and return New State 
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCake: state.numOfCake - 1
//             }
//         default:
//             return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
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
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return state
    }
}
const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = redux.createStore(rootReducer, applyMiddleware(logger))

console.log(store.getState())
const unsubscribe = store.subscribe(() => { })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

