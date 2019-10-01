import React, { Component } from "react";
import { ScrollView, Picker, TextInput, DatePickerIOS, StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GooglePlacesInput from '../container/GooglePlacesInput';
import * as Facebook from 'expo-facebook';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class CreateRouterDetail extends Component<Props> {
    static navigationOptions = {
        title: "Chi Tiết",
    };

    constructor(props) {
        super(props);
        this.state = {
            customer_count: '1',
            phone: props.phone || '',
            license_place: props.license_place || '',
            note: '',
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const { onCreateRouter } = this.props
        return (
            <View style={styles.container}>
                <View style={{ marginBotton: 10 }}>
                    <Text>Điền Thông Tin Cho Chuyến Xe Của Bạn:</Text>
                </View>
                <View>
                    <Text>Số Điện Thoại: </Text>
                    <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                      onChangeText={text => {
                          this.setState({phone: text});
                      }}
                      value={this.state.phone}
                    />
                </View>
                <View>
                    <Text>Biển Số Xe: </Text>
                    <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                      onChangeText={text => {
                          this.setState({license_place: text});
                      }}
                      value={this.state.license_place}
                    />
                </View>
                <View>
                    <Text>Số Hành Khách: </Text>
                    <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                      onChangeText={text => {
                          this.setState({customer_count: text});
                      }}
                      value={this.state.customer_count}
                    />
                </View>
                <View>
                    <Text>Note:</Text>
                    <TextInput
                      style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
                      onChangeText={text => {
                          this.setState({note: text});
                      }}
                      value={this.state.note}
                    />
                </View>
                <Button
                    onPress={() => {
                        onCreateRouter(
                            this.state.note,
                            this.state.license_place,
                            this.state.phone,
                        )
                        navigate('Home')
                    }}
                    title="Đăng Chuyến Xe"
                    color="#FF00BF"
                    disabled={!(this.state.license_place) && !(this.state.customer_count)}
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
