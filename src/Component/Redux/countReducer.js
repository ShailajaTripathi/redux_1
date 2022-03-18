import { BUY_TOKEN } from "./actionType";

const initialState = {
    number_of_tokens: 10
}

const countReducer = (state = initialState, Action) => {
    switch (Action.type) {
        case BUY_TOKEN:
            return {
                ...state,
                number_of_tokens: state. number_of_tokens - 1
            }
            
        default:
            return state;
    }
}

export default countReducer;