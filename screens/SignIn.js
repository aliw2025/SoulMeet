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
const SignIn = ({navigation}) => {
  
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

        <Text>
            welcome
        </Text>
       
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
 
  BackGrounimage: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'red',
  },

 
});

export default SignIn;
