import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView,Image, TextInput, ImageBackground, ActivityIndicator, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';

export default class Profile extends Component {
  
  constructor(props){
    super(props);
    service = new Service();
    constants = new Constants();
    this.state = { 
      userResponse: {},
     }
  }

  componentDidMount ()   {
    service.getUserData('user').then((keyValue) => {
      console.log("local", keyValue);
      var parsedData = JSON.parse(keyValue);
      console.log("json", parsedData);
      this.setState({ userResponse: parsedData});
   }, (error) => {
      console.log(error) //Display error
    });
   }

  // going to next screen
  goToLogin = () =>{
   this.props.navigation.navigate('Login')
  }
  goToSignUp = (userType) =>{
  this.props.navigation.navigate('SignUp', { type: userType })
      }
 goToHome = () => {
	this.props.navigation.navigate('HomePage')
 }
 goToUpdateProfile = () =>
 {
  this.props.navigation.navigate('UpdateProfile')
 }


  render() {
    const  NewImage =   <Image source={constants.defaultImage} style={styles.profilePic}/>
    // const fbImage = <Image source={{uri: this.state.userFbData.picture_large.data.url}} style={styles.profilePic} />;
    return (
  <SafeAreaView>
	    <View style={styles.toolbar}>
			<Text style={styles.backButton} onPress={() => this.goToHome()}>
			<Image source={constants.backicon} style={styles.icon}/>
			</Text>
         <Text style={styles.toolbarTitle}>Profile</Text>
         <TouchableOpacity onPress={() => this.goToUpdateProfile()}>
        <Image source={constants.editIcon} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
      {NewImage}
         <View style={styles.containerBorder}>
          <View style={styles.textItemsContainer}>
            <View style={styles.nameContainer}>
            <Text>UserName</Text>
            </View>
            <View style={styles.boxContainer}>
            <TextInput  placeholder = "Name"></TextInput>
            </View>
         </View>
         </View>
         <View style={styles.containerBorder}>
          <View style={styles.textItemsContainer}>
            <View style={styles.nameContainer}>
            <Text>Email</Text>
            </View>
            <View style={styles.boxContainer}>
            <TextInput  placeholder = "Email"></TextInput>
            </View>
         </View>
         </View>
         <View style={styles.containerBorder}>
          <View style={styles.textItemsContainer}>
            <View style={styles.nameContainer}>
            <Text>About Me</Text>
            </View>
            <View style={styles.boxContainer}>
            <TextInput  placeholder = "About me"></TextInput>
            </View>
         </View>
         </View>
         <View style={styles.containerBorder}>
          <View style={styles.textItemsContainer}>
            <View style={styles.nameContainer}>
            <Text>User Type</Text>
            </View>
            <View style={styles.boxContainer}>
            <TextInput  placeholder = " User Type"></TextInput>
            </View>
         </View>
         </View>
      </View>
      
	    
       </SafeAreaView>
	   
    );
  }
}

