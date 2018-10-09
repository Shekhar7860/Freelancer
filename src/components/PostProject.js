import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

import Constants from '../constants/Constants';
import Service from '../services/Service';
import CustomToast from './CustomToast';
import Loader from './Loader';

export default class PostProject extends Component {
  constructor(props) {
    super(props);
    service = new Service();
    constants = new Constants();
    this.state = { 
       userResponse: {},
       title:'',
       description:'',
       loading: false
      }
  }

  goToproject = () => {
    this.props.navigation.navigate("Projects");
  };
  goBack = () =>{
    this.props.navigation.pop()
   }


  post_project = () => {
    this.setState ({ loading: true});
    setTimeout(() => 
    {
    this.setState({loading: false})
    service.post_project(this.state.userResponse.api_token,this.state.title,this.state.description).then((res) => {
      console.log(res)
      if(res)
      {
        if(res.status == "success")
        {
          this.refs.defaultToastBottom.ShowToastFunction('Post Successfully');
          this.goToproject();
        }
       
      }
      else
      {
        this.refs.defaultToastBottom.ShowToastFunction('Network error');
      }
    })
    }, 3000)
}

  render() {
    return (
    
      <SafeAreaView style = { styles.MainContainer }>
         <View style={styles.toolbar}>
            <Text style={styles.backButton} onPress={() => this.goBack()}>
              <Image source={constants.backicon} style={styles.icon} />
            </Text>
            <Text style={styles.toolbarTitle}>Post A Project</Text>
          </View>
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Tittle"
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Description"
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Country"
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Job Type"
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Budget"
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <TextInput
                style={styles.postprojectinput}
                underlineColorAndroid="transparent"
                placeholder="Start Time"
                placeholderTextColor="#AEA9A8"
                autoCapitalize="none"
              />
            </View>
            <View style={{ width: "50%" }}>
              <TextInput
                style={styles.postprojectinput}
                underlineColorAndroid="transparent"
                placeholder="End Time"
                placeholderTextColor="#AEA9A8"
                autoCapitalize="none"
              />
            </View>
          </View>
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Add Skills"
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
      <TouchableOpacity style={ styles.bottomView} >
         <Text style={styles.textStyle}>Submit Job</Text>
      </TouchableOpacity>
   </SafeAreaView>
    );
  }
}
