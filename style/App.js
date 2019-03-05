import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  cyan: {
    color: 'cyan',
  },
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.cyan}>just cyan</Text>
        <Text style={styles.bigBlack}>This is written in BIG black font</Text>
        <Text style={[styles.bigBlack, styles.cyan]}>bigBlack, then cyan</Text>
        <Text style={[styles.cyan, styles.bigBlack]}>cyan, then bigBlack</Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
