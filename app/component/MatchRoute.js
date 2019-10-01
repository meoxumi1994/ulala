import React, { Component } from "react";
import { DatePickerIOS, ScrollView, StyleSheet, Image, Text, View, Button, FlatList, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GooglePlacesInput from '../container/GooglePlacesInput';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class MatchListComponent extends Component<Props> {
    static navigationOptions = {
        title: "Match",
    };

    constructor(props) {
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation
        const { route, user, onCreateMatch } = this.props
        const schedule_date = new Date(route.schedule_time);

        if(!route || !user)
            return null

        return (
            <ScrollView>
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
                        <Text style={{ color: 'green'}} >
                            {route.price}
                        </Text>
                    </View>
                    <View style={{ flex: 3}}>
                        <Text style={styles.item} >
                            time : {schedule_date.toString()}
                        </Text>
                        <Text style={styles.item} >
                            from : {route.from_address.name}
                        </Text>
                        <Text style={styles.item} >
                            to : {route.to_address.name}
                        </Text>
                        {route.rate && <Text style={styles.item} >
                                percent : {Math.round(route.rate * 100)}%
                            </Text>
                        }
                        <Text style={styles.item} >
                            note : {route.note}
                        </Text>
                    </View>
                </View>
                <Button
                    onPress={() => {
                        onCreateMatch(route._id)
                        navigate('Home')
                    }}
                    title="Match With Me"
                    color="#FF00BF"
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
