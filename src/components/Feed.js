import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, FlatList, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import Constants from '../constants/Constants';
import Service from '../services/Service';
const soundImg = require('../images/heart.png');
const muteImg = require('../images/heartfilled.png');
export default class FEED extends Component {
 constructor(props){
     super(props);
      service = new Service();
      constants = new Constants();
      this.state = {
        userResponse: {},
        feeds : {user:{ Job: [] }},
        heartIcon : constants.heartIcon,
        showSoundImg: true
      };
   
 }
 
 pressIcon = (val) => {
   console.log(val)
 }
 componentDidMount ()   {
  service.getUserData('user').then((keyValue) => {
    console.log("local", keyValue);
    var parsedData = JSON.parse(keyValue);
    console.log("json", parsedData);
    this.setState({ userResponse: parsedData});
     this.getFeedRes();
 }, (error) => {
    console.log(error) //Display error
  });
 }

 addToFavourites = () => {
 console.log("heartfilled" + constants.paymentIcon)
  if(this.state.icon === constants.heartIcon)
  {
  this.setState ({  heartIcon: constants.heartIconfilled});
  }
  else 
  {
    this.setState ({  heartIcon: constants.heartIcon});
  }
 }

 getFeedRes = () => {
  service.getFeedList(this.state.userResponse.api_token).then((res) => {
    console.log("checkres", res);
    newres = JSON.stringify(res);
    json = JSON.parse(newres);
    this.setState({ feeds: json});
  })
 }

 
 openDrawer = () => {
   this.props.navigation.openDrawer()}

  searchPage = () =>{
    alert("searching Page")   
        }

  render() {
    var imgSource = this.state.showSoundImg? soundImg : muteImg;
  
    return (
      
     <SafeAreaView style={styles.Listcontainer}
     >
      <FlatList
        data={this.state.feeds.user.Job}
        keyExtractor={ (item) => item.id.toString() }
        renderItem={({ item }) => (
           <View  style={styles.spaceFromTop}>
              <View style={styles.listCard}>
              <View style={styles.textInRow}> 
              <Text style={styles.textWrap}> {item.title} 
              </Text>
              </View>
              <View style={styles.textInRow}> 
                <View >
                    <Text style={styles.priceText}>Fixed Price</Text>
                  </View>
                  <View style={styles.contPadding}>
                     <Text >-</Text>
                  </View>
                  <View >
                     <Text style={styles.date}>{item.start_date} </Text>
                  </View>
              </View>
              <View style={styles.paddingAbove}>
                  <View style={styles.textInRow2}> 
                    <View style={styles.skillWidth}>
                        <Text style={styles.skillText}>Skill Level</Text>
                      </View>
                      <View style={styles.budgetWidth}>
                        <Text style={styles.skillText}>{item.budget}</Text>
                      </View>
                      <View style={styles.leftSpace}>
                        <Text style={styles.date}></Text>
                      </View>
                  </View>
              </View>
              <View style={styles.paddingAbove}>
                  <View style={styles.textInRow2}> 
                    <View style={styles.skillWidth}>
                        <Text style={styles.skillText}>Expert</Text>
                      </View>
                      <View style={styles.budgetWidth}>
                        <Text style={styles.skillText}>1000</Text>
                      </View>
                      <View style={styles.leftSpace}>
                        <TouchableOpacity   onPress={() => this.pressIcon(item)}>
                        <Image source={ imgSource } style={styles.icon}/>
                        </TouchableOpacity>
                      </View>
                  </View>
              </View>
              </View>
              
          </View>
        )}
      />
 </SafeAreaView>
      
     
    );
  }
}
