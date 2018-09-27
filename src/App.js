/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SideMenu from './components/SideMenu';
import Welcome from './components/Welcome';
import SelectAccount from './components/SelectAccount';
import ForgotPassword from './components/ForgotPassword';
import MobileSignin from './components/MobileSignIn';

export const Menu = DrawerNavigator({
  HomePage: { screen: Home}
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

// routing 
const AppNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome},
    Select: { screen: SelectAccount },
    Login: { screen: Login },
    SignUp: { screen: SignUp},
    Forgot: { screen: ForgotPassword },
    Home: { screen: Menu }
   
  },
  { headerMode: 'none' }
);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  
  render() {
    return (
      
      <AppNavigator
    />
    );
  }
}


