// components/signup.js
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
//import firebase from '../database/firebase';


export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      name: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })


      var InsertAPIURL = "http://10.7.4.65/agromap/signUp.php";   //API to render signup
      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        Email: this.state.email,
        Password: this.state.password
      };


      console.log("My datga ",Data)

      fetch(InsertAPIURL,{
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data)
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{

      this.setState({
            isLoading: false,
            name: '',
            email: '', 
            password: ''
          })
      // alert(response[0].Message);  

      console.log("response",response)
      
      // If data is in JSON => Display alert msg
      // this.props.navigation.navigate('Login') //Navigate to next screen if authentications are valid
    })
    .catch((error)=>{
      console.log("error ===>",error)
      this.setState({
        isLoading:false,
      })
        alert("Error Occured" + error);
    })
    




      // console.log('User registered successfully!')
      //   this.setState({
      //     isLoading: false,
      //     name: '',
      //     email: '', 
      //     password: ''
      //   })
      //   this.props.navigation.navigate('Login')

    
    }
  }



  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
      

        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.name}
          onChangeText={(val) => this.updateInputVal(val, 'name')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() => this.registerUser()}
        />
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});