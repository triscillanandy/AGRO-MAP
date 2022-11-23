
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { useState,useRef } from 'react';

//const { width, height } = Dimensions.get('window');



const GOOGLE_MAPS_APIKEY = 'AIzaSyAINHQ2ZTUf3comgnPaABibAJCaBLFHQ2g';

const Map = ()=> {
  const [state,setstate] = useState({
    pickupCords:{
      latitude: 30.7046,
      longitude: 76.7179,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,

  },
  droplocationCords:{
    latitude: 30.7333,
    longitude: 76.7794,
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
    
    
    export default Map;
  