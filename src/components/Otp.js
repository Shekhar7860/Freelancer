import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, SafeAreaView, KeyboardAvoidingView , ImageBackground,  TouchableOpacity, StatusBar, ScrollView} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import { withNavigation } from "react-navigation";
import Loader from './Loader';
import {colors, fonts, padding, dimensions, align} from '../styles/base.js';
import CustomToast from './CustomToast';
 class  Otp extends Component {
  constructor(props){
    super(props);
    service = new Service();
    constants = new Constants();
    this.state = { 
      mobile:'9646407363',    
      emailError:'',
      emailFormatError:'',
      mobileLength:'',
      loading:false,
      first:'',
      second:'',
      third:'',
      fourth:''
    }
  }

  componentDidMount()
   {
    if(this.props.navigation.state.params)
    {
        this.setState ({ mobile: this.props.navigation.state.params.mobile});
    }
  }
 
  submit = () => 
  {
    if(this.state.mobile.trim() === "")
    {
      this.refs.defaultToastBottom.ShowToastFunction('Please Enter Mobile');
    }
    else if (this.state.mobileLength != 10) {
      this.refs.defaultToastBottom.ShowToastFunction('Please enter Valid Mobile Number');
     }  
   else 
     {
        this.setState ({ loading: true});
        setTimeout(() => 
        {this.setState({loading: false})
        this.refs.defaultToastBottom.ShowToastFunction('Email Sent Successfully');
        this.openLogin();
        }, 3000)
        }
    }
 
    submitAction  = () =>
    {
;
 // alert(String_34);
    }


    goBack = () =>{
    this.props.navigation.pop()
    }

    openLogin()
    {
      setTimeout(() => {
      this.props.navigation.navigate('Login')
      }, 1000)
    }

    GetFourthValue = (value) =>
     {
        var String_3 = this.state.first.concat(this.state.second);
        var String_4 = this.state.third.concat(value);
        var String_34 = String_3.concat(String_4);
        service.verifyOtp(this.state.mobile, String_34).then((res) => {
           // console.log(res);
            if(res.status_code)
            {
              if(res.status == "success")
              {
              this.goToHome();
              }
              else
              {
                this.refs.defaultToastBottom.ShowToastFunction(res.message);
              }
             // this.openLogin(this.state.mobile);
            }
            else
            {
              this.refs.defaultToastBottom.ShowToastFunction("Network Error"); 
            }
          })
       }

    GetValueFunction = (ValueHolder) =>{
      var Value = ValueHolder.length.toString() ;
      this.setState({ mobile:ValueHolder})
      this.setState({ mobileLength:Value})
     }

   goToHome = () => {
    this.props.navigation.navigate('Profile')
   }

   resendOtp()
   {
    this.setState ({ loading: true});
    setTimeout(() => 
    {
    this.setState({loading: false})
    this.refs.defaultToastBottom.ShowToastFunction('Otp Sent Successfully');
    }, 3000)
    
   }

 
   
  render() {
    return (
     
      <SafeAreaView style={{flex:1, alignItems:'center'}}>
      <View style={{backgroundColor: colors.themeColor,width: dimensions.fullWidth ,height: dimensions.fullHeight/2,flexDirection: 'column',alignItems: 'flex-start'}}>
<TouchableOpacity activeOpacity={0.5} onPress={this.backAction}>
<View style = {{top:10,left:0, width: 60,height: 60,alignItems: 'center',backgroundColor: colors.themeColor,justifyContent:'center'}}>
<Image style = {{ left:-10,width: 12,height: 15,alignItems: 'center'}}
source = {constants.backIcon}/></View></TouchableOpacity>

<View style = {{top:30,backgroundColor:colors.themeColor,width: dimensions.fullWidth,height:dimensions.fullHeight/2 - 80,alignItems:'center',}}><Text style = {{fontSize:25,fontWeight:'400' , top:15, color:colors.white}} >VERIFICATION CODE</Text>
<Text style = {{fontSize:16,fontWeight:'200' , top:30, color:colors.white}}>Enter the four digit code sent to you at</Text>

<Text style = {{fontSize:16,fontWeight:'200' , top:40, color:colors.white}}> + 91 - {this.state.mobile}</Text>

<KeyboardAvoidingView behavior = 'padding'
><View style = {{top:50,backgroundColor:'white',width:240,height:70,flexDirection:'row', marginTop:20}}>

<TextInput placeholder = ""
textAlign={'center'}
onChangeText={first => {this.setState({first}), this.secondTextInput.focus()}}
placeholderTextColor = 'black'
autoCapitalize = 'none'
returnKeyType = "next"
maxLength={1}
keyboardType = 'number-pad'
autoFocus={true}
style = {styles.input} />

<TextInput placeholder = ""
textAlign={'center'}
onChangeText={second => {this.setState({second}), this.thirdTextInput.focus()}}
placeholderTextColor = 'black'
autoCapitalize = 'none'
returnKeyType = "next"
keyboardType = 'number-pad'
maxLength={1}
ref={(input) => { this.secondTextInput = input; }}
style = {styles.input} />

<TextInput placeholder = ""
textAlign={'center'}
onChangeText={third => {this.setState({third}),this.fourthTextInput.focus()}}
placeholderTextColor = 'black'
autoCapitalize = 'none'
maxLength={1}
returnKeyType = "next"
keyboardType = 'number-pad'
ref={(input) => { this.thirdTextInput = input; }}
style = {styles.input}/>


<TextInput placeholder = ""
textAlign={'center'}
onChangeText={(text)=>
    this.GetFourthValue(text)}
placeholderTextColor = 'black'
autoCapitalize = 'none'
returnKeyType = "next"
keyboardType = 'number-pad'
maxLength={1}
ref={(input) => { this.fourthTextInput = input; }}
style = {styles.input} />

</View>
<CustomToast style={{marginTop:'30'}} ref = "defaultToastBottom"/> 

</KeyboardAvoidingView>


 

</View>

<Loader
  loading={this.state.loading} />
</View>
<TouchableOpacity style={styles.otpButton} onPress={() => this.resendOtp()}>
	  <Text style={styles.accountButtonText}>Resend Otp</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.lookingButtonBackground} onPress={() => this.goBack()}>
	  <Text style={styles.accountButtonText}>Change Number </Text>
  </TouchableOpacity>
</SafeAreaView>
     
     
    );
}
}
export default withNavigation(Otp);


