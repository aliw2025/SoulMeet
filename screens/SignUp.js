import React, {useState, useEffect} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions,Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomTextInput from '../components/CustomTextInput';
// import ButtonWithBg from '../components/ButtonWithBg'

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
const SignUp = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  // store reference of firebase user
  const [user, setUser] = useState();
  // store value of email
  const [emailText, setEmailText] = useState();
  // store value of password
  const [passText, setPassText] = useState();
  // store value of confirm password
  const [confirmPassText, setConfirmPassText] = useState();
  // text to check if password matched
  const [matchText, setMatchText] = useState('');
  // color of the matched status text
  const [matchColor, setMatchColor] = useState('red');

  // if (initializing) return null;

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
    console.log('initizing');
    return null;
  }
  
  // function to signUp the user
  function signUpUser(email, password, password2) {
    if (password != password2) {
      console.log('password does not match');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Register!');
        console.log(error);
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
  const navigationAction = params => {
    // call function to sign up the user. pass the parameters
    signUpUser(emailText, passText, confirmPassText);
  };

  const onSelect = (country: Country) => {
    console.log(country);
  };

  function checkSim(confirmPass) {
    setConfirmPassText(confirmPass);
    if (passText == confirmPass) {
      setMatchText('Matched');
      setMatchColor('green');
    } else {
      setMatchText('password does not match');
      console.log('unmatched');
    }
  }

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView>
        <Text style={[styles.heading]}>Sign Up</Text>
        <CustomTextInput
          onChangeText={setEmailText}
          feildName="email"></CustomTextInput>
        <CustomTextInput
          onChangeText={setPassText}
          secureTextEntry={true}
          feildName="password"></CustomTextInput>
        <CustomTextInput
          onChangeText={checkSim}
          secureTextEntry={true}
          feildName="confirm password"></CustomTextInput>
        <Text
          style={{color: matchColor, marginRight: 40, alignSelf: 'flex-end'}}>
          {matchText}
        </Text>
        <View style={[{marginLeft: 40, marginTop: 40, marginBottom: 30}]}>
          <ButtonWithBg
            path="ProfileDetails1"
            active="true"
            text="Sign Up"
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
    // justifyContent: 'center',
    // backgroundColor: 'red',
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

export default SignUp;

  /* adding extra data to the firebase */
        // if (auth().currentUser) {
        //   userId = firebase.auth().currentUser.uid;
        //   if (userId) {
        //       firebase.database().ref('users/' + userId).set({
        //         firstname:firstname,
        //         lastname:lastname,
        //         email:email,
        //         password:password,
        //         town:town,
        //         addInterest:addInterest,
        //         photoUrl:false,
        //         emailVerified:false,
        //         uid:userId,
        //         status:true,
        //         online:true
        //       })
        //   }
        // }


  // auth()
  //   .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  //   .then(() => {
  //     //   console.log('User account created & signed in!');
  //     console.log('User account & signed in!');
  //   })
  //   .catch(error => {
  //     if (error.code === 'auth/email-already-in-use') {
  //       console.log('That email address is already in use!');
  //     }

  //     if (error.code === 'auth/invalid-email') {
  //       console.log('That email address is invalid!');
  //     }

  //     console.error(error);
  //   });