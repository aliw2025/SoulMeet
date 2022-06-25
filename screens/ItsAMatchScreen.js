import React, {useState,useEffect} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const photo = require('../assets/girl.png');
const love = require('../assets/love.png');
const mainProfile = require('../assets/mainProfile.png');

//  the screen component
const ItsAMatchScreen = props => {
 // logged in user Data
 const [fname, setFname] = useState(undefined);
 const [mname, setMname] = useState(undefined);
 const [lname, setLname] = useState(undefined);
 const [age,setAge] = useState(undefined);
 const [usrData, setUsrData] = useState(undefined);
 const [profileImg, setProfileImg] = useState(undefined);
 const [dp, setDp] = useState(undefined);

console.log("fdfdfdfdd");
console.log(props.route.params.otherUser);
console.log(props.route.params);

 // other usre Data
 const [otherUser ,setOtherUser] = useState(props.route.params.otherUser);
 const [fname2, setFname2] = useState(undefined);
 const [mname2, setMname2] = useState(undefined);
 const [lname2, setLname2] = useState(undefined);
 const [age2,setAge2] = useState(undefined);
 const [dp2, setDp2] = useState(undefined);
  function updateOtherUserData (data){
    if (data) {
      setFname2(data.fname);
      setMname2(data.mname);
      setLname2(data.lname);
      setAge2(data.age);
      setDp2(data.dp);
     
    } else {
      console.log('error');
    }
  }

  function updateData(data) { 
    if (data) {
      setUsrData(data);
      setFname(data.fname);
      setMname(data.mname);
      setLname(data.lname);
      setAge(data.age);
      setDp(data.dp);

    } else {

      console.log('error');
    }
  }

  var data;
  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        if(documentSnapshot){
          data = documentSnapshot.data();
          console.log('User data recived ');
          updateData(data);
        }else{
          console.log('error in reciving data');
        }
      });
    return () => subscriber();
  }, []);

  useEffect(() => {
    var data2;
    const subscriber = firestore()
      .collection('users')
      .doc(otherUser.id)
      .onSnapshot(documentSnapshot => {
        if(documentSnapshot){
          data2= documentSnapshot.data();
          console.log('Other user data recived ');
          updateOtherUserData(data2);
          // updateData(data);
        }else{
          console.log('error in reciving data');
        }
      });
    return () => subscriber();
  }, []);

  const navigationAction = params => {
    props.navigation.navigate('Messages', {activeScreen: 'Messages',reciver:otherUser.id});
  };

  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: 'white'}]}>
      <View
        style={{
          width: windowWidth - 80,
          alignSelf: 'center',
          height: '50%',
          marginTop: 40,
        }}>
        <View
          style={{
            alignSelf: 'flex-end',

            width: '70%',
            height: '70%',
            position: 'absolute',
            top: 0,
            right: 0,
            shadowOffset: {width: 0, height: 15},
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 10,
          }}>
          <View
            style={{
              alignSelf: 'flex-end',
              width: '90%',
              height: '100%',
              transform: [
                // { rotateX: "90deg" },
                {rotateZ: '10deg'},
              ],
              elevation: 2,
            }}>
            <Image
              source={{uri:dp2}}
              style={{height: '100%', width: '100%', borderRadius: 20}}></Image>
            <View
              style={{
                width: 60,
                height: 60,
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
            width: '70%',
            height: '70%',
            position: 'absolute',
            top: '30%',
            left: 0,
          }}>
          <View
            style={{
              alignSelf: 'flex-start',
              alignSelf: 'center',
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
              elevation: 1,
            }}>
            <Image
              source={{uri:dp}}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 20,
              }}></Image>
            <View
              style={{
                width: 60,
                height: 60,
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
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[styles.matchHeading]}>
        It’s a match, {fname}!
      </Text>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[styles.matchSubHeading]}>
        Start a conversation now with each other
      </Text>
      <View style={{marginLeft: 40, marginRight: 40, marginTop: 20}}>
        <ButtonWithBg
          path="ProfileDetails1"
          active="true"
          text="Say hello"
          btnAction={navigationAction}></ButtonWithBg>
      </View>
      <View style={{marginLeft: 40, marginRight: 40, marginTop: 20}}>
        <ButtonWithBg
          path="ProfileDetails1"
          active="true"
          text="Keep swiping"
          btnAction={navigationAction}></ButtonWithBg>
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
