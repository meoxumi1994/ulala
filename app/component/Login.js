import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Facebook from 'expo-facebook';

export default class Com extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const { onLoginFacebook } = this.props
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => {
                        Facebook.logInWithReadPermissionsAsync("2441511479274683", {
                            permissions: ["public_profile", "email"]
                        }).then(({ type, token }) => {
                            onLoginFacebook(token)
                        })
                    }}
                    title="login facebook"
                    color="#FF00BF"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1
    },
});
