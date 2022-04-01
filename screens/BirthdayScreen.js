import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import DropDown from '../components/dropDown';
import FlatListBasics from '../components/list';
import Picker from '../components/picker';

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

  // state variables for days
  const [days, SetDays] = useState('12');
  const [years,SetYears] = useState('2022');
  const [months,SetMonths] = useState('Feburary'); 
  const [nmonths,SetNmonths] = useState(1); 
  //  state variables for showing the listts
  const [list1, setList1] = useState(false);
  const [list2, setList2] = useState(false);
  const [list3, setList3] = useState(false);

  //  variable for storing location of the arrowDown image
  const image2 = require('../assets/arrowDown.png');

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
      setList1(true);
    } else if (list1 == true) {
      setList1(false);
    }
  };
  // hide and unhide Months list
  const btnAction2 = params => {
    //console.log(list1);
    if (list2 == false) {
      setList2(true);
    } else if (list2 == true) {
      setList2(false);
    }
  };
  // hide and unhide Years
  const btnAction3 = params => {
    //console.log(list1);
    if (list3 == false) {
      setList3(true);
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
  
  initDays();
  initYears();

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}
      onTouchEnd={() => onSelect()}>
      {/* <TouchableHighlight onPress={hideList} underlayColor="clear"> */}

      <SafeAreaView>
        <View style={styles.mainPage}>
          <Text style={[styles.heading]}> Choose Birthday</Text>
          <View style={[styles.subHeading]}>
            <Text>Please Choose your exact date of Birth</Text>
          </View>
          <View style={[{zIndex: 3}]}>
            <DropDown
              feildName="Day"
              feildValue={days}
              btnAction={btnAction}></DropDown>
            {list1 && (
              <View style={[styles.was]}>
                <FlatListBasics
                  data={day}
                  onDaySelected={(index,item)=>onDaySelected({index,item})}></FlatListBasics>
              </View>
            )}
          </View>
          <View style={[{zIndex: 2}]}>
            <DropDown
              feildName="Month"
              feildValue={months}
              btnAction={btnAction2}></DropDown>
            {list2 && (
              <View style={[styles.was]}>
                <FlatListBasics data={month}  onDaySelected={(index,item)=>onMonthSelected({index,item})}></FlatListBasics>
              </View>
            )}
          </View>
          <View style={[{zIndex: 1}]}>
            <DropDown
              feildName="year"
              feildValue={years}
              btnAction={btnAction3}></DropDown>
            {list3 && (
              <View style={[styles.was]}>
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
    position: 'absolute',
    paddingLeft: 20,
    backgroundColor: 'white',
    height: 200,
    width: '80%',
    marginLeft: 40,
    marginRight: 40,
  },
  bottomBtn: {
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
    alignItems: 'center',
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
    marginTop: 100,
    fontSize: 40,
    fontWeight: 'bold',
  },
  subHeading: {
    marginTop: 10,
    fontSize: 15,
    width: windowWidth * 0.75,
  },
});

export default BirthDayScreen;
