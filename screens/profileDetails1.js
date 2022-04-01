import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import DropDown from '../components/dropDown';
import FlatListBasics from '../components/list';
import Picker from '../components/picker';
import CustomTextInput from '../components/CustomTextInput'


// react items
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
// global variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/grad.png');
const buttonBgOrange = require('../assets/orange.png');

const ProfileDetails1 = (props) => {
  // console.log(props.route.params);
  var day = props.route.params.day;
  var month = props.route.params.month;
  var year = props.route.params.year;
  console.log(day);
  console.log(month);
  console.log(year);
  const [text, onChangeText] = React.useState("Useless Text");
  const navigationAction = params => {
    
    props.navigation.navigate("ProfileDetails2",{day: day,month:month,year:year});
  }
  
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      {/* <TouchableHighlight onPress={hideList} underlayColor="clear"> */}
      
      <SafeAreaView>
       
        <View style={styles.mainPage}>
          <TouchableOpacity>
          <Text style = {[styles.skipBtn]}>Skip</Text>
          </TouchableOpacity>
        
          <Text style={[styles.heading]}>Profile details</Text>
          <View style={[styles.subHeading]}>
            <Text>
              Please enter your full name at birth exactly as it shows on your
              birth certificate. Do not include Jr, III, other suffix, or
              symbols.
            </Text>
          </View>
          <CustomTextInput feildName="First Name"></CustomTextInput>
          <CustomTextInput feildName="Middle Name"></CustomTextInput>
          <CustomTextInput feildName="Last Name"></CustomTextInput>
          <CustomTextInput feildName="Profile Display Name"></CustomTextInput>


          <View style={[styles.bottomBtn]}>
            <ButtonWithBg
              active="true"
              text="Confirm"
              image={buttonBgOrange}
              btnAction = {navigationAction}
              ></ButtonWithBg>
          </View>
        </View>
      </SafeAreaView>
      {/* </TouchableHighlight> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  skipBtn:{
    color: '#FFC700',
    fontWeight:'bold', 
    // backgroundColor:'gray',
    width:'10%',
    position:'absolute',
    top :40,
    right:40,
  },
  input:{

  },
  bottomBtn: {
    // position: 'absolute',
    // bottom: 40,
    marginTop:20,
    marginLeft:40,
    marginRight:40,
  },
  mainPage: {
    flex: 1,
    // alignItems: 'center',
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
    marginLeft: 40,
    marginRight: 40,
    // backgroundColor:'red'
  },
  subHeading: {
    // backgroundColor:'green',
    marginTop: 10,
    fontSize: 15,
    marginLeft: 40,
    marginRight: 40,
    // width: windowWidth * 0.75,
  },
});

export default ProfileDetails1;
