// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

//import firebase from '../database/firebase';
export default class Chat extends Component {

  
  
  
  render() {
    // this.state = { 
    //   displayName: firebase.auth().currentUser.displayName,
    //   uid: firebase.auth().currentUser.uid
    // }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Chat
        </Text>
       
      
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