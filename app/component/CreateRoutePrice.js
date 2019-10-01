import React, { Component } from "react";
import { ScrollView, Picker, TextInput, DatePickerIOS, StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GooglePlacesInput from '../container/GooglePlacesInput';
import * as Facebook from 'expo-facebook';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class CreateRouterPrice extends Component<Props> {
    static navigationOptions = {
        title: "Giá",
    };

    constructor(props) {
        super(props);
        this.state = {
            price: '50000',
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const { onCreateRouter } = this.props
        return (
            <View style={styles.container}>
                <Text>Hãy Cài Đặt Cho Mỗi Ghế Ngồi</Text>
                <Text>Giá thấp: Khả năng được chọn cao</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 100 }}
                  onChangeText={text => {
                      this.setState({price: text});
                  }}
                  value={this.state.price}
                />
                <Text>/ 1 người</Text>
                <Button
                    onPress={() => {
                        onCreateRouter(this.state.price)
                        navigate('CreateRouterDetail')
                    }}
                    title="Tiếp Tục"
                    color="#FF00BF"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
