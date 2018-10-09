import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView, SafeAreaView,Image, ImageBackground, ActivityIndicator, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Loader from './Loader';
import HTMLView from 'react-native-htmlview';
export default class Details extends Component {
  constructor(props){
    super(props);
    constants = new Constants();
    this.state = { 
        details : {},
        loading:false
      }
  }

 componentDidMount() {
    this.setState ({ loading: true});
    setTimeout(() => {
      this.setState ({ loading: false});
      if(this.props.navigation.state.params)
    {
    this.setState({ details: this.props.navigation.state.params.details})
     }    
      }, 1000)
    
  }

  goBack = () =>{
    this.props.navigation.pop()
   }
  
  render() {
      console.log(this.state.details)
    return (
  <SafeAreaView>
  <ScrollView>
        <View style={styles.commontoolbar}>
          <TouchableOpacity style={styles.commontoolbarButton} onPress={() => this.goBack()}>
          <Image source={constants.backicon} style={styles.commonBackIcon}/>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>Job Details</Text>
          <Text style={styles.commontoolbarButton}></Text>
        </View>
	     <View style={styles.detailsContainer}>
	       <Text style={styles.jobTitle}>{this.state.details.title}</Text>
           <View style={styles.textInRowJob}>
               <Text>Required Connects</Text>
               <Text>-</Text>
               <Text>2 (60 available)</Text>
           </View>
           <View style={styles.space}>
                <View style={styles.textInRow2}> 
                        <View style={styles.skillWidth}>
                        <Image source={constants.clockIcon} style={styles.icon}/>
                            </View>
                            <View style={styles.budgetWidth}>
                            </View>
                            <View style={styles.leftSpace}>
                            <Image source={constants.clockIcon} style={styles.icon}/>
                            </View>
                    </View>
                    <View style={styles.textInRow2}> 
                        <View style={styles.skillWidth}>
                        <Text style={styles.jobTitle}>Hourly</Text>
                            </View>
                            <View style={styles.budgetWidth}>
                            </View>
                            <View style={styles.leftSpace}>
                            <Text style={styles.jobTitle}>Expert</Text>
                            </View>
                    </View>
                    <View style={styles.textInRow2}> 
                        <View style={styles.skillWidth}>
                        <Text style={styles.jobTitle}>More than 6 months</Text>
                         </View>
                            <View style={styles.budgetWidth}>
                            </View>
                            <View style={styles.leftSpace}>
                            <Text style={styles.jobTitle}>Skill Level</Text>
                            </View>
                    </View>
                    <View style={styles.space}>
                    <Text style={styles.jobTitle}>Details</Text>
                    <HTMLView value={this.state.details.description} style={styles.jobTitle}/>
                    </View>
            </View>
	     </View>
         <Loader
              loading={this.state.loading} /> 
     </ScrollView>    
   </SafeAreaView>
	   
    );
  }
}

