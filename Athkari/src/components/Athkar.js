import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

// import Masaa from './AllAthkar/Masaa';
// import Sabah from './AllAthkar/Sabah';
// import Others from './AllAthkar/Others';

type Props = {};
export default class Athkar extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor='#321911'
      barStyle='light-content'
      />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> أذكار الصباح </Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> أذكار المساء </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> أخرى </Text>
    </TouchableOpacity>
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
  },
  button: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#321911',
    width: 200,
    paddingVertical: 13,
    backgroundColor: '#d7ccc8',
    marginBottom: 20,
  },
  buttonText: {
    color: '#321911',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '500',
  }
});
