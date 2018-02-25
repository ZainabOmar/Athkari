import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

type Props = {};
export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor='#321911'
      barStyle='light-content'
      />
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
