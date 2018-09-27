import React, {Component} from 'react';
import {Platform, SafeAreaView, Text, TextInput, Image, ToastAndroid, TouchableNativeFeedback, ImageBackground, TouchableOpacity, StatusBar, ScrollView, View} from 'react-native';
import styles from '../styles/styles';
import Service from '../services/Service';
import Constants from '../constants/Constants';
import CustomToast from './CustomToast';
import Loader from './Loader';


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      mobile:'',
      password:'',
      emailError:'',
      passwordError:'',
      emailFormatError:'',
      mobileLength:'',
      loading: false
    }
    service = new Service();
    constants = new Constants();
   
  }


    componentDidMount = () => {}
   
  
 

   
      goToSignUp = () =>{
       this.props.navigation.navigate('SignUp')
      }
      
      goToForgot = () =>{
       this.props.navigation.navigate('Forgot')
      }
 
      goToHome = () =>{
        service.saveUserData('user', "");
        this.props.navigation.navigate('Home')
      }
      GetValueFunction = (ValueHolder) =>{
        var Value = ValueHolder.length.toString() ;
        this.setState({ mobile:ValueHolder})
        this.setState({ mobileLength:Value})
       }
      login = () =>{
       
    if(this.state.mobile.trim() === "" && this.state.password.trim() === "")
    {
      this.refs.defaultToastBottom.ShowToastFunction('Please Enter Mobile And Password');
    }
    else
    {
        if (this.state.mobile.trim() === "") 
        {
          this.refs.defaultToastBottom.ShowToastFunction('Please Enter Mobile');
        } 
        else if (this.state.password.trim() === "") {
          this.refs.defaultToastBottom.ShowToastFunction('Please Enter Password');
        } 
        else if (this.state.mobileLength != 10) {
          this.refs.defaultToastBottom.ShowToastFunction('Please enter Valid Mobile Number');
        } 
        else{
          this.setState ({ loading: true});
          setTimeout(() => 
          {this.setState({loading: false})
         this.props.navigation.navigate('Home')
           }, 3000)
        }
        
     }
        
        
          
      //  this.refs.defaultToastBottom.ShowToastFunction('Login SuccessFull');
      
      
       }
      
      state = {
      value: '',
   };

  handleTextChange = (newText) => this.setState({ value: newText });


  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.imgContainer}>
         <TouchableOpacity onPress={() => this.goToSignUp()}>
         <Image source={constants.backicon} style={styles.icon}/>
         </TouchableOpacity>
         </View>
         <View style={styles.welcomeHeadlineSignUp}>
         <Text style={styles.headlineText}>Freelancer</Text>
         </View>
      </View>
      <View style={styles.lowerContainer}>
      <View style={styles.centerAlignLogIn}>
         <View style={styles.cardContainerSignUp}>
            <Text style={styles.signUpText}>Sign In</Text>   
             <View style={styles.loginInputsSpace}>
                <View style={styles.topSpace}>
                <View style={styles.rowAlign}>
                <Image source={constants.phoneIcon} style={styles.inputIcon}/>
                <TextInput style={styles.textInputWidth} placeholder="Mobile Number" value={this.state.mobile} onChangeText={(text)=>
             this.GetValueFunction(text)}  keyboardType='numeric' maxLength={10}></TextInput>
                </View>
                </View>
                <View style={styles.topSpace}>
                <View style={styles.rowAlign}>
                <Image source={constants.passwordIcon} style={styles.inputIcon}/>
                <TextInput style={styles.textInputWidth} placeholder="Password" secureTextEntry={true} value={this.state.password} onChangeText={(text)=>this.setState({ password:text})}></TextInput>
                </View>
                </View>
            </View>
            </View>
            <View style={styles.loginContainer} >
            <TouchableOpacity style={styles.buttonWidth} onPress={() => this.login()}>
             <Text style={styles.signUpButton} >Log In</Text>
             </TouchableOpacity>
             </View>
             <Text  style={styles.forgotText} onPress={() => this.goToForgot()}>Forgot Password</Text>
       </View>
      </View>
      <CustomToast ref = "defaultToastBottom"/>
        <Loader
          loading={this.state.loading} />
     </SafeAreaView>
    
        
    
     
    );
  }
}

