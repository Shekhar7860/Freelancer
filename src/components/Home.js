import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import Tabs from './Tabs';
import Details from './Details';
import Loader from './Loader';

export default class Home extends Component {
 constructor(props){
     super(props);
     service = new Service();
     constants = new Constants();
     this.state = {
        loading:false
      };
   
 }
 componentDidMount() {
  
 }
 openDrawer = () => {
   this.props.navigation.openDrawer()}

   goToNotification = () => {
    this.props.navigation.navigate('Notifications')}

  searchPage = () =>{
    alert("searching Page")   
        }

  render() {
   
    return (
        
     <SafeAreaView
      source={constants.loginbg}
      style={styles.container}>
     <Tabs style={styles.tabsPosition}/>
     <Loader
              loading={this.state.loading} />
 </SafeAreaView>
      
     
    );
  }
}
