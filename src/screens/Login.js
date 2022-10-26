import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends Component {

    render() {
        return ( <
            View style = {
                { backgroundColor: "#FFFFF", height: "100%", alignItem: "center" } } >
            <
            Image source = { require('../assets/images/bfam.png') }
            style = {
                { width: 50, height: 50 } }
            /> 


            <
            View style = {
                {
                    flexDirection: "row",
                    alignItem: "center",

                    marginLeft: 28,
                    marginRight: 10,
                    width: 304,
                    height: 47,
                    borderWidth: 2,
                    marginTop: 180,
                    paddingHorizontal: 10,
                    borderColor: "#08E4C4",
                    borderRadius: 23,
                    paddingVertical: 2
                }
            } >
            <
            View style = {
                {
                    marginTop: 5.7,
                    marginLeft: 250

                }
            } >
            <
            Icon name = "mail"
            color = "#08E4C4"
            size = { 24 }
            /> <
            TextInput style = {
                { paddingHorizontal: 10 } }
            /> <
            /View>



            <
            /View> <
            View style = {
                {
                    flexDirection: "row",
                    alignItem: "center",

                    marginLeft: 28,

                    width: 304,
                    height: 47,
                    borderWidth: 2,
                    marginTop: 28,
                    paddingHorizontal: 10,
                    borderColor: "#08E4C4",
                    borderRadius: 23,
                    paddingVertical: 2
                }
            } >
            <
            View style = {
                {
                    marginTop: 5.7,
                    marginLeft: 250


                }
            } >
            <
            Icon name = "eye"
            color = "#08E4C4"
            size = { 24 }
            /> <
            TextInput style = {
                { paddingHorizontal: 10 } }
            /> <
            /View>




            <
            /View> <
            Text style = {
                {
                    color: "#1E53DB",
                    alignItem: "center",
                    fontSize: 15,
                    textAlign: "left",
                    marginLeft: 20,
                    marginTop: 14,

                }
            } > Forgot Password ? < /Text> <
            View style = {
                {

                    alignItem: "center",
                    marginHorizontal: 55,
                    borderWidth: 1,
                    marginTop: 40,
                    width: 150,
                    height: 49,
                    marginLeft: 97,

                    paddingHorizontal: 10,
                    backgroundColor: "#0AF28D",
                    borderRadius: 10,
                    borderColor: "#0AF28D",
                    paddingVertical: 2
                }
            } >
            <
            Text style = {
                {
                    color: "black",
                    fontSize: 25,
                    textAlign: "center",
                    marginTop: 4,


                }
            } > Login < /Text>


            <
            /View> <
            View >
            <
            View style = {
                {
                    alignItem: "center",
                    marginHorizontal: 55,
                    borderWidth: 1,
                    marginTop: 40,
                    width: 150,
                    height: 49,
                    marginLeft: 97,

                    paddingHorizontal: 10,
                    backgroundColor: "#0AF28D",
                    borderRadius: 10,
                    borderColor: "#0AF28D",
                    paddingVertical: 2
                }
            }
            />


            <
            View style = {
                {
                    alignItem: "center",
                    marginHorizontal: 55,
                    borderWidth: 1,
                    marginTop: 40,
                    width: 150,
                    height: 49,
                    marginLeft: 97,

                    paddingHorizontal: 10,
                    backgroundColor: "#0AF28D",
                    borderRadius: 10,
                    borderColor: "#0AF28D",
                    paddingVertical: 2
                }
            }
            /> <
            View style = {
                {
                    alignItem: "center",
                    marginHorizontal: 55,
                    borderWidth: 1,
                    marginTop: 40,
                    width: 150,
                    height: 49,
                    marginLeft: 97,

                    paddingHorizontal: 10,
                    backgroundColor: "#0AF28D",
                    borderRadius: 10,
                    borderColor: "#0AF28D",
                    paddingVertical: 2
                }
            }
            /> <
            /View>




            <
            /View>
        )
    }
}