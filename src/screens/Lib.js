

  import React, { useState, useEffect } from "react";
  import { Box, FlatList, Center, NativeBaseProvider ,View,Text, InputRightAddon,} from "native-base";
  
  import { StyleSheet} from 'react-native';
  import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  export default function Lib() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      const resp = await fetch("http://192.168.137.1/agromap/list.php");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
   
  
    return (
      <NativeBaseProvider>
        

        <Center flex={1}>
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
               
                            


                    
             

        
               
          <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.Business_name}</Text>
            <Text style={styles.email}>{item.Category} farm</Text>
            <Text style={styles.details}>View Details</Text>
          </View>
          }
          keyExtractor={item => item.id}
        />
   
               
        </Center>
       
      </NativeBaseProvider>
    );
  }
  const styles = StyleSheet.create({
   
    flatview: {
      justifyContent: 'center',
      //paddingTop: 30,
      //borderRadius: 2,
      height:140,
                       // elevation:2,
                        backgroundColor:"white",
                        marginLeft:4,
                        marginTop:20,
                        borderRadius:22,
                        marginBottom:10,

                        width:320
    },
    name: {
      
      fontSize: 18,
      textAlign: 'left',
      //marginTop:26,
     marginLeft:90,
      
    },
    email: {
      color: 'red',
      textAlign: 'center',
      marginTop:26,
      marginRight:50,
    },
    details: {
      textAlign: 'right',
      marginTop:26,
     marginRight:23,
      fontSize: 16,
      color: '#08E4C4',
     
     
    }
   
    
  });