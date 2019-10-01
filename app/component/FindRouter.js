import React, { Component } from "react";
import { DatePickerIOS, TextInput, ScrollView, StyleSheet, Image, Text, View, Button, FlatList, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GooglePlacesInput from '../container/GooglePlacesInput';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MatchRouteContainer from '../container/MatchRoute'

class MatchListComponent extends Component<Props> {
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
        const { onMatchRoute, from_address, to_address, suggest_routers, user_map } = this.props.screenProps
        return (
            <View style={styles.container}>
                <FlatList
                    scrollEnabled={false}
                    data={suggest_routers}
                    style={{
                        backgroundColor: "white"
                    }}
                    renderItem={({ item }) => {
                        const key = item.from_address.place_id + item.to_address.place_id
                        const user = user_map[item.create_by]
                        const schedule_date = new Date(item.schedule_time);

                        if(!user) return null
                        return (
                            <TouchableHighlight key={key} onPress={() => {
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

export default class FindComponent extends Component<Props> {
    static navigationOptions = {
        title: "Find",
    };

    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            customer_count: 1,
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        const { onFindRouter, from_address, to_address, suggest_routers, user_map } = this.props

        return (
            <ScrollView style={styles.container}>
                <Text>From</Text>
                <GooglePlacesInput data_action_type="INST_FIND_ROUTER" data_key="from_address"/>
                <Text>To</Text>
                <GooglePlacesInput data_action_type="INST_FIND_ROUTER" data_key="to_address"/>
                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={newDate => {
                      this.setState({chosenDate: newDate});
                    }}
                />
                <Button
                    onPress={() => {
                            onFindRouter()
                            navigate("MatchListComponent");
                        }
                    }
                    title="Tìm chuyến xe"
                    color="#841584"
                    disabled={!(from_address && to_address)}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});
