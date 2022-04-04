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

//  the screen component
const ChartScreen = props => {
  // console.log(props.route.params);
  var day = props.route.params.day;
  var month = props.route.params.month;
  var year = props.route.params.year;
  var stval = '';

  stval = stval.concat(
    year.toString(),
    '-',
    day.toString(),
    '-',
    month.toString(),
  );
  console.log(stval);

  const sum = (arr = []) => {
    // if (arr.length === 1) {
    //   return +arr[0];
    // }
    let total = arr.reduce((acc, val) => acc + val);
    if (total < 10 || total == 11 || total == 22 || total == 33) {
      return total;
    }
    return sum(String(total).split('').map(Number));
  };

  const sumAll = (arr = []) => {

    let total = arr.reduce((acc, val) => acc + val);
    if (total<10) {
      return {reduced:total,total:total};
    }else{
      let reduced = String(total).split('').map(Number).reduce((acc, val) => acc + val);
      return {reduced:reduced,total:total};
    }
    
  };
  // function to calculate life path number
  const CalLifePathNumber = (date = '') => {
    // function to sum individual dates months year
    // function to sum final answer
    
    let [year, month, day] = date.split('-');
    year = sum(String(year).split('').map(Number));
    month = sum(String(month).split('').map(Number));
    day = sum(String(day).split('').map(Number));

    return sumAll([year, month, day]);
  };


  let lpnObj = CalLifePathNumber(stval); 
  var lpnText = '';
  lpnText = lpnText.concat(lpnObj.total,'\/',lpnObj.reduced);
 
  
  function calBirhtDayNumber(day) {
    
    if(day<10){
      return {reduced:day,total:day};
    }else{
      let reduced = String(day).split('').map(Number).reduce((acc, val) => acc + val);
      return {reduced:reduced,total:day};
    }

  }

  let bnObj  = calBirhtDayNumber(day);
  var bnText = '';
  bnText = bnText.concat(bnObj.total,'\/',bnObj.reduced);

  var stack = []
  const sumFinal = (arr = []) => {
    // if (arr.length === 1) {
    //   return +arr[0];
    // }
    let total = arr.reduce((acc, val) => acc + val);
    if (total < 10 || total == 11 || total == 22 || total == 33) {
      return total;
    }
    // console.log("pushin :"+total);
    stack.push(total);
    return sumFinal(String(total).split('').map(Number));
  };
  function convetToText(total) {
    var text = '';
    if(stack.length==0 || total==11 || total ==22 || total == 33){
      text = text.concat(total.toString());
    }else{
      text = text.concat(stack[stack.length-1].toString(),'\/',total.toString());
    }
    return text
  }

  function calExpressionNumber(fname,mname,lname) {
    let c = 'c';
    
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();

    var fval = sum(fname.split('').map((val)=>val.charCodeAt(0)-96));
    var mval = sum(mname.split('').map((val)=>val.charCodeAt(0)-96));
    var lval = sum(lname.split('').map((val)=>val.charCodeAt(0)-96));
   
    var total = sumFinal([fval,mval,lval]);
    var text  = convetToText(total);  
    return text;
  }
  
  let expText = calExpressionNumber('waseem','ali','khan');
  

  stack = []
  function calMinorExpressionNumber(fname,lname) {

    fname = fname.toLowerCase();
    lname = lname.toLowerCase();  
    var fval = sum(fname.split('').map((val)=>val.charCodeAt(0)-96));
    // console.log(fval);
    var lval = sum(lname.split('').map((val)=>val.charCodeAt(0)-96));
    // console.log(lval);
    var total = sumFinal([fval,lval]);
    var text  = convetToText(total);  
    return text;
  }

  
  let mExpText = calMinorExpressionNumber('waseem','ali');
  var stack = []

  function calDesireNumber(fname,mname,lname) {

    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();
 
    var fval = sum(fname.match(/[aeiou]/gi).map((val)=>val.charCodeAt(0)-96));
    var mval = sum(mname.match(/[aeiou]/gi).map((val)=>val.charCodeAt(0)-96));
    var lval = sum(lname.match(/[aeiou]/gi).map((val)=>val.charCodeAt(0)-96));

    var total = sumFinal([fval,mval,lval]);
    var text  = convetToText(total);  
    return text;
  }

  let  desireText = calDesireNumber('Waseem','ali','khan');
  var stack = []

  function calMinorDesireNumber(fname,lname) {

    fname = fname.toLowerCase();
    lname = lname.toLowerCase();
 
    var fval = sum(fname.match(/[aeiou]/gi).map((val)=>val.charCodeAt(0)-96));
    var lval = sum(lname.match(/[aeiou]/gi).map((val)=>val.charCodeAt(0)-96));
    var total = sumFinal([fval,lval]);
    var text  = convetToText(total);  
    return text;
  }

  let mDesireText =calMinorDesireNumber('Waseem','ali');
  
  var stack = []

  function calPersonNumber(fname,mname,lname) {

    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();
   
    var fval = sum(fname.match(/[^aeiou]/gi).map((val)=>val.charCodeAt(0)-96));
    // console.log("fval: "+fval);
    var mval = sum(mname.match(/[^aeiou]/gi).map((val)=>val.charCodeAt(0)-96));
    // console.log("mval: "+mval);
    var lval = sum(lname.match(/[^aeiou]/gi).map((val)=>val.charCodeAt(0)-96));
    // console.log("lval: "+lval);
    var total = sumFinal([fval,mval,lval]);
    var text  = convetToText(total);  
    return text;
  }

  let personText = calPersonNumber('Waseem','ali','khan');
  var stack = []

  function calMpersonNumber(fname,lname) {

    fname = fname.toLowerCase();
    lname = lname.toLowerCase();
    var fval = sum(fname.match(/[^aeiou]/gi).map((val)=>val.charCodeAt(0)-96));
    var lval = sum(lname.match(/[^aeiou]/gi).map((val)=>val.charCodeAt(0)-96));
    var total = sumFinal([fval,lval]);
    var text  = convetToText(total);  
    return text;
  }
  let mPersonText = calMpersonNumber('Waseem','ali');

  function calBridgeNumber(val1,val2){
    console.log('IAML '+val1.split('/').map(Number)[0]);
    val1 = val1.split('/').map(Number)[0]
    val1 = String(val1).split('').map(Number).reduce((acc,val)=>acc+val);
    val2 = val2.split('/').map(Number)[0]
    val2 = String(val2).split('').map(Number).reduce((acc,val)=>acc+val);
    var res = parseInt(val2) - parseInt(val1);
    return res.toString();
  }

  let lpExpBrText = calBridgeNumber(lpn,exp);
  let hdPerBrText = calBridgeNumber(desireText,personText);


  [lpn, seLpn] = useState(lpnText);
  [bn,setBn] = useState(bnText);
  [exp,setExp] = useState(expText);
  [mExp,setMexp] = useState(mExpText);


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
                value={lpn}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Birthday Number"
                value={bn}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                heading="Expression / Destiny"
                value={exp}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                heading="Minor Expression / Destiny"
                value={mExp}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                heading="Soul Urge / Heart’s Desire"
                value={desireText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                heading="Minor Soul Urge / Heart’s Desire"
                value={mDesireText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                heading="Personality"
                value={personText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                heading="Minor Personality"
                value={mPersonText}></ValueBox>
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
                value={lpExpBrText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Heart’s Desire/ Personality
                Bridge, Planes of Expression"
                value={hdPerBrText}></ValueBox>
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
              <View style={[{marginLeft: 40, marginTop: 40, marginBottom: 30}]}>
                <ButtonWithBg
                  path="ProfileDetails1"
                  active="true"
                  text="Next"></ButtonWithBg>
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
    width: windowWidth * 0.8,
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
