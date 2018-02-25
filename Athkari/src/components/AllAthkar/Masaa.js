import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
} from 'react-native';

type Props = {};
export default class Masaa extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor='#321911'
      barStyle='light-content'
      />
    <Text style={styles.header}>أذكار المساء</Text>
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
