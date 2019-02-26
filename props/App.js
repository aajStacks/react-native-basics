import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component{
  render(){
    return(
      <View>
        <Text>Hello {this.props.name} {this.props.bs} </Text>
      </View>
    )
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' bs='Bullshit' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);


// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => Bananas); //Can always skip it as expo does it by default
