import React, {useState,useEffect} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import DropDown from '../components/dropDown';
import FlatListBasics from '../components/list';
import Picker from '../components/picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Car} from '../Modals/user'


// react items
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
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
var pday = 0;
const BirthDayScreen = ({navigation}) => {
  console.log('user is : ');
  fbuser.getData(); 
  // array for days
  var day = [];
  // array for years
  var year = [];
  // data array for months
  var month = [
    {key: 'January'},
    {key: 'Feburary'},
    {key: 'March'},
    {key: 'April'},
    {key: 'May'},
    {key: 'June'},
    {key: 'July'},
    {key: 'Augast'},
    {key: 'September'},
    {key: 'October'},
    {key: 'Novermber'},
    {key: 'December'},
  ];
  //  variable for storing location of the arrowDown image
  const image2 = require('../assets/arrowDown.png');
  
  // state variables for days
  const [days, SetDays] = useState('12');
  const [years,SetYears] = useState('2022');
  const [months,SetMonths] = useState('Feburary'); 
  const [nmonths,SetNmonths] = useState(2); 
  const [zIndex1,setZIndex1] = useState(0);
  //  state variables for showing the listts
  const [list1, setList1] = useState(false);
  const [list2, setList2] = useState(false);
  const [list3, setList3] = useState(false);
  const [pos,setPos] = useState('relative');
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  // store reference of firebase user
  const [user, setUser] = useState();
  
  // if (initializing) return null;
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if(user){
      // console.log(user);
      // navigation.navigate('SelectLanguage', {name: 'Jane'});
    }
   
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    console.log('initizing');
    return null;
  }

  //  function to initlaize the days
  function initDays() {
    // init days
    var len = 31;
    for (var i = 1; i <= len; i++) {
      var obj = {key: i.toString()};
      day.push(obj);
    }
  }

  //  function to initalize the years
  function initYears() {
    var len2 = 2022;
    for (var i = 2022; i > 1; i--) {
      var obj = {key: i.toString()};
      year.push(obj);
    }
  }

  /**
   * function to set days 
   * run when a day is selected
   */
  const onDaySelected = params => {
    //console.log("onDayselessdsdted");
    //console.log(params);
    // console.log(params.key);
    SetDays(params.item.key);
    hideList();
  };
   /**
   * function to set month 
   * run when a month is selected
   */
  const onMonthSelected = params => {
    console.log(params.item.key);
    SetMonths(params.item.key);
    SetNmonths(params.index+1);
    hideList();
  };
   /**
   * function to set years 
   * run when a day is selected
   */
  const onYearSelected = params => {
    console.log(params.item.key);
    SetYears(params.item.key);
    hideList();
  };
  // hide and unhide days list
  const btnAction = params => {
    //console.log(list1);
    if (list1 == false) {
      setList2(false);
      setList3(false);
      setList1(true);
      setZIndex1(1);
      setPos('absolute');
      console.log(pos);
    } else if (list1 == true) {
    
      setList1(false);
    }
  };
  // hide and unhide Months list
  const btnAction2 = params => {
    //console.log(list1);
    if (list2 == false) {
      setList1(false);
      setList3(false);
      setList2(true);
      setZIndex1(1);
      setPos('absolute');
    } else if (list2 == true) {
      setList2(false);
    }
  };
  // hide and unhide Years
  const btnAction3 = params => {
    //console.log(list1);
    if (list3 == false) {
      setList1(false);
      setList2(false);
      setList3(true);
      setZIndex1(1);
      setPos('absolute');
    } else if (list3 == true) {
      setList3(false);
    }
  };
  //  hide  all lists
  const hideList = params => {
    setList1(false);
    setList2(false);
    setList3(false);

  };
  const navigationAction = params => {
    pday = days
    navigation.navigate("ProfileDetails1",{day: days,month:nmonths,year:years});
  }
  function onSelect() {
    hideList();
  }
  
  initDays();
  initYears();

  var db = firestore();
  // console.log('adding data');
  // console.log('user db os '+db.collection('users'));
