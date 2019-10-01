import React, { Component } from "react";
import { DatePickerIOS, TextInput, ScrollView, StyleSheet, Image, Text, View, Button, FlatList, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GooglePlacesInput from '../container/GooglePlacesInput';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { get_user } from '../action';

export default class MatchListComponent extends Component<Props> {
    static navigationOptions = {
        title: "List",
    };

    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date()
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        const { onMatchRoute, from_address, to_address, suggest_routers, user_map } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    scrollEnabled={false}
                    data={suggest_routers}
                    style={{
                        backgroundColor: "white"
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        const user = get_user(item.create_by)
                        const schedule_date = new Date(item.schedule_time);

                        if(!user) return null
                        
                        return (
                            <TouchableHighlight onPress={() => {
                                    onMatchRoute(item);
                                    navigate("MatchRouteContainer");
                            }}>
                                <View style={{
                                    flex: 1, marginTop: 10, flexDirection: "row", alignItems: 'center',
                                    borderColor: '#841584',
                                    borderWidth: 1,
                                }}>
                                    <View style={{ flex: 1}}>
                                        <Image
                                          style={{width: 50, height: 50}}
                                          source={{ uri: user.avatar}}
                                        />
                                        <Text style={styles.item} >
                                            {user.name}
                                        </Text>
                                        <Text style={styles.item} >
                                            {item.price}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 3}}>
                                        <Text style={styles.item} >
                                            time : {schedule_date.toString()}
                                        </Text>
                                        <Text style={styles.item} >
                                            from : {item.from_address.name}
                                        </Text>
                                        <Text style={styles.item} >
                                            to : {item.to_address.name}
                                        </Text>
                                        <Text style={styles.item} >
                                            percent : {Math.round(item.rate * 100)}%
                                        </Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});
