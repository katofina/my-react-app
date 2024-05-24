export function closeModal(modal) {
    return {
        type: 'CLOSE_MODAL',
        payload: modal,
    }
}