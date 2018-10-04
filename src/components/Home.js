import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import Tabs from './Tabs';


export default class Home extends Component {
 constructor(props){
     super(props);
     service = new Service();
     constants = new Constants();
     this.state = {
        userData: { picture_large:{ data:{}}},
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
    
    <View style={styles.tabsToolbar} >
        <TouchableOpacity onPress={() => this.openDrawer()}>
        <Image source={constants.menuicon} style={styles.hamburgerIcon} />
        </TouchableOpacity>
         <Text style={styles.toolbarTitle}>Freelancer</Text>
         <TouchableOpacity onPress={() => this.goToNotification()}>
         <Image source={constants.notificationIcon} style={styles.searchIcon} />
        </TouchableOpacity>
         <TouchableOpacity onPress={() => this.searchPage()}>
         <Image source={constants.searchicon} style={styles.searchIcon} />
        </TouchableOpacity>
       
     </View>
    
     <Tabs style={styles.tabsPosition}/>
 </SafeAreaView>
      
     
    );
  }
}
