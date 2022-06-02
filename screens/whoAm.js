import React, {useState, useEffect} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import DropDown from '../components/dropDown';
import FlatListBasics from '../components/list';
import Picker from '../components/picker';
import CustomTextInput from '../components/CustomTextInput';
import ButtonWithTick from '../components/ButtonWithTick';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// react items
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
// global variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/grad.png');
const buttonBgOrange = require('../assets/orange.png');

let type = 'woman';
const WhoAm = props => {
  // console.log(props.route.params);
  // data variables
  var day = props.route.params.day;
  var month = props.route.params.month;
  var year = props.route.params.year;
  var fname = props.route.params.fname;
  var mname = props.route.params.mname;
  var lname = props.route.params.lname;
  // authentication variables
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [state1,setState1] = useState('active');
  const [state2,setState2] = useState('inactive');
  const [state3,setState3] = useState('inactive');
  

  // firestore refrence
  let db = firestore();

  // unused variables
  const [text, onChangeText] = React.useState('Useless Text');

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (user) {
      // console.log(user);
      // navigation.navigate('SelectLanguage', {name: 'Jane'});
    }

    if (initializing) setInitializing(false);
  }
  // keep track of changes in authetication
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
   
    return null;
  }

  
  // console.log(auth().currentUser);
  const navigationAction = params => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .update({
        gender: type,
      })
      //ensure we catch any errors at this stage to advise us if something does go wrong
      .catch(error => {
        console.log(
          'Something went wrong with added user to firestore: ',
          error,
        );
      });

    if (user) {
      saveData();
    }
   
    props.navigation.navigate('ChartScreen', {
      day: day,
      month: month,
      year: year,
      fname: fname,
      mname: mname,
      lname: lname,
    });
  };
  function saveData(params) {
    // db.collection('users').doc(user.uid).set({
    //   uid: user.uid,
    //   day: day,
    //   month: month,
    //   year: year,
    //   fname: fname,
    //   mname: mname,
    //   lname: lname,
    //   // king:'waseem is king'
    // }).then().catch((err) => console.log(err));
  }
  const skipAction = () =>{
    console.log('skip action');
  }
  const backAction = () =>{
    console.log('back action');
  }
  function womanSelected(params) {
    setState1('active')
    setState2('inactive')
    setState3('inactive')
    type = 'woman';
  }
  function manSelected(params) {
    setState1('inactive')
    setState2('active')
    setState3('inactive')
    type = 'man';
  }
  
  function otherSelected(params) {
    setState1('inactive')
    setState2('inactive')
    setState3('active')
    type = 'other';
  }
  // const onChangeText = params => {};
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView>
        <View style={styles.mainPage}>
          <View style = {[styles.topRow]}>
            
            <TouchableOpacity
              onPress={() => {
  
                backAction();
              }}>
              <View style={[styles.backBtn]}>
                <Text
                  style={[
                    {color: '#FFC700', fontSize: 20, fontWeight: 'bold'},
                  ]}>
                  {'<'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
  
              onPress={() => {
                skipAction();
              }}>
              <Text style={[styles.skipBtn]}>Skip</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.heading]}>I am a</Text>

          <View style={[styles.bottomBtn, {marginTop: '30%'}]}>
            <ButtonWithTick
              path="ChartScreen"
              fontType="normal"
              bgColor="white"
              borderColor="#E8E6EA"
              text="Woman"
              state = {state1}
              image={buttonBgOrange}
              btnAction={womanSelected}
              // navigation={navigation}
            ></ButtonWithTick>
          </View>
          <View style={[styles.bottomBtn]}>
            <ButtonWithTick
              path="ChartScreen"
              fontType="bold"
              bgColor="#FFC700"
              textColor="white"
              state = {state2}
              borderColor="#FFC700"
              text="Man"
              image={buttonBgOrange}
              btnAction={manSelected}
              //  navigation={navigation}
            ></ButtonWithTick>
          </View>
          <View style={[styles.bottomBtn]}>
            <ButtonWithTick
              path="ChartScreen"
              fontType="normal"
              state = {state3}
              bgColor="#FFC700"
              borderColor="#E8E6EA"
              text="Choose Another"
              image={buttonBgOrange}
              btnAction={otherSelected}
              // navigation={navigation}
            ></ButtonWithTick>
          </View>
          <View
            style={
              ([styles.bottomBtn], {position: 'absolute', bottom: 20, left: 40})
            }>
            <ButtonWithBg
              active="true"
              text="Confirm"
              image={buttonBgOrange}
              btnAction={navigationAction}></ButtonWithBg>
          </View>
        </View>
      </SafeAreaView>
      {/* </TouchableHighlight> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  topRow:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    marginRight:40,
    marginLeft:40,
    marginTop:'6%',
    // backgroundColor:'pink',
  },
  backBtn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  skipBtn: {
    color: '#FFC700',
    fontWeight: 'bold',
    // width: '10%',
    // backgroundColor:'red',
  },

  bottomBtn: {
    // position: 'absolute',
    // bottom: 40,
    marginTop: 10,
    marginLeft: 40,
  },
  mainPage: {
    flex: 1,
  },
  BackGrounimage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginTop: "7.6%",
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 40,
    marginRight: 40,
    color: 'black',
    // backgroundColor:'red',
    width: windowWidth - 80,
  },
});

export default WhoAm;
