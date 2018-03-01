import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';

import Card from '../Card';

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
      <Card>
          <Text key={thikr.id} style={styles.text}>
            {thikr.title}
            {'\n'}{'\n'}
            ({thikr.count})
          </Text>
      </Card>
    );
  }

  render() {
    return (
      <ScrollView>
        <StatusBar
          backgroundColor='#321911'
          barStyle='light-content'
        />
        <Text style={styles.header}>أذكار الصباح</Text>
        {this.renderAthkar()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: '500',
    backgroundColor: '#8c7b75',
    padding: 15,
    color: 'black',
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black'
  }
});
