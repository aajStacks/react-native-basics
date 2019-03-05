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
      </View> //trace back to line 9 where we said that the render() method outputs
      //only a single instance. We couldn't have printed "hello World!" twice using two
      //distinct View Field. If you look closely, we embedded an inner view field into 
      //an outer view field so that the render() method knows that it's
      //rendering only one view field, which happens to be the outer view field
      //from line 11 <View> ......
      //to line 18 </View>
      );
  }
}
