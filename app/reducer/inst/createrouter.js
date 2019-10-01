const instance = (state = {
    from_address: undefined,
    to_address: undefined,
    schedule_time: undefined,
    transport_type: undefined,
    price: undefined,
    customer_count: undefined,
}, action) => {
    switch (action.type) {
        case 'INST_CREATE_ROUTER':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export default instance
