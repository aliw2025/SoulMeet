import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from "../components/ResultBox";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  TouchableOpacity,
  View,
  Button,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

const image = require('../assets/grad.png');
const card = require('../assets/card.png');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//  the screen component
const SummaryScreen = props => {
  // console.log(props.route.params);
  // var day = props.route.params.day;
  // var month = props.route.params.month;
  // var year = props.route.params.year;
  var day = 20;
  var month = 2;
  var year = 1996;
  var stval = '';

  // [lpnText, selpnText] = useState(lpnTextText);
  // [bn, setBn] = useState(bnText);
var box2 = 40;
  var indeicator = require('../assets/indicator.png');
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView style={[{flex: 1}]}>
        <TouchableOpacity>
          <View style={[styles.backBtn]}>
            <Text
              style={[{color: '#FFC700', fontSize: 20, fontWeight: 'bold'}]}>
              {'<'}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.mainPage}>
          <ImageBackground
            source={card}
            resizeMode="stretch"
            style={[styles.card]}>
            <Image
              style={{alignSelf: 'center', marginTop: -5}}
              source={indeicator}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Percentage of Your Numbers
            </Text>
            <View style = {{height:80,marginTop:10}}>
              <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:40,marginRight:40}}>
              <ResultBox haveHeading={true} heading={1} bodyText="15%" width={33}></ResultBox>
              <ResultBox  haveHeading={true}  heading={2} bodyText="15%" width={33}></ResultBox>
              <ResultBox  haveHeading={true}  heading={3} bodyText="15%" width={33}></ResultBox>
              <ResultBox  haveHeading={true}  heading={4} bodyText="15%" width={33}></ResultBox>
              <ResultBox  haveHeading={true}  heading={5} bodyText="15%" width={33}></ResultBox>
              <ResultBox  haveHeading={true}  heading={6} bodyText="15%" width={33}></ResultBox>
              <ResultBox  haveHeading={true}  heading={7} bodyText="15%" width={33}></ResultBox>
              <ResultBox haveHeading={true}  heading={8} bodyText="15%" width={33}></ResultBox>
              <ResultBox haveHeading={true}  heading={9 } bodyText="15%" width={33}></ResultBox>
              </View>
           </View>
           
           
           <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
             Relationship Compatibility
            </Text>
            <View style = {{height:80,marginTop:20}}>
              <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:40,marginRight:40}}>
              <ResultBox height={box2} haveHeading={false} heading={1} bodyText="1" width={33}></ResultBox>
              <ResultBox height={box2} haveHeading={false}  heading={2} bodyText="2" width={33}></ResultBox>
              <ResultBox height={box2} haveHeading={false}  heading={3} bodyText="3" width={33}></ResultBox>
              <ResultBox height={box2} haveHeading={false}  heading={4} bodyText="4" width={33}></ResultBox>
              <ResultBox height={box2} haveHeading={false}  heading={5} bodyText="5" width={33}></ResultBox>
              <ResultBox height={box2} haveHeading={false}  heading={6} bodyText="6" width={33}></ResultBox>
              <ResultBox height={box2} haveHeading={false}  heading={7} bodyText="7" width={33}></ResultBox>
              <ResultBox height={box2} haveHeading={false}  heading={8} bodyText="8" width={33}></ResultBox>
              <ResultBox height={box2} haveHeading={false}  heading={9 } bodyText="9" width={33}></ResultBox>
              </View>
           </View>
           <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft:40,
                marginRight:40,
              }}>
              Yearly Forecast Cycles at 24 years of age - 2022
            </Text>
            <View style = {{height:80,marginTop:10}}>
              <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:40,marginRight:40}}>
              <ResultBox haveHeading={true} heading='Physical ' bodyText="15%" width={74}></ResultBox>
              <ResultBox  haveHeading={true} heading='Physical ' bodyText="15%" width={74}></ResultBox>
              <ResultBox  haveHeading={true} heading='Physical ' bodyText="15%" width={74}></ResultBox>
              <ResultBox  haveHeading={true}  heading='Physical ' bodyText="15%" width={74}></ResultBox>

              </View>
           </View>
           <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft:40,
                marginRight:40,
              }}>
             Yearly/Monthly/Daily Personal Cycles
            </Text>
            <View style = {{height:80,marginTop:10}}>
              <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:40,marginRight:40}}>
              <ResultBox haveHeading={true} heading='Physical ' bodyText="15%" width={99}></ResultBox>
              <ResultBox  haveHeading={true} heading='Physical ' bodyText="15%" width={99}></ResultBox>
              <ResultBox  haveHeading={true} heading='Physical ' bodyText="15%" width={99}></ResultBox>
              

              </View>
           </View>
            <View style={[{flex: 1, marginTop: 20}]}>
              <View style={[{marginLeft: 40, marginTop: 40, marginBottom: 30}]}>
                <ButtonWithBg
                  path="ProfileDetails1"
                  active="true"
                  text="Next"></ButtonWithBg>
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backBtn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 40,
    left: 40,
  },
  scrollViewHeading: {
    marginLeft: 40,
    fontSize: 14,
    fontWeight: '700',
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
    width: windowWidth - 80,
    marginLeft: 40,
    marginRight: 40,
  },
  mainPage: {
    marginTop: 120,
    flex: 1,
  },
  heading: {
    marginTop: windowHeight * 0.12,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SummaryScreen;
