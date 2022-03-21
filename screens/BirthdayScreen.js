import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
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
const BirthDayScreen = ({navigation}) => {
  console.log('here');
  const {countryCode, setCountryCode} = useState < CountryCode > 'FR';
  console.log('her1');
  const {country, setCountry} = useState < Country > null;
  console.log('her2');
  const {withCountryNameButton, setWithCountryNameButton} = useState(false);
  const {withFlag, setWithFlag} = useState(true);
  const {withEmoji, setWithEmoji} = useState(true);
  const {withFilter, setWithFilter} = useState(true);
  const {withAlphaFilter, setWithAlphaFilter} = useState(false);
  const {withCallingCode, setWithCallingCode} = useState(false);
  console.log('here3');
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
          
          <Text style={[styles.heading]}> Choose Birthday</Text>

          <View style={[styles.subHeading]}>
            <Text >
              Please Choose your exact date of Birth
            </Text>
          </View>
          <View style = {[styles.textBox]}>
            <LanguagePickerBtn ></LanguagePickerBtn>
          </View>
          <View style = {[styles.textBox2]}>
            <LanguagePickerBtn ></LanguagePickerBtn>
          </View>
          <View style = {[styles.textBox2]}>
            <LanguagePickerBtn ></LanguagePickerBtn>
          </View>
          <View style = {[styles.textBg]}>
            <View style = {[styles.whiteLine]}>
              <Text style = {[{fontSize:20,color:'gray',marginLeft:15,}]} >
                Email
              </Text>
            </View>
          </View>
          <View style = {[styles.bottomBtn]}>
          <ButtonWithBg
             path = "ProfileScreen"
              active = "true"
              text = "Continue"
              image={buttonBgOrange}
              navigation={navigation}></ButtonWithBg>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  textBg:{
    marginTop:20,
    marginLeft:40,
    marginRight:40,
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    // flex:1
    width:windowWidth-80,
    height:60,
    backgroundColor:'white',

  },
  whiteLine:{
    backgroundColor:'white',
    position:'absolute',
    left:'5%',
    top:-10,
    width:70,
    height:30,
    fontSize:30,
  },
  bottomBtn:{
    position: 'absolute',
    bottom: 40,
  },
  textBox :{
    // backgroundColor:'red',
    marginTop:40,
  },
  textBox2 :{
    // backgroundColor:'red',
    marginTop:10,
  },
  
  btn: {
    marginTop: 40,
  },
  container: {
    marginTop: 50,
    width: windowWidth * 0.8,
  },
  mainPage: {
    flex: 1,
    alignItems: 'center',
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
    justifyContent: 'center',
  },  
  heading: {
    marginTop: 100,
    fontSize: 40,
    fontWeight: 'bold',
  },
  subHeading: {
    marginTop:10,
    fontSize: 15,
    width:windowWidth*0.75,
  },
 
});

export default BirthDayScreen;
