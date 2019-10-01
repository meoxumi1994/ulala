const app = (state = {
}, action) => {
    switch (action.type) {
        case 'INST_LOGIN':
          return {
            ...state,
            ...action.data,
          }
        default:
            return state
    }
}

export default app
