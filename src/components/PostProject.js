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
       loading: false,
       country:'',
       jobType:'',
       budget:'',
       skills:'', 
       startDate :'',
       endDate :''
      }
  }

  componentDidMount() {
      service.getUserData("user").then(
        keyValue => {
          console.log("local", keyValue);
          var parsedData = JSON.parse(keyValue);
          console.log("json", parsedData);
          this.setState({ userResponse: parsedData });
          this.getFreelancersResponse();
        },
        error => {
          console.log(error); //Display error
        }
      );
      
    }
  

  goToproject = () => {
    this.props.navigation.navigate("Projects");
  };

  goBack = () =>{
    this.props.navigation.navigate('Jobs');
   }


  post_project = () => {
    this.setState ({ loading: true});
    setTimeout(() => 
    {
    this.setState({loading: false})
    service.post_project(this.state.userResponse.api_token,this.state.title,this.state.description, this.state.country, this.state.jobType, this.state.budget,this.state.startDate, this.state.endDate, this.state.skills).then((res) => {
      console.log(res)
      if(res)
      {
        if(res.status == "success")
        {
          this.refs.defaultToastBottom.ShowToastFunction('Project Posted Successfully');
         // this.goToproject();
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
            <Text style={styles.toolbarTitle}>Post a project</Text>
          </View>
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Tittle"
            onChangeText={(text)=>this.setState({ title:text})}
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Description"
            onChangeText={(text)=>this.setState({ description:text})}
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Country"
            onChangeText={(text)=>this.setState({ country:text})}
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Job Type"
            onChangeText={(text)=>this.setState({ jobType:text})}
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Budget"
            onChangeText={(text)=>this.setState({ budget:text})}
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <TextInput
                style={styles.postprojectinput}
                underlineColorAndroid="transparent"
                placeholder="Start Date"
                onChangeText={(text)=>this.setState({ startDate:text})}
                placeholderTextColor="#AEA9A8"
                autoCapitalize="none"
              />
            </View>
            <View style={{ width: "50%" }}>
              <TextInput
                style={styles.postprojectinput}
                underlineColorAndroid="transparent"
                placeholder="End Date"
                placeholderTextColor="#AEA9A8"
                onChangeText={(text)=>this.setState({ endDate:text})}
                autoCapitalize="none"
              />
            </View>
          </View>
          <TextInput
            style={styles.postprojectinput}
            underlineColorAndroid="transparent"
            placeholder="Add Skills"
            onChangeText={(text)=>this.setState({ skills:text})}
            placeholderTextColor="#AEA9A8"
            autoCapitalize="none"
          />
      <TouchableOpacity style={ styles.bottomView} onPress={() => this.post_project()}>
         <Text style={styles.textStyle}>Submit Job</Text>
      </TouchableOpacity>
      <Loader
          loading={this.state.loading} />
       <CustomToast ref = "defaultToastBottom"/>    
   </SafeAreaView>
    );
  }
}