//   db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });



  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}
      onTouchEnd={() => onSelect()}
      >
      {/* <TouchableHighlight onPress={hideList} underlayColor="clear"> */}

      <SafeAreaView>
        <View style={styles.mainPage}>
          <Text  adjustsFontSizeToFit numberOfLines={1} style={[styles.heading]}>Choose Birthday</Text>
          <View style={[styles.subHeading]}>
            <Text>  Please Choose your exact date of Birth</Text>
          </View>
          { (list1 || list2 || list3 ) &&
            <View style = {{
              position:'absolute',
              top:0,
              bottom:0,
              left:0,
              right:0,
              // opacity:0.7,
            }}>
              <TouchableOpacity onPress={() => hideList()}>
              <View
                style={{
                  // backgroundColor: 'black',
                  width: '100%',
                  height: '100%',
                }}></View>
            </TouchableOpacity>
            </View>
          }
          <View style = {{zIndex :3}}>
            <DropDown
              feildName="Day"
              feildValue={days}
              btnAction={btnAction}></DropDown>
            {list1 && (
              <View style={[{zIndex: zIndex1,position:pos},styles.was]}>
                <FlatListBasics
                  data={day}
                  onDaySelected={(index,item)=>onDaySelected({index,item})}></FlatListBasics>
              </View>
            )}
          </View>
          <View style = {{zIndex :2}} >
            <DropDown
              feildName="Month"
              feildValue={months}
              btnAction={btnAction2}></DropDown>
            {list2 && (
              <View style={[{zIndex: zIndex1,position:pos},styles.was]}>
                <FlatListBasics data={month}  onDaySelected={(index,item)=>onMonthSelected({index,item})}></FlatListBasics>
              </View>
            )}
          </View>
          <View >
            <DropDown
              feildName="year"
              feildValue={years}
              btnAction={btnAction3}></DropDown>
            {list3 && (
              <View style={[{zIndex: zIndex1,position:pos},styles.was]}>
                <FlatListBasics data={year}  onDaySelected={(index,item)=>onYearSelected({index,item})}></FlatListBasics>
              </View>
            )}
          </View>
          {/* <Picker></Picker> */}
          <View style={[styles.bottomBtn]}>
            <ButtonWithBg
              // path="ProfileDetails1"
              active="true"
              text="Continue"
              image={buttonBgOrange}
              btnAction = {navigationAction}
              navigation={navigation}></ButtonWithBg>
          </View>
        </View>
      </SafeAreaView>
      {/* </TouchableHighlight> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  was: {
    top: 60,
    // zIndex: 1,
    // position: 'absolute',
    paddingLeft: 20,
    backgroundColor: 'white',
    height: 200,
    width: '80%',
    marginLeft: 40,
    marginRight: 40,
  },
  bottomBtn: {
    marginLeft:40,
    marginRight:40,
    position: 'absolute',
    bottom: 40,
  },
  textBox: {
    // backgroundColor:'red',
    marginTop: 40,
  },
  textBox2: {
    // backgroundColor:'red',
    marginTop: 10,
  },

  btn: {
    marginTop: 40,
  },
  container: {
    marginTop: 50,
    width: windowWidth * 0.8,
  },
  mainPage: {
    flex: 1,
    // alignItems: 'center',
  },
  btnBg: {
    // width: 300,
    height: 60,
    justifyContent: 'center',
    width: 320,
    // margin:20,
    // flex:1
  },
  BackGrounimage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    width:windowWidth - 80,
    marginLeft:40,
    marginRight:40,
    marginTop: 100,
    fontSize: 70  ,
    fontWeight: 'bold',
    color:'black',
    textAlign:'center',
   
  },
  subHeading: {
    width:windowWidth - 80,
    marginLeft:40,
    marginRight:40,
    marginTop: 0,
    fontSize: 15,
    color:'#000000B2',
    // backgroundColor:'purple'
  },
});

export default BirthDayScreen;
