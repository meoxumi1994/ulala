const app = (state = {
  internet: "",
}, action) => {
    switch (action.type) {
        case 'CHANGE_APP':
          return {
            ...state,
            ...action.data,
          }
        default:
            return state
    }
}

export default app
