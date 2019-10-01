const app = (state = {
    "_id": undefined,
    "name": undefined,
    "avatar": undefined,
    "phone": undefined,
    "license_place": undefined,
    "status": 'WAIT', // WAIT -> LOGING -> LOGED
    "routers": [],
    "driver_matches": [],
    "rider_matches": [],
}, action) => {
    switch (action.type) {
        case 'DATA_OWNER':
            return {
                ...state,
                ...action.data
            }
        case 'DATA_OWNER_SET':
            return action.data
        default:
            return state
    }
}

export default app
