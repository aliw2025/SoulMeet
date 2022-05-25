import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
// import {Modal} from '../components/Modal';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  Image,
  useColorScheme,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Button,
  ImageBackground,
} from 'react-native';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width;
const photo = require('../assets/girl.png');
const love = require('../assets/love.png');

const mainProfile = require('../assets/mainProfile.png');

//  the screen component
const ItsAMatchScreen = props => {
  //   const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
  //   const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
  //   const [shadowRadius, setShadowRadius] = useState(0);
  //   const [shadowOpacity, setShadowOpacity] = useState(2);
  const navigationAction = params => {
    props.navigation.navigate('MatchesScreen', {name: 'avvv'});
    //navigation.navigate("ChartScreen", {name: 'Jane'});
  };
  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: 'white'}]}>
      <View
        style={{
          width: windowWidth - 80,
          // backgroundColor: 'pink',
          alignSelf: 'center',
          height: '50%',
          marginTop: 40,
        }}>
        <View
          style={{
            alignSelf: 'flex-end',
            // backgroundColor:'gray',
            width: '70%',
            height: '70%',
            position: 'absolute',
            top: 0,
            right: 0,
            shadowOffset: {width: 0, height: 15},
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 10,
            // alignSelf: 'center',
            // backgroundColor: 'orange',
          }}>
          <View
            style={{
              alignSelf: 'flex-end',
              // alignSelf: 'center',
              // backgroundColor: 'orange',
              // marginTop: 40,
              // width: 150,
              width: '90%',
              // height: 250,
              height: '100%',

              transform: [
                // { rotateX: "90deg" },
                {rotateZ: '10deg'},
              ],
              elevation:2,
            }}>
            <Image
              source={mainProfile}
              style={{height: '100%', width: '100%', borderRadius: 20}}></Image>
            <View
              style={{
                width: 60,
                height: 60,
                // alignItems: 'center',
                // justifyContent:'center',
                borderRadius: 360,
                backgroundColor: 'white',
                position: 'absolute',
                top: -20,
                left: -5,
              }}>
              <Image
                style={{position: 'absolute', top: '20%'}}
                source={love}></Image>
            </View>
          </View>
        </View>

        <View
          style={{
            alignSelf: 'flex-start',
            // backgroundColor:'red',
            width: '70%',
            height: '70%',
            position: 'absolute',
            top: '30%',
            left: 0,
            // alignSelf: 'center',
            // backgroundColor: 'orange',
          }}>
          <View
            style={{
              alignSelf: 'flex-start',
              alignSelf: 'center',
              // backgroundColor: 'purple',
              // marginTop: -100,
              // width: 150,
              height: 250,
              width: '90%',
              height: '100%',

              transform: [
                // { rotateX: "90deg" },
                {rotateZ: '-10deg'},
              ],
              shadowOffset: {width: 0, height: 15},
              shadowColor: 'black',
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation:1,
            }}>
            <Image
              source={photo}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 20,
              }}></Image>
            <View
              style={{
                width: 60,
                height: 60,
                // alignItems: 'center',
                // justifyContent:'center',
                borderRadius: 360,
                backgroundColor: 'white',
                position: 'absolute',
                bottom: -20,
                left: -5,
              }}>
              <Image
                style={{position: 'absolute', top: '20%'}}
                source={love}></Image>
            </View>
          </View>
        </View>
      </View>
      {/* iis a match text */}
      <Text numberOfLines={1} adjustsFontSizeToFit style={[styles.matchHeading]}>It’s a match, Jake!</Text>
      <Text  numberOfLines={1} adjustsFontSizeToFit style={[styles.matchSubHeading]}>
        Start a conversation now with each other
      </Text>
      <View style = {{marginLeft:40,marginRight:40,marginTop:20,}}>
      <ButtonWithBg
        path="ProfileDetails1"
        active="true"
        text="Say hello"
       
        btnAction={navigationAction}
        ></ButtonWithBg>
        
      </View>
      <View style = {{marginLeft:40,marginRight:40,marginTop:20,}}>
      <ButtonWithBg
        path="ProfileDetails1"
        active="true"
        text="Keep swiping"
       
        btnAction={navigationAction}
        ></ButtonWithBg>
        
      </View>
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  matchHeading: {
    marginTop: 40,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 40,
    color: '#FFC700',
    fontWeight: 'bold',
  },
  matchSubHeading: {
    marginTop: 10,
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
    fontSize: 16,
    color: 'black',
  },
});

export default ItsAMatchScreen;
