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
// import axios from 'axios';

// import Header from './src/components/Header';
// import Logo from './src/components/Logo';
// import Athkar from './src/components/Athkar';

import Sabah from './src/components/AllAthkar/Sabah';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#321911'
          barStyle='light-content'
        />
      <Sabah />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7ccc8',
  }
});
