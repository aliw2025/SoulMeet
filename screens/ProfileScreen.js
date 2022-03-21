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
const image = require('../assets/grad.png');
const card = require('../assets/card.png');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView style={[{flex: 1}]}>
        <View style={styles.mainPage}>
          <View style={[styles.container]}>
            <Text style={[styles.heading]}>Chart Calculator</Text>
          </View>
          {/* <Text style={[styles.container, {marginTop: 10}]}>
            Please enter your full name at birth exactly as it shows on your
            birth certificate. Do not include Jr, III, other suffix, or symbols.
          </Text> */}
          <ImageBackground
            source={card}
            resizeMode="stretch"
            style={[styles.card]}>
            <ScrollView style={[{flex: 1, marginTop: 20}]}>
              <View
                style={[
                  {width: windowWidth - 80, marginLeft: 40, marginRight: 40,zIndex:1,height:100,},
                ]}>
                <View style={[styles.textBg]}>
                  
                </View>
                {/* orange box */}
                <View
                  style={[
                    {
                      backgroundColor: '#FFC700',
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                    },
                  ]}>
                  {/* orange box hreading */}
                  <Text
                    style={[
                      {fontWeight: 'bold', color: 'white', fontSize: 16},
                    ]}>
                    current Name
                  </Text>
                </View>
                <View style = {[{width:'100%',justifyContent:'center'}]}>
                <Text style={[{fontSize: 20,backgroundColor:'yellow', color: 'gray', marginLeft: 15}]}>
                    Email
                  </Text>
                </View>
                
              </View>

              <View
                style={[
                  {width: '100%', height: 200, backgroundColor: 'green'},
                ]}></View>
              <View
                style={[
                  {width: '100%', height: 200, backgroundColor: 'blue'},
                ]}></View>
              <View
                style={[
                  {width: '100%', height: 200, backgroundColor: 'green'},
                ]}></View>
              <View
                style={[
                  {width: '100%', height: 200, backgroundColor: 'blue'},
                ]}></View>
              <View
                style={[
                  {width: '100%', height: 200, backgroundColor: 'green'},
                ]}></View>
              <View
                style={[
                  {width: '100%', height: 200, backgroundColor: 'blue'},
                ]}></View>
            </ScrollView>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  textBg: {
    top: 15,
    position: 'absolute',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    width: windowWidth - 80,
    height: 60,
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    marginTop: 20,
    // height:windowHeight,
    width: '100%',
  },
  BackGrounimage: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: windowWidth * 0.8,
    // flex:1
    // width:100,
  },
  mainPage: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    textAlign: 'left',
    marginTop: 100,
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
