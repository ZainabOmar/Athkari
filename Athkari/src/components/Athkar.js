import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import Masaa from './AllAthkar/Masaa';
import Sabah from './AllAthkar/Sabah';

type Props = {};
export default class Athkar extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor='#321911'
      barStyle='light-content'
      />
    <Sabah />
    <Masaa />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d7ccc8',
  },
  header: {
    fontSize: 30,
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8c7b75',
    padding: 20,
    marginBottom: 20
  }
});
