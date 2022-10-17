import { Buy_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
switch(action.type){
    case Buy_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - 1
    }
    default: return state
}
}

export default cakeReducer