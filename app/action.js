import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer/index";
import io from "socket.io-client/dist/socket.io.js";

export const socket = io("http://192.168.1.6:3333");

function logger({ getState }) {
    return next => action => {
        let returnValue;
        console.log(action)
        if (action.type.substr(0, 6) === "client") {
            returnValue = next({
                ...action,
                type: action.type.substr(7, action.type.length)
            });
        } else if (action.type.substr(0, 6) === "socket") {
            AsyncStorage.getItem("access_token")
                .then(async value => {
                    socket.emit(action.type, {
                        ...action,
                        "x-ulala-token": value
                    });
                })
                .catch(err => {
                    console.log("err", err);
                });
        } else {
            returnValue = next(action);
        }
        // Call the next dispatch method in the middleware chain.

        // console.log('state after dispatch', getState())
        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue;
    };
}

export const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

export const get_user = (_id) => {
    user = store.getState().data.user[_id]
    if(!user){
        store.dispatch({
            type: 'socket/user/get_by_id',
            data: {
                user_id: _id
            }
        })
    }
    return user
}

export const get_router = (_id) => {
    router = store.getState().data.router[_id]
    if(!router){
        store.dispatch({
            type: 'socket/router/get_by_id',
            data: {
                router_id: _id
            }
        })
    }
    return router
}
