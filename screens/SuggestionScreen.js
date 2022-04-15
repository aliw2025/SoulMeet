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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const arrow = require('../assets/arrow.png');
const setting = require('../assets/setting.png');
const photo = require('../assets/photo.png');
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
const SuggestionScreen = props => {
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
  const [shadowRadius, setShadowRadius] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(2);
  const navigationAction = params => {
    
    props.navigation.navigate('ShadowTest', {name: 'avvv'});
    //navigation.navigate("ChartScreen", {name: 'Jane'});
  };
  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: 'white'}]}>
      {/* top row sectoin */}
      <View style={styles.topRow}>
        <View>
          <TouchableOpacity>
            <View style={[styles.backBtn]}>
              <Image source={arrow}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            Suggested
          </Text>
          <Text style={{fontSize: 14, color: 'black'}}>Twin flame match</Text>
        </View>
        <View>
          <TouchableOpacity>
            <View style={[styles.backBtn]}>
              <Image source={setting}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* image body */}
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Image style={{opacity: 0.2}} source={photo}></Image>
        <View style={styles.profilePicBox}>
          <Image
            style={{alignSelf: 'center'}}
            borderRadius={20}
            width={windowWidth - 80}
            source={mainProfile}></Image>
          <Text style={styles.nameHeading}>Jessica Parker, 23</Text>
          <Text
            style={[
              styles.nameHeading,
              {top: '10%', fontSize: 15, marginTop: 5, fontWeight: 'normal'},
            ]}>
            Professional model
          </Text>
          <View style={styles.transparentCard}></View>
          <View style={styles.textArea}>
            {/* first row */}
            <View style={styles.row}>
              <View style={styles.firstFeild}>
                <Text
                  style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                  Life Path
                </Text>
              </View>
              <View style={styles.secFeild}>
                <Text style={styles.textOrange}>12/3</Text>
              </View>
              <View style={styles.thirdFeild}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>16/7</Text>
              </View>
            </View>
            {/* 2nd row */}
            <View style={[styles.row,{marginTop:-7}]}>
              <View style={styles.firstFeild}>
                <Text
                  style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                  Birthday
                </Text>
              </View>
              <View style={[styles.secFeild,{borderRadius:0,}]}>
                <Text style={styles.textOrange}>12/3</Text>
              </View>
              <View style={styles.thirdFeild}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>16/7</Text>
              </View>
            </View>
            {/* 3rd row */}
            <View style={[styles.row,{marginTop:-7}]}>
              <View style={styles.firstFeild}>
                <Text
                  style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                  Expressoin/Destiny
                </Text>
              </View>
              <View style={[styles.secFeild,{borderRadius:0,}]}>
                <Text style={styles.textOrange}>12/3</Text>
              </View>
              <View style={styles.thirdFeild}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>16/7</Text>
              </View>
            </View>
            {/* fourth row */}
            <View style={[styles.row,{marginTop:-7}]}>
              <View style={styles.firstFeild}>
                <Text
                  style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                 Soul Urge/Heart's Desire
                </Text>
              </View>
              <View style={[styles.secFeild,{borderRadius:0,}]}>
                <Text style={styles.textOrange}>12/3</Text>
              </View>
              <View style={styles.thirdFeild}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>16/7</Text>
              </View>
            </View>
            {/* fifthrow */}
            <View style={[styles.row,{marginTop:-9}]}>
              <View style={styles.firstFeild}>
                <Text
                  style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                 Personality
                </Text>
              </View>
              <View style={styles.secFeild}>
                <Text style={styles.textOrange}>12/3</Text>
              </View>
              <View style={styles.thirdFeild}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>16/7</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* reaction buttons */}
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
          marginLeft: 40,
          marginRight: 40,
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 360,
              width: 70,
              height: 70,
              // shadowOffset: {
              //   // width: shadowOffsetWidth,
              //   width:10,
              //   // height: -shadowOffsetHeight
              //   height:-1,
              // },
              // // shadowOpacity:shadowOpacity,
              // shadowOpacity:0.9,
              // shadowRadius:shadowRadius,
              // shadowRadius:20,
              elevation:0.9 
            }}>
            <Image
              // style={{position: 'absolute', alignSelf: 'center',}}
              source={cross}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{marginTop: 15}}>
            <Image source={roundContainer}></Image>
            <Image
              style={{position: 'absolute', alignSelf: 'center', top: '25%'}}
              source={heart}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              shadowColor: 'black',
              shadowRadius: 20,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 360,
              width: 70,
              height: 70,
              elevation:1
            }}>
            {/* <Image source={WhiteContainer}></Image> */}
            <Image
              // style={{position: 'absolute', alignSelf: 'center',}}
              source={star}
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* bottom bar */}
      <View
        style={{
          position:'absolute',
          bottom:0,
          paddingTop: 10,
          paddingBottom: 20,
          backgroundColor: '#F3F3F3',
          width: '100%',
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            marginLeft: 40,
            marginRight: 40,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigationAction()}>
            <Image source={match}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image source={grayHeart}></Image>
              <Image
                style={{position: 'absolute', top: -4, right: -4}}
                source={dot}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={message}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={people}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textOrange: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  firstFeild: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 0,
    // backgroundColor: 'pink',
  },
  secFeild: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#FFC700',
  },
  thirdFeild: {
    width: 40,
    height: 40,
    marginLeft: 15,
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },
  row: {
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  textArea: {
    position: 'absolute',
    top: '55%',
    width: '100%',
    // backgroundColor: 'purple',
    // marginLeft:20,
    // marginRight:20,
  },
  transparentCard: {
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.8,
    top: '50%',
    bottom: 0,
    width: '100%',
    borderRadius: 20,
  },
  profilePicBox: {
    borderRadius: 20,
    backgroundColor: 'red',
    position: 'absolute',
    top: 20,
    width: windowWidth - 80,
    height: '100%',
    backgroundColor: 'purple',
  },
  nameHeading: {
    marginLeft: 20,
    fontSize: 24,
    position: 'absolute',
    top: '5%',
    color: 'white',
    fontWeight: 'bold',
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

export default SuggestionScreen;
