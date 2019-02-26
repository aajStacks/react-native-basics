import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import nullthrows from 'nullthrows';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    action = () => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    );
    // Toggle the state every second
    setInterval(action, 1000);
  }



  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
