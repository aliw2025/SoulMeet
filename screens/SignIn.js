import React, {useState, useEffect} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions,Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomTextInput from '../components/CustomTextInput';

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
  const [emailText,setEmailText] = useState();
  // store value of password feild
  const [passText,setPassText] = useState();

  // function to sign in user
  const navigationAction = params => {
    
    const status = sigInUser({email:emailText,password:passText});
   
  };

  function sigInUser(user) {
    var returnStatus='d';
    auth()
      .signInWithEmailAndPassword(
        user.email,
        user.password,
      )
      .then(() => {
        //   console.log('User account created & signed in!');
        console.log('User account & signed in!');
        
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert("ERROR", "That email address is already in use!");
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert("ERROR", "That email address is invalid!");
        }else if(error.code =='auth/invalid-email'){
          Alert.alert("ERROR", "password is invalid!");
        }
        else{
          Alert.alert("ERROR", error.code);
        }
      
      });
      
  }


  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    
    if(user){
      console.log(user);
      navigation.navigate('SelectLanguage', {name: 'Jane'});
    }
    
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    console.log('null');
    return null;
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
        <CustomTextInput onChangeText= {setEmailText} feildName="email"></CustomTextInput>
        <CustomTextInput 
          onChangeText = {setPassText}
          secureTextEntry={true}
          feildName="password"></CustomTextInput>

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
    // backgroundColor:'red'
  },
});

export default SignIn;
