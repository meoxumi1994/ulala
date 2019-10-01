import React, { Component } from "react";
import { ScrollView, Picker, TextInput, DatePickerIOS, StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GooglePlacesInput from '../container/GooglePlacesInput';
import * as Facebook from 'expo-facebook';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class CreateRouterGeneral extends Component<Props> {
    static navigationOptions = {
        title: "Tạo Chuyến Đi",
    };

    constructor(props) {
        super(props);
        this.state = {
            transport_type: 'MOTOBIKE',
            chosenDate: new Date(),
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const { onCreateRouter, from_address, to_address } = this.props
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text >From</Text>
                    <GooglePlacesInput data_action_type="INST_CREATE_ROUTER" data_key="from_address"/>
                </View>
                <View>
                    <Text>To</Text>
                    <GooglePlacesInput data_action_type="INST_CREATE_ROUTER" data_key="to_address"/>
                </View>
                <Picker
                  selectedValue={this.state.transport_type}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({transport_type: itemValue})
                  }>
                  <Picker.Item style={{ height: 40 }} label="Motobike" value="MOTOBIKE" />
                  <Picker.Item style={{ height: 40 }} label="Car" value="CAR" />
                </Picker>
                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={newDate => {
                      this.setState({chosenDate: newDate});
                    }}
                />
                <Button
                    onPress={() => {
                        onCreateRouter(
                            this.state.chosenDate.getTime(),
                            this.state.transport_type,
                        )
                        navigate('CreateRouterPrice')
                    }}
                    title="Tiếp tục"
                    color="#FF00BF"
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
