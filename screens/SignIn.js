import React, {useState, useEffect, useContext} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomTextInput from '../components/CustomTextInput';
import {AuthContext} from '../navigation/AuthProvider';
import { ActivityIndicator } from "react-native";
import LoadingScreen from './LoadingScreen'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/grad.png');
const buttonBgOrange = require('../assets/orange.png');
const SignIn = ({navigation}) => {
  // store value of email feild
  const [emailText, setEmailText] = useState();
  // store value of password feild
  const [passText, setPassText] = useState();
  const {loading} = useContext(AuthContext);
  const {login} = useContext(AuthContext);

  if(loading){
    return (
      // <View style = {{height:'100%',alignItems:'center',justifyContent:'center'}}>
      //   <ActivityIndicator color={"black"} />
      // </View>
      <LoadingScreen></LoadingScreen>
      
    );
  }
  // function to sign in user
  const navigationAction = params => {
    const status = sigInUser({email: emailText, password: passText});
  };

  function sigInUser(user) {
    console.log(' user email is :' + user.email);
    user.email = user.email.trim();
    login(user.email, user.password);
    console.log('fdfdfdfdfdfdfdf');
    // setLoading(true);
  }

  const onSelect = (country: Country) => {
    console.log(country);
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView>
        <Text style={[styles.heading]}>Sign In</Text>
        <CustomTextInput
          lineWidth={60}
          onChangeText={setEmailText}
          feildName="Email"></CustomTextInput>
        <CustomTextInput
          lineWidth={90}
          onChangeText={setPassText}
          secureTextEntry={true}
          feildName="Password"></CustomTextInput>

        <View style={[{marginLeft: 40, marginTop: 40, marginBottom: 30}]}>
          <ButtonWithBg
            path="ProfileDetails1"
            active="true"
            text="Sign In"
            btnAction={navigationAction}
            navigation={navigation}></ButtonWithBg>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  BackGrounimage: {
    flex: 1,
    alignItems: 'center',
  },

  heading: {
    marginTop: 100,
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
    color: 'black',
   
  },
});

export default SignIn;
