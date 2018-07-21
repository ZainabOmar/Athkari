import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

// import Header from './src/components/Header';
import Logo from './src/components/Logo';
import Sabah from './src/components/AllAthkar/Sabah';
import Masaa from './src/components/AllAthkar/Masaa';
import Others from './src/components/AllAthkar/Others';

type Props = {};
class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: 'الصفحة الرئيسية',
    headerStyle: {
      backgroundColor: '#8c7b75',
    },
    headerTintColor: 'black',
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor='#321911'
      barStyle='light-content'
      />
      <Logo />
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Sabah')}
      style={styles.button}>
      <Text style={styles.buttonText}> أذكار الصباح </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Masaa')}
      style={styles.button}>
      <Text style={styles.buttonText}> أذكار المساء </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Others')}
      style={styles.button}>
      <Text style={styles.buttonText}> أخرى </Text>
      </TouchableOpacity>
      </View>
      );
  }
}

const RootStack = createStackNavigator(
{
  Home: HomeScreen,
  Masaa: Masaa,
  Sabah: Sabah,
  Others: Others,
},
{
  initialRouteName: 'Home',
}
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d7ccc8',
    alignItems: 'center',
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
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
