import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Splash,Login, Signup, Dashboard,Home,Map,Chat,Lib,Profile} from './src/screens'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import  Ionicons  from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
   
      
    <Tab.Navigator  labeled={false} barStyle={{ backgroundColor: 'black' }} activeColor="white" >
      

      <Tab.Screen name="Home"  component={Home}          //Home Screen
      options={{headerShown:false,
        tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"black"} size={24}/>
        ),
    }}/>
      <Tab.Screen name="Map" component={Map}        // map Screen
      options={{headerShown:false,
        tabBarIcon: () => (
            <MaterialCommunityIcons name="map" color={"black"} size={24}/>
        ),
    }}/>
      <Tab.Screen name="Chat" component={Chat}      // chat Screen
      options={{headerShown:false,
        tabBarIcon: () => (
            <Ionicons name="chatbox-outline" color={"black"} size={24}/>
        ),
    }}/>
    <Tab.Screen name="Lib" component={Lib}      // Library Screen
      options={{headerShown:false,
        tabBarIcon: () => (
            <MaterialCommunityIcons name="book" color={"black"} size={24}/>
        ),
    }}/>
      <Tab.Screen name="Profile" component={Profile}            // Profile Screen
      options={{headerShown:false,
        tabBarIcon: () => (
            <MaterialCommunityIcons name="account-circle" color={"black"} size={24}/>
        ),
    }}/>
    </Tab.Navigator>
   
  );
};
const App = ()=>{
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
             
              <Stack.Screen name="Splash" component={Splash} />
              
             
              
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
             
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
              
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App