import React, { Component } from "react";
import { Image, TouchableHighlight, FlatList, ScrollView, Platform, StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default class Com extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { _id, driver, router, navigate, onGetMessage } = this.props;

        if(!driver || !router)
            return null

        schedule_date = new Date(router.schedule_time)

        return (
            <TouchableHighlight onPress={() => {
                onGetMessage(_id)
                navigate('MatchChat')
            }}>
                <View style={{
                    flex: 1, marginTop: 10, flexDirection: "row",
                    borderColor: '#841584',
                    borderWidth: 1,
                }}>
                    <View style={{ flex: 1}}>
                        <Image
                          style={{width: 50, height: 50}}
                          source={{ uri: driver.avatar}}
                        />
                        <Text>
                            {driver.name}
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
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
});
