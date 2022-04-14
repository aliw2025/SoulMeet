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
const grayHeart = require('../assets/grayHeart.png')
const dot = require('../assets/dot.png')
const people = require('../assets/people.png')



//  the screen component
const SuggestionScreen = props => {

  const navigationAction = params => {
    console.log('chal na bhai');
    props.navigation.navigate("MatchProfileScreen", {name:'avvv'});
     //navigation.navigate("ChartScreen", {name: 'Jane'});
   };
  return (
    <SafeAreaView style={[{flex: 1,backgroundColor:"white"}]}>
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
        <Text style={{fontSize: 14, color: 'black'}}>
          Twin flame match
        </Text>
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
        <View style={{position: 'absolute', top: 20,width:windowWidth-80,alignItems:'center',}}>
          <Image source={mainProfile}></Image>
          <Text style = {styles.nameHeading}>Jessica Parker, 23</Text>
          <View style={styles.profileCard}></View>
          <View style={{position: 'absolute',top: '55%',}}>
            <View style={styles.textView}>
              <Text style={styles.firstFeild}>Life Path</Text>
              <View style={styles.secFeild}>
                <Text style={styles.textOrange}>12/3</Text>
              </View>
              <Text style={styles.thirdFeild}>16/7</Text>
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
         <View style = {{backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:360,width:70,height:70}} >

          <Image
            // style={{position: 'absolute', alignSelf: 'center',}}
            source={cross}
          />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style = {{marginTop:15,}}>
          <Image source={roundContainer}></Image>
          <Image
            style={{position: 'absolute', alignSelf: 'center', top: '25%'}}
            source={heart}
          />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style = {{shadowColor:'black',shadowRadius:20,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:360,width:70,height:70}} >
          {/* <Image source={WhiteContainer}></Image> */}
          <Image
            // style={{position: 'absolute', alignSelf: 'center',}}
            source={star}
          />
        </View>
        </TouchableOpacity>
       
      </View>
      {/* bottom bar */}
      <View style = {{paddingTop:10,paddingBottom:20,backgroundColor:'#F3F3F3',width:'100%'}}>
        <View style={{justifyContent:'space-between',marginLeft:40,marginRight:40,flexDirection:'row'}}>
        <TouchableOpacity onPress ={()=>navigationAction()}>
          <Image source = {match}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
            <Image source = {grayHeart}></Image>
            <Image style = {{position:'absolute',top:-4,right:-4}} source = {dot}></Image>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source = {message}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source = {people}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

  textOrange:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 10,
    padding: 5,
    color: 'white',
  },
  firstFeild:{
    paddingTop: 15,
    paddingBottom: 10,
    padding: 5,
    width: '60%',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 0,
  },
  secFeild:{borderRadius: 10, backgroundColor: '#FFC700'},
  thirdFeild:{
    paddingTop: 15,
    paddingBottom: 10,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
  textView:{
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    marginLefmarginTop: 10,
  },
  profileCard:{
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.8,
    top: '50%',
    bottom: 0,
    width: '100%',
    borderRadius: 10,
  },
  nameHeading:{position:'absolute',top:'5%',color:'white',fontWeight:'bold',},
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
