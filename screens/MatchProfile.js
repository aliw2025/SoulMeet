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
const attachment = require('../assets/attachment.png');
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
var text = [];
for (var i = 0; i < 100; i++) {
  var c = 'this is text';
  c = c.concat(': ', i.toString());
  text.push(c);
}
//  the screen component
const MatchProfileScreen = props => {
  return (
    <View style={[{flex: 1, backgroundColor: 'white'}]}>
      {/* image body */}
      <View style={{alignItems: 'center', marginTop: 0}}>
        <Image style={{width: '100%'}} source={photo}></Image>
      </View>
      <ImageBackground source={card} resizeMode="stretch" style={[styles.card]}>
        <View style={[styles.selectionRow]}>
          {/* cross */}
          <TouchableOpacity>
            <View style={[styles.roundBtn]}>
              <Image source={cross} />
            </View>
          </TouchableOpacity>
          {/* love */}
          <TouchableOpacity>
            <View style={{marginTop: 15}}>
              <Image source={roundContainer}></Image>
              <Image
                style={{position: 'absolute', alignSelf: 'center', top: '25%'}}
                source={heart}
              />
            </View>
          </TouchableOpacity>
          {/* star */}
          <TouchableOpacity>
            <View style={[styles.roundBtn]}>
              <Image source={star} />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={[{flex: 1, marginTop: 20}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 40,
              marginRight: 40,
            }}>
            <View>
              <Text style={styles.nameHeading}>Jessica Parker, 23</Text>
              <Text
                style={[
                  styles.nameHeading,
                  {fontSize: 15, marginTop: 5, fontWeight: 'normal'},
                ]}>
                Professional model
              </Text>
            </View>
            <TouchableOpacity>
              <View style={[styles.backBtn]}>
                <Image source={attachment}></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tableCard}>
            {/* heading area */}
            <View style={styles.orangeStrip}>
              <View style={[styles.heading2]}>
                <Text style={styles.headingText}>Mariah Carey</Text>
                <Text style={styles.headingText}>27-Mar-1970</Text>
              </View>
              <View style={[styles.heading2, {backgroundColor: '#F27121'}]}>
                <Text style={styles.headingText}>Mariah Carey</Text>
                <Text style={styles.headingText}>27-Mar-1970</Text>
              </View>
              <View style={[styles.heading2]}>
                <Text style={styles.headingText}>Compatibility</Text>
              </View>
            </View>
            {/* body area */}
            {/* row 1 */}
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.headingText}>Compatibility</Text>
                <View style = {{position:'absolute',bottom:0,width:'80%',backgroundColor:'#E8E6EA',height:1}}></View>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.headingText}>Compatibility</Text>
                <View style = {{position:'absolute',bottom:0,width:'80%',backgroundColor:'#E8E6EA',height:1}}></View>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.headingText}>Compatibility</Text>
                <View style = {{position:'absolute',bottom:0,width:'80%',backgroundColor:'#E8E6EA',height:1}}></View>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.headingText}>Compatibility</Text>
                <View style = {{position:'absolute',bottom:0,width:'80%',backgroundColor:'#E8E6EA',height:1}}></View>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.headingText}>Compatibility</Text>
                <View style = {{position:'absolute',bottom:0,width:'80%',backgroundColor:'#E8E6EA',height:1}}></View>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.headingText}>Compatibility</Text>
                <View style = {{position:'absolute',bottom:0,width:'80%',backgroundColor:'#E8E6EA',height:1}}></View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  tableCell: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRightWidth:1,
    borderColor:'#E8E6EA'
    // backgroundColor:'purple'
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    // backgroundColor:'pink',
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  heading2: {
    width: '33%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableCard: {
    width: windowWidth - 80,
    marginLeft: 40,
    height: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    marginTop: 20,
  },
  orangeStrip: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'center',
    backgroundColor: '#FFC700',
    borderRadius: 15,
  },
  backBtn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    // position: 'absolute',
  },
  nameHeading: {
    fontSize: 24,
    // marginLeft: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  selectionRow: {
    // backgroundColor:"pink",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -60,
    marginLeft: 40,
    marginRight: 40,
  },
  roundBtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
    width: 80,
    height: 80,
    elevation: 1,
  },
  card: {
    top: -50,
    flex: 1,
    marginTop: 20,
    height: windowHeight,
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
    borderColor: '#E8E6EA',
    borderWidth: 1,
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
