// components/login.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Alert,Image,ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from '@expo/vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true,
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
 
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })

      var Data ={
        Email: this.state.email,
        Password: this.state.password,
      };



      fetch("http://192.168.137.1/agromap/login.php",{
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response2)=>{

      AsyncStorage.setItem("USER",JSON.stringify(response2.user));
      
      alert(JSON.stringify(response2.message));  

      if(response2.error === 1){
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
      }
      else{
        this.setState({
          isLoading:false,
        })
      }
      // console.log("response",response2)      
      
    })
    .catch((error)=>{
      // console.log("error ===>",error)
      this.setState({
        isLoading:false,
      })
        alert("Error Occured" + error);
    })
  
    }
  }

  updateSecureTextEntry(){
    this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry
    });
  }

  updateConfirmSecureTextEntry(){
    this.setState({
        ...this.state,
        confirmSecureTextEntry: !this.state.confirmSecureTextEntry
    });
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
      <View> 
        <Image source = { require('../assets/images/bfam.png')}
                    style = {{ width: 110, height: 110 ,textAlign:"center",marginLeft:130,marginTop:60} }
                /> 
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
                
                <View style = {{
                    flexDirection: "row",
                    
                    alignItems:"center",
                    marginLeft: 25,
                    marginRight: 10,
                    width: 312,
                    height: 47,
                    borderWidth: 1,
                    marginTop: 29,
                    paddingHorizontal: 10,
                    borderColor: "#08E4C4",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <View style = {{
                    flexDirection: "row"}}>
                       
                       
                    
                       
                       <TextInput style={styles.inputpass} placeholder="Password"
                        placeholderTextColor="#818181" 
                        secureTextEntry={this.state.secureTextEntry ? true : false}
                        value={this.state.password}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                        
                       
                        />
                        <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}  
                  style = {{
                  marginLeft:4,  marginTop:3}}
                  
                  >
                  {this.state.secureTextEntry ?
                      <Feather 
                      name="eye-off"
                      color="#08E4C4"
                      size={20}
                     
                      />
                  :
                      <Feather
                      name="eye"
                      color="grey"
                      size={20}
                      />
                  }
                </TouchableOpacity>  

                   </View >
                    
                    
                </View>
                <Text style = {{
                    color: "#1E53DB",
                    alignItem: "center",
                    fontSize: 18,
                    textAlign: "center",
                    marginLeft: 20,
                    marginTop: 19,
                    }} onPress={() => this.props.navigation.navigate('Passreset')}>Forgot password? 
                    </Text>    
        
          
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



                <View style={{flexDirection: 'row', alignItems: 'center',marginTop:35}}>
                    <View style={{width:80,marginLeft:20,marginRight:23, height: 1, backgroundColor: "#08E4C4"}} />
                    <View>
                        <Text style={{width: 130,color: "#00000", textAlign: 'justify',fontSize: 18,}}>Or Sign up With</Text>
                    </View>
                    <View style={{height: 1,width:80, marginLeft:2,marginRight:12,backgroundColor: "#08E4C4"}} />
                </View>
                
                <View style={[styles.container, {// Try setting `flexDirection` to `"row"`.
                flexDirection: "row"
                }]}>
                    <View style={{
                        alignItem: "center",
                        marginLeft: 18,
                        width: 150,
                        height: 50,
                        borderWidth: 1,
                        marginTop: 25,
                        paddingHorizontal: 10,
                        borderColor: "#08E4C4",
                        borderRadius: 23,
                        paddingVertical: 2 }} 
                    >
                        <View>
                        <Image source = { require('../assets/images/google.png')} style = {{ width: 30, height: 30 ,marginTop: 7,
                       marginLeft: 4} }/>
                       <Text style={{
                          color: "#0000000",
                          alignItem: "center",
                          fontSize: 19,
                          textAlign: "center",
                          marginLeft: 20,
                          marginTop:-30,

                       }}>Google</Text>
 
                       
                        </View >
                       
                    </View>
                    <View style={{ 
                        marginLeft: 20,
                        width: 150,
                        height: 50,
                        borderWidth: 1,
                        marginTop: 25,
                        paddingHorizontal: 10,
                        borderColor: "#08E4C4",
                        borderRadius: 23,
                        paddingVertical: 2  }} 
                    />
                    <View>
                        <Image source = { require('../assets/images/facebk.png')} style = {{ width: 34, height: 36 ,marginTop: 32,
                       marginLeft: -139} }/>
                       <Text style={{marginLeft:-120, marginTop:-32,color: "#0000000",
                          alignItem: "center",
                          fontSize: 18,
                          textAlign: "center",
                          }}>Facebook</Text>
 
                         
 
                       
                    
                       

                    </View >
      
                    </View>

                 
        
        <Text style = {{
                    color: "#1E53DB",
                    alignItem: "center",
                    fontSize: 18,
                    textAlign: "center",
                    marginLeft: 20,
                    marginTop: 19,
                    }} onPress={() => this.props.navigation.navigate('Signup')}>Create Account 
                    </Text>                         
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  
  input:{
    marginTop:-26,
    marginLeft:12,
    color: "black",
    alignItem: "center",
    fontSize: 15,
    textAlign: "left",
    width: 238,
    
},
inputpass:{
  width: 238,
  marginTop:-2,
  marginLeft:12,
  color: "black",
  alignItem: "center",
  fontSize: 17,
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