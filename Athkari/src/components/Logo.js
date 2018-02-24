import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Logo extends Component<> {
  render() {
    return(
      <View style={styles.container}>
     <Image source={require('../../assets/logo.png')}/>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d7ccc8',
  }
})

