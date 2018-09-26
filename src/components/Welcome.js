import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

export default class Welcome extends Component {
  
  componentDidMount() {
  //  this.goToLoginScreen()    
  }

  // going to next screen
  goToLogin = () =>{
   this.props.navigation.navigate('Login')
  }
  goToSelect = () =>{
       this.props.navigation.navigate('Select')
      }
  
  render() {
    return (
       <View style={styles.welcomeContainer}>
	     <View style={styles.welcomeHeadline}>
	       <Text style={styles.headlineText}>Freelancer</Text>
		   <TouchableOpacity style={styles.buttonBackground} onPress={() => this.goToSelect()}>
		     <Text style={styles.buttonText}>Create An Account</Text>
		   </TouchableOpacity>
		    <Text style={styles.accountText}>Already have an account? <Text onPress={() => this.goToLogin()}>Login</Text></Text>
	     </View>
	   </View>
	   
    );
  }
}

