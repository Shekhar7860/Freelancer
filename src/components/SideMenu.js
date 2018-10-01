import React, {Component} from 'react';
import {ScrollView, SafeAreaView, Text, View, ImageBackground, Switch, Image, TouchableOpacity ,Alert} from 'react-native';
import Service from '../services/Service';
import Constants from '../constants/Constants';
import MyView from './MyView';

class SideMenu extends Component {
  constructor(props){
    super(props);
   // console.log('propvalue', props);
    service = new Service();
    constants = new Constants();
    this.state = {
       userFbData: { picture_large:{ data:{}}},
       userGoogleData:{},
       name:"",
       logOut: true,
       items : false,
       names: [
        {
           id: 0,
           name: 'Messages',
           icon:constants.messagesIcon
        },
        {
           id: 1,
           name: 'My Payment',
           icon:constants.paymentIcon
        },
        {
           id: 2,
           name: 'Find Freelancer',
           icon:constants.searchFreelancerIcon
        },
        {
           id: 3,
           name: 'My Projects',
           icon:constants.projectsIcon,
        },
        {
          id: 4,
          name: 'Account',
          icon:constants.accountIcon,
       }
     ]
     }; 
}

takePicture = () => {
  const options = {};
  this.camera.capture({ metadata: options })
  .then((data) => console.log(data))
  .catch(err => console.error(err));
}
logOut = () =>{
  Alert.alert(
    'Log Out',
    'Are you Sure? You want to Log Out', [{
        text: 'Cancel',
        style: 'cancel'
    },
    {
        text: 'OK',
        onPress: () => 
        this.exit()
    }, ], {
        cancelable: false
    }
 )
  
}

exit = () => {
  this.props.navigation.navigate('Login')
}
alertItemName = (item) => {
  alert("going to" + "" + item.name)
}

componentDidMount() {

  
 } 

 toggleItems = () =>
 {
 
  this.setState ({ logout: false});
  this.setState ({ items: true});
 
 }
 

