import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from "../container/Login"
import Home from "../container/Home"
import Setting from "../container/Setting"
import CreateRouterGeneral from "../container/CreateRouterGeneral"
import CreateRouterPrice from "../container/CreateRouterPrice"
import CreateRouterDetail from "../container/CreateRouterDetail"
import FindRouter from "../container/FindRouter"
import MatchList from "../container/MatchList"
import MatchRoute from "../container/MatchRoute"
import MatchChat from "../container/MatchChat"

const AppNavigator = createStackNavigator({
        Home: { screen: Home },
        Find: { screen: FindRouter },
        Setting: { screen: Setting },
        FindRouter: { screen: FindRouter },
        MatchListComponent: { screen: MatchList },
        MatchRouteContainer: { screen: MatchRoute },
        CreateRouterGeneral: { screen: CreateRouterGeneral },
        CreateRouterPrice: { screen: CreateRouterPrice },
        CreateRouterDetail: { screen: CreateRouterDetail },
        MatchChat: { screen: MatchChat },
    },
    {
        initialRouteName: "Home",
        tabBarPosition: "top",
        tabBarOptions: {
            activeTintColor: "white",
            inactiveTintColor:'#FF00BF',
            justifyContent: "center",
            showIcon: true,
            showLabel: true,
            labelStyle: {
                fontSize: 10,
                margin:0, padding:0,
            },
            iconStyle: {
                width: 30,
                height: 30,
                margin:0, padding:0
            },
            style: {
                backgroundColor: "#FF00BF",
                // height: Header.HEIGHT,
            },
            indicatorStyle: {
                backgroundColor: "white"
            }
        },
        animationEnabled: true
    }
);

const AppNavigatorContainer = createAppContainer(AppNavigator)

export default class Components extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { owner } = this.props;

        if (owner.status === "WAIT") {
            return <Login />;
        } else if (owner.status === "LOGING") {
            return (
                <View style={{
                    justifyContent: "center",
                    alignItems: 'center', flex: 1,
                }}>
                    <Text style={{ fontSize: 30 }}>ULALA</Text>
                </View>
            )
        }
        return (
            <AppNavigatorContainer screenProps={{ ...this.props }} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
});
