const app = (state = {
}, action) => {
    switch (action.type) {
        case 'CHANGE_HOME':
          return {
            ...state,
            ...action.data,
          }
        default:
            return state
    }
}

export default app
