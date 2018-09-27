import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView,Image, ImageBackground, ActivityIndicator, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';

export default class SelectAccount extends Component {
  
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
    return (
  <SafeAreaView>
	    <View style={styles.toolbar}>
			<Text style={styles.backButton} onPress={() => this.goToWelcome()}>
			<Image source={constants.backicon} style={styles.icon}/>
			</Text>
      </View>
	     <View style={styles.accountHeadline}>
	       <Text style={styles.accountHeadlineText}>Select Account Type</Text>
		   <TouchableOpacity style={styles.hireButtonBackground} onPress={() => this.goToSignUp('client')}>
		     <Text style={styles.accountButtonText}>I Want To Hire Freelancers</Text>
		   </TouchableOpacity>
		    <TouchableOpacity style={styles.lookingButtonBackground} onPress={() => this.goToSignUp('freelancer')}>
		     <Text style={styles.accountButtonText}>I Am Looking To Work </Text>
		   </TouchableOpacity>
		    <Text style={styles.selectAccountText}>Already have an account? <Text onPress={() => this.goToLogin()}>Login</Text></Text>
	     </View>
	   
       </SafeAreaView>
	   
    );
  }
}

