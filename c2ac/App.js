import React, { Component } from 'react';
import { Alert, Text, View, Button, StyleSheet, TextInput } from 'react-native';

export default class MyView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', nextText: '' };
  }
  onPress = () => {
    //this.setState({ nextText: this.state.text });
    var asciivalues = [];
    for (var i = 0; i < this.state.text.length; i++) {
      asciivalues.push(this.state.text.charCodeAt(i));
    }
    this.setState({ nextText: asciivalues.join(" ") });
  };

  render() {
    return (
      //<View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Type your Character"
          onChangeText={text => this.setState({ text: text })}
        />
        <Button onPress={this.onPress} title="Translate to ASCII" />
        <Text> {this.state.nextText}</Text>
      </View>
    );
  }
}
