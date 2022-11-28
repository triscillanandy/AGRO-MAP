
import MapView ,{ AnimatedRegion }from 'react-native-maps';


      
  
import React, { useState, useEffect } from 'react';
import { Text, View , StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
export default function App() {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
 
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      //console.Log("MYLIVELOCATION",""+JSON.stringify(location));
      setLocation(location);
    })();
  }, []);
  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  

  return (
    <View style={styles.container}>
     <Text style={styles.paragraph}>{text}</Text>
      <MapView
       zoomEnabled={true}
       followUserLocation={true}
    
           
        showsUserLocation
       
        style={{ alignSelf: 'stretch', height: '100%' }}>
        {
          location && <Marker coordinate={location.coords}/>
          
        }
        
      
       
      
      </MapView>
  
    </View>
  );
}
const styles = StyleSheet.create({ 

 }); 
