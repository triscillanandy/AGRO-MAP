import React, { Component } from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler';
//import  Icon  from '@iconify/react';
import AsyncStorage from "@react-native-async-storage/async-storage";


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class Home extends Component {
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
    
    
      signOut(){
        AsyncStorage.clear();
        this.props.navigation.navigate('Login')
      }
  render() {
   
    return(
     
        <View style={{
            backgroundColor:"white",
            width:364
            
            //flex:1
        }}>
           
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                   
              
           </View>
           
               <View style={{
                   backgroundColor:"#Fed8b1",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:2,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#000000"
                        style={{
                            fontWeight:"light",
                            fontSize:18,
                            width:260
                        }}
                   />
                  <MaterialIcons name="search"size = { 23 }  color="#FF9012"/>
               </View>


               
               
      


               

            
               <ScrollView 
               vertical
               showsHorizontalScrollIndicator={false}
               style={{ marginTop:12}}
               >
                <View style={{
                      
                        alignItems: 'center',
                        backgroundColor:"#FEFEFF",
                        
                        }} 
                    >
              
                    
                    
                        
                    

                    <View style={ {// Try setting `flexDirection` to `"row"`.
                flexDirection: "row",
                marginLeft:1,
               // alignItems: 'center'
                
                }}>
                    <View style={{
                        height:184,
                        elevation:2,
                        backgroundColor:"white",
                        marginLeft:1,
                        marginTop:20,
                        borderRadius:22,
                        marginBottom:10,
                        width:147}} 
                    >
                        <View style={ {// Try setting `flexDirection` to `"row"`.
                flexDirection: "column",
              

               alignItems: 'center'
                
                }}>
                        <Image source = { require('../assets/images/farmer.png') } style = {{  width:100 ,height:100, marginLeft:10, marginTop:12 }}/>   
                        <Text style={{
                          color: "#0000000",
                         
                          fontSize: 18,
                       
                          marginLeft: 2,
                          marginTop: 25,
                       

                       }}>Farmer</Text>
                       </View>
 
                       
                    </View>
                    <View style={{ 
                        height:184,
                        elevation:2,
                        backgroundColor:"white",
                        marginLeft:12,
                        marginTop:20,
                        borderRadius:22,
                        marginBottom:10,

                        width:147  }} 
                    >
                         <View style={ {// Try setting `flexDirection` to `"row"`.
                flexDirection: "column",
              

               alignItems: 'center'
                
                }}>
                        <Image source = { require('../assets/images/farmer.png') } style = {{  width:100 ,height:100, marginLeft:10, marginTop:12 }}/>   
                        <Text style={{
                          color: "#0000000",
                         
                          fontSize: 18,
                       
                          marginLeft: 2,
                          marginTop: 25,
                       

                       }}>Trader</Text>
                       </View>
 
                        </View>
               
                       
                    <View>
                       
                     
 
                         
 
                       
                    
                       

                    </View >
      
                    </View>
                    <View style={ {// Try setting `flexDirection` to `"row"`.
                flexDirection: "row",
                marginLeft:1,
                
                }}>
                    <View style={{ 
                        height:184,
                        elevation:2,
                        backgroundColor:"white",
                        marginLeft:1,
                        marginTop:20,
                        borderRadius:22,
                        marginBottom:10,
                        width:147  }} 
                        
                    >
                         <View style={ {// Try setting `flexDirection` to `"row"`.
                flexDirection: "column",
              

               alignItems: 'center'
                
                }}>
                        <Image source = { require('../assets/images/farmer.png') } style = {{  width:100 ,height:100, marginLeft:10, marginTop:12 }}/>   
                        <Text style={{
                          color: "#0000000",
                         
                          fontSize: 18,
                       
                          marginLeft: 2,
                          marginTop: 25,
                       

                       }}>Service Providers</Text>
                       </View>
 
                        </View>
        
                         
                    
                        
                   
                    
                    <View style={{ 
                        height:184,
                        elevation:2,
                        backgroundColor:"white",
                        marginLeft:12,
                        marginTop:20,
                        borderRadius:22,
                        marginBottom:10,
                        width:147  }} 
                        
                    >
                         <View style={ {// Try setting `flexDirection` to `"row"`.
                flexDirection: "column",
              

               alignItems: 'center'
                
                }}>
                        <Image source = { require('../assets/images/farmer.png') } style = {{  width:100 ,height:100, marginLeft:10, marginTop:12 }}/>   
                        <Text style={{
                          color: "#0000000",
                         
                          fontSize: 18,
                       
                          marginLeft: 2,
                          marginTop: 25,
                       

                       }}>Processors</Text>
                       </View>
 
                        </View>
                    
      
                    </View>

                    

               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:23
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Saved</Text>
                        

                        

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>View All</Text>
                        </View>
                   </View>
               </View>

                       
        
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    
                    <TouchableOpacity 
                        
                        style={{
                            height:216,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:253
                        }}
                    >
                        
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                               
                            }}>SAMANTHA</Text>
                            <Text style={{
                                
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </TouchableOpacity>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:216,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:253
                        }}
                    >
                        
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                               
                            }}>ANGELICA</Text>
                            <Text style={{
                               
                                color:"#00a46c",
                                paddingLeft:45
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:216,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:253
                        }}
                    >
                        
                        
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                
                            }}>SAMANTHA</Text>
                            <Text style={{
                                
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </View>

                </ScrollView>
                </View> 



                    
                </ScrollView> 
                   

                     

                


               
           
                
        </View>
      
    )
}
}