// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

//import firebase from '../database/firebase';
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: '',
      displayName:"",
    }
  }



  componentDidMount(){

    AsyncStorage.getItem("USER", (err, user) => {
      if(user){
          // const userbject= JSON.parse(user)

          console.log("User",user)
          this.setState({
            displayName:JSON.parse(user)
          })
          
          // alert(user)
      }else{
        this.signOut();
      }
    })

  }


  loadUserData(){
    // create an API that will load user data
  }


  signOut(){
    AsyncStorage.clear();
    this.props.navigation.navigate('Login')
  }
  
  
  render() {
    // this.state = { 
    //   displayName: firebase.auth().currentUser.displayName,
    //   uid: firebase.auth().currentUser.uid
    // }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});