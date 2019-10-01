import React, { Component } from "react";
import { DatePickerIOS, ScrollView, StyleSheet, Image, Text, View, Button, FlatList, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GooglePlacesInput from '../container/GooglePlacesInput';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Com extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation
        const { route, user, onMatchRoute } = this.props
        const schedule_date = new Date(route.schedule_time);

        return (
            <TouchableHighlight onPress={() => {
                    onMatchRoute(router);
                    navigate("MatchRouteContainer");
            }}>
                <View style={{
                    flex: 1, marginTop: 10,
                    flexDirection: "row", alignrouters: 'center',
                    borderColor: '#841584',
                    borderWidth: 1,
                }}>
                    <View style={{ flex: 1}}>
                        <Image
                          style={{width: 50, height: 50}}
                          source={{ uri: user.avatar}}
                        />
                        <Text>
                            {user.name}
                        </Text>
                        <Text>
                            {router.price}
                        </Text>
                    </View>
                    <View style={{ flex: 3}}>
                        <Text>
                            time : {schedule_date.toString()}
                        </Text>
                        <Text>
                            from : {router.from_address.name}
                        </Text>
                        <Text>
                            to : {router.to_address.name}
                        </Text>
                        <Text>
                            percent : {Math.round(router.rate * 100)}%
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});
