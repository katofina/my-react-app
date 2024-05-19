const initialState = {
    cards: [],
}

export function DataReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DATA":
            return{cards: action.payload}
        
        default:
            return state
    }
}