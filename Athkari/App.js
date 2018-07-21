import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Button,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Header from './src/components/Header';
import Logo from './src/components/Logo';
// import Athkar from './src/components/Athkar';
// import Sabah from './src/components/AllAthkar/Sabah';
import Masaa from './src/components/AllAthkar/Masaa';

class HomeScreen extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor='#321911'
      barStyle='light-content'
      />
      <Header />
      <Logo />
      <Button
      title="Go to Masaa"
      onPress={() => this.props.navigation.navigate('Masaa')}
      />
      </View>
      );
  }
}

const RootStack = createStackNavigator(
{
  Home: HomeScreen,
  Masaa: Masaa
},
{
  initialRouteName: 'Home',
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7ccc8',
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
