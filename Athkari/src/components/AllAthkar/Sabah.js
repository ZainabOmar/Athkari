import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import { fetch } from 'isomorphic-fetch';

const data = require('../../../data/Sabah.json');

type Props = {};
export default class Sabah extends Component<Props> {
  state = { myData: [] };

  componentWillMount() {
    this.setState({ myData: data });
  }

  renderAthkar() {
    return this.state.myData.map(
      thikr =>
      <View>
        <View style={{ alignItems: 'flex-end', }}>
          <TouchableOpacity style={styles.button}>
            <Text key={thikr.count} style={styles.buttonText}>{thikr.count}</Text>
          </TouchableOpacity>
          <Text key={thikr.title} style={styles.text}>
            {thikr.title}
            {'\n'}
          </Text>
        </View>
      </View>
    );
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
        {this.renderAthkar()}
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
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black'
  },
  button: {
    alignItems: 'center',
    borderColor: '#321911',
    width: 90,
    paddingVertical: 10,
    backgroundColor: '#d7ccc8',
    marginBottom: 10,
  },
  buttonText: {
    color: '#321911',
    fontSize: 20,
    fontWeight: '500',
  }
});
