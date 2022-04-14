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
import TabTwoScreen from './testScreen';
const card = require('../assets/card.png');

var indeicator = require('../assets/indicator.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const arrow = require('../assets/arrow.png');
const setting = require('../assets/setting.png');
const photo = require('../assets/girl.png');
const mainProfile = require('../assets/mainProfile.png');
const cross = require('../assets/cross.png');
const star = require('../assets/star.png');
const heart = require('../assets/heart.png');
const roundContainer = require('../assets/roundContainer.png');
const WhiteContainer = require('../assets/whiteContainer.png');
const message = require('../assets/message.png');
const match = require('../assets/match.png');
const grayHeart = require('../assets/grayHeart.png');
const dot = require('../assets/dot.png');
const people = require('../assets/people.png');

//  the screen component
const MatchProfileScreen = props => {
  return (
    <View style={[{flex: 1, backgroundColor: 'white'}]}>
      {/* image body */}
      <View style={{alignItems: 'center', marginTop: 0}}>
        <Image style={{width: '100%'}} source={photo}></Image>
      </View>
      <ImageBackground source={card} resizeMode="stretch" style={[styles.card]}>
      <View style={styles.selectionRow}>
            <TouchableOpacity>
              <View style={styles.cross}>
                <Image source={cross}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{marginTop: 15}}>
                    <Image source={roundContainer}></Image>
                    <Image style={{ position: 'absolute',alignSelf: 'center',top: '25%',}}
                    source={heart}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.star}>
                <Image source={star} />
              </View>
            </TouchableOpacity>
          </View>

        <ScrollView style={[{flex: 1, marginTop: 20}]}>
          <Text>Jessica Parker, 23 </Text>
        
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
    selectionRow:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 40,
        marginRight: 40,
        marginTop:-60,
      //   backgroundColor: 'pink',
      },
      cross:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 360,
        width: 70,
        height: 70,
      },
      star:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 360,
        width: 70,
        height: 70,
      },
  card: {
    top: -50,
    flex: 1,
    marginTop: 20,
    height: 1000,
    // height:windowHeight,
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // position: 'absolute',
  },
  BackGrounimage: {
    alignItems: 'center',
    backgroundColor: 'pink',
    alignSelf: 'center',
    width: '80%',
  },
});

export default MatchProfileScreen;
