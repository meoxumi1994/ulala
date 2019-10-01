import React, { Component } from "react";
import { Image, TextInput,  StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Com extends Component<Props> {
    static navigationOptions = {
        tabBarIcon: <Icon name="md-settings" color="white" style={{ fontSize: 25 }}/>
    };

    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            car_number: '',
        };
    }

    render() {
        const { onLogout, owner } = this.props
        return (
            <View style={{ margin: 10 }}>
                <Image
                  style={{width: 100, height: 100}}
                  source={{ uri: owner.avatar}}
                />
                <Text style={{ marginTop: 10 }}>
                    {owner.name}
                </Text>
                <Text style={{ marginTop: 10 }}>
                    Điện thoại: {owner.phone}
                </Text>
                <Text style={{ marginTop: 10 }}>
                    Biển Số Xe: {owner.license_place}
                </Text>
                <Button
                    onPress={() => {
                        onLogout()
                    }}
                    title="logout"
                    color="#FF00BF"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
});
