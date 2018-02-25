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
     <Image source={logo} style={{ width: 120, height: 120 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
