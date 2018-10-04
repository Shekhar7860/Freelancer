import React, {Component} from 'react';
import {Platform, StyleSheet,FlatList, SafeAreaView, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import Constants from '../constants/Constants';
import Service from '../services/Service';

export default class FindFreelancer extends Component {
 constructor(props){
     super(props);
     service = new Service();
     constants = new Constants();
     this.state = {
        userData: { picture_large:{ data:{}}},
        userResponse: {}, 
        freelancers : {},
        failed: false
      };
   
 }
 _onError = () => {
  this.setState({ failed: true });
}
 componentDidMount ()   {
    service.getUserData('user').then((keyValue) => {
      console.log("local", keyValue);
      var parsedData = JSON.parse(keyValue);
      console.log("json", parsedData);
      this.setState({ userResponse: parsedData});
       this.getFreelancersResponse();
   }, (error) => {
      console.log(error) //Display error
    });
   }

 openDrawer = () => {
   this.props.navigation.openDrawer()}

   getFreelancersResponse = () => {
    service.findFreelancer(this.state.userResponse.api_token).then((res) => {
      console.log("checkres", res);
      newres = JSON.stringify(res);
      json = JSON.parse(newres);
      this.setState({ freelancers: json});
    })
   }

  searchPage = () =>{
    alert("searching Page")   
        }

  
  render() {
    const defaultImg =
    'https://satishrao.in/wp-content/uploads/2016/06/dummy-profile-pic-male.jpg'

    console.log(this.state.freelancers.freelancer)
    
    return (
        
     <SafeAreaView
      source={constants.loginbg}
      style={styles.container}>
    <View style={styles.toolbar} >
        <TouchableOpacity onPress={() => this.openDrawer()}>
        <Image source={constants.menuicon} style={styles.hamburgerIcon} />
        </TouchableOpacity>
         <Text style={styles.toolbarTitle}>Find Freelancer</Text>
         <TouchableOpacity onPress={() => this.searchPage()}>
        <Image source={constants.searchicon} style={styles.searchIcon} />
        </TouchableOpacity>
     </View>
     <View style={styles.homeContent}>
     <FlatList
        data={this.state.freelancers.freelancer}
        renderItem={({ item }) => (
           <View  style={styles.spaceFromTop}>
              <View style={styles.listCardFreelancer}>
              <View style={styles.textInRow}> 
                 <View >
                 <Image source={{ uri: item.image_path || defaultImg  }}    style={styles.freelancerprofilePic} />
                  </View>
                  <View style={styles.contPadding}>
                     <Text >-</Text>
                  </View>
                  <View >
                     <Text style={styles.email}>{item.email} </Text>
                  </View>
              </View>
              </View>
          </View>
         )}
         />
     </View>
 </SafeAreaView>
      
     
    );
  }
}
