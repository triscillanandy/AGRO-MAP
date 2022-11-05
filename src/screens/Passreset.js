// components/login.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Alert,Image,ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from '@expo/vector-icons/AntDesign';
//import firebase from '../database/firebase';

export default class Passreset extends Component {
  
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View> 
        <Image source = { require('../assets/images/bfam.png')}
                    style = {{ width: 110, height: 110 ,textAlign:"center",marginLeft:130,marginTop:60} }
                /> 



<Text style = {{
                    color: "#1E53DB",
                    alignItem: "center",
                    fontSize: 18,
                    textAlign: "center",
                    marginLeft: 20,
                    marginTop: 19,
                    }}> 
                    </Text>  
                <View style = {{
                    flexDirection: "row",
                    
                    alignItems:"center",
                    marginLeft: 25,
                    marginRight: 10,
                    width: 312,
                    height: 47,
                    borderWidth: 1,
                    marginTop: 35,
                    paddingHorizontal: 10,
                    borderColor: "#08E4C4",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <View>
                       
                    
                       <Icon name = "mail" color = "#08E4C4" size = { 23 } style ={{marginTop: 5.7,
                       marginLeft: 250}}/>
                       <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#818181"
                        value={this.state.email}
                        onChangeText={(val) => this.updateInputVal(val, 'email')} />

                   </View >
                    
                    
                </View>
                
                  
          
        <TouchableOpacity
                onPress={this.userLogin}
                style={{
                  alignItem: "center",
                    marginHorizontal: 55,
                    borderWidth: 1,
                    marginTop: 35,
                    width: 130,
                    height: 42,
                    marginLeft: 120,
                    paddingHorizontal: 10,
                    backgroundColor: "#0AF28D",
                    borderRadius: 10,
                    borderColor: "#0AF28D",
                    
                    paddingVertical: 2
                }}>
                  <Text style={{ color: "#000000",
                        fontSize: 19,
                        textAlign: "center",
                        marginTop: 5., }}>Login</Text>
                </TouchableOpacity>



                
        
        <Text style = {{
                    color: "#1E53DB",
                    alignItem: "center",
                    fontSize: 18,
                    textAlign: "center",
                    marginLeft: 20,
                    marginTop: 19,
                    }}> 
                    </Text>                         
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  
  input:{
    marginTop:-26,
    marginLeft:12,
    color: "#1E53DB",
    alignItem: "center",
    fontSize: 15,
    textAlign: "left",
    
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