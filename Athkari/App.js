/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import Logo from './src/components/Logo';
import Athkar from './src/components/Athkar';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor='#321911'
      barStyle='light-content'
      />
      <Logo />
      <Athkar />
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
