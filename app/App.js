import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer/index";
import io from "socket.io-client/dist/socket.io.js";

import Components from "./container/index";

import { socket, store } from "./action"

socket.on("connect", () => {
    store.dispatch({ type: "socket/user/get_owner" });
    store.dispatch({ type: "socket/user/get_user" });

    socket.on("action", action => {
        store.dispatch(action);
    });
    socket.on("action/update_access_token", action => {
        AsyncStorage.setItem('access_token', action.access_token)
    });
    socket.on("action/get_owner", action => {
        store.dispatch({ type: "socket/user/get_owner" });
    });
});

setInterval(() => {
    if(!socket.connected){
        console.log("try connect")
        socket.connect();
    }
}, 1000)

socket.on("disconnect", () => {
    socket.connect();
});


export default class App extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1, width: '100%', height: '100%' }}>
                    <Components/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 200,
  },
});
