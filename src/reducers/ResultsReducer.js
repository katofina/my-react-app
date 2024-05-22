const initialState = [];

export function ResultsReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_RESULTS":
            return{res: action.payload}
        
        default:
            return state
    }
}