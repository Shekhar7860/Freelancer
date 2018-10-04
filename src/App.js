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
import Otp from './components/Otp';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Payment from './components/Payment';
import Projects from './components/Projects';
import Account from './components/Account';
import Settings from './components/Settings';
import About from './components/About';
import Feedback from './components/Feedback';
import Notifications from './components/Notifications';
import FindFreelancer from './components/FindFreelancer';
export const Menu = DrawerNavigator({
  HomePage: { screen: Home},
  Messages: { screen: Messages},
  Payment: { screen: Payment},
  Projects: { screen: Projects},
  Account: { screen: Account},
  Settings: { screen: Settings},
  About: { screen: About},
  Feedback: { screen: Feedback},
  Notifications: { screen: Notifications},
  FindFreelancer : {screen : FindFreelancer}
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

// routing 
const AppNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome},
    Select: { screen: SelectAccount },
    Login: { screen: MobileSignin },
    SignUp: { screen: SignUp},
    Forgot: { screen: ForgotPassword },
    Home: { screen: Menu },
    Otp : { screen: Otp},
    Profile : { screen: Profile}
   
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


