const app = (state = {
}, action) => {
    switch (action.type) {
        case 'DATA_ROUTER':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export default app
