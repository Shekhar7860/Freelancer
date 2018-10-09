import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TextInput, 
  TouchableOpacity
} from "react-native";
import Constants from "../constants/Constants";
import Service from "../services/Service";
import styles from "../styles/styles";
import MyView from './MyView';
import Loader from './Loader';
export default class Jobs extends Component {
  constructor(props) {
    super(props);
    service = new Service();
    constants = new Constants();
    this.state = {
      userResponse: {},
      jobs: [],
      failed: false,
      search : true,
      loading:false,
      dummyText : ""
    };
    _onError = () => {
      this.setState({ failed: true });
    };
  }

  findFreelancer = () => {

  }

  componentDidMount() {
    this.setState ({ loading: true});
  setTimeout(() => {
    this.setState ({ loading: false});
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
  
    }, 2000)
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  getFreelancersResponse = () => {
    service.jobs(this.state.userResponse.api_token).then(res => {
      console.log("reslocal", res);
      if(res.Job == [])
      {
        this.setState ({ dummyText: "No Project Found"});
      }
      this.setState({ jobs: res.Job});
    });
  };

  searchPage = () =>{
  this.setState({ search: false});
    }
  
    hideSearch = () =>{
      this.setState({ search: true});
    }


  goToPostproject = () => {
    this.props.navigation.navigate("PostProject");
  };

  openDetails = (val) => {
    console.log(this.props);
   this.props.navigation.navigate('JobDetails',  { details: val }) 
  }

  render() {
    return (
      <SafeAreaView source={constants.loginbg} style={styles.container}>
        <View style={styles.topView}>
      <MyView  hide={this.state.search} style={styles.searchContainer}>
      <View style={styles.topSearchbar}>
          <Image source={constants.searchicon} style={styles.newsearchIcon} />
          <View style={styles.empty}>
          </View>
         <TextInput placeholder="Search job"  placeholderTextColor="white" style={styles.topInput}/>
        <Text style={styles.closeButtton} onPress={() => this.hideSearch()}>X</Text>
      </View>
      </MyView>
        <MyView style={styles.tabsToolbar} hide={!this.state.search}>
        <TouchableOpacity onPress={() => this.openDrawer()}>
        <Image source={constants.menuicon} style={styles.hamburgerIcon} />
        </TouchableOpacity>
         <Text style={styles.toolbarTitle}>Projects</Text>
         <TouchableOpacity onPress={() => this.goToNotification()}>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => this.searchPage()}>
         <Image source={constants.searchicon} style={styles.searchIcon} />
        </TouchableOpacity>
        </MyView>
       
       </View>
        <View style={styles.listCenter}>
        <Text style = {styles.defaultTextSize}>{this.state.dummyText}</Text>
        <FlatList
              data={this.state.jobs}
              keyExtractor={(item, index) => index}
              style={styles.listCardWidth}
              extraData={this.state.jobs}
              renderItem={({ item, index }) => (
                <View  style={styles.spaceFromTop}>
                    <TouchableOpacity style={styles.listCard} onPress={() => this.openDetails(item)}>
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
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                </View>
              )}
            />
       </View>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.goToPostproject()}
            style={styles.TouchableOpacityStyle}
          >
            <Image
              source={{
                uri:
                  "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png"
              }}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
        <Loader
              loading={this.state.loading} />
      </SafeAreaView>
    );
  }
}
