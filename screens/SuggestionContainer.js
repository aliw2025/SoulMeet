import React, {useState} from 'react';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
import {BlurView} from '@react-native-community/blur';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SuggestionScreen from './SuggestionScreen';
import  MatchProfileScreen from './MatchProfileScreen'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  FlatList,
  Image,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Button,
  ImageBackground,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const photo = require('../assets/girl.png');
const love = require('../assets/love.png');
const black = require('../assets/black.png');
const attachment = require('../assets/setting.png');
const whiteCross = require('../assets/whiteCross.png');
const whiteheart = require('../assets/whiteHeart.png');
const card = require('../assets/card.png');
const indicator = require('../assets/indicator.png');

const mainProfile = require('../assets/mainProfile.png');
const mainProfile2 = require('../assets/redhaird.png');
const search = require('../assets/search.png');
const arrow = require('../assets/arrrow.png');

var images = [];
    
const Stack = createNativeStackNavigator();

const SuggestionStack = (props) => {
  var matchType = props.matchType;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SuggestionScreen" initialParams={{ matchType: matchType }} component={SuggestionScreen} />
      <Stack.Screen name="MatchProfileScreen" component={MatchProfileScreen} />
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  borderLine: {
    width: '75%',
    height: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#E8E6EA',
  },

  dpImage: {
    width: 120,
    height: 120,
    borderRadius: 360,
  },
  messageDp: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: 360,
    marginLeft: 5,
    marginTop: '10%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backBtn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#E8E6EA',
    borderWidth: 1,
  },

  nameHeading: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});


export default SuggestionStack;
