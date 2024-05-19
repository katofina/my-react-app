const initialState = [];

export function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER":
            return state.concat(action.payload);
        
        default:
            return state
    }
}