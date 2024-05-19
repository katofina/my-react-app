const initialState = [false, {}];

export function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_AUTH":
            return state = action.payload
        
        default:
            return state
    }
}