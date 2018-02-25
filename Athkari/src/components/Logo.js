import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const logo = require('../../assets/logo.png');

export default class Logo extends Component<> {
  render() {
    return (
      <View style={styles.container}>
     <Image source={logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d7ccc8',
  }
});
