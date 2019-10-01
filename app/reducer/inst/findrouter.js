const instance = (state = {
    from_address: undefined,
    to_address: undefined,
    suggest_routers: [],
}, action) => {
    switch (action.type) {
        case 'INST_FIND_ROUTER':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export default instance
