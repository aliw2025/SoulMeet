import React, {useState, useEffect} from 'react';
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
  FlatList,
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
const message = require('../assets/messages.png');
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
  // const [otherUsrData, setOtherUsrData] = [props.route.params.usrData];
  const [usrData, setUsrData] = useState(undefined);
  const [lifePathNumber, setLifePathNumber] = useState(undefined);
  const [birthDayNumber, setBirthDayNumber] = useState(undefined);
  const [expressionDestiny, setExpressionDestiny] = useState(undefined);
  const [soulUrge, setSoulUrge] = useState(undefined);
  const [personality, setPersonality] = useState(undefined);
  // console.log("loging props");
  // console.log(props);
  var matchType = props.route.params.matchType;
  const [users, setUsers] = useState(undefined);
  const usersArr = [];
  function updateData(data) {
    
    if (data) {
      setUsrData(data);
      setFname(data.fname);
      setMname(data.mname);
      setLname(data.lname);
    } else {
      console.log('error');
    }
  }
  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        var data;
        if (documentSnapshot) {
          data = documentSnapshot.data();
          updateData(data);
        } else {
          console.log('error in reciving data');
        }
      });
    return () => subscriber();
  }, []);
  var items = [
    [3, 2, 3, 1, 3, 2, 3, 1, 3],
    [2, 3, 2, 3, 1, 3, 1, 3, 2],
    [2, 2, 3, 1, 2, 3, 1, 1, 3],
    [1, 3, 1, 3, 1, 3, 2, 3, 1],
    [3, 1, 2, 1, 3, 1, 3, 2, 2],
    [2, 3, 3, 3, 1, 3, 1, 2, 3],
    [3, 1, 1, 2, 3, 1, 3, 2, 2],
    [1, 3, 1, 3, 2, 2, 2, 3, 1],
    [2, 1, 3, 1, 2, 3, 2, 1, 3],
  ];
  function getNum(str) {
    var val = 0;
    var arr = str.split('/');
    if (arr.length == 0) {
      return arr[0];
    } else {
      return arr[1];
    }
  }
  useEffect(() => {
    console.log('mouting');
    var subs;
    let isMounted = true;
    const subscriber = firestore().collection('Users').onSnapshot(subs);

    if (usrData) {
      firestore()
        .collection('users')
        .get()
        .then(querySnapshot => {
          var i = 0;
          querySnapshot.forEach(documentSnapshot => {
            // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            var data = documentSnapshot.data();
            if (data.numbers != undefined) {
              // console.log(auth().currentUser.uid);
              if (documentSnapshot.id != auth().currentUser.uid) {
                if (matchType == 'twin') {
                  console.log('inside twin');
                  // // console.log(usrData);
                  // var lpu = usrData.numbers.lifePathNumber;
                  // var lpo = data.numbers.lifePathNumber

                  // var sou = usrData.numbers.soulUrge;
                  // var soo = data.numbers.soulUrge;

                  // var eu = usrData.numbers.birthDayNumber;
                  // var bo = data.numbers.birthDayNumber;

                  // var eu = usrData.numbers.expressionDestiny;
                  // var eo =data.numbers.expressionDestiny;

                  // var pu = usrData.numbers.personality;
                  // var po =data.numbers.personality;

                  // var au = usrData.numbers.attitude;
                  // var ao = data.numbers.attitude;

                  // if(lpu == lop && sou == soo) {

                  // }
                  // if(pu == lop && sou == soo && bu == bo){

                  // }
                  usersArr.push({id: i, data: documentSnapshot.data()});
                  i++;
                } else if (matchType == 'couple') {
                  console.log('inside couple');
                  console.log(getNum(usrData.numbers.lifePathNumber));
                  var lpu = usrData.numbers.lifePathNumber;
                  var lpo = data.numbers.lifePathNumber;
                  console.log(lpu);
                  console.log(lpo);
                  var n1 = getNum(lpu);
                  var n2 = getNum(lpo);
                  var arr = items[n1];
                  console.log(arr);
                  if (arr[n2] == 3) {
                    usersArr.push({id: i, data: documentSnapshot.data()});
                  }
                  i++;
                } else {
                  console.log('none');
                  usersArr.push({id: i, data: documentSnapshot.data()});
                }
              }
            }
          });
          if(isMounted)
          setUsers(usersArr);
        })
        .catch(function (error) {
          console.log(
            'There has been a problem with your fetch operation: ' +
              error.message,
          );
          // ADD THIS THROW error
          throw error;
        });
    }

    return () => {
      isMounted = false
      subscriber();
    };
  }, [usrData]);
  
  const [elevation, setElevation] = useState(1);
  const [shadowColor, setShadowColor] = useState('black');
  const [shadowColor2, setShadowColor2] = useState('black');
  function crossAction(params) {
    // setElevation(0);
    setShadowColor('white');
  }
  function starAction(params) {
    // setElevation(0);
    setShadowColor2('white');
  }
  function updateData(data) {
    console.log('updating data ');
    if (data) {
      setUsrData(data);
      setLifePathNumber(data.numbers.lifePathNumber);
      setBirthDayNumber(data.numbers.birthDayNumber);
      setExpressionDestiny(data.numbers.expressionDestiny);
      setSoulUrge(data.numbers.soulUrge);
      setPersonality(data.numbers.personality);
    } else {
      console.log('error');
    }
  }

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        var data;
        if (documentSnapshot) {
          data = documentSnapshot.data();
          console.log('User data recived ');
          updateData(data);
        } else {
          console.log('error in reciving data');
        }
      });
    return () => subscriber();
  }, []);

  const navigationAction = params => {
    console.log("before nav");
    console.log(params);
    props.navigation.navigate('MatchProfileScreen', {otherUser: params});

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
      <FlatList
        // data={imageList}
        data={users}
        pagingEnabled={true}
        numColumns={1}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableHighlight  underlayColor="clear" onPress = {()=>{
              
              navigationAction(item);
            }}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 10,
                width: windowWidth - 80,
                marginLeft: 40,
                marginRight: 40,
              }}>
              <Image
                style={{resizeMode: 'stretch', opacity: 0.2, height: '95%'}}
                source={photo}></Image>
              <View style={styles.profilePicBox}>
                <Image
                  style={{alignSelf: 'center', height: '100%'}}
                  borderRadius={20}
                  width={windowWidth - 80}
                  source={{uri: item.data.dp}}></Image>
                <Text style={styles.nameHeading}>
                  {item.data.fname} {item.data.lname}, {item.data.age}
                </Text>
                <Text
                  style={[
                    styles.nameHeading,
                    {
                      top: '10%',
                      fontSize: 15,
                      marginTop: 5,
                      fontWeight: 'normal',
                    },
                  ]}>
                  {/* Professional model */}
                </Text>
                <View style={styles.transparentCard}></View>
                <View style={styles.textArea}>
                  {/* first row */}
                  <View style={styles.row}>
                    <View style={styles.firstFeild}>
                      <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        Life Paths
                      </Text>
                    </View>
                    <View style={styles.secFeild}>
                      <Text style={styles.textOrange}>{lifePathNumber}</Text>
                    </View>
                    <View style={styles.thirdFeild}>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        {item.data.numbers.lifePathNumber}
                      </Text>
                    </View>
                  </View>
                  {/* 2nd row */}
                  <View style={[styles.row, {marginTop: -7}]}>
                    <View style={styles.firstFeild}>
                      <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        Birthday
                      </Text>
                    </View>
                    <View style={[styles.secFeild, {borderRadius: 0}]}>
                      <Text style={styles.textOrange}>{birthDayNumber}</Text>
                    </View>
                    <View style={styles.thirdFeild}>
                      <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{fontSize: 16, fontWeight: 'bold'}}>
                        {item.data.numbers.birthDayNumber}
                      </Text>
                    </View>
                  </View>
                  {/* 3rd row */}
                  <View style={[styles.row, {marginTop: -7}]}>
                    <View style={styles.firstFeild}>
                      <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        Expressoin/Destiny
                      </Text>
                    </View>
                    <View style={[styles.secFeild, {borderRadius: 0}]}>
                      <Text style={styles.textOrange}>{expressionDestiny}</Text>
                    </View>
                    <View style={styles.thirdFeild}>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        {item.data.numbers.expressionDestiny}
                      </Text>
                    </View>
                  </View>
                  {/* fourth row */}
                  <View style={[styles.row, {marginTop: -7}]}>
                    <View style={styles.firstFeild}>
                      <Text
                        adjustsFontSizeToFit
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        Soul Urge/Heart's Desire
                      </Text>
                    </View>
                    <View style={[styles.secFeild, {borderRadius: 0}]}>
                      <Text style={styles.textOrange}>{soulUrge}</Text>
                    </View>
                    <View style={styles.thirdFeild}>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        {item.data.numbers.soulUrge}
                      </Text>
                    </View>
                  </View>
                  {/* fifthrow */}
                  <View style={[styles.row, {marginTop: -9}]}>
                    <View style={styles.firstFeild}>
                      <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: 'bold',
                        }}>
                        Personality
                      </Text>
                    </View>
                    <View style={styles.secFeild}>
                      <Text style={styles.textOrange}>{personality}</Text>
                    </View>
                    <View style={styles.thirdFeild}>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        {item.data.numbers.personality}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            </TouchableHighlight>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* <FlatList
          // data={imageList}
          data = {users}
          pagingEnabled={true}
          numColumns={1}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            // console.log('item:' + item.id);
            return (
              
            );
          }}
          //  keyExtractor={(item, index) => index.toString()}
        /> */}
      {/* </View> */}
      {/* image body */}
        
      {/* reaction buttons */}
      <View style={[styles.selectionRow]}>
        {/* cross */}
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => {
              setShadowColor('black');
            }, 100);
          }}
          onPressIn={() => {
            crossAction();
          }}>
          <View
            style={[
              styles.roundBtn,
              {elevation: elevation, shadowColor: shadowColor},
            ]}>
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
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => {
              setShadowColor2('black');
            }, 100);
          }}
          onPressIn={() => {
            starAction();
          }}>
          <View
            style={[
              styles.roundBtn,
              {elevation: elevation, shadowColor: shadowColor2},
            ]}>
            <Image source={star} />
          </View>
        </TouchableOpacity>
      </View>

      {/* bottom bar */}
      {/* <View style={[styles.bottomNav]}> */}
      {/* <View style={[styles.navRow]}> */}
      {/* match */}
      {/* <TouchableOpacity onPress={() => navigationAction()}> */}
      {/* <Image source={match}></Image> */}
      {/* </TouchableOpacity> */}
      {/* notification */}
      {/* <TouchableOpacity> */}
      {/* <View> */}
      {/* <Image source={grayHeart}></Image> */}
      {/* <Image */}
      {/* style={{position: 'absolute', top: -4, right: -4}} */}
      {/* source={dot}></Image> */}
      {/* </View> */}
      {/* </TouchableOpacity> */}
      {/* message */}
      {/* <TouchableOpacity> */}
      {/* <Image source={message}></Image> */}
      {/* </TouchableOpacity> */}
      {/* profile */}
      {/* <TouchableOpacity onPress={() => navigationAction()}> */}
      {/* <Image source={people}></Image> */}
      {/* </TouchableOpacity> */}
      {/* </View> */}
      {/* </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#F3F3F3',
    width: '100%',
  },
  navRow: {
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
  },
  selectionRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.02,
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
    // elevation: 1,
    shadowOffset: {width: 0.5, height: -0.5},
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
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
    height: '95%',
    backgroundColor: '#ADAFBB',
    // height:0
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
    marginTop: 10,
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
    borderWidth: 1,
    borderColor: '#E8E6EA',
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
// const usersArr= [];
// async function u() {
//   try{
//     const users = await firestore().collection('users').get().then(querySnapshot => {
//       var i = 0;
//       querySnapshot.forEach(documentSnapshot => {
//         i++;
//         console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//         var data = documentSnapshot.data();
//         console.log(data.uid);
//         console.log(auth().currentUser.uid);
//         if(documentSnapshot.id!=auth().currentUser.uid){

//           usersArr.push({id:i,data:documentSnapshot.data()})
//         }

//       });
//       setUsers(usersArr);
//     });
//   }
//   catch(e){
//     console.log(e);
//   }

// }

// u();
