import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView,Image, TextInput, ImageBackground, ActivityIndicator, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';

export default class Profile extends Component {
  
  constructor(props){
    super(props);
    constants = new Constants();
  }
 componentDidMount() {
  //  this.goToLoginScreen()    
  }

  // going to next screen
  goToLogin = () =>{
   this.props.navigation.navigate('Login')
  }
  goToSignUp = (userType) =>{
  this.props.navigation.navigate('SignUp', { type: userType })
      }
 goToWelcome = () => {
	this.props.navigation.navigate('Welcome')
 }
  
  render() {
    const  NewImage =   <Image source={constants.defaultImage} style={styles.profilePic}/>
    // const fbImage = <Image source={{uri: this.state.userFbData.picture_large.data.url}} style={styles.profilePic} />;
    return (
  <SafeAreaView>
	    <View style={styles.toolbar}>
			<Text style={styles.backButton} onPress={() => this.goToWelcome()}>
			<Image source={constants.backicon} style={styles.icon}/>
			</Text>
         <Text style={styles.toolbarTitle}>Profile</Text>
         <TouchableOpacity onPress={() => this.searchPage()}>
        <Image source={constants.searchicon} style={styles.searchIcon} />
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

