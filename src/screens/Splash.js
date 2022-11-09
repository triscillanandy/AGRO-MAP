import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
//import { Colors } from '../../src/constants'


const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.replace('TabNavigator')
    }, 3000)
    return (
        <View style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor:"#08E4C4"}} >
            <StatusBar barStyle = "light-content" hidden = { false } backgroundColor = "#465bd8"/>
            <Image source = { require('../assets/images/bfam.png') } style = {{  width:220.91 ,height:200, marginLeft:10, marginTop:10 }}/>   
            <Text style = {{fontSize: 30} }>AGRO MAP</Text> 
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})