  render () {
   // console.log("Fbdata",  this.state.userFbData, "GoogleData", this.state.userGoogleData)
  
   const  NewImage =   <Image source={constants.defaultImage} style={styles.profilePic}/>
   const fbImage = <Image source={{uri: this.state.userFbData.picture_large.data.url}} style={styles.profilePic} />;
   const GoogleImage = <Image source={{uri: this.state.userGoogleData.photo }} style={styles.profilePic} />;
   const fbName = <Text style={styles.userName}>{this.state.userFbData.name}</Text>
   const GoogleName = <Text style={styles.userName}>{this.state.userGoogleData.name}</Text>
   const DefaultName = <Text style={styles.defaultUserName}>Ankit</Text>
   const ProfileName = <Text style={styles.defaultUserName}>Client</Text>

      
     var userImage;
     var userName;
        if (this.state.name == "fb") {
              if(fbImage.props.source.uri !== null){
                userImage =  fbImage
              }
              else
              {
                userImage = NewImage
              }
              userName = fbName
        } 
        else if(this.state.name == "google")
         {
         
                if(GoogleImage.props.source.uri !== null){
                  userImage = GoogleImage
                }
                else
                {
                  userImage = NewImage
                }
                userName = GoogleName
        }
        else
        {
          userImage = NewImage
        }
      
      
    return (
     
      <SafeAreaView
      source={constants.loginbg}
      style={styles.container}>
          <View style={styles.upperContainerSideMenu}>
            <View style={styles.sideMenuAlign}>
          {NewImage}
            <View style={styles.rowAlignSideMenu}>
                  <View style={styles.name}>
                  {DefaultName}
                  </View>
                  <View style={styles.blank}>
                  </View>
                  <TouchableOpacity style={styles.arrowView} onPress = {() => this.toggleItems()}>
                  <Image source={constants.downIcon} style={styles.shareIcon}/>
                  </TouchableOpacity>
             </View>
             {ProfileName}
             </View>
          </View>
          <View style={styles.lowerContainerSideMenu}>
          <MyView style={styles.topMargin} hide={this.state.items}> 
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     onPress = {() => this.alertItemName(item)}>
                     
                     <View style={styles.list}>
                       <TouchableOpacity style={styles.listIconsWidth}>
                          <Image source={item.icon} style={styles.listIcon}/>
                        </TouchableOpacity>
                        <View style={styles.listItemsBlank}></View>
                        <View style={styles.listTextWidth}>
                           <Text style={styles.listTextFontSize}>{item.name}</Text>
                        </View>
                     </View>
                  </TouchableOpacity>
               ))
            }
         </MyView>
          

         <MyView hide={this.state.logOut}>
         <TouchableOpacity style={styles.listIconsWidth}>
                          <Image source={constants.logouticon} style={styles.listIcon}/>
          </TouchableOpacity>
           <View style={styles.listItemsBlank}></View>
          <View style={styles.listTextWidth}>
              <Text style={styles.listTextFontSize}>LogOut</Text>
          </View>
          </MyView>
          </View>
       

        <View style={styles.sideMenu}>
          {/* {userImage}
          {userName}
          <TouchableOpacity onPress = {() => this.takePicture()}>
                  <Image source={constants.cameraIcon} style={styles.cameraIcon}/>
          </TouchableOpacity>
            <View style={[styles.iconsAlign, styles.topPadding]}>
                <TouchableOpacity style={styles.viewWidth} >
                  <Image source={constants.shareIcon} style={styles.shareIcon}/>
                </TouchableOpacity>
                <View style={styles.viewWidthEmpty}></View>
                <TouchableOpacity style={styles.viewWidth}>
                  <Image source={constants.starIcon} style={styles.shareIcon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.iconsAlign}>
                <View style={styles.viewWidth}>
                  <Text style={[styles.white, styles.rightAlign]}>Share</Text>
                </View>
                <View style={styles.viewWidthEmpty}></View>
                <View style={styles.viewWidth}>
                <Text style={styles.white}>Reviews</Text>
                </View>
            </View>
            <View style={styles.topMargin}> 
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     onPress = {() => this.alertItemName(item)}>
                     
                     <View style={styles.list}>
                       <TouchableOpacity style={styles.listIconsWidth}>
                          <Image source={item.icon} style={styles.shareIcon}/>
                        </TouchableOpacity>
                        <View style={styles.listItemsBlank}></View>
                        <View style={styles.listTextWidth}>
                           <Text style={styles.listTextFontSize}>{item.name}</Text>
                        </View>
                     </View>
                  </TouchableOpacity>
               ))
            }
            <View style={styles.list}>
                       <TouchableOpacity style={styles.listIconsWidth2}>
                          <Image source={constants.notificationIcon} style={styles.shareIcon}/>
                        </TouchableOpacity>
                        <View style={styles.listItemsBlank}></View>
                        <View style={styles.listTextWidth2}>
                           <Text style={styles.listTextFontSize}>Notifications</Text>
                        </View>
                        <TouchableOpacity style={styles.listToggleIconsWidth2}>
                        <Switch style={styles.switch}
                        onValueChange={isSwitchOn => this.setState({isSwitchOn})}
                        value={this.state.isSwitchOn} 
                         />
                        </TouchableOpacity>
            </View>
         </View>
          
              <TouchableOpacity  style={styles.footer} onPress={() => this.logOut()}>
                   <View style={styles.list}>
                       <TouchableOpacity style={styles.listIconsWidth2}>
                          <Image source={constants.logoutIcon} style={styles.shareIcon}/>
                        </TouchableOpacity>
                        <View style={styles.listItemsBlank}></View>
                        <View style={styles.listTextWidth}>
                           <Text style={styles.listTextFontSize}>LOGOUT</Text>
                        </View>
                     </View>
              </TouchableOpacity > */}
        </View>
   </SafeAreaView>
     
     
    );
  }
}



export default SideMenu;