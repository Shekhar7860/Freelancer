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
      userType : ""
     }
  }

  componentDidMount ()   {
    service.getUserData('user').then((keyValue) => {
      console.log("local", keyValue);
      var parsedData = JSON.parse(keyValue);
      console.log("json", parsedData);
      if(parsedData.usertype == 1)
      {
      this.setState({ userType: "Client"});
      }
      else
      {
      this.setState({ userType: "Freelancer"}); 
      }
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

     goBack = () =>{
        this.props.navigation.pop()
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
			<Text style={styles.backButton} onPress={() => this.goBack()}>
			<Image source={constants.backicon} style={styles.icon}/>
			</Text>
         <Text style={styles.toolbarTitle}>Profile</Text>
         <TouchableOpacity onPress={() => this.goToUpdateProfile()}>
        <Image source={constants.editIcon} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
      {NewImage}
      </View>
      <View style={{padding:10}}>
      <Text >
           Name
      </Text>
      <View  style={styles.categoryTextProfile}>
          <Text style={styles.dateTextColorProfile} onPress={() => this.openCategory()}>
         {this.state.userResponse.username}
          </Text>
       </View>
          </View>
          <View style={{padding:10}}>
          <Text >
              Email
          </Text>
          <View style={styles.categoryTextProfile}>
                  <Text style={styles.dateTextColorProfile} onPress={() => this.openCategory()}>
                  {this.state.userResponse.email}
                  </Text>
              </View>
            </View>
          <View style={{padding:10}}>
            <Text >
                About Me
            </Text>
            <View  style={styles.categoryTextProfile}>
                  <Text style={styles.dateTextColorProfile} onPress={() => this.openCategory()}>
                  {this.state.userResponse.short_bio}
                  </Text>
              </View>
          </View>
          <View style={{padding:10}}>
            <Text >
             User Type
            </Text>
             <View  style={styles.categoryTextProfile}>
                  <Text style={styles.dateTextColorProfile} onPress={() => this.openCategory()}>
                  Client
                  </Text>
              </View>
          </View>
          <View style={{padding:10}}>
              <Text >
                  Category
              </Text>
              <View  style={styles.categoryTextProfile}>
                  <Text style={styles.dateTextColorProfile} onPress={() => this.openCategory()}>
                  Developer
                  </Text>
              </View>
          </View>
      
	    
       </SafeAreaView>
	   
    );
  }
}

