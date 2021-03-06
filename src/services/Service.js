import React, {Component} from 'react';
import {Platform, StyleSheet, AsyncStorage} from 'react-native';
import styles from '../styles/styles';
const userId = '8ba790f3-5acd-4a08-bc6a-97a36c124f29';
import Constants from '../constants/Constants';
export default class Service {
  
  constructor(){
    this.state = { 
      user :''
    }
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
  return data;
}

clearLocalStorage = async () => {
  try {
  await AsyncStorage.clear();
  } catch (error) {
  }
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

loginOtp = (mobile) => 
{
  var data = {
    mobile: mobile
   }
 return  fetch(constants.apiUrl + '/user/send-otp',
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

resendOtp = (mobile) => 
{
  var data = {
    mobile: mobile
   }
   console.log(data);
 return  fetch(constants.apiUrl + '/user/resend-otp',
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

verifyOtp = (mobile, otp, type) => 
{
  var data = {
    mobile: mobile,
    otp   : otp,
    usertype : type
   }
  console.log(data)
 return  fetch(constants.apiUrl + '/user/verifiedOTP',
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

getFeedList = (token) => 
{
 return  fetch(constants.apiUrl + `/user/recommneded/active-jobs?&api_token=${token}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

findFreelancer = (token) => 
{
 return  fetch(constants.apiUrl + `/find-freelancer?&api_token=${token}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

jobs = (token) => 
{
 return fetch(constants.apiUrl + `/user/jobs?&api_token=${token}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

addFav = (token,jobId,isFav) => 
{
  var data = {
    api_token: token,
    job_id : jobId,
    is_favourite : true
   }
  console.log(data)
 return  fetch(constants.apiUrl + '/favourites/jobs',
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

getFavJobList = (token) => 
{
  console.log(token)
 return  fetch(constants.apiUrl + `/user/favourites/jobs/lists?&api_token=${token}`,
    {
      method: "GET"
   }).then((response) => 
   response.json())
   .catch((error) => {
     console.error(error);
   });
}

profile_update = (api_token,username,email,about_me) => 
{

var data = {
api_token: api_token,
user_name: username,
email:email,
about_me:about_me,
CV_file : "",
identity_Id : "",
categoryId : "",
image_file : ""

}
console.log(data)
return fetch(constants.apiUrl + '/user/update/profile',
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

sendProposal= (api_token, freelancerId, jobId) => 
{
var data = {
api_token: api_token,
freelancer_id: freelancerId ,
job_id: jobId

}
console.log(data);
return fetch(constants.apiUrl + '/client/sendJobRequest',
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

post_project = (api_token,title,description,country,category,job_type,budget,start_date,end_date, skills) => 
{
var data = {
"api_token":api_token ,
"title": title,
"description": description,
"country": country,
"category": category,
"job_type": job_type,
"budget": budget,
"start_date": start_date,
"end_date":end_date,
"skills_name": {
"lastname": "",
"email": "",
"phone": ""
},
"publics":1
}
console.log(data)
console.log(constants.apiUrl + '/submit-job')
return fetch(constants.apiUrl + '/submit-job',
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

requestResponse = (api_token, requestStatus, jobId) => 
{
var data = {
"api_token":api_token ,
"request_status" :requestStatus,
"job_id" : jobId

}
console.log(data)
console.log(constants.apiUrl + '/user/accept/jobs')
return fetch(constants.apiUrl + '/user/accept/jobs',
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


category = () => 
{
return fetch(constants.apiUrl + `/categories`,
{
method: "GET"
}).then((response) => 
response.json())
.catch((error) => {
console.error(error);
});
}
 
  
  
}