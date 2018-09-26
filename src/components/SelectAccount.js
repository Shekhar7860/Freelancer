import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, ActivityIndicator, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
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
	  alert("working");
   this.props.navigation.navigate('Login')
  }
  goToSignUp = () =>{
       this.props.navigation.navigate('SignUp')
      }
 goToWelcome = () => {
	this.props.navigation.navigate('Welcome')
 }
  
  render() {
    return (
	<View>
	    <View style={styles.toolbar}>
			<Text style={styles.toolbarButton} onPress={() => this.goToWelcome()}>
			<Image source={constants.backicon} style={styles.icon}/>
			</Text>
      </View>
	     <View style={styles.accountHeadline}>
	       <Text style={styles.accountHeadlineText}>Select Account Type</Text>
		   <TouchableOpacity style={styles.hireButtonBackground} onPress={() => this.goToSignUp()}>
		     <Text style={styles.accountButtonText}>I Want To Hire Freelancers</Text>
		   </TouchableOpacity>
		    <TouchableOpacity style={styles.lookingButtonBackground} onPress={() => this.goToSignUp()}>
		     <Text style={styles.accountButtonText}>I Am Looking To Work </Text>
		   </TouchableOpacity>
		    <Text style={styles.selectAccountText}>Already have an account? <Text onPress={() => this.goToLogin()}>Login</Text></Text>
	     </View>
	   
	   </View>
	   
    );
  }
}

