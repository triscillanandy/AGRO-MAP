import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
//import { Colors } from '../../src/constants'


const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.replace('Login')
    }, 3000)
    return ( <View style = {
            { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor:"#08E4C4"}
        } >
        <StatusBar barStyle = "light-content"
        hidden = { false }
        backgroundColor = "#465bd8"/>
        <Image source = { require('../assets/images/bfam.png') }
        style = {
            { width: 50, height: 50 }
        }
        />   
          <Text style = {
            {fontSize: 30} }>Nuntium</Text> 
            </View>
    )
}

export default Splash

const styles = StyleSheet.create({})