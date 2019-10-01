import React, { Component } from "react";
import { Image, TouchableHighlight, FlatList, ScrollView, Platform, StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { get_user } from '../action'

import MatchDriver from '../container/element/MatchDriver'
import MatchRider from '../container/element/MatchRider'

export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { navigate } = this.props.navigation;
        const { owner, onMatchRoute, onCancel } = this.props;

        return (
            <ScrollView style={styles.container}>
                <TouchableHighlight onPress={() => {
                        navigate("Setting");
                }} style={{ width: 50 }}>
                    <View style={{
                        flexDirection: "row",
                        width: 50,
                        borderColor: '#841584',
                        borderWidth: 1,
                    }}>
                        <Image
                          style={{width: 48, height: 48}}
                          source={{ uri: owner.avatar}}
                        />
                    </View>
                </TouchableHighlight>
                <Text style={{ marginTop: 10 }}>
                    Tìm thấy nhau chưa bao giờ dễ dàng hơn
                </Text>
                <Text style={{ marginTop: 10 }}>
                    Bạn là người Đang ?
                </Text>
                <Button
                    onPress={() => navigate("Find")}
                    title="Tìm Xe"
                    color="#841584"
                />
                <Button
                    onPress={() => navigate("CreateRouterGeneral")}
                    title="Lái Xe"
                    color="#841584"
                />
                <Text style={{ marginTop: 10 }}>
                    Tài xế của bạn ({owner.driver_matches.length}):
                </Text>
                <FlatList
                    scrollEnabled={false}
                    data={owner.driver_matches}
                    style={{
                        backgroundColor: "white"
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <MatchDriver {...item} navigate={navigate}/>
                        );
                    }}
                />
                <Text style={{ marginTop: 10 }}>
                    Khách của bạn ({owner.rider_matches.length}):
                </Text>
                <FlatList
                    scrollEnabled={false}
                    data={owner.rider_matches}
                    style={{
                        backgroundColor: "white"
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <MatchRider {...item} navigate={navigate}/>
                        );
                    }}
                />
                <Text style={{ marginTop: 10 }}>
                    Chuyến đi bạn đăng ({owner.routers.length}):
                </Text>
                <FlatList
                    scrollEnabled={false}
                    data={owner.routers}
                    style={{
                        backgroundColor: "white"
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        const schedule_date = new Date(item.schedule_time);

                        return (
                            <View style={{
                                flex: 1, marginTop: 10, flexDirection: "row",
                                borderColor: '#000000',
                                borderWidth: 1,
                            }}>
                                <View style={{ flex: 1}}>
                                    <Image
                                      style={{width: 50, height: 50}}
                                      source={{ uri: owner.avatar}}
                                    />
                                    <Text style={styles.item} >
                                        {owner.name}
                                    </Text>
                                    <Text style={{ color: 'green'}} >
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
                                        {item.transport_type}
                                    </Text>
                                </View>
                                <Button
                                    onPress={() => onCancel(item._id)}
                                    title="Cancel"
                                    color="#841584"
                                />
                            </View>
                        );
                    }}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
});
