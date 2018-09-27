import React, {Component} from 'react';
import {Platform, StyleSheet, AsyncStorage} from 'react-native';
import styles from '../styles/styles';
const userId = '8ba790f3-5acd-4a08-bc6a-97a36c124f29';
import Constants from '../constants/Constants';
export default class Service {
  
  constructor(){
    constants = new Constants();
  }


saveUserData = async (key, value) => {
  //console.log(key ,value);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

getUserData = async (key) => {
  
    var data = await AsyncStorage.getItem(key) || 'none';
    // console.log("check data ")
  
  return data;
}


validateEmail = (email) => {
  // console.log(email);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
   
    return (true)
  }
    
    return (false)
};

login = (mobile, password) => 
{
  var data = {
    email: mobile,
    password: password,
   }
 return  fetch(constants.apiUrl + '/user/signin',
    {
      method: "POST",
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      },
     body: JSON.stringify(data)
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

 
  
  
}