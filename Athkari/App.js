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

import { Fonts } from './src/utils/Fonts';
import Header from './src/components/Header';
import Logo from './src/components/Logo';
import Sabah from './src/components/AllAthkar/Sabah';
import Masaa from './src/components/AllAthkar/Masaa';
import Other from './src/components/AllAthkar/Other';

type Props = {};
class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: 'الصفحة الرئيسية',
    headerTitleStyle: {
      marginLeft: 135,
    },
    headerStyle: {
      backgroundColor: '#0c84af',
    },
    headerTintColor: 'black',
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor='#032734'
      barStyle='light-content'
      />
      <Logo />
      <Header />
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
      onPress={() => this.props.navigation.navigate('Other')}
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
  Other: Other,
},
{
  initialRouteName: 'Home',
}
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#85c1d7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#064257',
    width: 200,
    paddingVertical: 13,
    backgroundColor: '#9dcddf',
    marginBottom: 20,
  },
  buttonText: {
    color: '#064257',
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
