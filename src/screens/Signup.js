// components/signup.js
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Image,Text,View, TextInput, Alert, ActivityIndicator,TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';


export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      firstname: '',
      lastname: '',
      phone: '',
      email: '', 
      password: '',
      confirmPw : '',
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
  registerUser = () => {
    
    
    var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
  
    if( (this.state.firstname === '') || (this.state.lastname === '') ||(this.state.phone === '') | (this.state.email === '' )|| (this.state.password === '')){
      alert("Required Field Is Missing!!!");
    }else if (!(checkEmail).test(this.state.email)){
      alert("invalid email!!!");
    }
    // Password validations
    else if (this.state.password.length<8){
      alert("Minimum 08 characters required!!!");
    }else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(this.state.password))){
      alert("Use atleast 01 special character!!!");
    }else if(this.state.password !== this.state.confirmPw){
      alert("Password doesnot match!!!");
    } else {
      this.setState({
        isLoading: true,
      })



      var Data ={
        Firstname : this.state.firstname,
        Lastname :this.state.lastname,
        Phone : this.state.phone,
        Email : this.state.email,
        Password : this.state.password,
        ConfirmPw:this.state.confirmPw
      
        
      };


      console.log("My data ",Data)

      fetch("http://192.168.137.1/agromap/signUp.php",{
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response2)=>{

      
      alert(JSON.stringify(response2.message));  

      if(response2.error === 1){
        this.setState({
          isLoading: false,
          firstname: '',
          lastname: '',
          phone: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
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
                    style = {{ width: 110, height: 110 ,textAlign:"center",marginLeft:130,marginTop:28} }
          />
          <View style = {styles.names}>
                  
                    <TextInput
                    style={styles.redbox}
                    placeholder="First name"
                    placeholderTextColor="#818181"
                    value={this.state.firstname}
                    onChangeText={(val) => this.updateInputVal(val, 'firstname')}
                    />
                 
                     
                    <TextInput
                    style={styles.blackbox}
                    placeholder=" Last Name"
                    placeholderTextColor="#818181"
                    value={this.state.lastname}
                    onChangeText={(val) => this.updateInputVal(val, 'lastname')}
                     />
         
                 
        
                  </View>
                  <View style = {{
                    flexDirection: "row",
                    
                    alignItems:"center",
                    marginLeft: 25,
                    marginRight: 10,
                    width: 312,
                    height: 47,
                    borderWidth: 1,
                    marginTop: 16,
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
                    alignItem: "center",
                    marginLeft: 25,
                    width: 312,
                    height: 47,
                    borderWidth: 1,
                    marginTop: 16,
                    paddingHorizontal: 10,
                    borderColor: "#08E4C4",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <View>
                       
                    
                        <Icon name = "phone" color = "#08E4C4" size = { 24 } style ={{marginTop: 8,
                        marginLeft: 250}}/>
                        <TextInput style={styles.input} 
                        placeholder="Phone"
                        placeholderTextColor="#818181"
                        value={this.state.phone}
                        onChangeText={(val) => this.updateInputVal(val, 'phone')} />
 
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
                    marginTop: 16,
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
                        maxLength={40}
                       />
                        <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}  
                    
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
                
                <View style = {{
                    flexDirection: "row",
                    alignItem: "center",
                    marginLeft: 25,
                    width: 312,
                    height: 47,
                    borderWidth: 1,
                    marginTop: 16,
                    paddingHorizontal: 10,
                    borderColor: "#08E4C4",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <View style = {{
                    flexDirection: "row"}}>
                       
                    
                       
                        <TextInput style={styles.inputpass} placeholder="Confirm Password" placeholderTextColor="#818181"
                        value={this.state.confirmPw}
                        onChangeText={confirmPw=>this.setState({confirmPw})}
                        
                        secureTextEntry={this.state.confirmSecureTextEntry ? true : false} />
                         <TouchableOpacity
                  onPress={this.updateConfirmSecureTextEntry.bind(this)}   
                  style = {{
                    marginTop:9}}
                  >
                  {this.state.confirmSecureTextEntry ?
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
                
                
              
                <TouchableOpacity
                onPress={this.registerUser}
                style={{
                  alignItem: "center",
                    marginHorizontal: 55,
                    borderWidth: 1,
                    marginTop: 20,
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
                        marginTop: 5., }}>Signup</Text>
                </TouchableOpacity>
                
                <View style={{flexDirection: 'row', alignItems: 'center',marginTop:19}}>
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
                    fontSize: 16,
                    textAlign: "center",
                    marginLeft: 20,
                    marginTop: 15,
                    }} onPress={() => this.props.navigation.navigate('Login')}>Already have an account,Signin. 
                    </Text>
                
          
                        
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
   
  names: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'flex-end',
    width:310,
    
  
  },
  input:{
    width: 238,
    marginTop:-26,
    marginLeft:12,
    color: "black",
    alignItem: "center",
    fontSize: 17,
    textAlign: "left",
    
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
button:{
  alignItem: "center",
  marginHorizontal: 55,
  borderWidth: 1,
  marginTop: 40,
 width: 130,
    height: 44,
   marginLeft: 120,
    paddingHorizontal: 10,
      backgroundColor: "#0AF28D",
                    borderRadius: 10,
                    borderColor: "#0AF28D",
                    
                    paddingVertical: 2
},
  redbox: {
    textAlign: "center",
    marginLeft: 23,
    width: 150,
    height: 47,
    borderWidth: 1,
    marginTop: 25,
    paddingHorizontal: 10,
    borderColor: "#08E4C4",
    borderRadius: 23,
    fontSize:17,
    paddingVertical: 2
   },
   
   blackbox: {
    textAlign: "center",
    marginLeft:14,
    width: 150,
    height: 47,
    borderWidth: 1,
    marginTop: 25,
    paddingHorizontal: 10,
    borderColor: "#08E4C4",
    borderRadius: 23,
    paddingVertical: 2 ,
    fontSize:17
   }
});