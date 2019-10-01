const app = (state = {
}, action) => {
    switch (action.type) {
        case 'DATA_MESSAGE':
            return {
                ...state,
                ...action.data
            }
        case 'DATA_MESSAGE_ADD_LIST':
            item = state[action.data.key] || []
            item = item.slice()
            item.push(action.data.message)
            return {
                ...state,
                [action.data.key]: item
            }
        default:
            return state
    }
}

export default app
