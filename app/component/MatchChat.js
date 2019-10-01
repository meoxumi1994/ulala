import React, { Component } from "react";
import { TextInput, ScrollView, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import MessageItem from '../container/element/MessageItem'

export default class Com extends Component<Props> {
    static navigationOptions = {
        title: "Messager",
    };

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    render() {
        const { match_id, messages, onSend } = this.props
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    scrollEnabled={false}
                    data={messages}
                    style={{
                        backgroundColor: "white"
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <MessageItem {...item}/>
                        );
                    }}
                />
                <View style={{
                    flex: 1, margin: 10, flexDirection: "row", alignItems: 'center',
                }}>
                    <TextInput
                      style={{ flex: 5, height: 40, borderColor: 'gray', borderWidth: 1 }}
                      onChangeText={text => {
                          this.setState({content: text});
                      }}
                      value={this.state.content}
                    />
                    <Button
                        style={{ flex: 1 }}
                        onPress={() => onSend(match_id, this.state.content)}
                        title="Send"
                        color="#841584"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
});
