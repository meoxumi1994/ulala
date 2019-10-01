const app = (state = {
    match_id: undefined,
}, action) => {
    switch (action.type) {
        case 'INST_MATCH_CHAT':
          return {
            ...state,
            ...action.data,
          }
        default:
            return state
    }
}

export default app
