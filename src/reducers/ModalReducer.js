const initialState = {
    modalIn: false,
    modalUp: false
}

export function ModalReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_MODAL_IN":
            return {...state, modalIn: action.payload}
        case "SET_MODAL_UP":
            return {...state, modalUp: action.payload}
        case 'CLOSE_MODAL':
            return {modalIn: action.payload, modalUp: action.payload}
        
        default:
            return state
    }
}