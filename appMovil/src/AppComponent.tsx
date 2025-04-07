import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigation';

export default class AppComponent extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    )
  }
}