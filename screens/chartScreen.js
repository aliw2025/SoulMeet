import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

const ChartScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView style={[{flex: 1}]}>
      <TouchableOpacity>
            <View style={[styles.backBtn]}>
              <Text style = {[{color:'#FFC700',fontSize:20,fontWeight:'bold'}]}>{'<'}</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.mainPage}>
       
          <View style={[styles.container]}>
            <Text style={[styles.heading]}>Chart Calculator</Text>
          </View>

          <ImageBackground
            source={card}
            resizeMode="stretch"
            style={[styles.card]}>
            <ScrollView style={[{flex: 1, marginTop: 20}]}>
              <InfoBox heading="Current Name" bodyText="Waseem ali"></InfoBox>
              <InfoBox
                heading="Full Name at Birth"
                bodyText="Waseem ali khan"></InfoBox>
              <InfoBox
                heading="Date of Birth"
                bodyText="October 30,1996"></InfoBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Life Path Number"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Birthday Number"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                heading="Expression / Destiny"
                value="15/6"></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                heading="Minor Expression / Destiny"
                value="15/6"></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                heading="Soul Urge / Heart’s Desire"
                value="15/6"></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                heading="Minor Soul Urge / Heart’s Desire"
                value="15/6"></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                heading="Personality"
                value="15/6"></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                heading="Minor Personality"
                value="15/6"></ValueBox>
              <View
                style={[
                  {backgroundColor: '#00000033', width: '60%', height: 1},
                ]}></View>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Maturity"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Attitude"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Life Path/Expression
                Bridge Number"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Heart’s Desire/ Personality
                Bridge, Planes of Expression"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Rational Thought Number"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Balance Number"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Subconcious Self Number"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Karmic Lesson"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Hidden Passion"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Hereditary Name"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Mental Plane of Expression"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Intutive Plane of Expression"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Emotional Plane of Expression"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Corenerstone"
                value="30/3"></ValueBox>
              <Text style={styles.scrollViewHeading}>
               
                Chapters of your LIfe
              </Text>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="First Period Cycle
                (From Birth to Age 33)"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Second Period Cycle
                (From Age 34 to Age 60)"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Third Period Cycle
                (From Age 61 and on)"
                value="30/3"></ValueBox>
              <Text style={styles.scrollViewHeading}>Seasons of Your Life</Text>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="First Pinnacle Number
                (From Birth to age 33)"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Second Pinnacle Number
                (From age 34 to age 42)"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Third Pinnacle Number
                (From age 43 to age 51)"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Fourth Pinnacle Number
                (From age 53 and on)"
                value="30/3"></ValueBox>
              <Text style={styles.scrollViewHeading}>
                Your Challenges in Life
              </Text>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="First Challenge Number
                (From birth to age 33)"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Second Challenge Number
                (From age 34 to age 42)"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Third Challenge Number
                (From agr 43 to age 51)"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Fourth Challenge Number
                (From age 52 and on)"
                value="30/3"></ValueBox>
              <View style={[{marginLeft: 40,marginTop:40,marginBottom:30}]}>
                <ButtonWithBg
                  path="ProfileDetails1"
                  active="true"
                  text="Next"
                  navigation={navigation}></ButtonWithBg>
              </View>
            </ScrollView>
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
    borderRadius:10,
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

export default ChartScreen;
