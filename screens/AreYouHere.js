import React, {useState} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';

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
const AreYouHere = ({navigation}) => {
  
  const navigationAction = params => {
    navigation.navigate("BirthDay", {name: 'Jane'});
  }
  const onSelect = (country: Country) => {
    console.log(country);
    // setCountryCode(country.cca2)
    // setCountry(country)
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView>
        <View style={styles.mainPage}>
          <Text style={[styles.container]}>
            Use your name & date of birth to discover your life path, destiny &
            more. Get your complete numerology chart & forecast. Find your soul
            mate & twin flame. Socialized with people that match your numbers &
            personality. Find the love of your life or make friends through this
            numerology/dating app.
          </Text>
          <Text  adjustsFontSizeToFit numberOfLines={1} style={[styles.heading]}> Are you here for</Text>
          <View style={[styles.btn]}>
            <ButtonWithBg
             path = "BirthDay"
              active = "true"
              text = "Numerology"
              image={buttonBgOrange}
              btnAction = {navigationAction}
              ></ButtonWithBg>
          </View>
          <View style={[styles.btn]}>
            <ButtonWithBg
              active = "false"
              text = "Dating/Socializing"
              image={buttonBgOrange}
              btnAction = {navigationAction}
              ></ButtonWithBg>
          </View>
          <View style={[styles.btn]}>
            <ButtonWithBg
              active = "false"
              text = "Both"
              image={buttonBgOrange}
              btnAction = {navigationAction}
              ></ButtonWithBg>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  btn: {
    marginTop: 40,
   
  },
  container: {
    marginTop: 50,
    width: windowWidth - 80,
    // marginLeft:40,
    // marginLeft:40,
    fontSize:14,
    letterSpacing:1.5,
    color:'black',
   
  },
  mainPage: {
    flex: 1,
    // backgroundColor:'pink',
    // alignItems: 'center',
  },
  btnBg: {
    // width: 300,
    height: 60,
    justifyContent: 'center',
    width: 320,
    // margin:20,
    // flex:1
  },
  BackGrounimage: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'red',
  },
  heading: {
    width:windowWidth-80,
    marginTop: 20,
    fontSize: 70,
    fontWeight: 'bold',
    color:'black',
  },
  subHeading: {
    fontSize: 15,
  },
 
});

export default AreYouHere;
