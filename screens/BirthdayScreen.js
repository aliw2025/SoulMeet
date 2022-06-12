import React, {useState, useEffect, useContext} from 'react';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import DropDown from '../components/dropDown';
import FlatListBasics from '../components/list';
import Picker from '../components/picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Car} from '../Modals/user';
import {AuthContext} from '../navigation/AuthProvider';

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
const image2 = require('../assets/arrowDown.png');
var pday = 0;

const BirthDayScreen = ({navigation}) => {
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
  var [usrData, setUsrData] = useState(undefined);
  const [days, SetDays] = useState('');
  const [years, SetYears] = useState('');
  const [months, SetMonths] = useState('');
  const [nmonths, SetNmonths] = useState(1);
  const [initializing, setInitializing] = useState(true);

  function updateData(data) {
    if (data) {
      setUsrData(data);
      if (data.dob) {
        if (data.dob.day) {
          SetDays(data.dob.day);
        }
        if (data.dob.month) {
          SetMonths(month[data.dob.month - 1].key);
          SetNmonths(data.dob.month);
        }
        if (data.dob.year) {
          SetYears(data.dob.year);
        }
      }
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
          console.log('data is null');
        }
      });
    return () => subscriber();
  }, []);

  //  state variables for showing the listts
  const [zIndex1, setZIndex1] = useState(0);
  const [list1, setList1] = useState(false);
  const [list2, setList2] = useState(false);
  const [list3, setList3] = useState(false);
  const [pos, setPos] = useState('relative');

  // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // store reference of firebase user
  const {user} = useContext(AuthContext);

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
    SetDays(params.item.key);
    hideList();
  };
  /**
   * function to set month
   * run when a month is selected
   */
  const onMonthSelected = params => {
    SetMonths(params.item.key);
    SetNmonths(params.index + 1);
   
    hideList();
  };
  /**
   * function to set years
   * run when a day is selected
   */
  const onYearSelected = params => {
    SetYears(params.item.key);
    hideList();
  };
  // hide and unhide days list
  const btnAction = params => {
   
    if (list1 == false) {
      setList2(false);
      setList3(false);
      setList1(true);
      setZIndex1(1);
      setPos('absolute');
     
    } else if (list1 == true) {
      setList1(false);
    }
  };
  // hide and unhide Months list
  const btnAction2 = params => {
    
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
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .update({
        dob: {
          day: days,
          month: nmonths,
          year: years,
        },
      })
      //ensure we catch any errors at this stage to advise us if something does go wrong
      .catch(error => {
        console.log(
          'Something went wrong with added user to firestore: ',
          error,
        );
      });
    navigation.navigate('ProfileDetails1', {
      day: days,
      month: nmonths,
      year: years,
    });
  };

  const [listViewHeight, setViewHeight] = useState(0);
  function onSelect() {
    hideList();
  }

  initDays();
  initYears();

  var db = firestore();
  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}
      onTouchEnd={() => onSelect()}>
      {/* <TouchableHighlight onPress={hideList} underlayColor="clear"> */}

      <SafeAreaView>
        <View style={styles.mainPage}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.heading]}>
            Choose Birthday
          </Text>
          <View style={[styles.subHeading]}>
            <Text style={{textAlign: 'center'}}>
              {' '}
              Please Choose your exact date of Birth
            </Text>
          </View>
          {/* view to check  */}
          {(list1 || list2 || list3) && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}>
              <TouchableOpacity onPress={() => hideList()}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                  }}></View>
              </TouchableOpacity>
            </View>
          )}

          <View style={{zIndex: 3, position: 'absolute', top: '25%'}}>
            <DropDown
              feildName="Day"
              feildValue={days}
              btnAction={btnAction}></DropDown>
            {list1 && (
              <View style={[styles.dropList]}>
                <FlatListBasics
                  data={day}
                  onDaySelected={(index, item) =>
                    onDaySelected({index, item})
                  }></FlatListBasics>
              </View>
            )}
          </View>
          <View style={{zIndex: 2, position: 'absolute', top: '35%'}}>
            <DropDown
              feildName="Month"
              feildValue={months}
              btnAction={btnAction2}></DropDown>
            {list2 && (
              <View style={[styles.dropList]}>
                <FlatListBasics
                  data={month}
                  onDaySelected={(index, item) =>
                    onMonthSelected({index, item})
                  }></FlatListBasics>
              </View>
            )}
          </View>
          <View style={{zIndex: 1, position: 'absolute', top: '45%'}}>
            <DropDown
              feildName="year"
              feildValue={years}
              btnAction={btnAction3}></DropDown>
            {list3 && (
              <View style={[styles.dropList]}>
                <FlatListBasics
                  data={year}
                  onDaySelected={(index, item) =>
                    onYearSelected({index, item})
                  }></FlatListBasics>
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
              btnAction={navigationAction}
              navigation={navigation}></ButtonWithBg>
          </View>
        </View>
      </SafeAreaView>
      {/* </TouchableHighlight> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  dropList: {
    top: -15,
    left: 40,
    right: 40,
    borderTopColor: 'white',
    borderColor: '#E8E6EA',
    borderWidth: 1,
    // borderBottomLeftRadius:20,
    // position: 'absolute',
    // paddingLeft: 20,
    backgroundColor: 'white',
    height: 200,
    width: windowWidth - 80,
  },
  bottomBtn: {
    marginLeft: 40,
    marginRight: 40,
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
    width: windowWidth - 80,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 100,
    fontSize: 70,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    // backgroundColor:'pink'
  },
  subHeading: {
    width: windowWidth - 80,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 0,
    fontSize: 15,
    color: '#000000B2',

    // backgroundColor:'purple'
  },
});

export default BirthDayScreen;
