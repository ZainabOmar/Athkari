import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
} from 'react-native';
// import { fetch } from 'isomorphic-fetch';

const data = require('../../../data/Sabah.json');

type Props = {};
export default class Sabah extends Component<Props> {
  state = { myData: [] };

  componentWillMount() {
    this.setState({ myData: data });
  }

  render() {
    console.log('here is the data', this.state);
    return (
      <View>
        <StatusBar
          backgroundColor='#321911'
          barStyle='light-content'
        />
        <Text style={styles.header}>أذكار الصباح</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
