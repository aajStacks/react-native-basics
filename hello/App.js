import React, { Component } from 'react'; // Imports components from react library, using 
//curly braces extracts the subcomponents
import { Text, View } from 'react-native'; //allows us to build mobile application. loads 
//from react-native library.

export default class HelloWorldApp extends Component { //exports the class as a module
  //so some other code can call it. default helps to do it. project name. components from
  //the library 
  render() { //returns a view, in return we can only have one rendered method
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello world!</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello world!</Text>
        </View>
      </View>
    );
  }
}
