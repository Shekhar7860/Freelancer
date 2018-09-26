import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableNativeFeedback} from 'react-native';
import Constants from '../constants/Constants';
import Service from '../services/Service';

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

  searchPage = () =>{
    alert("searching Page")   
        }

  render() {
   
    return (
        
      <View
      source={constants.loginbg}
      style={styles.container}>
    
    <View style={styles.toolbar} >
        <TouchableNativeFeedback onPress={() => this.openDrawer()}>
        <Image source={constants.menuicon} style={styles.hamburgerIcon} />
        </TouchableNativeFeedback>
         <Text style={styles.toolbarTitle}>Home</Text>
         <TouchableNativeFeedback onPress={() => this.searchPage()}>
        <Image source={constants.searchicon} style={styles.searchIcon} />
        </TouchableNativeFeedback>
     </View>
     <View style={styles.homeContent}>
         <View style={styles.messageBox}>
         <Image source={constants.cardimage} style={styles.cardImage}/>
         </View>
     </View>
 </View>
      
     
    );
  }
}
