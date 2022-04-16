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
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const arrow = require('../assets/arrow.png');
// const setting = require('../assets/setting.png');
// const photo = require('../assets/photo.png');
// const mainProfile = require('../assets/mainProfile.png');
// const cross = require('../assets/cross.png');
// const star = require('../assets/star.png');
// const heart = require('../assets/heart.png');
// const roundContainer = require('../assets/roundContainer.png');
// const WhiteContainer = require('../assets/whiteContainer.png');
// const message = require('../assets/message.png');
// const match = require('../assets/match.png');
// const grayHeart = require('../assets/grayHeart.png');
// const dot = require('../assets/dot.png');
// const people = require('../assets/people.png');

//  the screen component
const ItsAMatchScreen = props => {
  //   const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
  //   const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
  //   const [shadowRadius, setShadowRadius] = useState(0);
  //   const [shadowOpacity, setShadowOpacity] = useState(2);
  const navigationAction = params => {
    props.navigation.navigate('MatchProfileScreen', {name: 'avvv'});
    //navigation.navigate("ChartScreen", {name: 'Jane'});
  };
  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: 'white'}]}>
    <View style = {{width:'80%',alignSelf:'center'}}>  
    <View
        style={{
          alignSelf: 'flex-end',
          backgroundColor: 'pink',
          marginTop:40,
          width: 200,
          height: 300,
          transform: [
            // { rotateX: "90deg" },
            { rotateZ: "10deg" }
          ],
        }}></View>
        <View
        style={{
          alignSelf: 'flex-start',
          backgroundColor: 'purple',
          marginTop:-150,
          width: 200,
          height: 300,
          transform: [
            // { rotateX: "90deg" },
            { rotateZ: "-10deg" }
          ],
        }}></View>
    </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ItsAMatchScreen;
