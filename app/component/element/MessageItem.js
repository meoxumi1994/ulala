import React, { Component } from "react";
import { Image, TouchableHighlight, FlatList, ScrollView, Platform, StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default class Com extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { user, content } = this.props;

        if(!user)
            return null

        return (
            <View style={{
                marginTop: 10, flexDirection: "row",
                borderColor: 'black',
                borderWidth: 1,
            }}>
                <View>
                    <Image
                      style={{width: 50, height: 50}}
                      source={{ uri: user.avatar}}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>
                        {content}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
});
