
import { Dimensions, StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { useState,useRef } from 'react';
import image from '../assets/images/circle.png';
import { Navigation } from 'react-native-navigation';
//const { width, height } = Dimensions.get('window');



const GOOGLE_MAPS_APIKEY = 'AIzaSyAINHQ2ZTUf3comgnPaABibAJCaBLFHQ2g';

const Map = ()=> {
  const [state,setstate] = useState({
    pickupCords:{
      latitude: 0.3551603,
      longitude: 32.7409053,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,

  },
  droplocationCords:{
    latitude: 0.333306,
    longitude: 32.7794,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,

  }
})
const mapRef = useRef()

const { pickupCords,droplocationCords} =state
  

 
    return (
   
      <MapView
      ref={mapRef}
      initialRegion={pickupCords}
      style={StyleSheet.absoluteFill}
        
      >
        <Marker coordinate={pickupCords}
       
       
     />
        
       
     
        <Marker coordinate={droplocationCords}
        />
        
       
          <MapViewDirections
          origin={pickupCords}
         
          destination={droplocationCords}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates,{
              edgePadding:{
                right:30,
                bottom:300,
                left:30,
                top:100
              }
            })
          }}

         
         
          
        />
        
     
    </MapView>
       );
      }


      const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        bottomCard: {
            backgroundColor: 'white',
            width: '100%',
            padding: 30,
            borderTopEndRadius: 24,
            borderTopStartRadius: 24
        },
        inpuStyle: {
            backgroundColor: 'white',
            borderRadius: 4,
            borderWidth: 1,
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            marginTop: 16
        }
    });
    
    
    export default Map;
  