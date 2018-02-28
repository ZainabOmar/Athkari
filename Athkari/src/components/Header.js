import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Header extends Component<> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textStyle}>Athkari</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bcaaa4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 30,
    color: '#260e04',
  },
});
