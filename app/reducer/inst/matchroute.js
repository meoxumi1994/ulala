const app = (state = {
    route: undefined,
}, action) => {
    switch (action.type) {
        case 'INST_MATCH_ROUTE':
          return {
            ...state,
            ...action.data,
          }
        default:
            return state
    }
}

export default app
