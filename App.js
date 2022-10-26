import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Login from '../screens/Login';
//import Signup from '../screens/Signup';
//import Splash from '../screens/Splash';
import { Splash, Signup, Login } from './src/screens'

const Stack = createStackNavigator();

function MyStack() {
    return (

        <Stack.Navigator screenOptions = {
            { headerShown: false }
        } >

        <Stack.Screen name = "Splash"
        component = { Splash }
        />
         <Stack.Screen name = "Signup"
        component = { Signup }
        /> 
        <Stack.Screen name = "Login"
        component = { Login }/>
         </Stack.Navigator>

    );
}

export default function App() {
    return ( <NavigationContainer>
        <MyStack/>
        </NavigationContainer>
    );
}